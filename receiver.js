var Player = function(mediaElement) {
  var namespace = 'urn:x-cast:com.google.ads.interactivemedia.dai.cast';
  var self = this;
  this.castPlayer_ = null;
  this.startTime_ = 0;
  this.adIsPlaying_ = false;
  this.mediaElement_ = mediaElement;
  this.receiverManager_ = cast.receiver.CastReceiverManager.getInstance();
  this.receiverManager_.onSenderConnected = function(event) {
    console.log('Sender Connected');
  };
  this.receiverManager_.onSenderDisconnected =
      this.onSenderDisconnected.bind(this);
  this.imaMessageBus_ = this.receiverManager_.getCastMessageBus(namespace);
  this.imaMessageBus_.onMessage = function(event) {
    console.log('Received message from sender: ' + event.data);
    var message = event.data.split(',');
    var method = message[0];
    switch (method) {
      case 'getContentTime':
        var contentTime = self.getContentTime_();
        self.broadcast_('contentTime,' + contentTime);
        break;
      default:
        self.broadcast_('Message not recognized');
        break;
    }
  };

  this.mediaManager_ = new cast.receiver.MediaManager(this.mediaElement_);
  this.mediaManager_.onLoad = this.onLoad.bind(this);
  this.mediaManager_.onSeek = this.onSeek.bind(this);
  this.initStreamManager_();
};

/**
 * Called on receipt of a LOAD message from the sender.
 * @param {!cast.receiver.MediaManager.Event} event The load event.
 */
 Player.prototype.onLoad = function(event) {
  /*
   * imaRequestData contains:
   *   for Live requests:
   *     {
   *       assetKey: <ASSET_KEY>
   *     }
   *   for VOD requests:
   *     {
   *       contentSourceId: <CMS_ID>,
   *       videoID: <VIDEO_ID>
   *     }
   *  These can also be set as properties on this.streamRequest after
   *  initializing with no constructor parameter.
   */
  var imaRequestData = event.data.media.customData;
  this.startTime_ = imaRequestData.startTime;
  if (imaRequestData.assetKey) {
    this.streamRequest =
      new google.ima.dai.api.LiveStreamRequest(imaRequestData);
  } else if (imaRequestData.contentSourceId) {
    this.streamRequest =
      new google.ima.dai.api.VODStreamRequest(imaRequestData);
  }
  this.streamManager_.requestStream(this.streamRequest);
  document.getElementById('splash').style.display = 'none';
};

/**
 * Processes the SEEK event from the sender.
 * @param {!cast.receiver.MediaManager.Event} event The seek event.
 * @this {Player}
 */
Player.prototype.onSeek = function(event) {
  var currentTime = event.data.currentTime;
  this.seek_(currentTime);
  this.mediaManager_.broadcastStatus(true, event.data.requestId);
};

/**
 * Initializes receiver stream manager and adds callbacks.
 * @private
 */
 Player.prototype.initStreamManager_ = function() {
  var self = this;
  this.streamManager_ =
      new google.ima.dai.api.StreamManager(this.mediaElement_);
  var onStreamDataReceived = this.onStreamDataReceived.bind(this);
  this.streamManager_.addEventListener(
      google.ima.dai.api.StreamEvent.Type.LOADED,
      function(event) {
        var streamUrl = event.getStreamData().url;
        // Each element in subtitles array is an object with url and language
        // properties. Example of a subtitles array with 2 elements:
        // {
        //   "url": "http://www.sis.com/1234/subtitles_en.ttml",
        //   "language": "en"
        // }, {
        //   "url": "http://www.sis.com/1234/subtitles_fr.ttml",
        //   "language": "fr"
        // }
        self.subtitles = event.getStreamData().subtitles;
        onStreamDataReceived(streamUrl);
      },
      false);
  this.streamManager_.addEventListener(
      google.ima.dai.api.StreamEvent.Type.ERROR,
      function(event) {
        var errorMessage = event.getStreamData().errorMessage;
        self.broadcast_(errorMessage);
      },
      false);
  this.streamManager_.addEventListener(
      google.ima.dai.api.StreamEvent.Type.COMPLETE,
      function(event) {
        self.broadcast_('complete');
      },
      false);
  this.streamManager_.addEventListener(
      google.ima.dai.api.StreamEvent.Type.AD_BREAK_STARTED,
      function(event) {
        self.adIsPlaying_ = true;
        self.broadcast_('ad_break_started');
      },
      false);
  this.streamManager_.addEventListener(
      google.ima.dai.api.StreamEvent.Type.AD_BREAK_ENDED,
      function(event) {
        self.adIsPlaying_ = false;
        self.broadcast_('ad_break_ended');
      },
  false);
};

/**
 * Loads stitched ads+content stream.
 * @param {!string} url of the stream.
 */
Player.prototype.onStreamDataReceived = function(url) {
  var self = this;
  var host = new cast.player.api.Host({
    'url': url,
    'mediaElement': this.mediaElement_
  });
  this.broadcast_('onStreamDataReceived: ' + url);
  host.processMetadata = function(type, data, timestamp) {
    this.streamManager_.processMetadata(type, data, timestamp);
  };
  var currentTime = this.startTime_ > 0 ? this.streamManager_
    .streamTimeForContentTime(this.startTime_) : 0;
  this.broadcast_('start time: ' + currentTime);
  this.castPlayer_ = new cast.player.api.Player(host);
  this.castPlayer_.load(
    cast.player.api.CreateHlsStreamingProtocol(host), currentTime);
  if (this.subtitles[0] && this.subtitles[0].ttml) {
    this.castPlayer_.enableCaptions(true, 'ttml', this.subtitles[0].ttml);
  }
};

/**
 * Gets content time for the stream.
 * @return {number} The content time.
 * @private
 */
 Player.prototype.getContentTime_ = function() {
  return this.streamManager_
      .contentTimeForStreamTime(this.mediaElement_.currentTime);
};

/**
 * Sends messages to all connected sender apps.
 * @param {!string} message Message to be sent to senders.
 * @private
 */
Player.prototype.broadcast_ = function(message) {
  if (this.imaMessageBus_ && this.imaMessageBus_.broadcast) {
    this.imaMessageBus_.broadcast(message);
  }
};

/**
 * Seeks player to location.
 * @param {number} time The time to seek to in seconds.
 * @private
 */
Player.prototype.seek_ = function(time) {
  if (this.adIsPlaying_) {
    return;
  }
  this.mediaElement_.currentTime = time;
  this.broadcast_('Seeking to: ' + time);
};

/**
 * Starts receiver manager which tracks playback of the stream.
 */
 Player.prototype.start = function() {
  this.receiverManager_.start();
};

/**
 * Called when a sender disconnects from the app.
 * @param {cast.receiver.CastReceiverManager.SenderDisconnectedEvent} event
 */
Player.prototype.onSenderDisconnected = function(event) {
  console.log('onSenderDisconnected');
  // When the last or only sender is connected to a receiver,
  // tapping Disconnect stops the app running on the receiver.
  if (this.receiverManager_.getSenders().length === 0 &&
      event.reason ===
          cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
    this.receiverManager_.stop();
  }
};