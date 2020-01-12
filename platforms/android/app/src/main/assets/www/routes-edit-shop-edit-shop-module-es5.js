function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-edit-shop-edit-shop-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/edit-shop/edit-shop.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/edit-shop/edit-shop.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesEditShopEditShopPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>{{title}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n    <img src=\"assets/img/edit.jpg\" alt=\"\">\r\n    <form (ngSubmit)=\"save()\" #editShopForm=\"ngForm\" novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-input name=\"{{property}}\" type=\"text\" placeholder=\"{{title}}\" required [(ngModel)]=\"value\">\r\n          </ion-input>\r\n        </ion-item>\r\n        <div padding-horizontal>\r\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"editShopForm.invalid\" (click)=\"Back()\">确认</ion-button>\r\n        </div>\r\n      </ion-list>\r\n    </form>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/routes/edit-shop/edit-shop.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/routes/edit-shop/edit-shop.module.ts ***!
    \******************************************************/

  /*! exports provided: EditShopPageModule */

  /***/
  function srcAppRoutesEditShopEditShopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditShopPageModule", function () {
      return EditShopPageModule;
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


    var _edit_shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-shop.page */
    "./src/app/routes/edit-shop/edit-shop.page.ts");

    var routes = [{
      path: '',
      component: _edit_shop_page__WEBPACK_IMPORTED_MODULE_6__["EditShopPage"]
    }];

    var EditShopPageModule = function EditShopPageModule() {
      _classCallCheck(this, EditShopPageModule);
    };

    EditShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_edit_shop_page__WEBPACK_IMPORTED_MODULE_6__["EditShopPage"]]
    })], EditShopPageModule);
    /***/
  },

  /***/
  "./src/app/routes/edit-shop/edit-shop.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/routes/edit-shop/edit-shop.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesEditShopEditShopPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-md {\n  min-height: 67px !important;\n}\n\nion-title {\n  padding-top: 20px;\n}\n\n.back-button.show-back-button {\n  padding-top: 20px;\n}\n\n.toolbar-ios {\n  min-height: 66px !important;\n}\n\n.toolbar-ios ion-title {\n  padding: 20px 90px 1px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2VkaXQtc2hvcC9DOlxcVXNlcnNcXElyZWxpYTk3XFxEZXNrdG9wXFxqc19wcm9qXFxteVByb2plY3RcXFNoZW5nWWlaaHVhbmdKaWEvc3JjXFxhcHBcXHJvdXRlc1xcZWRpdC1zaG9wXFxlZGl0LXNob3AucGFnZS5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvZWRpdC1zaG9wL2VkaXQtc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9lZGl0LXNob3AvZWRpdC1zaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLW1kIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY3cHggIWltcG9ydGFudDsvLzQ3cHjvv73vv73Nt++/ve+/ve+/vcSz77+9NjdweFxyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDsvL++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vTIwcHhcclxufVxyXG4uYmFjay1idXR0b24uc2hvdy1iYWNrLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDsvL++/ve+/ve+/vdi877+9zbfvv73Cve+/vTIwcHhcclxufVxyXG5cclxuLy9pT1PNt++/ve+/ve+/ve+/vTIwcHhcclxuLnRvb2xiYXItaW9zIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY2cHggIWltcG9ydGFudDtcclxufVxyXG4udG9vbGJhci1pb3MgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDIwcHggOTBweCAxcHggIWltcG9ydGFudDtcclxufSIsIi50b29sYmFyLW1kIHtcbiAgbWluLWhlaWdodDogNjdweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmJhY2stYnV0dG9uLnNob3ctYmFjay1idXR0b24ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRvb2xiYXItaW9zIHtcbiAgbWluLWhlaWdodDogNjZweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci1pb3MgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMjBweCA5MHB4IDFweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/routes/edit-shop/edit-shop.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/routes/edit-shop/edit-shop.page.ts ***!
    \****************************************************/

  /*! exports provided: EditShopPage */

  /***/
  function srcAppRoutesEditShopEditShopPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditShopPage", function () {
      return EditShopPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/local-storage.service */
    "./src/app/shared/services/local-storage.service.ts");

    var EditShopPage =
    /*#__PURE__*/
    function () {
      function EditShopPage(activatedRoute, localStorageService, router) {
        var _this = this;

        _classCallCheck(this, EditShopPage);

        this.activatedRoute = activatedRoute;
        this.localStorageService = localStorageService;
        this.router = router;
        activatedRoute.queryParams.subscribe(function (queryParams) {
          _this.property = queryParams.property;
          _this.title = queryParams.title;
        }); //this.statusBar.overlaysWebView(true);
      }

      _createClass(EditShopPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.shop = this.localStorageService.get('currentUser', null);
          this.shop[this.property] = this.value;
          this.localStorageService.set('currentUser', this.shop);
          this.value = '';
          this.router.navigateByUrl('shop');
        }
      }, {
        key: "Back",
        value: function Back() {
          this.router.navigateByUrl('shopsetting');
        }
      }]);

      return EditShopPage;
    }();

    EditShopPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    EditShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-shop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-shop.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/edit-shop/edit-shop.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-shop.page.scss */
      "./src/app/routes/edit-shop/edit-shop.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], EditShopPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-edit-shop-edit-shop-module-es5.js.map