(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-main></app-main> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/about-ece/about-ece.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/about-ece/about-ece.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-company\" id=\"about-company\">\n  <div class=\"about-header mb-5\">\n    <div class=\"container pt-5\">\n      <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-10 mt-5\">\n          <h1 class=\"mb-4 text-center about-title\">About ECE</h1>\n        </div>\n        <div class=\"col-md-10 about-text\">\n          <p style=\"color: #f8f0ee;\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia\n            tempore saepe. Pariatur beatae\n            eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container-fluid\">\n    <div class=\"row mb-5\">\n      <div class=\"col-md-12\">\n        <div class=\"card\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n          <div class=\"card-header\" style=\"background-color: #043353;\">\n            <h3 class=\"card-title text-center\" style=\"color: #f8f0ee;\">who we are</h3>\n          </div>\n\n          <div class=\"card-body custom-size\">\n            <div class=\"row justify-content-md-center\">\n              <div class=\"card-deck w-100 transform\">\n                <div (click)=\"getNumber(0)\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalCenter\"\n                  class=\"card col-md-3 align-items-center card-item\">\n                  <span style=\"font-size: 5em;\">\n                    <i class=\"fas fa-bullseye fa-lg\"></i>\n                  </span>\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\">Mission</h5>\n                  </div>\n                </div>\n                <div (click)=\"getNumber(1)\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalCenter\"\n                  class=\"card col-md-3 align-items-center card-item\">\n\n                  <span style=\"font-size: 5em;\">\n                    <i class=\"fas fa-eye fa-lg\"></i>\n                  </span>\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Vision</h5>\n                  </div>\n                </div>\n                <div (click)=\"getNumber(2)\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalCenter\"\n                  class=\"card col-md-3 align-items-center card-item\">\n                  <span style=\"font-size: 5em;\">\n                    <i class=\"fas fa-users fa-lg\"></i>\n                  </span>\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Core Values</h5>\n                  </div>\n                </div>\n                <div (click)=\"getNumber(3)\" type=\"button\" data-toggle=\"modal\" data-target=\"#modalCenter\"\n                  class=\"card col-md-3 align-items-center card-item\">\n                  <span style=\"font-size: 5em;\">\n                    <i class=\"fas fa-clipboard-list fa-lg\"></i>\n                  </span>\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title text-center\">Objectives</h5>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"custon-color\" style=\"background-color: #18a4e0;\">\n  <app-footer></app-footer>\n</div>\n\n<div class=\"modal fade \" id=\"modalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content\" style=\"color: #043353;\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{title}}</h5>\n      </div>\n      <div class=\"modal-body\">\n        {{body}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/home-page/home-page.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/home-page/home-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"showcase\" id=\"home\">\n  <div class=\"container\">\n    <div class=\"row\" align=\"center\">\n      <div class=\"home-content position-absolute mx-auto\">\n        <!-- <div class=\"col-md-12 mt-5\">\n          <div class=\"home-logo pt-5\">\n            <img id=\"logo-remove\" class=\"rounded-circle\" src=\"../../assets/ece.jpg\" alt=\"logo\">\n          </div>\n        </div>\n\n        <div class=\"col-md-12 mt-5\">\n          <div class=\"business-name\">\n            <h1>Eastblue Cargo Express</h1>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"intro\">\n            <div class=\"col-9 col-xl-9 col-lg-9 col-md-9 col-sm-9\">\n              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, at!</p>\n            </div>\n          </div> \n      </div>-->\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <service-we-offer></service-we-offer> -->\n<app-why-choose-us></app-why-choose-us>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/service-we-offer/service-we-offer.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/service-we-offer/service-we-offer.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company-services my-5\" id=\"service-we-offer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"card col px-0\">\n        <div class=\"card-header\" style=\"background-color: #18a4e0;\">\n          <div class=\" col-12\">\n            <div class=\"service-title mx-auto text-center\">\n              <h1 style=\"color: #f8f0ee;\">service we offer</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\" style=\"box-shadow: 0px 5px 20px 0px #bbbbbb;\">\n          <div class=\"card-deck grid\">\n            <div class=\"card child mb-3\">\n              <img class=\"service-item rounded img-thumbnail\"\n                src=\"../../assets/action-asphalt-auto-automobile-193667.jpg\" alt=\"\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Service title</h5>\n                <p class=\"card-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                </p>\n              </div>\n            </div>\n            <div class=\"card child mb-3\">\n              <img class=\"service-item rounded img-thumbnail\"\n                src=\"../../assets/red-white-and-teal-cargo-ship-on-water-972939.jpg\" alt=\"\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Service title</h5>\n                <p class=\"card-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                </p>\n              </div>\n            </div>\n            <div class=\"card child mb-3\">\n              <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/delivery.jpg\" alt=\"\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Service title</h5>\n                <p class=\"card-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                </p>\n              </div>\n            </div>\n            <div class=\"card child mb-3\">\n              <img class=\"service-item rounded img-thumbnail\"\n                src=\"../../assets/assorted-color-cargo-containers-near-body-of-water-2091159.jpg\" alt=\"\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Service title</h5>\n                <p class=\"card-text\">\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/services/services.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/services/services.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company-services\" id=\"company-services\">\n  <div class=\"container\">\n    <div class=\"row\" align=\"center\">\n      <div class=\"services-header position-absolute mx-auto pt-5\">\n        <div class=\"col-md-12 services-title pt-4\">\n          <h2 class=\"text-center\">Services</h2>\n        </div>\n        <div class=\"col-md-8 pt-3\">\n          <p class=\"services-text text-center mb-5\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae necessitatibus illo voluptate\n            provident cumque omnis similique sequi id itaque.\n          </p>\n        </div>\n        <div class=\"col-md-9\">\n          <div class=\"card mb-5\">\n            <div class=\"card-header\" style=\"background-color: #18a4e0;\">\n              <div class=\"col-md-12\">\n                <div class=\"service-title mx-auto text-center\">\n                  <h3 style=\"color: #f8f0ee;\">we offer</h3>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-deck\">\n                <div class=\"container-grid\">\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service1.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">International/Domestic Freight Forwarding</h6>\n                    </div>\n                  </div>\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service2.jpeg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Customs Brokerage</h6>\n                    </div>\n                  </div>\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service3.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Tariff Consultancy</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"container-grid\">\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service4.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Trucking Services</h6>\n                    </div>\n                  </div>\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service5.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">N.V.O.C.C</h6>\n                    </div>\n                  </div>\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/delivery.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Door to Door Services</h6>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"container-grid\">\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service7.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Import/Export Documentation</h6>\n                    </div>\n                  </div>\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service8.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Breakbulk/Project Cargo</h6>\n                    </div>\n                  </div>\n                  <div class=\"card child mb-3\" style=\"box-shadow: 0 5px 20px 0 #bbbbbb;\">\n                    <img class=\"service-item rounded img-thumbnail\" src=\"../../assets/service9.jpg\" alt=\"\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-title\">Packing & Crating</h6>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n<div class=\"footer\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/why-choose-us/why-choose-us.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/why-choose-us/why-choose-us.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"why-choose-us\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6 mt-3\">\n        <h3>Why choose ECE</h3>\n\n        <div class=\"custom-list\">\n          <div class=\"custom-list-box\">\n            <div class=\"icon-circle\">\n              <div class=\"icon-center\">\n                <i class=\"icon fa fa-user-tie fa-3x\"></i>\n              </div>\n            </div>\n\n            <h5>Title</h5>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sapiente beatae, optio voluptas\n              expedita sunt!</p>\n          </div>\n          <div class=\"custom-list-box\">\n            <div class=\"icon-circle\">\n              <div class=\"icon-center\">\n                <i class=\"icon fas fa-truck-moving fa-3x\"></i>\n              </div>\n            </div>\n            <h5>Title</h5>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sapiente beatae, optio voluptas\n              expedita sunt!</p>\n          </div>\n          <div class=\"custom-list-box\">\n            <div class=\"icon-circle\">\n              <div class=\"icon-center\">\n                <i class=\"icon fas fa-globe-asia fa-3x\"></i>\n              </div>\n            </div>\n            <h5>Title</h5>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sapiente beatae, optio voluptas\n              expedita sunt!</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 my-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"carouselConfig\">\n              <div ngxSlickItem *ngFor=\"let slide of images\" class=\"slide\">\n                <img src=\"{{slide}}\" width=\"498\" height=\"320\">\n              </div>\n            </ngx-slick-carousel>\n            <a class=\"gallery-arrows prev\" style=\"display: block; left: 5%;\"><i class=\"fas fa-chevron-left\"></i></a>\n            <a class=\"gallery-arrows next\" style=\"display: block; right: 5%;\"><i class=\"fas fa-chevron-right\"></i></a>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"custom-footer mt-1\">\n  <div class=\"container-fluid pt-3\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12 text-center mb-4\">\n        <img src=\"../../assets/ece.jpg\" class=\"rounded-circle\" style=\"width: 9em; height: 9em;\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\" row parent justify-content-center\">\n      <div class=\"col-md-3 center left padding\">\n        <h5 class=\"text-color-dark\">our location</h5>\n        <p>8133 Leo Bldg. II, 4th floor. Dr. A Santos Ave. San Dionisop, Parañaque City</p>\n      </div>\n      <div class=\"col-md-3 center\">\n        <h5 class=\"text-color-dark\">contact us</h5>\n        <ul class=\"p-0\">\n          <li>\n            (02) 805-4612\n          </li>\n          <li>\n            0917-152-2622\n          </li>\n          <li><a href=\"yourcompany@domain.com.ph\" title=\"Email me\" target=\"_top\">\n              yourcompany@domain.ph\n            </a></li>\n        </ul>\n\n\n      </div>\n      <div class=\"col-md-2 center policies\">\n        <h5 class=\"text-color-dark\">policies</h5>\n        <ul class=\"p-0\">\n          <li>Privacy policy</li>\n          <li>Terms of Use</li>\n        </ul>\n      </div>\n      <div class=\"col-md-2 center\">\n        <ul class=\"social-icons p-0\">\n          <h5 class=\"text-color-dark\">follow us</h5>\n          <li class=\"facebook-icon\">\n            <a href=\"#\" target=\"_blank\">\n              <i class=\"fab fa-facebook-square fa-2x\"></i>\n            </a>\n          </li>\n          <li class=\"twitter-icon\">\n            <a href=\"#\" target=\"_blank\">\n              <i class=\"fab fa-twitter-square fa-2x\"></i>\n            </a>\n          </li>\n          <li class=\"instagram-icon\">\n            <a href=\"#\" target=\"_blank\">\n              <i class=\"fab fa-instagram-square fa-2x\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"footer-copyright m-0 py-3\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center pt-3\" style=\"border-top: 1px solid #e4e4e4;\">\n          <p> &copy; {{year}} Eastblue Cargo Express. All Rights Reserve</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-sidebar-container>\n\n  <ng-sidebar [closeOnClickOutside]=\"_closeOnClickOutside\" [mode]=\"_mode\" [(opened)]=\"_opened\" [dock]=\"true\"\n    [dockedSize]=\"'20px'\">\n    <div class=\"button-toggle\">\n      <a [ngClass]=\"_opened == true ? 'sidenav-slide arrow-left': 'sidenav-slide'\" (click)=\"_toggleOpened()\">\n        <i class=\"fa fa-chevron-right fa-lg fa-2x\"></i>\n      </a>\n    </div>\n\n    <div class=\"side-menu\">\n      <div class=\"side-navigation-container\">\n        <div [ngClass]=\"_opened == true ? 'sidenav-list' : 'sidenav-list-hide'\">\n          <a class=\"sidenav-button\" [routerLink]=\"['']\" [routerLinkActive]=\"['active']\" (click)=\"_toggleOpened()\"\n            [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n          <a class=\"sidenav-button\" [routerLink]=\"['/about']\" [routerLinkActive]=\"['active']\"\n            (click)=\"_toggleOpened()\">About</a>\n          <a class=\"sidenav-button\" [routerLink]=\"['/services']\" [routerLinkActive]=\"['active']\"\n            (click)=\"_toggleOpened()\">Services</a>\n          <a class=\"sidenav-button\" [routerLinkActive]=\"['active']\" (click)=\"_toggleOpened()\">List of Transport\n            Equipment</a>\n          <a class=\"sidenav-button\" [routerLinkActive]=\"['active']\" (click)=\"_toggleOpened()\">Contact us</a>\n        </div>\n      </div>\n    </div>\n  </ng-sidebar>\n\n  <!-- <div ng-sidebar-content style=\"overflow: hidden;\">\n    <router-outlet></router-outlet>\n  </div> -->\n</ng-sidebar-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"navbar\" class=\"nav align-items-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" align=\"center\">\n        <div class=\"navbar-buttons\">\n          <ul class=\"button-list\">\n            <li class=\"button-link\"><a href=\"#\">Home</a></li>\n            <li class=\"button-link\"><a href=\"#\">Services</a></li>\n            <li class=\"button-link\"><a href=\"#\">Contact Us</a></li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet> -->\n<nav class=\"header\" id=\"nav-id\">\n  <div class=\"header-content\" id=\"header-remove\">\n    <div class=\"company-logo\">\n      <img id=\"logo-remove\" class=\"logo\" src=\"../../assets/img/sample-logo.jpg\" alt=\"logo\">\n    </div>\n    <div class=\"header-buttons\">\n      <ul class=\"button-list\" id=\"buttons-small\">\n        <li class=\"buttons\">\n          <a title=\"home\" [routerLink]=\"['']\" [routerLinkActive]=\"['']\" [routerLinkActiveOptions]=\"{exact: true}\"\n            (click)=\"goTop()\" class=\"button-item\">Home</a>\n        </li>\n        <li class=\"buttons\">\n          <a title=\"about\" [routerLink]=\"['']\" [routerLinkActive]=\"['']\" [fragment]=\"'about'\"\n            class=\"button-item\">About</a>\n        </li>\n        <!-- <li class=\"buttons\">\n                      <a href=\"#services\" class=\"button-item\">Services</a>\n                  </li> -->\n        <li class=\"buttons\">\n          <a title=\"contact\" [routerLink]=\"['']\" [fragment]=\"'contact'\" class=\"button-item\"\n            [routerLinkActive]=\"['']\">Contact us\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _body_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/home-page/home-page.component */ "./src/app/body/home-page/home-page.component.ts");
/* harmony import */ var _body_about_ece_about_ece_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/about-ece/about-ece.component */ "./src/app/body/about-ece/about-ece.component.ts");
/* harmony import */ var _body_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/services/services.component */ "./src/app/body/services/services.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");







