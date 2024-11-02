// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"baT8q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "73894a455633c986";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"67QB9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ESP32S3ROM", ()=>ESP32S3ROM);
var _romJs = require("./rom.js");
var _stubFlasher32S3Json = require("./stub_flasher/stub_flasher_32s3.json");
var _stubFlasher32S3JsonDefault = parcelHelpers.interopDefault(_stubFlasher32S3Json);
class ESP32S3ROM extends (0, _romJs.ROM) {
    constructor(){
        super(...arguments);
        this.CHIP_NAME = "ESP32-S3";
        this.IMAGE_CHIP_ID = 9;
        this.EFUSE_BASE = 0x60007000;
        this.MAC_EFUSE_REG = this.EFUSE_BASE + 0x044;
        this.UART_CLKDIV_REG = 0x60000014;
        this.UART_CLKDIV_MASK = 0xfffff;
        this.UART_DATE_REG_ADDR = 0x60000080;
        this.FLASH_WRITE_SIZE = 0x400;
        this.BOOTLOADER_FLASH_OFFSET = 0x0;
        this.FLASH_SIZES = {
            "1MB": 0x00,
            "2MB": 0x10,
            "4MB": 0x20,
            "8MB": 0x30,
            "16MB": 0x40
        };
        this.SPI_REG_BASE = 0x60002000;
        this.SPI_USR_OFFS = 0x18;
        this.SPI_USR1_OFFS = 0x1c;
        this.SPI_USR2_OFFS = 0x20;
        this.SPI_MOSI_DLEN_OFFS = 0x24;
        this.SPI_MISO_DLEN_OFFS = 0x28;
        this.SPI_W0_OFFS = 0x58;
        this.USB_RAM_BLOCK = 0x800;
        this.UARTDEV_BUF_NO_USB = 3;
        this.UARTDEV_BUF_NO = 0x3fcef14c;
        this.TEXT_START = (0, _stubFlasher32S3JsonDefault.default).text_start;
        this.ENTRY = (0, _stubFlasher32S3JsonDefault.default).entry;
        this.DATA_START = (0, _stubFlasher32S3JsonDefault.default).data_start;
        this.ROM_DATA = (0, _stubFlasher32S3JsonDefault.default).data;
        this.ROM_TEXT = (0, _stubFlasher32S3JsonDefault.default).text;
    }
    async getChipDescription(loader) {
        return "ESP32-S3";
    }
    async getFlashCap(loader) {
        const numWord = 3;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        const flashCap = registerValue >> 27 & 0x07;
        return flashCap;
    }
    async getFlashVendor(loader) {
        const numWord = 4;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        const vendorId = registerValue >> 0 & 0x07;
        const vendorMap = {
            1: "XMC",
            2: "GD",
            3: "FM",
            4: "TT",
            5: "BY"
        };
        return vendorMap[vendorId] || "";
    }
    async getPsramCap(loader) {
        const numWord = 4;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        const psramCap = registerValue >> 3 & 0x03;
        return psramCap;
    }
    async getPsramVendor(loader) {
        const numWord = 4;
        const block1Addr = this.EFUSE_BASE + 0x044;
        const addr = block1Addr + 4 * numWord;
        const registerValue = await loader.readReg(addr);
        const vendorId = registerValue >> 7 & 0x03;
        const vendorMap = {
            1: "AP_3v3",
            2: "AP_1v8"
        };
        return vendorMap[vendorId] || "";
    }
    async getChipFeatures(loader) {
        const features = [
            "Wi-Fi",
            "BLE"
        ];
        const flashMap = {
            0: null,
            1: "Embedded Flash 8MB",
            2: "Embedded Flash 4MB"
        };
        const flashCap = await this.getFlashCap(loader);
        const flashVendor = await this.getFlashVendor(loader);
        const flash = flashMap[flashCap];
        const flashDescription = flash !== undefined ? flash : "Unknown Embedded Flash";
        if (flash !== null) features.push(`${flashDescription} (${flashVendor})`);
        const psramMap = {
            0: null,
            1: "Embedded PSRAM 8MB",
            2: "Embedded PSRAM 2MB"
        };
        const psramCap = await this.getPsramCap(loader);
        const psramVendor = await this.getPsramVendor(loader);
        const psram = psramMap[psramCap];
        const psramDescription = psram !== undefined ? psram : "Unknown Embedded PSRAM";
        if (psram !== null) features.push(`${psramDescription} (${psramVendor})`);
        return features;
    }
    async getCrystalFreq(loader) {
        return 40;
    }
    _d2h(d) {
        const h = (+d).toString(16);
        return h.length === 1 ? "0" + h : h;
    }
    async postConnect(loader) {
        const bufNo = await loader.readReg(this.UARTDEV_BUF_NO) & 0xff;
        loader.debug("In _post_connect " + bufNo);
        if (bufNo == this.UARTDEV_BUF_NO_USB) loader.ESP_RAM_BLOCK = this.USB_RAM_BLOCK;
    }
    async readMac(loader) {
        let mac0 = await loader.readReg(this.MAC_EFUSE_REG);
        mac0 = mac0 >>> 0;
        let mac1 = await loader.readReg(this.MAC_EFUSE_REG + 4);
        mac1 = mac1 >>> 0 & 0x0000ffff;
        const mac = new Uint8Array(6);
        mac[0] = mac1 >> 8 & 0xff;
        mac[1] = mac1 & 0xff;
        mac[2] = mac0 >> 24 & 0xff;
        mac[3] = mac0 >> 16 & 0xff;
        mac[4] = mac0 >> 8 & 0xff;
        mac[5] = mac0 & 0xff;
        return this._d2h(mac[0]) + ":" + this._d2h(mac[1]) + ":" + this._d2h(mac[2]) + ":" + this._d2h(mac[3]) + ":" + this._d2h(mac[4]) + ":" + this._d2h(mac[5]);
    }
    getEraseSize(offset, size) {
        return size;
    }
}

},{"./rom.js":"4kWLt","./stub_flasher/stub_flasher_32s3.json":"hvij7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvij7":[function(require,module,exports) {
module.exports = JSON.parse('{"entry":1077381696,"text":"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","text_start":1077379072,"data":"ZCvKP8qNN0CvjjdAcJM3QDqPN0DPjjdAOo83QJmPN0BmkDdA2ZA3QIGQN0BVjTdA/I83QFiQN0C8jzdA+5A3QOaPN0D7kDdAnY43QPqON0A6jzdAmY83QLWON0CWjTdAvJE3QDaTN0ByjDdAVpM3QHKMN0ByjDdAcow3QHKMN0ByjDdAcow3QHKMN0ByjDdAVpE3QHKMN0BRkjdANpM3QAQInwAAAAAAAAAYAQQIBQAAAAAAAAAIAQQIBgAAAAAAAAAAAQQIIQAAAAAAIAAAEQQI3AAAAAAAIAAAEQQIDAAAAAAAIAAAAQQIEgAAAAAAIAAAESAoDAAQAQAA","data_start":1070279668}');

},{}]},["baT8q"], null, "parcelRequire477f")

//# sourceMappingURL=esp32s3.5633c986.js.map
