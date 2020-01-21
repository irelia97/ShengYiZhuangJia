function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/login/login.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/login/login.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>登录</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <img src=\"assets/img/logoin_title.jpg\" alt=\"\">\n  <div padding-horizontal>\n    <form #loginForm=\"ngForm\">\n      <ion-list padding-right no-margin>\n        <ion-item lines=\"none\"></ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\">账号</ion-label>\n          <ion-input name=\"username\" type=\"text\" placeholder=\"手机号或者电子邮箱\" [(ngModel)]=\"username\" required></ion-input>\n        </ion-item>\n        <ion-item margin-top>\n          <ion-label position=\"fixed\">密码</ion-label>\n          <ion-input name=\"password\" type=\"password\" placeholder=\"您的生意专家登录密码\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-item no-lines></ion-item>\n      </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"onLogin()\">登录</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"full\" fill=\"outline\" color=\"primary\" href=\"/signup\">注册</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button fill=\"clear\" size=\"small\" (click)=\"openForgotPassword()\">忘记密码</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col>查看演示</ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/routes/login/login.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/routes/login/login.module.ts ***!
    \**********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppRoutesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/routes/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/routes/login/login.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/routes/login/login.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/routes/login/login.page.ts":
  /*!********************************************!*\
    !*** ./src/app/routes/login/login.page.ts ***!
    \********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppRoutesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/user-service.service */
    "./src/app/shared/services/user-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(toastController, userService, alertController, router) {
        _classCallCheck(this, LoginPage);

        this.toastController = toastController;
        this.userService = userService;
        this.alertController = alertController;
        this.router = router;
        this.username = ''; // 视图模型的属性账号，双向绑定

        this.password = ''; // 视图模型的属性密码，双向绑定
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast, _toast;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('onLogin()'); //console.log(form);

                    if (!(this.username === '')) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 4;
                    return this.toastController.create({
                      message: '请输入您的手机号或邮箱',
                      duration: 3000
                    });

                  case 4:
                    toast = _context.sent;
                    toast.present();
                    _context.next = 13;
                    break;

                  case 8:
                    if (!(this.password === '')) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 11;
                    return this.toastController.create({
                      message: '请输入密码',
                      duration: 3000
                    });

                  case 11:
                    _toast = _context.sent;

                    _toast.present();

                  case 13:
                    //  调用真正的登录方法
                    this.userService.login(this.username, this.password);

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openForgotPassword",
        value: function openForgotPassword() {
          this.router.navigateByUrl('forgot-password');
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/routes/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-login-login-module-es5.js.map