import {
  MockPlatformLocation,
  init_testing as init_testing2
} from "./chunk-KWQS5OIJ.js";
import {
  APP_ID,
  BrowserDomAdapter,
  BrowserModule,
  COMPILER_OPTIONS,
  Compiler,
  CompilerConfig,
  CompilerFactory,
  DOCUMENT,
  FactoryTarget,
  INTERNAL_BROWSER_PLATFORM_PROVIDERS,
  Inject,
  Injectable,
  Injector,
  NgModule,
  PLATFORM_BROWSER_ID,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PlatformLocation,
  ResourceLoader,
  TestComponentRenderer,
  Version,
  ViewEncapsulation$1,
  core_exports,
  createPlatformFactory,
  getDOM,
  getTestBed,
  init_common,
  init_compiler,
  init_core,
  init_platform_browser,
  init_testing,
  platformCore,
  provideZoneChangeDetection,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-ZKDXROCG.js";
import {
  __async,
  __spreadValues
} from "./chunk-K53ZK2UT.js";

// node_modules/@angular-devkit/build-angular/src/builders/web-test-runner/jasmine_runner.js
init_testing();

// node_modules/@angular/platform-browser-dynamic/fesm2022/testing.mjs
init_core();
init_core();
init_testing();

// node_modules/@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs
init_compiler();
init_core();
init_core();
init_common();
init_platform_browser();
var COMPILER_PROVIDERS = [{ provide: Compiler, useFactory: () => new Compiler() }];
var JitCompilerFactory = class {
  /** @internal */
  constructor(defaultOptions) {
    const compilerOptions = {
      defaultEncapsulation: ViewEncapsulation$1.Emulated
    };
    this._defaultOptions = [compilerOptions, ...defaultOptions];
  }
  createCompiler(options = []) {
    const opts = _mergeOptions(this._defaultOptions.concat(options));
    const injector = Injector.create({
      providers: [
        COMPILER_PROVIDERS,
        {
          provide: CompilerConfig,
          useFactory: () => {
            return new CompilerConfig({
              defaultEncapsulation: opts.defaultEncapsulation,
              preserveWhitespaces: opts.preserveWhitespaces
            });
          },
          deps: []
        },
        opts.providers
      ]
    });
    return injector.get(Compiler);
  }
};
function _mergeOptions(optionsArr) {
  return {
    defaultEncapsulation: _lastDefined(optionsArr.map((options) => options.defaultEncapsulation)),
    providers: _mergeArrays(optionsArr.map((options) => options.providers)),
    preserveWhitespaces: _lastDefined(optionsArr.map((options) => options.preserveWhitespaces))
  };
}
function _lastDefined(args) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (args[i] !== void 0) {
      return args[i];
    }
  }
  return void 0;
}
function _mergeArrays(parts) {
  const result = [];
  parts.forEach((part) => part && result.push(...part));
  return result;
}
var platformCoreDynamic = createPlatformFactory(platformCore, "coreDynamic", [
  { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
  { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] }
]);
var _ResourceLoaderImpl = class _ResourceLoaderImpl extends ResourceLoader {
  get(url) {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "text";
    xhr.onload = function() {
      const response = xhr.response;
      let status = xhr.status;
      if (status === 0) {
        status = response ? 200 : 0;
      }
      if (200 <= status && status <= 300) {
        resolve(response);
      } else {
        reject(`Failed to load ${url}`);
      }
    };
    xhr.onerror = function() {
      reject(`Failed to load ${url}`);
    };
    xhr.send();
    return promise;
  }
};
_ResourceLoaderImpl.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _ResourceLoaderImpl, deps: null, target: FactoryTarget.Injectable });
_ResourceLoaderImpl.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _ResourceLoaderImpl });
var ResourceLoaderImpl = _ResourceLoaderImpl;
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: ResourceLoaderImpl, decorators: [{
  type: Injectable
}] });
var INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
  INTERNAL_BROWSER_PLATFORM_PROVIDERS,
  {
    provide: COMPILER_OPTIONS,
    useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] },
    multi: true
  },
  { provide: PLATFORM_ID, useValue: PLATFORM_BROWSER_ID }
];
var VERSION = new Version("17.3.12");
var platformBrowserDynamic = createPlatformFactory(platformCoreDynamic, "browserDynamic", INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);

// node_modules/@angular/platform-browser/fesm2022/testing.mjs
init_common();
init_testing2();
init_core();
init_core();
init_platform_browser();
function initBrowserTests() {
  BrowserDomAdapter.makeCurrent();
}
var _TEST_BROWSER_PLATFORM_PROVIDERS = [{ provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }];
var platformBrowserTesting = createPlatformFactory(platformCore, "browserTesting", _TEST_BROWSER_PLATFORM_PROVIDERS);
var _BrowserTestingModule = class _BrowserTestingModule {
};
_BrowserTestingModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _BrowserTestingModule, deps: [], target: FactoryTarget.NgModule });
_BrowserTestingModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: core_exports, type: _BrowserTestingModule, exports: [BrowserModule] });
_BrowserTestingModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _BrowserTestingModule, providers: [
  { provide: APP_ID, useValue: "a" },
  provideZoneChangeDetection(),
  { provide: PlatformLocation, useClass: MockPlatformLocation }
], imports: [BrowserModule] });
var BrowserTestingModule = _BrowserTestingModule;
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: BrowserTestingModule, decorators: [{
  type: NgModule,
  args: [{
    exports: [BrowserModule],
    providers: [
      { provide: APP_ID, useValue: "a" },
      provideZoneChangeDetection(),
      { provide: PlatformLocation, useClass: MockPlatformLocation }
    ]
  }]
}] });

