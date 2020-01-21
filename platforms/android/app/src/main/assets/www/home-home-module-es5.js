function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button color=\"light\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        主页\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button color=\"light\">\r\n          <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"light\">\r\n          <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <img src=\"assets/img/androidbanner.png\" alt=\"\">\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col *ngFor=\"let s of sales\">\r\n              <h6>{{s.title}}</h6>\r\n              <h4><span>{{233.33 | number:'1.2-2'}}RMB</span></h4>\r\n              <p>\r\n                {{s.content}}\r\n                <span [ngClass]=\"{'less-equal':s.current - s.previous <= 0,'greater':s.current - s.previous > 0}\">\r\n                  {{s.current - s.previous}}\r\n                </span>&nbsp;\r\n                <ng-container [ngSwitch]=\"minus(s.current, s.previous)\">\r\n                  <ion-icon name=\"arrow-round-up\" color=\"danger\" *ngSwitchCase=\"1\"></ion-icon>\r\n                  <ion-icon name=\"arrow-round-forward\" color=\"success\" *ngSwitchCase=\"0\"></ion-icon>\r\n                  <ion-icon name=\"arrow-round-down\" color=\"success\" *ngSwitchCase=\"-1\"></ion-icon>\r\n                </ng-container>\r\n              </p>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"quick-actions\"  *ngFor=\"let q of quicks\">\r\n            <ion-col class=\"quick-action-item\" *ngFor=\"let qq of q\">\r\n              <a class=\"shortcut\" href={{qq.href}} *ngIf=\"!qq.disable\">\r\n                <img src=\"assets/img/{{qq.name}}.png\" alt=\"\">\r\n                <!--<ion-icon name={{qq.name}}></ion-icon>-->\r\n                <div>{{qq.text}}</div>\r\n              </a>\r\n            </ion-col>\r\n        </ion-row>    \r\n          \r\n        <ion-row class=\"quick-actions\">\r\n            <ion-col class=\"quick-action-item\">\r\n                <a class=\"shortcut\" href=\"/category-list\">\r\n                    <img src=\"/assets/img/image_addsales.png\" alt=\"\">\r\n                    <div>添加商品</div>\r\n                </a>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <app-copyright [bottom]=\"'25px'\"></app-copyright>\r\n  </ion-content>\r\n  \r\n\r\n\r\n  <!--真没抄袭-->\r\n    <!--真没抄袭-->\r\n      <!--真没抄袭-->\r\n        <!--真没抄袭-->\r\n          <!--真没抄袭-->\r\n            <!--真没抄袭-->\r\n              <!--真没抄袭-->\r\n                <!--真没抄袭-->\r\n                  <!--真没抄袭-->\r\n                    <!--真没抄袭-->\r\n                      <!--真没抄袭-->\r\n                        <!--真没抄袭-->\r\n                          <!--真没抄袭-->\r\n                            <!--真没抄袭-->\r\n                              <!--真没抄袭-->";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule); //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ
    //  ��û��Ϯ

    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.less-equal {\n  color: var(--ion-color-success, #10dc60);\n}\n\n.greater {\n  color: var(--ion-color-danger, #f04141);\n}\n\n.quick-actions + .quick-actions {\n  margin-top: -1px;\n}\n\n.quick-action-item {\n  height: 25vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: 1px solid #ececec;\n}\n\n.quick-action-item + .quick-action-item {\n  margin-left: -1px;\n}\n\n.shortcut {\n  text-align: center;\n}\n\n.shortcut ion-icon {\n  font-size: 48px;\n}\n\n.shortcut div {\n  color: var(--ion-color-dark);\n}\n\na {\n  text-decoration: none;\n}\n\n.quick-action-item:nth-child(4n+1) {\n  margin-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXElyZWxpYTk3XFxEZXNrdG9wXFxqc19wcm9qXFxteVByb2plY3RcXFNoZW5nWWlaaHVhbmdKaWEvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0ksd0NBQUE7QUNDSjs7QURDQTtFQUNBLHVDQUFBO0FDRUE7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtBQ01KOztBREpBO0VBQ0ksNEJBQUE7QUNPSjs7QURMQTtFQUNJLHFCQUFBO0FDUUo7O0FETkE7RUFDSSwyQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlc3MtZXF1YWx7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMTBkYzYwKTtcbn1cbi5ncmVhdGVye1xuY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpO1xufVxuXG4ucXVpY2stYWN0aW9ucyArIC5xdWljay1hY3Rpb25ze1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG59XG4ucXVpY2stYWN0aW9uLWl0ZW0ge1xuICAgIGhlaWdodDogMjV2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcbn1cbi5xdWljay1hY3Rpb24taXRlbSArIC5xdWljay1hY3Rpb24taXRlbXtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5zaG9ydGN1dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2hvcnRjdXQgaW9uLWljb257XG4gICAgZm9udC1zaXplOiA0OHB4O1xufVxuLnNob3J0Y3V0IGRpdntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnF1aWNrLWFjdGlvbi1pdGVtOm50aC1jaGlsZCg0bisxKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlc3MtZXF1YWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMxMGRjNjApO1xufVxuXG4uZ3JlYXRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjA0MTQxKTtcbn1cblxuLnF1aWNrLWFjdGlvbnMgKyAucXVpY2stYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5xdWljay1hY3Rpb24taXRlbSB7XG4gIGhlaWdodDogMjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VjZWM7XG59XG5cbi5xdWljay1hY3Rpb24taXRlbSArIC5xdWljay1hY3Rpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuXG4uc2hvcnRjdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaG9ydGN1dCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnNob3J0Y3V0IGRpdiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5xdWljay1hY3Rpb24taXRlbTpudGgtY2hpbGQoNG4rMSkge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/local-storage.service */
    "./src/app/shared/services/local-storage.service.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(router, localStorageService) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.localStorageService = localStorageService;
        this.sales = [{
          'title': '今日',
          'content': '比昨日',
          'current': 10.30,
          'previous': 12.03
        }, {
          'title': '七日',
          'content': '比同期',
          'current': 30.00,
          'previous': 24.54
        }, {
          'title': '本月',
          'content': '比同期',
          'current': -5.46,
          'previous': -1.25
        }];
        this.quicks = [[{
          'href': '/addProduct',
          'name': 'add_salse',
          'text': '新增商品',
          'disable': false
        }, {
          'href': '/home',
          'name': 'add_user',
          'text': '新增会员',
          'disable': false
        }, {
          'href': '/home',
          'name': 'sales_account',
          'text': '收银记账',
          'disable': false
        }, {
          'href': '/home',
          'name': 'a_note',
          'text': '支出管理',
          'disable': false
        }], [{
          'href': '/productList',
          'name': 'sales_management',
          'text': '商品管理',
          'disable': false
        }, {
          'href': '/home',
          'name': 'user_management',
          'text': '会员管理',
          'disable': false
        }, {
          'href': '/home',
          'name': 'shop_management',
          'text': '查询销售',
          'disable': false
        }, {
          'href': '/home',
          'name': 'analysis',
          'text': '智能分析',
          'disable': false
        }], [{
          'href': '/supplierList',
          'name': 'gongying_more',
          'text': '供应商管理',
          'disable': false
        }, {
          'href': '/home',
          'name': 'guandan_more',
          'text': '挂单',
          'disable': false
        }, {
          'href': '/home',
          'name': 'image_addsales',
          'text': '高级功能',
          'disable': false
        }, {
          'disable': true
        }]];
      }

      _createClass(HomePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var login = this.localStorageService.get('currentUser', null);

          if (login == null) {
            this.router.navigateByUrl('currentUser');
          }
        }
      }, {
        key: "minus",
        value: function minus(current, previous) {
          var result = current - previous;

          if (result > 0) {
            return 1;
          } else if (result === 0) {
            return 0;
          } else {
            return -1;
          }
        }
      }, {
        key: "AddSales",
        value: function AddSales() {
          console.log('turn to /category-list');
          this.router.navigateByUrl('/category-list');
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])], HomePage); //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭
    //  真没抄袭

    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map