const routes = [
    {
        path: '', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        children: [
            { path: '', component: _body_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
            { path: 'about', component: _body_about_ece_about_ece_component__WEBPACK_IMPORTED_MODULE_4__["AboutEceComponent"] },
            { path: 'services', component: _body_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'eastblue-cargo-express';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _body_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body/home-page/home-page.component */ "./src/app/body/home-page/home-page.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_service_we_offer_service_we_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./body/service-we-offer/service-we-offer.component */ "./src/app/body/service-we-offer/service-we-offer.component.ts");
/* harmony import */ var _body_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/why-choose-us/why-choose-us.component */ "./src/app/body/why-choose-us/why-choose-us.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _body_about_ece_about_ece_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./body/about-ece/about-ece.component */ "./src/app/body/about-ece/about-ece.component.ts");
/* harmony import */ var _body_services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./body/services/services.component */ "./src/app/body/services/services.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _body_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _body_service_we_offer_service_we_offer_component__WEBPACK_IMPORTED_MODULE_11__["ServiceWeOfferComponent"], _body_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_12__["WhyChooseUsComponent"], _body_about_ece_about_ece_component__WEBPACK_IMPORTED_MODULE_14__["AboutEceComponent"], _body_services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_13__["SlickCarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_9__["SidebarModule"].forRoot()
        ],
        exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/body/about-ece/about-ece.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/about-ece/about-ece.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-company {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #043353;\r\n}\r\n\r\n.about-header {\r\n  height: 300px;\r\n  background-color: #18a4e0;\r\n}\r\n\r\n.card-item:hover {\r\n  -webkit-transform: scale(1, 1.1);\r\n          transform: scale(1, 1.1);\r\n  box-shadow: 0px 5px 20px 0px #a1a1a1;\r\n}\r\n\r\n.card-item {\r\n  -webkit-transition: -webkit-transform 0.5s;\r\n  transition: -webkit-transform 0.5s;\r\n  transition: transform 0.5s;\r\n  transition: transform 0.5s, -webkit-transform 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n  .about-header {\r\n    height: 400px;\r\n    width: 100%;\r\n  }\r\n\r\n  .about-company h1 {\r\n    font-size: 7vw;\r\n  }\r\n\r\n  .about-text {\r\n    text-align: center;\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .custom-size {\r\n    font-size: 4vw;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9hYm91dC1lY2UvYWJvdXQtZWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMENBQTBCO0VBQTFCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsa0RBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2Fib3V0LWVjZS9hYm91dC1lY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dC1jb21wYW55IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICMwNDMzNTM7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4YTRlMDtcclxufVxyXG5cclxuLmNhcmQtaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCAwcHggI2ExYTFhMTtcclxufVxyXG5cclxuLmNhcmQtaXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwcmVtKSB7XHJcbiAgLmFib3V0LWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtY29tcGFueSBoMSB7XHJcbiAgICBmb250LXNpemU6IDd2dztcclxuICB9XHJcblxyXG4gIC5hYm91dC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zaXplIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/body/about-ece/about-ece.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/about-ece/about-ece.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutEceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutEceComponent", function() { return AboutEceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutEceComponent = class AboutEceComponent {
    constructor() {
        this.modalItems = {
            item0: { title: 'Mission', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' },
            item1: { title: 'Vision', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' },
            item2: { title: 'Core Values', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' },
            item3: { title: 'Objectives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' }
        };
    }
    getNumber(no) {
        if (no === 0) {
            this.title = this.modalItems.item0.title;
            this.body = this.modalItems.item0.text;
        }
        else if (no === 1) {
            this.title = this.modalItems.item1.title;
            this.body = this.modalItems.item1.text;
        }
        else if (no === 2) {
            this.title = this.modalItems.item2.title;
            this.body = this.modalItems.item2.text;
        }
        else if (no === 3) {
            this.title = this.modalItems.item3.title;
            this.body = this.modalItems.item3.text;
        }
    }
    ngOnInit() {
    }
};
AboutEceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-ece',
        template: __webpack_require__(/*! raw-loader!./about-ece.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/about-ece/about-ece.component.html"),
        styles: [__webpack_require__(/*! ./about-ece.component.css */ "./src/app/body/about-ece/about-ece.component.css")]
    })
], AboutEceComponent);



/***/ }),