// node_modules/@angular/platform-browser-dynamic/fesm2022/testing.mjs
init_common();
var _DOMTestComponentRenderer = class _DOMTestComponentRenderer extends TestComponentRenderer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  insertRootElement(rootElId) {
    this.removeAllRootElements();
    const rootElement = getDOM().getDefaultDocument().createElement("div");
    rootElement.setAttribute("id", rootElId);
    this._doc.body.appendChild(rootElement);
  }
  removeAllRootElements() {
    const oldRoots = this._doc.querySelectorAll("[id^=root]");
    for (let i = 0; i < oldRoots.length; i++) {
      getDOM().remove(oldRoots[i]);
    }
  }
};
_DOMTestComponentRenderer.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _DOMTestComponentRenderer, deps: [{ token: DOCUMENT }], target: FactoryTarget.Injectable });
_DOMTestComponentRenderer.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _DOMTestComponentRenderer });
var DOMTestComponentRenderer = _DOMTestComponentRenderer;
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: DOMTestComponentRenderer, decorators: [{
  type: Injectable
}], ctorParameters: () => [{ type: void 0, decorators: [{
  type: Inject,
  args: [DOCUMENT]
}] }] });
var platformCoreDynamicTesting = createPlatformFactory(platformCoreDynamic, "coreDynamicTesting", []);
var platformBrowserDynamicTesting = createPlatformFactory(platformCoreDynamicTesting, "browserDynamicTesting", INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS);
var _BrowserDynamicTestingModule = class _BrowserDynamicTestingModule {
};
_BrowserDynamicTestingModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _BrowserDynamicTestingModule, deps: [], target: FactoryTarget.NgModule });
_BrowserDynamicTestingModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: core_exports, type: _BrowserDynamicTestingModule, exports: [BrowserTestingModule] });
_BrowserDynamicTestingModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _BrowserDynamicTestingModule, providers: [
  { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }
], imports: [BrowserTestingModule] });
var BrowserDynamicTestingModule = _BrowserDynamicTestingModule;
\u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: BrowserDynamicTestingModule, decorators: [{
  type: NgModule,
  args: [{
    exports: [BrowserTestingModule],
    providers: [
      { provide: TestComponentRenderer, useClass: DOMTestComponentRenderer }
    ]
  }]
}] });

// node_modules/@angular-devkit/build-angular/src/builders/web-test-runner/jasmine_runner.js
import {
  getConfig,
  sessionFailed,
  sessionFinished,
  sessionStarted
} from "@web/test-runner-core/browser/session.js";
function runJasmineTests(jasmineEnv) {
  return __async(this, null, function* () {
    const allSpecs = [];
    const failedSpecs = [];
    jasmineEnv.addReporter({
      specDone(result) {
        const expectations = [...result.passedExpectations, ...result.failedExpectations];
        allSpecs.push(...expectations.map((e) => ({ name: e.fullName, passed: e.passed })));
        for (const e of result.failedExpectations) {
          const message = `${result.fullName}
${e.message}
${e.stack}`;
          console.error(message);
          failedSpecs.push({
            message,
            name: e.fullName,
            stack: e.stack,
            expected: e.expected,
            actual: e.actual
          });
        }
      },
      jasmineDone(result) {
        return __async(this, null, function* () {
          console.log(`Tests ${result.overallStatus}!`);
          yield sessionFinished({
            passed: result.overallStatus === "passed",
            errors: failedSpecs,
            testResults: {
              name: "",
              suites: [],
              tests: allSpecs
            }
          });
        });
      }
    });
    yield sessionStarted();
    const { testFile, testFrameworkConfig } = yield getConfig();
    const config = __spreadValues({ defaultTimeoutInterval: 6e4 }, testFrameworkConfig ?? {});
    jasmine.DEFAULT_TIMEOUT_INTERVAL = config.defaultTimeoutInterval;
    getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
      errorOnUnknownElements: true,
      errorOnUnknownProperties: true
    });
    try {
      yield import(new URL(testFile, document.baseURI).href);
      jasmineEnv.execute();
    } catch (err) {
      console.error(err);
      yield sessionFailed(err);
    }
  });
}
export {
  runJasmineTests
};
/*! Bundled license information:

@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/testing.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser-dynamic/fesm2022/testing.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular-devkit/build-angular/src/builders/web-test-runner/jasmine_runner.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=jasmine_runner.js.map
