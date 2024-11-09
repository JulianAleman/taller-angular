import {
  NoPreloading,
  ROUTER_CONFIGURATION,
  ROUTER_PROVIDERS,
  ROUTES,
  Router,
  RouterModule,
  RouterOutlet,
  afterNextNavigation,
  init_router,
  withPreloading
} from "./chunk-LYHWM3QZ.js";
import {
  init_testing as init_testing2,
  provideLocationMocks
} from "./chunk-KWQS5OIJ.js";
import {
  Component,
  FactoryTarget,
  Injectable,
  NgModule,
  TestBed,
  ViewChild,
  __decorate,
  core_exports,
  init_core,
  init_testing,
  init_tslib_es6,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-ZKDXROCG.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-K53ZK2UT.js";

// node_modules/@angular/router/fesm2022/testing.mjs
var _RouterTestingModule, RouterTestingModule, _RootFixtureService, RootFixtureService, _RootCmp, RootCmp, RouterTestingHarness;
var init_testing3 = __esm({
  "node_modules/@angular/router/fesm2022/testing.mjs"() {
    "use strict";
    init_testing2();
    init_core();
    init_core();
    init_router();
    init_testing();
    _RouterTestingModule = class _RouterTestingModule {
      static withRoutes(routes, config) {
        return {
          ngModule: _RouterTestingModule,
          providers: [
            { provide: ROUTES, multi: true, useValue: routes },
            { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} }
          ]
        };
      }
    };
    _RouterTestingModule.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _RouterTestingModule, deps: [], target: FactoryTarget.NgModule });
    _RouterTestingModule.\u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: core_exports, type: _RouterTestingModule, exports: [RouterModule] });
    _RouterTestingModule.\u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _RouterTestingModule, providers: [
      ROUTER_PROVIDERS,
      provideLocationMocks(),
      withPreloading(NoPreloading).\u0275providers,
      { provide: ROUTES, multi: true, useValue: [] }
    ], imports: [RouterModule] });
    RouterTestingModule = _RouterTestingModule;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: RouterTestingModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [RouterModule],
        providers: [
          ROUTER_PROVIDERS,
          provideLocationMocks(),
          withPreloading(NoPreloading).\u0275providers,
          { provide: ROUTES, multi: true, useValue: [] }
        ]
      }]
    }] });
    _RootFixtureService = class _RootFixtureService {
      createHarness() {
        if (this.harness) {
          throw new Error("Only one harness should be created per test.");
        }
        this.harness = new RouterTestingHarness(this.getRootFixture());
        return this.harness;
      }
      getRootFixture() {
        if (this.fixture !== void 0) {
          return this.fixture;
        }
        this.fixture = TestBed.createComponent(RootCmp);
        this.fixture.detectChanges();
        return this.fixture;
      }
    };
    _RootFixtureService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _RootFixtureService, deps: [], target: FactoryTarget.Injectable });
    _RootFixtureService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _RootFixtureService, providedIn: "root" });
    RootFixtureService = _RootFixtureService;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: RootFixtureService, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    _RootCmp = class _RootCmp {
    };
    _RootCmp.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: _RootCmp, deps: [], target: FactoryTarget.Component });
    _RootCmp.\u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: _RootCmp, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "outlet", first: true, predicate: RouterOutlet, descendants: true }], ngImport: core_exports, template: "<router-outlet></router-outlet>", isInline: true, dependencies: [{ kind: "directive", type: RouterOutlet, selector: "router-outlet", inputs: ["name"], outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
    RootCmp = _RootCmp;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: core_exports, type: RootCmp, decorators: [{
      type: Component,
      args: [{
        standalone: true,
        template: "<router-outlet></router-outlet>",
        imports: [RouterOutlet]
      }]
    }], propDecorators: { outlet: [{
      type: ViewChild,
      args: [RouterOutlet]
    }] } });
    RouterTestingHarness = class {
      /**
       * Creates a `RouterTestingHarness` instance.
       *
       * The `RouterTestingHarness` also creates its own root component with a `RouterOutlet` for the
       * purposes of rendering route components.
       *
       * Throws an error if an instance has already been created.
       * Use of this harness also requires `destroyAfterEach: true` in the `ModuleTeardownOptions`
       *
       * @param initialUrl The target of navigation to trigger before returning the harness.
       */
      static create(initialUrl) {
        return __async(this, null, function* () {
          const harness = TestBed.inject(RootFixtureService).createHarness();
          if (initialUrl !== void 0) {
            yield harness.navigateByUrl(initialUrl);
          }
          return harness;
        });
      }
      /** @internal */
      constructor(fixture) {
        this.fixture = fixture;
      }
      /** Instructs the root fixture to run change detection. */
      detectChanges() {
        this.fixture.detectChanges();
      }
      /** The `DebugElement` of the `RouterOutlet` component. `null` if the outlet is not activated. */
      get routeDebugElement() {
        const outlet = this.fixture.componentInstance.outlet;
        if (!outlet || !outlet.isActivated) {
          return null;
        }
        return this.fixture.debugElement.query((v) => v.componentInstance === outlet.component);
      }
      /** The native element of the `RouterOutlet` component. `null` if the outlet is not activated. */
      get routeNativeElement() {
        return this.routeDebugElement?.nativeElement ?? null;
      }
      navigateByUrl(url, requiredRoutedComponentType) {
        return __async(this, null, function* () {
          const router = TestBed.inject(Router);
          let resolveFn;
          const redirectTrackingPromise = new Promise((resolve) => {
            resolveFn = resolve;
          });
          afterNextNavigation(TestBed.inject(Router), resolveFn);
          yield router.navigateByUrl(url);
          yield redirectTrackingPromise;
          this.fixture.detectChanges();
          const outlet = this.fixture.componentInstance.outlet;
          if (outlet && outlet.isActivated && outlet.activatedRoute.component) {
            const activatedComponent = outlet.component;
            if (requiredRoutedComponentType !== void 0 && !(activatedComponent instanceof requiredRoutedComponentType)) {
              throw new Error(`Unexpected routed component type. Expected ${requiredRoutedComponentType.name} but got ${activatedComponent.constructor.name}`);
            }
            return activatedComponent;
          } else {
            if (requiredRoutedComponentType !== void 0) {
              throw new Error(`Unexpected routed component type. Expected ${requiredRoutedComponentType.name} but the navigation did not activate any component.`);
            }
            return null;
          }
        });
      }
    };
  }
});

