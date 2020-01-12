function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-forgot-password-forgot-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forgot-password/forgot-password.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forgot-password/forgot-password.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"Back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Find PassWord</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      1. Input email or tel> 2. Input Code>3. Reset PassWord\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-slides  #forgotPasswordSlides>\n      <ion-slide>\n          <form (ngSubmit)=\"onSendPhone()\" #forgotPasswordForm=\"ngForm\" novalidate>\n            <ion-list>\n              <ion-item>\n                <ion-label position=\"fixed\">Email/Tel</ion-label>\n                <ion-input name=\"forgotPhone\" type=\"text\" required [(ngModel)]=\"user.forgotPhone\"></ion-input>\n              </ion-item>\n              <div padding-horizontal>\n                <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"forgotPasswordForm.invalid\">Git</ion-button>\n              </div>\n            </ion-list>\n          </form>\n      </ion-slide>\n      <ion-slide>\n        <form (ngSubmit)=\"onSendCode()\" #codeForm=\"ngForm\" novalidate>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"fixed\">Code</ion-label>\n              <ion-input name=\"code\" type=\"text\" required [(ngModel)]=\"user.code\"></ion-input>\n            </ion-item>\n            <ion-text text-left color=\"danger\" *ngIf=\"codeForm.submitted\">\n              <p [hidden]=\"codeIsRight\" padding-start>Your code is not right!</p>\n            </ion-text>\n            <div padding-horizontal>\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"codeForm.invalid\">Git</ion-button>\n            </div>\n          </ion-list>\n        </form>\n      </ion-slide>\n      <ion-slide>\n        <form (ngSubmit)=\"onSendPwd()\" #pwdForm=\"ngForm\" novalidate>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"fixed\">User PassWord</ion-label>\n              <ion-input name=\"pwd\" type=\"password\" required [(ngModel)]=\"user.pwd\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"fixed\">Confirm PassWord</ion-label>\n              <ion-input name=\"cpwd\" type=\"password\" required [(ngModel)]=\"user.cpwd\"></ion-input>\n            </ion-item>\n            <ion-text text-left color=\"danger\" *ngIf=\"pwdForm.submitted\">\n              <p [hidden]=\"pwdIsSame\" padding-start>PassWord not Same</p>\n            </ion-text>\n            <div padding-horizontal>\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"pwdForm.invalid\">Git</ion-button>\n            </div>\n          </ion-list>\n        </form>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/routes/forgot-password/forgot-password.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/routes/forgot-password/forgot-password.module.ts ***!
    \******************************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppRoutesForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
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


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/routes/forgot-password/forgot-password.page.ts");

    var routes = [{
      path: '',
      component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }];

    var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
      _classCallCheck(this, ForgotPasswordPageModule);
    };

    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })], ForgotPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/routes/forgot-password/forgot-password.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/routes/forgot-password/forgot-password.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/routes/forgot-password/forgot-password.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/routes/forgot-password/forgot-password.page.ts ***!
    \****************************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppRoutesForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
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


    var src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/authentiaction-code.service */
    "./src/app/shared/services/authentiaction-code.service.ts");
    /* harmony import */


    var src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/user-service.service */
    "./src/app/shared/services/user-service.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ForgotPasswordPage =
    /*#__PURE__*/
    function () {
      function ForgotPasswordPage(authenticationCodeService, router, userService, toastController, alertController, menuController) {
        _classCallCheck(this, ForgotPasswordPage);

        this.authenticationCodeService = authenticationCodeService;
        this.router = router;
        this.userService = userService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.menuController = menuController;
        this.user = {
          forgotPhone: '',
          code: '',
          pwd: '',
          cpwd: ''
        };
        this.codeIsRight = true;
        this.pwdIsSame = true;
      }

      _createClass(ForgotPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.forgotPasswordSlides.lockSwipeToNext(true);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menuController.enable(false);
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.menuController.enable(true);
        }
      }, {
        key: "next",
        value: function next() {
          this.forgotPasswordSlides.lockSwipeToNext(false);
          this.forgotPasswordSlides.slideNext();
          this.forgotPasswordSlides.lockSwipeToNext(true);
        }
      }, {
        key: "previous",
        value: function previous() {
          this.forgotPasswordSlides.lockSwipeToNext(false);
          this.forgotPasswordSlides.slidePrev();
          this.forgotPasswordSlides.lockSwipeToNext(true);
        }
      }, {
        key: "onSendPhone",
        value: function onSendPhone() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.userService.check(this.user.forgotPhone)) {
                      _context.next = 5;
                      break;
                    }

                    this.authenticationCodeService.createCode(4);
                    this.next();
                    _context.next = 9;
                    break;

                  case 5:
                    _context.next = 7;
                    return this.toastController.create({
                      message: 'Tel not register!',
                      duration: 3000
                    });

                  case 7:
                    toast = _context.sent;
                    toast.present();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSendCode",
        value: function onSendCode() {
          if (this.authenticationCodeService.validate(this.user.code)) {
            this.next();
          } else {
            // ��֤�����
            this.codeIsRight = false;
          }
        }
      }, {
        key: "onSendPwd",
        value: function onSendPwd() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.user.pwd === this.user.cpwd)) {
                      _context2.next = 9;
                      break;
                    }

                    if (!this.userService.update(this.user.forgotPhone, this.user.pwd)) {
                      _context2.next = 7;
                      break;
                    }

                    _context2.next = 4;
                    return this.alertController.create({
                      header: 'Tips',
                      message: 'PassWord modify successful!',
                      buttons: ['Confirm']
                    });

                  case 4:
                    alert = _context2.sent;
                    alert.present();
                    this.router.navigateByUrl('login');

                  case 7:
                    _context2.next = 10;
                    break;

                  case 9:
                    this.pwdIsSame = false;

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ForgotPasswordPage;
    }();

    ForgotPasswordPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__["AuthentiactionCodeService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forgotPasswordSlides', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])], ForgotPasswordPage.prototype, "forgotPasswordSlides", void 0);
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forgot-password/forgot-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.page.scss */
      "./src/app/routes/forgot-password/forgot-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__["AuthentiactionCodeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])], ForgotPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-forgot-password-forgot-password-module-es5.js.map