/***/ "./src/app/body/home-page/home-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/home-page/home-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\r\n  margin: 0;\r\n  color: #faf8f0;\r\n}\r\n\r\n.showcase::after {\r\n  content: '';\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-image:\r\n    -webkit-gradient(linear, left top, left bottom, from(#253e6bb4), to(#253e6bb4)),\r\n    url('homepage.jpg');\r\n  background-image:\r\n    linear-gradient(#253e6bb4, #253e6bb4),\r\n    url('homepage.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  display: block;\r\n  -webkit-transition: all 500ms;\r\n  transition: all 500ms;\r\n\r\n}\r\n\r\n.home-content {\r\n  z-index: 1;\r\n  left: 0;\r\n  right: 0;\r\n\r\n}\r\n\r\n.home-logo img {\r\n  height: 15em;\r\n  width: 15em;\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n  .home-content {\r\n    width: 100%;\r\n  }\r\n\r\n  .home-logo img {\r\n    width: 50vw;\r\n    height: 50vw;\r\n  }\r\n\r\n  .business-name h1 {\r\n    font-size: 10vw;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYOzt1QkFFcUM7RUFGckM7O3VCQUVxQztFQUNyQyxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsNkJBQXFCO0VBQXJCLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7O0FBRVY7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjZmFmOGYwO1xyXG59XHJcblxyXG4uc2hvd2Nhc2U6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoIzI1M2U2YmI0LCAjMjUzZTZiYjQpLFxyXG4gICAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hvbWVwYWdlLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcztcclxuXHJcbn1cclxuXHJcbi5ob21lLWNvbnRlbnQge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuXHJcbn1cclxuXHJcbi5ob21lLWxvZ28gaW1nIHtcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgd2lkdGg6IDE1ZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzByZW0pIHtcclxuICAuaG9tZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtbG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgfVxyXG5cclxuICAuYnVzaW5lc3MtbmFtZSBoMSB7XHJcbiAgICBmb250LXNpemU6IDEwdnc7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/body/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/body/home-page/home-page.component.css")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/body/service-we-offer/service-we-offer.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/body/service-we-offer/service-we-offer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#service-we-offer {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #043353;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.child {\r\n  box-shadow: 0px 5px 20px 0px #bbbbbb;\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n  .grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .service-title h1 {\r\n    font-size: 7vw;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 30.0625rem) and (max-width: 48rem) {\r\n\r\n\r\n  .grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 62rem) and (min-width: 48.0625rem) {\r\n  .grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9zZXJ2aWNlLXdlLW9mZmVyL3NlcnZpY2Utd2Utb2ZmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7O0FBRUE7OztFQUdFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvYm9keS9zZXJ2aWNlLXdlLW9mZmVyL3NlcnZpY2Utd2Utb2ZmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZXJ2aWNlLXdlLW9mZmVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzA0MzM1MztcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxufVxyXG5cclxuLmNoaWxkIHtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggMHB4ICNiYmJiYmI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzByZW0pIHtcclxuICAuZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlLXRpdGxlIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogN3Z3O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAuMDYyNXJlbSkgYW5kIChtYXgtd2lkdGg6IDQ4cmVtKSB7XHJcblxyXG5cclxuICAuZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjJyZW0pIGFuZCAobWluLXdpZHRoOiA0OC4wNjI1cmVtKSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/body/service-we-offer/service-we-offer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/body/service-we-offer/service-we-offer.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceWeOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWeOfferComponent", function() { return ServiceWeOfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceWeOfferComponent = class ServiceWeOfferComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServiceWeOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'service-we-offer',
        template: __webpack_require__(/*! raw-loader!./service-we-offer.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/service-we-offer/service-we-offer.component.html"),
        styles: [__webpack_require__(/*! ./service-we-offer.component.css */ "./src/app/body/service-we-offer/service-we-offer.component.css")]
    })
], ServiceWeOfferComponent);