// angular:jit:template:file:src\app\app.component.html
var app_component_default;
var init_app_component = __esm({
  "angular:jit:template:file:src\\app\\app.component.html"() {
    app_component_default = `<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r
<!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * -->\r
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r
<!-- * * * * * * * * * Delete the template below * * * * * * * * * -->\r
<!-- * * * * * * * to get started with your project! * * * * * * * -->\r
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r
\r
<style>\r
  :host {\r
    --bright-blue: oklch(51.01% 0.274 263.83);\r
    --electric-violet: oklch(53.18% 0.28 296.97);\r
    --french-violet: oklch(47.66% 0.246 305.88);\r
    --vivid-pink: oklch(69.02% 0.277 332.77);\r
    --hot-red: oklch(61.42% 0.238 15.34);\r
    --orange-red: oklch(63.32% 0.24 31.68);\r
\r
    --gray-900: oklch(19.37% 0.006 300.98);\r
    --gray-700: oklch(36.98% 0.014 302.71);\r
    --gray-400: oklch(70.9% 0.015 304.04);\r
\r
    --red-to-pink-to-purple-vertical-gradient: linear-gradient(\r
      180deg,\r
      var(--orange-red) 0%,\r
      var(--vivid-pink) 50%,\r
      var(--electric-violet) 100%\r
    );\r
\r
    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(\r
      90deg,\r
      var(--orange-red) 0%,\r
      var(--vivid-pink) 50%,\r
      var(--electric-violet) 100%\r
    );\r
\r
    --pill-accent: var(--bright-blue);\r
\r
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\r
      "Segoe UI Symbol";\r
    box-sizing: border-box;\r
    -webkit-font-smoothing: antialiased;\r
    -moz-osx-font-smoothing: grayscale;\r
  }\r
\r
  h1 {\r
    font-size: 3.125rem;\r
    color: var(--gray-900);\r
    font-weight: 500;\r
    line-height: 100%;\r
    letter-spacing: -0.125rem;\r
    margin: 0;\r
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\r
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\r
      "Segoe UI Symbol";\r
  }\r
\r
  p {\r
    margin: 0;\r
    color: var(--gray-700);\r
  }\r
\r
  main {\r
    width: 100%;\r
    min-height: 100%;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    padding: 1rem;\r
    box-sizing: inherit;\r
    position: relative;\r
  }\r
\r
  .angular-logo {\r
    max-width: 9.2rem;\r
  }\r
\r
  .content {\r
    display: flex;\r
    justify-content: space-around;\r
    width: 100%;\r
    max-width: 700px;\r
    margin-bottom: 3rem;\r
  }\r
\r
  .content h1 {\r
    margin-top: 1.75rem;\r
  }\r
\r
  .content p {\r
    margin-top: 1.5rem;\r
  }\r
\r
  .divider {\r
    width: 1px;\r
    background: var(--red-to-pink-to-purple-vertical-gradient);\r
    margin-inline: 0.5rem;\r
  }\r
\r
  .pill-group {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: start;\r
    flex-wrap: wrap;\r
    gap: 1.25rem;\r
  }\r
\r
  .pill {\r
    display: flex;\r
    align-items: center;\r
    --pill-accent: var(--bright-blue);\r
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);\r
    color: var(--pill-accent);\r
    padding-inline: 0.75rem;\r
    padding-block: 0.375rem;\r
    border-radius: 2.75rem;\r
    border: 0;\r
    transition: background 0.3s ease;\r
    font-family: var(--inter-font);\r
    font-size: 0.875rem;\r
    font-style: normal;\r
    font-weight: 500;\r
    line-height: 1.4rem;\r
    letter-spacing: -0.00875rem;\r
    text-decoration: none;\r
  }\r
\r
  .pill:hover {\r
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);\r
  }\r
\r
  .pill-group .pill:nth-child(6n + 1) {\r
    --pill-accent: var(--bright-blue);\r
  }\r
  .pill-group .pill:nth-child(6n + 2) {\r
    --pill-accent: var(--french-violet);\r
  }\r
  .pill-group .pill:nth-child(6n + 3),\r
  .pill-group .pill:nth-child(6n + 4),\r
  .pill-group .pill:nth-child(6n + 5) {\r
    --pill-accent: var(--hot-red);\r
  }\r
\r
  .pill-group svg {\r
    margin-inline-start: 0.25rem;\r
  }\r
\r
  .social-links {\r
    display: flex;\r
    align-items: center;\r
    gap: 0.73rem;\r
    margin-top: 1.5rem;\r
  }\r
\r
  .social-links path {\r
    transition: fill 0.3s ease;\r
    fill: var(--gray-400);\r
  }\r
\r
  .social-links a:hover svg path {\r
    fill: var(--gray-900);\r
  }\r
\r
  @media screen and (max-width: 650px) {\r
    .content {\r
      flex-direction: column;\r
      width: max-content;\r
    }\r
\r
    .divider {\r
      height: 1px;\r
      width: 100%;\r
      background: var(--red-to-pink-to-purple-horizontal-gradient);\r
      margin-block: 1.5rem;\r
    }\r
  }\r
</style>\r
\r
<main class="main">\r
  <div class="content">\r
    <div class="left-side">\r
      <svg\r
        xmlns="http://www.w3.org/2000/svg"\r
        viewBox="0 0 982 239"\r
        fill="none"\r
        class="angular-logo"\r
      >\r
        <g clip-path="url(#a)">\r
          <path\r
            fill="url(#b)"\r
            d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"\r
          />\r
          <path\r
            fill="url(#c)"\r
            d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"\r
          />\r
        </g>\r
        <defs>\r
          <radialGradient\r
            id="c"\r
            cx="0"\r
            cy="0"\r
            r="1"\r
            gradientTransform="rotate(118.122 171.182 60.81) scale(205.794)"\r
            gradientUnits="userSpaceOnUse"\r
          >\r
            <stop stop-color="#FF41F8" />\r
            <stop offset=".707" stop-color="#FF41F8" stop-opacity=".5" />\r
            <stop offset="1" stop-color="#FF41F8" stop-opacity="0" />\r
          </radialGradient>\r
          <linearGradient\r
            id="b"\r
            x1="0"\r
            x2="982"\r
            y1="192"\r
            y2="192"\r
            gradientUnits="userSpaceOnUse"\r
          >\r
            <stop stop-color="#F0060B" />\r
            <stop offset="0" stop-color="#F0070C" />\r
            <stop offset=".526" stop-color="#CC26D5" />\r
            <stop offset="1" stop-color="#7702FF" />\r
          </linearGradient>\r
          <clipPath id="a"><path fill="#fff" d="M0 0h982v239H0z" /></clipPath>\r
        </defs>\r
      </svg>\r
      <h1>Hello, {{ title }}</h1>\r
      <p>Congratulations! Your app is running. \u{1F389}</p>\r
    </div>\r
    <div class="divider" role="separator" aria-label="Divider"></div>\r
    <div class="right-side">\r
      <div class="pill-group">\r
        @for (item of [\r
          { title: 'Explore the Docs', link: 'https://angular.dev' },\r
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },\r
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },\r
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },\r
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },\r
        ]; track item.title) {\r
          <a\r
            class="pill"\r
            [href]="item.link"\r
            target="_blank"\r
            rel="noopener"\r
          >\r
            <span>{{ item.title }}</span>\r
            <svg\r
              xmlns="http://www.w3.org/2000/svg"\r
              height="14"\r
              viewBox="0 -960 960 960"\r
              width="14"\r
              fill="currentColor"\r
            >\r
              <path\r
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"\r
              />\r
            </svg>\r
          </a>\r
        }\r
      </div>\r
      <div class="social-links">\r
        <a\r
          href="https://github.com/angular/angular"\r
          aria-label="Github"\r
          target="_blank"\r
          rel="noopener"\r
        >\r
          <svg\r
            width="25"\r
            height="24"\r
            viewBox="0 0 25 24"\r
            fill="none"\r
            xmlns="http://www.w3.org/2000/svg"\r
            alt="Github"\r
          >\r
            <path\r
              d="M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"\r
            />\r
          </svg>\r
        </a>\r
        <a\r
          href="https://twitter.com/angular"\r
          aria-label="Twitter"\r
          target="_blank"\r
          rel="noopener"\r
        >\r
          <svg\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            xmlns="http://www.w3.org/2000/svg"\r
            alt="Twitter"\r
          >\r
            <path\r
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"\r
            />\r
          </svg>\r
        </a>\r
        <a\r
          href="https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw"\r
          aria-label="Youtube"\r
          target="_blank"\r
          rel="noopener"\r
        >\r
          <svg\r
            width="29"\r
            height="20"\r
            viewBox="0 0 29 20"\r
            fill="none"\r
            xmlns="http://www.w3.org/2000/svg"\r
            alt="Youtube"\r
          >\r
            <path\r
              fill-rule="evenodd"\r
              clip-rule="evenodd"\r
              d="M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"\r
            />\r
          </svg>\r
        </a>\r
      </div>\r
    </div>\r
  </div>\r
</main>\r
\r
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * * The content above * * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * End of Placeholder  * * * * * * * * * * * * -->\r
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r
\r
\r
<router-outlet />\r
`;
  }
});

