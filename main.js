(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/corporate/corporate.component */ "./src/app/components/corporate/corporate.component.ts");
/* harmony import */ var _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/group-compaines/group-compaines.component */ "./src/app/components/group-compaines/group-compaines.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/compaines-detail/compaines-detail.component */ "./src/app/components/compaines-detail/compaines-detail.component.ts");
/* harmony import */ var _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/catalogs/catalogs.component */ "./src/app/components/catalogs/catalogs.component.ts");











var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], data: { showFooter: false, showInHome: true } },
    { path: 'Kurumsal', component: _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_5__["CorporateComponent"] },
    { path: 'Sirketlerimiz', component: _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_6__["GroupCompainesComponent"] },
    { path: 'iletisim', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'Sirket-Detay:id', component: _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_9__["CompainesDetailComponent"] },
    { path: 'Katalog', component: _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_10__["CatalogsComponent"] },
    { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"], data: { showHeader: false, showFooter: false } },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"global.showFooter$ | async\"></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _global_route_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-route-config */ "./src/app/global-route-config.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, global, globalRouteConfig) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.global = global;
        this.globalRouteConfig = globalRouteConfig;
        this.defaultShowFooter = true;
        this.defaultShowInHome = false;
        this.showHideComponet_Fnc();
        this.router.config = this.globalRouteConfig.routesConfigs[_globals__WEBPACK_IMPORTED_MODULE_4__["appLanguage"]];
    }
    AppComponent.prototype.showHideComponet_Fnc = function () {
        var _this = this;
        this.global.showFooter$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.hasOwnProperty('showFooter') ? data.showFooter : _this.defaultShowFooter; }));
        this.global.showInHome$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.hasOwnProperty('showInHome') ? data.showInHome : _this.defaultShowInHome; }));
        this.global.showHeader$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.hasOwnProperty('showHeader') ? data.showHeader : true; }));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _globals__WEBPACK_IMPORTED_MODULE_4__["Globals"],
            _global_route_config__WEBPACK_IMPORTED_MODULE_5__["GlobalRouteConfig"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/corporate/corporate.component */ "./src/app/components/corporate/corporate.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _global_route_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global-route-config */ "./src/app/global-route-config.ts");
/* harmony import */ var _components_topheader_topheader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/topheader/topheader.component */ "./src/app/components/topheader/topheader.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/compaines-detail/compaines-detail.component */ "./src/app/components/compaines-detail/compaines-detail.component.ts");
/* harmony import */ var _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/group-compaines/group-compaines.component */ "./src/app/components/group-compaines/group-compaines.component.ts");
/* harmony import */ var _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/catalogs/catalogs.component */ "./src/app/components/catalogs/catalogs.component.ts");























