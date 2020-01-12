function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-shopsetting-shopsetting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/shopsetting/shopsetting.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/shopsetting/shopsetting.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesShopsettingShopsettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Shop Details</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding color=\"medium\">\r\n    <ion-list inset=\"true\">\r\n      <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'店铺名称',property:'shopName'}\">\r\n        <ion-label>Shop Name</ion-label>\r\n        <ion-note slot=\"end\">{{shop.shopName}}</ion-note>\r\n      </ion-item>\r\n      <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'店铺昵称',property:'shortName'}\">\r\n        <ion-label>Shop NickName</ion-label>\r\n        <ion-note slot=\"end\">{{shop.shortName}}</ion-note>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Registration time</ion-label>\r\n        <ion-note slot=\"end\">{{shop.registerDate | date: \"yyyy/MM/dd hh:mm\"}}</ion-note>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Tel</ion-label>\r\n        <ion-note slot=\"end\">{{shop.phone}}</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list inset=\"true\">\r\n      <ion-item>\r\n        <ion-label>Email</ion-label>\r\n        <ion-note slot=\"end\">{{shop.email}}</ion-note>\r\n      </ion-item>\r\n      <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'店主姓名',property:'owner'}\">\r\n        <ion-label>Owner name</ion-label>\r\n        <ion-note slot=\"end\">{{shop.owner}}</ion-note>\r\n      </ion-item>\r\n      <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'店铺电话',property:'shopPhone'}\">\r\n        <ion-label>Owner Tel</ion-label>\r\n        <ion-note slot=\"end\">{{shop.shopPhone}}</ion-note>\r\n      </ion-item>\r\n      <ion-item detail routerLink=\"/editShop\" [queryParams]=\"{title:'行业类型',property:'businessType'}\">\r\n        <ion-label>Industry type</ion-label>\r\n        <ion-note slot=\"end\">{{shop.businessType}}</ion-note>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/routes/shopsetting/shopsetting.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/routes/shopsetting/shopsetting.module.ts ***!
    \**********************************************************/

  /*! exports provided: ShopsettingPageModule */

  /***/
  function srcAppRoutesShopsettingShopsettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopsettingPageModule", function () {
      return ShopsettingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _shopsetting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shopsetting.page */
    "./src/app/routes/shopsetting/shopsetting.page.ts");

    var routes = [{
      path: '',
      component: _shopsetting_page__WEBPACK_IMPORTED_MODULE_6__["ShopsettingPage"]
    }];

    var ShopsettingPageModule = function ShopsettingPageModule() {
      _classCallCheck(this, ShopsettingPageModule);
    };

    ShopsettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_shopsetting_page__WEBPACK_IMPORTED_MODULE_6__["ShopsettingPage"]]
    })], ShopsettingPageModule);
    /***/
  },

  /***/
  "./src/app/routes/shopsetting/shopsetting.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/routes/shopsetting/shopsetting.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesShopsettingShopsettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zaG9wc2V0dGluZy9zaG9wc2V0dGluZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/routes/shopsetting/shopsetting.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/routes/shopsetting/shopsetting.page.ts ***!
    \********************************************************/

  /*! exports provided: ShopsettingPage */

  /***/
  function srcAppRoutesShopsettingShopsettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopsettingPage", function () {
      return ShopsettingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/local-storage.service */
    "./src/app/shared/services/local-storage.service.ts");

    var ShopsettingPage =
    /*#__PURE__*/
    function () {
      function ShopsettingPage(localStorageService) {
        _classCallCheck(this, ShopsettingPage);

        this.localStorageService = localStorageService;
        this.shop = {
          shopName: '',
          shortName: '',
          registerDate: '',
          phone: '',
          email: '',
          owner: '',
          shopPhone: '',
          businessType: ''
        };
      }

      _createClass(ShopsettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var login = this.localStorageService.get('currentUser', null);

          if (login != null) {
            this.shop.shopName = login.shopName;
            this.shop.registerDate = login.registerDate;
            this.shop.phone = login.phone;
            this.shop.email = login.email;
            this.shop.shortName = login.shortName;
            this.shop.shopPhone = login.shopPhone;
            this.shop.owner = login.owner;
            this.shop.businessType = login.businessType;
          }

          console.log('loginInfo = ' + login);
        }
      }]);

      return ShopsettingPage;
    }();

    ShopsettingPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]
      }];
    };

    ShopsettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopsetting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopsetting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/shopsetting/shopsetting.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopsetting.page.scss */
      "./src/app/routes/shopsetting/shopsetting.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])], ShopsettingPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-shopsetting-shopsetting-module-es5.js.map