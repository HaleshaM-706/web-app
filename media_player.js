// Copyright Google Inc. All Rights Reserved.
(function () {
	/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
	'use strict';
	var k, aa = function (a) {
			var b = 0;
			return function () {
				return b < a&&a.length!=0?a.length:0 ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			}
		},
		ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
			if (a == Array.prototype || a == Object.prototype) return a;
			a[b] = c.value;
			return a
		},
		ca = function (a) {
			a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c
			}
			throw Error("Cannot find global object");
		},
		da = ca(this),
		ea = function (a, b) {
			if (b) a: {
				var c = da;a = a.split(".");
				for (var d = 0; d < a.length - 1; d++) {
					var e = a[d];
					if (!(e in c)) break a;
					c = c[e]
				}
				a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
					configurable: !0,
					writable: !0,
					value: b
				})
			}
		};
	ea("Symbol", function (a) {
		if (a) return a;
		var b = function (f, g) {
			this.tm = f;
			ba(this, "description", {
				configurable: !0,
				writable: !0,
				value: g
			})
		};
		b.prototype.toString = function () {
			return this.tm
		};
		var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
			d = 0,
			e = function (f) {
				if (this instanceof e) throw new TypeError("Symbol is not a constructor");
				return new b(c + (f || "") + "_" + d++, f)
			};
		return e
	});
	ea("Symbol.iterator", function (a) {
		if (a) return a;
		a = Symbol("Symbol.iterator");
		for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
			var d = da[b[c]];
			"function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function () {
					return fa(aa(this))
				}
			})
		}
		return a
	});
	var fa = function (a) {
			a = {
				next: a
			};
			a[Symbol.iterator] = function () {
				return this
			};
			return a
		},
		n = function (a) {
			var b = "undefined" != typeof Symbol && Symbol.iterator && (a&&a.length!=0)?a[Symbol.iterator]:null;
			return b ? b.call(a) : {
				next: aa(a)
			}
		},
		ha = function (a) {
			for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
			return c
		},
		ia = "function" == typeof Object.create ? Object.create : function (a) {
			var b = function () {};
			b.prototype = a;
			return new b
		},
		ka;
	if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
	else {
		var la;
		a: {
			var ma = {
					a: !0
				},
				na = {};
			try {
				na.__proto__ = ma;
				la = na.a;
				break a
			} catch (a) {}
			la = !1
		}
		ka = la ? function (a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var oa = ka,
		p = function (a, b) {
			a.prototype = ia(b.prototype);
			a.prototype.constructor = a;
			if (oa) oa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c];
			a.se = b.prototype
		},
		pa = pa || {},
		r = this || self,
		qa = function () {},
		ra = function (a) {
			a.Oi = void 0;
			a.Te = function () {
				return a.Oi ? a.Oi : a.Oi = new a
			}
		},
		sa = function (a) {
			var b = typeof a;
			return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
		},
		ta = function (a) {
			var b = sa(a);
			return "array" ==
				b || "object" == b && "number" == typeof a.length
		},
		ua = function (a) {
			var b = typeof a;
			return "object" == b && null != a || "function" == b
		},
		wa = function (a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		xa = function (a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function () {
					var e = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(e, d);
					return a.apply(b, e)
				}
			}
			return function () {
				return a.apply(b, arguments)
			}
		},
		ya = function (a, b, c) {
			ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
				wa : xa;
			return ya.apply(null, arguments)
		},
		t = function (a, b) {
			a = a.split(".");
			var c = r;
			a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
			for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
		},
		za = function (a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.se = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.ko = function (d, e, f) {
				for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
				return b.prototype[e].apply(d,
					g)
			}
		},
		Aa = function (a) {
			return a
		};
	var Ba = r.cast || {},
		cast = null;

	function Ca() {
		return !(!Ba.__platform__ || !Ba.__platform__.metrics)
	}

	function Da(a, b) {
		Ca() && Ba.__platform__.metrics.logBoolToUma(a, b)
	}

	function Ea(a) {
		Ca() && Ba.__platform__.metrics.logEventToUma(a)
	}

	function v(a, b) {
		Ca() && Ba.__platform__.metrics.logIntToUma(a, b)
	};

	function Fa(a) {
		if (Error.captureStackTrace) Error.captureStackTrace(this, Fa);
		else {
			var b = Error().stack;
			b && (this.stack = b)
		}
		a && (this.message = String(a))
	}
	za(Fa, Error);
	Fa.prototype.name = "CustomError";
	var Ga = function (a, b) {
		a = a.split("%s");
		for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
		Fa.call(this, c + a[d])
	};
	za(Ga, Fa);
	Ga.prototype.name = "AssertionError";
	var Ha = function (a, b) {
		throw new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
	};
	var Ia = Array.prototype.indexOf ? function (a, b) {
			return Array.prototype.indexOf.call(a, b, void 0)
		} : function (a, b) {
			if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
			for (var c = 0; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		},
		Ja = Array.prototype.lastIndexOf ? function (a, b) {
			return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
		} : function (a, b) {
			var c = a.length - 1;
			0 > c && (c = Math.max(0, a.length + c));
			if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
			for (; 0 <= c; c--)
				if (c in a && a[c] === b) return c;
			return -1
		},
		Ka = Array.prototype.map ? function (a, b) {
			return Array.prototype.map.call(a, b, void 0)
		} : function (a, b) {
			for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d
		};

	function La(a, b) {
		b = Ia(a, b);
		var c;
		(c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
		return c
	}

	function Ma(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	};
	var Na = function (a, b) {
		this.kn = 100;
		this.Km = a;
		this.Mn = b;
		this.ah = 0;
		this.Hg = null
	};
	Na.prototype.get = function () {
		if (0 < this.ah) {
			this.ah--;
			var a = this.Hg;
			this.Hg = a.next;
			a.next = null
		} else a = this.Km();
		return a
	};
	Na.prototype.put = function (a) {
		this.Mn(a);
		this.ah < this.kn && (this.ah++, a.next = this.Hg, this.Hg = a)
	};
	var Pa = function (a, b) {
			return 0 == Oa(b, a.substr(0, b.length))
		},
		Qa = String.prototype.trim ? function (a) {
			return a.trim()
		} : function (a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
		},
		Oa = function (a, b) {
			a = String(a).toLowerCase();
			b = String(b).toLowerCase();
			return a < b ? -1 : a == b ? 0 : 1
		},
		Ra = function (a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		};
	var Sa;
	a: {
		var Ta = r.navigator;
		if (Ta) {
			var Ua = Ta.userAgent;
			if (Ua) {
				Sa = Ua;
				break a
			}
		}
		Sa = ""
	}
	var Va = function (a) {
		return -1 != Sa.indexOf(a)
	};

	function Wa(a, b) {
		for (var c in a)
			if (b.call(void 0, a[c], c, a)) return !0;
		return !1
	}

	function Xa(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = a[d];
		return b
	}

	function Ya(a) {
		var b = [],
			c = 0,
			d;
		for (d in a) b[c++] = d;
		return b
	}

	function Za(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b
	}

	function $a(a) {
		if (!a || "object" !== typeof a) return a;
		if ("function" === typeof a.clone) return a.clone();
		if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
		if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
		var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
			c;
		for (c in a) b[c] = $a(a[c]);
		return b
	}
	var ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

	function bb(a, b) {
		for (var c, d, e = 1; e < arguments.length; e++) {
			d = arguments[e];
			for (c in d) a[c] = d[c];
			for (var f = 0; f < ab.length; f++) c = ab[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};
	var cb;
	var db = {},
		eb = function (a, b) {
			this.Sl = b === db ? a : ""
		};
	eb.prototype.toString = function () {
		return this.Sl.toString()
	};
	var fb = function (a) {
			if (a instanceof eb && a.constructor === eb) return a.Sl;
			Ha("expected object of type SafeStyle, got '" + a + "' of type " + sa(a));
			return "type_error:SafeStyle"
		},
		gb = new eb("", db);
	var hb = {},
		ib = function (a, b, c) {
			this.Rl = c === hb ? a : ""
		};
	ib.prototype.toString = function () {
		return this.Rl.toString()
	};
	var jb = function (a) {
		if (void 0 === cb) {
			var b = null;
			var c = r.trustedTypes;
			if (c && c.createPolicy) try {
				b = c.createPolicy("goog#html", {
					createHTML: Aa,
					createScript: Aa,
					createScriptURL: Aa
				})
			} catch (d) {
				r.console && r.console.error(d.message)
			}
			cb = b
		}
		a = (b = cb) ? b.createHTML(a) : a;
		return new ib(a, null, hb)
	};
	var kb = function (a, b) {
		var c = a.parseFromString;
		b instanceof ib && b.constructor === ib ? b = b.Rl : (Ha("expected object of type SafeHtml, got '" + b + "' of type " + sa(b)), b = "type_error:SafeHtml");
		return c.call(a, b, "text/xml")
	};
	var lb = function (a) {
		lb[" "](a);
		return a
	};
	lb[" "] = qa;
	var nb = function (a) {
		var b = mb;
		return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : b[9] = a(9)
	};
	var ob = Va("Opera"),
		pb = Va("Trident") || Va("MSIE"),
		qb = Va("Edge"),
		rb = Va("Gecko") && !(-1 != Sa.toLowerCase().indexOf("webkit") && !Va("Edge")) && !(Va("Trident") || Va("MSIE")) && !Va("Edge"),
		sb = -1 != Sa.toLowerCase().indexOf("webkit") && !Va("Edge"),
		tb;
	a: {
		var ub = "",
			vb = function () {
				var a = Sa;
				if (rb) return /rv:([^\);]+)(\)|;)/.exec(a);
				if (qb) return /Edge\/([\d\.]+)/.exec(a);
				if (pb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (sb) return /WebKit\/(\S+)/.exec(a);
				if (ob) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();vb && (ub = vb ? vb[1] : "");
		if (pb) {
			var wb, xb = r.document;
			wb = xb ? xb.documentMode : void 0;
			if (null != wb && wb > parseFloat(ub)) {
				tb = String(wb);
				break a
			}
		}
		tb = ub
	}
	var yb = tb,
		mb = {},
		zb = function () {
			return nb(function () {
				for (var a = 0, b = Qa(String(yb)).split("."), c = Qa("9").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
					var f = b[e] || "",
						g = c[e] || "";
					do {
						f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
						g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
						if (0 == f[0].length && 0 == g[0].length) break;
						a = Ra(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ra(0 == f[2].length, 0 == g[2].length) || Ra(f[2], g[2]);
						f = f[3];
						g = g[3]
					} while (0 == a)
				}
				return 0 <= a
			})
		};
	var Ab = function (a) {
		var b = document;
		a = String(a);
		"application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
		return b.createElement(a)
	};
	var Bb, Cb = function () {
		var a = r.MessageChannel;
		"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Va("Presto") && (a = function () {
			var e = Ab("IFRAME");
			e.style.display = "none";
			document.documentElement.appendChild(e);
			var f = e.contentWindow;
			e = f.document;
			e.open();
			e.close();
			var g = "callImmediate" + Math.random(),
				h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
			e = ya(function (l) {
				if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
			}, this);
			f.addEventListener("message", e, !1);
			this.port1 = {};
			this.port2 = {
				postMessage: function () {
					f.postMessage(g, h)
				}
			}
		});
		if ("undefined" !== typeof a && !Va("Trident") && !Va("MSIE")) {
			var b = new a,
				c = {},
				d = c;
			b.port1.onmessage = function () {
				if (void 0 !== c.next) {
					c = c.next;
					var e = c.yk;
					c.yk = null;
					e()
				}
			};
			return function (e) {
				d.next = {
					yk: e
				};
				d = d.next;
				b.port2.postMessage(0)
			}
		}
		return function (e) {
			r.setTimeout(e, 0)
		}
	};

	function Db(a) {
		r.setTimeout(function () {
			throw a;
		}, 0)
	};
	var Eb = function () {
		this.Ph = this.Fe = null
	};
	Eb.prototype.add = function (a, b) {
		var c = Fb.get();
		c.set(a, b);
		this.Ph ? this.Ph.next = c : this.Fe = c;
		this.Ph = c
	};
	Eb.prototype.remove = function () {
		var a = null;
		this.Fe && (a = this.Fe, this.Fe = this.Fe.next, this.Fe || (this.Ph = null), a.next = null);
		return a
	};
	var Fb = new Na(function () {
			return new Gb
		}, function (a) {
			return a.reset()
		}),
		Gb = function () {
			this.next = this.scope = this.Xd = null
		};
	Gb.prototype.set = function (a, b) {
		this.Xd = a;
		this.scope = b;
		this.next = null
	};
	Gb.prototype.reset = function () {
		this.next = this.scope = this.Xd = null
	};
	var Lb = function (a, b) {
			Hb || Ib();
			Jb || (Hb(), Jb = !0);
			Kb.add(a, b)
		},
		Hb, Ib = function () {
			if (r.Promise && r.Promise.resolve) {
				var a = r.Promise.resolve(void 0);
				Hb = function () {
					a.then(Mb)
				}
			} else Hb = function () {
				var b = Mb;
				"function" !== typeof r.setImmediate || r.Window && r.Window.prototype && !Va("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (Bb || (Bb = Cb()), Bb(b)) : r.setImmediate(b)
			}
		},
		Jb = !1,
		Kb = new Eb,
		Mb = function () {
			for (var a; a = Kb.remove();) {
				try {
					a.Xd.call(a.scope)
				} catch (b) {
					Db(b)
				}
				Fb.put(a)
			}
			Jb = !1
		};
	var Nb = function (a, b) {
		this.Gm = a[r.Symbol.iterator]();
		this.ln = b;
		this.qn = 0
	};
	Nb.prototype[Symbol.iterator] = function () {
		return this
	};
	Nb.prototype.next = function () {
		var a = this.Gm.next();
		return {
			value: a.done ? void 0 : this.ln.call(void 0, a.value, this.qn++),
			done: a.done
		}
	};
	var Ob = function (a, b) {
		return new Nb(a, b)
	};
	var Pb = Object.freeze || function (a) {
		return a
	};
	var w = function () {
		this.Oe = this.Oe;
		this.bh = this.bh
	};
	w.prototype.Oe = !1;
	w.prototype.N = function () {
		this.Oe || (this.Oe = !0, this.M())
	};
	w.prototype.M = function () {
		if (this.bh)
			for (; this.bh.length;) this.bh.shift()()
	};
	var Qb = function (a, b) {
		this.type = a;
		this.currentTarget = this.target = b;
		this.defaultPrevented = this.Ff = !1
	};
	Qb.prototype.stopPropagation = function () {
		this.Ff = !0
	};
	Qb.prototype.preventDefault = function () {
		this.defaultPrevented = !0
	};
	var Rb = function () {
		if (!r.addEventListener || !Object.defineProperty) return !1;
		var a = !1,
			b = Object.defineProperty({}, "passive", {
				get: function () {
					a = !0
				}
			});
		try {
			r.addEventListener("test", qa, b), r.removeEventListener("test", qa, b)
		} catch (c) {}
		return a
	}();
	var Sb = function (a, b) {
		Qb.call(this, a ? a.type : "");
		this.relatedTarget = this.currentTarget = this.target = null;
		this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
		this.key = "";
		this.charCode = this.keyCode = 0;
		this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
		this.state = null;
		this.pointerId = 0;
		this.pointerType = "";
		this.bd = null;
		a && this.qa(a, b)
	};
	za(Sb, Qb);
	var Tb = Pb({
		2: "touch",
		3: "pen",
		4: "mouse"
	});
	Sb.prototype.qa = function (a, b) {
		var c = this.type = a.type,
			d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		if (b = a.relatedTarget) {
			if (rb) {
				a: {
					try {
						lb(b.nodeName);
						var e = !0;
						break a
					} catch (f) {}
					e = !1
				}
				e || (b = null)
			}
		} else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
		this.relatedTarget = b;
		d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
			d.screenY || 0) : (this.offsetX = sb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = sb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
		this.button = a.button;
		this.keyCode = a.keyCode || 0;
		this.key = a.key || "";
		this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.pointerId =
			a.pointerId || 0;
		this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Tb[a.pointerType] || "";
		this.state = a.state;
		this.bd = a;
		a.defaultPrevented && Sb.se.preventDefault.call(this)
	};
	Sb.prototype.stopPropagation = function () {
		Sb.se.stopPropagation.call(this);
		this.bd.stopPropagation ? this.bd.stopPropagation() : this.bd.cancelBubble = !0
	};
	Sb.prototype.preventDefault = function () {
		Sb.se.preventDefault.call(this);
		var a = this.bd;
		a.preventDefault ? a.preventDefault() : a.returnValue = !1
	};
	var Ub = "closure_listenable_" + (1E6 * Math.random() | 0);
	var Vb = 0;
	var Wb = function (a, b, c, d, e) {
			this.listener = a;
			this.mh = null;
			this.src = b;
			this.type = c;
			this.capture = !!d;
			this.Gg = e;
			this.key = ++Vb;
			this.Mf = this.fg = !1
		},
		Xb = function (a) {
			a.Mf = !0;
			a.listener = null;
			a.mh = null;
			a.src = null;
			a.Gg = null
		};
	var Yb = function (a) {
		this.src = a;
		this.Ja = {};
		this.Xf = 0
	};
	Yb.prototype.add = function (a, b, c, d, e) {
		var f = a.toString();
		a = this.Ja[f];
		a || (a = this.Ja[f] = [], this.Xf++);
		var g = Zb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.fg = !1)) : (b = new Wb(b, this.src, f, !!d, e), b.fg = c, a.push(b));
		return b
	};
	Yb.prototype.remove = function (a, b, c, d) {
		a = a.toString();
		if (!(a in this.Ja)) return !1;
		var e = this.Ja[a];
		b = Zb(e, b, c, d);
		return -1 < b ? (Xb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.Ja[a], this.Xf--), !0) : !1
	};
	var $b = function (a, b) {
		var c = b.type;
		c in a.Ja && La(a.Ja[c], b) && (Xb(b), 0 == a.Ja[c].length && (delete a.Ja[c], a.Xf--))
	};
	Yb.prototype.Ci = function (a, b, c, d) {
		a = this.Ja[a.toString()];
		var e = -1;
		a && (e = Zb(a, b, c, d));
		return -1 < e ? a[e] : null
	};
	Yb.prototype.hasListener = function (a, b) {
		var c = void 0 !== a,
			d = c ? a.toString() : "",
			e = void 0 !== b;
		return Wa(this.Ja, function (f) {
			for (var g = 0; g < f.length; ++g)
				if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
			return !1
		})
	};
	var Zb = function (a, b, c, d) {
		for (var e = 0; e < a.length; ++e) {
			var f = a[e];
			if (!f.Mf && f.listener == b && f.capture == !!c && f.Gg == d) return e
		}
		return -1
	};
	var ac = "closure_lm_" + (1E6 * Math.random() | 0),
		cc = {},
		dc = 0,
		x = function (a, b, c, d, e) {
			if (d && d.once) ec(a, b, c, d, e);
			else if (Array.isArray(b))
				for (var f = 0; f < b.length; f++) x(a, b[f], c, d, e);
			else c = fc(c), a && a[Ub] ? a.Fb.add(String(b), c, !1, ua(d) ? !!d.capture : !!d, e) : gc(a, b, c, !1, d, e)
		},
		gc = function (a, b, c, d, e, f) {
			if (!b) throw Error("Invalid event type");
			var g = ua(e) ? !!e.capture : !!e,
				h = hc(a);
			h || (a[ac] = h = new Yb(a));
			c = h.add(b, c, d, g, f);
			if (!c.mh) {
				d = ic();
				c.mh = d;
				d.src = a;
				d.listener = c;
				if (a.addEventListener) Rb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
					d, e);
				else if (a.attachEvent) a.attachEvent(jc(b.toString()), d);
				else if (a.addListener && a.removeListener) a.addListener(d);
				else throw Error("addEventListener and attachEvent are unavailable.");
				dc++
			}
		},
		ic = function () {
			var a = kc,
				b = function (c) {
					return a.call(b.src, b.listener, c)
				};
			return b
		},
		ec = function (a, b, c, d, e) {
			if (Array.isArray(b))
				for (var f = 0; f < b.length; f++) ec(a, b[f], c, d, e);
			else c = fc(c), a && a[Ub] ? a.Fb.add(String(b), c, !0, ua(d) ? !!d.capture : !!d, e) : gc(a, b, c, !0, d, e)
		},
		y = function (a, b, c, d, e) {
			if (Array.isArray(b))
				for (var f =
						0; f < b.length; f++) y(a, b[f], c, d, e);
			else d = ua(d) ? !!d.capture : !!d, c = fc(c), a && a[Ub] ? a.Fb.remove(String(b), c, d, e) : a && (a = hc(a)) && (b = a.Ci(b, c, d, e)) && lc(b)
		},
		lc = function (a) {
			if ("number" !== typeof a && a && !a.Mf) {
				var b = a.src;
				if (b && b[Ub]) $b(b.Fb, a);
				else {
					var c = a.type,
						d = a.mh;
					b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(jc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
					dc--;
					(c = hc(b)) ? ($b(c, a), 0 == c.Xf && (c.src = null, b[ac] = null)) : Xb(a)
				}
			}
		},
		jc = function (a) {
			return a in cc ?
				cc[a] : cc[a] = "on" + a
		},
		kc = function (a, b) {
			if (a.Mf) a = !0;
			else {
				b = new Sb(b, this);
				var c = a.listener,
					d = a.Gg || a.src;
				a.fg && lc(a);
				a = c.call(d, b)
			}
			return a
		},
		hc = function (a) {
			a = a[ac];
			return a instanceof Yb ? a : null
		},
		mc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
		fc = function (a) {
			if ("function" === typeof a) return a;
			a[mc] || (a[mc] = function (b) {
				return a.handleEvent(b)
			});
			return a[mc]
		};
	var nc = function () {
		w.call(this);
		this.Fb = new Yb(this);
		this.wm = this;
		this.tj = null
	};
	za(nc, w);
	nc.prototype[Ub] = !0;
	nc.prototype.addEventListener = function (a, b, c, d) {
		x(this, a, b, c, d)
	};
	nc.prototype.removeEventListener = function (a, b, c, d) {
		y(this, a, b, c, d)
	};
	nc.prototype.dispatchEvent = function (a) {
		var b, c = this.tj;
		if (c)
			for (b = []; c; c = c.tj) b.push(c);
		c = this.wm;
		var d = a.type || a;
		if ("string" === typeof a) a = new Qb(a, c);
		else if (a instanceof Qb) a.target = a.target || c;
		else {
			var e = a;
			a = new Qb(d, c);
			bb(a, e)
		}
		e = !0;
		if (b)
			for (var f = b.length - 1; !a.Ff && 0 <= f; f--) {
				var g = a.currentTarget = b[f];
				e = oc(g, d, !0, a) && e
			}
		a.Ff || (g = a.currentTarget = c, e = oc(g, d, !0, a) && e, a.Ff || (e = oc(g, d, !1, a) && e));
		if (b)
			for (f = 0; !a.Ff && f < b.length; f++) g = a.currentTarget = b[f], e = oc(g, d, !1, a) && e;
		return e
	};
	nc.prototype.M = function () {
		nc.se.M.call(this);
		if (this.Fb) {
			var a = this.Fb,
				b = 0,
				c;
			for (c in a.Ja) {
				for (var d = a.Ja[c], e = 0; e < d.length; e++) ++b, Xb(d[e]);
				delete a.Ja[c];
				a.Xf--
			}
		}
		this.tj = null
	};
	var oc = function (a, b, c, d) {
		b = a.Fb.Ja[String(b)];
		if (!b) return !0;
		b = b.concat();
		for (var e = !0, f = 0; f < b.length; ++f) {
			var g = b[f];
			if (g && !g.Mf && g.capture == c) {
				var h = g.listener,
					l = g.Gg || g.src;
				g.fg && $b(a.Fb, g);
				e = !1 !== h.call(l, d) && e
			}
		}
		return e && !d.defaultPrevented
	};
	nc.prototype.Ci = function (a, b, c, d) {
		return this.Fb.Ci(String(a), b, c, d)
	};
	nc.prototype.hasListener = function (a, b) {
		return this.Fb.hasListener(void 0 !== a ? String(a) : void 0, b)
	};
	var pc = "StopIteration" in r ? r.StopIteration : {
			message: "StopIteration",
			stack: ""
		},
		qc = function () {};
	qc.prototype.next = function () {
		return qc.prototype.ge.call(this)
	};
	qc.prototype.ge = function () {
		throw pc;
	};
	qc.prototype.Jd = function () {
		return this
	};
	var vc = function (a) {
			if (a instanceof rc || a instanceof sc || a instanceof tc) return a;
			if ("function" == typeof a.next) return new rc(function () {
				return uc(a)
			});
			if ("function" == typeof a[Symbol.iterator]) return new rc(function () {
				return a[Symbol.iterator]()
			});
			if ("function" == typeof a.Jd) return new rc(function () {
				return uc(a.Jd())
			});
			throw Error("Not an iterator or iterable.");
		},
		uc = function (a) {
			if (!(a instanceof qc)) return a;
			var b = !1;
			return {
				next: function () {
					for (var c; !b;) try {
						c = a.ge();
						break
					} catch (d) {
						if (d !== pc) throw d;
						b = !0
					}
					return {
						value: c,
						done: b
					}
				}
			}
		},
		rc = function (a) {
			this.Ai = a
		};
	rc.prototype.Jd = function () {
		return new sc(this.Ai())
	};
	rc.prototype[Symbol.iterator] = function () {
		return new tc(this.Ai())
	};
	rc.prototype.Zj = function () {
		return new tc(this.Ai())
	};
	var sc = function (a) {
		this.gf = a
	};
	p(sc, qc);
	sc.prototype.ge = function () {
		var a = this.gf.next();
		if (a.done) throw pc;
		return a.value
	};
	sc.prototype.next = function () {
		return sc.prototype.ge.call(this)
	};
	sc.prototype[Symbol.iterator] = function () {
		return new tc(this.gf)
	};
	sc.prototype.Zj = function () {
		return new tc(this.gf)
	};
	var tc = function (a) {
		rc.call(this, function () {
			return a
		});
		this.gf = a
	};
	p(tc, rc);
	tc.prototype.next = function () {
		return this.gf.next()
	};
	var wc = function (a, b) {
		this.name = a;
		this.value = b
	};
	wc.prototype.toString = function () {
		return this.name
	};
	var xc = new wc("OFF", Infinity),
		yc = new wc("SEVERE", 1E3),
		zc = new wc("WARNING", 900),
		Ac = new wc("INFO", 800),
		Bc = new wc("CONFIG", 700),
		Cc = new wc("FINE", 500),
		Dc = [xc, new wc("SHOUT", 1200), yc, zc, Ac, Bc, Cc, new wc("FINER", 400), new wc("FINEST", 300), new wc("ALL", 0)],
		Ec = null,
		Fc = function () {
			this.gg = 0;
			this.clear()
		},
		Gc;
	Fc.prototype.clear = function () {
		this.Ya = Array(this.gg);
		this.Gk = -1;
		this.el = !1
	};
	var Hc = function (a, b, c) {
		this.ui = null;
		this.reset(a || xc, b, c, void 0, void 0)
	};
	Hc.prototype.reset = function (a, b, c, d, e) {
		this.ue = d || Date.now();
		this.pl = a;
		this.pn = b;
		this.rl = c;
		this.ui = null;
		this.yd = "number" === typeof e ? e : Ic
	};
	var Ic = 0,
		Jc = function (a, b) {
			this.level = null;
			this.Vk = [];
			this.parent = (void 0 === b ? null : b) || null;
			this.children = [];
			this.bj = {
				Ha: function () {
					return a
				}
			}
		},
		Kc = function (a) {
			if (a.level) return a.level;
			if (a.parent) return Kc(a.parent);
			Ha("Root logger has no level set.");
			return xc
		},
		Lc = function (a, b) {
			for (; a;) a.Vk.forEach(function (c) {
				c(b)
			}), a = a.parent
		},
		Mc = function () {
			this.entries = {};
			var a = new Jc("");
			a.level = Bc;
			this.entries[""] = a
		},
		Nc, Oc = function (a, b, c) {
			var d = a.entries[b];
			if (d) return void 0 !== c && (d.level = c), d;
			d = Oc(a, b.substr(0,
				b.lastIndexOf(".")));
			var e = new Jc(b, d);
			a.entries[b] = e;
			d.children.push(e);
			void 0 !== c && (e.level = c);
			return e
		},
		Pc = function () {
			Nc || (Nc = new Mc);
			return Nc
		},
		z = function (a) {
			return Oc(Pc(), a, void 0).bj
		},
		Qc = function (a, b, c) {
			var d;
			if (d = a)
				if (d = a && b) {
					d = b.value;
					var e = a ? Kc(Oc(Pc(), a.Ha())) : xc;
					d = d >= e.value
				}
			if (d) {
				b = b || xc;
				d = Oc(Pc(), a.Ha());
				"function" === typeof c && (c = c());
				Gc || (Gc = new Fc);
				e = Gc;
				a = a.Ha();
				if (0 < e.gg) {
					var f = (e.Gk + 1) % e.gg;
					e.Gk = f;
					e.el ? (e = e.Ya[f], e.reset(b, c, a), a = e) : (e.el = f == e.gg - 1, a = e.Ya[f] = new Hc(b, c, a))
				} else a =
					new Hc(b, c, a);
				Lc(d, a)
			}
		},
		A = function (a, b) {
			a && Qc(a, yc, b)
		},
		B = function (a, b) {
			a && Qc(a, zc, b)
		},
		D = function (a, b) {
			a && Qc(a, Ac, b)
		},
		Rc = function (a, b) {
			a && Qc(a, Cc, b)
		};
	var Sc = function () {};
	Sc.prototype.vk = null;
	var Uc = function (a) {
		var b;
		(b = a.vk) || (b = {}, Tc(a) && (b[0] = !0, b[1] = !0), b = a.vk = b);
		return b
	};
	var Vc, Wc = function () {};
	za(Wc, Sc);
	var Xc = function (a) {
			return (a = Tc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
		},
		Tc = function (a) {
			if (!a.$k && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
				for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
					var d = b[c];
					try {
						return new ActiveXObject(d), a.$k = d
					} catch (e) {}
				}
				throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
			}
			return a.$k
		};
	Vc = new Wc;
	var Yc = function (a, b) {
		this.ob = {};
		this.sa = [];
		this.oa = this.size = 0;
		var c = arguments.length;
		if (1 < c) {
			if (c % 2) throw Error("Uneven number of arguments");
			for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else a && this.addAll(a)
	};
	k = Yc.prototype;
	k.dd = function () {
		return this.size
	};
	k.$a = function () {
		Zc(this);
		for (var a = [], b = 0; b < this.sa.length; b++) a.push(this.ob[this.sa[b]]);
		return a
	};
	k.ac = function () {
		Zc(this);
		return this.sa.concat()
	};
	k.Ke = function (a) {
		return this.has(a)
	};
	k.has = function (a) {
		return $c(this.ob, a)
	};
	k.$b = function (a) {
		if (this === a) return !0;
		if (this.size != a.dd()) return !1;
		var b = ad;
		Zc(this);
		for (var c, d = 0; c = this.sa[d]; d++)
			if (!b(this.get(c), a.get(c))) return !1;
		return !0
	};
	var ad = function (a, b) {
		return a === b
	};
	Yc.prototype.eb = function () {
		return 0 == this.size
	};
	Yc.prototype.clear = function () {
		this.ob = {};
		this.oa = this.size = this.sa.length = 0
	};
	Yc.prototype.remove = function (a) {
		return this.delete(a)
	};
	Yc.prototype.delete = function (a) {
		return $c(this.ob, a) ? (delete this.ob[a], --this.size, this.oa++, this.sa.length > 2 * this.size && Zc(this), !0) : !1
	};
	var Zc = function (a) {
		if (a.size != a.sa.length) {
			for (var b = 0, c = 0; b < a.sa.length;) {
				var d = a.sa[b];
				$c(a.ob, d) && (a.sa[c++] = d);
				b++
			}
			a.sa.length = c
		}
		if (a.size != a.sa.length) {
			var e = {};
			for (c = b = 0; b < a.sa.length;) d = a.sa[b], $c(e, d) || (a.sa[c++] = d, e[d] = 1), b++;
			a.sa.length = c
		}
	};
	k = Yc.prototype;
	k.get = function (a, b) {
		return $c(this.ob, a) ? this.ob[a] : b
	};
	k.set = function (a, b) {
		$c(this.ob, a) || (this.size += 1, this.sa.push(a), this.oa++);
		this.ob[a] = b
	};
	k.addAll = function (a) {
		if (a instanceof Yc)
			for (var b = a.ac(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
		else
			for (b in a) this.set(b, a[b])
	};
	k.forEach = function (a, b) {
		for (var c = this.ac(), d = 0; d < c.length; d++) {
			var e = c[d],
				f = this.get(e);
			a.call(b, f, e, this)
		}
	};
	k.clone = function () {
		return new Yc(this)
	};
	k.keys = function () {
		return vc(this.Jd(!0)).Zj()
	};
	k.values = function () {
		return vc(this.Jd(!1)).Zj()
	};
	k.entries = function () {
		var a = this;
		return Ob(this.keys(), function (b) {
			return [b, a.get(b)]
		})
	};
	k.Jd = function (a) {
		Zc(this);
		var b = 0,
			c = this.oa,
			d = this,
			e = new qc;
		e.ge = function () {
			if (c != d.oa) throw Error("The map has changed since the iterator was created");
			if (b >= d.sa.length) throw pc;
			var f = d.sa[b++];
			return a ? f : d.ob[f]
		};
		e.next = e.ge.bind(e);
		return e
	};
	var $c = function (a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};
	var bd = function (a) {
			if (a.$a && "function" == typeof a.$a) return a.$a();
			if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
			if ("string" === typeof a) return a.split("");
			if (ta(a)) {
				for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
				return b
			}
			return Xa(a)
		},
		cd = function (a) {
			if (a.ac && "function" == typeof a.ac) return a.ac();
			if (!a.$a || "function" != typeof a.$a) {
				if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
				if (!("undefined" !== typeof Set &&
						a instanceof Set)) {
					if (ta(a) || "string" === typeof a) {
						var b = [];
						a = a.length;
						for (var c = 0; c < a; c++) b.push(c);
						return b
					}
					return Ya(a)
				}
			}
		},
		dd = function (a, b, c) {
			if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
			else if (ta(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
			else
				for (var d = cd(a), e = bd(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
		};
	var gd = function (a) {
			this.l = 0;
			this.Wl = void 0;
			this.Md = this.yc = this.ud = null;
			this.Fg = this.vi = !1;
			if (a != qa) try {
				var b = this;
				a.call(void 0, function (c) {
					ed(b, 2, c)
				}, function (c) {
					if (!(c instanceof fd)) try {
						if (c instanceof Error) throw c;
						throw Error("Promise rejected.");
					} catch (d) {}
					ed(b, 3, c)
				})
			} catch (c) {
				ed(this, 3, c)
			}
		},
		hd = function () {
			this.next = this.context = this.he = this.uf = this.ad = null;
			this.bg = !1
		};
	hd.prototype.reset = function () {
		this.context = this.he = this.uf = this.ad = null;
		this.bg = !1
	};
	var id = new Na(function () {
			return new hd
		}, function (a) {
			a.reset()
		}),
		jd = function (a, b, c) {
			var d = id.get();
			d.uf = a;
			d.he = b;
			d.context = c;
			return d
		};
	gd.prototype.then = function (a, b, c) {
		return kd(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
	};
	gd.prototype.$goog_Thenable = !0;
	gd.prototype.cancel = function (a) {
		if (0 == this.l) {
			var b = new fd(a);
			Lb(function () {
				ld(this, b)
			}, this)
		}
	};
	var ld = function (a, b) {
			if (0 == a.l)
				if (a.ud) {
					var c = a.ud;
					if (c.yc) {
						for (var d = 0, e = null, f = null, g = c.yc; g && (g.bg || (d++, g.ad == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
						e && (0 == c.l && 1 == d ? ld(c, b) : (f ? (d = f, d.next == c.Md && (c.Md = d), d.next = d.next.next) : md(c), nd(c, e, 3, b)))
					}
					a.ud = null
				} else ed(a, 3, b)
		},
		pd = function (a, b) {
			a.yc || 2 != a.l && 3 != a.l || od(a);
			a.Md ? a.Md.next = b : a.yc = b;
			a.Md = b
		},
		kd = function (a, b, c, d) {
			var e = jd(null, null, null);
			e.ad = new gd(function (f, g) {
				e.uf = b ? function (h) {
					try {
						var l = b.call(d, h);
						f(l)
					} catch (m) {
						g(m)
					}
				} : f;
				e.he = c ? function (h) {
					try {
						var l =
							c.call(d, h);
						void 0 === l && h instanceof fd ? g(h) : f(l)
					} catch (m) {
						g(m)
					}
				} : g
			});
			e.ad.ud = a;
			pd(a, e);
			return e.ad
		};
	gd.prototype.bo = function (a) {
		this.l = 0;
		ed(this, 2, a)
	};
	gd.prototype.co = function (a) {
		this.l = 0;
		ed(this, 3, a)
	};
	var ed = function (a, b, c) {
			if (0 == a.l) {
				a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
				a.l = 1;
				a: {
					var d = c,
						e = a.bo,
						f = a.co;
					if (d instanceof gd) {
						pd(d, jd(e || qa, f || null, a));
						var g = !0
					} else {
						if (d) try {
							var h = !!d.$goog_Thenable
						} catch (m) {
							h = !1
						} else h = !1;
						if (h) d.then(e, f, a), g = !0;
						else {
							if (ua(d)) try {
								var l = d.then;
								if ("function" === typeof l) {
									qd(d, l, e, f, a);
									g = !0;
									break a
								}
							} catch (m) {
								f.call(a, m);
								g = !0;
								break a
							}
							g = !1
						}
					}
				}
				g || (a.Wl = c, a.l = b, a.ud = null, od(a), 3 != b || c instanceof fd || rd(a, c))
			}
		},
		qd = function (a, b, c, d, e) {
			var f = !1,
				g = function (l) {
					f ||
						(f = !0, c.call(e, l))
				},
				h = function (l) {
					f || (f = !0, d.call(e, l))
				};
			try {
				b.call(a, g, h)
			} catch (l) {
				h(l)
			}
		},
		od = function (a) {
			a.vi || (a.vi = !0, Lb(a.Um, a))
		},
		md = function (a) {
			var b = null;
			a.yc && (b = a.yc, a.yc = b.next, b.next = null);
			a.yc || (a.Md = null);
			return b
		};
	gd.prototype.Um = function () {
		for (var a; a = md(this);) nd(this, a, this.l, this.Wl);
		this.vi = !1
	};
	var nd = function (a, b, c, d) {
			if (3 == c && b.he && !b.bg)
				for (; a && a.Fg; a = a.ud) a.Fg = !1;
			if (b.ad) b.ad.ud = null, sd(b, c, d);
			else try {
				b.bg ? b.uf.call(b.context) : sd(b, c, d)
			} catch (e) {
				td.call(null, e)
			}
			id.put(b)
		},
		sd = function (a, b, c) {
			2 == b ? a.uf.call(a.context, c) : a.he && a.he.call(a.context, c)
		},
		rd = function (a, b) {
			a.Fg = !0;
			Lb(function () {
				a.Fg && td.call(null, b)
			})
		},
		td = Db,
		fd = function (a) {
			Fa.call(this, a)
		};
	za(fd, Fa);
	fd.prototype.name = "cancel";
	var ud = function (a, b, c) {
		if ("function" === typeof a) c && (a = ya(a, c));
		else if (a && "function" == typeof a.handleEvent) a = ya(a.handleEvent, a);
		else throw Error("Invalid listener argument");
		return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
	};
	var vd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
		wd = function (a, b) {
			if (a) {
				a = a.split("&");
				for (var c = 0; c < a.length; c++) {
					var d = a[c].indexOf("="),
						e = null;
					if (0 <= d) {
						var f = a[c].substring(0, d);
						e = a[c].substring(d + 1)
					} else f = a[c];
					b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
				}
			}
		};
	var F = function (a) {
		nc.call(this);
		this.headers = new Yc;
		this.Th = a || null;
		this.wc = !1;
		this.Sh = this.C = null;
		this.ol = this.qf = "";
		this.ec = 0;
		this.lf = "";
		this.gd = this.Li = this.Jg = this.si = !1;
		this.sc = 0;
		this.ya = null;
		this.Of = "";
		this.Oh = this.Jn = this.Ee = !1;
		this.bk = null
	};
	za(F, nc);
	F.prototype.ta = z("goog.net.XhrIo");
	var xd = /^https?$/i,
		yd = ["POST", "PUT"],
		zd = function (a) {
			a.Of = "arraybuffer"
		};
	F.prototype.setTrustToken = function (a) {
		this.bk = a
	};
	F.prototype.send = function (a, b, c, d) {
		if (this.C) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.qf + "; newUri=" + a);
		b = b ? b.toUpperCase() : "GET";
		this.qf = a;
		this.lf = "";
		this.ec = 0;
		this.ol = b;
		this.si = !1;
		this.wc = !0;
		this.C = this.li();
		this.Sh = this.Th ? Uc(this.Th) : Uc(Vc);
		this.C.onreadystatechange = ya(this.Il, this);
		this.Jn && "onprogress" in this.C && (this.C.onprogress = ya(function (f) {
			this.Gl(f, !0)
		}, this), this.C.upload && (this.C.upload.onprogress = ya(this.Gl, this)));
		try {
			Rc(this.ta, Ad(this, "Opening Xhr")),
				this.Li = !0, this.C.open(b, String(a), !0), this.Li = !1
		} catch (f) {
			Rc(this.ta, Ad(this, "Error opening Xhr: " + f.message));
			Bd(this, f);
			return
		}
		a = c || "";
		var e = this.headers.clone();
		d && dd(d, function (f, g) {
			e.set(g, f)
		});
		d = e.ac().find(function (f) {
			return "content-type" == f.toLowerCase()
		});
		c = r.FormData && a instanceof r.FormData;
		!(0 <= Ia(yd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		e.forEach(function (f, g) {
			this.C.setRequestHeader(g, f)
		}, this);
		this.Of && (this.C.responseType = this.Of);
		"withCredentials" in
		this.C && this.C.withCredentials !== this.Ee && (this.C.withCredentials = this.Ee);
		if ("setTrustToken" in this.C && this.bk) try {
			this.C.setTrustToken(this.bk)
		} catch (f) {
			Rc(this.ta, Ad(this, "Error SetTrustToken: " + f.message))
		}
		try {
			Cd(this), 0 < this.sc && (this.Oh = Dd(this.C), Rc(this.ta, Ad(this, "Will abort after " + this.sc + "ms if incomplete, xhr2 " + this.Oh)), this.Oh ? (this.C.timeout = this.sc, this.C.ontimeout = ya(this.lm, this)) : this.ya = ud(this.lm, this.sc, this)), Rc(this.ta, Ad(this, "Sending request")), this.Jg = !0, this.C.send(a),
				this.Jg = !1
		} catch (f) {
			Rc(this.ta, Ad(this, "Send error: " + f.message)), Bd(this, f)
		}
	};
	var Dd = function (a) {
		return pb && zb() && "number" === typeof a.timeout && void 0 !== a.ontimeout
	};
	F.prototype.li = function () {
		return this.Th ? Xc(this.Th) : Xc(Vc)
	};
	F.prototype.lm = function () {
		"undefined" != typeof pa && this.C && (this.lf = "Timed out after " + this.sc + "ms, aborting", this.ec = 8, Rc(this.ta, Ad(this, this.lf)), this.dispatchEvent("timeout"), this.abort(8))
	};
	var Bd = function (a, b) {
			a.wc = !1;
			a.C && (a.gd = !0, a.C.abort(), a.gd = !1);
			a.lf = b;
			a.ec = 5;
			Ed(a);
			Fd(a)
		},
		Ed = function (a) {
			a.si || (a.si = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
		};
	F.prototype.abort = function (a) {
		this.C && this.wc && (Rc(this.ta, Ad(this, "Aborting")), this.wc = !1, this.gd = !0, this.C.abort(), this.gd = !1, this.ec = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fd(this))
	};
	F.prototype.M = function () {
		this.C && (this.wc && (this.wc = !1, this.gd = !0, this.C.abort(), this.gd = !1), Fd(this, !0));
		F.se.M.call(this)
	};
	F.prototype.Il = function () {
		this.Oe || (this.Li || this.Jg || this.gd ? Gd(this) : this.xn())
	};
	F.prototype.xn = function () {
		Gd(this)
	};
	var Gd = function (a) {
		if (a.wc && "undefined" != typeof pa)
			if (a.Sh[1] && 4 == Hd(a) && 2 == Id(a)) Rc(a.ta, Ad(a, "Local request error detected and ignored"));
			else if (a.Jg && 4 == Hd(a)) ud(a.Il, 0, a);
		else if (a.dispatchEvent("readystatechange"), 4 == Hd(a)) {
			Rc(a.ta, Ad(a, "Request complete"));
			a.wc = !1;
			try {
				var b = Id(a);
				a: switch (b) {
					case 200:
					case 201:
					case 202:
					case 204:
					case 206:
					case 304:
					case 1223:
						var c = !0;
						break a;
					default:
						c = !1
				}
				var d;
				if (!(d = c)) {
					var e;
					if (e = 0 === b) {
						var f = String(a.qf).match(vd)[1] || null;
						if (!f && r.self && r.self.location) {
							var g =
								r.self.location.protocol;
							f = g.substr(0, g.length - 1)
						}
						e = !xd.test(f ? f.toLowerCase() : "")
					}
					d = e
				}
				if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");
				else {
					a.ec = 6;
					try {
						var h = 2 < Hd(a) ? a.C.statusText : ""
					} catch (l) {
						Rc(a.ta, "Can not get status: " + l.message), h = ""
					}
					a.lf = h + " [" + Id(a) + "]";
					Ed(a)
				}
			} finally {
				Fd(a)
			}
		}
	};
	F.prototype.Gl = function (a, b) {
		this.dispatchEvent(Jd(a, "progress"));
		this.dispatchEvent(Jd(a, b ? "downloadprogress" : "uploadprogress"))
	};
	var Jd = function (a, b) {
			return {
				type: b,
				lengthComputable: a.lengthComputable,
				loaded: a.loaded,
				total: a.total
			}
		},
		Fd = function (a, b) {
			if (a.C) {
				Cd(a);
				var c = a.C,
					d = a.Sh[0] ? qa : null;
				a.C = null;
				a.Sh = null;
				b || a.dispatchEvent("ready");
				try {
					c.onreadystatechange = d
				} catch (e) {
					A(a.ta, "Problem encountered resetting onreadystatechange: " + e.message)
				}
			}
		},
		Cd = function (a) {
			a.C && a.Oh && (a.C.ontimeout = null);
			a.ya && (r.clearTimeout(a.ya), a.ya = null)
		};
	F.prototype.$e = function () {
		return !!this.C
	};
	var Hd = function (a) {
			return a.C ? a.C.readyState : 0
		},
		Id = function (a) {
			try {
				return 2 < Hd(a) ? a.C.status : -1
			} catch (b) {
				return -1
			}
		},
		Kd = function (a) {
			try {
				if (!a.C) return null;
				if ("response" in a.C) return a.C.response;
				switch (a.Of) {
					case "":
					case "text":
						return a.C.responseText;
					case "arraybuffer":
						if ("mozResponseArrayBuffer" in a.C) return a.C.mozResponseArrayBuffer
				}
				A(a.ta, "Response type " + a.Of + " is not supported on this browser");
				return null
			} catch (b) {
				return Rc(a.ta, "Can not get response: " + b.message), null
			}
		};
	F.prototype.getResponseHeader = function (a) {
		if (this.C && 4 == Hd(this)) return a = this.C.getResponseHeader(a), null === a ? void 0 : a
	};
	F.prototype.getAllResponseHeaders = function () {
		return this.C && 4 == Hd(this) ? this.C.getAllResponseHeaders() || "" : ""
	};
	var Ad = function (a, b) {
		return b + " [" + a.ol + " " + a.qf + " " + Id(a) + "]"
	};
	var Ld = function (a) {
			return Pa(a, "audio/")
		},
		Md = function (a) {
			return Pa(a, "video/")
		},
		Nd = function (a) {
			a = a.toLowerCase();
			return !a.includes(",") && !!a.match(/^(mp4a|[ae]c-3)/)
		},
		Od = RegExp("dv(he|av).[s|d|p][e|t|w][n|r|h|b][a|h]?[e|t|w]?"),
		Pd = function (a) {
			var b = void 0 === a.codecs ? null : a.codecs,
				c = void 0 === a.width ? null : a.width,
				d = void 0 === a.height ? null : a.height,
				e = void 0 === a.framerate ? null : a.framerate;
			a = "" + (void 0 === a.mimeType ? "" : a.mimeType);
			b && (a += "; codecs=" + b);
			c && d && (a += "; width=" + c + "; height=" + d);
			e && (a += "; framerate=" +
				e);
			if (c = b) a: for (c = !1, b = b.split(","), d = 0; d < b.length; d++) {
				if (b[d].match(Od)) {
					c = !1;
					break a
				}
				0 === b[d].indexOf("hev1.2") && (c = !0)
			}
			c && (a += "; eotf=smpte2084");
			return a
		},
		Qd = function (a) {
			if (!a) return 100;
			switch (a.code) {
				case MediaError.MEDIA_ERR_ABORTED:
					return 101;
				case MediaError.MEDIA_ERR_NETWORK:
					return 103;
				case MediaError.MEDIA_ERR_DECODE:
					return 102;
				case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
					return 104;
				default:
					return 100
			}
		};
	var G = {},
		Rd = (G["application/ttml+xml"] = 1, G["text/vtt"] = 2, G["text/mp4"] = 3, G["audio/mp4"] = 4, G["video/mp4"] = 5, G["video/mp2t"] = 6, G["audio/webm"] = 7, G["video/webm"] = 8, G["application/x-mpegurl"] = 9, G["application/vnd.apple.mpegurl"] = 10, G["application/dash+xml"] = 11, G["application/vnd.ms-sstr+xml"] = 12, G["text/cea608"] = 13, G["video/ogg"] = 14, G["audio/aac"] = 15, G["audio/mp3"] = 16, G["audio/ogg"] = 17, G["audio/wav"] = 18, G["image/gif"] = 19, G["image/jpg"] = 20, G["image/png"] = 21, G["text/mp2t"] = 22, G["application/mp4"] = 23, G["audio/mpeg"] =
			24, G),
		Sd = {},
		Td = (Sd.vm = 0, Sd["mp4a.a6"] = 1, Sd["ec-3"] = 2, Sd["mp4a.40.2"] = 3, Sd["mp4a.40.5"] = 4, Sd["mp4a.67"] = 5, Sd["avc1.4D40"] = 6, Sd["avc1.4D401E"] = 7, Sd["mp4a.a5"] = 8, Sd["ac-3"] = 9, Sd.vorbis = 10, Sd.opus = 11, Sd.vp8 = 12, Sd.vp9 = 13, Sd.avc1 = 14, Sd["mp4a.40"] = 15, Sd);

	function Ud(a) {
		if (a) {
			if (Md(a)) return "Video";
			if (Ld(a)) return "Audio"
		}
	}

	function Vd(a) {
		switch (a) {
			case "webvtt":
				return 1;
			case "ttml":
				return 2;
			case "cea608":
				return 3
		}
		return 0
	}

	function Wd(a, b) {
		switch (b) {
			case 1:
				switch (a) {
					case "clearkey":
						return 101;
					case "widevine":
						return 102;
					case "playready":
						return 103
				}
				break;
			case 2:
				switch (a) {
					case "widevine":
						return 201;
					case "aes_128":
						return 202;
					case "aes_128_ckp":
						return 203
				}
				break;
			case 3:
				switch (a) {
					case "playready":
						return 301
				}
		}
		return 0
	}
	var Xd = function (a, b) {
			b = Ud(b);
			void 0 !== b && v("Cast.MPL." + b + "Bitrate", a)
		},
		Yd = function (a, b) {
			b = Ud(b);
			if (void 0 !== b) {
				v("Cast.MPL.Available" + b + "Bitrates", a.length);
				for (var c = 0; c < a.length; c++) v("Cast.MPL.Available" + b + "Bitrate" + c, a[c])
			}
		},
		Zd = function (a) {
			a.split(",").forEach(function (b) {
				var c = Td[b];
				v("Cast.MPL.Codec", c ? c : 0 == b.lastIndexOf("avc1", 0) ? Td.avc1 : 0 == b.lastIndexOf("mp4a.40", 0) ? Td["mp4a.40"] : Td.vm)
			})
		},
		$d = function (a, b) {
			v("Cast.MPL.ProtocolProtection", Wd(a, b))
		};
	var ae = function (a, b, c) {
		b = b || new Uint8Array(a.length);
		var d = 0;
		for (c = c || 0; d < a.length; d++) b[d + c] = a.charCodeAt(d);
		return b
	};
	var be = function (a) {
		return !!a && "function" === typeof a.then
	};
	var ce, de = "undefined" !== typeof TextEncoder;
	var ee = "function" === typeof Uint8Array.prototype.slice,
		fe = 0,
		ge = 0;

	function he(a) {
		if (a.constructor === Uint8Array) return a;
		if (a.constructor === ArrayBuffer) return new Uint8Array(a);
		if (a.constructor === Array) return new Uint8Array(a);
		if (a.constructor === String) return ie(a);
		if (a instanceof Uint8Array) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
		Ha("Type not convertible to Uint8Array.");
		return new Uint8Array(0)
	};
	var je = function () {
			this.Ya = new Uint8Array(64);
			this.Mb = 0
		},
		ke = function (a, b) {
			if (!(a.Mb + b < a.Ya.length)) {
				var c = a.Ya;
				a.Ya = new Uint8Array(Math.ceil(b + 2 * a.Ya.length));
				a.Ya.set(c)
			}
		};
	je.prototype.push = function (a) {
		ke(this, 1);
		this.Ya[this.Mb++] = a
	};
	je.prototype.Xc = function (a) {
		ke(this, a.length);
		this.Ya.set(a, this.Mb);
		this.Mb += a.length
	};
	je.prototype.length = function () {
		return this.Mb
	};
	je.prototype.end = function () {
		var a = this.Ya,
			b = this.Mb;
		this.Mb = 0;
		return ee ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
	};
	var le = function (a, b) {
			for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
			a.push(b)
		},
		me = function (a, b) {
			if (0 <= b) le(a, b);
			else {
				for (var c = 0; 9 > c; c++) a.push(b & 127 | 128), b >>= 7;
				a.push(1)
			}
		};
	k = je.prototype;
	k.Qh = function (a) {
		this.push(a >>> 0 & 255)
	};
	k.Hd = function (a) {
		this.push(a >>> 0 & 255);
		this.push(a >>> 8 & 255)
	};
	k.s = function (a) {
		this.push(a >>> 0 & 255);
		this.push(a >>> 8 & 255);
		this.push(a >>> 16 & 255);
		this.push(a >>> 24 & 255)
	};
	k.nk = function (a) {
		var b = a >>> 0;
		a = Math.floor((a - b) / 4294967296) >>> 0;
		fe = b;
		ge = a;
		this.s(fe);
		this.s(ge)
	};
	k.sm = function (a) {
		this.push(a >>> 0 & 255);
		this.push(a >>> 8 & 255);
		this.push(a >>> 16 & 255);
		this.push(a >>> 24 & 255)
	};
	k.lk = function (a) {
		var b = a;
		b = (a = 0 > b ? 1 : 0) ? -b : b;
		if (0 === b) 0 < 1 / b ? fe = ge = 0 : (ge = 0, fe = 2147483648);
		else if (isNaN(b)) ge = 0, fe = 2147483647;
		else if (3.4028234663852886E38 < b) ge = 0, fe = (a << 31 | 2139095040) >>> 0;
		else if (1.1754943508222875E-38 > b) b = Math.round(b / Math.pow(2, -149)), ge = 0, fe = (a << 31 | b) >>> 0;
		else {
			var c = Math.floor(Math.log(b) / Math.LN2);
			b *= Math.pow(2, -c);
			b = Math.round(8388608 * b) & 8388607;
			ge = 0;
			fe = (a << 31 | c + 127 << 23 | b) >>> 0
		}
		this.s(fe)
	};
	k.jk = function (a) {
		this.push(a ? 1 : 0)
	};
	k.kk = function (a) {
		me(this, a)
	};
	var ne = {},
		oe = null,
		ie = function (a) {
			var b = a.length,
				c = 3 * b / 4;
			c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
			var d = new Uint8Array(c),
				e = 0;
			pe(a, function (f) {
				d[e++] = f
			});
			return d.subarray(0, e)
		},
		pe = function (a, b) {
			function c(l) {
				for (; d < a.length;) {
					var m = a.charAt(d++),
						q = oe[m];
					if (null != q) return q;
					if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
				}
				return l
			}
			qe();
			for (var d = 0;;) {
				var e = c(-1),
					f = c(0),
					g = c(64),
					h = c(64);
				if (64 === h && -1 === e) break;
				b(e << 2 | f >> 4);
				64 != g &&
					(b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
			}
		},
		qe = function () {
			if (!oe) {
				oe = {};
				for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
					var d = a.concat(b[c].split(""));
					ne[c] = d;
					for (var e = 0; e < d.length; e++) {
						var f = d[e];
						void 0 === oe[f] && (oe[f] = e)
					}
				}
			}
		};
	var re = function () {
			this.xc = [];
			this.xb = 0;
			this.Ca = new je
		},
		se = function (a, b) {
			var c = a.Ca.end();
			a.xc.push(c);
			a.xc.push(b);
			a.xb += c.length + b.length
		},
		te = function (a) {
			var b = a.xb + a.Ca.length();
			if (0 === b) return new Uint8Array(0);
			b = new Uint8Array(b);
			for (var c = a.xc, d = c.length, e = 0, f = 0; f < d; f++) {
				var g = c[f];
				0 !== g.length && (b.set(g, e), e += g.length)
			}
			c = a.Ca;
			d = c.Mb;
			0 !== d && (b.set(c.Ya.subarray(0, d), e), c.Mb = 0);
			a.xc = [b];
			return b
		},
		ue = function (a, b, c) {
			le(a.Ca, 8 * b + c)
		};
	k = re.prototype;
	k.sm = function (a, b) {
		null != b && (ve(a, b, -2147483648 <= b && 2147483648 > b), null != b && (we(a, b), ue(this, a, 0), me(this.Ca, b)))
	};
	k.s = function (a, b) {
		null != b && (ve(a, b, 0 <= b && 4294967296 > b), null != b && (ue(this, a, 0), le(this.Ca, b)))
	};
	k.nk = function () {};
	k.lk = function (a, b) {
		null != b && (ue(this, a, 5), this.Ca.lk(b))
	};
	k.jk = function (a, b) {
		null != b && (ve(a, b, "boolean" === typeof b || "number" === typeof b), ue(this, a, 0), this.Ca.jk(b))
	};
	k.kk = function (a, b) {
		null != b && (b = parseInt(b, 10), we(a, b), ue(this, a, 0), me(this.Ca, b))
	};
	var xe = function (a, b, c) {
		if (null != c) {
			if (de) {
				if (/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c)) throw Error("Found an unpaired surrogate");
				c = (ce || (ce = new TextEncoder)).encode(c)
			} else {
				for (var d = 0, e = new Uint8Array(3 * c.length), f = 0; f < c.length; f++) {
					var g = c.charCodeAt(f);
					if (128 > g) e[d++] = g;
					else {
						if (2048 > g) e[d++] = g >> 6 | 192;
						else {
							if (55296 <= g && 57343 >= g) {
								if (56319 >= g && f < c.length) {
									var h = c.charCodeAt(++f);
									if (56320 <= h && 57343 >= h) {
										g = 1024 * (g - 55296) + h - 56320 + 65536;
										e[d++] = g >> 18 | 240;
										e[d++] =
											g >> 12 & 63 | 128;
										e[d++] = g >> 6 & 63 | 128;
										e[d++] = g & 63 | 128;
										continue
									}
								}
								throw Error("Found an unpaired surrogate");
							}
							e[d++] = g >> 12 | 224;
							e[d++] = g >> 6 & 63 | 128
						}
						e[d++] = g & 63 | 128
					}
				}
				c = e.subarray(0, d)
			}
			ue(a, b, 2);
			le(a.Ca, c.length);
			se(a, c)
		}
	};
	re.prototype.Xc = function (a, b) {
		null != b && (b = he(b), ue(this, a, 2), le(this.Ca, b.length), se(this, b))
	};
	var ye = function (a, b, c) {
			if (null != c)
				for (var d = 0; d < c.length; d++) a.Xc(b, c[d])
		},
		ze = function (a, b, c, d) {
			if (null != c)
				for (var e = 0; e < c.length; e++) {
					var f = a;
					ue(f, b, 2);
					var g = f.Ca.end();
					f.xc.push(g);
					f.xb += g.length;
					g = f.xb;
					f = f.xc.length - 1;
					d(c[e], a);
					var h = a,
						l = h.Ca.end();
					h.xc.push(l);
					h.xb += l.length;
					le(h.Ca, h.xb + h.Ca.length() - g);
					g = h.Ca.end();
					h.xb += g.length;
					h.xc.splice(1 + f, 0, g)
				}
		};

	function we(a, b) {
		ve(a, b, b === Math.floor(b));
		ve(a, b, -2147483648 <= b && 2147483648 > b)
	}

	function ve(a, b, c) {
		c || Ha("for [" + b + "] at [" + a + "]")
	};
	var Ae = "function" === typeof Uint8Array;

	function Be(a) {
		return Ce(a, function (b) {
			return b
		}, function (b) {
			return new Uint8Array(b)
		})
	}

	function De(a, b, c) {
		return "object" === typeof a ? Ae && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Ce(a, b, c) : b(a)
	}

	function Ce(a, b, c) {
		if (Array.isArray(a)) {
			for (var d = Array(a.length), e = 0; e < a.length; e++) {
				var f = a[e];
				null != f && (d[e] = De(f, b, c))
			}
			Array.isArray(a) && a.hn && Ee(d);
			return d
		}
		d = {};
		for (e in a) f = a[e], null != f && (d[e] = De(f, b, c));
		return d
	}

	function Fe(a) {
		return Ce(a, function (b) {
			return "number" === typeof b ? isFinite(b) ? b : String(b) : b
		}, function (b) {
			var c;
			void 0 === c && (c = 0);
			qe();
			c = ne[c];
			for (var d = Array(Math.floor(b.length / 3)), e = c[64] || "", f = 0, g = 0; f < b.length - 2; f += 3) {
				var h = b[f],
					l = b[f + 1],
					m = b[f + 2],
					q = c[h >> 2];
				h = c[(h & 3) << 4 | l >> 4];
				l = c[(l & 15) << 2 | m >> 6];
				m = c[m & 63];
				d[g++] = "" + q + h + l + m
			}
			q = 0;
			m = e;
			switch (b.length - f) {
				case 2:
					q = b[f + 1], m = c[(q & 15) << 2] || e;
				case 1:
					b = b[f], d[g] = "" + c[b >> 2] + c[(b & 3) << 4 | q >> 4] + m + e
			}
			return d.join("")
		})
	}
	var Ge = {
			hn: {
				value: !0,
				configurable: !0
			}
		},
		Ee = function (a) {
			Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Ge);
			return a
		},
		He = Symbol("generated by jspb");
	var Ie;
	var Me = function (a, b, c, d) {
			var e = Ie;
			Ie = null;
			a || (a = e);
			e = this.constructor.nn;
			a || (a = e ? [e] : []);
			this.Kd = e ? 0 : -1;
			this.ra = null;
			this.Kb = a;
			a: {
				e = this.Kb.length;a = e - 1;
				if (e && (e = this.Kb[a], !(null === e || "object" != typeof e || Array.isArray(e) || Ae && e instanceof Uint8Array))) {
					this.ke = a - this.Kd;
					this.Oa = e;
					break a
				}
				void 0 !== b && -1 < b ? (this.ke = Math.max(b, a + 1 - this.Kd), this.Oa = null) : this.ke = Number.MAX_VALUE
			}
			if (c)
				for (b = 0; b < c.length; b++) a = c[b], a < this.ke ? (a += this.Kd, (e = this.Kb[a]) ? Ee(e) : this.Kb[a] = Je) : (Ke(this), (e = this.Oa[a]) ? Ee(e) :
					this.Oa[a] = Je);
			if (d && d.length)
				for (c = 0; c < d.length; c++) Le(this, d[c])
		},
		Je = Object.freeze(Ee([])),
		Ke = function (a) {
			var b = a.ke + a.Kd;
			a.Kb[b] || (a.Oa = a.Kb[b] = {})
		},
		H = function (a, b) {
			if (b < a.ke) {
				b += a.Kd;
				var c = a.Kb[b];
				return c !== Je ? c : a.Kb[b] = Ee([])
			}
			if (a.Oa) return c = a.Oa[b], c !== Je ? c : a.Oa[b] = Ee([])
		},
		Ne = function (a) {
			a = H(a, 5);
			return null == a ? a : !!a
		},
		Oe = function (a, b, c) {
			b < a.ke ? a.Kb[b + a.Kd] = c : (Ke(a), a.Oa[b] = c);
			return a
		},
		Qe = function (a, b, c) {
			var d = Le(a, Pe[0]);
			d && d !== b && null != c && (a.ra && d in a.ra && (a.ra[d] = void 0), Oe(a, d, void 0));
			return Oe(a, b, c)
		},
		Le = function (a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = H(a, f);
				null != g && (c = f, d = g, Oe(a, f, void 0))
			}
			return c ? (Oe(a, c, d), c) : 0
		},
		Re = function (a, b, c) {
			a.ra || (a.ra = {});
			if (!a.ra[c]) {
				for (var d = H(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
				a.ra[c] = e
			}
			return a.ra[c]
		};
	Me.prototype.Jh = function () {
		return this.toJSON()
	};
	Me.prototype.toJSON = function () {
		var a = Se(this, !1);
		return Fe(a)
	};
	var Se = function (a, b) {
		if (a.ra)
			for (var c in a.ra) {
				var d = a.ra[c];
				if (Array.isArray(d))
					for (var e = 0; e < d.length; e++) d[e] && Se(d[e], b);
				else d && Se(d, b)
			}
		return a.Kb
	};
	Me.prototype.toString = function () {
		return Se(this, !1).toString()
	};
	Me.prototype.getExtension = function (a) {
		Ke(this);
		this.ra || (this.ra = {});
		var b = a.mo;
		return a.oo ? a.fn() ? (this.ra[b] || (this.ra[b] = Ka(this.Oa[b] || [], function (c) {
			return new a.Lm(c)
		})), this.ra[b]) : this.Oa[b] = this.Oa[b] || Ee([]) : a.fn() ? (!this.ra[b] && this.Oa[b] && (this.ra[b] = new a.Lm(this.Oa[b])), this.ra[b]) : this.Oa[b]
	};
	Me.prototype.clone = function () {
		var a = this.constructor,
			b = Be(Se(this, !1));
		Ie = b;
		a = new a(b);
		Ie = null;
		return a
	};
	var Te = function () {
		Me.apply(this, arguments)
	};
	p(Te, Me);
	Te.prototype[He] = !0;
	var Ue = function (a) {
		Te.call(this, a, -1, void 0, Pe)
	};
	p(Ue, Te);
	k = Ue.prototype;
	k.Ha = function () {
		return H(this, 1)
	};
	k.getStringValue = function () {
		return H(this, 2)
	};
	k.setStringValue = function (a) {
		return Qe(this, 2, a)
	};
	k.getFloatValue = function () {
		var a = H(this, 4);
		return null == a ? a : +a
	};
	k.setFloatValue = function (a) {
		return Qe(this, 4, a)
	};
	k.xh = function () {
		var a = new re;
		Ve(this, a);
		return te(a)
	};
	var Ve = function (a, b) {
			xe(b, 1, H(a, 1));
			xe(b, 2, H(a, 2));
			b.sm(3, H(a, 3));
			b.lk(4, H(a, 4));
			b.jk(5, H(a, 5))
		},
		Pe = [
			[2, 3, 4, 5]
		];
	var Xe = function (a) {
		Te.call(this, a, -1, We)
	};
	p(Xe, Te);
	Xe.prototype.xh = function () {
		var a = new re,
			b = H(this, 1);
		if (null != b)
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				null != d && (we(1, d), ue(a, 1, 0), me(a.Ca, d))
			}
		ze(a, 2, Re(this, Ue, 2), Ve);
		return te(a)
	};
	var We = [1, 2];
	Xe.nn = "scs.sc";
	var Ye = RegExp("^(-)?P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)D)?(T(?:(\\d+)H)?(?:(\\d+)M)?(?:(\\d+(?:\\.\\d+)?)S)?)?$"),
		Ze = function (a, b, c, d, e, f) {
			"string" === typeof a ? (this.Id = "y" == a ? b : 0, this.qd = "m" == a ? b : 0, this.zc = "d" == a ? b : 0, this.Ec = "h" == a ? b : 0, this.Lc = "n" == a ? b : 0, this.Sc = "s" == a ? b : 0) : (this.Id = a || 0, this.qd = b || 0, this.zc = c || 0, this.Ec = d || 0, this.Lc = e || 0, this.Sc = f || 0)
		};
	Ze.prototype.$b = function (a) {
		return a.Id == this.Id && a.qd == this.qd && a.zc == this.zc && a.Ec == this.Ec && a.Lc == this.Lc && a.Sc == this.Sc
	};
	Ze.prototype.clone = function () {
		return new Ze(this.Id, this.qd, this.zc, this.Ec, this.Lc, this.Sc)
	};
	Ze.prototype.add = function (a) {
		this.Id += a.Id;
		this.qd += a.qd;
		this.zc += a.zc;
		this.Ec += a.Ec;
		this.Lc += a.Lc;
		this.Sc += a.Sc
	};
	var $e = function () {
			this.Vl = Date.now()
		},
		af = null;
	$e.prototype.set = function (a) {
		this.Vl = a
	};
	$e.prototype.reset = function () {
		this.set(Date.now())
	};
	$e.prototype.get = function () {
		return this.Vl
	};
	var bf = function (a) {
		this.Gn = a || "";
		af || (af = new $e);
		this.Zn = af
	};
	k = bf.prototype;
	k.qk = !0;
	k.em = !0;
	k.Wn = !0;
	k.Vn = !0;
	k.fm = !1;
	k.Xn = !1;
	var cf = function (a) {
			return 10 > a ? "0" + a : String(a)
		},
		df = function (a) {
			bf.call(this, a)
		};
	za(df, bf);
	var ef = function (a, b) {
		var c = [];
		c.push(a.Gn, " ");
		if (a.em) {
			var d = new Date(b.ue);
			c.push("[", cf(d.getFullYear() - 2E3) + cf(d.getMonth() + 1) + cf(d.getDate()) + " " + cf(d.getHours()) + ":" + cf(d.getMinutes()) + ":" + cf(d.getSeconds()) + "." + cf(Math.floor(d.getMilliseconds() / 10)), "] ")
		}
		if (a.Wn) {
			d = c.push;
			var e = a.Zn.get();
			e = (b.ue - e) / 1E3;
			var f = e.toFixed(3),
				g = 0;
			if (1 > e) g = 2;
			else
				for (; 100 > e;) g++, e *= 10;
			for (; 0 < g--;) f = " " + f;
			d.call(c, "[", f, "s] ")
		}
		a.Vn && c.push("[", b.rl, "] ");
		a.Xn && c.push("[", b.pl.name, "] ");
		c.push(b.pn);
		a.fm && (b = b.ui) &&
			c.push("\n", b instanceof Error ? b.message : b.toString());
		a.qk && c.push("\n");
		return c.join("")
	};
	var ff = function () {
		this.Ln = ya(this.xm, this);
		this.vg = new df;
		this.vg.em = !1;
		this.vg.fm = !1;
		this.dl = this.vg.qk = !1;
		this.Vm = {}
	};
	ff.prototype.xm = function (a) {
		function b(f) {
			if (f) {
				if (f.value >= yc.value) return "error";
				if (f.value >= zc.value) return "warn";
				if (f.value >= Bc.value) return "log"
			}
			return "debug"
		}
		if (!this.Vm[a.rl]) {
			var c = ef(this.vg, a),
				d = gf;
			if (d) {
				var e = b(a.pl);
				hf(d, e, c, a.ui)
			}
		}
	};
	var jf = null,
		gf = r.console,
		hf = function (a, b, c, d) {
			if (a[b]) a[b](c, d || "");
			else a.log(c, d || "")
		};
	var kf = {
			rgb: !0,
			rgba: !0,
			alpha: !0,
			rect: !0,
			image: !0,
			"linear-gradient": !0,
			"radial-gradient": !0,
			"repeating-linear-gradient": !0,
			"repeating-radial-gradient": !0,
			"cubic-bezier": !0,
			matrix: !0,
			perspective: !0,
			rotate: !0,
			rotate3d: !0,
			rotatex: !0,
			rotatey: !0,
			steps: !0,
			rotatez: !0,
			scale: !0,
			scale3d: !0,
			scalex: !0,
			scaley: !0,
			scalez: !0,
			skew: !0,
			skewx: !0,
			skewy: !0,
			translate: !0,
			translate3d: !0,
			translatex: !0,
			translatey: !0,
			translatez: !0
		},
		lf = function (a) {
			a = Qa(a);
			if ("" == a || Pa(a, "url(")) return null;
			if (0 < a.indexOf("(")) {
				if (/"|'/.test(a)) return null;
				for (var b = /([\-\w]+)\(/g, c; c = b.exec(a);)
					if (!(c[1].toLowerCase() in kf)) return null
			}
			return a
		};

	function mf(a) {
		var b = r.CSSStyleDeclaration;
		return b && b.prototype && b.prototype[a] || null
	}
	var nf = mf("getPropertyValue"),
		of = mf("setProperty");

	function pf(a, b, c, d) {
		if (a) return a.apply(b, d);
		if (pb && 10 > document.documentMode) {
			if (!b[c].call) throw Error("IE Clobbering detected");
		} else if ("function" != typeof b[c]) throw Error("Clobbering detected");
		return b[c].apply(b, d)
	};
	var qf = {
			"-webkit-border-horizontal-spacing": !0,
			"-webkit-border-vertical-spacing": !0
		},
		sf = function (a) {
			if (!a) return gb;
			var b = document.createElement("div").style;
			rf(a).forEach(function (c) {
				var d = sb && c in qf ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
				0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = pf(nf, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = lf(c), null != c && pf( of , b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
			});
			return new eb(b.cssText ||
				"", db)
		},
		tf = function (a) {
			if (pb && 10 > document.documentMode) return gb;
			var b = document;
			"function" === typeof HTMLTemplateElement && (b = Ab("TEMPLATE").content.ownerDocument);
			b = b.implementation.createHTMLDocument("").createElement("DIV");
			b.style.cssText = a;
			return sf(b.style)
		},
		rf = function (a) {
			ta(a) ? a = Ma(a) : (a = Ya(a), La(a, "cssText"));
			return a
		};
	var uf = function () {
			this.Za = [];
			this.zb = []
		},
		vf = function (a) {
			0 === a.Za.length && (a.Za = a.zb, a.Za.reverse(), a.zb = [])
		};
	uf.prototype.enqueue = function (a) {
		this.zb.push(a)
	};
	var wf = function (a) {
			vf(a);
			return a.Za.pop()
		},
		xf = function (a) {
			vf(a);
			a = a.Za;
			return a[a.length - 1]
		};
	k = uf.prototype;
	k.dd = function () {
		return this.Za.length + this.zb.length
	};
	k.eb = function () {
		return 0 === this.Za.length && 0 === this.zb.length
	};
	k.clear = function () {
		this.Za = [];
		this.zb = []
	};
	k.contains = function (a) {
		return 0 <= Ia(this.Za, a) || 0 <= Ia(this.zb, a)
	};
	k.remove = function (a) {
		var b = this.Za;
		var c = Ja(b, a);
		0 <= c ? (Array.prototype.splice.call(b, c, 1), b = !0) : b = !1;
		return b || La(this.zb, a)
	};
	k.$a = function () {
		for (var a = [], b = this.Za.length - 1; 0 <= b; --b) a.push(this.Za[b]);
		var c = this.zb.length;
		for (b = 0; b < c; ++b) a.push(this.zb[b]);
		return a
	};
	var I = function (a, b) {
		this.Zb = this.Fd = this.lc = "";
		this.le = null;
		this.cd = this.rb = "";
		this.ab = this.gn = !1;
		if (a instanceof I) {
			this.ab = void 0 !== b ? b : a.ab;
			yf(this, a.lc);
			var c = a.Fd;
			zf(this);
			this.Fd = c;
			c = a.Zb;
			zf(this);
			this.Zb = c;
			Af(this, a.le);
			c = a.rb;
			zf(this);
			this.rb = c;
			Bf(this, a.tb.clone());
			a = a.cd;
			zf(this);
			this.cd = a
		} else a && (c = String(a).match(vd)) ? (this.ab = !!b, yf(this, c[1] || "", !0), a = c[2] || "", zf(this), this.Fd = Cf(a), a = c[3] || "", zf(this), this.Zb = Cf(a, !0), Af(this, c[4]), a = c[5] || "", zf(this), this.rb = Cf(a, !0), Bf(this, c[6] ||
			"", !0), a = c[7] || "", zf(this), this.cd = Cf(a)) : (this.ab = !!b, this.tb = new Df(null, this.ab))
	};
	I.prototype.toString = function () {
		var a = [],
			b = this.lc;
		b && a.push(Ef(b, Ff, !0), ":");
		var c = this.Zb;
		if (c || "file" == b) a.push("//"), (b = this.Fd) && a.push(Ef(b, Ff, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.le, null != c && a.push(":", String(c));
		if (c = this.rb) this.Zb && "/" != c.charAt(0) && a.push("/"), a.push(Ef(c, "/" == c.charAt(0) ? Gf : Hf, !0));
		(c = this.tb.toString()) && a.push("?", c);
		(c = this.cd) && a.push("#", Ef(c, If));
		return a.join("")
	};
	I.prototype.resolve = function (a) {
		var b = this.clone(),
			c = !!a.lc;
		c ? yf(b, a.lc) : c = !!a.Fd;
		if (c) {
			var d = a.Fd;
			zf(b);
			b.Fd = d
		} else c = !!a.Zb;
		c ? (d = a.Zb, zf(b), b.Zb = d) : c = null != a.le;
		d = a.rb;
		if (c) Af(b, a.le);
		else if (c = !!a.rb) {
			if ("/" != d.charAt(0))
				if (this.Zb && !this.rb) d = "/" + d;
				else {
					var e = b.rb.lastIndexOf("/"); - 1 != e && (d = b.rb.substr(0, e + 1) + d)
				}
			e = d;
			if (".." == e || "." == e) d = "";
			else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
				d = 0 == e.lastIndexOf("/", 0);
				e = e.split("/");
				for (var f = [], g = 0; g < e.length;) {
					var h = e[g++];
					"." == h ? d && g == e.length &&
						f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
				}
				d = f.join("/")
			} else d = e
		}
		c ? (zf(b), b.rb = d) : c = "" !== a.tb.toString();
		c ? Bf(b, a.tb.clone()) : c = !!a.cd;
		c && (a = a.cd, zf(b), b.cd = a);
		return b
	};
	I.prototype.clone = function () {
		return new I(this)
	};
	var yf = function (a, b, c) {
			zf(a);
			a.lc = c ? Cf(b, !0) : b;
			a.lc && (a.lc = a.lc.replace(/:$/, ""))
		},
		Af = function (a, b) {
			zf(a);
			if (b) {
				b = Number(b);
				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
				a.le = b
			} else a.le = null
		},
		Bf = function (a, b, c) {
			zf(a);
			b instanceof Df ? (a.tb = b, a.tb.Oj(a.ab)) : (c || (b = Ef(b, Jf)), a.tb = new Df(b, a.ab))
		};
	I.prototype.getQuery = function () {
		return this.tb.toString()
	};
	I.prototype.removeParameter = function (a) {
		zf(this);
		this.tb.remove(a);
		return this
	};
	var zf = function (a) {
		if (a.gn) throw Error("Tried to modify a read-only Uri");
	};
	I.prototype.Oj = function (a) {
		this.ab = a;
		this.tb && this.tb.Oj(a)
	};
	var Kf = function (a) {
			return a instanceof I ? a.clone() : new I(a, void 0)
		},
		Cf = function (a, b) {
			return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
		},
		Ef = function (a, b, c) {
			return "string" === typeof a ? (a = encodeURI(a).replace(b, Lf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
		},
		Lf = function (a) {
			a = a.charCodeAt(0);
			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
		},
		Ff = /[#\/\?@]/g,
		Hf = /[#\?:]/g,
		Gf = /[#\?]/g,
		Jf = /[#\?@]/g,
		If = /#/g,
		Df = function (a, b) {
			this.Ga = this.ea = null;
			this.Ta = a || null;
			this.ab = !!b
		},
		Mf = function (a) {
			a.ea || (a.ea = new Yc, a.Ga = 0, a.Ta && wd(a.Ta, function (b, c) {
				a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
			}))
		};
	k = Df.prototype;
	k.dd = function () {
		Mf(this);
		return this.Ga
	};
	k.add = function (a, b) {
		Mf(this);
		this.Ta = null;
		a = Nf(this, a);
		var c = this.ea.get(a);
		c || this.ea.set(a, c = []);
		c.push(b);
		this.Ga += 1;
		return this
	};
	k.remove = function (a) {
		Mf(this);
		a = Nf(this, a);
		return this.ea.Ke(a) ? (this.Ta = null, this.Ga -= this.ea.get(a).length, this.ea.remove(a)) : !1
	};
	k.clear = function () {
		this.ea = this.Ta = null;
		this.Ga = 0
	};
	k.eb = function () {
		Mf(this);
		return 0 == this.Ga
	};
	k.Ke = function (a) {
		Mf(this);
		a = Nf(this, a);
		return this.ea.Ke(a)
	};
	k.forEach = function (a, b) {
		Mf(this);
		this.ea.forEach(function (c, d) {
			c.forEach(function (e) {
				a.call(b, e, d, this)
			}, this)
		}, this)
	};
	k.ac = function () {
		Mf(this);
		for (var a = this.ea.$a(), b = this.ea.ac(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
		return c
	};
	k.$a = function (a) {
		Mf(this);
		var b = [];
		if ("string" === typeof a) this.Ke(a) && (b = b.concat(this.ea.get(Nf(this, a))));
		else {
			a = this.ea.$a();
			for (var c = 0; c < a.length; c++) b = b.concat(a[c])
		}
		return b
	};
	k.set = function (a, b) {
		Mf(this);
		this.Ta = null;
		a = Nf(this, a);
		this.Ke(a) && (this.Ga -= this.ea.get(a).length);
		this.ea.set(a, [b]);
		this.Ga += 1;
		return this
	};
	k.get = function (a, b) {
		if (!a) return b;
		a = this.$a(a);
		return 0 < a.length ? String(a[0]) : b
	};
	k.toString = function () {
		if (this.Ta) return this.Ta;
		if (!this.ea) return "";
		for (var a = [], b = this.ea.ac(), c = 0; c < b.length; c++) {
			var d = b[c],
				e = encodeURIComponent(String(d));
			d = this.$a(d);
			for (var f = 0; f < d.length; f++) {
				var g = e;
				"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
				a.push(g)
			}
		}
		return this.Ta = a.join("&")
	};
	k.clone = function () {
		var a = new Df;
		a.Ta = this.Ta;
		this.ea && (a.ea = this.ea.clone(), a.Ga = this.Ga);
		return a
	};
	var Nf = function (a, b) {
		b = String(b);
		a.ab && (b = b.toLowerCase());
		return b
	};
	Df.prototype.Oj = function (a) {
		a && !this.ab && (Mf(this), this.Ta = null, this.ea.forEach(function (b, c) {
			var d = c.toLowerCase();
			c != d && (this.remove(c), this.remove(d), 0 < b.length && (this.Ta = null, this.ea.set(Nf(this, d), Ma(b)), this.Ga += b.length))
		}, this));
		this.ab = a
	};
	Df.prototype.extend = function (a) {
		for (var b = 0; b < arguments.length; b++) dd(arguments[b], function (c, d) {
			this.add(d, c)
		}, this)
	};
	var Pf = function (a) {
		Te.call(this, a, -1, Of)
	};
	p(Pf, Te);
	Pf.prototype.xh = function () {
		var a = new re;
		ye(a, 2, H(this, 2));
		a.Xc(4, H(this, 4));
		a.s(7, H(this, 7));
		a.s(9, H(this, 9));
		a.s(10, H(this, 10));
		a.kk(11, H(this, 11));
		a.s(12, H(this, 12));
		ye(a, 13, H(this, 13));
		ze(a, 14, Re(this, Qf, 14), Rf);
		xe(a, 15, H(this, 15));
		xe(a, 16, H(this, 16));
		a.s(17, H(this, 17));
		a.kk(1, H(this, 1));
		xe(a, 3, H(this, 3));
		xe(a, 5, H(this, 5));
		xe(a, 6, H(this, 6));
		a.Xc(8, H(this, 8));
		return te(a)
	};
	var Qf = function (a) {
		Te.call(this, a)
	};
	p(Qf, Te);
	Qf.prototype.getKey = function () {
		return H(this, 3)
	};
	Qf.prototype.xh = function () {
		var a = new re;
		Rf(this, a);
		return te(a)
	};
	var Rf = function (a, b) {
			b.Xc(1, H(a, 1));
			b.Xc(2, H(a, 2));
			b.Xc(3, H(a, 3));
			b.Xc(4, H(a, 4));
			b.s(5, H(a, 5))
		},
		Of = [2, 13, 14];
	var Tf = function (a) {
			Sf();
			return jb(a)
		},
		Sf = qa;
	t("cast.player.api.VERSION", "1.0.0");
	console.log("CAST SDK MPL Version: 1.0.0.112");
	t("cast.player.api.ErrorCode", {
		UNKNOWN: 0,
		PLAYBACK: 1,
		MEDIAKEYS: 2,
		NETWORK: 3,
		MANIFEST: 4
	});
	var Uf = ["cast.player.api.ErrorCode.UNKNOWN", "cast.player.api.ErrorCode.PLAYBACK", "cast.player.api.ErrorCode.MEDIAKEYS", "cast.player.api.ErrorCode.NETWORK", "cast.player.api.ErrorCode.MANIFEST"];
	t("cast.player.api.HlsSegmentFormat", {
		MPEG2_TS: 0,
		MPEG_AUDIO_ES: 1,
		PACKED_AUDIO_AC3: 2,
		jo: 3,
		MPEG_LAYER_3: 4,
		TS_AAC: 5,
		PACKED_AUDIO_E_AC3: 6,
		FMP4: 7,
		TS_HE_AAC: 8
	});
	t("cast.player.api.HlsVideoSegmentFormat", {
		MPEG2_TS: 0,
		FMP4: 1
	});
	t("cast.player.api.CaptionsType", {
		UNKNOWN: "unknown",
		WEBVTT: "webvtt",
		TTML: "ttml",
		CEA608: "cea608",
		STPP: "stpp"
	});
	t("cast.player.api.ContentProtection", {
		NONE: "none",
		CLEARKEY: "clearkey",
		PLAYREADY: "playready",
		WIDEVINE: "widevine",
		AES_128: "aes_128",
		AES_128_CKP: "aes_128_ckp"
	});
	var Vf = {
		DEBUG: 0,
		INFO: 800,
		WARNING: 900,
		ERROR: 1E3,
		NONE: Infinity
	};
	t("cast.player.api.LoggerLevel", Vf);
	t("cast.player.api.StreamingProtocolType", {
		UNKNOWN: 0,
		MPEG_DASH: 1,
		HLS: 2,
		SMOOTH_STREAMING: 3
	});
	t("cast.player.api.DateRangeEventType", {
		DATE_RANGE_CHANGED: "daterangechanged",
		DATE_RANGE_ENTER: "daterangeenter",
		DATE_RANGE_EXIT: "daterangeexit"
	});
	var Wf = function () {
		this.timeoutInterval = 3E4;
		this.headers = this.url = null;
		this.withCredentials = !1;
		this.protectionSystem = this.content = null;
		this.skipRequest = !1;
		this.setResponse = null;
		this.interval = {
			time: 0,
			duration: 0
		};
		this.ne = null
	};
	t("cast.player.api.RequestInfo", Wf);
	var Xf = function (a, b, c, d, e) {
		this.url = a;
		this.errorCode = b;
		this.status = c;
		this.responseHeaders = d;
		this.response = e
	};
	t("cast.player.api.RequestStatus", Xf);
	var Yf = function (a, b, c, d, e, f, g, h, l, m) {
		this.codecs = a;
		this.codecsProvided = void 0 === h ? !1 : h;
		this.mimeType = b;
		this.bitrates = c;
		this.streamsGroupedByBitrate = l;
		this.streamsGroupedByCdn = m;
		this.language = d;
		this.name = e;
		this.role = f;
		this.hlsMediaInfo = void 0 === g ? null : g
	};
	t("cast.player.api.StreamInfo", Yf);
	var Zf = function (a) {
		a = void 0 === a ? {} : a;
		var b = void 0 === a.url ? null : a.url,
			c = void 0 === a.characteristics ? null : a.characteristics,
			d = void 0 === a.groupId ? null : a.groupId,
			e = void 0 === a.autoSelect ? !1 : a.autoSelect,
			f = void 0 === a.channels ? null : a.channels,
			g = void 0 === a.forced ? !1 : a.forced,
			h = void 0 === a.assocLanguage ? null : a.assocLanguage;
		this.isDefault = void 0 === a.isDefault ? !1 : a.isDefault;
		this.url = b;
		this.characteristics = c;
		this.groupId = d;
		this.autoSelect = e;
		this.channels = f;
		this.forced = g;
		this.assocLanguage = h
	};
	t("cast.player.api.HlsMediaInfo", Zf);
	t("cast.player.api.EmsgInfo", function () {});
	t("cast.player.api.HlsDateRangeInfo", function () {});
	window.VTTCue = window.VTTCue || window.TextTrackCue;
	var $f = function (a) {
		var b = Oc(Pc(), "").bj;
		a: {
			if (!Ec) {
				Ec = {};
				for (var c = 0, d; d = Dc[c]; c++) Ec[d.value] = d, Ec[d.name] = d
			}
			if (a in Ec) a = Ec[a];
			else {
				for (c = 0; c < Dc.length; ++c)
					if (d = Dc[c], d.value <= a) {
						a = d;
						break a
					}
				a = null
			}
		}
		b && (Oc(Pc(), b.Ha()).level = a)
	};
	t("cast.player.api.setLoggerLevel", $f);
	jf || (jf = new ff);
	if (jf) {
		var ag = jf;
		if (1 != ag.dl) {
			var bg = Oc(Pc(), "").bj,
				cg = ag.Ln;
			bg && Oc(Pc(), bg.Ha()).Vk.push(cg);
			ag.dl = !0
		}
	};
	var dg = function (a) {
		this.url = a;
		this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateManifestRequestInfo = null
	};
	t("cast.player.api.HostBase", dg);
	var eg = {
			clearkey: "org.w3.clearkey",
			playready: "com.chromecast.playready",
			widevine: "com.widevine.alpha"
		},
		fg = z("cast.player.common"),
		hg = function (a) {
			return gg(a.role, a.mimeType, a.codecs)
		},
		gg = function (a, b, c) {
			return "caption" == a || Pa(b, "text/") || "application/ttml+xml" === b || "application/mp4" == b && "stpp" == c
		},
		jg = function (a, b) {
			b && (b = new Uint8Array(new ArrayBuffer(16)), b.set(a), ig(b.subarray(0, 4)), ig(b.subarray(4, 6)), ig(b.subarray(6, 8)), a = b);
			this.Yf = a
		};
	jg.prototype.$b = function (a) {
		if (!a) return !1;
		var b = this.Yf;
		a = a.Yf;
		for (var c = 0; 16 > c; c++)
			if (b[c] != a[c]) return !1;
		return !0
	};
	jg.prototype.Jh = function () {
		return this.Yf
	};
	jg.prototype.toString = function () {
		for (var a = "", b = 0; b < this.Yf.length; b++) a += ("0" + this.Yf[b].toString(16)).slice(-2);
		return a
	};
	var ig = function (a) {
			for (var b = 0, c = a.length - 1; b < c; b++, c--) {
				var d = a[b];
				a[b] = a[c];
				a[c] = d
			}
		},
		kg = new jg([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
		lg = new jg([237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237]),
		mg = new jg([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75]),
		ng = function (a, b) {
			return MediaSource.isTypeSupported(a + '; codecs="' + b + '"')
		},
		og = function (a) {
			return "mp4a.a6" == a || "ec-3" == a
		},
		pg = function (a, b, c) {
			for (a = a.toString(b); a.length < c;) a = "0" + a;
			return a
		},
		qg = function (a) {
			for (var b =
					a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = parseInt(a.substr(2 * d, 2), 16);
			return c
		},
		rg = function (a) {
			if (Ba.__platform__ && Ba.__platform__.queryPlatformValue) return Ba.__platform__.queryPlatformValue(a)
		},
		sg = function (a) {
			switch (a) {
				case 2:
					return "mp4a.a5";
				case 6:
					return "mp4a.a6";
				case 4:
					return "";
				case 8:
					return "mp4a.40.5";
				default:
					return "mp4a.40.2"
			}
		},
		tg = function (a) {
			a = a.split(",");
			for (var b = 0; b < a.length; b++) {
				var c = a[b].match(Od);
				if (c && !ng("video/mp4", c[0])) {
					D(fg, c[0] + " removed");
					a.splice(b, 1);
					break
				}
				if (c = a[b]) {
					var d =
						c.split(".");
					2 != d.length || "avc1" != d[0] && "avc3" != d[0] || (c = d[0] + "." + d[1].toUpperCase())
				}
				a[b] = c
			}
			return a.join(",")
		},
		ug = function (a) {
			return a.split(",").find(function (b) {
				return !Nd(b)
			})
		},
		vg = function (a) {
			return a.split(",").find(function (b) {
				return Nd(b)
			})
		},
		wg = Ba.__platform__ && Ba.__platform__.display,
		xg = Ba.__platform__ && Ba.__platform__.canDisplayType,
		yg = parseFloat(rg("log-level-mpl"));
	0 <= Ia(Xa(Vf), yg) ? $f(yg) : $f(900);
	var zg = {
			"Cast.MPL.SegmentStats.Size": {
				min: 0,
				max: 1E6,
				vl: 100
			},
			"Cast.MPL.SegmentStats.Time": {
				min: 0,
				max: 2E4,
				vl: 20
			}
		},
		Ag = function (a, b) {
			zg[a] ? Ca() && Ba.__platform__.metrics.logHistogramValueToUma(a, b, zg[a].min, zg[a].max, zg[a].vl) : B(fg, "Invalid histogram name")
		},
		Bg = function (a, b) {
			Ag("Cast.MPL.SegmentStats.Size", a);
			Ag("Cast.MPL.SegmentStats.Time", b)
		};
	var Dg = function (a) {
		dg.call(this, a.url);
		this.initialBandwidth = 3145728;
		this.autoResumeDuration = 10;
		this.autoResumeNumberOfSegments = 3;
		this.autoPauseDuration = 1;
		var b = a.segmentRequestRetryLimit;
		0 > b && (A(Cg, "segmentRequestRetryLimit should be >= 0"), b = 3);
		this.segmentRequestRetryLimit = b;
		this.useSingleKeySession = !1;
		this.mediaElement = a.mediaElement || null;
		this.url = a.url;
		this.licenseUrl = a.licenseUrl || null;
		this.decodeContentId = !0 === a.decodeContentId;
		this.protectionSystem = a.protectionSystem || null;
		this.licenseCustomData =
			a.licenseCustomData || null;
		this.pk = !0 === a.aggressiveStallHandling;
		this.Nk = !0 === a.disableSourceBufferTimeAdjust;
		this.Ii = !0 === a.hlsContentKeyProtection;
		this.enableSmoothLiveRefresh = !0 === a.enableSmoothLiveRefresh;
		this.enableDurationOnLive = !0 === a.enableDurationOnLive;
		this.enableContentDeliveryNetworkCycling = !0 === a.enableContentDeliveryNetworkCycling;
		this.skipSegmentOnNetworkFailure = !0 === a.skipSegmentOnNetworkFailure;
		this.preferSequenceNumberForPlaylistMatching = !0 === a.preferSequenceNumberForPlaylistMatching;
		this.ignoreTtmlPositionInfo = !0 === a.ignoreTtmlPositionInfo;
		this.enableSideloadedTextTrackStyling = !0 === a.enableSideloadedTextTrackStyling;
		this.useRelativeCueTimestamps = !0 === a.useRelativeCueTimestamps;
		this.emeServerCertificate = a.emeServerCertificate || null;
		this.fo = a.useWidevineL3 || !1;
		this.onTimedMetadata = this.onQualityLevelChanged = this.onCue = this.onAutoPause = this.onMediaDownloadEnded = this.onManifestReady = this.processLicense = this.processSegment = this.processManifest = this.processMetadata = this.prepareLicenseRequest =
			this.getQualityLevel = this.trackBandwidth = this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateLicenseRequestInfo = this.updateManifestRequestInfo = this.onError = null
	};
	p(Dg, dg);
	Dg.prototype.Y = function (a, b, c, d) {
		var e = a;
		if (b) {
			e = b.errorCode;
			if (6 == b.errorCode && 0 <= b.status) var f = b.status;
			var g = a;
			null != e && (g = 10 * g + e % 10, null != f && (g = 1E3 * g + f % 1E3));
			e = g
		}
		v("Cast.MPL.Error", e);
		f = Math.floor(a / 100);
		A(d || Cg, "error: " + Uf[f] + "/" + e + (c ? " (" + c + ")" : ""));
		if (this.onError) this.onError(f, b, a)
	};
	var Eg = function (a, b) {
		return a.processManifest ? a.processManifest(b) : b
	};
	t("cast.player.api.Host", Dg);
	var Cg = z("cast.player.api.Host");
	t("cast.player.cache.ContentCacheCallbacks", function () {});
	var Fg = function (a) {
		Dg.call(this, a)
	};
	p(Fg, Dg);
	t("cast.player.api.ContentCacheHost", Fg);
	var Gg = function () {};
	Gg.prototype.load = function () {
		A(Hg, "Cache is deprecated");
		return Promise.reject("Cache is deprecated")
	};
	Gg.prototype.Wc = function () {};
	t("cast.player.api.ContentCache", Gg);
	Gg.setCacheHitCallback = function () {};
	Gg.setCacheInsertCallback = function () {};
	Gg.prototype.unload = Gg.prototype.Wc;
	Gg.prototype.load = Gg.prototype.load;
	var Hg = z("cast.player.api.ContentCache");
	t("cast.player.api.DetailedErrorCode", {
		MEDIA_UNKNOWN: 100,
		MEDIA_ABORTED: 101,
		MEDIA_DECODE: 102,
		MEDIA_NETWORK: 103,
		MEDIA_SRC_NOT_SUPPORTED: 104,
		SOURCE_BUFFER_FAILURE: 110,
		MEDIAKEYS_UNKNOWN: 200,
		MEDIAKEYS_NETWORK: 201,
		MEDIAKEYS_UNSUPPORTED: 202,
		MEDIAKEYS_WEBCRYPTO: 203,
		NETWORK_UNKNOWN: 300,
		SEGMENT_NETWORK: 301,
		HLS_NETWORK_MASTER_PLAYLIST: 311,
		HLS_NETWORK_PLAYLIST: 312,
		HLS_NETWORK_NO_KEY_RESPONSE: 313,
		HLS_NETWORK_KEY_LOAD: 314,
		HLS_NETWORK_INVALID_SEGMENT: 315,
		HLS_SEGMENT_PARSING: 316,
		DASH_NETWORK: 321,
		DASH_NO_INIT: 322,
		SMOOTH_NETWORK: 331,
		SMOOTH_NO_MEDIA_DATA: 332,
		MANIFEST_UNKNOWN: 400,
		HLS_MANIFEST_MASTER: 411,
		HLS_MANIFEST_PLAYLIST: 412,
		DASH_MANIFEST_UNKNOWN: 420,
		DASH_MANIFEST_NO_PERIODS: 421,
		DASH_MANIFEST_NO_MIMETYPE: 422,
		DASH_INVALID_SEGMENT_INFO: 423,
		SMOOTH_MANIFEST: 431,
		SEGMENT_UNKNOWN: 500,
		TEXT_UNKNOWN: 600,
		APP: 900,
		BREAK_CLIP_LOADING_ERROR: 901,
		BREAK_SEEK_INTERCEPTOR_ERROR: 902,
		IMAGE_ERROR: 903,
		LOAD_INTERRUPTED: 904,
		LOAD_FAILED: 905,
		GENERIC: 999
	});
	var Ig = function (a) {
			this.buffer = a;
			this.Sd = new DataView(a.buffer, a.byteOffset);
			this.offset = 0
		},
		Jg = function (a) {
			return a.buffer[a.offset++]
		},
		Kg = function (a) {
			var b = a.Sd.getUint16(a.offset);
			a.offset += 2;
			return b
		},
		J = function (a) {
			var b = a.Sd.getUint32(a.offset);
			a.offset += 4;
			return b
		},
		Lg = function (a) {
			var b = a.Sd.getInt32(a.offset);
			a.offset += 4;
			return b
		},
		Mg = function (a) {
			var b = J(a);
			a = J(a);
			return 4294967296 * b + a
		},
		Ng = function (a, b) {
			var c = a.buffer.subarray(a.offset, a.offset + b);
			a.offset += b;
			return c
		},
		Og = function (a) {
			for (var b =
					a.offset; a.offset < a.buffer.length && 0 !== a.Sd.getUint8(a.offset);) a.offset++;
			b = new Uint8Array(a.Sd.buffer, a.Sd.byteOffset + b, a.offset - b);
			a.offset++;
			a = [];
			for (var c = 0, d = 0; c < b.length;) {
				var e = b[c++];
				if (128 > e) a[d++] = String.fromCharCode(e);
				else if (191 < e && 224 > e) {
					var f = b[c++];
					a[d++] = String.fromCharCode((e & 31) << 6 | f & 63)
				} else if (239 < e && 365 > e) {
					f = b[c++];
					var g = b[c++],
						h = b[c++];
					e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
					a[d++] = String.fromCharCode(55296 + (e >> 10));
					a[d++] = String.fromCharCode(56320 + (e & 1023))
				} else f = b[c++],
					g = b[c++], a[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
			}
			return a.join("")
		},
		Pg = function (a) {
			return a.buffer.subarray(a.offset)
		},
		K = function (a, b) {
			a.offset += b
		};
	var Rg = function (a) {
			this.Jk = a;
			this.$h = this.xa = this.ue = this.mode = this.Zg = 0;
			this.wi = new Qg(this);
			this.xi = new Qg(this);
			this.$c = [];
			this.reset()
		},
		Sg = function (a) {
			return a.ue + a.xa
		};
	Rg.prototype.clear = function () {
		this.$h = this.ue = this.mode = 0;
		this.$c = [];
		this.reset()
	};
	Rg.prototype.reset = function () {
		this.mode = 0;
		this.wi.reset(0);
		this.xi.reset(1)
	};
	var Ug = function (a, b, c) {
			if (255 == a && 255 == b || !a && !b) return {
				cg: a,
				dg: b,
				result: 0
			};
			a = Tg[a];
			b = Tg[b];
			if (a & 128) {
				if (!(b & 128) && 0 != c.l && c.Zh == b) return {
					cg: a,
					dg: b,
					result: 1
				}
			} else if (b & 128 && 1 <= a && 31 >= a) return {
				cg: a,
				dg: b,
				result: 2
			};
			return {
				cg: a,
				dg: b,
				result: 3
			}
		},
		Wg = function (a, b, c) {
			255 == b && 255 == c || !b && !c ? (45 == ++a.$h && a.reset(), a.wi.md.clear(), a.xi.md.clear()) : (a.$h = 0, Vg(a.wi, b, c))
		};
	Rg.prototype.decode = function () {
		this.$c.sort(function (c, d) {
			var e = c.time - d.time;
			return 0 == e ? c.order - d.order : e
		});
		for (var a = 0; a < this.$c.length; a++) {
			var b = this.$c[a];
			this.ue = b.time;
			0 == b.type ? Wg(this, b.zk, b.Ak) : 1 == b.type && this.Zg & 496 && Vg(this.xi, b.zk, b.Ak)
		}
		this.$c.length = 0
	};
	var Tg = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
			12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
		],
		Xg = function () {
			this.tc = 0
		};
	Xg.prototype.set = function (a) {
		this.tc = a
	};
	Xg.prototype.get = function () {
		return this.tc
	};
	var Yg = function () {
		this.Zh = this.tk = this.l = 0
	};
	Yg.prototype.clear = function () {
		this.l = 0
	};
	Yg.prototype.update = function () {
		this.l = 2 == this.l ? 1 : 0
	};
	Yg.prototype.matches = function (a, b) {
		return 0 != this.l && a == this.tk && b == this.Zh
	};
	var Zg = function () {
		this.timestamp = this.vc = 0;
		this.af = !1
	};
	Zg.prototype.reset = function () {
		this.timestamp = this.vc = 0;
		this.af = !1
	};
	var $g = function (a) {
			this.Ab = [];
			for (var b = 0; 15 >= b; b++) {
				this.Ab[b] = [];
				for (var c = 0; 32 >= c; c++) this.Ab[b][c] = new Zg
			}
			this.ba = this.Ba = this.Da = 0;
			this.style = new Xg;
			this.ha = a;
			this.sf = 0
		},
		bh = function (a) {
			for (var b = "", c = Sg(a.ha), d = c, e = 1; 15 >= e; ++e) {
				for (var f = "", g = !1, h = 1; 32 >= h; ++h) {
					var l = a.Ab[e][h];
					if (0 != l.vc) {
						var m = String.fromCharCode(l.vc);
						" " != m && (g = !0);
						f += m;
						var q = l.timestamp;
						q < c && (c = q);
						q > d && (d = q);
						3 == a.style.tc ? (!l.af && " " == m && g && 32 > h && ah(a.ha.Jk, c, c, b ? b + "\n" + f : f), l.af = !0) : l.reset()
					}
				}
				f && (b = b ? b + "\n" + f : f)
			}
			b && ah(a.ha.Jk,
				c, d, b)
		};
	$g.prototype.reset = function (a) {
		for (var b = 0; 15 >= b; b++)
			for (var c = 0; 32 >= c; c++) this.Ab[b][c].reset();
		this.sf = a;
		this.ba = 0;
		this.Ba = this.Da = 1
	};
	var ch = function (a) {
			return a.Ab[a.Da][a.Ba]
		},
		fh = function (a, b, c) {
			2 <= b && 1 < a.Ba && (--a.Ba, ch(a).vc = 0);
			var d = ch(a);
			d.timestamp = Sg(a.ha);
			a: {
				switch (b) {
					case 0:
						b = dh[(c & 127) - 32];
						break a;
					case 1:
						b = eh[c & 15];
						break a
				}
				b = 0
			}
			d.vc = b;
			32 > a.Ba && a.Ba++
		},
		gh = function (a, b, c, d) {
			for (var e = 0; e < d; e++)
				for (var f = 0; 32 >= f; f++) {
					var g = a.Ab[b + e][f],
						h = a.Ab[c + e][f];
					g.vc = h.vc;
					g.timestamp = h.timestamp;
					g.af = h.af
				}
		},
		hh = function (a, b, c) {
			for (var d = 0; d < c; d++)
				for (var e = 0; 32 >= e; e++) a.Ab[b + d][e].reset()
		},
		ih = function (a) {
			a.Da = 0 < a.ba ? a.ba : 1;
			a.Ba = 1;
			hh(a,
				0, 15)
		},
		dh = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
		eh = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
		jh = function (a) {
			this.ha = a;
			this.ei = 0;
			this.style = new Xg;
			this.gj = new $g(a);
			this.hj = new $g(a);
			this.ka =
				new $g(a);
			this.Db = this.gj;
			this.de = this.hj;
			this.W = this.Db
		};
	jh.prototype.reset = function (a, b) {
		this.ei = b;
		this.style.set(2);
		this.Db = this.gj;
		this.de = this.hj;
		this.W = this.Db;
		var c = (a << 2) + (b << 1);
		this.gj.reset(c);
		this.hj.reset(c);
		this.ka.reset((a << 2) + (b << 1) + 1)
	};
	var kh = function (a, b) {
			var c = a.Db;
			switch (a.style.get()) {
				case 4:
					if (0 < c.ba) break;
				case 1:
				case 2:
					bh(c), ih(a.Db), ih(a.de), c.Da = 15, c.ba = b
			}
			a.style.set(3);
			a.W = c;
			a.W.style = a.style;
			a.ha.mode = 1 << c.sf;
			c.Ba = 1;
			c.ba != b && (c.ba > b ? (bh(c), hh(c, c.Da - c.ba, b)) : c.Da < b && (b = c.ba), c.ba = b)
		},
		lh = function (a) {
			a.style.set(1);
			a.W = a.de;
			a.W.ba = 0;
			a.W.style = a.style;
			a.ha.mode = 1 << a.W.sf
		},
		mh = function (a) {
			a.style.set(4);
			a.W = a.ka;
			a.W.style = a.style;
			a.ha.mode = 1 << a.W.sf
		},
		Qg = function (a) {
			this.ha = a;
			this.md = new Yg;
			this.yi = 0;
			this.eg = new jh(a);
			this.uk =
				new jh(a);
			this.mi = this.eg
		};
	Qg.prototype.reset = function (a) {
		this.yi = a;
		this.md.clear();
		this.mi = this.eg;
		this.eg.reset(a, 0);
		this.uk.reset(a, 1)
	};
	var Vg = function (a, b, c) {
		a.md.update();
		b = Ug(b, c, a.md);
		switch (b.result) {
			case 0:
				return;
			case 1:
			case 2:
				return
		}
		var d = b.cg;
		c = b.dg;
		if (32 <= d || !d) a.ha.mode & a.ha.Zg && (b = d, b & 128 && (b = 127), c & 128 && (c = 127), a = a.mi.W, b & 96 && fh(a, 0, b), c & 96 && fh(a, 0, c));
		else if (d & 16) a: if (!a.md.matches(d, c) && (b = a.md, b.tk = d, b.Zh = c, b.l = 2, b = d & 8 ? a.uk : a.eg, a.mi = b, a.ha.mode = 1 << (a.yi << 2) + (b.ei << 1) + (4 == b.style.tc ? 1 : 0), (a.ha.mode | 1 << (a.yi << 2) + (b.ei << 1) + (4 != b.style.tc ? 1 : 0)) & a.ha.Zg))
			if (c & 64) {
				a = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(d & 7) << 1 | c >>
					5 & 1
				];
				c = c & 16 ? 4 * ((c & 14) >> 1) : 0;
				d = b.W;
				switch (b.style.get()) {
					case 4:
						a = d.Da;
						break;
					case 3:
						if (a != d.Da) {
							if (a < d.ba && (a = d.ba, a == d.Da)) break;
							var e = 1 + d.Da - d.ba,
								f = 1 + a - d.ba;
							gh(d, f, e, d.ba);
							b = e;
							var g = d.ba;
							f < e ? (e = f + g - e, 0 < e && (b += e, g -= e)) : (e = e + g - f, 0 < e && (g -= e));
							hh(d, b, g)
						}
				}
				d.Da = a;
				d.Ba = c + 1
			} else switch (d & 7) {
				case 1:
					switch (c & 112) {
						case 32:
							fh(b.W, 0, 32);
							break a;
						case 48:
							57 == c ? (b = b.W, ch(b).vc = 0, 32 > b.Ba && b.Ba++) : fh(b.W, 1, c & 15)
					}
					break;
				case 2:
					c & 32 && fh(b.W, 2, c & 31);
					break;
				case 3:
					c & 32 && fh(b.W, 3, c & 31);
					break;
				case 4:
				case 5:
					if (32 <= c && 47 >=
						c) switch (c) {
						case 32:
							lh(b);
							break;
						case 33:
							b = b.W;
							1 < b.Ba && (--b.Ba, ch(b).vc = 0);
							break;
						case 36:
							b = b.W;
							a = ch(b);
							for (c = 0; 15 >= c; c++)
								for (d = 0; 32 >= d; d++)
									if (b.Ab[c][d] == a) {
										for (; 32 >= d; d++) b.Ab[c][d].reset();
										break
									}
							break;
						case 37:
							kh(b, 2);
							break;
						case 38:
							kh(b, 3);
							break;
						case 39:
							kh(b, 4);
							break;
						case 40:
							fh(b.W, 0, 32);
							break;
						case 41:
							b.style.set(2);
							b.W = b.Db;
							b.W.ba = 0;
							b.W.style = b.style;
							b.ha.mode = 1 << b.W.sf;
							break;
						case 42:
							a = b.ka;
							a.ba = 15;
							a.style.set(4);
							ih(a);
							mh(b);
							break;
						case 43:
							mh(b);
							break;
						case 44:
							a = b.Db;
							switch (b.style.get()) {
								case 1:
								case 2:
								case 3:
									bh(a)
							}
							hh(a,
								0, 15);
							break;
						case 45:
							b: {
								a = b.W;
								switch (b.style.get()) {
									default:
										case 2:
										case 1:
										break b;
									case 4:
											if (15 > a.Da) {
											++a.Da;
											a.Ba = 1;
											break b
										}
									case 3:
								}
								2 > a.ba && (a.ba = 2, a.Da < a.ba && (a.Da = a.ba));b = a.Da - a.ba + 1;bh(a);gh(a, b, b + 1, a.ba - 1);hh(a, a.Da, 1)
							}
							break;
						case 46:
							hh(b.de, 0, 15);
							break;
						case 47:
							bh(b.Db), a = b.de, b.de = b.Db, b.Db = a, lh(b)
					}
					break;
				case 7:
					switch (c) {
						case 33:
						case 34:
						case 35:
							b = b.W, 32 < (b.Ba += c & 3) && (b.Ba = 32)
					}
			}
	};
	var nh = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350],
		oh = function (a) {
			A(z("cast.player.mp4.base"), a)
		},
		ph = function (a, b, c) {
			if (0 > a || 32 <= a) return oh("Invalid object type id: " + a), null;
			var d = nh.indexOf(b);
			return 0 > d ? (oh("Invalid sample rate: " + b), null) : 0 > c || 16 < c ? (oh("Invalid channels: " + c), null) : new Uint8Array([a << 3 | d >> 1, d << 7 | c << 3])
		};
	var rh = function (a) {
		this.ia = qh(a)
	};
	rh.prototype.reset = function (a) {
		this.ia = qh(a)
	};
	var qh = function (a) {
		for (var b = -1, c = 0; c < a.length; c++) {
			var d = parseInt(a.charAt(c), 10);
			if (isNaN(d)) throw Error("Invalid positive base 10 integer string");
			0 > b && d && (b = c)
		}
		return a.substr(b, a.length)
	};
	rh.prototype.toString = function () {
		return this.ia
	};
	rh.prototype.add = function (a) {
		if (0 > a || Math.floor(a) != a) throw Error("Value must be a positive integer");
		var b = a + "",
			c = Math.max(b.length, this.ia.length);
		a = [];
		for (var d = 0, e = 0; e < c; e++) {
			var f = d + parseInt(e < b.length ? b.charAt(b.length - 1 - e) : "0", 10) + parseInt(e < this.ia.length ? this.ia.charAt(this.ia.length - 1 - e) : "0", 10);
			10 <= f ? (d = 1, f -= 10) : d = 0;
			a.push(f)
		}
		b = 0 < d ? "1" : "";
		for (c = a.length - 1; 0 <= c; c--) b += a[c];
		this.ia = b
	};
	var sh = function (a, b) {
		if (b.ia.length < a.ia.length) return !0;
		if (b.ia.length > a.ia.length) return !1;
		for (var c = 0; c < b.ia.length; c++) {
			var d = parseInt(a.ia.charAt(c), 10),
				e = parseInt(b.ia.charAt(c), 10);
			if (d < e) return !1;
			if (d > e) break
		}
		return !0
	};
	var th = function (a) {
		Ig.call(this, a)
	};
	p(th, Ig);
	var uh = function (a) {
			this.buffer = new Uint8Array(new ArrayBuffer(a ? a : 2E4));
			this.offset = 0
		},
		vh = function (a) {
			return a.buffer.subarray(0, a.offset)
		};
	uh.prototype.Qh = function (a) {
		L(this, [a])
	};
	uh.prototype.Hd = function (a) {
		L(this, [a >> 8, a])
	};
	uh.prototype.s = function (a) {
		L(this, [a >> 24, a >> 16, a >> 8, a])
	};
	uh.prototype.nk = function (a) {
		this.s(a / 4294967296);
		this.s(a % 4294967296)
	};
	var L = function (a, b) {
		var c = b.length;
		if (!(a.offset + c <= a.buffer.length)) {
			for (var d = a.buffer.length; d < a.offset + c;) d *= 2;
			d = new Uint8Array(new ArrayBuffer(d));
			d.set(a.buffer, 0);
			a.buffer = d
		}
		a.buffer.set(b, a.offset);
		a.offset += c
	};
	var wh = function (a) {
		uh.call(this, a)
	};
	p(wh, uh);
	var xh = function (a, b, c) {
		(new DataView(a.buffer, a.byteOffset, a.byteLength)).setUint32(b, c)
	};
	var yh = function (a) {
			this.U = new th(a);
			this.Tc = 0;
			this.ye = this.$g = null;
			this.hh = a;
			this.Hb = 0;
			this.Tc = J(this.U);
			this.Hb = 4;
			this.$g = J(this.U);
			this.Hb += 4;
			1 === this.Tc && (this.Tc = Mg(this.U), this.Hb += 8);
			1970628964 === this.$g && (this.ye = new jg(Ng(this.U, 16)), this.Hb += 16)
		},
		zh = function (a) {
			switch (a.$g) {
				case 1836019574:
				case 1836019558:
				case 1836475768:
				case 1953653099:
				case 1953653094:
				case 1701082227:
				case 1835297121:
				case 1835626086:
				case 1684631142:
				case 1937007212:
					return !0;
				default:
					return !1
			}
		};
	yh.prototype.Ha = function () {
		return this.$g
	};
	var Ah = function (a) {
			return a.hh.subarray(0, a.Tc)
		},
		M = function (a) {
			return Ah(a).subarray(a.Hb)
		};
	yh.prototype.u = function (a) {
		L(a, this.hh.subarray(0, this.Tc))
	};
	var N = function (a) {
		yh.call(this, a);
		this.Cc = this.oa = 0;
		a = J(this.U);
		this.Hb += 4;
		this.oa = a >>> 24;
		this.Cc = a & 16777215
	};
	p(N, yh);
	var Bh = function (a) {
		N.call(this, a)
	};
	p(Bh, N);
	Bh.prototype.Di = function (a) {
		for (var b = this.oa, c = Jg(this.U), d = Array(c), e = 0; e < c; e++) {
			if (1 === b) {
				var f = J(this.U);
				var g = J(this.U);
				var h = J(this.U);
				var l = J(this.U);
				var m = new rh(Math.floor(4294967296 * f / 1E4).toString() + "0000");
				m.add(f % 1E4 * 7296 % 1E4);
				m.add(g);
				f = 4294967296 / a * f + g / a;
				h = 4294967296 / a * h + l / a
			} else l = J(this.U), h = J(this.U), m = new rh(l.toString()), f = l / a, h /= a;
			d[e] = {
				time: f,
				duration: h,
				ic: m,
				offset: 0,
				size: 0,
				url: null
			}
		}
		return d
	};
	var Ch = new jg([212, 128, 126, 242, 202, 57, 70, 149, 142, 84, 38, 203, 158, 70, 167, 159]),
		Dh = function (a) {
			N.call(this, a)
		};
	p(Dh, N);
	Dh.prototype.Di = function (a) {
		var b = this.oa;
		K(this.U, 4);
		var c = J(this.U),
			d = 0 === b ? J(this.U) : Mg(this.U),
			e = 0 === b ? J(this.U) : Mg(this.U),
			f = a + Ah(this).byteOffset,
			g = this.Tc;
		K(this.U, 2);
		a = Kg(this.U);
		b = Array(a);
		e = f + g + e;
		for (f = 0; f < a; f++) {
			g = J(this.U) & 2147483647;
			var h = J(this.U);
			K(this.U, 4);
			b[f] = {
				time: d / c,
				duration: h / c,
				ic: null,
				offset: e,
				size: g,
				url: null
			};
			d += h;
			e += g
		}
		return b
	};
	var Eh = function (a) {
		N.call(this, a);
		this.uh = new Uint8Array([]);
		this.Hj = null;
		this.Vi = !1;
		this.qb()
	};
	p(Eh, N);
	Eh.prototype.qb = function () {
		var a = new th(M(this)),
			b = this.Cc;
		b & 1 && K(a, 20);
		var c = J(a);
		this.Hj = Pg(a);
		this.Vi = b & 2 ? !0 : !1;
		this.uh = new Uint8Array(new ArrayBuffer(c));
		for (b = 0; b < c; b++)
			if (this.Vi) {
				K(a, 8);
				var d = 6 * Kg(a);
				this.uh[b] = 10 + d;
				K(a, d)
			} else this.uh[b] = 8, K(a, 8)
	};
	var Fh = new jg([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]),
		Gh = function (a) {
			N.call(this, a);
			this.Ac = 0;
			this.qb()
		};
	p(Gh, N);
	Gh.prototype.qb = function () {
		var a = new th(M(this));
		K(a, 4);
		K(a, 4);
		this.Ac = J(a)
	};
	var Hh = function (a) {
		N.call(this, a);
		this.th = 0;
		this.Zl = [];
		this.sh = [];
		this.qb()
	};
	p(Hh, N);
	Hh.prototype.qb = function () {
		var a = new th(M(this));
		this.th = J(a);
		var b = this.Cc;
		b & 1 && K(a, 4);
		b & 4 && K(a, 4);
		var c = !!(b & 256),
			d = !!(b & 512),
			e = !!(b & 1024);
		b = !!(b & 2048);
		for (var f = 0; f < this.th; f++) c && K(a, 4), d && this.Zl.push(J(a)), e && K(a, 4), b && (1 === this.oa ? this.sh.push(Lg(a)) : this.sh.push(J(a)))
	};
	Hh.prototype.yh = function (a) {
		xh(M(this), 4, a)
	};
	var Ih = function (a) {
		N.call(this, a);
		this.Ea = 9E4;
		this.qb()
	};
	p(Ih, N);
	Ih.prototype.qb = function () {
		var a = new th(M(this));
		1 === this.oa ? (K(a, 8), K(a, 8)) : (K(a, 4), K(a, 4));
		this.Ea = J(a)
	};
	var Jh = function (a) {
		N.call(this, a)
	};
	p(Jh, N);
	var Kh = function (a) {
		N.call(this, a);
		this.Xj = new jg(Ng(this.U, 16));
		a = J(this.U);
		this.mg = Ng(this.U, a)
	};
	p(Kh, N);
	Kh.prototype.getData = function () {
		return this.mg
	};
	var Lh = function (a) {
		N.call(this, a);
		this.oc = 1 === this.oa ? Mg(this.U) : J(this.U)
	};
	p(Lh, N);
	Lh.prototype.fd = function () {
		return this.oc
	};
	var Mh = function (a) {
		N.call(this, a)
	};
	p(Mh, N);
	var Nh = function (a) {
		yh.call(this, a)
	};
	p(Nh, yh);
	Nh.prototype.yh = function (a, b) {
		var c = O(M(this), 1953653094, void 0, void 0);
		if (c) {
			var d = O(M(c), 1953658222, void 0, void 0);
			d && d.yh(a - this.hh.byteOffset);
			b && (a = O(M(c), 1935763823, void 0, void 0)) && (b -= this.hh.byteOffset, c = 0, a.Cc & 1 && (c += 8), c += 4, d = M(a), 0 != a.oa && (xh(d, c, Math.floor(b / 4294967296)), c += 4), xh(d, c, Math.floor(b % 4294967296)))
		}
	};
	var Oh = function (a, b) {
			var c = O(a, 1836019558);
			a = M(O(a, 1835295092)).byteOffset;
			b ? c.yh(a + b, a) : c.yh(a)
		},
		Ph = function (a) {
			N.call(this, a);
			this.fj = [];
			this.am = [];
			this.ri = 0;
			this.qb()
		};
	p(Ph, N);
	Ph.prototype.qb = function () {
		var a = new th(M(this));
		this.ri = J(a);
		for (var b = 0; b < this.ri; b++) {
			if (1 === this.oa) {
				this.am.push(Mg(a));
				var c = this.fj,
					d = c.push,
					e = J(a),
					f = J(a),
					g = e & 2147483648;
				g && (f = ~f + 1 >>> 0, e = ~e >>> 0, 0 === f && (e = e + 1 >>> 0));
				e = 4294967296 * e + f;
				d.call(c, g ? -e : e)
			} else 0 === this.oa && (this.am.push(J(a)), this.fj.push(Lg(a)));
			K(a, 2);
			K(a, 2)
		}
	};
	var Qh = function (a) {
		N.call(this, a);
		this.hk = this.Jj = "";
		this.Eb = this.oc = this.Ki = this.sg = this.jh = this.Ea = 0;
		this.ul = [];
		this.qb()
	};
	p(Qh, N);
	Qh.prototype.fd = function () {
		return this.oc
	};
	Qh.prototype.qb = function () {
		var a = new th(M(this));
		0 === this.oa ? (this.Jj = Og(a), this.hk = Og(a), this.Ea = J(a), this.jh = J(a), this.sg = J(a), this.Ki = J(a)) : 1 === this.oa && (this.Ea = J(a), this.jh = Mg(a), this.sg = J(a), this.Ki = J(a), this.Jj = Og(a), this.hk = Og(a));
		for (; a.offset < a.buffer.length;) this.ul.push(Jg(a))
	};
	var Rh = function (a) {
			switch (a.Ha()) {
				case 1701671783:
					return new Qh(Ah(a));
				case 1701606260:
					return new Ph(Ah(a));
				case 1836019558:
					return new Nh(Ah(a));
				case 1835296868:
					return new Ih(Ah(a));
				case 1953658222:
					return new Hh(Ah(a));
				case 1935763823:
					return new Mh(Ah(a));
				case 1936286840:
					return new Dh(Ah(a));
				case 1952868452:
					return new Jh(Ah(a));
				case 1970628964:
					var b = a.ye;
					return Fh.$b(b) ? new Eh(Ah(a)) : Ch.$b(b) ? new Bh(Ah(a)) : a;
				case 1886614376:
					return new Kh(Ah(a));
				case 1952867444:
					return new Lh(Ah(a));
				case 1953654136:
					return new Gh(Ah(a));
				case 1702061171:
				case 1751411826:
				case 1835427940:
				case 1836476516:
				case 1935763834:
				case 1935894637:
				case 1937011571:
				case 1952804451:
				case 1953196132:
					return new N(Ah(a));
				default:
					return a
			}
		},
		O = function (a, b, c, d) {
			d = void 0 === d ? !1 : d;
			for (var e = 0; e < a.length;) {
				var f = new yh(a.subarray(e));
				e += f.Tc;
				if (f.Ha() === b && (1970628964 != b || c && c.$b(f.ye))) return Rh(f);
				if (d && zh(f) && (f = O(M(f), b, c, d))) return f
			}
			return null
		},
		Sh = function (a, b, c) {
			c = void 0 === c ? !1 : c;
			for (var d = 0, e = []; d < a.length;) {
				var f = new yh(a.subarray(d));
				d += f.Tc;
				if (b) {
					var g =
						f.Ha();
					g && b.includes(g) && e.push(Rh(f))
				} else e.push(Rh(f));
				c && zh(f) && (e = e.concat(Sh(M(f), b, c)))
			}
			return e
		},
		Th = function (a, b) {
			return Sh(a, void 0, void 0 === b ? !1 : b)
		};
	var Uh = function () {},
		Vh = function () {
			Uh.Te();
			return !0
		},
		Wh = function () {
			Uh.Te();
			return !1
		};
	Uh.prototype.reset = function () {};
	ra(Uh);
	var Xh = function (a) {
		this.ci = a;
		this.Rb = 0;
		this.wb = new Uint8Array(5120);
		this.qg = Vh()
	};
	Xh.prototype.clear = function () {
		this.Rb = 0
	};
	Xh.prototype.append = function (a) {
		this.wb.set(a, this.Rb);
		this.Rb += a.length
	};
	Xh.prototype.process = function (a) {
		for (var b, c = b = 0, d = 0; c < this.Rb;) 2 == b && 3 == this.wb[c] ? b = 0 : (0 == this.wb[c] ? b++ : b = 0, this.wb[d] = this.wb[c], d++), c++;
		b = c - d;
		for (c = 0; c + b < this.Rb;) {
			for (var e = 0; 255 == this.wb[c];) e += 255, c++;
			e += this.wb[c++];
			if (45 < e && !this.qg) break;
			for (d = 0; 255 == this.wb[c];) d += 255, c++;
			d += this.wb[c++];
			if (4 == e) {
				e = this.ci.ha;
				var f = a,
					g = new Ig(this.wb.subarray(c, c + d));
				if (181 == Jg(g) && 49 == Kg(g) && 1195456820 == J(g) && 3 == Jg(g)) {
					var h = Jg(g);
					if (0 != (h & 64)) {
						h &= 31;
						K(g, 1);
						for (var l = 0; l < h; l++) {
							var m = Jg(g),
								q = (m & 4) >>
								2,
								u = Jg(g),
								E = Jg(g);
							q && e.$c.push({
								time: f,
								type: m & 3,
								zk: u,
								Ak: E,
								order: e.$c.length
							})
						}
					}
				}
			}
			c += d
		}
		this.Rb = 0
	};
	var Yh = function (a) {
		this.Sb = new Xh(a);
		this.Wd = 0;
		this.Ea = 9E4;
		this.Ac = null;
		this.Nb = []
	};
	k = Yh.prototype;
	k.qa = function (a) {
		a ? this.Nb = Sh(a, [1835296868, 1953654136, 1953658222, 1835295092], !0) : (this.Nb = [], this.Wd = 0)
	};
	k.bm = function (a) {
		this.Wd = a
	};
	k.dm = function (a) {
		this.Ea = a
	};
	k.eb = function () {
		return !this.Nb.length
	};
	k.Mg = function () {
		return !this.Nb.length
	};
	k.parse = function () {
		if (this.Nb.length) {
			for (var a, b, c, d = 0, e = 0; e < this.Nb.length; e++) {
				var f = this.Nb[e];
				switch (f.Ha()) {
					case 1835296868:
						this.Ea = f.Ea;
						break;
					case 1953654136:
						this.Ac = f.Ac;
						break;
					case 1953658222:
						a = f.th;
						b = f.Zl;
						c = f.sh;
						break;
					case 1835295092:
						var g = b,
							h = c;
						if (a && g && g.length && h) {
							f = new Ig(M(f));
							if (this.Ac && this.Ea) var l = this.Ac / this.Ea;
							else if (this.Nb.length) {
								l = 0;
								for (var m = n(this.Nb), q = m.next(); !q.done; q = m.next()) q = q.value, 1953658222 == q.Ha() && (l += q.th);
								l = l ? this.Wd / l : 0
							} else l = 0;
							m = 0;
							for (q = g[0]; f.offset <
								f.buffer.length;) {
								var u = J(f);
								6 == (Jg(f) & 31) ? (this.Sb.append(Ng(f, u - 1)), this.Sb.process(0 == h.length ? d : d + h[m] / this.Ea)) : K(f, u - 1);
								q -= u + 4;
								0 == q && (d += l, m++, q = g[m])
							}
						}
				}
			}
			this.Nb = []
		}
	};
	var Zh = function () {
		this.B = null;
		this.Vd = this.kc = this.Zk = this.Wh = this.Eg = this.Bf = this.K = 0;
		this.Ol = this.Dk = !1
	};
	Zh.prototype.eb = function () {
		return null === this.B
	};
	Zh.prototype.Mg = function () {
		return this.K >= this.B.length
	};
	Zh.prototype.qa = function (a) {
		this.B = a;
		this.Vd = this.kc = this.Wh = this.Eg = this.Bf = this.K = 0
	};
	Zh.prototype.parse = function () {
		for (var a = this.K; this.K < this.B.length && !(524288 < this.K - a);) {
			for (; this.K < this.B.length && 71 != this.B[this.K];) this.K++;
			if (this.K + 188 > this.B.length) break;
			var b = this.K + 188,
				c = b - 1;
			this.K++;
			var d = this.B[this.K] & 64,
				e = this.B[this.K] & 31;
			this.K++;
			e = e << 8 | this.B[this.K];
			this.K++;
			var f = (this.B[this.K] & 48) >> 4;
			this.K++;
			f & 2 && (this.K += this.B[this.K] + 1);
			if (0 == e || e == this.Bf)
				if (d && this.K++, c = this.B[this.K], this.K++, 0 == c)
					for (c = this.K, d = this.B[c] & 15, c++, d = d << 8 | this.B[c], c++, d = c + d - 4, c += 5; c < d;)
						if (e =
							this.B[c], c++, e = (e << 8) + this.B[c], c++, 0 == e) c += 2;
						else {
							this.Bf = this.B[c] & 31;
							c++;
							this.Bf = (this.Bf << 8) + this.B[c];
							break
						}
			else {
				if (2 == c)
					for (this.Ol = !0, c = this.K, d = this.B[c] & 15, c++, d = d << 8 | this.B[c], c++, d = c + d - 4, c = c + 5 + 2, e = this.B[c] & 15, c++, e = e << 8 | this.B[c], c += e + 1; c < d;) {
						e = this.B[c];
						c++;
						f = this.B[c] & 31;
						c++;
						f = f << 8 | this.B[c];
						c++;
						switch (e) {
							case 27:
							case 219:
								this.Eg = f;
								break;
							case 15:
							case 207:
								this.Dk = !0;
								this.Wh = f;
								break;
							case 21:
								this.Zk = f
						}
						e = this.B[c] & 15;
						c++;
						e = e << 8 | this.B[c];
						c += e + 1
					}
			} else if (e == this.Zk) this.Nl(this.K, c, !!d);
			else if (e == this.Eg || e == this.Wh) d && this.wj(this.K), e == this.Eg && this.Ml(this.K, c);
			this.K = b
		}
	};
	var $h = function (a, b) {
		var c = ((a.B[b] & 14) << 13) / 1.373291015625;
		c += (a.B[b + 1] << 6) / 1.373291015625;
		c += (a.B[b + 2] & 254) / 5.4931640625;
		c += a.B[b + 3] / 703.125;
		return c += (a.B[b + 4] & 254) / 18E4
	};
	Zh.prototype.wj = function (a) {
		if (0 == this.B[a] && 0 == this.B[a + 1] && 1 == this.B[a + 2]) {
			a += 7;
			var b = this.B[a] >> 6 & 3;
			a++;
			var c = this.B[a];
			a++;
			this.K = a + c;
			2 == b ? this.Vd = this.kc = $h(this, a) : 3 == b && (this.kc = $h(this, a), this.Vd = $h(this, a + 5))
		}
	};
	Zh.prototype.Nl = function () {};
	Zh.prototype.Ml = function () {};
	var ai = function (a) {
		Zh.call(this);
		this.Sb = new Xh(a);
		this.qg = Vh()
	};
	p(ai, Zh);
	ai.prototype.qa = function (a) {
		Zh.prototype.qa.call(this, a);
		this.Sb.clear()
	};
	ai.prototype.bm = function () {};
	ai.prototype.dm = function () {};
	ai.prototype.Ml = function (a, b) {
		for (var c = 0;;) {
			var d = bi(this, a, b),
				e = 0 <= d;
			if (this.qg ? 0 < this.Sb.Rb || 6 === c || e : 0 < this.Sb.Rb || 6 == c) {
				c = e ? d - 1 : b;
				var f = this.Sb;
				f.Rb + (c - a + 1) <= f.wb.length || this.Sb.process(this.kc);
				this.Sb.append(this.B.subarray(a, c + 1))
			}
			if (!e) break;
			this.Sb.process(this.kc);
			a = d;
			c = this.B[a++] & 31
		}
	};
	var bi = function (a, b, c) {
		if (a.qg && b >= c) return -1;
		for (c -= 3; b <= c;) {
			if (0 == a.B[b] && 0 == a.B[b + 1]) {
				if (0 == a.B[b + 2] && 1 == a.B[b + 3]) return b + 4;
				if (1 == a.B[b + 2]) return b + 3
			}
			b++
		}
		return -1
	};
	var ci = function (a, b, c) {
		this.A = a;
		this.xk = "cast-captions-cue-styling";
		this.Fk = "[" + this.xk + '="true"]::cue';
		for (a = this.A; a.parentNode;) a = a.parentNode;
		this.Fj = 0 > a.toString().toLowerCase().indexOf("shadow") ? document.head : a;
		a = this.Fj.getElementById ? this.Fj.getElementById("cue-style") : document.getElementById("cue-style");
		a || (a = document.createElement("style"), a.id = "cue-style", a.type = "text/css", this.Fj.appendChild(a), a.appendChild(document.createTextNode("")));
		this.Mm = a;
		this.Pd = this.Mm.sheet;
		this.hg = b;
		this.Em =
			c
	};
	ci.prototype.Qf = function (a, b) {
		var c = this,
			d = this.hg.Cg();
		if (!(0 === a.length || 0 < d.length)) {
			switch (this.Em) {
				case "webvtt":
					di(this, ".white", "color: rgba(255,255,255,1);"), di(this, ".lime", "color: rgba(0,255,0,1);"), di(this, ".cyan", "color: rgba(0,255,255,1);"), di(this, ".red", "color: rgba(255,0,0,1);"), di(this, ".yellow", "color: rgba(255,255,0,1);"), di(this, ".magenta", "color: rgba(255,0,255,1);"), di(this, ".blue", "color: rgba(0,0,255,1);"), di(this, ".black", "color: rgba(0,0,0,1);"), di(this, ".bg_white", "background-color: rgba(255,255,255,1);"), di(this,
						".bg_lime", "background-color: rgba(0,255,0,1);"), di(this, ".bg_cyan", "background-color: rgba(0,255,255,1);"), di(this, ".bg_red", "background-color: rgba(255,0,0,1);"), di(this, ".bg_yellow", "background-color: rgba(255,255,0,1);"), di(this, ".bg_magenta", "background-color: rgba(255,0,255,1);"), di(this, ".bg_blue", "background-color: rgba(0,0,255,1);"), di(this, ".bg_black", "background-color: rgba(0,0,0,1);"), a = ei(b, a)
			}
			a = n(a);
			for (b = a.next(); !b.done; b = a.next()) {
				b = b.value;
				d = b.wh.map(function (e) {
					return "" + c.Fk + e
				});
				d = d.join(",\n");
				try {
					this.Pd.insertRule(d + " { " + b.rules + " }", this.Pd.cssRules.length)
				} catch (e) {
					B(fi, "Found invalid style: " + (d + " { " + b.rules + " }"))
				}
			}
			this.A.setAttribute(this.xk, !0)
		}
	};
	ci.prototype.Nd = function () {
		if (!(0 < this.hg.Cg().length))
			for (var a = this.Pd.cssRules.length - 1; 0 <= a; a--) this.Pd.deleteRule(a)
	};
	var di = function (a, b, c) {
			a.Pd.insertRule(a.Fk + "(" + b + ") { " + c + " }", a.Pd.cssRules.length)
		},
		ei = function (a, b) {
			if (!a) return b;
			for (var c = n(b), d = c.next(); !d.done; d = c.next()) d = d.value, d.wh = d.wh.filter(function (e) {
				if (!e.includes("#")) return !0;
				if (!a.Ji) return !1;
				for (var f = e, g, h; h = gi.exec(e);) g = h[0], h = h[1].replace(/^0*/, ""), h = String.fromCodePoint(parseInt(h, 16)), f = f.replace(g, h);
				f = f.replace(/\\/g, "");
				return a.Ji && f.includes(a.Ji)
			}).map(function (e) {
				return e.startsWith("(#") ? "" : e
			});
			return b.filter(function (e) {
				return 0 <
					e.wh.length
			})
		},
		gi = /\\([0-9A-Fa-f]{1,6})\s?/g,
		fi = z("cast.player.core.CaptionsStyler");
	var hi = function () {
			this.Le = new uf
		},
		ii = function (a) {
			return a.Le.$a().map(function (b) {
				return $a(b)
			})
		};
	hi.prototype.uj = function (a, b) {
		a = (new TextDecoder).decode(a);
		return this.parse(a, b)
	};
	var ji = function (a) {
		this.Le = new uf;
		this.wg = 30;
		this.bn = a;
		this.Dg = null
	};
	p(ji, hi);
	var ki = function (a, b) {
			a = n(a);
			for (var c = a.next(); !c.done; c = a.next())
				if (c = c.value, c.localName === b) return c;
			return null
		},
		ni = function (a, b) {
			var c = b.split(":");
			if (1 == c.length) {
				var d = 0;
				if (c = c[0].match(li)) switch (b = parseFloat(c[1]), c[2]) {
					case "h":
						d = 3600 * b;
						break;
					case "m":
						d = 60 * b;
						break;
					case "s":
						d = b;
						break;
					case "ms":
						d = b / 1E3;
						break;
					case "f":
						d = b / a.wg
				} else B(mi, "unsupported time expression: " + b);
				return d
			}
			d = 3600 * parseInt(c[0], 10) + 60 * parseInt(c[1], 10) + parseFloat(c[2]);
			4 == c.length && (d += parseInt(c[3], 10) / a.wg);
			return d
		},
		oi = function (a, b) {
			var c = "";
			b = n(b.childNodes);
			for (var d = b.next(); !d.done; d = b.next()) d = d.value, d.nodeType == Node.TEXT_NODE ? (d = d.textContent.trim()) && (c += d) : "span" == d.localName ? (c += oi(a, d), (d = d.attributes.getNamedItem("tts:fontStyle")) && "italic" == d.value && (c = "<i>" + c + "</i>")) : "br" == d.localName && (c += "\n");
			return c
		};
	ji.prototype.parse = function (a, b) {
		var c = [],
			d = new DOMParser;
		a = kb(d, Tf(a));
		a = ki(a.childNodes, "tt");
		if (!a) return B(mi, "missing tt"), c;
		if (d = a.attributes.getNamedItem("tts:extent")) this.Dg = pi(this, d.value, !0);
		var e = d = null,
			f = ki(a.childNodes, "head");
		if (f) {
			if (e = ki(f.childNodes, "styling")) {
				d = null;
				e = n(e.childNodes);
				for (var g = e.next(); !g.done; g = e.next()) {
					var h = g.value;
					"style" === h.nodeName && h.attributes && (g = h.attributes.getNamedItem("xml:id")) && (h = qi(this, {
						node: h,
						rc: d
					}), d = d || new Map, d.set(g.value, h))
				}
			} else d =
				null;
			e = d;
			if (g = ki(f.childNodes, "layout")) {
				f = null;
				g = n(g.childNodes);
				for (h = g.next(); !h.done; h = g.next()) {
					var l = h.value;
					"region" === l.nodeName && l.attributes && (h = l.attributes.getNamedItem("xml:id")) && (l = qi(this, {
						node: l,
						rc: e
					}), l.textAlign = l.textAlign || "left", f = f || new Map, f.set(h.value, l))
				}
				e = f
			} else e = null
		}
		f = ki(a.childNodes, "body");
		if (!f) return B(mi, "missing body"), c;
		(c = a.attributes.getNamedItem("ttp:frameRate")) ? this.wg = parseInt(c.value, 10): (B(mi, "defaulting frameRate to30"), this.wg = 30);
		c = {};
		if (a = ki(a.childNodes,
				"head"))
			if (a = ki(a.childNodes, "metadata"))
				for (a = n(a.childNodes), g = a.next(); !g.done; g = a.next()) g = g.value, "image" == g.localName && (c["#" + g.attributes.getNamedItem("xml:id").value] = oi(this, g));
		a = qi(this, {
			node: f,
			rc: d,
			Mi: !0
		});
		return ri(this, {
			node: f,
			T: b,
			Lf: e,
			rc: d,
			al: c,
			Zd: a
		})
	};
	var ri = function (a, b) {
			var c = b.node,
				d = b.T,
				e = b.Lf,
				f = b.rc,
				g = b.al;
			b = b.Zd;
			var h = null,
				l = null,
				m = null,
				q = [];
			if (!c.attributes) return q;
			for (var u = oi(a, c), E = n(c.attributes), C = E.next(); !C.done; C = E.next()) switch (C = C.value, C.localName) {
				case "begin":
					h = ni(a, C.value) + d;
					break;
				case "end":
					l = ni(a, C.value) + d;
					break;
				case "backgroundImage":
					g[C.value] && (m = g[C.value])
			}(u || m) && null !== h && null !== l ? (E = qi(a, {
				node: c,
				rc: f,
				Lf: e,
				Zd: b
			}), h = new VTTCue(h, l, u), !a.bn && (E.textAlign && (h.align = E.textAlign), l = E.origin) && (h.line = l.y, "%" === l.Kh &&
				(h.position = l.x, "left" !== h.align && "right" !== h.align && (h.position = 50)), h.snapToLines = !1), q.push({
				te: h,
				cn: m,
				ve: E
			})) : (u || m || h || l) && B(mi, "Cue not recognized: begin=" + h + ", end=" + l + ", cueText=" + (u + ", imageData=" + m));
			c = n(c.children);
			for (m = c.next(); !m.done; m = c.next()) h = m.value, m = qi(a, {
				node: h,
				rc: f,
				Zd: b,
				Mi: !0
			}), Array.prototype.push.apply(q, ri(a, {
				node: h,
				T: d,
				Lf: e,
				rc: f,
				al: g,
				Zd: m
			}));
			return q
		},
		si = function (a) {
			if ("auto" === a) return null;
			a = a.split(" ");
			return 2 !== a.length ? (B(mi, "Two numbers are expected in tts:origin"),
				null) : a.find(function (b) {
				return !b.includes("%")
			}) ? (B(mi, "Only percentage values are supported in tts:origin!"), null) : {
				x: parseInt(a[0], 10),
				y: parseInt(a[1], 10),
				Kh: "%"
			}
		},
		pi = function (a, b, c) {
			c = void 0 === c ? !1 : c;
			if ("auto" === b) return null;
			var d = b.split(" ");
			if (2 !== d.length) return B(mi, "Two numbers are expected in tts:extent"), null;
			b = parseInt(d[0], 10);
			var e = parseInt(d[1], 10);
			d = d.find(function (f) {
				return f.includes("%")
			}) ? "%" : "px";
			!c && a.Dg && (b *= 100 / a.Dg.width, e *= 100 / a.Dg.height, d = "%");
			return {
				width: b,
				height: e,
				Kh: d
			}
		},
		qi = function (a, b) {
			var c = b.node,
				d = void 0 === b.rc ? null : b.rc,
				e = void 0 === b.Lf ? null : b.Lf,
				f = void 0 === b.Zd ? void 0 : b.Zd;
			b = void 0 === b.Mi ? !1 : b.Mi;
			f = f && Object.assign({}, f) || {};
			if (!c.attributes) return f;
			if (d) {
				var g = c.attributes.getNamedItem("style");
				g && Object.assign(f, d.get(g.value))
			}
			e && (d = c.attributes.getNamedItem("region")) && Object.assign(f, e.get(d.value));
			c = n(c.attributes);
			for (d = c.next(); !d.done; d = c.next()) switch (e = a, d = d.value, g = f, d.name) {
				case "tts:origin":
					g.origin = si(d.value);
					break;
				case "tts:extent":
					g.Pe =
						pi(e, d.value);
					break;
				case "tts:textAlign":
					g.textAlign = d.value
			}
			if (b) {
				a = {};
				b = n(Object.entries(f));
				for (f = b.next(); !f.done; f = b.next()) c = n(f.value), f = c.next().value, c = c.next().value, ti.has(f) && (a[f] = c);
				f = a
			}
			return f
		},
		mi = z("cast.player.core.TtmlParser"),
		li = /([0-9]*\.?[0-9]+)?(h|ms|m|s|f)/,
		ti = new Set("color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline visibility wrapOption".split(" "));
	var ui = function () {
		ji.apply(this, arguments)
	};
	p(ui, ji);
	ui.prototype.uj = function (a, b) {
		a = O(a, 1835295092);
		if (!a) return [];
		a = Pg(new Ig(M(a)));
		return ji.prototype.uj.call(this, a, b)
	};
	var vi = function () {
		this.Le = new uf;
		this.tg = -1
	};
	p(vi, hi);
	vi.prototype.parse = function (a, b) {
		this.tg = -1;
		for (var c = a.trim().split(wi), d = 0, e = 0, f = n(c[0].split("\n")), g = f.next(); !g.done; g = f.next())
			if (g = g.value, 0 == g.indexOf("X-TIMESTAMP-MAP")) {
				(f = g.match(xi)) && (d = yi(f[1]));
				(f = g.match(zi)) && (e = parseInt(f[1], 10) / 9E4);
				break
			}
		b += e - d;
		if (isNaN(b)) return B(Ai, "invalid time offset"), [];
		d = [];
		c = n(c);
		for (e = c.next(); !e.done; e = c.next())
			if (e = e.value) {
				for (var h = b, l = null, m = null, q = null, u = null, E = g = f = null, C = 0, va = e.split("\n"), ja = 0; ja < va.length; ja++) {
					var bc = va[ja];
					if (l = bc.match(Bi)) {
						m =
							bc.match(Ci);
						q = bc.match(Di);
						u = bc.match(Ei);
						f = bc.match(Fi);
						g = bc.match(Gi);
						0 < ja && (E = va[ja - 1]);
						break
					}
					C++
				}
				l ? (ja = yi(l[1]), l = yi(l[2]), C = va.slice(C + 1).join("\n"), isNaN(ja) || isNaN(l) || !C ? (B(Ai, "skipped cue, begin=" + ja + ", end=" + l + ", text=" + C), f = null) : (h = new VTTCue(ja + h, l + h, C), m && (h.align = m[1]), q && (h.snapToLines = "true" === q[1]), u && (m = parseInt(u[1], 10), !h.snapToLines && (100 < m || 0 > m) && (m = 100), h.line = m), f && (h.position = parseInt(f[1], 10)), g && (h.size = parseInt(g[1], 10)), f = {
					te: h,
					Ji: E
				})) : f = null;
				f && (-1 === this.tg && (this.tg =
					a.indexOf(e)), d.push(f))
			}
		Hi(this, a);
		return d
	};
	var Hi = function (a, b) {
			b = b.substring(0, a.tg);
			b = b.replace(/::cue()/g, "::cue");
			a.Le.clear();
			for (var c, d; d = Ii.exec(b);) 3 > d.length || (c = d[1].split(",").map(function (e) {
				e = e.trim();
				(e = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")"))) && (e = "(" + e + ")");
				return e
			}), d = d[2].trim(), (d = fb(tf(d))) && a.Le.enqueue({
				wh: c,
				rules: d
			}))
		},
		yi = function (a) {
			var b = a.split(":");
			if (3 < b.length) return B(Ai, "unexpected time format=" + a), 0;
			a = 0;
			b = n(b);
			for (var c = b.next(); !c.done; c = b.next()) a = 60 * a + parseFloat(c.value);
			return a
		},
		Ai = z("cast.player.core.WebvttParser"),
		wi = /\n\s*\n/,
		zi = /MPEGTS:([\d]*)/,
		Ci = /align:(start|middle|end|left|center|right)/,
		Di = /snapToLines:?(true|false)?/,
		Ei = /line:(-*\d+)/,
		Fi = /position:(\d*)%/,
		Gi = /size:(\d*)%/,
		Ii = /(::cue[^{}]*)\s*\{([^\.{}]+)\}/g,
		xi = RegExp("LOCAL:((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})"),
		Bi = RegExp("((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}.[\\d]{3})");
	var Ji = function (a, b, c, d) {
		w.call(this);
		this.g = b;
		this.Wf = document.createElement("track");
		this.Wf.src = b.url;
		this.Wf.kind = "captions";
		this.g.mediaElement.appendChild(this.Wf);
		this.Tb = this.Wf.track;
		this.Tb.mode = void 0 !== d ? "showing" : "hidden";
		this.hg = a;
		this.tc = c;
		v("Cast.MPL.Captions", Vd(this.tc));
		this.Oc = null;
		"ttml" === c ? this.Oc = new ji(this.g.ignoreTtmlPositionInfo) : "webvtt" === c ? this.Oc = new vi : d && "application/mp4" === d && "stpp" === c && (this.Oc = new ui(this.g.ignoreTtmlPositionInfo));
		this.Sf = null;
		this.g.enableSideloadedTextTrackStyling &&
			(this.Sf = new ci(this.g.mediaElement, a, c));
		this.fb = null;
		this.mm = 0;
		this.ni = null
	};
	p(Ji, w);
	Ji.prototype.M = function () {
		Ki(this);
		this.Tb.mode = "disabled";
		this.Wf.remove();
		w.prototype.M.call(this)
	};
	var Ki = function (a) {
		var b = a.Tb.cues;
		if (b)
			for (; 0 < b.length;) a.Tb.removeCue(b[0]);
		if (a.g.mediaElement.parentNode) {
			b = n(a.g.mediaElement.parentNode.getElementsByClassName("mpl_img_cap"));
			for (var c = b.next(); !c.done; c = b.next()) c.value.remove()
		}
		a.Nd()
	};
	k = Ji.prototype;
	k.createBuffer = function () {};
	k.reset = function () {
		Ki(this);
		this.fb = null
	};
	k.cf = function () {
		return !0
	};
	k.Sk = function () {
		return Infinity
	};
	k.append = function (a, b, c, d) {
		d && (this.mm = b.time - c);
		if (this.Oc) {
			var e = this.g.useRelativeCueTimestamps || "ttml" === this.tc ? b.time : this.mm;
			c = Li(this);
			d = 0 < c.length ? c[c.length - 1].startTime : -Infinity;
			for (a = this.Oc.uj(a, e); 0 < a.length;) {
				e = a.pop();
				var f = e.te,
					g = !1;
				if (f.startTime < d || .1 >= Math.abs(f.startTime - d))
					for (var h = c.length - 1; 0 <= h; h--)
						if (c[h].text == f.text && .1 >= Math.abs(c[h].startTime - f.startTime) && .1 >= Math.abs(c[h].endTime - f.endTime)) {
							g = !0;
							break
						}
				g || this.addCue(e)
			}
		}
		this.fb = b
	};
	k.lb = function (a) {
		return this.fb ? this.fb.time + this.fb.duration - a : 0
	};
	var Mi = function (a, b) {
		var c = b.te,
			d = a.g.mediaElement.parentNode;
		c.id = "cap-" + Date.now();
		c.onenter = function (e, f, g) {
			a.ni = e;
			if (null !== f) {
				var h = document.createElement("img");
				h.setAttribute("id", e.te.id);
				h.setAttribute("src", "data:image/png;base64," + f);
				h.setAttribute("class", "mpl_img_cap");
				h.style.position = "absolute";
				h.style.left = "0";
				h.style.bottom = "0";
				h.style.right = "0";
				h.style.margin = "0 auto";
				e.ve && e.ve.Pe ? (h.style.width = e.ve.Pe.width + e.ve.Pe.Kh, h.style.height = e.ve.Pe.height + e.ve.Pe.Kh) : (h.style.width = "100%",
					h.style.height = "100%");
				h.style.zIndex = 5;
				g.appendChild(h)
			}
			a.Qf()
		}.bind(a, b, b.cn || null, d);
		c.onexit = function (e) {
			a.ni = null;
			(e = document.getElementById(e.id)) && e.remove();
			a.Nd()
		}.bind(a, c)
	};
	Ji.prototype.Qf = function () {
		this.Sf && this.Oc && this.Sf.Qf(ii(this.Oc), this.ni)
	};
	Ji.prototype.Nd = function () {
		this.Sf && this.Sf.Nd()
	};
	Ji.prototype.addCue = function (a) {
		if (this.g.onCue) this.g.onCue(this.tc);
		this.Tb.addCue(a.te);
		Mi(this, a)
	};
	var Li = function (a) {
		for (var b = [], c = a.Tb.cues, d = a.hg.ed(), e = 0; e < c.length;) {
			var f = c[e];
			f.endTime < d ? (a.Tb.removeCue(f), f.id && (f = document.getElementById(f.id)) && f.remove()) : (b.push(f), e++)
		}
		return b
	};
	Ji.prototype.parse = function (a, b) {
		for (a = this.Oc.parse(a, b); 0 < a.length;) this.addCue(a.pop())
	};
	var Ni = function () {};
	Ni.prototype.lh = function () {};
	t("cast.player.core.ProcessSourceDataCallback", Ni);
	var Oi = function (a, b, c, d, e, f) {
		w.call(this);
		this.g = a;
		this.In = e;
		this.pc = c;
		this.dn = !c.codecsProvided;
		this.ja = d;
		this.J = b;
		this.xe = !1;
		this.ua = this.fb = this.Pc = null;
		this.Ld = f;
		this.Bc = new uf;
		this.Td = 0;
		this.createBuffer();
		this.la = null;
		this.Rf = !0;
		this.Ck = !1
	};
	p(Oi, w);
	k = Oi.prototype;
	k.M = function () {
		w.prototype.M.call(this);
		this.Bc.clear();
		this.ua && (y(this.ua, "updateend", this.Ll, !1, this), this.Rf && "closed" != this.ja.readyState && this.ja.removeSourceBuffer(this.ua))
	};
	k.createBuffer = function () {
		if (null === this.ua && "open" == this.ja.readyState) {
			var a = this.pc.mimeType + '; codecs="' + tg(this.pc.codecs) + '"',
				b = this.Ld.findIndex(function (c) {
					return c == a
				});
			if (0 > b) {
				try {
					this.ua = this.ja.addSourceBuffer(a)
				} catch (c) {
					throw this.g.Y(110, void 0, c.message), c;
				}
				D(P, "create new source buffer " + a);
				this.Ld.push(a)
			} else this.ua = this.ja.sourceBuffers[b], Pi(this), this.g.mediaElement.currentTime = this.g.mediaElement.currentTime, D(P, "reuse source buffer index: " + b + ", mimetype: " + a);
			x(this.ua, "updateend",
				this.Ll, !1, this);
			Qi(this)
		}
	};
	k.lb = function (a) {
		var b = this.Td + (this.Pc ? this.Pc.duration : 0);
		return this.fb ? this.fb.time + this.fb.duration - a + b : b
	};
	k.reset = function () {
		this.Pc = this.fb = null;
		this.Bc.clear();
		this.Td = 0;
		this.cf() ? Ri(this) : Si(this);
		this.cf() ? Ti(this) : (D(P, this.J + ": delay abort, push to deferred queue"), this.Bc.enqueue({
			sj: 0,
			Xh: null
		}))
	};
	k.cf = function () {
		return null !== this.ua && !this.xe && this.Bc.eb()
	};
	k.Sk = function () {
		return Ld(this.pc.mimeType) ? 40 : 20
	};
	var Qi = function (a) {
		for (; !a.Bc.eb();) {
			var b = wf(a.Bc),
				c = b.Xh;
			switch (b.sj) {
				case 2:
					D(P, a.J + ": dequeue append");
					a.Td -= c.interval.duration;
					Ui(a, c.data, c.interval, c.T, c.$, c.timescale);
					return;
				case 1:
					D(P, a.J + ": dequeue remove");
					Ri(a);
					return;
				case 0:
					D(P, a.J + ": dequeue abort"), Ti(a)
			}
		}
	};
	Oi.prototype.Ll = function () {
		for (var a = this.ua.buffered, b = 0; b < a.length; b++) D(P, this.J + ": " + a.start(b) + " - " + a.end(b));
		D(P, this.J + ": updateend");
		null !== this.Pc && 0 != this.Pc.duration && (this.fb = this.Pc);
		this.Pc = null;
		this.xe = !1;
		Qi(this)
	};
	var Ui = function (a, b, c, d, e, f) {
			var g = a.ua.timestampOffset;
			if (e) {
				Ti(a);
				var h = Vi(a, c.time);
				a.ua.timestampOffset = h - d;
				D(P, a.J + ": timestampOffset = " + a.ua.timestampOffset)
			} else h = Vi(a, c.time);
			a.xe = !0;
			try {
				a.ua.appendBuffer(b)
			} catch (l) {
				D(P, a.J + ": append failed " + l);
				a.xe = !1;
				e && (a.ua.timestampOffset = g);
				Wi(a, b, c, d, e, f);
				22 === l.code && Xi(a, 2);
				return
			}
			D(P, a.J + ": successfully append " + b.length + " bytes");
			Yi(a, 2);
			a.Pc = {
				time: h,
				duration: c.duration
			};
			a.In.lh(a.pc.mimeType, b, a.ua.timestampOffset, h, c.duration, f)
		},
		Ti = function (a) {
			"open" ==
			a.ja.readyState ? (D(P, a.J + ": abort"), a.ua.abort()) : A(P, a.J + ": unable to abort")
		},
		Ri = function (a) {
			D(P, a.J + ": remove");
			Pi(a)
		},
		Si = function (a) {
			D(P, a.J + ": delay remove, push to deferred queue");
			a.Bc.enqueue({
				sj: 1,
				Xh: null
			});
			Xi(a, 1)
		};
	Oi.prototype.append = function (a, b, c, d, e) {
		if (this.dn && !this.Ck) {
			var f = this.pc.mimeType;
			if (0 == Oa("/mp2t", f.substr(f.length - 5, 5))) {
				f = new Zh;
				for (f.qa(a); !f.Mg();) f.parse();
				f = f.Ol ? f.Dk : void 0
			} else f = !0;
			void 0 !== f && (this.Ck = !0, f || Da("Cast.MPL.RemoveDefaultAudioCodecs", !0))
		}
		this.cf() ? Ui(this, a, b, c, d, e) : Wi(this, a, b, c, d, e)
	};
	var Wi = function (a, b, c, d, e, f) {
			D(P, a.J + ": delay append, push to deferred queue");
			a.Td += c.duration;
			a.Bc.enqueue({
				sj: 2,
				Xh: {
					data: b,
					interval: {
						time: c.time,
						duration: c.duration
					},
					T: d,
					$: e,
					timescale: f
				}
			})
		},
		Vi = function (a, b) {
			if (!a.fb || a.g.Nk) return b;
			var c = b,
				d = a.ua.buffered;
			0 < d.length && (b = d.end(d.length - 1));
			D(P, a.J + ": adjustTime: " + c + " : " + b);
			return b
		},
		Pi = function (a) {
			if (a.ua.updating) Si(a);
			else {
				a.xe = !0;
				try {
					a.ua.remove(0, Infinity), D(P, a.J + ": successfully removed all buffered data"), Yi(a, 1)
				} catch (b) {
					a.xe = !1, D(P, a.J +
						": remove failed!"), b.message = "SourceBuffer error unrelated to SourceBuffer.updating", Si(a)
				}
			}
		},
		Xi = function (a, b) {
			if (null === a.la) switch (b) {
				case 2:
				case 1:
					a.la = setTimeout(function () {
						Qi(a)
					}, 2E3), D(P, a.J + ": set up timeout ID to processDeferred_ " + a.la)
			}
		},
		Yi = function (a, b) {
			if (null !== a.la) switch (b) {
				case 2:
				case 1:
					D(P, a.J + ": cleared timeout ID " + a.la), clearTimeout(a.la), a.la = null
			}
		},
		P = z("cast.player.core.SourceBufferManager");
	var Zi = function (a, b) {
		Ji.call(this, a, b, "webvtt");
		this.ta = z("cast.player.cea608.InbandCaptionsManager");
		this.ha = new Rg(this);
		this.ha.Zg = 1;
		this.Sa = null;
		this.xa = 0;
		this.Eb = null;
		this.Qd = [];
		this.gh = this.qj.bind(this);
		this.la = null;
		this.ie = new uf
	};
	p(Zi, Ji);
	Zi.prototype.M = function () {
		this.reset();
		Ji.prototype.M.call(this)
	};
	Zi.prototype.qj = function () {
		if (this.Sa.eb()) {
			var a = wf(this.ie);
			this.xa != a.T && (this.ha.clear(), this.Eb = null);
			this.xa = a.T;
			this.ha.xa = a.Nm;
			this.Sa.qa(a.data);
			this.Sa.bm(a.duration);
			a.timescale && this.Sa.dm(a.timescale)
		}
		this.Sa.parse();
		if (this.Sa.Mg()) {
			this.ha.decode();
			if (0 < this.Qd.length) {
				for (Li(this); 0 < this.Qd.length;) a = this.Qd.pop(), "number" !== typeof a.start || isNaN(a.start) || "number" !== typeof a.end || isNaN(a.end) || (a = new VTTCue(a.start, a.end, a.text), a.position = 20, a.align = "start", this.addCue({
					te: a
				}));
				this.Qd.length = 0
			}
			this.Sa.qa(null)
		}
		this.ie.eb() && this.Sa.eb() ? this.la = null : this.la = setTimeout(this.gh, 20)
	};
	var ah = function (a, b, c, d) {
		null !== a.Eb && b < a.Eb && (b = a.Eb);
		.1 > c - b && (c = b + .1);
		a.Eb = c;
		a.Qd.push({
			start: b,
			end: c,
			text: d
		})
	};
	Zi.prototype.lh = function (a, b, c, d, e, f) {
		if (Md(a)) {
			if (!this.Sa) switch (a) {
				case "video/mp2t":
					this.Sa = new ai(this);
					break;
				case "video/mp4":
					this.Sa = new Yh(this);
					break;
				default:
					return
			}
			1 < this.ie.dd() ? B(this.ta, "Dropped segment") : (this.ie.enqueue({
				data: b,
				duration: e,
				T: c,
				Nm: "video/mp4" == a ? d : c,
				timescale: f
			}), D(this.ta, "Pending " + this.ie.dd()), null === this.la && (this.la = setTimeout(this.gh, 20)))
		}
	};
	Zi.prototype.reset = function () {
		Ji.prototype.reset.call(this);
		this.xa = 0;
		this.Eb = null;
		this.Qd.length = 0;
		this.Sa && this.Sa.qa(null);
		this.ha.clear();
		this.ie.clear();
		null !== this.la && (clearTimeout(this.la), this.la = null)
	};
	var $i = function (a) {
		F.call(this);
		this.Vb = null;
		this.rj = a
	};
	p($i, F);
	$i.prototype.li = function () {
		this.Vb && (this.Vb.onprogress = null);
		this.Vb = F.prototype.li.call(this);
		this.Vb.onprogress = this.rj;
		return this.Vb
	};
	$i.prototype.M = function () {
		this.Vb && (this.Vb.onprogress = null);
		F.prototype.M.call(this)
	};
	$i.send = function (a) {
		var b = this;
		return new gd(function (c, d) {
			var e = new $i(function () {});
			x(e, "success", function (f) {
				c(Kd(f.target))
			}, !1, b);
			x(e, "error", d, !1, b);
			x(e, "timeout", d, !1, b);
			e.send(a)
		})
	};
	var aj = function (a, b, c) {
			var d = Date.now();
			this.clientId = a;
			this.blockIds = b;
			this.flags = c;
			this.timestamp = d
		},
		cj = function () {
			var a = bj();
			this.fi = a && a.clientId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
		};
	cj.prototype.td = function (a) {
		Da("Cast.MPL.ExperimentationFetchResult", !0);
		try {
			var b = JSON.parse(a.substring(5));
			var c = new Xe(b[0])
		} catch (g) {
			dj(this, "Failed to parse experimentation flags.");
			return
		}
		a = H(c, 1);
		b = Re(c, Ue, 2);
		c = {};
		b = n(b);
		for (var d = b.next(); !d.done; d = b.next()) {
			d = d.value;
			var e = d.Ha(),
				f = void 0;
			switch (Le(d, Pe[0])) {
				case 2:
					f = Ne(d);
					break;
				case 3:
					f = H(d, 3);
					break;
				case 4:
					f = d.getFloatValue();
					break;
				case 5:
					f = Ne(d)
			}
			c[e] = f
		}
		ej("Cast.MPL.ExperimentationDownloadedBlockId", a);
		window.localStorage.setItem("cast.player.common.Experimentation",
			JSON.stringify(new aj(this.fi, a, c)));
		D(fj, "Flags: " + c.toString())
	};
	cj.prototype.hc = function () {
		Da("Cast.MPL.ExperimentationFetchResult", !1);
		dj(this, "Failed to download experimentation flags.")
	};
	var dj = function (a, b) {
			B(fj, b);
			window.localStorage.setItem("cast.player.common.Experimentation", JSON.stringify(new aj(a.fi, [], {})))
		},
		ej = function (a, b) {
			if (void 0 !== b && 0 < b.length) {
				b = n(b);
				for (var c = b.next(); !c.done; c = b.next()) v(a, c.value)
			}
		},
		bj = function () {
			var a = window.localStorage.getItem("cast.player.common.Experimentation");
			return a ? JSON.parse(a) : void 0
		};
	ra(cj);
	var fj = z("cast.player.common.Experimentation"),
		gj = cj.Te(),
		hj;
	var ij = bj();
	if (void 0 === ij || void 0 === ij.timestamp) hj = !0;
	else {
		var jj = Date.now() - ij.timestamp,
			kj = ij.flags.expirationHrs;
		"number" !== typeof kj && (kj = 3);
		hj = jj > 36E5 * kj
	}
	var lj = hj;
	Da("Cast.MPL.ExperimentationCheckExpired", lj);
	if (lj) {
		var mj = "https://$Env$.google.com/cast/senderconfig/config?hw=mpl&id=$ClientId$".replace(/\$Env\$/g, "clients3").replace(/\$ClientId\$/g, gj.fi.toString());
		$i.send(mj).then(gj.td.bind(gj), gj.hc.bind(gj))
	};
	var nj = function (a) {
		var b = this,
			c = a.streamsGroupedByBitrate,
			d = void 0 === a.rd ? 0 : a.rd;
		a = void 0 === a.Mc ? 3 : a.Mc;
		this.bitrates = Array.from(c.keys());
		this.Gi = {};
		this.bitrates.forEach(function (e, f) {
			b.Gi[f] = c.get(e)
		});
		this.Fa = new Map;
		this.bitrates.forEach(function (e, f) {
			b.Fa.set(f, c.get(e).slice())
		});
		this.Ka = {};
		this.rd = d;
		this.Mc = a
	};
	nj.prototype.zg = function () {
		return this.rd
	};
	nj.prototype.yg = function () {
		return this.Mc
	};
	var oj = function (a, b) {
		var c;
		b = n(b);
		for (c = b.next(); !c.done; c = b.next()) {
			var d = c.value;
			c = a.bitrates.indexOf(d.bitrate);
			a.Fa.has(c) ? a.Fa.get(c).push(d) : a.Fa.set(c, [d]);
			a.Ka[c] = 0
		}
	};
	nj.prototype.ak = function () {
		for (var a = 0; a < this.bitrates.length; a++) oj(this, this.Gi[a].slice());
		return this.Fa
	};
	nj.prototype.Bd = function (a) {
		this.Ka[a] || (this.Ka[a] = 0);
		this.Ka[a]++;
		this.Ka[a] > (1 === this.Fa.size ? this.yg() : this.zg()) && this.Fa.has(a) && this.Fa.delete(a);
		return this.Fa
	};
	var pj = function (a) {
		nj.call(this, a)
	};
	p(pj, nj);
	pj.prototype.Bd = function (a, b) {
		for (var c = 0, d = this.bitrates[0], e = 1; e < this.bitrates.length; e++) this.bitrates[e] < d && (d = this.bitrates[e], c = e);
		if (!b || b && a === c) this.Fa = new Map, this.Fa.set(c, this.Gi[c].slice());
		return nj.prototype.Bd.call(this, a, b)
	};
	var qj = function (a) {
		var b = void 0 === a.streamsGroupedByCdn ? void 0 : a.streamsGroupedByCdn;
		nj.call(this, {
			streamsGroupedByBitrate: a.streamsGroupedByBitrate,
			rd: void 0 === a.rd ? 2 : a.rd,
			Mc: void 0 === a.Mc ? 2 : a.Mc
		});
		this.Vj = b
	};
	p(qj, nj);
	var rj = function (a, b) {
		var c;
		a = n(a.Vj.entries());
		for (c = a.next(); !c.done; c = a.next()) {
			c = n(c.value);
			c.next();
			var d = c.next().value;
			if (c = d.find(function (e) {
					return e.index === b
				})) return d
		}
		return []
	};
	qj.prototype.ak = function (a) {
		a = rj(this, a);
		oj(this, a);
		return this.Fa
	};
	qj.prototype.Bd = function (a) {
		var b = -1,
			c, d = n(this.Vj.entries());
		for (c = d.next(); !c.done; c = d.next())
			if (c = n(c.value), c.next(), c = c.next().value.find(function (e) {
					return e.index === a
				})) {
				b = this.bitrates.indexOf(c.bitrate);
				break
			}
		if (-1 === b) return Da("Cast.MPL.UnknownBitrateEncountered", !0), this.Fa;
		this.Ka[b] || (this.Ka[b] = 0);
		this.Ka[b]++;
		this.Ka[b] > (1 === this.Fa.size ? this.yg() : this.zg()) && this.Fa.has(b) && this.Fa.delete(b);
		return this.Fa
	};
	var sj = function (a) {
		w.call(this);
		this.ao = a;
		this.Fi = this.Dd = null;
		this.vb = 0;
		this.Ej = null;
		this.Wb = 400;
		this.m = new $i(function () {});
		x(this.m, "success", this.td.bind(this));
		x(this.m, "error", this.hc.bind(this));
		x(this.m, "timeout", this.An.bind(this))
	};
	p(sj, w);
	sj.prototype.M = function () {
		this.m.N();
		w.prototype.M.call(this)
	};
	sj.prototype.load = function (a) {
		(this.Dd = a.url) ? (this.Fi = a.headers, this.m.Ee = a.withCredentials, this.m.sc = Math.max(0, a.timeoutInterval), this.vb = 0, this.m.send(this.Dd, void 0, void 0, this.Fi)) : B(fg, "No url provided for request")
	};
	sj.prototype.abort = function () {
		this.m.abort()
	};
	var tj = function (a) {
		return new Xf(a.Dd, a.m.ec, Id(a.m), a.m.getAllResponseHeaders(), Kd(a.m))
	};
	sj.prototype.td = function (a) {
		clearTimeout(this.Ej);
		this.Wb = 400;
		this.pe(Kd(a.target))
	};
	sj.prototype.hc = function () {
		uj(this, 408 == Id(this.m) ? 0 : this.Wb)
	};
	sj.prototype.An = function () {
		uj(this, 0)
	};
	var uj = function (a, b) {
		a.vb++;
		clearTimeout(a.Ej);
		3 < a.vb ? a.pe(null) : (1 < a.vb && (a.Wb = 2 * b), a.Ej = setTimeout(function () {
			a.m.send(a.Dd, void 0, void 0, a.Fi)
		}, b))
	};
	sj.prototype.pe = function (a) {
		this.vb = 0;
		var b = this.m;
		this.ao.fh(a, b.Vb && b.Vb.responseURL ? b.Vb.responseURL : null)
	};
	var vj = function (a) {
		sj.call(this, a);
		this.I = this.g = null
	};
	p(vj, sj);
	vj.prototype.ce = function (a, b) {
		this.g = a;
		this.I = new Wf;
		this.I.url = this.Dd = b;
		this.I.setResponse = this.pe.bind(this);
		a.updateManifestRequestInfo && a.updateManifestRequestInfo(this.I);
		this.I.skipRequest || this.load(this.I)
	};
	vj.prototype.pe = function (a) {
		var b = this;
		if (this.g && (a = Eg(this.g, a), be(a))) {
			a.then(function (c) {
				sj.prototype.pe.call(b, c)
			});
			return
		}
		sj.prototype.pe.call(this, a)
	};
	var wj = function (a) {
			if (a[7] << 8 | 1 != a[6]) return B(fg, "PlayReady header object is not valid"), null;
			var b = a[9] << 8 | a[8];
			b += 10;
			for (var c = "", d = 10; d < b; d += 2) c += String.fromCharCode(a[d + 1] << 8 | a[d]);
			d = b = null;
			var e = new DOMParser;
			c = jb(c.trim());
			c = kb(e, c).childNodes[0].firstElementChild;
			c = n(c.children);
			for (e = c.next(); !e.done; e = c.next()) e = e.value, "LA_URL" == e.nodeName ? d = e.textContent : "KID" == e.nodeName && (b = ae(window.atob(e.textContent)));
			return b ? {
				systemId: kg,
				Ve: a,
				kf: new jg(b, !0),
				url: d,
				Tg: 8
			} : (B(fg, "PlayReady rights management header does not have KID"),
				null)
		},
		Q = function (a) {
			this.host = a;
			this.Qc = this.od = this.uri = null;
			this.Si = this.Qi = this.X = void 0;
			this.duration = -1;
			this.o = [];
			this.Ni = [];
			this.vn = this.ce.bind(this);
			this.ya = null;
			this.Sj = !1;
			this.Bj = 1E4
		},
		yj = function (a) {
			var b = xj(a.o);
			b || (b = a.o.find(function (c) {
				return 1 == c.type && !og(c.codecs)
			}));
			b && (b.enabled = !0);
			a = n(a.o);
			for (b = a.next(); !b.done; b = a.next())
				if (b = b.value, 2 == b.type) {
					b.enabled = !0;
					break
				}
		},
		xj = function (a) {
			return a.find(function (b) {
				return 1 == b.type && og(b.codecs) && ng("audio/mp4", b.codecs)
			})
		};
	k = Q.prototype;
	k.getDefaultAudioStreamIndex = function () {
		for (var a = -1, b = 0; b < this.o.length; b++) {
			var c = this.o[b];
			if (1 == c.type && ng("audio/mp4", c.codecs)) {
				if (og(c.codecs)) return b;
				0 > a && (a = b)
			}
		}
		return a
	};
	k.getStreamCount = function () {
		return this.o.length
	};
	k.enableStream = function (a, b) {
		var c = this.o[a];
		c.index = -1;
		c.ca = -1;
		c.$ = !0;
		c.enabled = b;
		c.ib = !1;
		this.Ni[a] = []
	};
	k.isStreamEnabled = function (a) {
		return this.o[a].enabled
	};
	k.getQualityLevel = function (a) {
		return this.o[a].ca
	};
	k.getStreamInfo = function (a) {
		var b, c;
		a = this.o[a];
		var d = [],
			e = new Map,
			f = new Map;
		f.set("cdn", []);
		a.F.forEach(function (g, h) {
			c = {
				index: h,
				bitrate: b
			};
			b = g.bitrate;
			d.push(b);
			e.has(b) ? e.get(b).push(c) : e.set(b, [c]);
			f.get("cdn").push(c)
		});
		return new Yf(a.codecs, a.mimeType, d, a.language, a.name, a.role, void 0, !0, e)
	};
	k.fh = function (a, b) {
		if (a) {
			b && (this.uri = new I(b));
			b = null !== this.ya;
			var c = this.o;
			this.o = [];
			this.vj(a);
			this.ek();
			this.Sj && (this.ya = setTimeout(this.vn, this.Bj));
			if (b) zj(this, c), this.Qc.Cd();
			else {
				yj(this);
				if (this.host.onManifestReady) this.host.onManifestReady();
				this.Qc.onManifestReady()
			}
		} else this.Cj()
	};
	k.Cj = function () {};
	k.Qb = function () {};
	k.vj = function () {};
	k.ek = function () {};
	var zj = function (a, b) {
			for (var c = a.host.mediaElement.paused, d = {}, e = 0; e < b.length; d = {
					yb: d.yb
				}, e++) {
				d.yb = b[e];
				var f = a.o[e];
				if (f.name !== d.yb.name) {
					D(Q.ta, "The order of adaptations in manifest changes.");
					f = e;
					var g = a.o.findIndex(function (E) {
						return function (C) {
							return C.name == E.yb.name
						}
					}(d));
					if (0 > g) {
						a.Qb("New manifest has content out of sync. Continue with old one.");
						a.o = b;
						break
					}
					var h = a.o[f];
					a.o[f] = a.o[g];
					a.o[g] = h;
					f = a.o[f]
				}
				f.enabled = d.yb.enabled;
				f.ca = d.yb.ca;
				f.ib = d.yb.ib;
				g = [];
				h = !0;
				for (var l = d.yb.index, m = 0; m <
					f.F.length; m++) {
					var q = d.yb.F[m],
						u = f.F[m];
					u.T = q.T;
					g[m] = Aj(q, u, l, c);
					if (!g[m]) {
						h = !1;
						B(Q.ta, "Old and new representations are out of sync.");
						break
					}
				}
				if (!(0 > l))
					if (h) {
						for (h = 0; h < f.F.length; h++) f.F[h].i = g[h].i, f.F[h].P = g[h].P;
						f.$ = d.yb.$;
						f.index = g[0].index
					} else f.$ = !0, f.index = 0
			}
		},
		Aj = function (a, b, c, d) {
			if ("number" !== typeof a.P || "number" !== typeof b.P) var e = null;
			else e = a.P + c - b.P, e = 0 < e ? {
				i: b.i,
				index: e,
				P: b.P
			} : {
				i: a.i.slice(c, b.P - a.P).concat(b.i),
				index: 0,
				P: a.P + c
			};
			if (e) a = e;
			else {
				e = {
					i: [],
					index: 0,
					P: b.P
				};
				var f = b.i[0];
				0 <=
					c && f.time < a.i[c].time ? (e.i = b.i, e.index = Bj(a.i[c].time, b.i), a = e) : (f = Bj(f.time, a.i), -1 == f ? a = null : (c > f ? (e.i = b.i, e.index = c - f) : (e.i = d ? b.i : a.i.slice(c, f).concat(b.i), e.index = 0, "number" !== typeof b.P || d || (e.P -= f - c)), a = e))
			}
			return a
		},
		Bj = function (a, b) {
			for (var c = .5 * b[0].duration, d = 0; d < b.length; d++)
				if (Math.abs(b[d].time - a) <= c) return d;
			return -1
		};
	k = Q.prototype;
	k.load = function (a) {
		this.Qc = a;
		this.ce()
	};
	k.ce = function () {
		var a = this.host.url;
		this.uri = new I(a);
		this.od = new vj(this);
		this.od.ce(this.host, a)
	};
	k.Wc = function () {
		this.od && (this.od.N(), this.od = null);
		null !== this.ya && (clearTimeout(this.ya), this.ya = null)
	};
	k.Ah = function (a, b, c) {
		a = this.o[a];
		a.ca = b;
		a.ib = !0;
		Cj(c)
	};
	k.updateLicenseRequestInfo = function () {};
	k.getDuration = function () {
		return this.X ? -1 : this.duration
	};
	k.Ia = function (a) {
		a = this.o[a];
		var b = a.ca;
		if (0 > b) return null;
		a = a.F[b];
		var c = a.i;
		if (0 == c.length) return null;
		b = c[0].time;
		var d = c.length - 1;
		c = c[d].time + c[d].duration;
		this.X && (c -= 20, c < b && (c = b));
		return {
			start: b - a.T,
			end: c - a.T
		}
	};
	k.seek = function (a, b) {
		var c = this.o[a],
			d = c.F[c.ca],
			e = d.i;
		a = this.Ia(a);
		if (!a) return null;
		b < a.start && (b = a.start);
		b > a.end && (b = a.end);
		b += d.T;
		for (a = e.length - 1; 0 <= a; a--)
			if (b >= e[a].time) return c.index = a, c.ib = !0, b - d.T;
		return null
	};
	k.cc = function (a) {
		a = this.o[a];
		var b = a.index + 1;
		return b < a.F[a.ca].i.length ? (a.index = b, !0) : !1
	};
	k.isLiveStream = function () {
		return this.X || !1
	};
	k.isEventStream = function () {
		return this.Qi || !1
	};
	k.isLiveSeekableRangeMovingWindow = function () {
		return this.Si
	};
	k.isLiveDone = function () {};
	k.Gc = function (a) {
		var b = this.o[a];
		a = b.index;
		b = b.F[b.ca].i;
		return !this.X && a == b.length - 1
	};
	k.getSegmentInterval = function (a) {
		var b = this.o[a],
			c = b.ca;
		return 0 <= c && (a = b.index, 0 <= a && (b = b.F[c], c = b.i, a < c.length)) ? {
			time: c[a].time - b.T,
			duration: c[a].duration
		} : {
			time: 0,
			duration: 0
		}
	};
	k.reset = function (a) {
		this.o[a].index = -1
	};
	k.ee = function (a) {
		a = this.o[a];
		var b = a.F[a.ca];
		null !== b.Jb || null !== b.L && null !== b.L.qa || (a.ib = !1);
		return a.ib
	};
	k.zh = function (a, b) {
		this.o[a].ib = !1;
		262144 < b.length ? B(Dj, "init data (" + b.length + " bytes) is too large to cache") : this.Ni[a][this.o[a].ca] = b
	};
	k.Se = function (a) {
		var b = this.o[a];
		var c = this.Ni[a];
		return (b = b && c ? c[b.ca] || null : null) ? (this.o[a].ib = !1, b) : null
	};
	k.xg = function () {
		return null
	};
	k.updateSegmentRequestInfo = function (a, b) {
		b.interval = this.getSegmentInterval(a)
	};
	k.processSegment = function () {};
	k.Ag = function () {
		return 0
	};
	k.Bk = function () {
		return !1
	};
	var Ej = function (a, b) {
		void 0 === a.X && Da("Cast.MPL.Live", b);
		a.X = b
	};
	Q.prototype.getStreamInfo = Q.prototype.getStreamInfo;
	Q.prototype.getQualityLevel = Q.prototype.getQualityLevel;
	Q.prototype.isStreamEnabled = Q.prototype.isStreamEnabled;
	Q.prototype.enableStream = Q.prototype.enableStream;
	Q.prototype.getStreamCount = Q.prototype.getStreamCount;
	Q.prototype.getDefaultAudioStreamIndex = Q.prototype.getDefaultAudioStreamIndex;
	var Dj = z("cast.player.comon.StreamingProtocolBase");
	var R = function (a, b) {
		this.Dm = a;
		this.ye = b ? b : null;
		this.h = null
	};
	R.prototype.u = function (a) {
		var b = vh(a).length;
		this.h = a;
		this.mk();
		this.G();
		a = vh(a).length - b;
		this.h.buffer.set([a >> 24, a >> 16, a >> 8, a], b)
	};
	R.prototype.mk = function () {
		this.h.s(0);
		this.h.s(this.Dm);
		this.ye && L(this.h, this.ye.Jh())
	};
	R.prototype.G = function () {
		throw Error("writeBody() should be  overriden.");
	};
	var S = function (a, b, c) {
		R.call(this, a);
		this.oa = b;
		this.Cc = c
	};
	p(S, R);
	S.prototype.mk = function () {
		R.prototype.mk.call(this);
		this.h.s(this.oa << 24 | this.Cc & 16777215)
	};
	var Fj = function (a) {
		S.call(this, 1935763823, 0, 0);
		this.K = a
	};
	p(Fj, S);
	Fj.prototype.G = function () {
		this.h.s(1);
		this.h.s(this.K)
	};
	var Gj = function (a) {
		S.call(this, 1952867444, 1, 0);
		this.He = a
	};
	p(Gj, S);
	Gj.prototype.G = function () {
		this.h.nk(this.He)
	};
	var Hj = function (a, b) {
		S.call(this, 1935763834, 0, 0);
		this.Mk = a;
		this.Yl = b
	};
	p(Hj, S);
	Hj.prototype.G = function () {
		this.h.Qh(this.Mk);
		this.h.s(this.Yl.length);
		0 == this.Mk && L(this.h, this.Yl)
	};
	var Ij = function (a, b) {
		S.call(this, 1702061171, 0, 0);
		this.tn = a;
		this.Je = b
	};
	p(Ij, S);
	Ij.prototype.G = function () {
		L(this.h, [3, 25, 0, 1, 0, 4, 17, this.tn, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, this.Je[0], this.Je[1]])
	};
	var Jj = function (a, b) {
		R.call(this, 1635148611);
		this.hm = a;
		this.Ql = b
	};
	p(Jj, R);
	Jj.prototype.G = function () {
		L(this.h, [1, 77, 64, 30, 255, 225]);
		this.h.Hd(this.hm.length);
		L(this.h, this.hm);
		this.h.Qh(1);
		this.h.Hd(this.Ql.length);
		L(this.h, this.Ql)
	};
	var Kj = function () {
		S.call(this, 1937011571, 0, 0)
	};
	p(Kj, S);
	Kj.prototype.G = function () {
		this.h.s(0)
	};
	var Lj = function (a, b, c) {
		S.call(this, 1952804451, 0, 1);
		this.Sm = c ? 0 : a;
		this.Rm = b;
		this.Lk = c
	};
	p(Lj, S);
	Lj.prototype.G = function () {
		this.h.s(256 | this.Sm);
		L(this.h, this.Rm.Jh());
		this.Lk && (this.h.Qh(16), L(this.h, this.Lk))
	};
	var Mj = function (a) {
		S.call(this, 1936027235, 0, 2);
		this.Gj = a
	};
	p(Mj, S);
	Mj.prototype.G = function () {
		this.h.s(this.Gj.length);
		for (var a = 0; a < this.Gj.length; a++) {
			var b = this.Gj[a].im;
			this.h.Hd(b.length);
			for (var c = 0; c < b.length; c++) {
				var d = b[c];
				this.h.Hd(d.ai);
				this.h.s(d.bi)
			}
		}
	};
	var Nj = function (a, b) {
		S.call(this, 1935894637, 0, 0);
		this.Rn = a;
		this.Sn = b
	};
	p(Nj, S);
	Nj.prototype.G = function () {
		this.h.s(this.Rn);
		this.h.s(this.Sn)
	};
	var Oj = function (a) {
		R.call(this, 1718775137);
		this.Om = a
	};
	p(Oj, R);
	Oj.prototype.G = function () {
		this.h.s(this.Om)
	};
	var Pj = function (a) {
		S.call(this, 1751411826, 0, 0);
		this.$m = a
	};
	p(Pj, S);
	Pj.prototype.G = function () {
		this.h.s(0);
		this.h.s(this.$m);
		L(this.h, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	};
	var Qj = function (a) {
		S.call(this, 1835296868, 0, 0);
		this.jb = a
	};
	p(Qj, S);
	Qj.prototype.G = function () {
		this.h.s(0);
		this.h.s(0);
		this.h.s(this.jb);
		this.h.s(0);
		L(this.h, [85, 196, 0, 0])
	};
	var Rj = function (a, b) {
		S.call(this, 1953196132, 0, 3);
		this.io = a;
		this.an = b
	};
	p(Rj, S);
	Rj.prototype.G = function () {
		this.h.s(0);
		this.h.s(0);
		L(this.h, [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0]);
		this.h.s(this.io << 16);
		this.h.s(this.an << 16)
	};
	var Sj = function (a) {
		S.call(this, 1953654136, 0, 0);
		this.en = a
	};
	p(Sj, S);
	Sj.prototype.G = function () {
		var a = 65536;
		this.en && (a &= -65537);
		L(this.h, [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
		this.h.s(a)
	};
	var Tj = function (a, b) {
		S.call(this, 1886614376, 0, 0);
		this.Xj = a;
		this.Ib = b
	};
	p(Tj, S);
	Tj.prototype.G = function () {
		L(this.h, this.Xj.Jh());
		this.h.s(this.Ib.length);
		L(this.h, this.Ib)
	};
	var Uj = function (a) {
		S.call(this, 1836476516, 0, 0);
		this.jb = a
	};
	p(Uj, S);
	Uj.prototype.G = function () {
		this.h.s(0);
		this.h.s(0);
		this.h.s(this.jb);
		L(this.h, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2])
	};
	var Vj = function (a) {
		S.call(this, 1952868452, 0, 8);
		this.Ac = a
	};
	p(Vj, S);
	Vj.prototype.G = function () {
		this.h.s(1);
		this.h.s(this.Ac)
	};
	var Wj = function (a) {
		S.call(this, 1953658222, 0, 513);
		this.Ij = a
	};
	p(Wj, S);
	Wj.prototype.G = function () {
		this.h.s(this.Ij.length);
		this.h.s(0);
		for (var a = 0; a < this.Ij.length; a++) this.h.s(this.Ij[a].length)
	};
	var Xj = function (a) {
		S.call(this, 1835427940, 0, 0);
		this.yd = a
	};
	p(Xj, S);
	Xj.prototype.G = function () {
		this.h.s(this.yd)
	};
	var Yj = function (a) {
		R.call(this, 1835295092);
		this.Ik = a
	};
	p(Yj, R);
	Yj.prototype.G = function () {
		for (var a = 0; a < this.Ik.length; a++) L(this.h, this.Ik[a])
	};
	var ak = function (a) {
		var b = new Uint8Array(2 + a.length);
		b[1] = 1;
		ae(a, b, 2);
		Tj.call(this, Zj, b)
	};
	p(ak, Tj);
	var Zj = new jg([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
	var bk = function (a, b, c, d) {
		w.call(this);
		this.g = a;
		this.O = b;
		this.jn = d;
		this.Ib = c;
		this.A = this.ll = null;
		this.dc = "none";
		this.Ih = this.Hh = this.Ic = null;
		this.Mh = !1;
		this.m = new F;
		zd(this.m);
		x(this.m, "success", this.td, !1, this);
		x(this.m, "error", this.hc, !1, this)
	};
	p(bk, w);
	bk.prototype.M = function () {
		this.A && (this.Ic && y(this.Ic, "message", this.Cl, !1, this), this.A = null);
		this.Ic && (this.Ic.close(), this.Ic = null);
		this.m.N();
		w.prototype.M.call(this)
	};
	bk.prototype.createSession = function (a) {
		D(ck, "create session");
		this.Ih = Date.now();
		var b = this.g.licenseCustomData;
		if (b) {
			var c = new wh(this.Ib.length + b.length + 34);
			L(c, this.Ib);
			(new ak(b)).u(c);
			b = vh(c)
		} else b = this.Ib;
		this.A = this.g.mediaElement;
		this.dc = a;
		this.Ic = a = this.A.mediaKeys.createSession();
		x(this.Ic, "message", this.Cl, !1, this);
		a.generateRequest("cenc", b.buffer).catch(this.Al.bind(this))
	};
	bk.prototype.td = function (a) {
		D(ck, "xhr success");
		var b = this.Hh;
		null !== b && v("Cast.MPL.LicenseReq.ServerLatency", Date.now() - b);
		this.Hh = null;
		this.Uk(Kd(a.target))
	};
	bk.prototype.Uk = function (a) {
		var b = this;
		if (a) {
			a = new Uint8Array(a);
			if (this.g.processLicense && (a = this.g.processLicense(a), be(a))) {
				a.then(function (c) {
					dk(b, c)
				});
				return
			}
			dk(this, a)
		} else this.g.Y(201, void 0)
	};
	var dk = function (a, b) {
		a.Mh = !0;
		a.Ic.update(b.buffer).then(function () {
			a.Mh = !1;
			var c = a.jn;
			D(ek, "key session ended: " + c.zd);
			8 < c.Xa.length ? c.Xa.shift().N() : c.zd++;
			c.zd < c.Xa.length && c.Xa[c.zd].createSession(c.dc)
		}, function (c) {
			a.Mh = !1;
			a.Al(c)
		})
	};
	k = bk.prototype;
	k.hc = function () {
		D(ck, "xhr error");
		var a = new Xf(String(this.m.qf), this.m.ec, Id(this.m), this.m.getAllResponseHeaders(), Kd(this.m));
		this.g.Y(201, a)
	};
	k.Cl = function (a) {
		D(ck, "message");
		this.ll = new Uint8Array(a.bd.message);
		this.g.prepareLicenseRequest && !this.g.prepareLicenseRequest() || this.Uc()
	};
	k.Al = function (a) {
		D(ck, "keyerror " + a);
		this.g.Y(202)
	};
	k.Uc = function () {
		var a = new Wf;
		a.timeoutInterval = 18E4;
		a.protectionSystem = this.dc;
		a.content = this.ll;
		a.setResponse = this.Uk.bind(this);
		this.O.updateLicenseRequestInfo(a);
		this.g.licenseUrl && (a.url = this.g.licenseUrl);
		if (!a.url && this.Ib && "playready" == this.dc) {
			var b = new Kh(this.Ib);
			if (b = wj(b.getData())) a.url = b.url
		}
		if (this.g.updateLicenseRequestInfo && (this.g.updateLicenseRequestInfo(a), a.skipRequest)) return;
		this.m.Ee = a.withCredentials;
		this.m.sc = Math.max(0, a.timeoutInterval);
		this.m.send(a.url, "POST", a.content,
			a.headers);
		a = this.Ih;
		null !== a && v("Cast.MPL.LicenseReq.GenLatency", Date.now() - a);
		this.Ih = null;
		this.Hh = Date.now()
	};
	k.Ze = function () {
		return null !== this.Ih || null !== this.Hh || this.Mh
	};
	var ck = z("cast.player.core.MediaKeySession");
	var gk = function (a, b, c, d, e) {
		w.call(this);
		this.g = a;
		this.O = b;
		this.Xa = [];
		this.zd = 0;
		this.dc = null;
		x(this.g.mediaElement, "encrypted", this.yl, !1, this);
		c && 0 < c.length && (a.protectionSystem && (c.includes(a.protectionSystem) ? c.splice(0, 0, c.splice(c.indexOf(a.protectionSystem), 1)[0]) : B(ek, "Preferred protection system not found")), fk(this, {
			Yi: c,
			Ug: 0,
			ym: d,
			ho: e
		}))
	};
	p(gk, w);
	gk.prototype.M = function () {
		y(this.g.mediaElement, "encrypted", this.yl, !1, this);
		for (var a = n(this.Xa), b = a.next(); !b.done; b = a.next()) b.value.N();
		this.Xa.length = 0;
		w.prototype.M.call(this)
	};
	var fk = function (a, b) {
			hk(a, b).catch(function (c) {
				b.Ug++;
				b.Ug < b.Yi.length ? fk(a, b) : (A(ek, c.toString()), B(ek, "unsupported protection system"), a.g.Y(202))
			})
		},
		hk = function (a, b) {
			var c = b.Yi[b.Ug];
			b = ik(a, b);
			return navigator.requestMediaKeySystemAccess(eg[c], [b]).then(function (d) {
				return d.createMediaKeys()
			}).then(function (d) {
				var e = a.g.mediaElement.setMediaKeys(d);
				return a.g.emeServerCertificate && a.g.emeServerCertificate.length ? d.setServerCertificate(a.g.emeServerCertificate).then(function (f) {
					f || B(ek, "Server certificates are not supported by the keysystem. The server certificate has been ignored.");
					return e
				}, function (f) {
					A(ek, "Invalid server certificate provided. " + f.toString());
					return Promise.reject(f)
				}) : e
			}).then(function () {
				a.dc = c;
				$d(a.dc, a.O.Ag());
				0 < a.Xa.length && a.Xa[0].createSession(c);
				return Promise.resolve()
			})
		};
	gk.prototype.yl = function (a) {
		a = a.bd;
		D(ek, "onencrypted: " + this.zd);
		(a = a.initData) ? this.createSession(new Uint8Array(a)): D(ek, "invalid init data")
	};
	var jk = function (a, b) {
		return a.Xa.some(function (c) {
			a: if (b.length != c.Ib.length) c = !1;
				else {
					for (var d = b.length, e = 0; e < d; e++)
						if (b[e] != c.Ib[e]) {
							c = !1;
							break a
						}
					c = !0
				}return c
		})
	};
	gk.prototype.createSession = function (a) {
		jk(this, a) || (a = new bk(this.g, this.O, a, this), this.dc && this.zd == this.Xa.length && a.createSession(this.dc), this.Xa.push(a))
	};
	gk.prototype.Uc = function () {
		this.Xa[this.zd].Uc()
	};
	gk.prototype.Ze = function () {
		return this.Xa.some(function (a) {
			return a.Ze()
		})
	};
	var ik = function (a, b) {
			var c = b.Yi[b.Ug],
				d = {
					initDataTypes: ["cenc"]
				},
				e = b.ym || "";
			b = b.ho || "";
			e = e.replace("video/mp2t", "audio/mp4");
			b = b.replace("video/mp2t", "video/mp4");
			if (e) {
				var f = kk[c] || "";
				"widevine" === c && a.g.fo && (f = "SW_SECURE_CRYPTO");
				d.audioCapabilities = [{
					contentType: e,
					robustness: f
				}]
			}
			b && (d.videoCapabilities = [{
				contentType: b,
				robustness: lk[c] || ""
			}]);
			return d
		},
		mk = {},
		kk = (mk.widevine = "HW_SECURE_CRYPTO", mk),
		nk = {},
		lk = (nk.widevine = "HW_SECURE_ALL", nk),
		ek = z("cast.player.core.MediaKeysManager");
	var pk = function (a, b, c) {
		var d = this;
		this.g = a;
		this.J = b;
		this.Uj = c.streamsGroupedByBitrate;
		this.Vj = c.streamsGroupedByCdn;
		this.H = Array.from(c.streamsGroupedByBitrate.keys());
		this.Nh = new Map;
		this.H.forEach(function (e, f) {
			d.Nh.set(f, d.Uj.get(e))
		});
		this.kg = 0;
		this.za = this.Bi();
		this.pa = this.Ie(this.za);
		D(ok, this.J + ": initial bitrate is " + this.H[this.pa.bb]);
		this.jc = 0;
		this.uc = null;
		this.pf = Date.now();
		this.Yg = c.mimeType;
		Yd(this.H, this.Yg)
	};
	k = pk.prototype;
	k.Bi = function () {
		var a = this.g.initialBandwidth;
		3145728 === this.g.initialBandwidth && (a = parseFloat(window.localStorage.getItem("cast.player.core.QualityManager.currentBandwidth")), a = "number" === typeof a && a > this.g.initialBandwidth ? a : this.g.initialBandwidth);
		return a
	};
	k.N = function () {
		this.nd()
	};
	k.nm = function (a, b) {
		b && (this.za = 0 < a ? 8 * this.jc / (a / 1E3) : 0);
		this.jc = 0;
		this.uc = null;
		D(ok, this.J + ": current=" + this.za.toFixed(2));
		this.Vf(this.za)
	};
	k.pm = function (a, b) {
		0 >= a || (this.g.trackBandwidth && this.g.trackBandwidth(this.J, a, b), Bg(b, a), a = 0 < a ? 8 * b / (a / 1E3) : 0, this.za = .8 * a + (1 - .8) * this.za, D(ok, this.J + ": current=" + a.toFixed(2) + ", average=" + this.za.toFixed(2)), this.Vf(a), this.jc = 0)
	};
	k.om = function (a) {
		this.jc = a
	};
	k.Ie = function (a, b, c) {
		if (void 0 === c ? 0 : c) {
			c = this.Uj.get(this.H[this.pa.bb]);
			var d = c.length;
			1 >= d ? (Da("Cast.MPL.IncorrectFallbackCdnCyclingBehavior", !0), this.kg = 0, c = null) : (this.kg = (this.kg + 1) % d, c = {
				bb: this.pa.bb,
				Kg: c[this.kg].index
			});
			if (c) return c
		}
		c = void 0;
		b ? (c = Array.from(b.keys()), b = c[0]) : b = 0;
		d = -1;
		for (var e = Number.MAX_VALUE, f = 0; f < this.H.length; f++)
			if (void 0 === c || -1 !== c.indexOf(f)) {
				if (a >= this.H[f]) {
					var g = a - this.H[f];
					g < e && (d = f, e = g)
				}
				this.H[b] > this.H[f] && (b = f)
			}
		a = 0 > d ? b : d;
		return {
			bb: a,
			Kg: this.Nh.get(a)[0].index
		}
	};
	var qk = function (a, b) {
		a.Nh.clear();
		b.forEach(function (c, d) {
			a.Nh.set(d, c)
		})
	};
	pk.prototype.fk = function (a) {
		var b = a.jd,
			c = void 0 === a.Pf ? void 0 : a.Pf,
			d = void 0 === a.Ed ? void 0 : a.Ed;
		a = void 0 === a.bf ? !1 : a.bf;
		d && qk(this, d);
		var e = Date.now();
		if (!b && null !== this.uc && e - this.uc < 2E3 * (c || 0)) return this.pa.Kg;
		this.uc = e;
		b = this.Ie(.7 * this.za, d, a);
		c = b.bb;
		d = 1 === this.H.length && 0 === this.H[0];
		(this.g.getQualityLevel || this.g.$n && this.g.$n.no) && !d && (this.g.getQualityLevel && (c = this.g.getQualityLevel(this.J, c, this.pa.bb, this.H)), c >= this.H.length ? B(ok, this.J + ": Host provided an invalid quality level!") : (b.bb =
			c, b.Kg = this.Uj.get(this.H[c])[0].index));
		b.bb !== this.pa.bb && (D(ok, this.J + ": from " + (this.H[this.pa.bb] + " to ") + this.H[b.bb]), this.nd());
		this.pa = b;
		return this.pa.Kg
	};
	pk.prototype.Vf = function (a) {
		3E5 > Date.now() - this.pf || (v("Cast.MPL.Bandwidth", a), rk || window.localStorage.setItem("cast.player.core.QualityManager.currentBandwidth", "" + a), this.nd())
	};
	pk.prototype.nd = function () {
		var a = Date.now();
		Xd(this.H[this.pa.bb], this.Yg);
		this.pf = a
	};
	var ok = z("cast.player.core.QualityManager"),
		rk = document.domain.includes("gstatic.com");
	var sk = function (a, b) {
		this.bitrates = a;
		this.Hi = [];
		for (a = 0; a < this.bitrates.length; a++) this.Hi.push(a);
		this.rn = void 0 !== b ? b : 3;
		this.Ka = {};
		this.Rd = this.Hi.slice()
	};
	sk.prototype.zg = function () {
		return 0
	};
	sk.prototype.yg = function () {
		return this.rn
	};
	sk.prototype.ak = function () {
		this.Ka = {};
		this.Rd = this.Hi.slice()
	};
	sk.prototype.Bd = function (a) {
		this.Ka[a] || (this.Ka[a] = 0);
		this.Ka[a]++;
		this.Ka[a] > (1 == this.Rd.length ? this.yg() : this.zg()) && (a = this.Rd.indexOf(a), -1 < a && this.Rd.splice(a, 1));
		return this.Rd
	};
	var tk = function (a, b) {
		sk.call(this, a, b)
	};
	p(tk, sk);
	tk.prototype.Bd = function (a, b) {
		for (var c = 0, d = this.bitrates[0], e = 1; e < this.bitrates.length; e++) this.bitrates[e] < d && (d = this.bitrates[e], c = e);
		if (!b || b && a == c) this.Rd = [c];
		return sk.prototype.Bd.call(this, a, b)
	};
	var vk = function (a, b, c, d) {
		this.g = a;
		this.J = b;
		this.H = c;
		this.za = this.Bi();
		this.pa = this.Ie(this.za);
		D(uk, this.J + ": initial " + this.H[this.pa]);
		this.jc = 0;
		this.uc = null;
		this.pf = Date.now();
		this.Yg = d;
		Yd(this.H, d)
	};
	k = vk.prototype;
	k.Bi = function () {
		var a = this.g.initialBandwidth;
		3145728 === this.g.initialBandwidth && (a = parseFloat(window.localStorage.getItem("cast.player.core.QualityManager.currentBandwidth")), a = "number" === typeof a && a > this.g.initialBandwidth ? a : this.g.initialBandwidth);
		return a
	};
	k.N = function () {
		this.nd()
	};
	k.nm = function (a, b) {
		b && (this.za = 0 < a ? 8 * this.jc / (a / 1E3) : 0);
		this.jc = 0;
		this.uc = null;
		D(uk, this.J + ": current=" + this.za.toFixed(2));
		this.Vf(this.za)
	};
	k.pm = function (a, b) {
		0 >= a || (this.g.trackBandwidth && this.g.trackBandwidth(this.J, a, b), Bg(b, a), a = 0 < a ? 8 * b / (a / 1E3) : 0, this.za = .8 * a + (1 - .8) * this.za, D(uk, this.J + ": current=" + a.toFixed(2) + ", average=" + this.za.toFixed(2)), this.Vf(a), this.jc = 0)
	};
	k.om = function (a) {
		this.jc = a
	};
	k.Ie = function (a, b) {
		for (var c = -1, d = Number.MAX_VALUE, e = void 0 !== b ? b[0] : 0, f = 0; f < this.H.length; f++)
			if (void 0 === b || -1 !== b.indexOf(f)) {
				if (a >= this.H[f]) {
					var g = a - this.H[f];
					g < d && (c = f, d = g)
				}
				this.H[e] > this.H[f] && (e = f)
			}
		return 0 > c ? e : c
	};
	k.fk = function (a, b, c) {
		var d = Date.now();
		if (!a && null !== this.uc && d - this.uc < 2E3 * (b || 0)) return this.pa;
		this.uc = d;
		a = this.Ie(.7 * this.za, c);
		if (this.g.getQualityLevel) {
			if (1 !== this.H.length || 0 !== this.H[0]) a = this.g.getQualityLevel(this.J, a, this.pa, this.H);
			a >= this.H.length && (B(uk, this.J + ": Host provided an invalid quality level!"), a = this.H.length - 1)
		}
		a != this.pa && (D(uk, this.J + ": from " + this.H[this.pa] + " to " + this.H[a]), this.nd(), this.pa = a);
		return this.pa
	};
	k.Vf = function (a) {
		3E5 > Date.now() - this.pf || (v("Cast.MPL.Bandwidth", a), wk || window.localStorage.setItem("cast.player.core.QualityManager.currentBandwidth", "" + a), this.nd())
	};
	k.nd = function () {
		var a = Date.now();
		Xd(this.H[this.pa], this.Yg);
		this.pf = a
	};
	var uk = z("cast.player.core.legacy_qualitymanager"),
		wk = document.domain.includes("gstatic.com");
	var T = function (a, b, c, d, e, f, g, h) {
		w.call(this);
		this.ma = a;
		this.host = b;
		this.protocol = c;
		this.jg = f;
		this.V = d;
		c = this.protocol.getStreamInfo(d);
		this.Ra = hg(c) ? new Ji(a, b, c.codecs, c.mimeType) : new Oi(b, d, c, e, a, h);
		hg(c) && this.ma.cm(this.Ra);
		Zd(c.codecs);
		v("Cast.MPL.MimeType", Rd[c.mimeType] || 0);
		v("Cast.MPL.StreamType", Ld(c.mimeType) ? 1 : Md(c.mimeType) ? 2 : hg(c) ? 3 : 0);
		this.Pg = !1;
		this.l = 1;
		this.ph = 0;
		this.re = !1;
		this.Rh = this.vb = 0;
		this.Wb = 400;
		this.kd = this.ld = this.ae = this.Qg = !1;
		this.nl = this.Yh = 0;
		this.Cb = new uf;
		this.I = new Wf;
		this.I.setResponse = this.Nn.bind(this);
		this.m = new $i(this.rj.bind(this));
		zd(this.m);
		x(this.m, "success", this.td, !1, this);
		x(this.m, "error", this.hc.bind(this, !1));
		x(this.m, "timeout", this.hc.bind(this, !0));
		x(this.m, "ready", this.zn, !1, this);
		this.H = c.bitrates;
		this.qe = null;
		Uh.Te();
		this.Fm = !0;
		this.gk = this.host.enableContentDeliveryNetworkCycling && this.Fm;
		Da("Cast.MPL.UseFallbackCdnLogic", this.gk);
		this.di = !1;
		this.host.enableContentDeliveryNetworkCycling ? (a = new pk(b, d, c), b = this.host, d = c.streamsGroupedByBitrate,
			c = c.streamsGroupedByCdn, c = this.gk ? new qj({
				streamsGroupedByBitrate: d,
				streamsGroupedByCdn: c,
				rd: b.segmentRequestRetryLimit,
				Mc: b.segmentRequestRetryLimit
			}) : new pj({
				streamsGroupedByBitrate: d,
				Mc: b.segmentRequestRetryLimit
			})) : (a = new vk(b, d, this.H, c.mimeType), b = this.host, c = this.gk ? new sk(c.bitrates, 2) : new tk(c.bitrates, b.segmentRequestRetryLimit));
		this.oe = a;
		this.Qk = g || c;
		this.lg = this.xj = -1
	};
	p(T, w);
	var xk = function (a) {
		void 0 !== a.Ra.Rf && (a.Ra.Rf = !1);
		w.prototype.N.call(a)
	};
	T.prototype.N = function () {
		void 0 !== this.Ra.Rf && (this.Ra.Rf = !0);
		w.prototype.N.call(this)
	};
	T.prototype.M = function () {
		clearTimeout(this.qe);
		this.qe = null;
		this.Ra.N();
		this.oe.N();
		this.m.N();
		w.prototype.M.call(this)
	};
	T.prototype.Nn = function (a, b) {
		a ? yk(this, {
			$d: this.kd,
			data: new Uint8Array(a),
			interval: this.I.interval,
			ne: this.I.ne
		}, b) : this.hc(!1);
		this.Qg = !1;
		this.ae && (zk(this), this.ae = !1)
	};
	var Bk = function (a, b) {
			var c = b.jd,
				d = void 0 === b.Pf ? void 0 : b.Pf,
				e = void 0 === b.Ed ? void 0 : b.Ed;
			b = void 0 === b.bf ? !1 : b.bf;
			return a.host.enableContentDeliveryNetworkCycling ? (a.lg = a.oe.fk({
				jd: c,
				Pf: d,
				Ed: e,
				bf: b
			}), Ak(a, a.lg)) : Ak(a, a.oe.fk(c, d, e))
		},
		Ak = function (a, b) {
			var c = a.protocol.getQualityLevel(a.V);
			if (b === c) return !1;
			a.xj = c;
			a.Pg = !0;
			a.protocol.Ah(a.V, b, a, a.ma);
			return !0
		},
		Ek = function (a, b, c, d, e, f, g) {
			g && Ck(a, b, c.time);
			if (a.ld) {
				D(Dk, a.V + ": segment processed");
				a.ld = !1;
				if (a.host.processSegment) {
					g = a.host.processSegment(a.V,
						b);
					if (be(g)) {
						g.then(function (h) {
							h instanceof Uint8Array && (b = h);
							a.Ra.append(b, c, d, e, f);
							a.kh()
						});
						return
					}
					g instanceof Uint8Array && (b = g)
				}
				a.Ra.append(b, c, d, e, f)
			} else D(Dk, a.V + ": not processing");
			a.kh()
		},
		Hk = function (a, b) {
			a.ld ? Fk(a, b, "processing previous segment") : a.Cb.eb() ? Gk(a, b) ? a.Ef(b) : (Fk(a, b, "segment duration will go beyond buffer limit"), a.qe = setTimeout(a.kh.bind(a), 1E3)) : Fk(a, b, "queue has " + a.Cb.dd() + " segments")
		},
		Fk = function (a, b, c) {
			D(Dk, a.V + ": queue segment (" + b.data.length + ") as " + c);
			a.Cb.enqueue(b)
		};
	T.prototype.kh = function () {
		if (!this.ld && !this.Cb.eb()) {
			var a = xf(this.Cb);
			Gk(this, a) ? (D(Dk, this.V + ": dequeue segment"), wf(this.Cb), this.Ef(a)) : (D(Dk, this.V + ": delay process downloaded segment"), this.qe = setTimeout(this.kh.bind(this), 1E3))
		}
	};
	var Gk = function (a, b) {
		var c = a.lb(a.ma.ed());
		return c <= a.host.autoPauseDuration ? !0 : c + b.interval.duration <= a.Ra.Sk()
	};
	T.prototype.Ef = function (a) {
		D(Dk, this.V + ": process segment");
		this.ld = !0;
		this.protocol.processSegment(this.V, a, this)
	};
	T.prototype.reset = function () {
		D(Dk, this.V + ": reset");
		this.l = 1;
		this.ph = 0;
		this.re = !1;
		Ik(this);
		this.ld = this.ae = !1;
		this.Cb.clear();
		clearTimeout(this.qe);
		this.qe = null;
		this.kd || this.m.abort();
		this.protocol.reset(this.V);
		this.Ra.reset();
		this.ma.Nc()
	};
	T.prototype.td = function (a) {
		this.di && (Ea("Cast.MPL.SuccessfulCdnSwitch"), this.di = !1);
		var b = this.protocol.getQualityLevel(this.V);
		b = this.Qk.ak(b);
		yk(this, {
			$d: this.kd,
			headers: this.m.getAllResponseHeaders(),
			data: new Uint8Array(Kd(a.target)),
			interval: this.I.interval,
			ne: this.I.ne
		}, void 0, b)
	};
	var yk = function (a, b, c, d) {
		a.oe.pm(void 0 !== c ? c : Date.now() - a.ph, b.data.length);
		Ik(a);
		Hk(a, b);
		a.kd ? (a.kd = !1, a.protocol.zh(a.V, b.data), c = !0) : c = a.re = !1;
		if (!c && (c = a.lb(a.ma.ed()), Bk(a, {
				jd: 10 > c,
				Pf: b.interval.duration,
				Ed: d
			}), a.Yh = .8 * c + (1 - .8) * a.Yh, 3E5 < Date.now() - a.nl && (v("Cast.MPL.AverageBufferDuration", parseInt(a.Yh, 10)), a.nl = Date.now()), a.Pg)) return;
		a.ma.Nc()
	};
	T.prototype.zn = function () {
		this.ae && (zk(this), this.ae = !1)
	};
	T.prototype.hc = function (a) {
		this.oe.nm(Date.now() - this.ph, a);
		var b = this.protocol.getQualityLevel(this.V);
		a = this.Qk.Bd(b, a);
		if (this.host.enableContentDeliveryNetworkCycling ? 0 === a.size : 0 === a.length) Ea("Cast.MPL.SegmentRequestFailoverOptionsExhausted"), this.host.skipSegmentOnNetworkFailure ? (Ik(this), this.ma.Nc()) : (this.l = -1, a = this.Qg ? void 0 : new Xf(this.I.url, this.m.ec, Id(this.m), this.m.getAllResponseHeaders(), Kd(this.m)), this.host.Y(301, a));
		else {
			if (b = this.host.enableContentDeliveryNetworkCycling) {
				var c =
					this.protocol.getQualityLevel(this.V);
				b = this.protocol.Bk(c);
				a: {
					for (var d = n(Array.from(a.values())), e = d.next(); !e.done; e = d.next()) {
						e = n(e.value);
						for (var f = e.next(); !f.done; f = e.next())
							if (f.value.index === c) {
								c = !1;
								break a
							}
					}
					c = !0
				}
				b = b && !c
			}(d = b) ? (this.di = Bk(this, {
				jd: !0,
				Ed: a,
				bf: !0
			}), this.vb++, this.Rh = Date.now(), this.ma.Nc()) : Bk(this, {
				jd: !0,
				Ed: a
			}) ? (this.re = !0, this.ma.Nc()) : (this.vb++, this.Rh = Date.now(), this.ma.Nc(this.Wb));
			b = Jk(this, this.xj);
			e = this.H.indexOf(b);
			c = Jk(this, this.lg); - 1 !== b && -1 !== c && (d = d && c === b,
				a = this.host.enableContentDeliveryNetworkCycling ? !a.has(e) : !a.includes(e), e = this.xj === this.lg, Da("Cast.MPL.ValidStreamSwitchOnNetworkError", d || c < b && a || e))
		}
	};
	var Jk = function (a, b) {
		a = a.protocol.getStreamInfo(b).streamsGroupedByBitrate;
		a = n(a.entries());
		for (var c = a.next(); !c.done; c = a.next()) {
			c = n(c.value);
			var d = c.next().value;
			if (void 0 !== c.next().value.find(function (e) {
					return e.index === b
				})) return d
		}
		return -1
	};
	T.prototype.rj = function (a) {
		this.oe.om(a.loaded)
	};
	T.prototype.lb = function (a) {
		return this.Ra.lb(a)
	};
	T.prototype.createBuffer = function () {
		this.Ra.createBuffer()
	};
	var Cj = function (a) {
			a.Pg = !1;
			a.ma.xl();
			Kk(a, !1);
			if (a.kd) zk(a);
			else if (Lk(a), a.ma.Nc(), a.host.onQualityLevelChanged) a.host.onQualityLevelChanged(a.V)
		},
		zk = function (a) {
			if (Mk(a)) a.ae = !0;
			else {
				a.ph = Date.now();
				a.protocol.updateSegmentRequestInfo(a.V, a.I);
				a.I.timeoutInterval = Math.max(2E3 * a.I.interval.duration, 1E4);
				a.I.skipRequest = !1;
				if (a.host.updateSegmentRequestInfo && (a.host.updateSegmentRequestInfo(a.I, a.V), a.I.skipRequest)) {
					a.Qg = !0;
					return
				}
				D(Dk, a.V + ": send request to get segment.");
				a.m.Ee = a.I.withCredentials;
				a.m.sc = Math.max(0, a.I.timeoutInterval);
				a.m.send(a.I.url, void 0, void 0, a.I.headers)
			}
		};
	T.prototype.$e = function () {
		return 0 < this.l || this.ld || Mk(this) || !this.Ra.cf() || !this.Cb.eb()
	};
	T.prototype.Ui = function () {
		var a;
		if (a = !this.Pg && 2 > this.Cb.dd() && !Mk(this)) a = xf(this.Cb), a = !(a && !Gk(this, a));
		return a
	};
	var Mk = function (a) {
			return a.m.$e() || a.Qg
		},
		Kk = function (a, b) {
			if (a.protocol.ee(a.V)) {
				var c = a.protocol.Se(a.V);
				null !== c ? Hk(a, {
					$d: !0,
					data: c,
					interval: {
						time: a.I.interval.time,
						duration: 0
					}
				}) : (a.kd = !0, a.re = a.re || b)
			}
		},
		Lk = function (a) {
			var b = a.protocol.xg(a.V);
			b && a.jg(b)
		};
	T.prototype.Dj = function () {
		if (0 < this.vb || this.re) {
			if (0 < this.vb) {
				if (Date.now() - this.Rh < this.Wb) return;
				this.Wb *= 2
			}
			zk(this)
		} else if (1 == this.l) {
			var a = this.ma.ed(),
				b = this.protocol.seek(this.V, a);
			"number" === typeof b ? (D(Dk, this.V + ": seek success " + a), this.l = 2, this.ma.Kl(b), Kk(this, !0), Lk(this), zk(this)) : D(Dk, this.V + ": seek failure " + a)
		} else this.protocol.cc(this.V) && (Kk(this, !0), Lk(this), zk(this)), this.protocol.Gc(this.V) && (this.l = 0)
	};
	var Ik = function (a) {
			a.vb = 0;
			a.Rh = 0;
			a.Wb = 400
		},
		Ck = function (a, b, c) {
			if (a.host.processMetadata) {
				var d = Sh(b, [1701671783], !0);
				0 !== d.length && (d = d.map(function (e) {
					0 === e.Ea ? (e.oc = c, e.Eb = e.oc) : (e.oc = c + e.jh / e.Ea, e.Eb = e.oc + e.sg / e.Ea);
					return {
						endTime: e.Eb,
						eventDuration: e.sg,
						id: e.Ki,
						messageData: e.ul,
						presentationTimeDelta: e.jh,
						schemeIdUri: e.Jj,
						startTime: e.fd(),
						timescale: e.Ea,
						value: e.hk
					}
				}), a.host.processMetadata("EMSG", b, c, d))
			}
		},
		Dk = z("cast.player.core.SegmentManager");
	var Nk = function (a, b, c) {
		w.call(this);
		var d = this;
		this.g = a;
		this.O = b;
		this.ma = c;
		this.na = [];
		this.Ld = [];
		this.gb = null;
		this.ja = new MediaSource;
		this.fl = this.il = this.Og = !1;
		this.Zi = this.Gd = this.Yc = null;
		this.Lg = [];
		this.ki = function (e) {
			d.gb ? d.gb.createSession(e) : d.Lg.push(e)
		};
		x(this.ja, "sourceopen", this.Jl, !1, this);
		this.g.mediaElement && x(this.g.mediaElement, "durationchange", this.Cd, !1, this)
	};
	p(Nk, w);
	Nk.prototype.M = function () {
		this.O.Wc();
		Ok(this);
		this.Gd = this.Yc = null;
		this.Lg.length = 0;
		this.gb && (this.gb.N(), this.gb = null);
		y(this.ja, "sourceopen", this.Jl, !1, this);
		this.g.mediaElement && (this.g.mediaElement.removeAttribute("src"), this.g.mediaElement.load(), y(this.g.mediaElement, "durationchange", this.Cd, !1, this));
		w.prototype.M.call(this)
	};
	Nk.prototype.Jl = function () {
		D(Pk, "sourceopen");
		if (this.fl) {
			this.update();
			Qk(this);
			for (var a = n(this.na), b = a.next(); !b.done; b = a.next())(b = b.value) && b.createBuffer()
		}
	};
	var Rk = function (a) {
		if (!a.gb && a.Zi && a.il && (a.Yc || a.Gd)) {
			a.gb = new gk(a.g, a.O, a.Zi, a.Yc, a.Gd);
			for (var b = n(a.Lg), c = b.next(); !c.done; c = b.next()) a.gb.createSession(c.value);
			a.Lg.length = 0
		}
	};
	Nk.prototype.Cd = function () {
		if (void 0 !== this.ja.setLiveSeekableRange && "open" == this.ja.readyState && Infinity == this.ja.duration) {
			var a = this.Ia();
			a && this.ja.setLiveSeekableRange(a.start, a.end)
		}
	};
	Nk.prototype.Ia = function () {
		for (var a = -Infinity, b = Infinity, c = this.O.getStreamCount(), d = 0; d < c; d++)
			if (this.O.isStreamEnabled(d)) {
				var e = this.O.Ia(d);
				if (!e) return null;
				e.start > a && (a = e.start);
				e.end < b && (b = e.end)
			}
		a > b && (a = b);
		return {
			start: a,
			end: b
		}
	};
	Nk.prototype.onManifestReady = function () {
		this.fl = !0;
		this.update();
		this.Cd()
	};
	var Sk = function (a, b, c, d) {
		c = void 0 === c ? null : c;
		d = void 0 === d ? null : d;
		null === a.Gd && (a.Gd = c);
		null === a.Yc && (a.Yc = d);
		a.Zi = b;
		Rk(a)
	};
	Nk.prototype.createSession = function (a) {
		this.ki(a)
	};
	Nk.prototype.endOfStream = function () {
		"open" == this.ja.readyState && this.ja.endOfStream()
	};
	Nk.prototype.load = function () {
		Ok(this);
		this.open()
	};
	Nk.prototype.open = function () {
		this.Og || (this.O.load(this), this.Og = !0);
		this.g.mediaElement.src ? (ec(this.g.mediaElement, "emptied", function () {
			Tk(this)
		}, !1, this), this.g.mediaElement.src = "") : Tk(this)
	};
	var Tk = function (a) {
			D(Pk, "open");
			!a.gb && a.g.mediaElement.setMediaKeys ? a.g.mediaElement.setMediaKeys(null).catch(function (b) {
				A(Pk, b.toString())
			}).then(function () {
				Uk(a)
			}) : Uk(a)
		},
		Uk = function (a) {
			a.g.mediaElement.src = window.URL.createObjectURL(a.ja);
			a.il = !0;
			Rk(a)
		};
	Nk.prototype.preload = function () {
		this.Og ? B(Pk, "protocol already loaded") : (this.O.load(this), this.Og = !0)
	};
	var Ok = function (a) {
			for (var b = n(a.na), c = b.next(); !c.done; c = b.next())(c = c.value) && c.N();
			a.na.length = 0;
			a.Ld = []
		},
		Qk = function (a) {
			if ("open" == a.ja.readyState) {
				var b = a.O.getDuration();
				0 < b && !a.ja.duration && (a.ja.duration = parseFloat((b - 1E-4).toFixed(4)))
			}
		};
	k = Nk.prototype;
	k.reset = function () {
		for (var a = n(this.na), b = a.next(); !b.done; b = a.next())(b = b.value) && b.reset()
	};
	k.update = function () {
		for (var a = this.O.getStreamCount(), b = null, c = null, d = 0; d < a; d++)
			if (this.O.isStreamEnabled(d)) {
				var e = this.O.getStreamInfo(d),
					f = e.mimeType;
				e = e.codecs;
				Ld(f) || Nd(e) ? b ? B(Pk, "more than one audio stream enabled") : (b = vg(e), b = f + ';codecs="' + b + '"') : Md(f) && (c ? B(Pk, "more than one video stream enabled") : (c = ug(e), c = f + ';codecs="' + c + '"'));
				if (!this.na[d]) {
					try {
						this.na[d] = new T(this.ma, this.g, this.O, d, this.ja, this.ki, void 0, this.Ld)
					} catch (g) {
						B(Pk, g.message);
						22 == g.code && this.ma.mj();
						return
					}
					Md(f) && this.ma.ji();
					this.O.enableStream(d, !0);
					Bk(this.na[d], {
						jd: !0
					})
				}
			} else this.na[d] && (xk(this.na[d]), this.na[d] = null);
		b || c ? this.Yc || this.Gd || (this.Yc = b, this.Gd = c, Rk(this)) : B(Pk, "no enabled audio or video stream")
	};
	k.ug = function () {
		for (var a = this.O.getStreamCount(), b = 0; b < a; b++)
			if (this.O.isStreamEnabled(b)) {
				var c = this.O.getStreamInfo(b),
					d = c.codecs;
				if (Ld(c.mimeType) || Nd(d)) {
					this.na[b] && (xk(this.na[b]), this.na[b] = null);
					try {
						this.na[b] = new T(this.ma, this.g, this.O, b, this.ja, this.ki, void 0, this.Ld)
					} catch (e) {
						B(Pk, e.message);
						22 == e.code && this.ma.mj();
						break
					}
					this.O.enableStream(b, !0);
					Bk(this.na[b], {
						jd: !0
					})
				}
			}
	};
	k.Ui = function (a) {
		return this.na[a].Ui()
	};
	k.Dj = function (a) {
		this.na[a].Dj()
	};
	k.$e = function (a) {
		return this.na[a].$e()
	};
	k.lb = function (a, b) {
		return this.na[a].lb(b)
	};
	k.Uc = function () {
		this.gb.Uc()
	};
	k.Ze = function () {
		return null !== this.gb && this.gb.Ze()
	};
	k.getStreamCount = function () {
		return this.na.length
	};
	var Pk = z("cast.player.core.MediaSourceManager");
	var Vk = function () {};
	t("cast.player.core.CaptionsCallbacks", Vk);
	Vk.prototype.ed = function () {};
	Vk.prototype.Cg = function () {};
	var Wk = function () {};
	t("cast.player.core.PlayerCallbacks", Wk);
	k = Wk.prototype;
	k.Nc = function () {};
	k.Kl = function () {};
	k.xl = function () {};
	k.ug = function () {};
	k.wl = function () {};
	k.mj = function () {};
	k.ji = function () {};
	k.cm = function () {};
	var Xk = function (a, b, c, d) {
		Ji.call(this, a, b, c);
		a = new Wf;
		a.url = d;
		b.updateCaptionsRequestInfo && b.updateCaptionsRequestInfo(a);
		this.km = new sj(this);
		this.km.load(a)
	};
	p(Xk, Ji);
	Xk.prototype.M = function () {
		this.km.N();
		Ji.prototype.M.call(this)
	};
	Xk.prototype.reset = function () {};
	Xk.prototype.fh = function (a) {
		a && this.parse(a, 0)
	};
	var U = function (a) {
			Ca() && Ba.__platform__.metrics.setMplVersion("1.0.0.112");
			this.g = a;
			this.O = null;
			this.bc = 0;
			this.Ub = null;
			this.sk = this.cb = this.df = this.nb = !1;
			this.Sg = !0;
			this.Rg = !1;
			this.Wg = this.Aa = this.aa = this.A = null;
			this.Xe = !1;
			this.Uf = null;
			this.gh = this.qj.bind(this);
			this.Gh = this.Fh = this.Tf = null;
			this.Dh = this.ff = !1;
			this.Mj = []
		},
		Zk = function (a, b) {
			Yk(a);
			a.Uf = setTimeout(a.gh, b || 0)
		};
	k = U.prototype;
	k.Nc = function (a) {
		Zk(this, a)
	};
	k.lh = function (a, b, c, d, e, f) {
		this.df && this.Aa.lh(a, b, c, d, e, f);
		Zk(this)
	};
	k.Kl = function (a) {
		this.nb && (Infinity == this.bc || this.bc < a) && (this.bc = a)
	};
	k.xl = function () {
		Qk(this.aa)
	};
	k.ed = function () {
		return this.nb ? this.bc : this.A.currentTime
	};
	k.ug = function () {
		this.aa.ug()
	};
	k.wl = function () {
		this.aa.update()
	};
	k.mj = function () {
		this.reload()
	};
	k.ji = function () {
		this.ff || null !== this.Aa || (this.df = !0, this.Aa = new Zi(this, this.g))
	};
	k.Cg = function () {
		return this.Mj
	};
	k.Tn = function (a) {
		this.Mj = a;
		0 < this.Mj.length || (this.Aa && !this.df ? (this.Aa.Nd(), this.Aa.Qf()) : this.Wg && (this.Wg.Nd(), this.Wg.Qf()))
	};
	k.cm = function (a) {
		this.Wg = a
	};
	var Yk = function (a) {
		null !== a.Uf && (clearTimeout(a.Uf), a.Uf = null)
	};
	k = U.prototype;
	k.wf = function () {
		D($k, "seeking");
		this.Xe ? this.Xe = !1 : (this.Rg = this.nb = !1, this.Tf = null, this.Aa && this.Aa.reset(), this.aa.reset())
	};
	k.vf = function () {
		D($k, "seeked");
		this.Ub = Date.now()
	};
	k.dh = function () {
		A($k, "error");
		this.g.Y(Qd(this.A.error))
	};
	k.El = function () {
		this.Tf = Date.now();
		Ea("Cast.MPL.Playing");
		this.Fh && (v("Cast.MPL.AutoPauseTime", Date.now() - this.Fh), this.Fh = null)
	};
	k.Dl = function () {
		var a = Date.now();
		this.cb && !this.nb && null !== this.Tf && (this.Fh = a, v("Cast.MPL.PlayTimeBeforeAutoPause", a - this.Tf));
		Ea("Cast.MPL.Pause");
		this.Ub = this.Tf = null
	};
	k.zl = function () {
		Ea("Cast.MPL.Ended");
		this.Ub = null
	};
	k.Lh = function () {
		if (this.nb && this.A && !isNaN(this.A.duration) && 0 != this.A.buffered.length && (this.nb = !1, this.Ub = Date.now(), v("Cast.MPL.MediaDuration", this.A.duration), 0 != this.bc && this.bc != this.A.currentTime)) {
			var a = this.bc;
			this.Xe = !0;
			this.A.currentTime = a
		}
		this.Sg = !1;
		var b = 0,
			c = 0,
			d = !0;
		a = this.ed();
		for (var e = this.aa.getStreamCount(), f = 0; f < e; f++)
			if (this.O.isStreamEnabled(f) && (c++, this.aa.$e(f))) {
				b++;
				var g = this.aa.lb(f, a);
				if (this.cb && d) {
					var h = this.O.getSegmentInterval(f).duration * this.g.autoResumeNumberOfSegments;
					if (0 == h || h > this.g.autoResumeDuration) h = this.g.autoResumeDuration;
					g < h && (d = !1)
				}
				h = f;
				20 <= g ? D($k, "not requesting more segments, buffered duration " + g + " seconds exceeds max duration.") : (g < this.g.autoPauseDuration && (g = this.O.getStreamInfo(h), hg(g) || (this.Sg = !0)), this.aa.Ui(h) && this.aa.Dj(h))
			}
		if (this.A && 0 != c) {
			this.Sg ? !this.A.paused && this.A.duration - a > this.g.autoPauseDuration && (D($k, "auto pause " + a), this.cb = !0, this.A.pause(), this.g.onAutoPause && this.g.onAutoPause(this.cb)) : !this.nb && this.cb && d && (this.cb = !1,
				this.A.paused && (D($k, "auto resume " + a), this.A.play(), this.g.onAutoPause && this.g.onAutoPause(this.cb), this.Ub = Date.now()));
			if (0 == b) {
				if (!this.Rg && (D($k, "endOfStream " + a), this.aa.endOfStream(), this.g.onMediaDownloadEnded)) this.g.onMediaDownloadEnded();
				this.Rg = !0
			}
			if (!(this.nb || this.cb || this.A.paused || !this.aa || this.aa.Ze()) && (D($k, "time=" + a), this.Ub && (b = Date.now(), c = 2500 < b - this.Ub, this.g.pk || c))) {
				a: {
					d = this.A.currentTime;e = this.A.buffered;
					for (f = e.length - 1; 0 <= f; f--) {
						g = e.start(f);
						if (d >= g) break;
						if (0 == f ||
							d > e.end(f - 1) - .15) {
							B($k, "stall jump to " + g);
							Ea("Cast.MPL.PlaybackStallGap");
							this.Xe = this.Dh = !0;
							this.A.currentTime = g;
							d = !0;
							break a
						}
					}
					d = !1
				}
				d ? this.Ub = null : c && (this.Ub = this.g.pk ? b : null, B($k, "playback stalled in buffered region"), Ea("Cast.MPL.PlaybackStall"), this.Xe = this.Dh = !0, this.A.currentTime = a + .5)
			}
		}
		Zk(this, 400)
	};
	k.xf = function () {
		this.Ub = Date.now();
		this.Dh && (v("Cast.MPL.StallPrevented", 1), this.Dh = !1);
		this.Gh && (v(this.ff ? "Cast.MPL.PreloadAutoplayStartupLatency" : "Cast.MPL.AutoplayStartupLatency", Date.now() - this.Gh), this.Gh = null)
	};
	k.qj = function () {
		this.Uf = null;
		this.Lh()
	};
	k.Aj = function () {
		x(this.A, "error", this.dh, !1, this);
		x(this.A, "seeking", this.wf, !1, this);
		x(this.A, "seeked", this.vf, !1, this);
		x(this.A, "pause", this.Dl, !1, this);
		x(this.A, "playing", this.El, !1, this);
		x(this.A, "timeupdate", this.xf, !1, this);
		x(this.A, "ended", this.zl, !1, this)
	};
	k.ck = function () {
		y(this.A, "error", this.dh, !1, this);
		y(this.A, "seeking", this.wf, !1, this);
		y(this.A, "seeked", this.vf, !1, this);
		y(this.A, "pause", this.Dl, !1, this);
		y(this.A, "playing", this.El, !1, this);
		y(this.A, "timeupdate", this.xf, !1, this);
		y(this.A, "ended", this.zl, !1, this)
	};
	var al = function (a, b, c) {
		a.O = b;
		a.nb = !0;
		a.bc = c || 0;
		a.aa = new Nk(a.g, a.O, a)
	};
	k = U.prototype;
	k.load = function (a, b) {
		D($k, "load");
		Ea("Cast.MPL.Load");
		var c = bj();
		void 0 !== c && ej("Cast.MPL.ExperimentationBlockId", c.blockIds);
		this.g.Nk && Ea("Cast.MPL.DisableBufferAdjust");
		this.ff = !1;
		this.A = this.g.mediaElement;
		this.Aj();
		this.A.autoplay && (this.Gh = Date.now(), this.A.autoplay = !1, this.sk = !0, this.Pl());
		this.aa ? (this.aa.open(), this.ji()) : a ? (al(this, a, b), this.aa.load()) : A($k, "no protocol")
	};
	k.preload = function (a, b) {
		D($k, "preload");
		Ea("Cast.MPL.Preload");
		al(this, a, b);
		this.aa.preload();
		this.ff = !0
	};
	k.Wc = function () {
		D($k, "unload");
		bl(this);
		this.aa && (this.aa.N(), this.aa = null);
		Yk(this);
		this.A && (this.sk && (this.A.autoplay = !0), this.Rg = this.cb = !1, this.ck(), this.A = null, this.ff = !1)
	};
	k.reload = function () {
		this.nb || (this.bc = this.A.currentTime);
		this.nb = !0;
		this.A.paused || (this.cb = !0);
		Yk(this);
		this.aa.load()
	};
	k.Pl = function () {
		this.cb = !0
	};
	k.getState = function (a) {
		var b = this.aa.Ia();
		void 0 === a && (a = 1);
		var c = {};
		a & 1 && (c.underflow = this.Sg || this.cb);
		a & 2 && (c.seekable = b ? {
			start: b.start,
			end: b.end
		} : null);
		return c
	};
	k.lb = function (a) {
		return this.aa.lb(a, this.ed())
	};
	k.Xm = function () {
		return 20
	};
	k.Uc = function () {
		this.aa.Uc()
	};
	var bl = function (a) {
		a.Aa && (a.df = !1, a.Aa.N(), a.Aa = null)
	};
	U.prototype.Tm = function (a, b, c) {
		b ? a ? "cea608" == b ? null !== this.Aa ? this.Aa.Tb.mode = "showing" : B($k, "InbandCaptionsManager should have been created by createInbandCaptionsManager() callback!") : c && (bl(this), this.Aa = new Xk(this, this.g, b, c), this.Aa.Tb.mode = "showing") : "cea608" == b ? null !== this.Aa && (this.Aa.Tb.mode = "hidden") : this.df || bl(this) : this.aa.update()
	};
	U.prototype.Ym = function () {
		return this.O
	};
	U.prototype.Wm = function () {
		return this.g
	};
	t("cast.player.api.Player", U);
	U.prototype.getHost = U.prototype.Wm;
	U.prototype.getStreamingProtocol = U.prototype.Ym;
	U.prototype.enableCaptions = U.prototype.Tm;
	U.prototype.startLicenseRequest = U.prototype.Uc;
	U.prototype.getMaxBufferDuration = U.prototype.Xm;
	U.prototype.getBufferDuration = U.prototype.lb;
	U.prototype.getState = U.prototype.getState;
	U.prototype.playWhenHaveEnoughData = U.prototype.Pl;
	U.prototype.reload = U.prototype.reload;
	U.prototype.unload = U.prototype.Wc;
	U.prototype.preload = U.prototype.preload;
	U.prototype.load = U.prototype.load;
	U.prototype.setSenderTrackStyles = U.prototype.Tn;
	U.prototype.getSenderTrackStyles = U.prototype.Cg;
	U.prototype.onAudioChanged = U.prototype.wl;
	var $k = z("cast.player.api.Player");
	U.State = {
		UNDERFLOW: 1,
		SEEKABLE: 2
	};
	var V = function (a) {
		this.name = a;
		this.hl = !1
	};
	V.prototype.parse = function () {
		this.hl = !0
	};
	var cl = function (a) {
		V.call(this, a);
		this.value = null
	};
	p(cl, V);
	cl.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		void 0 !== a && -1 < a.indexOf("/") ? (a = a.split("/"), this.value = parseInt(a[0], 10) / (1 < a.length ? parseInt(a[1], 10) : 1)) : this.value = parseInt(a, 10)
	};
	var W = function (a, b) {
		V.call(this, a);
		this.value = b || null
	};
	p(W, V);
	W.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		this.value = a
	};
	var dl = function (a) {
		V.call(this, a);
		this.value = null
	};
	p(dl, V);
	dl.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		this.value = "true" == a.toLowerCase()
	};
	var el = function (a) {
		V.call(this, a);
		this.value = null
	};
	p(el, V);
	el.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		if (a = a.match(Ye)) {
			var b = !(a[6] || a[7] || a[8]);
			if (b && !(a[2] || a[3] || a[4]) || b && a[5]) a = null;
			else {
				b = parseInt(a[2], 10) || 0;
				var c = parseInt(a[3], 10) || 0,
					d = parseInt(a[4], 10) || 0,
					e = parseInt(a[6], 10) || 0,
					f = parseInt(a[7], 10) || 0,
					g = parseFloat(a[8]) || 0;
				a = a[1] ? new Ze(-b, -c, -d, -e, -f, -g) : new Ze(b, c, d, e, f, g)
			}
		} else a = null;
		this.value = 60 * (60 * (24 * a.zc + a.Ec) + a.Lc) + a.Sc
	};
	var fl = function (a) {
		V.call(this, a);
		this.value = null
	};
	p(fl, V);
	fl.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		a = a.toUpperCase();
		for (var b in gl)
			if (gl.hasOwnProperty(b) && a.includes(gl[b])) {
				this.value = gl[b];
				break
			}
	};
	var gl = {
			PLAYREADY: "9A04F079-9840-4286-AB92-E65BE0885F95",
			WIDEVINE: "EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED",
			CLEARKEY: "1077EFEC-C0B2-4D02-ACE3-3C1E52E2FB4B",
			um: "URN:MPEG:DASH:MP4PROTECTION:2011"
		},
		hl = function (a) {
			V.call(this, a);
			this.value = null
		};
	p(hl, V);
	hl.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		a = a.toUpperCase();
		a.includes("9A04F079-9840-4286-AB92-E65BE0885F95") ? this.value = kg : a.includes("EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED") ? this.value = lg : a.includes("1077EFEC-C0B2-4D02-ACE3-3C1E52E2FB4B") && (this.value = mg)
	};
	var il = function (a, b) {
		for (var c in b)
			if (b.hasOwnProperty(c) && b[c] instanceof V) {
				var d = b[c];
				if (!d.hl) {
					var e = a.getNamedItem(d.name);
					e && d.parse(e.value)
				}
			}
	};
	var kl = function (a) {
			this.duration = new el("mediaPresentationDuration");
			this.type = new W("type");
			this.rm = new el("minimumUpdatePeriod");
			for (this.url = null; a;) {
				if ("MPD" == a.nodeName) {
					il(a.attributes, this);
					break
				}
				a = a.nextElementSibling
			}
			this.je = [];
			if (a) {
				for (var b = n(a.children), c = b.next(); !c.done; c = b.next())
					if (c = c.value, "BaseURL" == c.nodeName) {
						this.url = c.textContent;
						break
					}
				a = n(a.children);
				for (c = a.next(); !c.done; c = a.next()) b = c.value, "Period" == b.nodeName && this.je.push(new jl(b, this))
			}
		},
		ll = function (a) {
			V.call(this,
				a);
			this.end = this.start = null
		};
	p(ll, V);
	ll.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		a = a.split("-");
		this.start = parseInt(a[0], 10);
		this.end = parseInt(a[1], 10)
	};
	var ml = function (a) {
			this.media = new W("media");
			il(a.attributes, this)
		},
		nl = function (a) {
			this.gm = new W("sourceURL");
			this.La = new ll("range");
			il(a.attributes, this)
		},
		ol = function (a) {
			this.duration = new cl("duration");
			this.timescale = new cl("timescale");
			this.T = new W("presentationTimeOffset");
			this.P = new cl("startNumber");
			this.hd = new ll("indexRange");
			il(a.attributes, this);
			this.xd = this.Ye = null;
			a = n(a.children);
			for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
				case "Initialization":
					this.Ye = new nl(b);
					break;
				case "SegmentTimeline":
					this.xd = [];
					b = n(b.children);
					for (var c = b.next(); !c.done; c = b.next()) {
						var d = c.value;
						c = 0;
						var e = d.attributes.getNamedItem("r");
						e && (c = parseInt(e.value, 10));
						e = (e = d.attributes.getNamedItem("t")) ? new rh(e.value) : null;
						if (d = d.attributes.getNamedItem("d"))
							for (d = parseInt(d.value, 10), this.xd.push({
									time: e,
									duration: d
								}), e = 0; e < c; e++) this.xd.push({
								time: null,
								duration: d
							})
					}
			}
		};
	ol.prototype.hb = function (a) {
		null === a.duration.value && (a.duration = this.duration);
		null === a.timescale.value && (a.timescale = this.timescale);
		null === a.T.value && (a.T = this.T);
		null === a.P.value && (a.P = this.P);
		null === a.hd.start && (a.hd = this.hd);
		null === a.Ye && (a.Ye = this.Ye);
		null === a.xd && (a.xd = this.xd)
	};
	var pl = function (a) {
		ol.call(this, a);
		this.i = [];
		a = n(a.children);
		for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
			case "SegmentURL":
				this.i.push(new ml(b))
		}
	};
	p(pl, ol);
	pl.prototype.hb = function (a) {
		ol.prototype.hb.call(this, a);
		0 == a.i.length && (a.i = this.i)
	};
	var ql = function (a) {
		ol.call(this, a);
		this.media = new W("media");
		this.qa = new W("initialization");
		il(a.attributes, this)
	};
	p(ql, ol);
	ql.prototype.hb = function (a) {
		ol.prototype.hb.call(this, a);
		null === a.media.value && (a.media = this.media);
		null === a.qa.value && (a.qa = this.qa)
	};
	var sl = function (a) {
			this.schemeIdUri = new fl("schemeIdUri");
			il(a.attributes, this);
			var b = this.schemeIdUri.value;
			this.Gf = rl(b, a);
			this.Dc = b == gl.um
		},
		rl = function (a, b) {
			switch (a) {
				case gl.PLAYREADY:
					a = n(b.children);
					for (b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
						case "mspr:pro":
							return wj(ae(window.atob(b.childNodes[0].nodeValue.trim())));
						case "cenc:pssh":
							return a = ae(window.atob(b.childNodes[0].nodeValue)), a = new Kh(a), wj(a.getData())
					}
					return tl(kg);
				case gl.WIDEVINE:
					return tl(lg);
				case gl.CLEARKEY:
					return tl(mg);
				default:
					return null
			}
		},
		tl = function (a) {
			return {
				systemId: a,
				Ve: null,
				kf: null,
				url: null,
				Tg: 0
			}
		},
		ul = function (a) {
			this.Jf = [];
			this.Dc = !1;
			this.mc = this.L = this.nc = this.url = null;
			a = n(a.children);
			for (var b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
				case "BaseURL":
					this.url = b.textContent;
					break;
				case "ContentProtection":
					b = new sl(b);
					b.Gf && this.Jf.push(b.Gf);
					this.Dc = this.Dc || b.Dc;
					break;
				case "SegmentBase":
					this.mc = new ol(b);
					break;
				case "SegmentTemplate":
					this.L = new ql(b);
					break;
				case "SegmentList":
					this.nc = new pl(b)
			}
		};
	ul.prototype.hb = function (a) {
		a.L ? this.L && this.L.hb(a.L) : a.L = this.L;
		a.mc ? this.mc && this.mc.hb(a.mc) : a.mc = this.mc;
		a.nc ? this.nc && this.nc.hb(a.nc) : a.nc = this.nc;
		if (a.url && this.url) {
			var b = this.url;
			var c = a.url;
			b instanceof I || (b = Kf(b));
			c instanceof I || (c = Kf(c));
			b = b.resolve(c).toString()
		} else b = a.url || this.url;
		a.url = b;
		0 == a.Jf.length && (a.Jf = this.Jf);
		a.Dc = a.Dc || this.Dc
	};
	var vl = function (a) {
		ul.call(this, a);
		this.id = new W("id");
		this.mimeType = new W("mimeType");
		this.codecs = new W("codecs");
		il(a.attributes, this)
	};
	p(vl, ul);
	vl.prototype.hb = function (a) {
		ul.prototype.hb.call(this, a);
		a.mimeType.value = a.mimeType.value || this.mimeType.value;
		a.codecs.value = a.codecs.value || this.codecs.value
	};
	var wl = function (a, b) {
		vl.call(this, a);
		this.Am = new cl("bandwidth");
		this.height = new cl("height");
		this.width = new cl("width");
		il(a.attributes, this);
		b.hb(this);
		if (this.mimeType.value) switch (this.mimeType.value.toLowerCase()) {
			case "application/ttml+xml":
				this.codecs.value = "ttml";
				this.mimeType.value = "text/mp4";
				break;
			case "text/vtt":
				this.codecs.value = "webvtt"
		}
		"avc1" == this.codecs.value && (this.codecs.value = "avc1.4D401E")
	};
	p(wl, vl);
	var xl = function (a, b) {
		vl.call(this, a);
		this.language = new W("lang");
		this.frameRate = new cl("frameRate");
		il(a.attributes, this);
		this.role = null;
		b.hb(this);
		this.F = [];
		a = n(a.children);
		for (b = a.next(); !b.done; b = a.next()) b = b.value, "Representation" == b.nodeName ? this.F.push(new wl(b, this)) : "Role" == b.nodeName && (this.role = b.getAttribute("value"))
	};
	p(xl, vl);
	var jl = function (a, b) {
		ul.call(this, a);
		this.duration = new el("duration");
		this.start = new el("start");
		il(a.attributes, this);
		this.url = this.url || b.url;
		this.o = [];
		a = n(a.children);
		for (b = a.next(); !b.done; b = a.next()) switch (b = b.value, b.nodeName) {
			case "AdaptationSet":
				this.o.push(new xl(b, this))
		}
	};
	p(jl, ul);
	var yl = function (a) {
		Q.call(this, a);
		this.Kf = new Yc(5);
		this.Bh = !1;
		this.vd = [];
		this.Hk = []
	};
	p(yl, Q);
	yl.prototype.updateLicenseRequestInfo = function (a) {
		var b = this.Kf.get(a.protectionSystem);
		b && (a.headers = {}, a.headers["content-type"] = "text/xml;charset=utf-8", a.url = b.url)
	};
	yl.prototype.kj = function (a) {
		if (a.je && 0 != a.je.length) {
			Ej(this, "dynamic" == a.type.value);
			this.Sj = !!this.X && "number" === typeof a.rm.value;
			a.duration.value && (this.duration = a.duration.value);
			a: {
				var b = a.je;
				var c = b[0];
				if (c.o[0].L) {
					var d = [],
						e = [];
					b = n(b);
					for (var f = b.next(); !f.done; f = b.next()) {
						f = f.value;
						for (var g = f.duration.value, h = 0, l = [], m = n(f.o), q = m.next(); !q.done; q = m.next()) {
							var u = q.value;
							q = u.L;
							if (!q) {
								B(zl, "Multiple periods not using SegmentTemplate is not supported");
								c = [{
									start: c.start.value,
									duration: c.duration.value,
									zf: null
								}];
								break a
							}
							var uriUrl = (u && u.F && u.F.length != 0 && u.F[0].url) ? u.F[0].url : null;
							u = this.uri.resolve(new I(uriUrl)).toString();
							var E = new I(u);
							e[h] = e[h] || 0;
							u = e[h];
							var C = {
								bitrate: 0,
								T: 0,
								i: [],
								url: null,
								L: null,
								P: null,
								Jb: null
							};
							Al(E, q, C);
							q = Bl(E, q);
							q = {
								P: C.P,
								T: C.T,
								bl: u,
								L: q
							};
							l.push(q);
							e[h] += Math.round(g / q.L.duration);
							h++
						}
						d.push({
							start: f.start.value,
							duration: f.duration.value,
							zf: l
						})
					}
					c = d
				} else c = [{
					start: c.start.value,
					duration: c.duration.value,
					zf: null
				}]
			}
			this.vd = c;
			a = n(a.je[0].o);
			for (c = a.next(); !c.done; c = a.next()) {
				d = c.value;
				e = d.F;
				c = e && e.length != 0 && e[0].mimeType && e[0].mimeType.value ? e[0].mimeType.value : "video/mp4";
				e = d.codecs.value || (e && e.length != 0 && e[0].codecs.value ? e[0].codecs.value : null) ||
					"";
				if (null === c) {
					this.host.Y(422, void 0, "No mime type in manifest", zl);
					break
				}
				if (Ld(c)) b = 1;
				else if (Md(c)) b = 2;
				else if (gg(d.role, c, e)) b = 3;
				else continue;
				c = {
					name: d.id.value,
					type: b,
					enabled: !1,
					ib: !1,
					$: !0,
					index: -1,
					ca: -1,
					F: [],
					language: d.language.value,
					mimeType: c,
					codecs: e,
					role: d.role
				};
				d = n(d.F);
				for (e = d.next(); !e.done; e = d.next()) {
					e = e.value;
					b = n(e.Jf);
					for (f = b.next(); !f.done; f = b.next()) f = f.value, (g = Cl(f.systemId)) && this.Kf.set(g, f);
					e.Dc && (this.Bh = !0);
					f = this.uri.resolve(new I(e.url)).toString();
					b = {
						bitrate: e.Am.value ||
							0,
						id: e.id.value,
						T: 0,
						i: [],
						url: f,
						P: null,
						L: null,
						Jb: null
					};
					e.mc || e.nc || e.L ? (e.url && "/" != f[f.length - 1] && (f += "/"), f = new I(f), Al(f, e.mc, b), (g = e.nc) && Al(f, g, b), e = e.L, g = b, e && (Al(f, e, g), g.L = Bl(f, e))) : (e = f, f = this.duration, b.i.push({
						time: 0,
						ic: new rh("0"),
						duration: f,
						url: e
					}));
					c.F.push(b)
				}
				c.ib = !0;
				this.o.push(c)
			}
		} else this.host.Y(421, void 0, "No periods found in manifest", zl)
	};
	var Dl = function (a) {
			if (wg && wg.updateOutputMode) {
				var b = a.frameRate.value;
				if ("number" === typeof b) {
					a = n(a.F);
					for (var c = a.next(); !c.done; c = a.next()) {
						var d = c.value;
						c = d.width.value;
						var e = d.height.value;
						if ("number" === typeof c && "number" === typeof e && 2160 <= e) {
							a = d.codecs.value;
							D(zl, "Update output mode with frameRate=" + b + " codecs=" + a);
							wg.updateOutputMode(c, e, b, a);
							break
						}
					}
				}
			}
		},
		El = function (a) {
			a = n(a.je);
			for (var b = a.next(); !b.done; b = a.next()) {
				var c = {};
				b = n(b.value.o);
				for (var d = b.next(); !d.done; c = {
						Vh: c.Vh
					}, d = b.next()) d =
					d.value, c.Vh = d.frameRate.value, d.F = d.F.filter(function (e) {
						return function (f) {
							var g = e.Vh;
							if (xg) {
								var h = f.codecs.value,
									l = f.mimeType.value,
									m = f.width.value;
								f = f.height.value;
								h && l ? (g = Pd({
									mimeType: l,
									codecs: tg(h),
									width: m,
									height: f,
									framerate: g
								}), h = xg(g), D(zl, "canDisplay(" + g + "): " + !!h), g = h) : g = !0
							} else g = !0;
							return g
						}
					}(c)), Dl(d)
			}
		};
	k = yl.prototype;
	k.Cj = function () {
		this.host.Y(321, tj(this.od))
	};
	k.Qb = function (a) {
		this.host.Y(420, void 0, a, zl)
	};
	k.vj = function (a) {
		var b = new DOMParser;
		a = kb(b, Tf(a));
		a.firstChild && (a = new kl(a.firstChild), this.Bj = 1E3 * a.rm.value || this.Bj, El(a), this.kj(a))
	};
	k.ek = function () {
		this.Bh || Sk(this.Qc, Array.from(this.Kf.keys()))
	};
	k.Ia = function (a) {
		var b = this.o[a];
		b = b.F[b.ca];
		return 0 == b.i.length && b.L ? (a = this.duration, this.X && (a -= 20), {
			start: 0,
			end: a
		}) : Q.prototype.Ia.call(this, a)
	};
	var Gl = function (a, b, c) {
		c = Fl(a, b, c);
		a.Hk[b] != c && (a.o[b].$ = !0);
		a.Hk[b] = c
	};
	yl.prototype.seek = function (a, b) {
		var c = this.o[a],
			d = c.F[c.ca];
		if (0 == d.i.length && d.L) {
			var e = this.Ia(a);
			b < e.start && (b = e.start);
			b > e.end && (b = e.end);
			e = Math.floor(b / d.L.duration);
			d = Math.ceil(this.duration / d.L.duration);
			c.index = e < d ? e : d - 1;
			Gl(this, a, c.index);
			return b
		}
		return Q.prototype.seek.call(this, a, b)
	};
	yl.prototype.cc = function (a) {
		var b = this.o[a],
			c = b.F[b.ca];
		if (0 == c.i.length && c.L) {
			var d = b.index + 1;
			return d < Math.ceil(this.duration / c.L.duration) ? (b.index = d, Gl(this, a, b.index), !0) : !1
		}
		return Q.prototype.cc.call(this, a)
	};
	var Fl = function (a, b, c) {
		a = a.vd;
		for (var d = 0; d < a.length - 1 && !(c < a[d + 1].zf[b].bl); d++);
		return d
	};
	k = yl.prototype;
	k.Gc = function (a) {
		var b = this.o[a],
			c = b.F[b.ca];
		return 0 == c.i.length && c.L ? b.index == Math.ceil(this.duration / c.L.duration) - 1 : Q.prototype.Gc.call(this, a)
	};
	k.getSegmentInterval = function (a) {
		if (this.ee(a)) return {
			time: 0,
			duration: 0
		};
		var b = this.o[a],
			c = b.F[b.ca];
		if (c.L) {
			b = b.index;
			if (0 > b) return {
				time: 0,
				duration: 0
			};
			0 < c.i.length ? (a = c.i[b].duration, c = c.i[b].time - c.T) : (a = c.L.duration, c = b * a);
			return {
				time: c,
				duration: a
			}
		}
		return Q.prototype.getSegmentInterval.call(this, a)
	};
	k.updateSegmentRequestInfo = function (a, b) {
		Q.prototype.updateSegmentRequestInfo.call(this, a, b);
		var c = this.o[a],
			d = c.F[c.ca];
		c = c.index;
		var e = this.ee(a);
		if (d.L) {
			var f = d.L,
				g = null;
			1 < this.vd.length && (g = this.vd[Fl(this, a, c)].zf[a], f = g.L);
			a = e ? f.qa : f.url;
			a = a.replace(/\$RepresentationID\$/g, d.id);
			a = a.replace(/\$Bandwidth\$/g, d.bitrate.toString());
			e || (e = c + (d.P || 0), 1 < this.vd.length && (e = c + (g.P || 0) - g.bl), a = Hl(a, e), a = a.replace("$Time$", 0 < d.i.length ? d.i[c].ic.toString() : (c * f.duration).toString()));
			b.url = a
		} else {
			g = f =
				null;
			if (e) c = d.Jb, d = c.url ? c.url : d.url, c.La && (f = c.La.start, g = c.La.end);
			else if (c < d.i.length) c = d.i[c], c.url ? d = c.url : (d = d.url, f = c.offset, g = c.offset + c.size - 1);
			else {
				this.host.Y(423, void 0, "Invalid segment info in manifest.", zl);
				return
			}
			b.url = d;
			b.headers = {};
			null !== f && null !== g && (b.headers.Range = "bytes=" + f + "-" + g)
		}
	};
	k.processSegment = function (a, b, c) {
		var d = this.o[a],
			e = d.F[d.ca],
			f = b.data;
		if (this.Bh && this.Qc) {
			var g = O(f, 1886614376, void 0, !0);
			if (g = null === g ? null : {
					systemId: g.Xj,
					url: null,
					Ve: null,
					kf: null,
					Tg: 0
				}) {
				var h = Cl(g.systemId);
				h && (this.Kf.set(h, g), Sk(this.Qc, Array.from(this.Kf.keys())), this.Bh = !1)
			}
		}
		if (b.$d)
			if (a = (a = O(f, 1836019574)) ? Ah(a) : null, null === a) this.host.Y(322, void 0, "no init", zl);
			else {
				if (!e.L && 0 == e.i.length) {
					d = 0;
					b.$d && e.Jb && e.Jb.La && (d = e.Jb.La.start);
					f = (f = O(f, 1936286840)) ? f.Di(d) : null;
					if (!f) {
						B(zl, "no segments");
						return
					}
					e.i = f
				}
				Ek(c, a, {
					time: b.interval.time,
					duration: 0
				}, 0, !1)
			}
		else b = b.interval, e = e.T, 1 < this.vd.length && (e = this.vd[Fl(this, a, d.index)], e = e.zf[a].T - e.start), Ek(c, f, b, b.time + e, d.$, void 0, !0), d.$ = !1
	};
	k.Ag = function () {
		return 1
	};
	var Cl = function (a) {
			return kg.$b(a) ? "playready" : lg.$b(a) ? "widevine" : mg.$b(a) ? "clearkey" : null
		},
		Al = function (a, b, c) {
			if (b) {
				null !== b.P.value && (c.P = b.P.value);
				var d = b.timescale.value || 1,
					e = new rh(b.T.value || "0");
				c.T = parseInt(e.toString(), 10) / d;
				e = new rh(e.toString());
				var f = b.i,
					g = b.xd,
					h = 0;
				g ? h = g.length : f && 0 < f.length && (h = f.length);
				for (var l = 0; l < h; l++) {
					var m = g ? g[l].duration : b.duration.value || 0;
					g && g[l].time && (e = new rh(g[l].time.toString()));
					var q = parseInt(e.toString(), 10) / d,
						u = new rh(e.toString());
					if (!f || 0 >= f.length) var E =
						null;
					else {
						E = f[l].media.value;
						var C = a.resolve(new I(E)).toString();
						E = !E && C.endsWith("/") ? C.slice(0, -1) : C
					}
					c.i.push({
						time: q,
						ic: u,
						duration: m / d,
						url: E
					});
					e.add(m)
				}(d = c.Jb) || (f = e = d = null, g = !0, (h = b.Ye) && h.gm.value ? (g = !1, d = h.gm.value, h.La.start && h.La.end && (e = h.La.start, f = h.La.end)) : (e = 0, h && h.La.start && h.La.end && (e = h.La.start, f = h.La.end, g = !1), b.hd.start && b.hd.end && (e = Math.min(e, b.hd.start), f = Math.max(f, b.hd.end), g = !1), f || (f = 2048)), d = g ? null : {
					url: d ? a.resolve(new I(d)).toString() : null,
					La: null !== e && null !== f ? {
						start: e,
						end: f
					} : null,
					data: null
				});
				c.Jb = d
			}
		},
		Bl = function (a, b) {
			return {
				duration: (b.duration.value || 0) / (b.timescale.value || 1),
				url: a.resolve(new I(b.media.value)).toString(),
				qa: b.qa.value ? a.resolve(new I(b.qa.value)).toString() : null
			}
		},
		Hl = function (a, b) {
			return a.replace(/\$Number(%0\d*[diuxXo]){0,1}\$/g, function (c) {
				var d = c.indexOf("%0");
				if (0 > d) return b;
				d = parseInt(c.substring(d + 2, c.length - 2), 10);
				switch (c.substr(c.length - 2, 1)) {
					case "x":
						return pg(b, 16, d);
					case "X":
						return pg(b, 16, d).toUpperCase();
					case "o":
						return pg(b, 8,
							d);
					default:
						return pg(b, 10, d)
				}
			})
		},
		zl = z("cast.player.dash.Protocol");
	var Il = function (a) {
			this.Xg = a;
			this.We = null;
			this.Yj = this.Zc = 0
		},
		Jl = function (a, b) {
			b = b.length > a.Zc ? b.subarray(0, a.Zc) : b;
			L(a.We, b);
			a.Zc -= b.length
		};
	Il.prototype.append = function (a, b, c, d) {
		b = b.subarray(c, d);
		if (this.We) return Jl(this, b), 0 == this.Zc && (this.Xg && this.Xg("ID3", vh(this.We), this.Yj), this.Zc = this.Yj = this.We = null), 0;
		c = 0;
		73 != b[c++] || 68 != b[c++] || 51 != b[c++] ? c = null : (c += 3, d = b[c++] << 21 | b[c++] << 14 | b[c++] << 7 | b[c++], c += d);
		if (null === c) return 0;
		if (c <= b.length) return this.Xg && this.Xg("ID3", b.subarray(0, c), a), c;
		this.We = new uh(c);
		this.Yj = a;
		this.Zc = c;
		Jl(this, b);
		return 0
	};
	var Kl = function (a, b, c, d) {
		Zh.call(this);
		this.Hc = d;
		this.ub = null;
		this.Ig = b ? new Il(b) : null;
		this.jj = Infinity;
		this.Yn = c;
		for (this.qa(a); !this.Mg();) this.parse()
	};
	p(Kl, Zh);
	Kl.prototype.fd = function () {
		return this.jj
	};
	Kl.prototype.wj = function (a) {
		Zh.prototype.wj.call(this, a);
		null === this.ub && (this.ub = this.Hc ? this.kc : this.Vd);
		a = Ll(this.ub, this.Hc ? this.kc : this.Vd);
		a < this.jj && (this.jj = a)
	};
	Kl.prototype.Nl = function (a, b, c) {
		if (this.Ig) {
			a = new Ig(this.B.subarray(a, b + 1));
			if (c) {
				if (1 != J(a) >> 8) return;
				K(a, 2);
				K(a, 2);
				c = Jg(a);
				K(a, c)
			}
			null === this.ub && (this.ub = this.Vd);
			this.Ig.append(this.Yn + (Ll(this.ub, this.kc) - this.ub), Pg(a), 0)
		}
	};
	var Ll = function (a, b) {
		var c = Math.floor(a / 95443.7176888889),
			d = 95443.7176888889 * (c - 1) + b,
			e = 95443.7176888889 * (c + 0) + b;
		b = 95443.7176888889 * (c + 1) + b;
		c = Math.abs(d - a);
		var f = Math.abs(e - a);
		a = Math.abs(b - a);
		var g = c;
		f < c && (d = e, g = f);
		a < g && (d = b);
		return d
	};
	var Ml = function (a, b) {
			var c = new Pf;
			Oe(c, 1, 1);
			var d = qg(a.hf);
			H(c, 2).push(d);
			Oe(c, 3, a.Kn);
			if (a = a.Jm) {
				b && (a = window.atob(a));
				b = [];
				for (d = 0; d < a.length; d++) b.push(a.charCodeAt(d));
				b = new Uint8Array(b);
				Oe(c, 4, b)
			}
			Oe(c, 9, 1667392371);
			return c.xh()
		},
		Nl = [71, 64, 1, 16, 0, 1, 176, 45, 255, 255, 193, 0, 0, 9, 34, 99, 101, 224, 16, 99, 98, 99, 115, 0, 1, 0, 0, 1, 0, 16, 1, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 143, 19, 198, 145, 164, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
			255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 71, 64, 17, 16, 127, 255, 255, 255, 0, 0, 0, 32, 112, 115, 115, 104, 0, 0,
			0, 0, 237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
			255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 71, 64, 16, 48, 147, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
			255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 79, 16, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 1, 112, 213, 251, 214, 184, 46, 217, 62, 78, 249, 138, 228, 9, 49, 238, 51, 183
		];
	var Ol = function (a, b, c) {
			this.sn = a;
			this.sampleRate = b;
			this.Bb = c;
			this.iv = void 0
		},
		Pl = function (a, b, c, d) {
			this.width = a;
			this.height = b;
			this.Ad = c;
			this.Cf = d
		},
		Ql = function (a, b, c, d, e, f) {
			this.Pb = a;
			this.Vc = b;
			this.Hm = c;
			this.Zm = d;
			this.audio = e;
			this.video = f
		},
		Rl = function (a) {
			R.call(this, 1836019574);
			this.v = a
		};
	p(Rl, R);
	Rl.prototype.G = function () {
		(new Uj(this.v.Vc)).u(this.h);
		var a = this.v.Pb;
		a && a.Ve && (new Tj(a.systemId, a.Ve)).u(this.h);
		(new Sl(this.v)).u(this.h);
		(new Tl(this.v)).u(this.h)
	};
	var Tl = function (a) {
		R.call(this, 1953653099);
		this.v = a
	};
	p(Tl, R);
	Tl.prototype.G = function () {
		var a = 0,
			b = 0,
			c = this.v.video;
		c && (a = c.width, b = c.height);
		(new Rj(a, b)).u(this.h);
		(new Ul(this.v)).u(this.h)
	};
	var Ul = function (a) {
		R.call(this, 1835297121);
		this.v = a
	};
	p(Ul, R);
	Ul.prototype.G = function () {
		(new Qj(this.v.Vc)).u(this.h);
		(new Pj(this.v.Zm)).u(this.h);
		(new Vl(this.v)).u(this.h)
	};
	var Vl = function (a) {
		R.call(this, 1835626086);
		this.v = a
	};
	p(Vl, R);
	Vl.prototype.G = function () {
		(new Wl(this.v)).u(this.h)
	};
	var Wl = function (a) {
		R.call(this, 1937007212);
		this.v = a
	};
	p(Wl, R);
	Wl.prototype.G = function () {
		(new Xl(this.v)).u(this.h);
		this.v.video && (new Kj).u(this.h)
	};
	var Xl = function (a) {
		S.call(this, 1937011556, 0, 0);
		this.v = a
	};
	p(Xl, S);
	Xl.prototype.G = function () {
		this.h.s(1);
		(this.v.video ? new Yl(this.v) : new Zl(this.v)).u(this.h)
	};
	var Zl = function (a) {
		R.call(this, a.Pb ? 1701733217 : 1836069985);
		this.v = a
	};
	p(Zl, R);
	Zl.prototype.G = function () {
		L(this.h, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0]);
		this.h.s(this.v.audio.sampleRate << 16);
		(new Ij(this.v.audio.sn, this.v.audio.Bb)).u(this.h);
		this.v.Pb && (new $l(this.v)).u(this.h)
	};
	var Yl = function (a) {
		R.call(this, a.Pb ? 1701733238 : 1635148593);
		this.v = a
	};
	p(Yl, R);
	Yl.prototype.G = function () {
		L(this.h, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		this.h.Hd(this.v.video.width);
		this.h.Hd(this.v.video.height);
		L(this.h, [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
		(new Jj(this.v.video.Ad, this.v.video.Cf)).u(this.h);
		this.v.Pb && (new $l(this.v)).u(this.h)
	};
	var Sl = function (a) {
		R.call(this, 1836475768);
		this.v = a
	};
	p(Sl, R);
	Sl.prototype.G = function () {
		(new Sj(!this.v.video)).u(this.h)
	};
	var $l = function (a) {
		R.call(this, 1936289382);
		this.v = a
	};
	p($l, R);
	$l.prototype.G = function () {
		(new Oj(this.v.Hm)).u(this.h);
		(new Nj(this.v.Pb.scheme || 1667591779, 0)).u(this.h);
		(new am(this.v)).u(this.h)
	};
	var am = function (a) {
		R.call(this, 1935894633);
		this.v = a
	};
	p(am, R);
	am.prototype.G = function () {
		var a = this.v.Pb;
		a && a.kf && (new Lj(a.Tg, a.kf, a.Im)).u(this.h)
	};
	var bm = function (a, b, c, d, e) {
		Rl.call(this, new Ql(a, b, 1836069985, 1936684398, new Ol(c, d, e), null))
	};
	p(bm, Rl);
	var cm = function (a, b, c, d, e, f) {
		Rl.call(this, new Ql(a, b, 1635148593, 1986618469, null, new Pl(c, d, e, f)))
	};
	p(cm, Rl);
	var dm = function (a, b, c, d) {
		R.call(this, 1836019558);
		this.v = {
			Pn: a,
			Bm: b,
			Qn: c,
			Xl: d
		}
	};
	p(dm, R);
	dm.prototype.G = function () {
		(new Xj(0)).u(this.h);
		(new em(this.v)).u(this.h)
	};
	var em = function (a) {
		R.call(this, 1953653094);
		this.v = a
	};
	p(em, R);
	em.prototype.G = function () {
		this.v.Xl && (new Mj(this.v.Xl)).u(this.h);
		(new Vj(this.v.Pn)).u(this.h);
		(new Gj(this.v.Bm)).u(this.h);
		(new Wj(this.v.Qn)).u(this.h)
	};
	var fm = function (a, b, c) {
		R.call(this, 1836019558);
		this.He = b;
		this.Bn = a;
		this.Ch = c
	};
	p(fm, R);
	fm.prototype.G = function () {
		for (var a = Th(M(this.Bn), void 0); 0 < a.length;) {
			var b = a.shift();
			switch (b.Ha()) {
				case 1953653094:
					(new gm(b, this.He, this.Ch)).u(this.h);
					break;
				default:
					b.u(this.h)
			}
		}
	};
	var gm = function (a, b, c) {
		R.call(this, 1953653094);
		this.He = b;
		this.Cn = a;
		this.Ch = c
	};
	p(gm, R);
	gm.prototype.G = function () {
		for (var a = Th(M(this.Cn), void 0), b = null, c = !1, d = !1; 0 < a.length;) {
			var e = a.shift();
			switch (e.Ha()) {
				case 1970628964:
					e instanceof Eh && (b = e);
					break;
				case 1952868452:
					var f = e;
					f.Cc & 32 && (this.Ch = !1);
					xh(M(f), 0, 1);
					e.u(this.h);
					break;
				case 1953658222:
					(new hm(e, this.Ch)).u(this.h);
					break;
				case 1935763823:
					c = !0;
					e.u(this.h);
					break;
				case 1935763834:
					d = !0;
					e.u(this.h);
					break;
				default:
					e.u(this.h)
			}
		}(new Gj(this.He)).u(this.h);
		b && (d || (new Hj(b.Vi ? 0 : 8, b.uh)).u(this.h), c || (new Fj(0)).u(this.h))
	};
	var hm = function (a, b) {
		var c = a.Cc,
			d = !1;
		var e = null;
		c & 1 || (d = !0, c |= 1);
		!b || c & 1024 || c & 4 || (c |= 4, e = 0);
		b = d;
		S.call(this, 1953658222, a.oa, c);
		this.Un = b;
		this.Rk = e;
		this.Dn = a
	};
	p(hm, S);
	hm.prototype.G = function () {
		var a = new th(M(this.Dn));
		this.h.s(J(a));
		this.Un && this.h.s(0);
		null !== this.Rk && this.h.s(this.Rk);
		L(this.h, Pg(a))
	};
	var im = function (a, b, c) {
		Ig.call(this, a);
		this.Ig = new Il(b);
		this.rg = c
	};
	p(im, Ig);
	im.prototype.oh = function () {
		throw Error("readAudioHeader is not implemented");
	};
	var jm = function (a, b, c, d, e, f, g, h) {
		this.rk = a;
		this.mg = c;
		this.ub = d;
		this.ij = f;
		this.rg = g;
		this.Pm = h;
		this.Qe = [];
		this.sampleRate = 0;
		this.vh = e;
		this.Je = new Uint8Array([0, 0])
	};
	jm.prototype.parse = function (a) {
		for (var b = this.ig(this.mg), c = [], d = null; b.offset < b.buffer.length;) {
			var e = b.Ig.append(a, b.buffer, b.offset);
			b.offset += e;
			if (!e)
				if (d = b.oh()) d.$l && (this.vh = d.$l), c.push(Ng(b, d.zi)), a += this.vh / d.sampleRate;
				else return A(km, "Neither ID3 nor ADTS header was found at " + Pg(b).byteOffset), !1
		}
		if (null === d) return A(km, "No ADTS header was found."), !1;
		b = ph(d.profile, d.sampleRate, d.lj);
		if (null === b) return A(km, "Cannot generate audio codec private data."), !1;
		this.Qe = c;
		this.sampleRate = d.sampleRate;
		this.Je = b;
		return !0
	};
	jm.prototype.ig = function () {
		throw Error("createdataReader is not implemented");
	};
	jm.prototype.fd = function () {
		return this.ub
	};
	jm.prototype.Yd = function () {
		throw Error("getTimeScale is not implemented");
	};
	var km = z("cast.player.hls.PackedAudioParser");
	var lm = function (a, b) {
		im.call(this, a, b)
	};
	p(lm, im);
	lm.prototype.oh = function () {
		var a = this.buffer.subarray(this.offset);
		if (255 != a[0] || 240 != (a[1] & 240)) return null;
		var b = ((a[3] & 3) << 11) + (a[4] << 3) + ((a[5] & 224) >> 5),
			c = a[2] >> 2 & 15,
			d = a[1] & 1 ? 7 : 9;
		this.offset += d;
		return {
			profile: (a[2] >> 6 & 3) + 1,
			sampleRate: nh[c],
			lj: (a[2] << 2 & 4) + (a[3] >> 6 & 3),
			zi: b - d
		}
	};
	var mm = function (a, b, c, d, e, f) {
		var g = a.match("mp4a.67") ? 103 : 64;
		jm.call(this, g, a, b, c, 1024, d, e, f)
	};
	p(mm, jm);
	mm.prototype.ig = function (a) {
		return new lm(a, this.ij)
	};
	mm.prototype.Yd = function () {
		return 1E6
	};
	var nm = [48E3, 44100, 32E3],
		om = [
			[64, 69, 96],
			[64, 70, 96],
			[80, 87, 120],
			[80, 88, 120],
			[96, 104, 144],
			[96, 105, 144],
			[112, 121, 168],
			[112, 122, 168],
			[128, 139, 192],
			[128, 140, 192],
			[160, 174, 240],
			[160, 175, 240],
			[192, 208, 288],
			[192, 209, 288],
			[224, 243, 336],
			[224, 244, 336],
			[256, 278, 384],
			[256, 279, 384],
			[320, 348, 480],
			[320, 349, 480],
			[384, 417, 576],
			[384, 418, 576],
			[448, 487, 672],
			[448, 488, 672],
			[512, 557, 768],
			[512, 558, 768],
			[640, 696, 960],
			[640, 697, 960],
			[768, 835, 1152],
			[768, 836, 1152],
			[896, 975, 1344],
			[896, 976, 1344],
			[1024, 1114, 1536],
			[1024, 1115, 1536],
			[1152, 1253, 1728],
			[1152, 1254, 1728],
			[1280, 1393, 1920],
			[1280, 1394, 1920]
		],
		pm = function (a, b, c) {
			im.call(this, a, b, c)
		};
	p(pm, im);
	pm.prototype.oh = function () {
		var a = this.buffer.subarray(this.offset),
			b = 0;
		if (11 != a[b++] || 119 != a[b++]) return null;
		b += 2;
		var c = a[b++];
		b = c >> 6 & 3;
		c = om[c & 63];
		return void 0 === c ? (this.rg(316), null) : {
			profile: (a[2] >> 6 & 3) + 1,
			sampleRate: nm[b],
			lj: 6,
			zi: 2 * c[b]
		}
	};
	var qm = function (a, b, c, d, e, f) {
		jm.call(this, 165, a, b, c, 1536, d, e, f)
	};
	p(qm, jm);
	qm.prototype.ig = function (a) {
		return new pm(a, this.ij, this.rg)
	};
	qm.prototype.Yd = function () {
		return this.sampleRate
	};
	var rm = function (a, b) {
		this.g = a;
		this.Pi = !1;
		this.ci = b;
		this.pj = this.yn.bind(this);
		this.nj = this.dh.bind(this)
	};
	rm.prototype.cancel = function () {
		this.Pi = !0
	};
	rm.prototype.dh = function (a) {
		if (!this.Pi) {
			var b = void 0;
			a && a.name && a.message && (b = a.name + ": " + a.message);
			this.g.Y(203, void 0, b)
		}
	};
	rm.prototype.yn = function (a) {
		this.Pi || this.ci(a)
	};
	var sm = function (a, b, c, d, e) {
		rm.call(this, a, b);
		window.crypto.subtle.decrypt({
			name: "AES-CBC",
			iv: d
		}, c, e).then(this.pj, this.nj)
	};
	p(sm, rm);
	var tm = [1, 2, 3, 6],
		um = z("cast.player.hls.Eac3Reader"),
		vm = function () {
			im.apply(this, arguments)
		};
	p(vm, im);
	vm.prototype.oh = function () {
		var a = this.buffer.subarray(this.offset);
		if (11 != a[0] || 119 != a[1]) return null;
		var b = a[2] << 8 & 1792 | a[3],
			c = a[4] >> 6 & 3;
		3 === c ? (c = a[4] >> 4 & 3, a = 3, c = 3 > c ? nm[c] / 2 : void 0) : (a = a[4] >> 4 & 3, c = nm[c]);
		return void 0 === c ? (A(um, "Cannot determine sample rate."), null) : {
			profile: 0,
			sampleRate: c,
			$l: 256 * tm[a],
			lj: 6,
			zi: 2 * (b + 1)
		}
	};
	var wm = function (a, b, c, d, e, f) {
		jm.call(this, 166, a, b, c, 256, d, e, f)
	};
	p(wm, jm);
	wm.prototype.ig = function (a) {
		return new vm(a, this.ij, this.rg)
	};
	wm.prototype.Yd = function () {
		return this.sampleRate
	};
	var xm = function (a, b, c) {
		rm.call(this, a, b);
		window.crypto.subtle.importKey("raw", c, {
			name: "AES-CBC"
		}, !0, ["decrypt"]).then(this.pj, this.nj)
	};
	p(xm, rm);
	var ym = function (a, b, c) {
		this.Hc = c;
		c = O(a, 1952867444, void 0, !0);
		var d = 0;
		if (this.Hc) {
			var e = O(a, 1953658222, void 0, !0);
			null !== e && (e = e.sh, d += 0 < e.length ? e[0] : 0);
			a = O(a, 1701606260, void 0, !0);
			null !== a && (e = a.fj, 1 === a.ri && (a = e[0], d -= 0 < a ? a : 0))
		}
		this.oc = (c.fd() + d) / b
	};
	ym.prototype.fd = function () {
		return this.oc
	};
	var zm = function (a, b, c) {
		this.Cm = new I(a);
		this.R = b;
		this.va = c;
		this.l = 0;
		this.be = this.De = this.Ce = this.Lb = this.da = this.pc = this.Wa = null;
		this.oi = this.ti = this.yd = 0;
		this.Rj = this.pi = !1;
		this.wd = null;
		this.Xk = this.Yk = this.Wk = !1;
		this.tl = new Map;
		this.aj = this.Vg = null;
		this.ml = new Set;
		this.j = {
			gl: !1,
			X: !0,
			ih: null,
			Hf: "none",
			Ei: !1,
			cl: 0,
			Eh: 0,
			$j: 0,
			i: [],
			Pa: [],
			pd: [],
			Ue: !1,
			ej: this.tl,
			ik: null,
			Rc: new Map,
			lo: new Map
		}
	};
	zm.prototype.parse = function (a) {
		a = n(a.split("\n"));
		for (var b = a.next(); !b.done; b = a.next())
			if (!Am(this, b.value)) return B(X, "failed to parse HLS playlist"), this.j = null;
		if (!this.wd && this.Xk)
			for (B(X, "No PROGRAM-DATE-TIME attribute, but EXT-X-DATERANGE is present!"), a = n(this.j.i), b = a.next(); !b.done; b = a.next()) b = b.value, b.ng && (b.ng = null);
		a = n(this.j.Pa);
		for (b = a.next(); !b.done; b = a.next()) {
			var c = b.value;
			b = Bm(c);
			this.j.Rc.has(b) ? this.j.Rc.get(b).push(c) : this.j.Rc.set(b, [])
		}
		a = n(this.j.Rc);
		for (b = a.next(); !b.done; b =
			a.next()) b = n(b.value), c = b.next().value, b.next().value.length || this.j.Rc.delete(c);
		if (this.Wk && this.Yk)
			for (a = 0; a < this.j.Pa.length;) b = this.j.Pa[a].codecs, Cm(this.j.Pa[a].mimeType, b) ? (B(X, "filtered out " + b + " stream"), this.j.Pa.splice(a, 1)) : a++;
		Dm(this);
		if (0 < this.j.i.length && (a = this.j.i[0], !a.Qa))
			for (b = 1; b < this.j.i.length; b++) this.j.i[b].Qa && (a.Qj = !0);
		return this.j
	};
	var Dm = function (a) {
			for (var b = [], c = {}, d = 0; d < a.j.pd.length; c = {
					Ge: c.Ge
				}, d++) {
				var e = a.j.pd[d];
				"AUDIO" == e.type && (c.Ge = e.groupId, c.Ge && ((e = a.j.Pa.find(function (f) {
					return function (g) {
						return g.kb.includes(f.Ge)
					}
				}(c))) ? (e = e.codecs.split(",").find(function (f) {
					return 0 > f.search(Em)
				})) && (Fm(a.R, e) || b.push(d)) : B(X, "No matching audio group " + c.Ge + " found in video streams!")))
			}
			c = {};
			for (d = 0; d < b.length; c = {
					ag: c.ag
				}, d++) e = b[d] - d, c.ag = a.j.pd[e].groupId, a.j.pd.splice(e, 1), c.ag && (a.j.Pa = a.j.Pa.filter(function (f) {
				return function (g) {
					return !g.kb.includes(f.ag)
				}
			}(c)));
			a.j.Pa = a.j.Pa.filter(function (f) {
				if (!f.Nf.height || !f.framerate) return !0;
				var g = f.Nf.height,
					h = f.Nf.width,
					l = f.framerate;
				f = Pd({
					mimeType: f.mimeType,
					codecs: tg(f.codecs),
					width: h,
					height: g,
					framerate: l
				});
				return xg ? !!xg(f) : !0
			})
		},
		Fm = function (a, b) {
			return !(2 === a && "mp4a.a5" != b && "ac-3" != b || 6 === a && !og(b) || 2 !== a && ("mp4a.a5" == b || "ac-3" == b) || 6 !== a && og(b))
		},
		Cm = function (a, b) {
			return 0 <= a.indexOf("audio") || 0 > b.indexOf(",") && (0 == b.indexOf("mp4a.") || "ac-3" == b) ? !0 : !1
		},
		Gm = function (a, b) {
			var c = new I(b);
			c.lc || (b = a.Cm.resolve(c).toString());
			return b
		},
		Am = function (a, b) {
			b = b.trim();
			if (!b) return !0;
			if ("#" != b[0]) {
				if (3 != a.l && 4 != a.l) Hm(a, "URI"), a = !1;
				else {
					b = Gm(a, b);
					if (3 == a.l) {
						a.Wa.Ob = a.wd;
						null !== a.wd && (a.wd += 1E3 * a.Wa.duration);
						if (a.Lb || a.Ce || a.De) {
							a.Wa.$i = a.Lb;
							a.Wa.Qa = a.Ce;
							a.Wa.$f = a.De;
							var c = a.Wa;
							if (a.be) var d = Im(a.be);
							else {
								d = a.Wa.Nj;
								for (var e = new Uint8Array(16), f = 15; 0 <= f; f--) e[f] = d & 255, d >>= 8;
								d = e
							}
							c.iv = d
						}
						a.Vg && (a.Wa.pb = a.Vg);
						a.Wa.url = b;
						a.Wa.Ek = 0 <= (new I(b)).rb.search(Jm);
						a.j.i.push(a.Wa)
					} else a.pc.url = b, a.j.Pa.push(a.pc);
					a.l = 2;
					a = !0
				}
				return a
			}
			c =
				"#EXTINF:";
			if (0 === b.indexOf(c)) return d = b.indexOf(","), b = b.substr(c.length, (0 <= d ? d : b.length) - c.length), 2 != a.l && 1 != a.l ? (Hm(a, "EXTINF"), a = !1) : (b = parseFloat(b), a.Wa = {
				Nj: a.yd,
				url: "",
				Xb: null,
				wa: a.ti,
				duration: b,
				Ne: a.pi,
				Yb: a.oi,
				Ob: a.wd,
				$i: null,
				Qa: null,
				$f: null,
				timescale: null,
				iv: null,
				$: !1,
				Qj: a.Rj,
				pb: null,
				Ek: !1,
				ng: a.da
			}, a.j.$j += b, a.ti += b, a.pi = !1, a.Rj = !1, a.yd += 1, a.l = 3, a = !0), a;
			c = "#EXT-X-MAP:";
			if (0 === b.indexOf(c)) return Km(a, b.substr(c.length));
			c = "#EXT-X-KEY:";
			if (0 === b.indexOf(c)) return Lm(a, b.substr(c.length));
			c = "#EXT-X-SESSION-KEY:";
			if (0 === b.indexOf(c)) return Lm(a, b.substr(c.length), !0);
			c = "#EXT-X-DISCONTINUITY-SEQUENCE:";
			if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.l ? (Hm(a, "EXT-X-DISCONTINUITY-SEQUENCE"), a = !1) : (a.oi = parseInt(b, 10), a = !0), a;
			if (0 === b.indexOf("#EXT-X-DISCONTINUITY")) return 2 != a.l && 1 != a.l ? (Hm(a, "EXT-X-DISCONTINUITY"), a = !1) : (a.pi = !0, a.oi++, a.l = 2, a = !0), a;
			c = "#EXT-X-PROGRAM-DATE-TIME:";
			if (0 === b.indexOf(c)) return b = b.substr(c.length), 2 != a.l && 3 != a.l && 1 != a.l ? (Hm(a, "EXT-X-PROGRAM-DATE-TIME"),
				a = !1) : (c = Date.parse(b), isNaN(c) ? (B(X, "cannot parse #EXT-X-PROGRAM-DATE-TIME: " + b), a = !1) : (a.wd = c, a.j.cl = c, a = a.j.Ei = !0)), a;
			c = "#EXT-X-BYTERANGE:";
			if (0 === b.indexOf(c)) return b = b.substr(c.length), 3 != a.l ? (Hm(a, "EXT-X-BYTERANGE"), a = !1) : (b = Mm(a, b), a.Wa.Xb = b, a.aj = b.end, a = !0), a;
			c = "#EXT-X-DATERANGE:";
			if (0 === b.indexOf(c)) return Nm(a, b.substr(c.length));
			if (0 === b.indexOf("#EXTM3U")) return 0 != a.l ? (Hm(a, "EXTM3U"), a = !1) : (a.l = 1, a = !0), a;
			c = "#EXT-X-PLAYLIST-TYPE:";
			if (0 === b.indexOf(c)) {
				b = b.substr(c.length);
				if (1 != a.l) Hm(a,
					"EXT-X-PLAYLIST-TYPE"), a = !1;
				else {
					if ("EVENT" == b || "VOD" == b) a.j.ih = b;
					a = !0
				}
				return a
			}
			if (0 === b.indexOf("#EXT-X-ENDLIST")) return 2 != a.l && 1 != a.l ? (Hm(a, "EXT-X-ENDLIST"), a = !1) : (a.j.X = !1, a = !0), a;
			c = "#EXT-X-STREAM-INF:";
			if (0 === b.indexOf(c)) {
				b = b.substr(c.length);
				if (1 != a.l && 2 != a.l) Hm(a, "EXT-X-STREAM-INF"), a = !1;
				else {
					d = [];
					var g = b.match("BANDWIDTH=([0-9]+)");
					if (g) {
						c = parseInt(g[1], 10);
						(g = Y(b, 'AUDIO="([^"]*)"')) && d.push(g);
						e = !1;
						f = "video/mp2t";
						var h = Y(b, 'CODECS="([^"]*)"');
						if (h)
							if (e = !0, Cm(f, h)) {
								a.Wk = !0;
								var l = a.R;
								7 == l ||
									1 == l || 2 == l || 6 == l ? f = "audio/mp4" : 4 == l && (f = "audio/mpeg", h = "")
							} else a.Yk = !0, h = h.replace("mp4a.40.34", "mp4a.6B"), 1 == a.va && (f = "video/mp4");
						else h = "avc1.4D401E,mp4a.40.2";
						l = {
							width: null,
							height: null
						};
						if (g = b.match("RESOLUTION=(\\d+x\\d+)")) g = g[1].split("x"), 2 === g.length && (l.width = parseInt(g[0], 10), l.height = parseInt(g[1], 10));
						a.pc = {
							Tj: "variant",
							mimeType: f,
							bitrate: c,
							codecs: h,
							codecsProvided: e,
							Nf: l,
							kb: d,
							framerate: Y(b, "FRAME-RATE=([0-9]+)"),
							Wj: Y(b, 'SUBTITLES="([^"]*)"'),
							gi: Y(b, 'CLOSED-CAPTIONS="([^"]*)"'),
							url: ""
						};
						a.j.gl = !0;
						a.l = 4;
						a = !0
					} else B(X, "no BANDWIDTH attribute"), a = !1
				}
				return a
			}
			c = "#EXT-X-TARGETDURATION:";
			if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.l ? (Hm(a, "EXT-X-TARGETDURATION"), a = !1) : (a.j.Eh = parseInt(b, 10), a = !0), a;
			c = "#EXT-X-MEDIA-SEQUENCE:";
			if (0 === b.indexOf(c)) return b = b.substr(c.length), 1 != a.l ? (Hm(a, "EXT-X-MEDIA-SEQUENCE"), a = !1) : (a.yd = parseInt(b, 10), a = !0), a;
			c = "#EXT-X-MEDIA:";
			return 0 === b.indexOf(c) ? Om(a, b.substr(c.length)) : !0
		},
		Hm = function (a, b) {
			B(X, "unexpected " + b + ": state " + a.l)
		},
		Om = function (a,
			b) {
			if (2 != a.l && 1 != a.l) return Hm(a, "EXT-X-MEDIA"), !1;
			var c = null,
				d = b.match('URI="([^"]*)"');
			null !== d && (c = Gm(a, d[1]));
			var e = Y(b, "TYPE=(AUDIO|VIDEO|SUBTITLES|CLOSED-CAPTIONS)"),
				f = Y(b, 'GROUP-ID="([^"]*)"'),
				g = Y(b, 'CHARACTERISTICS="([^"]*)"'),
				h = Y(b, 'NAME="([^"]*)"'),
				l = Y(b, 'LANGUAGE="([^"]*)"'),
				m = Y(b, 'ASSOC-LANGUAGE="([^"]*)"'),
				q = Y(b, 'CHANNELS="([^"]*)"');
			switch (e) {
				case "SUBTITLES":
					var u = "webvtt";
					var E = "text/vtt";
					break;
				case "CLOSED-CAPTIONS":
					u = "webvtt";
					E = "text/mp2t";
					break;
				case "AUDIO":
					if (!c) return a.j.Ue = !0;
					E = 0 == a.R ? "video/mp2t" : "audio/mp4";
					u = sg(a.R);
					break;
				default:
					return !0
			}
			var C = !1;
			d = b.match('DEFAULT="?(YES|NO)"?');
			null !== d && (C = "YES" === d[1]);
			var va = !1;
			d = b.match('AUTOSELECT="?(YES|NO)"?');
			null !== d && (va = "YES" === d[1] || C);
			var ja = !1;
			d = b.match('FORCED="?(YES|NO)"?');
			null !== d && (ja = "YES" === d[1]);
			(c || "CLOSED-CAPTIONS" == e) && a.j.pd.push({
				Tj: "media",
				type: e,
				mimeType: E,
				codecs: u,
				url: c,
				name: h,
				language: l,
				assocLanguage: m,
				isDefault: C,
				groupId: f,
				characteristics: g,
				autoSelect: va,
				channels: q,
				forced: ja
			});
			return !0
		},
		Mm = function (a,
			b) {
			var c = b.split("@");
			b = parseInt(c[0], 10);
			if (1 < c.length) a = parseInt(c[1], 10);
			else {
				if (null == a.aj) return B(X, "Expected EXT-X-BYTERANGE to either have offset or to come after another EXT-X-BYTERANGE"), null;
				a = a.aj + 1
			}
			return {
				start: a,
				end: a + b - 1
			}
		},
		Nm = function (a, b) {
			if (1 != a.l && 2 != a.l) return Hm(a, "EXT-X-DATERANGE"), !1;
			a.da = {};
			var c = Y(b, 'ID="([^,"]*)"');
			c && (a.da.id = c);
			if (c = Y(b, 'CLASS="([^,"]*)"')) a.da.rangeClass = c;
			if (c = Y(b, 'START-DATE="([^,"]*)"')) a.da.startDate = c;
			if (c = Y(b, 'END-DATE="([^,"]*)"')) a.da.endDate = c;
			if ((c = Y(b, 'END-ON-NEXT=([^,"]*)')) && "YES" !== c) return B(X, "END-ON-NEXT must only have the value 'YES', found: " + c), a.da = null, !0;
			a.da.endOnNext = c ? !0 : !1;
			var d = Y(b, '(?<!PLANNED-)DURATION=([^,"]+)');
			c = Y(b, 'PLANNED-DURATION=([^,"]+)');
			if (d) {
				var e = parseFloat(d);
				if (isNaN(e)) return B(X, "Expected a numeric value for duration, found: " + d), a.da = null, !0;
				a.da.duration = e
			}
			if (c) {
				d = parseFloat(c);
				if (isNaN(d)) return B(X, "Expected a numeric value for planned duration, found: " + c), a.da = null, !0;
				a.da.plannedDuration = d
			}
			if (c =
				Y(b, 'SCTE35-CMD="([^,"]*)"')) a.da.scte35Cmd = c;
			if (c = Y(b, 'SCTE35-OUT="([^,"]*)"')) a.da.scte35Out = c;
			if (c = Y(b, 'SCTE35-IN="([^,"]*)"')) a.da.scte35In = c;
			a.da.clientAttributes = {};
			b = n(b.split(","));
			for (c = b.next(); !c.done; c = b.next()) c = c.value, c = c.trim(), (c = c.match('(^X-[^"]+)="?([^"]+)"?')) && c[1] && c[2] && (a.da.clientAttributes[c[1]] = c[2]);
			if (!Pm(a)) return a.da = null, !0;
			a.ml.add(a.da.id);
			return a.Xk = !0
		},
		Pm = function (a) {
			var b = a.da.id;
			if (!b) return B(X, "Missing ID attribute in EXT-X-DATERANGE!"), !1;
			var c = a.da.startDate;
			if (!c && !a.ml.has(b)) return B(X, "Missing START-DATE attribute in EXT-X-DATERANGE!"), !1;
			if (c && (b = Date.parse(c), isNaN(b))) return B(X, "Could not parse START-DATE value in EXT-X-DATERANGE: " + c), !1;
			if (c = a.da.endDate)
				if (b = Date.parse(c), isNaN(b)) return B(X, "Could not parse END-DATE value in EXT-X-DATERANGE: " + c), !1;
			if (b = a.da.duration)
				if (c = parseFloat(b), 0 > c) return B(X, "DURATION MUST NOT be negative in EXT-X-DATERANGE: " + b), !1;
			if (a = a.da.plannedDuration)
				if (c = parseFloat(a), 0 > c) return B(X, "PLANNED-DURATION MUST NOT be negative in EXT-X-DATERANGE: " +
					a), !1;
			return !0
		},
		Km = function (a, b) {
			if (1 != a.l && 2 != a.l && 3 != a.l) return Hm(a, "EXT-X-MAP"), !1;
			var c = Y(b, 'URI="([^"]*)"');
			if (!c) return B(X, "expected #EXT-X-MAP to have URI: " + b), !1;
			c = Gm(a, c);
			b = Y(b, 'BYTERANGE="([^"]*)"');
			var d = null;
			if (b && (d = Mm(a, b), !d)) return !1;
			c = {
				url: c,
				Xb: d,
				wk: null
			};
			b = c.Xb;
			d = "url=" + c.url + ",byterange=";
			a.Vg = b ? "" + d + b.start + "-" + b.end : d + "all";
			a.tl.set(a.Vg, c);
			return !0
		},
		Lm = function (a, b, c) {
			c = void 0 === c ? !1 : c;
			if (2 != a.l && 3 != a.l && 1 != a.l) return Hm(a, c ? "EXT-X-SESSION-KEY" : "EXT-X-KEY"), !1;
			var d;
			if (d =
				c) 0 <= b.indexOf("METHOD=NONE") ? (B(X, "EXT-X-SESSION-KEY METHOD cannot be NONE."), d = !1) : d = !0, d = !d;
			if (d) return !1;
			var e;
			if (0 <= b.indexOf("METHOD=AES-128")) {
				if (e = b.match('URI="([^"]*)"')) a.Lb = Gm(a, e[1]);
				a.be = Y(b, "IV=0[x|X]([0-9a-fA-F]+)");
				a.Ce = null;
				a.j.Hf = "aes_128";
				c && Qm(a);
				return !0
			}
			if (0 <= b.indexOf("METHOD=SAMPLE-AES")) {
				var f = 0 <= b.indexOf("METHOD=SAMPLE-AES-CTR");
				e = b.match('KEYFORMAT="([^"]*)"');
				if (!e) return B(X, "Missing KEYFORMAT for SAMPLE-AES"), !0;
				d = e[1];
				if ("com.widevine" !== d && "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" !==
					d) return B(X, "KEYFORMAT '" + d + "' is not supported for SAMPLE-AES."), !0;
				if (1 != rg("enable-hls-sample-aes") && !f) return B(X, "SAMPLE-AES not support by Cast platform."), !1;
				if (e = b.match('URI="data:.*?,(.*?)"'))
					if (e = e[1], "com.widevine" === d) {
						if (c) return B(X, "EXT-X-SESSION-KEY is not designed for V1 Widevine DRM, ignoring\n                 key."), !0;
						a: {
							try {
								var g = JSON.parse(window.atob(e))
							} catch (l) {
								B(X, "Failed to decode widevine data!");
								g = !1;
								break a
							}
							var h = g.key_ids;h && Array.isArray(h) && 0 != h.length ? (a.Ce = {
								Kn: g.provider,
								Jm: g.content_id,
								hf: h[0]
							}, g = !0) : (B(X, "no Widevine key ID"), g = !1)
						}
						if (!g) return !1
					} else {
						if (g = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === d) {
							a: {
								try {
									h = window.atob(e)
								} catch (l) {
									B(X, "Failed to decode widevine PSSH data!");
									g = !1;
									break a
								}
								a.De = ae(h);g = !0
							}
							g = !g
						}
						if (g) return !1
					}
				a.be = Y(b, "IV=0[x|X]([0-9a-fA-F]+)");
				a.Lb = null;
				a.j.Hf = "widevine";
				c && Qm(a);
				return !0
			}
			if (0 <= b.indexOf("METHOD=NONE")) return a.Ce && (a.Rj = !0), a.Lb = null, a.Ce = null, a.De = null, a.be = null, !0;
			B(X, "Unsupported KEY.");
			return !1
		},
		Qm = function (a) {
			null !==
				a.j.ik ? B(X, "Master playlist cannot have more than 1 session key per key format!") : null === a.Lb && a.De && (a.j.ik = {
					$i: null,
					Qa: null,
					$f: a.De,
					iv: Im(a.be)
				})
		},
		Y = function (a, b) {
			return (a = a.match(b)) ? a[1] : null
		},
		Im = function (a) {
			if (null === a) return null;
			for (var b = new Uint8Array(16), c = 15, d = a.length; 0 < d; d -= 2, c--) b[c] = parseInt(1 < d ? a.substr(d - 2, 2) : a.substr(0, 1), 16);
			return b
		},
		Bm = function (a) {
			var b = a.Nf;
			return "mimeType=" + a.mimeType + ";bitrate=" + a.bitrate + ";codecs=" + a.codecs + (a.framerate ? ";framerate=" + a.framerate : "") + (a.Wj ?
				";subtitles=" + a.Wj : "") + (a.gi ? ";cc=" + a.gi : "") + (b ? ";resolution=" + b.width + "x" + b.height : "") + (a.kb.length ? ";audioGroups=" + a.kb.toString() : "")
		},
		X = z("cast.player.hls.Parser"),
		Em = /avc1\.|hvc1\.|dvh1\./,
		Jm = /\.(mp4|m4a|mp4a|m4s)$/;
	var Rm = function (a, b, c, d) {
		rm.call(this, a, b);
		Ba.__platform__.crypto.unwrapKey("raw", c, d, {
			name: "RSA-OAEP",
			hash: {
				name: "SHA-256"
			}
		}, {
			name: "AES-CBC",
			length: 128
		}, !1, ["decrypt"]).then(this.pj, this.nj)
	};
	p(Rm, rm);
	var Sm = function (a) {
		this.Na = -1;
		this.Zf = this.j = null;
		Uh.Te();
		this.En = !0;
		this.rh = Wh();
		this.Ok = new Map;
		this.on = this.sl.bind(this);
		this.Fn = a
	};
	Sm.prototype.sl = function (a, b) {
		for (var c = 0, d = null, e = 0; e < b.length; e++)
			if (null !== b[e].Ob) {
				c = e;
				d = b[e].Ob;
				break
			}
		if (null === d) return null;
		b = -1;
		e = Infinity;
		for (var f = 0; f < a.length; f++) {
			var g = Math.abs(a[f].Ob - d);
			if (100 > g) return f - c;
			g < e && (b = f, e = g)
		}
		return 0 > b || e > 500 * this.j.Eh ? -1 : b - c
	};
	var Tm = function (a, b) {
			b = b[0].Nj;
			for (var c = 0; c < a.length; c++)
				if (a[c].Nj == b) return c;
			return null
		},
		Um = function (a) {
			if (a.En && a.Zf && a.j) {
				var b = a.sl(a.Zf.i, a.j.i);
				if (null !== b && 0 <= b) {
					var c = a.Zf.i[b],
						d = (a.j.i[0].Ob - c.Ob) / 1E3;
					a.j.i.forEach(function (e) {
						e.wa += c.wa + d
					})
				}
				a.Zf = null
			}
		};
	k = Sm.prototype;
	k.update = function (a, b) {
		b = void 0 === b ? !1 : b;
		if (0 > this.Na) this.j = a, Um(this);
		else if (0 == a.i.length) B(Vm, "new manifest has no segment");
		else {
			var c = this.j.i,
				d = c[this.Na],
				e = a.i,
				f = {
					Xd: Tm,
					ql: "sequence number"
				};
			var g = {
				Xd: this.on,
				ql: "program date time"
			};
			g = this.j.Ei && a.Ei ? this.Fn ? [f, g] : [g, f] : [f];
			a: {
				f = b;f = void 0 === f ? !1 : f;g = n(g);
				for (var h = g.next(); !h.done; h = g.next()) {
					h = h.value;
					b: {
						var l = this.Na;
						var m = h.Xd,
							q = f;q = void 0 === q ? !1 : q;
						var u = m(c, e);
						if (null === u) {
							u = m(e, c);
							if (null === u) {
								l = -1;
								break b
							}
							u *= -1
						}
						m = l - u;!(l < u) || this.j.X &&
						q ? m >= e.length && (e.length = 0, Array.prototype.push.apply(e, c), m = l) : (l = c[l], 0 < e.length && (e[0].Ne = !0), e.splice(0, 0, l), m = 0);l = m
					}
					if (0 > l) B(Vm, "No match was found using " + h.ql);
					else {
						c = l;
						break a
					}
				}
				c = -1
			}!(0 > c) || this.j.X && b || (B(Vm, "New segments are appended after current"), 0 < e.length && (e[0].Ne = !0), e.splice(0, 0, d), c = 0);
			0 > c ? (b = this.j.i[0], b = (this.Na - c) * b.duration + b.wa) : b = d.wa - e[c].wa;
			e = n(e);
			for (d = e.next(); !d.done; d = e.next()) d.value.wa += b;
			this.Na = 0 > c ? 0 : c;
			this.j = a
		}
	};
	k.next = function () {
		var a = this.Na + 1;
		return a < this.j.i.length ? (this.Na = a, !0) : !1
	};
	k.Gc = function () {
		return !this.j.X && this.Na == this.j.i.length - 1
	};
	k.Ia = function () {
		var a = this.j.i,
			b = a[0].wa,
			c = a.length - 1;
		a = a[c].wa + a[c].duration;
		this.j.X && (a -= 3 * this.j.Eh, a < b && (a = b));
		return {
			start: b,
			end: a
		}
	};
	k.seek = function (a) {
		if (this.rh) {
			for (var b = this.j.i, c = n(b), d = c.next(); !d.done; d = c.next()) d.value.$ = !1;
			d = Wm(this, a);
			if (-1 === d) return null;
			this.Na = d;
			b[d].$ = !0;
			return a
		}
		c = this.Ia();
		if (!c) return null;
		b = this.j.i;
		var e = n(b);
		for (d = e.next(); !d.done; d = e.next()) d.value.$ = !1;
		a < c.start && (a = c.start);
		a > c.end && (a = c.end);
		for (d = b.length - 1; 0 <= d; d--)
			if (a >= b[d].wa) return this.Na = d, b[this.Na].$ = !0, a;
		return null
	};
	k.Bg = function (a) {
		a = Wm(this, a);
		return -1 === a ? null : this.j.i[a]
	};
	var Wm = function (a, b) {
			var c = a.Ia();
			if (!c) return -1;
			b < c.start && (b = c.start);
			b > c.end && (b = c.end);
			a = a.j.i;
			for (c = a.length - 1; 0 <= c; c--)
				if (b >= a[c].wa) return c;
			return -1
		},
		Xm = function (a) {
			return 0 > a.Na ? null : a.j.i[a.Na]
		};
	Sm.prototype.Pj = function (a) {
		a && 0 !== a.i.length && (this.Zf = a)
	};
	Sm.prototype.Re = function (a) {
		a = this.Ok.get(a);
		return "number" === typeof a ? a : null
	};
	var Vm = z("cast.player.hls.iterator");
	var Z = function (a, b, c, d) {
		w.call(this);
		this.qh = Wh();
		this.g = a;
		this.R = c;
		this.va = d;
		this.qm = b;
		this.Z = null;
		this.iterator = new Sm(1 == this.g.preferSequenceNumberForPlaylistMatching);
		this.Fl = this.wn.bind(this);
		this.Kk = this.Qm.bind(this);
		this.Kj = this.nh = null;
		this.Ul = -1;
		this.yf = null;
		this.m = new F;
		zd(this.m);
		x(this.m, "success", this.un, !1, this);
		x(this.m, "error", this.Bl, !1, this);
		x(this.m, "timeout", this.Bl, !1, this);
		this.I = new Wf;
		this.I.setResponse = this.Tk.bind(this);
		this.jf = this.Df = this.Xi = this.Lb = this.Me = this.dk =
			null;
		this.fe = this.tf = !1;
		this.we = !0;
		this.xa = null;
		this.zm = {};
		this.Jc = this.la = this.Fc = null;
		this.Kc = new Map;
		this.Wd = -1;
		a = (b = r.navigator.userAgent.match(/CrKey\/(\d+)\.(\d+)\.[\d]{6}/)) && parseFloat(b[1]) || -1;
		b = b && parseFloat(b[2]) || -1; - 1 === a || -1 === b ? (B(Ym, "Platform version not detected in user agent!"), a = !1) : a = a >= Zm && b >= $m;
		this.Hc = a;
		this.me = null
	};
	p(Z, w);
	k = Z.prototype;
	k.Pj = function (a) {
		this.iterator.Pj(a)
	};
	k.M = function () {
		this.reset();
		this.m.N()
	};
	k.reset = function () {
		this.Xi = this.Jc = null;
		this.we = !0;
		this.Fc = this.xa = this.yf = null;
		this.m.abort();
		this.Df && (this.Df.cancel(), this.Df = null);
		this.Me && (this.Me.cancel(), this.Me = null);
		null !== this.la && clearTimeout(this.la)
	};
	k.wn = function (a) {
		this.Df = null;
		this.jf = a;
		this.la = setTimeout(this.Kk, 0)
	};
	k.un = function (a) {
		this.Tk(Kd(a.target))
	};
	k.Tk = function (a) {
		var b = this;
		if (a) {
			a = new Uint8Array(a);
			if (this.g.processLicense && (a = this.g.processLicense(a), be(a))) {
				a.then(function (c) {
					an(b, c)
				});
				return
			}
			an(this, a)
		} else this.g.Y(313)
	};
	var an = function (a, b) {
		a.Df = a.g.Ii ? new Rm(a.g, a.Fl, b, a.dk) : new xm(a.g, a.Fl, b)
	};
	Z.prototype.Bl = function () {
		this.g.Y(314, new Xf(this.I.url, this.m.ec, Id(this.m), this.m.getAllResponseHeaders(), Kd(this.m)))
	};
	Z.prototype.Qm = function () {
		var a = this.yf.info,
			b = this.yf.data;
		a && a.iv && this.jf && b && (D(Ym, "decrypt segment"), this.Me = new sm(this.g, this.Hn.bind(this, a), this.jf, a.iv, b), this.la = this.yf = null)
	};
	Z.prototype.Hn = function (a, b) {
		this.Ef(a, new Uint8Array(b))
	};
	Z.prototype.Ef = function (a, b) {
		D(Ym, "process segment");
		this.Me = null;
		var c;
		if (null != this.va) switch (this.va) {
			case 0:
				var d = new Kl(b, this.g.processMetadata, a.wa, this.Hc);
				break;
			case 1:
				d = bn(this, a, b), a.pb && (c = this.Kc.get(a.pb))
		}
		if (null != this.R) switch (this.R) {
			case 2:
			case 6:
			case 1:
				if (a.Ek) d = bn(this, a, b);
				else {
					switch (this.R) {
						case 2:
							d = qm;
							break;
						case 6:
							d = wm;
							break;
						default:
							d = mm
					}
					b = new d(this.Z.S.codecs, b, a.wa, this.g.processMetadata, this.g.Y.bind(this.g), this.g.decodeContentId);
					var e = a.Ne || a.$;
					d = this.zm;
					var f = a.Qa ||
						void 0,
						g = a.iv || void 0,
						h = d.endOfLastSegment;
					h = e || void 0 === h ? b.ub : h;
					if (b.parse(h)) {
						b.ub = h;
						d.endOfLastSegment = h + b.vh / b.sampleRate * b.Qe.length;
						d = new wh(2 * b.mg.length);
						e && (e = null, f && (e = {
							systemId: lg,
							url: null,
							Ve: Ml(f, b.Pm),
							kf: new jg(qg(f.hf), !1),
							Im: g,
							Tg: g ? g.length : 16,
							scheme: 1667392371
						}), D(km, "Built AudioMoov with objectType(0x" + b.rk.toString(16) + ") and sampleRate(" + b.sampleRate + ")"), (new bm(e, b.Yd(), b.rk, b.sampleRate, b.Je)).u(d));
						g = h * b.Yd();
						e = b.vh / b.sampleRate * b.Yd();
						h = b.Qe;
						if (f) {
							f = b.Qe;
							for (var l = [], m = 0; m <
								f.length; m++) {
								var q = f[m].length;
								if (0 == q % 16) l.push({
									im: [{
										ai: 16,
										bi: q - 16
									}]
								});
								else {
									var u = q % 16;
									l.push({
										im: [{
											ai: 16,
											bi: q - 16 - u
										}, {
											ai: u,
											bi: 0
										}]
									})
								}
							}
							f = l
						} else f = void 0;
						(new dm(e, g, h, f)).u(d);
						(new Yj(b.Qe)).u(d);
						d = vh(d);
						Oh(d)
					} else d = null;
					f = d;
					if (!f) {
						this.g.Y(315);
						return
					}
					d = b;
					b = f
				}
				break;
			case 4:
				break;
			case 7:
				d = bn(this, a, b);
				break;
			default:
				d = new Kl(b, this.g.processMetadata, a.wa, this.Hc)
		}
		if (a.Ne || a.$) this.xa = null, a.$ = !1;
		f = {
			time: a.wa,
			duration: a.duration
		};
		e = d ? d.fd() : f.time;
		if (g = null === this.xa && Infinity != e) D(Ym, "start: " + e),
			this.xa = 4 == this.R ? 0 : e, this.qh ? null === this.iterator.Re(a.Yb) && (h = this.iterator, a = a.Yb, e = f.time - e, D(Vm, "Offset " + e + " is set for discontinuity #" + a), h.Ok.set(a, e)) : (this.Fc = f, this.qm && (a = this.qm, a.rh || a.ka && a.ka.$(e, f)));
		a = this.Kj;
		this.Kj = null;
		Ek(a, b, f, this.xa || 0, g, c, d instanceof ym || d instanceof jm)
	};
	var dn = function (a) {
			a.g.Ii && !a.dk ? Ba.__platform__.cryptokeys.getKeyByName("CKP").then(function (b) {
				a.dk = b;
				cn(a)
			}) : cn(a)
		},
		cn = function (a) {
			a.jf = null;
			a.I.url = a.Lb;
			a.I.skipRequest = !1;
			if (a.g.updateLicenseRequestInfo && (a.g.updateLicenseRequestInfo(a.I), a.I.skipRequest)) return;
			a.m.Ee = a.I.withCredentials;
			a.m.sc = Math.max(0, a.I.timeoutInterval);
			a.m.send(a.I.url, void 0, void 0, a.I.headers)
		};
	k = Z.prototype;
	k.processSegment = function (a, b, c) {
		this.Kj = c;
		this.yf = {
			data: b,
			info: a
		};
		(c = a.$i) ? this.Lb == c && null !== this.jf ? this.la = setTimeout(this.Kk, 0) : (this.Lb = c, dn(this)): this.Ef(a, b)
	};
	k.updateSegmentRequestInfo = function (a) {
		var b = Xm(this.iterator);
		if (b) {
			var c;
			if (this.fe) this.fe = !1, this.Jc = c = b.pb, b = this.Z.D.ej.get(c), c = b.Xb, b = b.url;
			else {
				if (1 === this.va || 7 === this.R) b.timescale = this.Kc.get(b.pb) || null;
				a.ne = b;
				this.we && (b.$ = !0, this.we = !1);
				a.interval = this.getSegmentInterval();
				c = b.Xb;
				b = b.url
			}
			c && (a.headers = {}, a.headers.Range = "bytes=" + c.start + "-" + c.end);
			a.url = b
		}
	};
	k.getSegmentInterval = function () {
		var a = Xm(this.iterator);
		return a ? {
			time: a.wa,
			duration: a.duration
		} : {
			time: 0,
			duration: 0
		}
	};
	k.Ia = function () {
		return this.iterator.Ia()
	};
	k.Gc = function () {
		return this.iterator.Gc()
	};
	var en = function (a) {
		var b = Xm(a.iterator);
		if (b) {
			var c = a.me && a.me.Qa && !b.Qa,
				d = b.Qa && (b.Qa.hf !== a.Xi || b.Ne) && (0 === a.R || 0 === a.va);
			if (b.Qj || c || d) a.tf = !0;
			b.pb !== a.Jc && (a.fe = !0)
		}
	};
	Z.prototype.cc = function () {
		var a = Xm(this.iterator),
			b = this.iterator.next();
		b && (this.me = a, en(this));
		return b
	};
	Z.prototype.seek = function (a) {
		var b = Xm(this.iterator);
		a = this.iterator.seek(a);
		"number" === typeof a && (this.me = b, en(this));
		return a
	};
	Z.prototype.sd = function () {
		this.Wd = this.Z.duration;
		fn(this, this.Z.D)
	};
	var fn = function (a, b) {
		a.iterator.update(b, a.g.mediaElement && a.g.mediaElement.paused);
		a.nh && (Cj(a.nh), a.nh = null)
	};
	k = Z.prototype;
	k.Ah = function (a, b, c) {
		this.Ul = a;
		this.nh = b;
		this.we = !0;
		this.Z && this.Z.D && this.Z.D.X && this.Z.Wc();
		this.Z = c;
		c.D ? fn(this, c.D) : c.load()
	};
	k.getQualityLevel = function () {
		return this.Ul
	};
	k.Bg = function (a) {
		return this.iterator.Bg(a)
	};
	k.$ = function (a, b) {
		this.we = !0;
		this.xa = a;
		this.Fc = b
	};
	k.zh = function (a) {
		this.Z.D.ej.get(this.Jc).wk = a;
		this.Kc.set(this.Jc, O(a, 1835296868, void 0, !0).Ea)
	};
	var bn = function (a, b, c) {
		var d = b.timescale || a.Kc.get(b.pb) || null;
		!a.Kc.get(b.pb) && d && a.Kc.set(b.pb, d);
		if (null === d) throw Error("Unable to derive timescale");
		return new ym(c, d, a.Hc)
	};
	k = Z.prototype;
	k.Se = function () {
		var a = Xm(this.iterator),
			b = a.pb;
		if (b && b !== this.Jc) {
			if (a = this.Z.D.ej.get(b).wk) this.fe = !1, this.Jc = b, this.Kc.get(b) || this.Kc.set(b, O(a, 1835296868, void 0, !0).Ea);
			return a
		}
		b = this.me && this.me.Qa && !a.Qa;
		if (a.Qj || b) return this.tf = !1, (b = rg("hls-sample-aes-init-segment")) && b.clear_leader ? ae(window.atob(b.clear_leader)) : null;
		if (!a.Qa || !a.iv) return null;
		this.tf = !1;
		this.Xi = a.Qa.hf;
		b = a.Qa;
		a = a.iv;
		var c = this.g.decodeContentId;
		var d = (d = rg("hls-sample-aes-init-segment")) ? {
			Tl: d.pssh_offset,
			kl: d.key_id_offset,
			jl: d.iv_offset,
			jm: ae(window.atob(d.template))
		} : {
			Tl: 196,
			kl: 530,
			jl: 548,
			jm: new Uint8Array(Nl)
		};
		var e = d.jm,
			f = e.set,
			g = new wh;
		(new Tj(lg, Ml(b, c))).u(g);
		f.call(e, vh(g), d.Tl);
		e.set(qg(b.hf), d.kl);
		e.set(a, d.jl);
		return e
	};
	k.xg = function () {
		var a = Xm(this.iterator);
		return a ? a.$f : null
	};
	k.ee = function () {
		en(this);
		var a = this.tf || this.fe;
		return a || 1 !== this.va && 7 !== this.R ? a : (a = Xm(this.iterator)) && a.pb !== this.Jc ? this.fe = !0 : this.tf
	};
	k.getDuration = function () {
		return this.Wd
	};
	k.Re = function (a) {
		return this.iterator.Re(a)
	};
	var Ym = z("cast.player.hls.Adaptation"),
		gn = function (a, b) {
			Z.call(this, a, null, 3);
			this.cj = b
		};
	p(gn, Z);
	var hn = function (a, b) {
		(a = null !== a.cj.Re(b.Yb)) || D(Ym, "Can't process text segment for discontinuity #" + b.Yb);
		return a
	};
	gn.prototype.cc = function () {
		if (this.qh) {
			var a = this.iterator;
			var b = a.Na + 1;
			return (a = b < a.j.i.length ? a.j.i[b] : null) && hn(this, a) ? Z.prototype.cc.call(this) : !1
		}
		return null === this.xa || null === this.Fc ? !1 : Z.prototype.cc.call(this)
	};
	gn.prototype.seek = function (a) {
		if (this.qh) {
			var b = this.iterator.Bg(a),
				c = this.cj.Bg(a);
			return b && c && b.Yb !== c.Yb ? (B(Ym, "Main stream has discontinuity #" + c.Yb + " for time " + a + " but text stream has #" + b.Yb), Z.prototype.seek.call(this, a)) : b && hn(this, b) ? Z.prototype.seek.call(this, a) : null
		}
		return null === this.xa || null === this.Fc ? null : Z.prototype.seek.call(this, a)
	};
	gn.prototype.processSegment = function (a, b, c) {
		var d = {
				time: a.wa,
				duration: a.duration
			},
			e = !1;
		if (this.qh) {
			var f = 0;
			a = this.cj.Re(a.Yb);
			D(Ym, "text segment offset is " + a);
			a ? (f = d.time - a, e = !0) : (B(Ym, "text segment is processed without a PTS"), b = new Uint8Array(0));
			Ek(c, b, d, f, e)
		} else {
			if (null === this.xa || null === this.Fc) b = new Uint8Array(0);
			else if (this.we || a.$) d = this.Fc, e = !0;
			Ek(c, b, d, this.xa || 0, e)
		}
	};
	var Zm = 1,
		$m = 42;
	var jn = function (a) {
		w.call(this);
		var b = this;
		this.g = a;
		this.zj = [];
		this.nf = new Map;
		this.mf = new Map;
		this.Wi = !1;
		this.eh = function (c) {
			if (b.g.onTimedMetadata) b.g.onTimedMetadata("daterangeenter", c)
		};
		this.oj = function (c) {
			if (b.g.onTimedMetadata) b.g.onTimedMetadata("daterangeexit", c)
		};
		this.Hl = function (c) {
			b.g.onTimedMetadata && c.startTime === c.endTime && !b.Wi && (b.g.onTimedMetadata("daterangeenter", c), b.g.onTimedMetadata("daterangeexit", c))
		};
		this.On = [{
				Be: void 0,
				Ae: 1,
				Ud: function (c) {
					return b.eh(c)
				}
			}, {
				Be: 0,
				Ae: 1,
				Ud: function (c) {
					return b.eh(c)
				}
			},
			{
				Be: 2,
				Ae: 1,
				Ud: function (c) {
					return b.eh(c)
				}
			}, {
				Be: 1,
				Ae: 2,
				Ud: function (c) {
					return b.oj(c)
				}
			}, {
				Be: 1,
				Ae: 0,
				Ud: function (c) {
					return b.oj(c)
				}
			}, {
				Be: 0,
				Ae: 2,
				Ud: function (c) {
					return b.Hl(c)
				}
			}
		];
		this.yj = new Map;
		this.Aj()
	};
	p(jn, w);
	k = jn.prototype;
	k.Aj = function () {
		this.g.mediaElement && (x(this.g.mediaElement, "timeupdate", this.xf, !1, this), x(this.g.mediaElement, "seeking", this.wf, !1, this), x(this.g.mediaElement, "seeked", this.vf, !1, this))
	};
	k.ck = function () {
		this.g.mediaElement && (y(this.g.mediaElement, "timeupdate", this.xf, !1, this), y(this.g.mediaElement, "seeking", this.wf, !1, this), y(this.g.mediaElement, "seeked", this.vf, !1, this))
	};
	k.wf = function () {
		this.Wi = !0
	};
	k.vf = function () {
		this.Wi = !1
	};
	k.M = function () {
		w.prototype.M.call(this);
		this.zj = [];
		this.yj.clear();
		this.eh = function () {};
		this.oj = function () {};
		this.Hl = function () {};
		this.ck()
	};
	k.xf = function () {
		for (var a = this.g.mediaElement.currentTime, b = n(this.zj), c = b.next(); !c.done; c = b.next()) {
			c = c.value;
			var d = this.yj.get(c),
				e = a < c.startTime ? 0 : a > c.endTime ? 2 : 1;
			if (d !== e) {
				for (var f = n(this.On), g = f.next(); !g.done; g = f.next()) g = g.value, g.Be === d && g.Ae === e && g.Ud(c);
				this.yj.set(c, e)
			}
		}
	};
	k.sd = function (a) {
		if (this.g.onTimedMetadata && a) {
			for (var b = a.cl, c = [], d = n(a.i), e = d.next(); !e.done; e = d.next())
				if ((e = e.value.ng) && this.nf.has(e.id)) {
					var f = this.nf.get(e.id);
					f = Object.assign(f, e);
					this.nf.set(e.id, f)
				}
			a = n(a.i);
			for (e = a.next(); !e.done; e = a.next())
				if (d = e.value.ng) e = d, e.rangeClass && this.mf.has(e.rangeClass) && (f = this.mf.get(e.rangeClass), f.endOnNext && (f.endTime = e.startTime)), e.startTime = (Date.parse(e.startDate) - b) / 1E3, e.endDate ? e.endTime = (Date.parse(e.endDate) - b) / 1E3 : e.duration || e.endOnNext ? e.duration &&
					(e.endTime = e.startTime + e.duration) : e.endTime = e.startTime, kn(this, d) && (c.push(d), d.rangeClass && this.mf.set(d.rangeClass, d), this.nf.set(d.id, d));
			b = n(c);
			for (c = b.next(); !c.done; c = b.next()) c = c.value, this.zj.push(c), this.g.onTimedMetadata("daterangechanged", c)
		}
	};
	var kn = function (a, b) {
			return a.nf.has(b.id) || b.rangeClass && a.mf.has(b.rangeClass) && (a = a.mf.get(b.rangeClass), b.startTime < a.endTime) ? !1 : b.endDate && b.startTime > b.endTime ? (B(ln, "END-DATE MUST be equal to or later than the value of the START-DATE attribute."), !1) : b.endOnNext && (b.duration || b.endDate) ? (B(ln, "An EXT-X-DATERANGE tag with an END-ON-NEXT=YES must NOT contain DURATION or END-DATE!"), !1) : b.endOnNext && !b.rangeClass ? (B(ln, "An EXT-X-DATERANGE tag with an END-ON-NEXT=YES MUST have a CLASS attribute!"), !1) : b.duration && b.endDate && .001 < Math.abs(b.endTime - (b.startTime + 1E3 * parseFloat(b.duration))) ? (B(ln, "Time of START-DATE + DURATION doesn't equal END-DATE! startDate=" + (b.startDate + ", endDate=" + b.endDate + ", duration=") + b.duration), !1) : !0
		},
		ln = z("cast.player.hls.DateRangeManager");
	var mn = function (a, b, c, d, e, f) {
		f = void 0 === f ? !0 : f;
		w.call(this);
		this.g = a;
		this.Af = b;
		this.fc = new vj(this);
		this.ya = null;
		this.eo = this.Lh.bind(this);
		this.S = c;
		this.duration = -1;
		this.D = null;
		this.R = d;
		this.va = e;
		this.Lj = f;
		this.ef = this.Ng = void 0;
		this.ii = 0
	};
	p(mn, w);
	k = mn.prototype;
	k.M = function () {
		this.fc.N();
		null !== this.ya && (clearTimeout(this.ya), this.ya = null);
		w.prototype.M.call(this)
	};
	k.load = function () {
		this.Lh()
	};
	k.Wc = function () {
		this.duration = -1;
		this.D = null;
		this.fc.abort();
		null !== this.ya && (clearTimeout(this.ya), this.ya = null)
	};
	k.Lh = function () {
		this.S.url ? (D(nn, "update: " + this.S.url), this.fc.ce(this.g, this.S.url)) : A(nn, "cannot load stream without url")
	};
	k.fh = function (a) {
		if (a) {
			var b = new zm(this.S.url, this.R, this.va),
				c = this.D;
			if (this.D = b.parse(a)) {
				this.D.X && (this.ef = !1, "EVENT" == this.D.ih && (this.Ng = !1));
				if (c && c.X) {
					var d = this.D;
					a = c.i[0];
					b = c.i[c.i.length - 1];
					var e = d.i[0];
					d = d.i[d.i.length - 1];
					a.url !== e.url || b.url !== d.url || a.Xb !== e.Xb || b.Xb !== d.Xb || a.Ob !== e.Ob || b.Ob !== d.Ob ? (this.ii = 0, "EVENT" != c.ih && (this.D.i.length == c.i.length ? this.Ng = !0 : this.D.i.length > c.i.length && (this.Ng = !1)), this.ef = !this.D.X) : (this.ii++, 3 == this.ii && (this.ef = !0))
				}
				this.D.X && !this.ef ? (c =
					1E3 * this.D.Eh, this.ya = setTimeout(this.eo, c), D(nn, "update in: " + c), this.g.enableDurationOnLive && (this.duration = Number.POSITIVE_INFINITY)) : this.duration = this.D.$j;
				this.Af.sd(this)
			} else this.g.Y(412)
		} else this.g.Y(312, tj(this.fc))
	};
	var nn = z("cast.player.hls.Playlist");
	var on = function (a, b, c, d, e, f) {
		w.call(this);
		this.g = a;
		this.fc = new vj(this);
		this.rf = b;
		this.mn = c;
		this.Af = d;
		this.R = e;
		this.va = f;
		this.Ma = [];
		this.Va = [];
		this.mb = [];
		this.ze = [];
		this.Gb = {};
		this.Ue = !1;
		this.D = null
	};
	p(on, w);
	on.prototype.M = function () {
		this.fc.N();
		for (var a = n(this.Va), b = a.next(); !b.done; b = a.next()) b.value.N();
		this.Va.length = 0;
		this.mb.length = 0;
		a = n(this.Ma);
		for (b = a.next(); !b.done; b = a.next()) b.value.N();
		this.Ma.length = 0;
		this.ze = [];
		this.Gb = {};
		w.prototype.M.call(this)
	};
	on.prototype.load = function () {
		this.fc.ce(this.g, this.g.url)
	};
	on.prototype.fh = function (a) {
		if (a) {
			var b = this.fc.Dd;
			if (b)
				if (this.D = (new zm(b, this.R, this.va)).parse(a)) {
					this.Ue = this.D.Ue;
					if (this.D.gl) {
						if (0 === this.D.Pa.length) {
							this.g.Y(411);
							return
						}
						pn(this);
						b = this.mn;
						a = this.D.ik;
						if (null !== a) {
							for (var c, d, e = n(b.fa.D.Pa), f = e.next(); !f.done; f = e.next()) {
								f = f.value;
								var g = ug(f.codecs);
								if (void 0 !== g) {
									d = f.mimeType + ';codecs="' + g + '"';
									break
								}
							}
							e = n(b.fa.D.pd);
							for (f = e.next(); !f.done; f = e.next())
								if (g = f.value, f = g.mimeType, g = g.codecs, Ld(f) || Nd(g))
									if (g = vg(g), void 0 !== g) {
										c = f + ';codecs="' +
											g + '"';
										break
									}
							e = this.D.Hf;
							"widevine" === e && (Sk(b.Od, [e], d, c), b.Od = null);
							a.$f && b.jg.createSession(a.$f);
							b.dj.Cd()
						}
						c = {};
						d = n(this.D.Pa);
						for (b = d.next(); !b.done; b = d.next()) b = b.value, void 0 === c[b.url] ? (a = new mn(this.g, this.Af, b, this.R, this.va), this.Ma.push(a), c[b.url] = this.Ma.length - 1) : this.Ma[c[b.url]].S.kb = this.Ma[c[b.url]].S.kb.concat(b.kb);
						for (c = 0; c < this.Ma.length; c++) d = this.Ma[c].S, d.kb.length && (this.ze[c] || (this.ze[c] = []), this.ze[c] = this.ze[c].concat(d.kb))
					} else {
						switch (this.R) {
							case 1:
							case 7:
								c = "mp4a.40.2";
								d = "audio/mp4";
								break;
							case 2:
								c = "ac-3";
								d = "audio/mp4";
								break;
							case 6:
								c = "mp4a.a6";
								d = "audio/mp4";
								break;
							case 4:
								c = "";
								d = "audio/mpeg";
								break;
							case 5:
								c = "mp4a.40.2";
								d = "video/mp2t";
								break;
							case 8:
								c = "mp4a.40.5";
								d = "video/mp2t";
								break;
							default:
								c = "avc1.4D401E,mp4a.40.2", d = "video/mp2t"
						}
						1 == this.va && (d = "video/mp4");
						c = new mn(this.g, this.Af, {
							Tj: "variant",
							mimeType: d,
							bitrate: 0,
							codecs: c,
							Nf: {
								width: null,
								height: null
							},
							framerate: null,
							kb: [],
							Wj: null,
							gi: null,
							url: b
						}, this.R, this.va);
						this.Ma.push(c)
					}
					c = n(this.D.pd);
					for (d = c.next(); !d.done; d =
						c.next()) d = d.value, b = 0, "AUDIO" == d.type && void 0 !== this.R && (b = this.R), b = new mn(this.g, this.Af, d, b), "CLOSED-CAPTIONS" == d.type && this.g.onCue || this.Va.push(b);
					qn(this);
					this.rf.onManifestReady()
				} else this.g.Y(411)
		} else this.g.Y(311, tj(this.fc))
	};
	var rn = function (a) {
			for (var b = {}, c = 0; c < a.Va.length; c++) {
				var d = a.Va[c].S;
				if ("AUDIO" == d.type && void 0 !== d.groupId) {
					var e = d.groupId,
						f = {};
					e in b || (b[e] = f);
					b[d.groupId][d.language + d.name] = c
				} else a.mb.push(Za(a.Va[c]))
			}
			return b
		},
		qn = function (a) {
			var b = rn(a),
				c = [];
			for (e in b) b.hasOwnProperty(e) && c.push(b[e]);
			b = Object.keys(b);
			if (0 == c.length) a.mb = a.Va;
			else {
				var d = Object.keys(c[0]).length;
				var e = 0;
				for (var f = 1; f < c.length; f++) {
					var g = Object.keys(c[f]).length;
					g < d && (d = g, e = f)
				}
				0 != e && B(sn, "Group has different number of tracks.");
				for (var h in c[e]) a.Gb[h] = [c[e][h]];
				for (h = 0; h < c.length; h++)
					if (h != e) {
						d = c[h];
						f = {};
						for (var l in d) a.Gb[l] ? a.Gb[l].push(d[l]) : (f.Uh = b[h], a.Ma.every(function (q) {
							return function (u) {
								return u.S.kb.includes(q.Uh)
							}
						}(f)) && (a.Gb[l] = [d[l]])), f = {
							Uh: f.Uh
						}
					}
				c = [];
				for (var m in a.Gb) a.Gb[m].sort(), l = a.Gb[m].find(function (q) {
					return a.Va[q].S.isDefault
				}), l = void 0 !== l ? l : a.Gb[m][0], c.push(Za(a.Va[l]));
				a.mb.unshift.apply(a.mb, c instanceof Array ? c : ha(n(c)))
			}
		},
		tn = function (a, b) {
			var c =(a&&a.mb&&a.mb.length!=0)?a.mb[b]:null;
			var	d =(c&&c.S)? c.S:null;
			if (d&&"AUDIO" != d.type) {
				if (a = a.Va.find(function (g) {
						return g.S ==
							d
					})) return a
			} else
				for (var e = n((a&&a.Gb&&a.Gb.length!=0)?a.Gb[d.language + d.name]:null), f = e.next(); !f.done; f = e.next())
					if (f = f.value, a.Va[f].Lj) return a.Va[f];
			B(sn, "No playlist is selectable with " + b + ".");
			return c
		},
		un = function (a, b) {
			var c = a.ze[b];
			a.Va.forEach(function (d) {
				"AUDIO" == d.S.type && (d.S.groupId && c.includes(d.S.groupId) ? d.Lj = !0 : d.Lj = !1)
			})
		},
		pn = function (a) {
			a.D.Rc.size && (a = Array.from(a.D.Rc.values()).reduce(function (b, c) {
				return b + c.length
			}, 0), v("Cast.MPL.FallbackCdnCount", a))
		},
		sn = z("cast.player.hls.MasterPlaylist");
	var vn = function (a, b, c) {
		this.g = a;
		this.R = b;
		this.va = void 0 === c ? 0 : c;
		this.rh = Wh();
		this.jg = this.Od = this.dj = this.rf = null;
		this.hi = {};
		this.fa = null;
		this.Ua = new Z(a, this, void 0, this.va);
		this.ka = this.ga = null;
		this.Ri = this.Ti = void 0;
		this.og = null
	};
	k = vn.prototype;
	k.load = function (a) {
		this.og = new jn(this.g);
		this.jg = this.Od = this.dj = this.rf = a;
		this.fa = new on(this.g, this, this, this, this.R, this.va);
		this.fa.load();
		v("Cast.MPL.HlsVideoSegmentFormat", this.va)
	};
	k.Wc = function () {
		this.og && this.og.N();
		this.Ua.N();
		this.ga && (this.ga.N(), this.ga = null);
		this.ka && (this.ka.N(), this.ka = null);
		this.fa && (this.fa.N(), this.fa = null)
	};
	k.onManifestReady = function () {
		var a = this.getDefaultAudioStreamIndex();
		this.enableStream(a, !0);
		a = !0;
		for (var b = n(this.fa.Ma), c = b.next(); !c.done; c = b.next())
			if (c = c.value, !Cm(c.S.mimeType, c.S.codecs)) {
				a = !1;
				break
			}
		a && void 0 !== this.R && (a = this.Ua, a.R = this.R, a.va = void 0);
		if (this.g.onManifestReady) this.g.onManifestReady();
		this.rf.onManifestReady();
		this.rf = null
	};
	k.getDefaultAudioStreamIndex = function () {
		var a = this.fa.mb,
			b = -1;
		if (this.fa.Ue || !a.length) return b;
		for (var c = 0; c < a.length; c++) {
			var d = a[c].S;
			if ("AUDIO" === d.type)
				if (d.isDefault) {
					b = c;
					break
				} else "mp4a.a5" !== d.codecs && "mp4a.a6" !== d.codecs || -1 !== b ? -1 === b && (b = c) : b = c
		}
		return b + 1
	};
	k.getStreamCount = function () {
		return this.fa.mb.length + 1
	};
	k.enableStream = function (a, b, c) {
		if (0 < a) {
			a = tn(this.fa, a - 1);
			var d = a.S.type;
			"AUDIO" == d ? this.ga && this.ga.Z == a || (this.ga && (this.ga.N(), this.ga = null), b && (b = sg(this.R), ng("audio/mp4", b) ? (this.ga = new Z(this.g, this, void 0 !== this.R ? this.R : 1), this.ga.Z = a, this.Ua.Z && this.ga.Pj(this.Ua.Z.D), c && c.ug()) : B(fg, "audio codec " + b + " is not supported, will not create separate source buffer for it."))) : "SUBTITLES" == d && (this.ka && (this.ka.N(), this.ka = null), b && (this.ka = new gn(this.g, this.Ua), this.ka.Z = a, this.rh || this.ka.$(this.Ua.xa,
				this.Ua.Fc)))
		}
	};
	k.isStreamEnabled = function (a) {
		return null !== wn(this, a)
	};
	var wn = function (a, b) {
		0 == b ? a = a.Ua : (b = tn(a.fa, b - 1), a = null !== a.ga && a.ga.Z == b ? a.ga : null !== a.ka && a.ka.Z == b ? a.ka : null);
		return a
	};
	k = vn.prototype;
	k.getQualityLevel = function (a) {
		if(a&&wn){
		return wn(this, a)&&wn(this,a).getQualityLevel()
		}
		else{
			return null
		}
	};
	k.getStreamInfo = function (a) {
		var b = [],
			c = new Map,
			d = new Map;
		if (0 == a) {
			var e = this.fa.Ma;
			for (var f = 0; f < e.length; f++) {
				var g = e[f].S.bitrate;
				var h = e[f].S.url;
				a = {
					index: f,
					bitrate: g
				};
				c.has(g) ? c.get(g).push(a) : (c.set(g, [a]), b.push(g));
				g = h.replace(xn, "");
				d.has(g) ? d.get(g).push(a) : d.set(g, [a])
			}
			e = this.fa.Ma[0].S;
			a = e.codecs;
			if (this.ga)
				for (f = e.codecs.split(","), g = 0; g < f.length; g++)
					if (0 == f[g].search(Em)) {
						a = f[g];
						break
					}
		} else {
			e = this.fa.mb[a - 1].S;
			b.push(0);
			c.set(0, [{
				index: 0,
				bitrate: 0
			}]);
			a = e.codecs;
			var l = new Zf({
				isDefault: e.isDefault,
				url: e.url,
				characteristics: e.characteristics,
				groupId: e.groupId,
				autoSelect: e.autoSelect,
				channels: e.channels,
				forced: e.forced,
				assocLanguage: e.assocLanguage
			})
		}
		return new Yf(a, e.mimeType, b, e.language, e.name, null, l, e.codecsProvided, c, d)
	};
	k.Ah = function (a, b, c, d) {
		var e = wn(this, a),
			f = 0 == a ? this.fa.Ma[b] : tn(this.fa, a - 1);
		if (0 == a) {
			un(this.fa, b);
			if (this.ga && this.ga.Z) a: {
				for (a = 0; a < this.fa.mb.length; a++) {
					var g = this.fa.mb[a].S;
					if ("AUDIO" == g.type && g.language + g.name == this.ga.Z.S.language + this.ga.Z.S.name) {
						a += 1;
						break a
					}
				}
				a = -1
			}
			else a = this.getDefaultAudioStreamIndex();
			this.enableStream(a, !0, d);
			D(fg, "Switched to media " + a + ".")
		}
		(e&&e.Ah&&e.Ah(b, c, f))?e.Ah(b, c, f):null
	};
	k.reset = function (a) {
		wn(this, a).reset()
	};
	k.Ia = function (a) {
		return wn(this, a).Ia()
	};
	k.sd = function (a) {
		this.og.sd(a.D);
		void 0 === this.Ti && (Da("Cast.MPL.Live", a.D.X), this.Ti = a.D.X);
		void 0 === this.Ri && (this.Ri = "EVENT" == a.D.ih ? !0 : !1);
		this.Ua.Z == a ? this.Ua.sd() : null !== this.ga && this.ga.Z == a ? this.ga.sd() : null !== this.ka && this.ka.Z == a && this.ka.sd();
		var b = a.S.Tj;
		if (!this.hi[b] || "none" === this.hi[b]) {
			var c = a.D.Hf;
			switch (c) {
				case "widevine":
					this.Od && (Sk(this.Od, [c]), this.Od = null);
					break;
				case "aes_128":
					this.g.Ii && (c = "aes_128_ckp", a.D.Hf = c);
					$d(c, 2);
					break;
				case "none":
					break;
				default:
					B(fg, "Unexpected HLS protection type")
			}
			this.hi[b] =
				c
		}
		this.dj.Cd()
	};
	k.updateLicenseRequestInfo = function () {};
	k.getDuration = function () {
		return this.Ua.getDuration()
	};
	k.seek = function (a, b) {
		return wn(this, a).seek(b)
	};
	k.cc = function (a) {
		return wn(this, a).cc()
	};
	k.isLiveStream = function () {
		return this.Ti || !1
	};
	k.isEventStream = function () {
		return this.Ri || !1
	};
	k.isLiveSeekableRangeMovingWindow = function () {
		var a = this.Ua.Z;
		return a ? a.Ng : void 0
	};
	k.isLiveDone = function () {
		var a = this.Ua.Z;
		return a ? a.ef : void 0
	};
	k.Gc = function (a) {
		return wn(this, a).Gc()
	};
	k.getSegmentInterval = function (a) {
		return wn(this, a).getSegmentInterval()
	};
	k.ee = function (a) {
		return wn(this, a).ee()
	};
	k.zh = function (a, b) {
		wn(this, a).zh(b)
	};
	k.Se = function (a) {
		return wn(this, a).Se()
	};
	k.xg = function (a) {
		return wn(this, a).xg()
	};
	k.updateSegmentRequestInfo = function (a, b) {
		wn(this, a).updateSegmentRequestInfo(b)
	};
	k.processSegment = function (a, b, c) {
		b.$d ? Ek(c, b.data, {
			time: 0,
			duration: 0
		}, 0, !0) : wn(this, a).processSegment(b.ne, b.data, c)
	};
	k.Ag = function () {
		return 2
	};
	k.Bk = function (a) {
		var b = this.fa.Ma,
			c = this.fa.D.Rc;
		if (void 0 === a) return 0 < c.size;
		if (a >= b.length) return !1;
		a = Bm(b[a].S);
		c = n(c);
		for (b = c.next(); !b.done; b = c.next()) {
			b = n(b.value);
			var d = b.next().value;
			b.next();
			if (a === d) return !0
		}
		return !1
	};
	vn.prototype.getStreamInfo = vn.prototype.getStreamInfo;
	vn.prototype.getQualityLevel = vn.prototype.getQualityLevel;
	vn.prototype.isStreamEnabled = vn.prototype.isStreamEnabled;
	vn.prototype.enableStream = vn.prototype.enableStream;
	vn.prototype.getStreamCount = vn.prototype.getStreamCount;
	vn.prototype.getDefaultAudioStreamIndex = vn.prototype.getDefaultAudioStreamIndex;
	var xn = /\/[^\/]+.m3u[8]?.{0,}/;
	var An = function (a) {
			this.X = new dl("IsLive");
			this.Pk = new cl("DVRWindowLength");
			this.Vc = new cl("TimeScale");
			for (this.duration = new cl("Duration"); a;) {
				if ("SmoothStreamingMedia" == a.nodeName) {
					il(a.attributes, this);
					break
				}
				a = a.nextElementSibling
			}
			this.streams = [];
			this.Pb = null;
			if (a)
				for (this.Vc.value || (this.Vc.value = 1E7), a = a.firstElementChild; null !== a; a = a.nextElementSibling)
					if ("StreamIndex" == a.nodeName) {
						var b = new yn(a, this.Vc.value);
						0 < b.sb.length && this.streams.push(b)
					} else "Protection" == a.nodeName && (this.Pb = new zn(a.firstElementChild))
		},
		Bn = function (a, b) {
			W.call(this, a, b)
		};
	p(Bn, W);
	Bn.prototype.parse = function (a) {
		switch (a) {
			case "H264":
			case "AVC1":
				this.value = "avc1.4D40";
				break;
			case "AACL":
				this.value = "mp4a.40.2";
				break;
			case "EC-3":
				this.value = "mp4a.a6";
				break;
			case "AACH":
				this.value = "mp4a.40.5";
				break;
			case "DFXP":
			case "TTML":
				this.value = "ttml";
				break;
			default:
				this.value = null
		}
	};
	var Cn = function () {
		V.call(this, "CodecPrivateData");
		this.Cf = this.Ad = null
	};
	p(Cn, V);
	Cn.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		a = a.split("00000001");
		3 == a.length && (this.Ad = qg(a[1]), this.Cf = qg(a[2]))
	};
	var Dn = function () {
		V.call(this, "CodecPrivateData");
		this.value = null
	};
	p(Dn, V);
	Dn.prototype.parse = function (a) {
		V.prototype.parse.call(this, a);
		a && (this.value = qg(a))
	};
	var En = function (a) {
			this.bitrate = new cl("Bitrate");
			this.format = new Bn("FourCC", a)
		},
		Fn = function (a) {
			En.call(this, "ttml");
			il(a.attributes, this)
		};
	p(Fn, En);
	var Gn = function (a) {
		En.call(this, "avc1.4D401E");
		this.width = new cl("MaxWidth");
		this.height = new cl("MaxHeight");
		this.Bb = new Cn;
		il(a.attributes, this)
	};
	p(Gn, En);
	var Hn = function (a) {
		En.call(this, "mp4a.40.2");
		this.sampleRate = new cl("SamplingRate");
		this.channels = new cl("Channels");
		this.Bb = new Dn;
		il(a.attributes, this)
	};
	p(Hn, En);
	var yn = function (a, b) {
			this.type = new W("Type");
			this.url = new W("Url");
			this.name = new W("Name");
			this.language = new W("Language");
			il(a.attributes, this);
			this.qc = 0;
			switch (this.type.value) {
				case "video":
					this.qc = 2;
					break;
				case "audio":
					this.qc = 1;
					break;
				case "text":
					this.qc = 3
			}
			this.i = [];
			this.sb = [];
			var c = new rh("0");
			for (a = a.firstElementChild; null !== a; a = a.nextElementSibling)
				if ("QualityLevel" == a.nodeName) {
					var d = a;
					switch (this.qc) {
						case 2:
							d = new Gn(d);
							break;
						case 1:
							d = new Hn(d);
							break;
						case 3:
							d = new Fn(d);
							break;
						default:
							d = null
					}
					d &&
						d.format.value && this.sb.push(d)
				} else if ("c" == a.nodeName) {
				var e = a;
				d = b;
				var f = e.attributes.getNamedItem("t");
				f && c.reset(f.value);
				f = null;
				var g = -1;
				e.attributes.getNamedItem("d") && (f = parseInt(e.attributes.d.value, 10), g = f / d);
				e = (e = e.attributes.getNamedItem("r")) ? parseInt(e.value, 10) : 1;
				for (var h = 0; h < e; h++) this.i.push({
					time: parseInt(c.toString(), 10) / d,
					duration: g,
					ic: new rh(c.toString()),
					offset: 0,
					size: 0,
					url: null
				}), null !== f && c.add(f)
			}
			c = this.i.length - 1;
			for (a = 0; a < c; a++)
				if (d = this.i[a], f = this.i[a + 1], 0 > d.duration) {
					f =
						f.ic;
					g = d.ic;
					if (f.ia == g.ia) f = 0;
					else {
						if (!sh(f, g)) throw Error("Value must be smaller than the current value");
						h = e = 0;
						for (var l = 1, m = 0; m < f.ia.length; m++) {
							var q = parseInt(f.ia.charAt(f.ia.length - 1 - m), 10) - (m < g.ia.length ? parseInt(g.ia.charAt(g.ia.length - 1 - m), 10) : 0) - h;
							h = 0 > q ? 1 : 0;
							e += (h ? 10 + q : q) * l;
							l *= 10
						}
						if (h) throw Error("Value must be smaller than the current value");
						if (e > Number.MAX_SAFE_INTEGER) throw Error("Difference lost precision");
						f = e
					}
					d.duration = f / b
				}
		},
		zn = function (a) {
			this.systemId = new hl("SystemID");
			il(a.attributes,
				this);
			this.Gf = null;
			this.systemId.value && kg.$b(this.systemId.value) && (this.Gf = wj(ae(window.atob(a.textContent.trim()))))
		};
	z("cast.player.smooth");
	var In = function (a) {
		Q.call(this, a);
		this.If = null;
		this.jb = 1E7;
		this.pg = null
	};
	p(In, Q);
	k = In.prototype;
	k.kj = function (a) {
		var b = a.Pb;
		if (b) {
			b = b.Gf;
			if (null === b) {
				this.Qb("invalid protection info");
				return
			}
			this.If = b
		}
		a.Vc.value && (this.jb = a.Vc.value);
		a.duration.value && (this.duration = a.duration.value / this.jb);
		Ej(this, 1 == a.X.value);
		this.Sj = !!this.X && this.host.enableSmoothLiveRefresh;
		this.X && (this.duration = -1, a.Pk.value ? (this.pg = a.Pk.value / this.jb, this.Qi = !1, this.Si = !0) : (this.pg = Infinity, this.Qi = !0, this.Si = !1));
		b = Infinity;
		for (var c = n(a.streams), d = c.next(); !d.done; d = c.next()) d = d.value, (2 == d.qc || 1 == d.qc) && d.i[0].time <
			b && (b = d.i[0].time);
		c = [];
		a = n(a.streams);
		for (d = a.next(); !d.done; d = a.next()) {
			var e = d.value;
			if (0 == e.sb.length) {
				this.Qb("no quality levels");
				return
			}
			d = e.sb[0].format.value;
			if (null === d) {
				this.Qb("unknown media format");
				return
			}
			var f = null;
			if (2 == e.qc) a: {
				f = b;
				var g = e.sb[0];
				if (null === g.Bb.Ad) this.Qb("no sps"),
				f = null;
				else {
					g = g.Bb.Ad[3].toString(16);
					1 == g.length && (g = "0" + g);
					for (var h = Jn(2, "video/mp4", d + g.toLowerCase(), e.language.value, e.name.value), l = 0; l < e.sb.length; l++) {
						g = e.sb[l];
						if (null === g.bitrate.value || null ===
							g.width.value || null === g.height.value || null === g.Bb.Ad || null === g.Bb.Cf) {
							this.Qb("invalid video quality");
							f = null;
							break a
						}
						var m = this.If,
							q = this.jb,
							u = g.width.value,
							E = g.height.value,
							C = g.Bb.Ad,
							va = g.Bb.Cf,
							ja = new wh;
						(new cm(m, q, u, E, C, va)).u(ja);
						h.F.push(Kn(e.url.value, g.bitrate.value, f, e.i, vh(ja)))
					}
					f = h
				}
			}
			else if (1 == e.qc) a: {
				f = b;g = Jn(1, "audio/mp4", d, e.language.value, e.name.value);
				for (h = 0; h < e.sb.length; h++) {
					l = e.sb[h];
					if (null === l.bitrate.value || null === l.sampleRate.value) {
						this.Qb("invalid audio quality");
						f = null;
						break a
					}(m = l.Bb.value) || (m = l.channels.value, m = ph(2, l.sampleRate.value, null !== m ? m : 2));
					E = m;
					if (null === E) {
						this.Qb("invalid audio codec private data");
						f = null;
						break a
					}
					m = this.If;
					q = this.jb;
					u = l.sampleRate.value;
					C = "mp4a.a6" == d ? 166 : 64;
					va = new wh;
					(new bm(m, q, C, u, E)).u(va);
					g.F.push(Kn(e.url.value, l.bitrate.value, f, e.i, vh(va)))
				}
				f = g
			}
			else if (3 == e.qc) {
				f = b;
				g = Jn(3, "text/mp4", d, e.language.value, e.name.value, !1);
				for (h = 0; h < e.sb.length; h++) g.F.push(Kn(e.url.value, e.sb[h].bitrate.value || 0, f, e.i, null));
				f = g
			}
			f && ("mp4a.a6" ==
				d ? c.push(f) : this.o.push(f))
		}
		Array.prototype.push.apply(this.o, c)
	};
	k.Cj = function () {
		this.host.Y(331, tj(this.od))
	};
	k.Qb = function (a) {
		this.host.Y(431, void 0, a, Ln)
	};
	k.vj = function (a) {
		var b = new DOMParser;
		a = kb(b, Tf(a));
		a.firstChild && (a = new An(a.firstChild), this.kj(a))
	};
	k.ek = function () {
		this.If && Sk(this.Qc, ["playready"])
	};
	k.updateLicenseRequestInfo = function (a) {
		a.headers = {};
		a.headers["content-type"] = "text/xml;charset=utf-8";
		a.url = this.If.url
	};
	k.Se = function (a) {
		a = this.o[a];
		a.ib = !1;
		return a.F[a.ca].Jb.data
	};
	k.reset = function (a) {
		Q.prototype.reset.call(this, a);
		this.o[a].$ = !0
	};
	k.updateSegmentRequestInfo = function (a, b) {
		Q.prototype.updateSegmentRequestInfo.call(this, a, b);
		var c = this.o[a];
		a = c.index;
		c = c.F[c.ca];
		var d = c.url;
		d = d.replace(Mn, c.bitrate.toString());
		d = d.replace(Nn, c.i[a].ic.toString());
		b.url = this.uri.resolve(new I(d)).toString().toString()
	};
	k.processSegment = function (a, b, c) {
		var d = this.o[a],
			e = b.data,
			f = b.interval;
		if (b.$d) Ek(c, e, {
			time: f.time,
			duration: 0
		}, 0, !1);
		else {
			if (this.X) {
				var g = this.jb;
				var h = (h = O(e, 1970628964, Ch, !0)) ? h.Di(g) : null;
				if (null === h || 0 == h.length) B(Ln, "no new segments");
				else {
					a = this.o[a];
					a: if (g = a.F[a.ca].i, 0 != h.length) {
						var l = h[0].time,
							m = Bj(l, g);
						if (0 > m)
							if (m = g[g.length - 1], Math.abs(m.time + m.duration - l) < .5 * m.duration) m = g.length;
							else {
								B(Ln, "new segments are out of sync with segments list.");
								break a
							}
						if (!(m + h.length <= g.length))
							for (g.splice(m,
									g.length - m), h = n(h), l = h.next(); !l.done; l = h.next()) g.push(l.value)
					}
					On(a, this.pg)
				}
				this.Qc.Cd();
				if (b.headers && (b = b.headers.match('ChildTrack="([^"]*)"'))) {
					b = n(b[1].split(/,|;/));
					for (a = b.next(); !a.done; a = b.next())
						if (a = a.value.match("([^=]*)=([0-9]*)"))
							for (g = a[1], h = n(this.o), l = h.next(); !l.done; l = h.next())
								if (l = l.value, g == l.name) {
									g = l.F[0].i;
									a = a[2];
									h = parseInt(a, 10) / this.jb;
									(0 == g.length || g[g.length - 1].time < h) && g.push({
										time: h,
										duration: 0,
										ic: new rh(a),
										offset: 0,
										size: 0,
										url: null
									});
									break
								}
					b = n(this.o);
					for (l = b.next(); !l.done; l =
						b.next()) On(l.value, this.pg)
				}
			}
			b = f.time + d.F[d.ca].T;
			if (3 == d.type) e = (e = O(e, 1835295092)) ? M(e) : null;
			else {
				a = b * this.jb;
				g = 2 == d.type;
				h = Th(e);
				l = new wh(e.byteLength + 1024);
				m = null;
				for (e = 0; 0 < h.length;) {
					var q = h.shift();
					switch (q.Ha()) {
						case 1836019558:
							m = O(M(q), 1970628964, Fh, !0);
							(new fm(q, a, g)).u(l);
							break;
						case 1835295092:
							var u = null;
							m && (u = m.Hj ? m.Hj : new Uint8Array([]));
							e = u ? u.length : 0;
							(new Yj(u ? [u, M(q)] : [M(q)])).u(l);
							break;
						default:
							q.u(l)
					}
				}
				a = vh(l);
				Oh(a, e);
				e = a
			}
			null === e ? this.host.Y(332, void 0, "no media data", Ln) : (Ek(c,
				e, f, b, d.$, void 0, !0), d.$ = !1)
		}
	};
	k.Ag = function () {
		return 3
	};
	var Jn = function (a, b, c, d, e, f) {
			return {
				name: e,
				type: a,
				enabled: !1,
				mimeType: b,
				$: !0,
				F: [],
				language: d,
				ib: void 0 !== f ? f : !0,
				codecs: c,
				index: -1,
				ca: -1
			}
		},
		Kn = function (a, b, c, d, e) {
			return {
				url: a || "",
				bitrate: b,
				T: c,
				i: d,
				L: null,
				P: null,
				Jb: e ? {
					url: null,
					La: null,
					data: e
				} : null
			}
		},
		On = function (a, b) {
			var c = a.F[0].i,
				d = 0;
			if (b && Infinity !== b)
				for (var e = 0, f = 2 * c[0].duration, g = c.length - 1; 0 <= g; g--)
					if (e + c[g].duration < b + f) e += c[g].duration;
					else {
						d = g + 1;
						break
					}
			else d = c.length - 1E4;
			0 < d && a.index >= d && (c.splice(0, d), a.index -= d)
		},
		Ln = z("cast.player.smooth.Protocol"),
		Mn = RegExp("{bitrate}|{Bitrate}"),
		Nn = RegExp("{start time}|{start_time}");
	t("cast.player.api.CreateDashStreamingProtocol", function (a) {
		v("Cast.MPL.StreamingProtocolType", 1);
		return new yl(a)
	});
	t("cast.player.api.CreateHlsStreamingProtocol", function (a, b, c) {
		v("Cast.MPL.StreamingProtocolType", 2);
		return new vn(a, b, c)
	});
	t("cast.player.api.CreateSmoothStreamingProtocol", function (a) {
		v("Cast.MPL.StreamingProtocolType", 3);
		return new In(a)
	});
}).call(window);