// angular:jit:style:file:src\app\app.component.scss
var app_component_default2;
var init_app_component2 = __esm({
  "angular:jit:style:file:src\\app\\app.component.scss"() {
    app_component_default2 = "/* src/app/app.component.scss */\n/*# sourceMappingURL=app.component.css.map */\n";
  }
});

// src/app/app.component.ts
var AppComponent;
var init_app_component3 = __esm({
  "src/app/app.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_app_component();
    init_app_component2();
    init_core();
    AppComponent = class AppComponent2 {
      constructor() {
        this.title = "front";
      }
    };
    AppComponent = __decorate([
      Component({
        selector: "app-root",
        template: app_component_default,
        styles: [app_component_default2]
      })
    ], AppComponent);
  }
});

// src/app/app.component.spec.ts
var require_app_component_spec = __commonJS({
  "src/app/app.component.spec.ts"(exports) {
    init_testing();
    init_testing3();
    init_app_component3();
    describe("AppComponent", () => {
      beforeEach(() => __async(exports, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [
            RouterTestingModule
          ],
          declarations: [
            AppComponent
          ]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it(`should have as title 'front'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("front");
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, front");
      });
    });
  }
});
export default require_app_component_spec();
/*! Bundled license information:

@angular/router/fesm2022/testing.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=app.component.spec.js.map
