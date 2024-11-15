import {
  DOCUMENT,
  EventEmitter,
  FactoryTarget,
  Inject,
  Injectable,
  InjectionToken,
  Location,
  LocationStrategy,
  Optional,
  PlatformNavigation,
  Subject,
  core_exports,
  init_common,
  init_core,
  init_esm,
  inject,
  normalizeQueryParams,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable
} from "./chunk-ZKDXROCG.js";
import {
  __async,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-K53ZK2UT.js";

// node_modules/@angular/common/fesm2022/testing.mjs
function createFakeNavigateEvent({ cancelable, canIntercept, userInitiated, hashChange, navigationType, signal, destination, info, sameDocument, skipPopState, result, userAgentCommit }) {
  const event = new Event("navigate", { bubbles: false, cancelable });
  event.canIntercept = canIntercept;
  event.userInitiated = userInitiated;
  event.hashChange = hashChange;
  event.navigationType = navigationType;
  event.signal = signal;
  event.destination = destination;
  event.info = info;
  event.downloadRequest = null;
  event.formData = null;
  event.sameDocument = sameDocument;
  event.skipPopState = skipPopState;
  event.commitOption = "immediate";
  let handlerFinished = void 0;
  let interceptCalled = false;
  let dispatchedNavigateEvent = false;
  let commitCalled = false;
  event.intercept = function(options) {
    interceptCalled = true;
    event.sameDocument = true;
    const handler = options?.handler;
    if (handler) {
      handlerFinished = handler();
    }
    if (options?.commit) {
      event.commitOption = options.commit;
    }
    if (options?.focusReset !== void 0 || options?.scroll !== void 0) {
      throw new Error("unimplemented");
    }
  };
  event.scroll = function() {
    throw new Error("unimplemented");
  };
  event.commit = function(internal = false) {
    if (!internal && !interceptCalled) {
      throw new DOMException(`Failed to execute 'commit' on 'NavigateEvent': intercept() must be called before commit().`, "InvalidStateError");
    }
    if (!dispatchedNavigateEvent) {
      throw new DOMException(`Failed to execute 'commit' on 'NavigateEvent': commit() may not be called during event dispatch.`, "InvalidStateError");
    }
    if (commitCalled) {
      throw new DOMException(`Failed to execute 'commit' on 'NavigateEvent': commit() already called.`, "InvalidStateError");
    }
    commitCalled = true;
    userAgentCommit();
  };
  event.cancel = function(reason) {
    result.committedReject(reason);
    result.finishedReject(reason);
  };
  event.dispatchedNavigateEvent = function() {
    dispatchedNavigateEvent = true;
    if (event.commitOption === "after-transition") {
      handlerFinished?.then(() => {
        if (!commitCalled) {
          event.commit(
            /* internal */
            true
          );
        }
      }, () => {
      });
    }
    Promise.all([result.committed, handlerFinished]).then(([entry]) => {
      result.finishedResolve(entry);
    }, (reason) => {
      result.finishedReject(reason);
    });
  };
  event.userAgentNavigated = function(entry) {
    result.committedResolve(entry);
  };
  return event;
}
function createFakeNavigationCurrentEntryChangeEvent({ from, navigationType }) {
  const event = new Event("currententrychange", {
    bubbles: false,
    cancelable: false
  });
  event.from = from;
  event.navigationType = navigationType;
  return event;
}
function createPopStateEvent({ state }) {
  const event = new Event("popstate", {
    bubbles: false,
    cancelable: false
  });
  event.state = state;
  return event;
}
function isHashChange(from, to) {
  return to.hash !== from.hash && to.hostname === from.hostname && to.pathname === from.pathname && to.search === from.search;
}
function parseUrl(urlStr, baseHref) {
  const verifyProtocol = /^((http[s]?|ftp):\/\/)/;
  let serverBase;
  if (!verifyProtocol.test(urlStr)) {
    serverBase = "http://empty.com/";
  }
  let parsedUrl;
  try {
    parsedUrl = new URL(urlStr, serverBase);
  } catch (e) {
    const result = urlParse.exec(serverBase || "" + urlStr);
    if (!result) {
      throw new Error(`Invalid URL: ${urlStr} with base: ${baseHref}`);
    }
    const hostSplit = result[4].split(":");
    parsedUrl = {
      protocol: result[1],
      hostname: hostSplit[0],
      port: hostSplit[1] || "",
      pathname: result[5],
      search: result[6],
      hash: result[8]
    };
  }
  if (parsedUrl.pathname && parsedUrl.pathname.indexOf(baseHref) === 0) {
    parsedUrl.pathname = parsedUrl.pathname.substring(baseHref.length);
  }
  return {
    hostname: !serverBase && parsedUrl.hostname || "",
    protocol: !serverBase && parsedUrl.protocol || "",
    port: !serverBase && parsedUrl.port || "",
    pathname: parsedUrl.pathname || "/",
    search: parsedUrl.search || "",
    hash: parsedUrl.hash || ""
  };
}
function provideLocationMocks() {
  return [
    { provide: Location, useClass: SpyLocation },
    { provide: LocationStrategy, useClass: MockLocationStrategy }
  ];
}
var _PlatformNavigation, PlatformNavigation2, FakeNavigation, FakeNavigationHistoryEntry, FakeNavigationDestination, InternalNavigationResult, urlParse, MOCK_PLATFORM_LOCATION_CONFIG, _MockPlatformLocation, MockPlatformLocation, _FakeNavigationPlatformLocation, FakeNavigationPlatformLocation, _SpyLocation, SpyLocation, LocationState, _MockLocationStrategy, MockLocationStrategy, _MockPopStateEvent;
var init_testing = __esm({
  "node_modules/@angular/common/fesm2022/testing.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_esm();
    _PlatformNavigation = class _PlatformNavigation {
    };
    _PlatformNavigation.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _PlatformNavigation, deps: [], target: FactoryTarget.Injectable });
    _PlatformNavigation.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _PlatformNavigation, providedIn: "platform", useFactory: () => window.navigation });
    PlatformNavigation2 = _PlatformNavigation;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: PlatformNavigation2, decorators: [{
      type: Injectable,
      args: [{ providedIn: "platform", useFactory: () => window.navigation }]
    }] });
    FakeNavigation = class {
      /** Equivalent to `navigation.currentEntry`. */
      get currentEntry() {
        return this.entriesArr[this.currentEntryIndex];
      }
      get canGoBack() {
        return this.currentEntryIndex > 0;
      }
      get canGoForward() {
        return this.currentEntryIndex < this.entriesArr.length - 1;
      }
      constructor(window2, startURL) {
        this.window = window2;
        this.entriesArr = [];
        this.currentEntryIndex = 0;
        this.navigateEvent = void 0;
        this.traversalQueue = /* @__PURE__ */ new Map();
        this.nextTraversal = Promise.resolve();
        this.prospectiveEntryIndex = 0;
        this.synchronousTraversals = false;
        this.canSetInitialEntry = true;
        this.eventTarget = this.window.document.createElement("div");
        this.nextId = 0;
        this.nextKey = 0;
        this.disposed = false;
        this.setInitialEntryForTesting(startURL);
      }
      /**
       * Sets the initial entry.
       */
      setInitialEntryForTesting(url, options = { historyState: null }) {
        if (!this.canSetInitialEntry) {
          throw new Error("setInitialEntryForTesting can only be called before any navigation has occurred");
        }
        const currentInitialEntry = this.entriesArr[0];
        this.entriesArr[0] = new FakeNavigationHistoryEntry(new URL(url).toString(), {
          index: 0,
          key: currentInitialEntry?.key ?? String(this.nextKey++),
          id: currentInitialEntry?.id ?? String(this.nextId++),
          sameDocument: true,
          historyState: options?.historyState,
          state: options.state
        });
      }
      /** Returns whether the initial entry is still eligible to be set. */
      canSetInitialEntryForTesting() {
        return this.canSetInitialEntry;
      }
      /**
       * Sets whether to emulate traversals as synchronous rather than
       * asynchronous.
       */
      setSynchronousTraversalsForTesting(synchronousTraversals) {
        this.synchronousTraversals = synchronousTraversals;
      }
      /** Equivalent to `navigation.entries()`. */
      entries() {
        return this.entriesArr.slice();
      }
      /** Equivalent to `navigation.navigate()`. */
      navigate(url, options) {
        const fromUrl = new URL(this.currentEntry.url);
        const toUrl = new URL(url, this.currentEntry.url);
        let navigationType;
        if (!options?.history || options.history === "auto") {
          if (fromUrl.toString() === toUrl.toString()) {
            navigationType = "replace";
          } else {
            navigationType = "push";
          }
        } else {
          navigationType = options.history;
        }
        const hashChange = isHashChange(fromUrl, toUrl);
        const destination = new FakeNavigationDestination({
          url: toUrl.toString(),
          state: options?.state,
          sameDocument: hashChange,
          historyState: null
        });
        const result = new InternalNavigationResult();
        this.userAgentNavigate(destination, result, {
          navigationType,
          cancelable: true,
          canIntercept: true,
          // Always false for navigate().
          userInitiated: false,
          hashChange,
          info: options?.info
        });
        return {
          committed: result.committed,
          finished: result.finished
        };
      }
      /** Equivalent to `history.pushState()`. */
      pushState(data, title, url) {
        this.pushOrReplaceState("push", data, title, url);
      }
      /** Equivalent to `history.replaceState()`. */
      replaceState(data, title, url) {
        this.pushOrReplaceState("replace", data, title, url);
      }
      pushOrReplaceState(navigationType, data, _title, url) {
        const fromUrl = new URL(this.currentEntry.url);
        const toUrl = url ? new URL(url, this.currentEntry.url) : fromUrl;
        const hashChange = isHashChange(fromUrl, toUrl);
        const destination = new FakeNavigationDestination({
          url: toUrl.toString(),
          sameDocument: true,
          historyState: data
        });
        const result = new InternalNavigationResult();
        this.userAgentNavigate(destination, result, {
          navigationType,
          cancelable: true,
          canIntercept: true,
          // Always false for pushState() or replaceState().
          userInitiated: false,
          hashChange,
          skipPopState: true
        });
      }
      /** Equivalent to `navigation.traverseTo()`. */
      traverseTo(key, options) {
        const fromUrl = new URL(this.currentEntry.url);
        const entry = this.findEntry(key);
        if (!entry) {
          const domException = new DOMException("Invalid key", "InvalidStateError");
          const committed = Promise.reject(domException);
          const finished = Promise.reject(domException);
          committed.catch(() => {
          });
          finished.catch(() => {
          });
          return {
            committed,
            finished
          };
        }
        if (entry === this.currentEntry) {
          return {
            committed: Promise.resolve(this.currentEntry),
            finished: Promise.resolve(this.currentEntry)
          };
        }
        if (this.traversalQueue.has(entry.key)) {
          const existingResult = this.traversalQueue.get(entry.key);
          return {
            committed: existingResult.committed,
            finished: existingResult.finished
          };
        }
        const hashChange = isHashChange(fromUrl, new URL(entry.url, this.currentEntry.url));
        const destination = new FakeNavigationDestination({
          url: entry.url,
          state: entry.getState(),
          historyState: entry.getHistoryState(),
          key: entry.key,
          id: entry.id,
          index: entry.index,
          sameDocument: entry.sameDocument
        });
        this.prospectiveEntryIndex = entry.index;
        const result = new InternalNavigationResult();
        this.traversalQueue.set(entry.key, result);
        this.runTraversal(() => {
          this.traversalQueue.delete(entry.key);
          this.userAgentNavigate(destination, result, {
            navigationType: "traverse",
            cancelable: true,
            canIntercept: true,
            // Always false for traverseTo().
            userInitiated: false,
            hashChange,
            info: options?.info
          });
        });
        return {
          committed: result.committed,
          finished: result.finished
        };
      }
      /** Equivalent to `navigation.back()`. */
      back(options) {
        if (this.currentEntryIndex === 0) {
          const domException = new DOMException("Cannot go back", "InvalidStateError");
          const committed = Promise.reject(domException);
          const finished = Promise.reject(domException);
          committed.catch(() => {
          });
          finished.catch(() => {
          });
          return {
            committed,
            finished
          };
        }
        const entry = this.entriesArr[this.currentEntryIndex - 1];
        return this.traverseTo(entry.key, options);
      }
      /** Equivalent to `navigation.forward()`. */
      forward(options) {
        if (this.currentEntryIndex === this.entriesArr.length - 1) {
          const domException = new DOMException("Cannot go forward", "InvalidStateError");
          const committed = Promise.reject(domException);
          const finished = Promise.reject(domException);
          committed.catch(() => {
          });
          finished.catch(() => {
          });
          return {
            committed,
            finished
          };
        }
        const entry = this.entriesArr[this.currentEntryIndex + 1];
        return this.traverseTo(entry.key, options);
      }
      /**
       * Equivalent to `history.go()`.
       * Note that this method does not actually work precisely to how Chrome
       * does, instead choosing a simpler model with less unexpected behavior.
       * Chrome has a few edge case optimizations, for instance with repeated
       * `back(); forward()` chains it collapses certain traversals.
       */
      go(direction) {
        const targetIndex = this.prospectiveEntryIndex + direction;
        if (targetIndex >= this.entriesArr.length || targetIndex < 0) {
          return;
        }
        this.prospectiveEntryIndex = targetIndex;
        this.runTraversal(() => {
          if (targetIndex >= this.entriesArr.length || targetIndex < 0) {
            return;
          }
          const fromUrl = new URL(this.currentEntry.url);
          const entry = this.entriesArr[targetIndex];
          const hashChange = isHashChange(fromUrl, new URL(entry.url, this.currentEntry.url));
          const destination = new FakeNavigationDestination({
            url: entry.url,
            state: entry.getState(),
            historyState: entry.getHistoryState(),
            key: entry.key,
            id: entry.id,
            index: entry.index,
            sameDocument: entry.sameDocument
          });
          const result = new InternalNavigationResult();
          this.userAgentNavigate(destination, result, {
            navigationType: "traverse",
            cancelable: true,
            canIntercept: true,
            // Always false for go().
            userInitiated: false,
            hashChange
          });
        });
      }
      /** Runs a traversal synchronously or asynchronously */
      runTraversal(traversal) {
        if (this.synchronousTraversals) {
          traversal();
          return;
        }
        this.nextTraversal = this.nextTraversal.then(() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              traversal();
            });
          });
        });
      }
      /** Equivalent to `navigation.addEventListener()`. */
      addEventListener(type, callback, options) {
        this.eventTarget.addEventListener(type, callback, options);
      }
      /** Equivalent to `navigation.removeEventListener()`. */
      removeEventListener(type, callback, options) {
        this.eventTarget.removeEventListener(type, callback, options);
      }
      /** Equivalent to `navigation.dispatchEvent()` */
      dispatchEvent(event) {
        return this.eventTarget.dispatchEvent(event);
      }
      /** Cleans up resources. */
      dispose() {
        this.eventTarget = this.window.document.createElement("div");
        this.disposed = true;
      }
      /** Returns whether this fake is disposed. */
      isDisposed() {
        return this.disposed;
      }
      /** Implementation for all navigations and traversals. */
      userAgentNavigate(destination, result, options) {
        this.canSetInitialEntry = false;
        if (this.navigateEvent) {
          this.navigateEvent.cancel(new DOMException("Navigation was aborted", "AbortError"));
          this.navigateEvent = void 0;
        }
        const navigateEvent = createFakeNavigateEvent({
          navigationType: options.navigationType,
          cancelable: options.cancelable,
          canIntercept: options.canIntercept,
          userInitiated: options.userInitiated,
          hashChange: options.hashChange,
          signal: result.signal,
          destination,
          info: options.info,
          sameDocument: destination.sameDocument,
          skipPopState: options.skipPopState,
          result,
          userAgentCommit: () => {
            this.userAgentCommit();
          }
        });
        this.navigateEvent = navigateEvent;
        this.eventTarget.dispatchEvent(navigateEvent);
        navigateEvent.dispatchedNavigateEvent();
        if (navigateEvent.commitOption === "immediate") {
          navigateEvent.commit(
            /* internal= */
            true
          );
        }
      }
      /** Implementation to commit a navigation. */
      userAgentCommit() {
        if (!this.navigateEvent) {
          return;
        }
        const from = this.currentEntry;
        if (!this.navigateEvent.sameDocument) {
          const error = new Error("Cannot navigate to a non-same-document URL.");
          this.navigateEvent.cancel(error);
          throw error;
        }
        if (this.navigateEvent.navigationType === "push" || this.navigateEvent.navigationType === "replace") {
          this.userAgentPushOrReplace(this.navigateEvent.destination, {
            navigationType: this.navigateEvent.navigationType
          });
        } else if (this.navigateEvent.navigationType === "traverse") {
          this.userAgentTraverse(this.navigateEvent.destination);
        }
        this.navigateEvent.userAgentNavigated(this.currentEntry);
        const currentEntryChangeEvent = createFakeNavigationCurrentEntryChangeEvent({
          from,
          navigationType: this.navigateEvent.navigationType
        });
        this.eventTarget.dispatchEvent(currentEntryChangeEvent);
        if (!this.navigateEvent.skipPopState) {
          const popStateEvent = createPopStateEvent({
            state: this.navigateEvent.destination.getHistoryState()
          });
          this.window.dispatchEvent(popStateEvent);
        }
      }
      /** Implementation for a push or replace navigation. */
      userAgentPushOrReplace(destination, { navigationType }) {
        if (navigationType === "push") {
          this.currentEntryIndex++;
          this.prospectiveEntryIndex = this.currentEntryIndex;
        }
        const index = this.currentEntryIndex;
        const key = navigationType === "push" ? String(this.nextKey++) : this.currentEntry.key;
        const entry = new FakeNavigationHistoryEntry(destination.url, {
          id: String(this.nextId++),
          key,
          index,
          sameDocument: true,
          state: destination.getState(),
          historyState: destination.getHistoryState()
        });
        if (navigationType === "push") {
          this.entriesArr.splice(index, Infinity, entry);
        } else {
          this.entriesArr[index] = entry;
        }
      }
      /** Implementation for a traverse navigation. */
      userAgentTraverse(destination) {
        this.currentEntryIndex = destination.index;
      }
      /** Utility method for finding entries with the given `key`. */
      findEntry(key) {
        for (const entry of this.entriesArr) {
          if (entry.key === key)
            return entry;
        }
        return void 0;
      }
      set onnavigate(_handler) {
        throw new Error("unimplemented");
      }
      get onnavigate() {
        throw new Error("unimplemented");
      }
      set oncurrententrychange(_handler) {
        throw new Error("unimplemented");
      }
      get oncurrententrychange() {
        throw new Error("unimplemented");
      }
      set onnavigatesuccess(_handler) {
        throw new Error("unimplemented");
      }
      get onnavigatesuccess() {
        throw new Error("unimplemented");
      }
      set onnavigateerror(_handler) {
        throw new Error("unimplemented");
      }
      get onnavigateerror() {
        throw new Error("unimplemented");
      }
      get transition() {
        throw new Error("unimplemented");
      }
      updateCurrentEntry(_options) {
        throw new Error("unimplemented");
      }
      reload(_options) {
        throw new Error("unimplemented");
      }
    };
    FakeNavigationHistoryEntry = class {
      constructor(url, { id, key, index, sameDocument, state, historyState }) {
        this.url = url;
        this.ondispose = null;
        this.id = id;
        this.key = key;
        this.index = index;
        this.sameDocument = sameDocument;
        this.state = state;
        this.historyState = historyState;
      }
      getState() {
        return this.state ? JSON.parse(JSON.stringify(this.state)) : this.state;
      }
      getHistoryState() {
        return this.historyState ? JSON.parse(JSON.stringify(this.historyState)) : this.historyState;
      }
      addEventListener(type, callback, options) {
        throw new Error("unimplemented");
      }
      removeEventListener(type, callback, options) {
        throw new Error("unimplemented");
      }
      dispatchEvent(event) {
        throw new Error("unimplemented");
      }
    };
    FakeNavigationDestination = class {
      constructor({ url, sameDocument, historyState, state, key = null, id = null, index = -1 }) {
        this.url = url;
        this.sameDocument = sameDocument;
        this.state = state;
        this.historyState = historyState;
        this.key = key;
        this.id = id;
        this.index = index;
      }
      getState() {
        return this.state;
      }
      getHistoryState() {
        return this.historyState;
      }
    };
    InternalNavigationResult = class {
      get signal() {
        return this.abortController.signal;
      }
      constructor() {
        this.abortController = new AbortController();
        this.committed = new Promise((resolve, reject) => {
          this.committedResolve = resolve;
          this.committedReject = reject;
        });
        this.finished = new Promise((resolve, reject) => __async(this, null, function* () {
          this.finishedResolve = resolve;
          this.finishedReject = (reason) => {
            reject(reason);
            this.abortController.abort(reason);
          };
        }));
        this.committed.catch(() => {
        });
        this.finished.catch(() => {
        });
      }
    };
    urlParse = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    MOCK_PLATFORM_LOCATION_CONFIG = new InjectionToken("MOCK_PLATFORM_LOCATION_CONFIG");
    _MockPlatformLocation = class _MockPlatformLocation {
      constructor(config) {
        this.baseHref = "";
        this.hashUpdate = new Subject();
        this.popStateSubject = new Subject();
        this.urlChangeIndex = 0;
        this.urlChanges = [{ hostname: "", protocol: "", port: "", pathname: "/", search: "", hash: "", state: null }];
        if (config) {
          this.baseHref = config.appBaseHref || "";
          const parsedChanges = this.parseChanges(null, config.startUrl || "http://_empty_/", this.baseHref);
          this.urlChanges[0] = __spreadValues({}, parsedChanges);
        }
      }
      get hostname() {
        return this.urlChanges[this.urlChangeIndex].hostname;
      }
      get protocol() {
        return this.urlChanges[this.urlChangeIndex].protocol;
      }
      get port() {
        return this.urlChanges[this.urlChangeIndex].port;
      }
      get pathname() {
        return this.urlChanges[this.urlChangeIndex].pathname;
      }
      get search() {
        return this.urlChanges[this.urlChangeIndex].search;
      }
      get hash() {
        return this.urlChanges[this.urlChangeIndex].hash;
      }
      get state() {
        return this.urlChanges[this.urlChangeIndex].state;
      }
      getBaseHrefFromDOM() {
        return this.baseHref;
      }
      onPopState(fn) {
        const subscription = this.popStateSubject.subscribe(fn);
        return () => subscription.unsubscribe();
      }
      onHashChange(fn) {
        const subscription = this.hashUpdate.subscribe(fn);
        return () => subscription.unsubscribe();
      }
      get href() {
        let url = `${this.protocol}//${this.hostname}${this.port ? ":" + this.port : ""}`;
        url += `${this.pathname === "/" ? "" : this.pathname}${this.search}${this.hash}`;
        return url;
      }
      get url() {
        return `${this.pathname}${this.search}${this.hash}`;
      }
      parseChanges(state, url, baseHref = "") {
        state = JSON.parse(JSON.stringify(state));
        return __spreadProps(__spreadValues({}, parseUrl(url, baseHref)), { state });
      }
      replaceState(state, title, newUrl) {
        const { pathname, search, state: parsedState, hash } = this.parseChanges(state, newUrl);
        this.urlChanges[this.urlChangeIndex] = __spreadProps(__spreadValues({}, this.urlChanges[this.urlChangeIndex]), {
          pathname,
          search,
          hash,
          state: parsedState
        });
      }
      pushState(state, title, newUrl) {
        const { pathname, search, state: parsedState, hash } = this.parseChanges(state, newUrl);
        if (this.urlChangeIndex > 0) {
          this.urlChanges.splice(this.urlChangeIndex + 1);
        }
        this.urlChanges.push(__spreadProps(__spreadValues({}, this.urlChanges[this.urlChangeIndex]), {
          pathname,
          search,
          hash,
          state: parsedState
        }));
        this.urlChangeIndex = this.urlChanges.length - 1;
      }
      forward() {
        const oldUrl = this.url;
        const oldHash = this.hash;
        if (this.urlChangeIndex < this.urlChanges.length) {
          this.urlChangeIndex++;
        }
        this.emitEvents(oldHash, oldUrl);
      }
      back() {
        const oldUrl = this.url;
        const oldHash = this.hash;
        if (this.urlChangeIndex > 0) {
          this.urlChangeIndex--;
        }
        this.emitEvents(oldHash, oldUrl);
      }
      historyGo(relativePosition = 0) {
        const oldUrl = this.url;
        const oldHash = this.hash;
        const nextPageIndex = this.urlChangeIndex + relativePosition;
        if (nextPageIndex >= 0 && nextPageIndex < this.urlChanges.length) {
          this.urlChangeIndex = nextPageIndex;
        }
        this.emitEvents(oldHash, oldUrl);
      }
      getState() {
        return this.state;
      }
      /**
       * Browsers are inconsistent in when they fire events and perform the state updates
       * The most easiest thing to do in our mock is synchronous and that happens to match
       * Firefox and Chrome, at least somewhat closely
       *
       * https://github.com/WICG/navigation-api#watching-for-navigations
       * https://docs.google.com/document/d/1Pdve-DJ1JCGilj9Yqf5HxRJyBKSel5owgOvUJqTauwU/edit#heading=h.3ye4v71wsz94
       * popstate is always sent before hashchange:
       * https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#when_popstate_is_sent
       */
      emitEvents(oldHash, oldUrl) {
        this.popStateSubject.next({
          type: "popstate",
          state: this.getState(),
          oldUrl,
          newUrl: this.url
        });
        if (oldHash !== this.hash) {
          this.hashUpdate.next({
            type: "hashchange",
            state: null,
            oldUrl,
            newUrl: this.url
          });
        }
      }
    };
    _MockPlatformLocation.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _MockPlatformLocation, deps: [{ token: MOCK_PLATFORM_LOCATION_CONFIG, optional: true }], target: FactoryTarget.Injectable });
    _MockPlatformLocation.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _MockPlatformLocation });
    MockPlatformLocation = _MockPlatformLocation;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: MockPlatformLocation, decorators: [{
      type: Injectable
    }], ctorParameters: () => [{ type: void 0, decorators: [{
      type: Inject,
      args: [MOCK_PLATFORM_LOCATION_CONFIG]
    }, {
      type: Optional
    }] }] });
    _FakeNavigationPlatformLocation = class _FakeNavigationPlatformLocation {
      constructor() {
        this._platformNavigation = inject(PlatformNavigation);
        this.window = inject(DOCUMENT).defaultView;
        this.config = inject(MOCK_PLATFORM_LOCATION_CONFIG, { optional: true });
        if (!(this._platformNavigation instanceof FakeNavigation)) {
          throw new Error("FakePlatformNavigation cannot be used without FakeNavigation. Use `provideFakeNavigation` to have all these services provided together.");
        }
      }
      getBaseHrefFromDOM() {
        return this.config?.appBaseHref ?? "";
      }
      onPopState(fn) {
        this.window.addEventListener("popstate", fn);
        return () => this.window.removeEventListener("popstate", fn);
      }
      onHashChange(fn) {
        this.window.addEventListener("hashchange", fn);
        return () => this.window.removeEventListener("hashchange", fn);
      }
      get href() {
        return this._platformNavigation.currentEntry.url;
      }
      get protocol() {
        return new URL(this._platformNavigation.currentEntry.url).protocol;
      }
      get hostname() {
        return new URL(this._platformNavigation.currentEntry.url).hostname;
      }
      get port() {
        return new URL(this._platformNavigation.currentEntry.url).port;
      }
      get pathname() {
        return new URL(this._platformNavigation.currentEntry.url).pathname;
      }
      get search() {
        return new URL(this._platformNavigation.currentEntry.url).search;
      }
      get hash() {
        return new URL(this._platformNavigation.currentEntry.url).hash;
      }
      pushState(state, title, url) {
        this._platformNavigation.pushState(state, title, url);
      }
      replaceState(state, title, url) {
        this._platformNavigation.replaceState(state, title, url);
      }
      forward() {
        this._platformNavigation.forward();
      }
      back() {
        this._platformNavigation.back();
      }
      historyGo(relativePosition = 0) {
        this._platformNavigation.go(relativePosition);
      }
      getState() {
        return this._platformNavigation.currentEntry.getHistoryState();
      }
    };
    _FakeNavigationPlatformLocation.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _FakeNavigationPlatformLocation, deps: [], target: FactoryTarget.Injectable });
    _FakeNavigationPlatformLocation.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _FakeNavigationPlatformLocation });
    FakeNavigationPlatformLocation = _FakeNavigationPlatformLocation;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: FakeNavigationPlatformLocation, decorators: [{
      type: Injectable
    }], ctorParameters: () => [] });
    _SpyLocation = class _SpyLocation {
      constructor() {
        this.urlChanges = [];
        this._history = [new LocationState("", "", null)];
        this._historyIndex = 0;
        this._subject = new EventEmitter();
        this._basePath = "";
        this._locationStrategy = null;
        this._urlChangeListeners = [];
        this._urlChangeSubscription = null;
      }
      /** @nodoc */
      ngOnDestroy() {
        this._urlChangeSubscription?.unsubscribe();
        this._urlChangeListeners = [];
      }
      setInitialPath(url) {
        this._history[this._historyIndex].path = url;
      }
      setBaseHref(url) {
        this._basePath = url;
      }
      path() {
        return this._history[this._historyIndex].path;
      }
      getState() {
        return this._history[this._historyIndex].state;
      }
      isCurrentPathEqualTo(path, query = "") {
        const givenPath = path.endsWith("/") ? path.substring(0, path.length - 1) : path;
        const currPath = this.path().endsWith("/") ? this.path().substring(0, this.path().length - 1) : this.path();
        return currPath == givenPath + (query.length > 0 ? "?" + query : "");
      }
      simulateUrlPop(pathname) {
        this._subject.emit({ "url": pathname, "pop": true, "type": "popstate" });
      }
      simulateHashChange(pathname) {
        const path = this.prepareExternalUrl(pathname);
        this.pushHistory(path, "", null);
        this.urlChanges.push("hash: " + pathname);
        this._subject.emit({ "url": pathname, "pop": true, "type": "popstate" });
        this._subject.emit({ "url": pathname, "pop": true, "type": "hashchange" });
      }
      prepareExternalUrl(url) {
        if (url.length > 0 && !url.startsWith("/")) {
          url = "/" + url;
        }
        return this._basePath + url;
      }
      go(path, query = "", state = null) {
        path = this.prepareExternalUrl(path);
        this.pushHistory(path, query, state);
        const locationState = this._history[this._historyIndex - 1];
        if (locationState.path == path && locationState.query == query) {
          return;
        }
        const url = path + (query.length > 0 ? "?" + query : "");
        this.urlChanges.push(url);
        this._notifyUrlChangeListeners(path + normalizeQueryParams(query), state);
      }
      replaceState(path, query = "", state = null) {
        path = this.prepareExternalUrl(path);
        const history = this._history[this._historyIndex];
        history.state = state;
        if (history.path == path && history.query == query) {
          return;
        }
        history.path = path;
        history.query = query;
        const url = path + (query.length > 0 ? "?" + query : "");
        this.urlChanges.push("replace: " + url);
        this._notifyUrlChangeListeners(path + normalizeQueryParams(query), state);
      }
      forward() {
        if (this._historyIndex < this._history.length - 1) {
          this._historyIndex++;
          this._subject.emit({
            "url": this.path(),
            "state": this.getState(),
            "pop": true,
            "type": "popstate"
          });
        }
      }
      back() {
        if (this._historyIndex > 0) {
          this._historyIndex--;
          this._subject.emit({
            "url": this.path(),
            "state": this.getState(),
            "pop": true,
            "type": "popstate"
          });
        }
      }
      historyGo(relativePosition = 0) {
        const nextPageIndex = this._historyIndex + relativePosition;
        if (nextPageIndex >= 0 && nextPageIndex < this._history.length) {
          this._historyIndex = nextPageIndex;
          this._subject.emit({
            "url": this.path(),
            "state": this.getState(),
            "pop": true,
            "type": "popstate"
          });
        }
      }
      onUrlChange(fn) {
        this._urlChangeListeners.push(fn);
        this._urlChangeSubscription ??= this.subscribe((v) => {
          this._notifyUrlChangeListeners(v.url, v.state);
        });
        return () => {
          const fnIndex = this._urlChangeListeners.indexOf(fn);
          this._urlChangeListeners.splice(fnIndex, 1);
          if (this._urlChangeListeners.length === 0) {
            this._urlChangeSubscription?.unsubscribe();
            this._urlChangeSubscription = null;
          }
        };
      }
      /** @internal */
      _notifyUrlChangeListeners(url = "", state) {
        this._urlChangeListeners.forEach((fn) => fn(url, state));
      }
      subscribe(onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
      }
      normalize(url) {
        return null;
      }
      pushHistory(path, query, state) {
        if (this._historyIndex > 0) {
          this._history.splice(this._historyIndex + 1);
        }
        this._history.push(new LocationState(path, query, state));
        this._historyIndex = this._history.length - 1;
      }
    };
    _SpyLocation.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _SpyLocation, deps: [], target: FactoryTarget.Injectable });
    _SpyLocation.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _SpyLocation });
    SpyLocation = _SpyLocation;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: SpyLocation, decorators: [{
      type: Injectable
    }] });
    LocationState = class {
      constructor(path, query, state) {
        this.path = path;
        this.query = query;
        this.state = state;
      }
    };
    _MockLocationStrategy = class _MockLocationStrategy extends LocationStrategy {
      constructor() {
        super();
        this.internalBaseHref = "/";
        this.internalPath = "/";
        this.internalTitle = "";
        this.urlChanges = [];
        this._subject = new EventEmitter();
        this.stateChanges = [];
      }
      simulatePopState(url) {
        this.internalPath = url;
        this._subject.emit(new _MockPopStateEvent(this.path()));
      }
      path(includeHash = false) {
        return this.internalPath;
      }
      prepareExternalUrl(internal) {
        if (internal.startsWith("/") && this.internalBaseHref.endsWith("/")) {
          return this.internalBaseHref + internal.substring(1);
        }
        return this.internalBaseHref + internal;
      }
      pushState(ctx, title, path, query) {
        this.stateChanges.push(ctx);
        this.internalTitle = title;
        const url = path + (query.length > 0 ? "?" + query : "");
        this.internalPath = url;
        const externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push(externalUrl);
      }
      replaceState(ctx, title, path, query) {
        this.stateChanges[(this.stateChanges.length || 1) - 1] = ctx;
        this.internalTitle = title;
        const url = path + (query.length > 0 ? "?" + query : "");
        this.internalPath = url;
        const externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push("replace: " + externalUrl);
      }
      onPopState(fn) {
        this._subject.subscribe({ next: fn });
      }
      getBaseHref() {
        return this.internalBaseHref;
      }
      back() {
        if (this.urlChanges.length > 0) {
          this.urlChanges.pop();
          this.stateChanges.pop();
          const nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : "";
          this.simulatePopState(nextUrl);
        }
      }
      forward() {
        throw "not implemented";
      }
      getState() {
        return this.stateChanges[(this.stateChanges.length || 1) - 1];
      }
    };
    _MockLocationStrategy.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _MockLocationStrategy, deps: [], target: FactoryTarget.Injectable });
    _MockLocationStrategy.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _MockLocationStrategy });
    MockLocationStrategy = _MockLocationStrategy;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: MockLocationStrategy, decorators: [{
      type: Injectable
    }], ctorParameters: () => [] });
    _MockPopStateEvent = class {
      constructor(newUrl) {
        this.newUrl = newUrl;
        this.pop = true;
        this.type = "popstate";
      }
    };
  }
});

export {
  MockPlatformLocation,
  provideLocationMocks,
  init_testing
};
/*! Bundled license information:

@angular/common/fesm2022/testing.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-KWQS5OIJ.js.map
