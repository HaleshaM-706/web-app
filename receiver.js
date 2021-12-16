const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// TODO: change uri to url everywhere
// TODO: standardise the customData headers
// Globals variables for storing DRM information
let token = null;
let licenseUri = null;
let ssmUri = null;
let ssmClient = null;

// Intecept load media requests and extract custom data from them
playerManager.setMessageInterceptor(
  cast.framework.messages.MessageType.LOAD,
  loadInterceptor);

// store custom data in globals
function loadInterceptor(loadRequestData) {
  // reset previous DRM data
  token = null;
  licenseUri = null;
  ssmUri = null;
  ssmClient = null;

  // not every load request will have a customData object
  if (
    loadRequestData.media
    && loadRequestData.media.customData
    && loadRequestData.media.customData['token']
    && loadRequestData.media.customData['widevineLicenceUri']
  ) {
    token = loadRequestData.media.customData['token'];
    licenseUri = loadRequestData.media.customData['widevineLicenceUri'];

    playbackConfig.licenseUrl = licenseUri;
    playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;

    if (loadRequestData.media.customData['ssmUri']) {
      // setup playback config as SSM session
      ssmUri = loadRequestData.media.customData['ssmUri'];
      ssmClient = new SsmClient(ssmUri, token);
      ssmClient.setup();
    }
  }

  // you must return the loadRequestData object
  return loadRequestData;
}

const playbackConfig = new cast.framework.PlaybackConfig();
playbackConfig.licenseRequestHandler = licenseRequestHandler;

function licenseRequestHandler(networkRequestInfo) {
  // Passthrough for clear content
  if (!token) {
    return networkRequestInfo;
  }

  if (!licenseUri) {
    console.error("No license URI provided");
  }

  if (ssmClient) {
    if (ssmClient.licenseRequested) { // Renewal request
      console.log("SSM license renewal requested");
      reqInfo.content = ssmClient.packagePayload(reqInfo.content);
      reqInfo.url = ssmClient.renewalUrl();
      reqInfo.headers["nv-authorizations"] = ssmClient.sessionToken;
      reqInfo.headers["content-type"] = "application/json";
    } else { // First licence request
      console.log("SSM initial license requested");
      reqInfo.headers["nv-authorizations"] = ssmClient.token();

      ssmClient.licenseRequested = true;
    }
  } else {
    reqInfo.headers["nv-authorizations"] = token;
  }

  networkRequestInfo.headers.Accept = "application/octet-stream";
  networkRequestInfo.headers["content-type"] = "application/octet-stream";
  networkRequestInfo.headers["nv-authorisations"] = token;

  return networkRequestInfo;
}

// TODO this needs to be changed to a function that returns a promise
let licenseHandler_ = playbackConfig.licenseHandler;
playbackConfig.licenseHandler = licenseHandler;

function licenseHandler(license) {
  if (ssmClient) {
    return ssmClient.unpackageLicense(license);
  }
  return licenseHandler_(license);
}

const options = new cast.framework.CastReceiverOptions();
options.maxInactivity = 3600; //Development only
options.playbackConfig = playbackConfig;

// starts the Cast application
context.start(options);

/**
 * Class to wrap SSM server calls
 */
class SsmClient {
  constructor(baseUrl, wholeToken) {
    this.baseUrl = baseUrl + "/v1";
    this.wholeToken = wholeToken;
    this.baseToken = wholeToken;
    if (this.baseToken.includes(",")) {
      this.baseToken = this.baseToken.split(",")[0];
    }
    this.sessionToken = null;
    this.licenseRequested = false;
  }

  token() {
    return `${this.wholeToken},${this.sessionToken}`;
  }

  renewalToken() {
    return `${this.baseToken},${this.sessionToken}`;
  }

  renewalUrl() {
    return `${this.baseUrl}/renewal-license-wv`;
  }


  /*
   * This needs to be called once playback is requested and before licences are requested.
   */
  setup() {
    var self = this;
    var endpoint = this.baseUrl + "/sessions/setup";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          var response = JSON.parse(this.responseText);
          self.sessionToken = response.sessionToken;
        } else {
          console.error(`SSM setup failed with status ${this.status}`);
        }
      }
    };
    xhttp.open("POST", endpoint, false);
    xhttp.setRequestHeader("nv-authorizations", this.wholeToken)
    xhttp.send();
  }

  /**
   * This needs to be called whenever a playback session is stopped on the cast device.
   */
  teardown() {
    if (this.sessionToken == null) {
      console.warn("Attempted to teardown with no existing session")
      return;
    }
    var endpoint = this.baseUrl + "/sessions/teardown";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          console.error("SSM teardown successful");
        } else {
          console.error(`SSM teardown failed with status ${this.status}`);
        }
      }
    };
    xhttp.open("POST", endpoint, false);
    xhttp.setRequestHeader("nv-authorizations", this.sessionToken)
    xhttp.send();
  }

  /**
   * When passing in a license response will check for JSON formatting and
   * return the first license in the object otherwise returns the
   * response unchanged.
   *
   * For SSM unpackaging the licence exposes the licence and a renewed session token.
   * @param {Uint8Array} response a byte array from the licence server
   */
  unpackageLicense(response) {
    console.log("Unpackaging license")
    let license = response;
    try {
      let responseStr = String.fromCharCode(...new Uint8Array(response));
      let responseObj = JSON.parse(responseStr);
      license = Uint8Array.from(atob(responseObj.license), c => c.charCodeAt(0));

      console.log("Storing renewed session token");
      ssmClient.sessionToken = responseObj.sessionToken;
    } catch (e) {
      //intentionally empty
    }
    return license;
  }

  /**
   * When inputting an EME licence-request message payload will return
   * a stringified json blob suitable for passing to SSP
   * @param {Uint8Array} message a byte array from EME request
   */
  packagePayload(message) {
    let base64String = btoa(String.fromCharCode(...new Uint8Array(message)));
    return `{"challenge":"${base64String}"}`;
  }
}
