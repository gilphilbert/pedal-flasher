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
})({"hPfiI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5af1df03ba3be255";
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

},{}],"coo9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ESP32ROM", ()=>ESP32ROM);
var _romJs = require("./rom.js");
var _stubFlasher32Json = require("./stub_flasher/stub_flasher_32.json");
var _stubFlasher32JsonDefault = parcelHelpers.interopDefault(_stubFlasher32Json);
class ESP32ROM extends (0, _romJs.ROM) {
    constructor(){
        super(...arguments);
        this.CHIP_NAME = "ESP32";
        this.IMAGE_CHIP_ID = 0;
        this.EFUSE_RD_REG_BASE = 0x3ff5a000;
        this.DR_REG_SYSCON_BASE = 0x3ff66000;
        this.UART_CLKDIV_REG = 0x3ff40014;
        this.UART_CLKDIV_MASK = 0xfffff;
        this.UART_DATE_REG_ADDR = 0x60000078;
        this.XTAL_CLK_DIVIDER = 1;
        this.FLASH_SIZES = {
            "1MB": 0x00,
            "2MB": 0x10,
            "4MB": 0x20,
            "8MB": 0x30,
            "16MB": 0x40
        };
        this.FLASH_WRITE_SIZE = 0x400;
        this.BOOTLOADER_FLASH_OFFSET = 0x1000;
        this.SPI_REG_BASE = 0x3ff42000;
        this.SPI_USR_OFFS = 0x1c;
        this.SPI_USR1_OFFS = 0x20;
        this.SPI_USR2_OFFS = 0x24;
        this.SPI_W0_OFFS = 0x80;
        this.SPI_MOSI_DLEN_OFFS = 0x28;
        this.SPI_MISO_DLEN_OFFS = 0x2c;
        this.TEXT_START = (0, _stubFlasher32JsonDefault.default).text_start;
        this.ENTRY = (0, _stubFlasher32JsonDefault.default).entry;
        this.DATA_START = (0, _stubFlasher32JsonDefault.default).data_start;
        this.ROM_DATA = (0, _stubFlasher32JsonDefault.default).data;
        this.ROM_TEXT = (0, _stubFlasher32JsonDefault.default).text;
    }
    async readEfuse(loader, offset) {
        const addr = this.EFUSE_RD_REG_BASE + 4 * offset;
        loader.debug("Read efuse " + addr);
        return await loader.readReg(addr);
    }
    async getPkgVersion(loader) {
        const word3 = await this.readEfuse(loader, 3);
        let pkgVersion = word3 >> 9 & 0x07;
        pkgVersion += (word3 >> 2 & 0x1) << 3;
        return pkgVersion;
    }
    async getChipRevision(loader) {
        const word3 = await this.readEfuse(loader, 3);
        const word5 = await this.readEfuse(loader, 5);
        const apbCtlDate = await loader.readReg(this.DR_REG_SYSCON_BASE + 0x7c);
        const revBit0 = word3 >> 15 & 0x1;
        const revBit1 = word5 >> 20 & 0x1;
        const revBit2 = apbCtlDate >> 31 & 0x1;
        if (revBit0 != 0) {
            if (revBit1 != 0) {
                if (revBit2 != 0) return 3;
                else return 2;
            } else return 1;
        }
        return 0;
    }
    async getChipDescription(loader) {
        const chipDesc = [
            "ESP32-D0WDQ6",
            "ESP32-D0WD",
            "ESP32-D2WD",
            "",
            "ESP32-U4WDH",
            "ESP32-PICO-D4",
            "ESP32-PICO-V3-02"
        ];
        let chipName = "";
        const pkgVersion = await this.getPkgVersion(loader);
        const chipRevision = await this.getChipRevision(loader);
        const rev3 = chipRevision == 3;
        const single_core = await this.readEfuse(loader, 3) & 1;
        if (single_core != 0) {
            chipDesc[0] = "ESP32-S0WDQ6";
            chipDesc[1] = "ESP32-S0WD";
        }
        if (rev3) chipDesc[5] = "ESP32-PICO-V3";
        if (pkgVersion >= 0 && pkgVersion <= 6) chipName = chipDesc[pkgVersion];
        else chipName = "Unknown ESP32";
        if (rev3 && (pkgVersion === 0 || pkgVersion === 1)) chipName += "-V3";
        return chipName + " (revision " + chipRevision + ")";
    }
    async getChipFeatures(loader) {
        const features = [
            "Wi-Fi"
        ];
        const word3 = await this.readEfuse(loader, 3);
        const chipVerDisBt = word3 & 2;
        if (chipVerDisBt === 0) features.push(" BT");
        const chipVerDisAppCpu = word3 & 1;
        if (chipVerDisAppCpu !== 0) features.push(" Single Core");
        else features.push(" Dual Core");
        const chipCpuFreqRated = word3 & 8192;
        if (chipCpuFreqRated !== 0) {
            const chipCpuFreqLow = word3 & 4096;
            if (chipCpuFreqLow !== 0) features.push(" 160MHz");
            else features.push(" 240MHz");
        }
        const pkgVersion = await this.getPkgVersion(loader);
        if ([
            2,
            4,
            5,
            6
        ].indexOf(pkgVersion) !== -1) features.push(" Embedded Flash");
        if (pkgVersion === 6) features.push(" Embedded PSRAM");
        const word4 = await this.readEfuse(loader, 4);
        const adcVref = word4 >> 8 & 0x1f;
        if (adcVref !== 0) features.push(" VRef calibration in efuse");
        const blk3PartRes = word3 >> 14 & 0x1;
        if (blk3PartRes !== 0) features.push(" BLK3 partially reserved");
        const word6 = await this.readEfuse(loader, 6);
        const codingScheme = word6 & 0x3;
        const codingSchemeArr = [
            "None",
            "3/4",
            "Repeat (UNSUPPORTED)",
            "Invalid"
        ];
        features.push(" Coding Scheme " + codingSchemeArr[codingScheme]);
        return features;
    }
    async getCrystalFreq(loader) {
        const uartDiv = await loader.readReg(this.UART_CLKDIV_REG) & this.UART_CLKDIV_MASK;
        const etsXtal = loader.transport.baudrate * uartDiv / 1000000 / this.XTAL_CLK_DIVIDER;
        let normXtal;
        if (etsXtal > 33) normXtal = 40;
        else normXtal = 26;
        if (Math.abs(normXtal - etsXtal) > 1) loader.info("WARNING: Unsupported crystal in use");
        return normXtal;
    }
    _d2h(d) {
        const h = (+d).toString(16);
        return h.length === 1 ? "0" + h : h;
    }
    async readMac(loader) {
        let mac0 = await this.readEfuse(loader, 1);
        mac0 = mac0 >>> 0;
        let mac1 = await this.readEfuse(loader, 2);
        mac1 = mac1 >>> 0;
        const mac = new Uint8Array(6);
        mac[0] = mac1 >> 8 & 0xff;
        mac[1] = mac1 & 0xff;
        mac[2] = mac0 >> 24 & 0xff;
        mac[3] = mac0 >> 16 & 0xff;
        mac[4] = mac0 >> 8 & 0xff;
        mac[5] = mac0 & 0xff;
        return this._d2h(mac[0]) + ":" + this._d2h(mac[1]) + ":" + this._d2h(mac[2]) + ":" + this._d2h(mac[3]) + ":" + this._d2h(mac[4]) + ":" + this._d2h(mac[5]);
    }
}

},{"./rom.js":"4kWLt","./stub_flasher/stub_flasher_32.json":"eM5Fm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eM5Fm":[function(require,module,exports) {
module.exports = JSON.parse('{"entry":1074521560,"text":"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","text_start":1074520064,"data":"GOv8P9jnC0Bx6AtA8+wLQO3oC0CP6AtA7egLQEnpC0AG6gtAeOoLQCHqC0CB5wtAo+kLQPjpC0Bn6QtAmuoLQI7pC0Ca6gtAXegLQLPoC0Dt6AtASekLQHfoC0BM6wtAs+wLQKXmC0DX7AtApeYLQKXmC0Cl5gtApeYLQKXmC0Cl5gtApeYLQKXmC0Dz6gtApeYLQM3rC0Cz7AtA","data_start":1073605544}');

},{}]},["hPfiI"], null, "parcelRequire477f")

//# sourceMappingURL=esp32.ba3be255.js.map