function setupTranslateFactory(service) {
    return function () { return service.use(_globals__WEBPACK_IMPORTED_MODULE_11__["appLanguage"]); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_7__["CorporateComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"],
                _components_topheader_topheader_component__WEBPACK_IMPORTED_MODULE_13__["TopheaderComponent"],
                _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"],
                _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_20__["CompainesDetailComponent"],
                _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_21__["GroupCompainesComponent"],
                _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_22__["CatalogsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [_globals__WEBPACK_IMPORTED_MODULE_11__["Globals"], _global_route_config__WEBPACK_IMPORTED_MODULE_12__["GlobalRouteConfig"], {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_18__["TranslateService"]],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/catalogs/catalogs.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/catalogs/catalogs.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".catalog-compaine {\r\n    border: 1px solid rgba(0, 0, 0, 0.07);\r\n    border-radius: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.catalog-compaine img {\r\n    width: 100%;\r\n    border-radius: 20px;\r\n}\r\n\r\n.catalog-compaine .catalog-content{\r\n    padding:10px 0 0px 8px;\r\n}\r\n\r\n.catalog-compaine .catalog-links a{\r\ndisplay: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRhbG9ncy9jYXRhbG9ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtBQUNBLGNBQWM7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0YWxvZ3MvY2F0YWxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRhbG9nLWNvbXBhaW5lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhdGFsb2ctY29tcGFpbmUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uY2F0YWxvZy1jb21wYWluZSAuY2F0YWxvZy1jb250ZW50e1xyXG4gICAgcGFkZGluZzoxMHB4IDAgMHB4IDhweDtcclxufVxyXG4uY2F0YWxvZy1jb21wYWluZSAuY2F0YWxvZy1saW5rcyBhe1xyXG5kaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/catalogs/catalogs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/catalogs/catalogs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section padding md-padding\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"section-header text-center\">\n                    <h2 class=\"title\">{{'eCatalogName'|translate}}</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"catalogs\">\n                        <div class=\"col-sm-3 mb-10\" *ngFor=\"let catalogInfo of 'catalog-compaine' | translate\">\n                            <div class=\"catalog-compaine\">\n                                <img src=\"{{catalogInfo.imgUrl}}\" />\n                                <div class=\"catalog-content\">\n                                    <h4>{{catalogInfo.compaineName}}</h4>\n                                    <div class=\"catalog-links\">\n                                        <span *ngIf=\"catalogInfo.catalogs.length == 0\">{{'to-Be-Added'|translate}}&nbsp;</span>\n                                        <a href=\"{{catalog.link}}\" target=\"_blank\" *ngFor=\"let catalog of catalogInfo.catalogs \"><i class=\"fa fa-bookmark\"></i> {{catalog.text}}</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/catalogs/catalogs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/catalogs/catalogs.component.ts ***!
  \***********************************************************/
/*! exports provided: CatalogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogsComponent", function() { return CatalogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CatalogsComponent = /** @class */ (function () {
    function CatalogsComponent() {
    }
    CatalogsComponent.prototype.ngOnInit = function () {
    };
    CatalogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalogs',
            template: __webpack_require__(/*! ./catalogs.component.html */ "./src/app/components/catalogs/catalogs.component.html"),
            styles: [__webpack_require__(/*! ./catalogs.component.css */ "./src/app/components/catalogs/catalogs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CatalogsComponent);
    return CatalogsComponent;
}());



/***/ }),

/***/ "./src/app/components/compaines-detail/compaines-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/compaines-detail/compaines-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFpbmVzLWRldGFpbC9jb21wYWluZXMtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/compaines-detail/compaines-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/compaines-detail/compaines-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Numbers -->\n<div id=\"numbers\" class=\"section sm-padding\">\n\n    <!-- Background Image -->\n    <div class=\"bg-img\" style=\"background-image: url('./assets/img/background2.jpg');\">\n        <div class=\"overlay\"></div>\n    </div>\n    <!-- /Background Image -->\n\n    <!-- Container -->\n    <div class=\"container\">\n\n        <!-- Row -->\n        <div class=\"row\">\n\n            <!-- number -->\n            <div class=\"col-sm-12\">\n                <div class=\"number\">\n                    <h3 class=\"white-text\"><span class=\"counter\">{{compaineInfo.name}}</span></h3>\n                    <span class=\"white-text\">{{compaineInfo.shortText}}</span>\n                </div>\n            </div>\n            <!-- /number -->\n\n        </div>\n        <!-- /Row -->\n\n    </div>\n    <!-- /Container -->\n\n</div>\n<!-- /Numbers -->\n<!-- Why Choose Us -->\n<div id=\"features\" class=\"section md-padding bg-grey\">\n\n    <!-- Container -->\n    <div class=\"container\">\n\n        <!-- Row -->\n        <div class=\"row\">\n\n            <!-- why choose us content -->\n            <div class=\"col-md-6 mb-20\">\n                <div class=\"section-header\">\n                    <h2 class=\"title\">{{compaineInfo.shortText}}</h2>\n                </div>\n                <div innerHtml=\"{{compaineDetail.htmlText}}\">\n                </div>\n            </div>\n            <!-- /why choose us content -->\n\n            <!-- Compaine Detail slider -->\n            <div class=\"col-md-6\">\n                <owl-carousel-o [options]=\"carouselOptions\">\n                    <ng-container *ngFor=\"let image of compaineDetail.images\" id=\"about-slider\">\n                        <ng-template [ngClass]=\"item\" carouselSlide>\n                            <img [src]=\"image\" [alt]=\"compaineInfo.name\" [title]=\"compaineInfo.shortText\">\n                        </ng-template>\n                    </ng-container>\n                </owl-carousel-o>\n            </div>\n\n            <!-- /Compaine Detail slider -->\n\n        </div>\n        <!-- /Row -->\n\n    </div>\n    <!-- /Container -->\n\n</div>\n<!-- /Why Choose Us -->"

/***/ }),

/***/ "./src/app/components/compaines-detail/compaines-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/compaines-detail/compaines-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompainesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompainesDetailComponent", function() { return CompainesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");




var CompainesDetailComponent = /** @class */ (function () {
    function CompainesDetailComponent(route, globals) {
        this.route = route;
        this.globals = globals;
        this.carouselOptions = {
            margin: 0,
            items: 1,
            nav: true,
            dots: false,
            stagePadding: 0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            /* animateIn: 'rotateInDownLeft',
            animateOut: 'rotateOutDownLeft', */
            mouseDrag: true,
        };
    }
    CompainesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.compaineDetail = _this.globals.compaineDetail.filter(function (a) { return a.id === _this.id; }).shift();
            _this.compaineInfo = _this.globals.compaine.filter(function (a) { return a.id === _this.id; }).shift();
        });
    };
    CompainesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compaines-detail',
            template: __webpack_require__(/*! ./compaines-detail.component.html */ "./src/app/components/compaines-detail/compaines-detail.component.html"),
            styles: [__webpack_require__(/*! ./compaines-detail.component.css */ "./src/app/components/compaines-detail/compaines-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], CompainesDetailComponent);
    return CompainesDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact {\r\n    text-align: left;\r\n    margin: 0;\r\n}\r\n\r\n.contact h5 {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.contact p {\r\n    max-width: 332px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhY3QgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uY29udGFjdCBwIHtcclxuICAgIG1heC13aWR0aDogMzMycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact -->\n<div id=\"contact\" class=\"section md-padding\">\n\n    <!-- Container -->\n    <div class=\"container\">\n\n        <div class=\"row mb-60\">\n            <!-- Section-header -->\n            <div class=\"section-header text-center\">\n                <h2 class=\"title\">{{'contactMapTitle'|translate}}</h2>\n            </div>\n            <!-- /Section-header -->\n            <div class=\"col-sm-7\">\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910255.8699284991!2d33.03857395870756!3d39.55564863363954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34eac49633169%3A0xb26a083793350687!2sDevasa+Media!5e0!3m2!1str!2str!4v1560676127121!5m2!1str!2str\"\n                    height=\"380\" width=\"100%\" style=\"border: 4px solid rgba(65, 64, 66, 0.15);\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n            <div class=\"col-sm-5 mt-10\">\n                <div class=\"text-center\">\n                    <h3 class=\"title\">{{'footer-TurkeyOfficeAddress'|translate}}</h3>\n                </div>\n                <div class=\"contact\">\n                    <h5><i class=\"fa fa-map-marker\"></i> {{'address'|translate}}</h5>\n                    <p>{{'addressInfo'|translate}}</p>\n                </div>\n                <div class=\"contact\">\n                    <h5><i class=\"fa fa-envelope\"></i> {{'email'|translate}}</h5>\n                    <p>info@devasamedia.com</p>\n                </div>\n                <div class=\"contact\">\n                    <h5><i class=\"fa fa-phone\"></i> {{'phone'|translate}}</h5>\n                    <p>0 (312) 425 8280</p>\n                </div>\n\n            </div>\n        </div>\n        <!-- Row -->\n\n        <!-- Row -->\n        <div class=\"row mb-60\">\n\n            <div class=\"col-sm-7\">\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7967.3104524478895!2d101.693106!3d3.185051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc480f24794589%3A0xd01c6495018501e5!2s23%2C+Jalan+15%2F48a%2C+Sentul+Raya+Boulevard%2C+51000+Kuala+Lumpur%2C+Wilayah+Persekutuan+Kuala+Lumpur%2C+Malezya!5e0!3m2!1str!2str!4v1563893710101!5m2!1str!2str\"\n                    height=\"400\" width=\"100%\" style=\"border: 4px solid rgba(65, 64, 66, 0.15);\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n            <div class=\"col-sm-5 mt-10\">\n                <div class=\"text-center\">\n                    <h3 class=\"title\">{{'footer-MalesiaOfficeAddress'|translate}}</h3>\n                </div>\n                <div class=\"contact\">\n                    <h5><i class=\"fa fa-map-marker\"></i> {{'address'|translate}}</h5>\n                    <p>23, Jalan 15/48a, Sentul Raya Boulevard, 51000 Wilayah Persekutuan Kuala Lumpur, Malezya</p>\n                </div>\n                <div class=\"contact\">\n                    <h5><i class=\"fa fa-fax\"></i> {{'fax'|translate}} <i class=\"fa fa-phone\"></i> {{'phone'|translate}}</h5>\n                    <p>+6 03 4043 2925</p>\n                </div>\n                <div class=\"contact\">\n                    <h5><i class=\"fa fa-mobile\"></i> {{'footer-OfficeGsm'|translate}}</h5>\n                    <p>+6 012 211 9812</p>\n                </div>\n\n            </div>\n        </div>\n        <!-- Row -->\n        <!--  <div class=\"row\">\n\n            <div class=\"section-header text-center\">\n                <h2 class=\"title\">{{'contactTitle'|translate}}</h2>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"contact\">\n                    <i class=\"fa fa-phone\"></i>\n                    <h3>{{'phone'|translate}}</h3>\n                    <p>0 (312) 425 8280</p>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"contact\">\n                    <i class=\"fa fa-envelope\"></i>\n                    <h3>{{'email'|translate}}</h3>\n                    <p>info@devasamedia.com</p>\n                </div>\n            </div>\n\n            <div class=\"col-sm-4\">\n                <div class=\"contact\">\n                    <i class=\"fa fa-map-marker\"></i>\n                    <h3>{{'address'|translate}}</h3>\n                    <p>{{'addressInfo'|translate}}</p>\n                </div>\n            </div>\n\n        </div> -->\n        <!-- /Row -->\n        <!-- contact form -->\n        <!-- <div class=\"col-md-8 col-md-offset-2\">\n                <form class=\"contact-form\">\n                    <input type=\"text\" class=\"input\" placeholder=\"{{'formName'|translate}}\">\n                    <input type=\"email\" class=\"input\" placeholder=\"{{'formEmail'|translate}}\">\n                    <input type=\"text\" class=\"input\" placeholder=\"{{'formSubject'|translate}}\">\n                    <textarea class=\"input\" placeholder=\"{{'formMessage'|translate}}\"></textarea>\n                    <button class=\"main-btn\">{{'formButton'|translate}}</button>\n                </form>\n            </div> -->\n        <!-- /contact form -->\n\n    </div>\n    <!-- /Container -->\n\n</div>\n<!-- /Contact -->"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.loading = false;
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.buttonText = "Gönder";
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.nameFormControl;
    };
    ContactComponent.prototype.REGİSTER = function () {
        this.loading = true;
        this.buttonText = "Gönderiliyor";
        var user = {
            name: this.nameFormControl.value,
            email: this.emailFormControl.value
        };
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/corporate/corporate.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/corporate/corporate.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29ycG9yYXRlL2NvcnBvcmF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/corporate/corporate.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/corporate/corporate.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- About -->\n<div id=\"about\" class=\"section md-padding\">\n\n    <!-- Container -->\n    <div class=\"container\">\n\n        <!-- Row -->\n        <div class=\"row\">\n\n            <!-- Section header -->\n            <!-- <div class=\"section-header\">\n                <h3 class=\"title\"></h3>\n            </div> -->\n            <!-- /Section header -->\n            <div class=\"col-md-12\">\n                <div [innerHTML]=\"'corporate' | translate\"></div>\n            </div>\n        </div>\n        <!-- /Row -->\n\n    </div>\n    <!-- /Container -->\n\n</div>\n<!-- /About -->"

/***/ }),

/***/ "./src/app/components/corporate/corporate.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/corporate/corporate.component.ts ***!
  \*************************************************************/
/*! exports provided: CorporateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateComponent", function() { return CorporateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CorporateComponent = /** @class */ (function () {
    function CorporateComponent() {
    }
    CorporateComponent.prototype.ngOnInit = function () {
    };
    CorporateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-corporate',
            template: __webpack_require__(/*! ./corporate.component.html */ "./src/app/components/corporate/corporate.component.html"),
            styles: [__webpack_require__(/*! ./corporate.component.css */ "./src/app/components/corporate/corporate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CorporateComponent);
    return CorporateComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fast-links {\r\n    /* list-style: disc; */\r\n    text-transform: uppercase;\r\n    /*    list-style-position: inside; */\r\n}\r\n\r\n.fast-links li {\r\n    transition: all 0.3s ease;\r\n    font-size: 14px;\r\n}\r\n\r\n.fast-links li:hover {\r\n    padding-left: 5px;\r\n}\r\n\r\n.fast-links li>a {\r\n    padding: 3px 2px 3px 0px;\r\n    display: block;\r\n    color: rgb(180, 180, 180);\r\n}\r\n\r\n.fast-links li>a:hover {\r\n    /* background-color: #494949; */\r\n    color: #fff;\r\n}\r\n\r\n.fast-links li>a::after {\r\n    content: \"\";\r\n    display: block;\r\n    background-color: #ffffff;\r\n    height: 2px;\r\n    width: 0%;\r\n    transition: 0.5s width;\r\n}\r\n\r\n.fast-links li>a:hover::after {\r\n    width: 100%;\r\n}\r\n\r\n.widget {}\r\n\r\n.widget .subtitle {\r\n    color: #fff;\r\n    padding-bottom: 10px;\r\n    padding-left: 1px;\r\n    border-bottom: 2px solid rgba(255, 2555, 255, 0.04);\r\n    margin: 0 0 25px 0;\r\n    position: relative;\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    line-height: 1.5;\r\n    font-weight: 700;\r\n    text-align: left;\r\n}\r\n\r\n.widget .title {\r\n    color: #fff;\r\n}\r\n\r\n.widget .footer-address h5 {\r\n    color: white;\r\n}\r\n\r\n.widget .footer-address strong {\r\n    color: white;\r\n    float: left;\r\n}\r\n\r\n.widget .footer-text {\r\n    font-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsU0FBUzs7QUFFVDtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1EQUFtRDtJQUNuRCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXN0LWxpbmtzIHtcclxuICAgIC8qIGxpc3Qtc3R5bGU6IGRpc2M7ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLyogICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlOyAqL1xyXG59XHJcblxyXG4uZmFzdC1saW5rcyBsaSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmFzdC1saW5rcyBsaTpob3ZlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmZhc3QtbGlua3MgbGk+YSB7XHJcbiAgICBwYWRkaW5nOiAzcHggMnB4IDNweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbn1cclxuXHJcbi5mYXN0LWxpbmtzIGxpPmE6aG92ZXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZmFzdC1saW5rcyBsaT5hOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIHdpZHRoO1xyXG59XHJcblxyXG4uZmFzdC1saW5rcyBsaT5hOmhvdmVyOjphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndpZGdldCB7fVxyXG5cclxuLndpZGdldCAuc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTU1LCAyNTUsIDAuMDQpO1xyXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLndpZGdldCAudGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi53aWRnZXQgLmZvb3Rlci1hZGRyZXNzIGg1IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndpZGdldCAuZm9vdGVyLWFkZHJlc3Mgc3Ryb25nIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ud2lkZ2V0IC5mb290ZXItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer id=\"footer\" class=\"sm-padding bg-dark\">\n\n    <!-- Container -->\n    <div class=\"container\">\n\n        <!-- Row -->\n        <div class=\"row mb-20\">\n            <div class=\"col-md-3\">\n                <div class=\"widget\">\n                    <h4 class=\"title\">{{'footer-Corporate'|translate}}</h4>\n                    <div class=\"footer-text-image mb-10\">\n                        <a routerlink=\"\"><img src=\"./assets/img/logo-footer.png\" alt=\"logo\"></a>\n                    </div>\n                    <div class=\"footer-text\">\n                        <p>\n                            {{'footer-Corporate-Text'|translate}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"widget\">\n                    <h4 class=\"title\">{{'footer-FastLinks'|translate}}</h4>\n                    <div class=\"footer-menu\">\n                        <ul class=\"fast-links\">\n                            <li *ngFor=\"let link of 'footer-FastLinks-Links' | translate\"><a routerLink=\"{{link.rootLink}}\">{{link.name}}</a></li>\n\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"widget\">\n                    <h4 class=\"title\">{{'footer-TurkeyOfficeAddress'|translate}}</h4>\n                    <div class=\"footer-address\">\n                        <address>\n                                <strong>{{'footer-OfficeAddress'|translate}} :</strong>&nbsp;{{'addressInfo'|translate}}<br />\n                                <strong>{{'footer-OfficePhone&Fax'|translate}} :</strong>&nbsp;0 (312) 425 82 80<br />\n                                <strong>{{'footer-OfficeGsm'|translate}} :</strong>&nbsp;0 542 425 82 80<br />\n                                <strong>{{'footer-OfficeEmail'|translate}} :</strong>&nbsp;info@devasagrup.com<br />\n                        </address>\n                    </div>\n                    <ul class=\"footer-follow mt-20\">\n                        <li><a href=\"{{globals.socialLinks['fb']}}\"><i class=\"fa fa-facebook\"></i></a></li>\n                        <li><a href=\"{{globals.socialLinks['tw']}}\"><i class=\"fa fa-twitter\"></i></a></li>\n                        <li><a href=\"{{globals.socialLinks['in']}}\"><i class=\"fa fa-instagram\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"widget\">\n                    <h4 class=\"title\">{{'footer-MalesiaOfficeAddress'|translate}}</h4>\n                    <div class=\"footer-address\">\n                        <address>\n                                <strong>{{'footer-OfficeAddress'|translate}} :</strong>&nbsp;23, Jalan 15/48a, Sentul Raya Boulevard, 51000 Wilayah Persekutuan\n                                Kuala Lumpur, Malezya<br />\n                                <strong>{{'footer-OfficePhone&Fax'|translate}} :</strong>&nbsp;+6 03 4043 2925<br />\n                                <strong>{{'footer-OfficeGsm'|translate}} :</strong>&nbsp;+6 012 211 9812<br />\n                        </address>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n        <!-- /Row -->\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- footer copyright -->\n                <div class=\"footer-copyright\">\n                    <p>{{'footer-CopyrightText'| translate}} | <a href=\"https://devasamedia.com\" target=\"_blank\">Devasa MEdia</a>\n                    </p>\n                </div>\n                <!-- /footer copyright -->\n            </div>\n        </div>\n\n    </div>\n    <!-- /Container -->\n\n</footer>\n<!-- /Footer -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(globals) {
        this.globals = globals;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/group-compaines/group-compaines.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/group-compaines/group-compaines.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXAtY29tcGFpbmVzL2dyb3VwLWNvbXBhaW5lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/group-compaines/group-compaines.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/group-compaines/group-compaines.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Group Compaines -->\n<div id=\"portfolio\" class=\"section md-padding bg-grey\">\n\n    <!-- Container -->\n    <div class=\"container\">\n\n        <!-- Row -->\n        <div class=\"row\">\n\n            <!-- Section header -->\n            <div class=\"section-header text-center\">\n                <h2 class=\"title\">{{'groupCompaineTitle' | translate}}</h2>\n            </div>\n            <!-- /Section header -->\n\n            <!-- Work -->\n            <div class=\"col-md-4 col-xs-6 work\" *ngFor=\"let compaine of 'compaines' | translate\">\n                <h3>{{compaine.name}}</h3>\n                <img class=\"img-responsive\" src=\"{{compaine.imgUrl}}\" alt=\"\">\n                <div class=\"overlay\"></div>\n                <div class=\"work-content\">\n                    <span>{{compaine.name}}</span>\n                    <h3>{{compaine.shortText}}</h3>\n                    <div class=\"work-link\">\n                        <a [routerLink]=\"['compaineDetailRoot'| translate, compaine.id]\"><i class=\"fa fa-external-link\"></i></a>\n                    </div>\n                </div>\n            </div>\n            <!-- /Work -->\n\n        </div>\n        <!-- /Row -->\n\n    </div>\n    <!-- /Container -->\n\n</div>\n<!-- /Group Compaines -->\n\n\n\n<!-- <div id=\"about\" class=\"section md-padding\">\n\n  <div class=\"container\">\n\n      <div class=\"row\">\n\n          <div class=\"section-header text-center\">\n              <h2 class=\"title\">Welcome to Website</h2>\n          </div>\n\n          <div class=\"col-md-4\" *ngFor=\"let compaine of 'compaines' | translate\">\n              <div class=\"about\">\n                  <div>\n                      <div class=\"group-companies m-0-auto mb-20 text-center\">\n                          <div>\n                              <h5>DEVASA<br/><span>{{compaine.name}}</span></h5>\n                          </div>\n                      </div>\n                  </div>\n\n                  <p>{{compaine.shortText}}</p>\n                  <a routerLink=\"{{compaine.detailPage}}\">Daha fazla</a>\n              </div>\n          </div>\n\n      </div>\n\n  </div>\n\n</div> -->"

/***/ }),

/***/ "./src/app/components/group-compaines/group-compaines.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/group-compaines/group-compaines.component.ts ***!
  \*************************************************************************/
/*! exports provided: GroupCompainesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCompainesComponent", function() { return GroupCompainesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupCompainesComponent = /** @class */ (function () {
    function GroupCompainesComponent() {
    }
    GroupCompainesComponent.prototype.ngAfterViewInit = function () {
        this.partnerJqueryFunc();
    };
    GroupCompainesComponent.prototype.partnerJqueryFunc = function () {
        $(document).ready(function () {
            ///////////////////////////
            // magnificPopup
            $('.work').magnificPopup({
                delegate: '.lightbox',
                type: 'image'
            });
        });
    };
    GroupCompainesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group-compaines',
            template: __webpack_require__(/*! ./group-compaines.component.html */ "./src/app/components/group-compaines/group-compaines.component.html"),
            styles: [__webpack_require__(/*! ./group-compaines.component.css */ "./src/app/components/group-compaines/group-compaines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroupCompainesComponent);
    return GroupCompainesComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topheader></app-topheader>\n<!-- Header -->\n<header>\n    <!-- Nav -->\n    <nav id=\"nav\" class=\"navbar nav-transparent\" [class.header-home]=\"global.showInHome$ | async\">\n        <div class=\"container\">\n\n            <div class=\"navbar-header\">\n                <!-- Logo -->\n                <div class=\"navbar-brand\">\n                    <a routerLink=\"/\">\n                        <img class=\"logo-alt\" src=\"./assets/img/logo-alt.png\" alt=\"logo\">\n                        <img class=\"logo\" src=\"./assets/img/logo.png\">\n                    </a>\n                </div>\n                <!-- /Logo -->\n\n                <!-- Collapse nav button -->\n                <div class=\"nav-collapse\">\n                    <span></span>\n                </div>\n                <!-- /Collapse nav button -->\n            </div>\n\n            <!--  Main navigation  -->\n            <ul class=\"main-nav nav navbar-nav navbar-right \">\n                <li *ngFor=\"let menu of 'header' | translate\"><a [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"setTitle(menu.pageTitle)\" routerLink=\"{{menu.rootName}}\">{{menu.name}}</a></li>\n                <li><a [routerLinkActive]=\"'active'\" routerLink=\"{{'catalogRouteUrl'| translate}}\"><i class=\"fa fa-share-square\"></i> {{'eCatalogName'| translate}}</a></li>\n            </ul>\n            <!-- /Main navigation -->\n\n        </div>\n    </nav>\n    <!-- /Nav -->\n\n</header>\n\n<!-- /Header -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(global, titleService) {
        this.global = global;
        this.titleService = titleService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(this.global.title.replace("{title}", newTitle));
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slider-area {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    background-color: rgb(24, 24, 24);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2xpZGVyLWFyZWEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slider-area\">\n    <app-slider></app-slider>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/notfound/notfound.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container md-padding\">\n    <div class=\"col-md-12 col-md-offset-1\">\n        <h1>404</h1>\n        <h2>Sayfa Bulunamadı</h2>\n        <p>\n            Üzgünüz Aramaya Çalıştığınız sayfa silindi veya mevcut değil lütfen aramak istediğiniz kelimeyi düzeltik tekrar deneyiniz.\n        </p>\n        <a routerLink=\"/\">Anasayfaya Git</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/notfound/notfound.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/components/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/components/notfound/notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/slider/slider.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/slider/slider.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'sverige_script_header';\r\n    src: url('sverigescriptheader.eot');\r\n    src: local('SverigeScript'), local('SverigeScriptDecorated_Demo'), local('SverigeScriptDecorated Demo'), local('Sverige Script Decorated Demo'), url('sverigescriptheader.eot?#iefix') format('embedded-opentype'), url('sverigescriptheader.woff') format('woff'), url('sverigescriptheader.woff2') format('woff2'), url('sverigescriptheader.ttf') format('truetype'), url('sverigescriptheader.svg#sverige_script_header') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'sverige_script_text';\r\n    src: url('sverigescripttext.eot');\r\n    src: local('SverigeScript'), local('SverigeScriptClean_Demo'), local('SverigeScriptClean Demo'), local('Sverige Script Clean Demo'), url('sverigescripttext.eot?#iefix') format('embedded-opentype'), url('sverigescripttext.woff') format('woff'), url('sverigescripttext.woff2') format('woff2'), url('sverigescripttext.ttf') format('truetype'), url('sverigescripttext.svg#sverige_script_text') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.owl-carousel-o {\r\n    width: 90% !important;\r\n    margin: 10% auto;\r\n    overflow: hidden;\r\n}\r\n\r\n#slide-image {\r\n    height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\nowl-carousel-o .item-body {\r\n    position: absolute;\r\n    left: 15%;\r\n    top: 40%;\r\n}\r\n\r\n.item-body h4 {\r\n    font-family: 'Galada', 'Poppins', sans-serif;\r\n    padding: 5px 0 5px 10px;\r\n    color: white;\r\n    font-size: 32px;\r\n    max-width: 320px;\r\n}\r\n\r\n.item-body p {\r\n    font-family: 'Galada', 'Poppins', sans-serif;\r\n    padding: 5px 5px 5px 10px;\r\n    color: white;\r\n    font-size: 25px;\r\n    max-width: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQXlEO0lBQ3pELDJhQUF5aEI7SUFDemhCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUNBQXVEO0lBQ3ZELG1aQUFpZ0I7SUFDamdCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFFNUIsc0JBQXNCO0lBQ3RCLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnc3ZlcmlnZV9zY3JpcHRfaGVhZGVyJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvc3ZlcmlnZXNjcmlwdGhlYWRlci5lb3QnKTtcclxuICAgIHNyYzogbG9jYWwoJ1N2ZXJpZ2VTY3JpcHQnKSwgbG9jYWwoJ1N2ZXJpZ2VTY3JpcHREZWNvcmF0ZWRfRGVtbycpLCBsb2NhbCgnU3ZlcmlnZVNjcmlwdERlY29yYXRlZCBEZW1vJyksIGxvY2FsKCdTdmVyaWdlIFNjcmlwdCBEZWNvcmF0ZWQgRGVtbycpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9zdmVyaWdlc2NyaXB0aGVhZGVyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3N2ZXJpZ2VzY3JpcHRoZWFkZXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9zdmVyaWdlc2NyaXB0aGVhZGVyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9zdmVyaWdlc2NyaXB0aGVhZGVyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvc3ZlcmlnZXNjcmlwdGhlYWRlci5zdmcjc3ZlcmlnZV9zY3JpcHRfaGVhZGVyJykgZm9ybWF0KCdzdmcnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdzdmVyaWdlX3NjcmlwdF90ZXh0JztcclxuICAgIHNyYzogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvc3ZlcmlnZXNjcmlwdHRleHQuZW90Jyk7XHJcbiAgICBzcmM6IGxvY2FsKCdTdmVyaWdlU2NyaXB0JyksIGxvY2FsKCdTdmVyaWdlU2NyaXB0Q2xlYW5fRGVtbycpLCBsb2NhbCgnU3ZlcmlnZVNjcmlwdENsZWFuIERlbW8nKSwgbG9jYWwoJ1N2ZXJpZ2UgU2NyaXB0IENsZWFuIERlbW8nKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvc3ZlcmlnZXNjcmlwdHRleHQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvc3ZlcmlnZXNjcmlwdHRleHQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9zdmVyaWdlc2NyaXB0dGV4dC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9udHMvc3ZlcmlnZXNjcmlwdHRleHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mb250cy9zdmVyaWdlc2NyaXB0dGV4dC5zdmcjc3ZlcmlnZV9zY3JpcHRfdGV4dCcpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ub3dsLWNhcm91c2VsLW8ge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzbGlkZS1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxub3dsLWNhcm91c2VsLW8gLml0ZW0tYm9keSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICB0b3A6IDQwJTtcclxufVxyXG5cclxuLml0ZW0tYm9keSBoNCB7XHJcbiAgICBmb250LWZhbWlseTogJ0dhbGFkYScsICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuLml0ZW0tYm9keSBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2FsYWRhJywgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/slider/slider.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- You can use owl-carousel selector to include its component -->\n<owl-carousel-o id=\"owl-slider\" [options]=\"carouselOptions\" (changed)=\"getData($event)\">\n    <ng-container *ngFor=\"let slide of 'slider' | translate\">\n        <ng-template [ngClass]=\"item\" carouselSlide [id]=\"slide.id\">\n            <img id=\"slide-image\" class=\"slide-image\" [src]=\"slide.src\" [alt]=\"slide.alt\" [title]=\"slide.title\">\n            <div class=\"item-body\" [ngStyle]=\"setMyStyles(slide.bodyStyle)\" id=\"slide-{{slide.id}}\">\n                <h4 class=\"item-title animated {{slide.titleAnimate}}\" [ngStyle]=\"setMyStyles(slide.titleStyle)\">{{slide.title}}</h4>\n                <p class=\"item-text animated {{slide.textAnimate}}\" [ngStyle]=\"setMyStyles(slide.textStyle)\">{{slide.text}}</p>\n            </div>\n        </ng-template>\n    </ng-container>\n</owl-carousel-o>\n\n<!-- old -version -->\n<!-- <owl-carousel id=\"owl-slider\" [options]=\"carouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\">\n    <div class=\"item\" *ngFor=\"let image of images;let i = index\">\n        <img id=\"slide-image\" class=\"slide-image\" src=\"{{image.image}}\">\n        <div class=\"item-body\">\n            <h4 class=\"item-title animated {{image.titleAnimate}}\" [ngStyle]=\"setMyStyles(image.titleStyle)\">{{image.title}}</h4>\n            <p class=\"item-text animated {{image.textAnimate}}\">{{image.text}}</p>\n        </div>\n    </div>\n</owl-carousel> -->"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");



var SliderComponent = /** @class */ (function () {
    function SliderComponent(globals) {
        this.globals = globals;
        this.carouselOptions = {
            margin: 0,
            items: 1,
            nav: false,
            dots: false,
            stagePadding: 0,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            loop: true,
            autoplay: false,
            autoplayTimeout: 9000,
            autoplayHoverPause: false,
            animateIn: 'rotateInDownLeft',
            animateOut: 'rotateOutDownLeft',
            mouseDrag: true,
        };
    }
    SliderComponent.prototype.ngOnInit = function () { };
    SliderComponent.prototype.setMyStyles = function (style) {
        var obj = {};
        style = style.split(";");
        style.forEach(function (a) {
            var styleElement = a.split(":");
            obj[styleElement[0]] = styleElement[1];
        });
        return obj;
    };
    SliderComponent.prototype.getData = function (data) {
        if (data.slides[0]) {
            this.homeSlideChange(parseInt(data.slides[0].id));
        }
    };
    SliderComponent.prototype.getSlide = function (slideId) {
        return this.globals.slider.filter(function (a) { return a.id === slideId; })[0];
    };
    SliderComponent.prototype.homeSlideChange = function (id) {
        var Slide = this.getSlide(id);
        var SlideItem = $(".owl-item").not('.cloned').find("#slide-" + id);
        SlideItem.find('h4,p').addClass("hidden").delay(1100).queue(function (next) {
            $(this).removeClass("hidden").dequeue();
        });
        SlideItem.find('h4').removeClass("animated " + Slide.titleAnimate);
        SlideItem.find('p').removeClass("animated " + Slide.textAnimate);
        setTimeout(function () {
            SlideItem.find('h4').addClass("animated " + Slide.titleAnimate);
            setTimeout(function () {
                SlideItem.find('p').addClass("animated " + Slide.textAnimate);
            }, 1000);
        }, 0);
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/components/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/components/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/components/topheader/topheader.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/topheader/topheader.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9waGVhZGVyL3RvcGhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/topheader/topheader.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/topheader/topheader.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-header\" [class.inhome]=\"global.showInHome$ | async\">\n    <div class=\"container\">\n        <div class=\"top-main\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 mobile-center\">\n                    <ul class=\"top-left-language\">\n                        <li>\n                            <a (click)=\"translate('tr')\" routerLink=\"/\"><img src=\"./assets/img/tr-flag.png\" /></a>\n                        </li>\n                        <li>\n                            <a (click)=\"translate('ar')\" routerLink=\"/\"><img src=\"./assets/img/ar-flag.png\" /></a>\n                        </li>\n                        <li>\n                            <a (click)=\"translate('en')\" routerLink=\"/\"><img src=\"./assets/img/en-flag.png\" /></a>\n                        </li>\n                        <li>\n                            <a (click)=\"translate('ms')\" routerLink=\"/\"><img src=\"./assets/img/ms-flag.png\" /></a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-6 hidden-xs\">\n                    <ul class=\"top-social\">\n                        <li><a href=\"{{global.socialLinks['fb']}}\"><i class=\"fa fa-facebook\"></i></a></li>\n                        <li><a href=\"{{global.socialLinks['tw']}}\"><i class=\"fa fa-twitter\"></i></a></li>\n                        <li><a href=\"{{global.socialLinks['in']}}\"><i class=\"fa fa-instagram\"></i></a></li>\n                    </ul>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/topheader/topheader.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/topheader/topheader.component.ts ***!
  \*************************************************************/
/*! exports provided: TopheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopheaderComponent", function() { return TopheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_route_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global-route-config */ "./src/app/global-route-config.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");






var TopheaderComponent = /** @class */ (function () {
    function TopheaderComponent(translateService, router, global, globalRouteConfig) {
        this.translateService = translateService;
        this.router = router;
        this.global = global;
        this.globalRouteConfig = globalRouteConfig;
    }
    TopheaderComponent.prototype.ngOnInit = function () {
    };
    TopheaderComponent.prototype.translate = function (lang) {
        localStorage.setItem("app-language", lang);
        this.translateService.use(lang);
        this.router.config = this.globalRouteConfig.routesConfigs[lang];
    };
    TopheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topheader',
            template: __webpack_require__(/*! ./topheader.component.html */ "./src/app/components/topheader/topheader.component.html"),
            styles: [__webpack_require__(/*! ./topheader.component.css */ "./src/app/components/topheader/topheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _global_route_config__WEBPACK_IMPORTED_MODULE_2__["GlobalRouteConfig"]])
    ], TopheaderComponent);
    return TopheaderComponent;
}());



/***/ }),

/***/ "./src/app/global-route-config.ts":
/*!****************************************!*\
  !*** ./src/app/global-route-config.ts ***!
  \****************************************/
/*! exports provided: GlobalRouteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRouteConfig", function() { return GlobalRouteConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/corporate/corporate.component */ "./src/app/components/corporate/corporate.component.ts");
/* harmony import */ var _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/group-compaines/group-compaines.component */ "./src/app/components/group-compaines/group-compaines.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/compaines-detail/compaines-detail.component */ "./src/app/components/compaines-detail/compaines-detail.component.ts");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "./src/app/components/notfound/notfound.component.ts");
/* harmony import */ var _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/catalogs/catalogs.component */ "./src/app/components/catalogs/catalogs.component.ts");









var GlobalRouteConfig = /** @class */ (function () {
    function GlobalRouteConfig() {
        this.routesConfigs = {
            "tr": [{ path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { showFooter: false, showInHome: true } },
                { path: 'Kurumsal', component: _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_3__["CorporateComponent"] },
                { path: 'Sirketlerimiz', component: _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_4__["GroupCompainesComponent"] },
                { path: 'iletisim', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
                { path: 'Sirket-Detay/:id', component: _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompainesDetailComponent"] },
                { path: 'Katalog', component: _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_8__["CatalogsComponent"] },
                { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], data: { showHeader: false, showFooter: false } },
                { path: '**', redirectTo: '/404' }
            ],
            "en": [{ path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { showFooter: false, showInHome: true } },
                { path: 'en/Corporate', component: _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_3__["CorporateComponent"] },
                { path: 'en/Companies', component: _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_4__["GroupCompainesComponent"] },
                { path: 'en/Contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
                { path: 'en/Compaine-Detail/:id', component: _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompainesDetailComponent"] },
                { path: 'en/Catalog', component: _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_8__["CatalogsComponent"] },
                { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], data: { showHeader: false, showFooter: false } },
                { path: '**', redirectTo: '/404' }
            ],
            "ar": [{ path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { showFooter: false, showInHome: true } },
                { path: 'ar/المؤسسية', component: _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_3__["CorporateComponent"] },
                { path: 'ar/شركتنا', component: _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_4__["GroupCompainesComponent"] },
                { path: 'ar/التماس', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
                { path: 'ar/Sirket-Detay/:id', component: _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompainesDetailComponent"] },
                { path: 'ar/فهرس', component: _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_8__["CatalogsComponent"] },
                { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], data: { showHeader: false, showFooter: false } },
                { path: '**', redirectTo: '/404' }
            ],
            "ms": [{ path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { showFooter: false, showInHome: true } },
                { path: 'ms/Korporat', component: _components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_3__["CorporateComponent"] },
                { path: 'ms/Syarikat-Kami', component: _components_group_compaines_group_compaines_component__WEBPACK_IMPORTED_MODULE_4__["GroupCompainesComponent"] },
                { path: 'ms/Komunikasi', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
                { path: 'ms/Butiran-Syarikat/:id', component: _components_compaines_detail_compaines_detail_component__WEBPACK_IMPORTED_MODULE_6__["CompainesDetailComponent"] },
                { path: 'ms/Katalog', component: _components_catalogs_catalogs_component__WEBPACK_IMPORTED_MODULE_8__["CatalogsComponent"] },
                { path: '404', component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], data: { showHeader: false, showFooter: false } },
                { path: '**', redirectTo: '/404' }
            ],
        };
    }
    GlobalRouteConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GlobalRouteConfig);
    return GlobalRouteConfig;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals, appLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appLanguage", function() { return appLanguage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.title = "Devasa Grup | {title}";
        this.socialLinks = { "fb": "https://www.facebook.com/devasamedia", "tw": "https://twitter.com/devasamedia", "in": "https://www.instagram.com/devasagrup" };
        this.eCatalogLink = "http://online.fliphtml5.com/dtrip/bkwz";
        this.slider = [];
        this.header = [];
        this.compaineDetail = [];
        this.compaine = [];
        /* activeTabName = window.location.pathname.split('/')[1];
        activeTab: string = this.activeTabName == undefined || this.activeTabName == "" ? "anasayfa" :this.activeTabName; */
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());

var appLanguage = localStorage.getItem("app-language");


/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");



var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key) {
        return this.translate.data[key];
    };
    TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");




var TranslateService = /** @class */ (function () {
    function TranslateService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var langPath = "./assets/i18n/language-i18n.json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.globals.header = translation["header"][lang];
                _this.globals.slider = translation["slider"][lang];
                _this.globals.compaineDetail = translation["compaineDetail"][lang];
                _this.globals.compaine = translation["compaines"][lang];
                Object.keys(translation).forEach(function (key) {
                    translation[key] = translation[key][lang];
                });
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                console.log(error);
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (localStorage.getItem("app-language") == null) {
    localStorage.setItem("app-language", "tr");
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work_Project\Devasa Grup\Github\ang-web-3-Upraged\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map