/***/ }),

/***/ "./src/app/body/services/services.component.css":
/*!******************************************************!*\
  !*** ./src/app/body/services/services.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-header {\r\n  width: auto;\r\n  z-index: 1;\r\n  left: 0;\r\n  right: 0;\r\n  color: #faf8f0;\r\n}\r\n\r\n.company-services::after {\r\n  content: '';\r\n  height: 400px;\r\n  width: 100%;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#253e6bb5), to(#253e6bb5)), url('shakehands.jpg');\r\n  background-image: linear-gradient(#253e6bb5, #253e6bb5), url('shakehands.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  display: block;\r\n  -webkit-transition: all 500ms;\r\n  transition: all 500ms;\r\n}\r\n\r\n.container-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  color: #043353;\r\n}\r\n\r\n.footer {\r\n  background-color: #18a4e0;\r\n  margin-top: 55rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCx3SEFBOEY7RUFBOUYsOEVBQThGO0VBQzlGLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCw2QkFBcUI7RUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNlcy1oZWFkZXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogI2ZhZjhmMDtcclxufVxyXG5cclxuLmNvbXBhbnktc2VydmljZXM6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMjUzZTZiYjUsICMyNTNlNmJiNSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL3NoYWtlaGFuZHMuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXM7XHJcbn1cclxuXHJcbi5jb250YWluZXItZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGNvbG9yOiAjMDQzMzUzO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhNGUwO1xyXG4gIG1hcmdpbi10b3A6IDU1cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/services/services.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/body/services/services.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/services/services.component.html"),
        styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/body/services/services.component.css")]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/body/why-choose-us/why-choose-us.component.css":
/*!****************************************************************!*\
  !*** ./src/app/body/why-choose-us/why-choose-us.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#why-choose-us {\r\n  position: relative;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #18a4e0;\r\n  color: #faf8f0;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.custom-list p,\r\nh5,\r\n.icon-center {\r\n  color: #d3dde6;\r\n}\r\n\r\n.custom-list-box {\r\n  padding-left: 4.5em;\r\n}\r\n\r\n.icon-circle {\r\n  position: absolute;\r\n  left: 0;\r\n  border-left: 3px solid #043353;\r\n  width: 4.5em;\r\n  height: 4.5em;\r\n\r\n}\r\n\r\n.icon-circle .icon-center {\r\n  width: 4.5em;\r\n  height: 4.5em;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.size img {\r\n  height: 280px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.gallery-arrows {\r\n  font-size: 1em;\r\n  position: absolute;\r\n  width: 3em;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: #DBE8D4;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  top: 0;\r\n}\r\n\r\n.gallery-arrows i {\r\n  position: absolute;\r\n  display: block;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 2em;\r\n  height: 2em;\r\n  margin-top: -1em;\r\n  margin-left: -1em;\r\n  font-size: 2em;\r\n  text-align: center;\r\n  line-height: 2em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS93aHktY2hvb3NlLXVzL3doeS1jaG9vc2UtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLE1BQU07QUFDUjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ib2R5L3doeS1jaG9vc2UtdXMvd2h5LWNob29zZS11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3doeS1jaG9vc2UtdXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhNGUwO1xyXG4gIGNvbG9yOiAjZmFmOGYwO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5jdXN0b20tbGlzdCBwLFxyXG5oNSxcclxuLmljb24tY2VudGVyIHtcclxuICBjb2xvcjogI2QzZGRlNjtcclxufVxyXG5cclxuLmN1c3RvbS1saXN0LWJveCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0LjVlbTtcclxufVxyXG5cclxuLmljb24tY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwNDMzNTM7XHJcbiAgd2lkdGg6IDQuNWVtO1xyXG4gIGhlaWdodDogNC41ZW07XHJcblxyXG59XHJcblxyXG4uaWNvbi1jaXJjbGUgLmljb24tY2VudGVyIHtcclxuICB3aWR0aDogNC41ZW07XHJcbiAgaGVpZ2h0OiA0LjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMC41ZW07XHJcbn1cclxuXHJcbi5zaXplIGltZyB7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmdhbGxlcnktYXJyb3dzIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDNlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNEQkU4RDQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmdhbGxlcnktYXJyb3dzIGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDJlbTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAtMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/body/why-choose-us/why-choose-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/body/why-choose-us/why-choose-us.component.ts ***!
  \***************************************************************/
/*! exports provided: WhyChooseUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyChooseUsComponent", function() { return WhyChooseUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhyChooseUsComponent = class WhyChooseUsComponent {
    constructor() {
        this.images = [
            "../../assets/red-white-and-teal-cargo-ship-on-water-972939.jpg",
            "../../assets/assorted-color-cargo-containers-near-body-of-water-2091159.jpg",
            "../../assets/jet-cloud-landing-aircraft-46148.jpg"
        ];
        this.carouselConfig = {
            'prevArrow': '.prev',
            'nextArrow': '.next',
            'infinite': true,
            'autoplay': true
        };
    }
    ngOnInit() {
    }
};
WhyChooseUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-why-choose-us',
        template: __webpack_require__(/*! raw-loader!./why-choose-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/why-choose-us/why-choose-us.component.html"),
        styles: [__webpack_require__(/*! ./why-choose-us.component.css */ "./src/app/body/why-choose-us/why-choose-us.component.css")]
    })
], WhyChooseUsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n  position: relative;\r\n  padding: 0;\r\n  color: #043353;\r\n  font-size: 0.9em;\r\n}\r\n\r\n\r\n#footer a {\r\n  color: #043353;\r\n}\r\n\r\n\r\n#footer a:hover {\r\n  color: #e96e56;\r\n}\r\n\r\n\r\n.social-icons li {\r\n  display: inline-block;\r\n  margin-right: 8px;\r\n\r\n}\r\n\r\n\r\nli {\r\n  list-style: none;\r\n\r\n}\r\n\r\n\r\n@media only screen and (max-width: 30rem) {\r\n  #footer h5 {\r\n    font-size: 4.5vw;\r\n  }\r\n\r\n  #footer p,\r\n  li,\r\n  a {\r\n    font-size: 4vw;\r\n  }\r\n\r\n  .parent {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media only screen and (min-width: 30.0625rem) and (max-width: 48rem) {\r\n\r\n  .parent {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .policies li {\r\n    display: inline;\r\n  }\r\n\r\n  .policies li:nth-child(2) {\r\n    margin-left: 1em;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 62rem) and (min-width: 48.0625rem) {\r\n  #footer h5 {\r\n    font-size: 2vw;\r\n  }\r\n\r\n  #footer p,\r\n  li,\r\n  a {\r\n    font-size: 1.9vw;\r\n  }\r\n\r\n  .parent {\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCOztBQUVuQjs7O0FBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCOzs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7SUFHRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVGOzs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7OztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOzs7SUFHRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzA0MzM1MztcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG5cclxuI2Zvb3RlciBhIHtcclxuICBjb2xvcjogIzA0MzM1MztcclxufVxyXG5cclxuI2Zvb3RlciBhOmhvdmVyIHtcclxuICBjb2xvcjogI2U5NmU1NjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5cclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMHJlbSkge1xyXG4gICNmb290ZXIgaDUge1xyXG4gICAgZm9udC1zaXplOiA0LjV2dztcclxuICB9XHJcblxyXG4gICNmb290ZXIgcCxcclxuICBsaSxcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gIH1cclxuXHJcbiAgLnBhcmVudCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwLjA2MjVyZW0pIGFuZCAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG5cclxuICAucGFyZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuXHJcbiAgLnBvbGljaWVzIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcblxyXG4gIC5wb2xpY2llcyBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjJyZW0pIGFuZCAobWluLXdpZHRoOiA0OC4wNjI1cmVtKSB7XHJcbiAgI2Zvb3RlciBoNSB7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICB9XHJcblxyXG4gICNmb290ZXIgcCxcclxuICBsaSxcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMS45dnc7XHJcbiAgfVxyXG5cclxuICAucGFyZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.today = new Date();
        this.year = this.today.getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ::selection {\r\n  background-color: #28bfdb;\r\n  color: #fff;\r\n} */\r\n\r\n.button-toggle {\r\n  position: absolute;\r\n  top: 40%;\r\n  height: 50px;\r\n  width: 50px;\r\n  right: -50px;\r\n\r\n  background-color: #e96e56;\r\n  color: #faf8f0;\r\n  cursor: pointer;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n\r\n.sidenav-slide {\r\n  display: block;\r\n  height: 50px;\r\n  width: 50px;\r\n  text-align: center;\r\n  /* line-height: 64px; */\r\n  -webkit-transition: all 1s;\r\n  transition: all 1s;\r\n}\r\n\r\n.sidenav-slide.arrow-left {\r\n  -webkit-transform: rotate(900deg);\r\n          transform: rotate(900deg);\r\n}\r\n\r\n/* .sidenav-slide:hover {\r\n  transform: rotate(1260deg);\r\n} */\r\n\r\n.sidenav-slide i {\r\n  margin-top: 0.9375rem;\r\n}\r\n\r\n.side-menu {\r\n  padding-top: 3em;\r\n}\r\n\r\n.sidenav-list-hide {\r\n  display: none;\r\n}\r\n\r\n.sidenav-button {\r\n  display: block;\r\n  color: #faf8f0;\r\n  text-decoration: none;\r\n  padding: 1em 0;\r\n  cursor: pointer;\r\n  padding-left: 2.5em;\r\n  font-family: 'Didact gothic', sans-serif;\r\n}\r\n\r\n.sidenav-button.active {\r\n  background: #18a4e0;\r\n}\r\n\r\n.sidenav-button:hover {\r\n  background: #18a4e0;\r\n}\r\n\r\n::ng-deep aside {\r\n  background-color: #043353;\r\n  /* padding: 2em 1em; */\r\n  width: 250px;\r\n  overflow: visible !important;\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n  .button-toggle {\r\n    top: 30%;\r\n    height: 40px;\r\n    width: 35px;\r\n    right: -35px;\r\n  }\r\n\r\n  .sidenav-slide {\r\n    height: 40px;\r\n    width: 35px;\r\n  }\r\n\r\n  .sidenav-slide i {\r\n    font-size: 1.3em;\r\n    margin-top: 13px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7O0VBRVoseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMEJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDo6c2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhiZmRiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59ICovXHJcblxyXG4uYnV0dG9uLXRvZ2dsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICByaWdodDogLTUwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTZlNTY7XHJcbiAgY29sb3I6ICNmYWY4ZjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNpZGVuYXYtc2xpZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogbGluZS1oZWlnaHQ6IDY0cHg7ICovXHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG4uc2lkZW5hdi1zbGlkZS5hcnJvdy1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MDBkZWcpO1xyXG59XHJcblxyXG4vKiAuc2lkZW5hdi1zbGlkZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTI2MGRlZyk7XHJcbn0gKi9cclxuXHJcbi5zaWRlbmF2LXNsaWRlIGkge1xyXG4gIG1hcmdpbi10b3A6IDAuOTM3NXJlbTtcclxufVxyXG5cclxuLnNpZGUtbWVudSB7XHJcbiAgcGFkZGluZy10b3A6IDNlbTtcclxufVxyXG5cclxuLnNpZGVuYXYtbGlzdC1oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZW5hdi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmFmOGYwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcclxuICBmb250LWZhbWlseTogJ0RpZGFjdCBnb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lkZW5hdi1idXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjMThhNGUwO1xyXG59XHJcblxyXG4uc2lkZW5hdi1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMxOGE0ZTA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhc2lkZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzM1MztcclxuICAvKiBwYWRkaW5nOiAyZW0gMWVtOyAqL1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwcmVtKSB7XHJcbiAgLmJ1dHRvbi10b2dnbGUge1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHJpZ2h0OiAtMzVweDtcclxuICB9XHJcblxyXG4gIC5zaWRlbmF2LXNsaWRlIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYtc2xpZGUgaSB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() {
        this._opened = false;
        this._mode = 'over';
        this._closeOnClickOutside = true;
    }
    goTop() {
        window.scrollTo(0, 0);
    }
    _toggleOpened() {
        this._opened = !this._opened;
    }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main",
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #navbar {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 7.5em;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #faf8f0;\r\n  font-family: \"Didact Gothic\";\r\n  background: transparent;\r\n  z-index: 10;\r\n}\r\n\r\n#nav.sticky {\r\n  position: fixed;\r\n  height: 70px;\r\n  top: 0;\r\n  width: 100%;\r\n  background: #253e6b;\r\n}\r\n\r\n.company-logo img {\r\n  width: 8em;\r\n  height: 8em;\r\n  border-radius: 50%;\r\n}\r\n\r\n.navbar-buttons ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n\r\n.navbar-buttons li {\r\n  display: inline-block;\r\n  padding: 0 1em;\r\n}\r\n\r\n.navbar-buttons a {\r\n  display: block;\r\n  height: 3rem;\r\n  line-height: 3rem;\r\n} */\r\nnav.header {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 120px;\r\n  font-family: \"Didact Gothic\";\r\n  background: transparent;\r\n  z-index: 10;\r\n}\r\nnav.sticky {\r\n  position: fixed;\r\n  height: 70px;\r\n  top: 0;\r\n  width: 100%;\r\n  background: #253e6b;\r\n}\r\n.header-content {\r\n  padding: 1em 5em;\r\n}\r\n.header-content-small {\r\n  padding: 10px 5em;\r\n}\r\n.company-logo,\r\n.header-buttons {\r\n  display: inline-block;\r\n}\r\n.logo {\r\n  height: 5rem;\r\n  width: 5rem;\r\n  border-radius: 50%;\r\n}\r\n.logo-small {\r\n  height: 3rem;\r\n  width: 3rem;\r\n  border-radius: 50%;\r\n}\r\n.header-buttons {\r\n  position: relative;\r\n  float: right;\r\n}\r\n.button-list {\r\n  list-style: none;\r\n  overflow: hidden;\r\n}\r\nul .buttons {\r\n  display: inline-block;\r\n  padding: 1em;\r\n  font-size: 1.2em;\r\n}\r\n.buttons-small {\r\n  display: inline-block;\r\n  padding: 0 1em;\r\n  font-size: 1.2em;\r\n}\r\n.buttons a.active {\r\n  color: #eea47fff;\r\n}\r\n.buttons a:hover {\r\n  color: #eea47fff;\r\n}\r\nli .button-item {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q0c7QUFDSDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLE1BQU07RUFDTixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjbmF2YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3LjVlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogI2ZhZjhmMDtcclxuICBmb250LWZhbWlseTogXCJEaWRhY3QgR290aGljXCI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNuYXYuc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjUzZTZiO1xyXG59XHJcblxyXG4uY29tcGFueS1sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDhlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5uYXZiYXItYnV0dG9ucyB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdmJhci1idXR0b25zIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbi5uYXZiYXItYnV0dG9ucyBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn0gKi9cclxubmF2LmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRGlkYWN0IEdvdGhpY1wiO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5uYXYuc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjUzZTZiO1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDFlbSA1ZW07XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudC1zbWFsbCB7XHJcbiAgcGFkZGluZzogMTBweCA1ZW07XHJcbn1cclxuXHJcbi5jb21wYW55LWxvZ28sXHJcbi5oZWFkZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmxvZ28tc21hbGwge1xyXG4gIGhlaWdodDogM3JlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5oZWFkZXItYnV0dG9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJ1dHRvbi1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnVsIC5idXR0b25zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5idXR0b25zLXNtYWxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmJ1dHRvbnMgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjZWVhNDdmZmY7XHJcbn1cclxuXHJcbi5idXR0b25zIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZWVhNDdmZmY7XHJcbn1cclxuXHJcbmxpIC5idXR0b24taXRlbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let NavigationComponent = class NavigationComponent {
    constructor() { }
    goTop() {
        window.scrollTo(0, 0);
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(() => {
            console.log('wawdad');
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop() >= 50) {
                // $("#nav").addClass("sticky");
                console.log('wawdad');
            }
            else {
                // $("#nav").removeClass("sticky");
            }
        });
        // $('.button-item').click(() => {
        //   alert('hello')
        // })
    }
    onScroll() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(() => {
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop() >= 50) {
                // $("#nav").addClass("sticky");
                alert('hello');
            }
            else {
                // $("#nav").removeClass("sticky");
            }
        });
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
    })
], NavigationComponent);



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
const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Renzo\Desktop\eastblue-cargo-express\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map