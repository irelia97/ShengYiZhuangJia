function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-passport-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/signup/signup.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/signup/signup.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesPassportSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar no-border>\n    <ion-title>signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <img class=\"logo\" src=\"assets/img/logo.png\" alt=\"\">\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src=\"/assets/img/registered_one.png\" alt=\"\" *ngIf=\"slideIndex!==0\">\n        <img src=\"/assets/img/registered_one_one.png\" alt=\"\" *ngIf=\"slideIndex===0\">\n      </ion-col>\n      <ion-col align-self-center>\n        <hr class=\"line\">\n      </ion-col>\n      <ion-col>\n        <img src=\"/assets/img/registered_two.png\" alt=\"\" *ngIf=\"slideIndex!==1\">\n        <img src=\"/assets/img/registered_two_two.png\" alt=\"\" *ngIf=\"slideIndex===1\">\n      </ion-col>\n      <ion-col align-self-center>\n        <hr class=\"line\">\n      </ion-col>\n      <ion-col>\n        <img src=\"/assets/img/registered_three.png\" alt=\"\" *ngIf=\"slideIndex!==2\">\n        <img src=\"/assets/img/registered_three_three.png\" alt=\"\" *ngIf=\"slideIndex===2\">\n      </ion-col>\n      <ion-col align-self-center>\n        <hr class=\"line\">\n      </ion-col>\n      <ion-col>\n        <img src=\"/assets/img/register_four.png\" alt=\"\" *ngIf=\"slideIndex!==3\">\n        <img src=\"/assets/img/register_four_four.png\" alt=\"\" *ngIf=\"slideIndex===3\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-slides #signupSlides>\n    <ion-slide>\n      <form (ngSubmit)=\"onSignupPhone(phoneForm)\" #phoneForm=\"ngForm\" novalidate style=\"width:100%\">\n        <ion-list>\n          <ion-item lines=\"none\" style=\"width: 80%;margin: 0 auto;margin-top: 20px;\">\n            <ion-input class=\"signup_text\" name=\"phone\" type=\"number\" placeholder=\"请输入手机号码\" required\n              pattern=\"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,3,5-9]))\\d{8}$\" [(ngModel)]=\"signup.phone\"\n              #phone=\"ngModel\" style=\"border: solid 1px #d8d0d0;\n                    margin-right: 10px;border-radius: 5px;\"></ion-input>\n          </ion-item>\n          <div class=\"signup_warn\">\n            <ion-text text-left color=\"danger\" *ngIf=\"(phone.invalid && phone.touched) || submited\">\n              <p class=\"warn\" [hidden]=\"!phone.errors?.required\" padding-start>请输入手机号码</p>\n              <p class=\"warn\" [hidden]=\"!phone.errors?.pattern\" padding-start>您输入的手机号码格式不正确</p>\n            </ion-text>\n          </div>\n          <ion-item lines=\"none\">\n            <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"phoneForm.invalid\" class=\"signup_button\"\n              (click)=\"onNext()\">下一步</ion-button>\n          </ion-item>\n\n        </ion-list>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <form (ngSubmit)=\"onValidateCode(codeForm)\" #codeForm=\"ngForm\" novalidate style=\"width:100%\">\n        <ion-list>\n          <ion-item lines=\"none\" style=\"width: 80%;margin: 0 auto;margin-top: 20px;\">\n            <ion-input placeholder=\"请输入验证码\" name=\"code\" type=\"number\" required pattern=\"^\\d{4}$\"\n              [(ngModel)]=\"signup.code\" #code=\"ngModel\" class=\"code_text\"></ion-input>\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"onSendSMS()\" [disabled]=\"!verifyCode.disable\"\n              class=\"code_button\">{{verifyCode.verifyCodeTips}}</ion-button>\n          </ion-item>\n          <div class=\"signup_warn\">\n            <ion-text text-left color=\"danger\" *ngIf=\"code.invalid && code.touched\">\n              <p class=\"warn\" [hidden]=\"!code.errors?.required\" padding-start>请输入验证码</p>\n              <p class=\"warn\" [hidden]=\"!code.errors?.pattern\" padding-start>请输入4位验证码</p>\n            </ion-text>\n          </div>\n          <ion-item lines=\"none\">\n            <!-- <div padding-horizontal> -->\n            <ion-button type=\"submit\" color=\"primary\" expand=\"full\" class=\"signup_button\" [disabled]=\"codeForm.invalid\"\n              (click)=\"onNext()\">下一步</ion-button>\n            <!-- </div> -->\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button color=\"primary\" expand=\"full\" class=\"signup_button\" (click)=\"onPrevious()\">上一步</ion-button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <form (ngSubmit)=\"onSignupInformation(informationForm)\" #informationForm=\"ngForm\" novalidate style=\"width:100%\">\n        <ion-list>\n          <ion-item lines=\"none\" class=\"signup_form\">\n            <ion-input name=\"shopName\" type=\"text\" placeholder=\"请输入店铺的名称\" class=\"signup_text\" required\n              [(ngModel)]=\"signup.shopName\" #shopName=\"ngModel\"></ion-input>\n          </ion-item>\n          <div class=\"signup_warn\">\n            <ion-text text-left color=\"danger\" *ngIf=\"shopName.invalid && shopName.touched\">\n              <p class=\"warn\" [hidden]=\"!shopName.errors?.required\" padding-start>请输入店铺名称</p>\n            </ion-text>\n          </div>\n          <ion-item lines=\"none\" class=\"signup_form\">\n            <ion-input name=\"email\" type=\"text\" placeholder=\"请输入电子邮箱\" class=\"signup_text\" required\n              pattern=\"^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$\" [(ngModel)]=\"signup.email\" #email=\"ngModel\">\n            </ion-input>\n          </ion-item>\n          <div class=\"signup_warn\">\n            <ion-text text-left color=\"danger\" *ngIf=\"email.invalid && email.touched\">\n              <p class=\"warn\" [hidden]=\"!email.errors?.required\" padding-start>请输入邮箱地址</p>\n              <p class=\"warn\" [hidden]=\"!email.errors?.pattern\" padding-start>您输入的邮箱号格式不正确</p>\n            </ion-text>\n          </div>\n          <ion-item lines=\"none\" class=\"signup_form\">\n            <ion-input name=\"password\" type=\"text\" placeholder=\"请输入登录密码\" class=\"signup_text\" required\n              pattern=\"^[a-zA-Z]\\w{5,17}$\" [(ngModel)]=\"signup.password\" #password=\"ngModel\"></ion-input>\n          </ion-item>\n          <div class=\"signup_warn\">\n            <ion-text text-left color=\"danger\" *ngIf=\"password.invalid && password.touched\">\n              <p class=\"warn\" [hidden]=\"!password.errors?.required\" padding-start>请输入密码</p>\n              <p class=\"warn\" [hidden]=\"!password.errors?.pattern\" padding-start>密码以字母开头，长度在6~18之间，只能包含字符、数字和下划线。</p>\n            </ion-text>\n          </div>\n          <ion-item lines=\"none\" class=\"signup_form\">\n            <ion-input name=\"confirmPassword\" type=\"text\" placeholder=\"请输入确认密码\" class=\"signup_text\" required\n              pattern=\"^[a-zA-Z]\\w{5,17}$\" [(ngModel)]=\"signup.confirmPassword\" #confirmPassword=\"ngModel\"></ion-input>\n          </ion-item>\n          <div class=\"signup_warn\">\n            <ion-text text-left color=\"danger\" *ngIf=\"confirmPassword.invalid && confirmPassword.touched\">\n              <p class=\"warn\" [hidden]=\"!confirmPassword.errors?.required\" padding-start>请再次输入密码</p>\n              <p class=\"warn\" [hidden]=\"!confirmPassword.errors?.pattern\" padding-start>密码以字母开头，长度在6~18之间，只能包含字符、数字和下划线。\n              </p>\n            </ion-text>\n          </div>\n          <ion-item lines=\"none\">\n            <ion-button type=\"submit\" [disabled]=\"informationForm.invalid\" color=\"primary\" expand=\"undefined\"\n              class=\"signup_button\" (click)=\"onNext()\">下一步</ion-button>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button color=\"primary\" expand=\"undefined\" class=\"signup_button\" (click)=\"onPrevious()\">上一步</ion-button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <form novalidate style=\"width:100%\">\n        <ion-list>\n          <ion-item lines=\"none\" style=\"width: 80%;margin: 0 auto;margin-top: 20px;\">\n            <img class=\"signup_image\" src=\"/assets/img/register_four_four.png\" alt=\"\">\n          </ion-item>\n          <ion-item lines=\"none\" style=\"width: 80%;margin: 0 auto;margin-top: 20px;\">\n            <ion-label style=\"font-size:28px;color:#959292;text-align: center;\">注册成功</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button color=\"primary\" expand=\"full\" class=\"signup_button\" (click)=\"gotoLogin()\">请去登录</ion-button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/routes/passport/signup/signup.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/routes/passport/signup/signup.module.ts ***!
    \*********************************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppRoutesPassportSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/routes/passport/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }];

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/routes/passport/signup/signup.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/routes/passport/signup/signup.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesPassportSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  width: 33%;\n}\n\n.line {\n  height: 1.5px;\n  background-color: #e9c7c7;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.one_text {\n  color: #918b8b;\n  font-size: 28px;\n}\n\n.signup_text {\n  font-size: 15px;\n  color: #723e3e;\n  border: solid 1px #967575;\n  border-radius: 5px;\n  width: 80%;\n  margin-top: 10px;\n}\n\n.signup_button {\n  width: 80%;\n  height: 45px;\n  font-size: 15px;\n  --ion-color-base: #778f3f !important;\n  --border-radius: 5px !important;\n  margin: 0 auto;\n  margin-top: 10px;\n}\n\n.signup_form {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.warn {\n  font-size: 10px;\n  display: block;\n  margin: 0 0;\n}\n\n.signup_warn {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.code_text {\n  font-size: 16px;\n  border: solid 1px #becaab;\n  margin-right: 10px;\n  border-radius: 5px;\n}\n\n.code_button {\n  font-size: 16px;\n  height: 100%;\n  --ion-color-base: #dd375b !important;\n  --border-radius: 5px;\n}\n\n.signup_image {\n  margin: 0 auto;\n}\n\n.signup_back_image {\n  float: left;\n  width: 30px;\n  height: 30px;\n}\n\n.signup_back {\n  text-align: left;\n  padding-left: 40px;\n  font-size: 15px;\n  color: #9ebb7d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3NpZ251cC9DOlxcVXNlcnNcXElyZWxpYTk3XFxEZXNrdG9wXFxqc19wcm9qXFxteVByb2plY3RcXFNoZW5nWWlaaHVhbmdKaWEvc3JjXFxhcHBcXHJvdXRlc1xccGFzc3BvcnRcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksVUFBQTtBQ0NSOztBRENNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRVI7O0FEQU07RUFDRSxXQUFBO0FDR1I7O0FERE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZNO0VBR0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEQU07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR1I7O0FERE07RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0lSOztBREZNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDS1I7O0FESE07RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ01SOztBREpNO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ09SOztBRExNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FDUVI7O0FETk07RUFDSSxjQUFBO0FDU1Y7O0FEUE07RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNVVjs7QURSTTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1dWIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL3Bhc3Nwb3J0L3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgIH1cbiAgICAgIC5saW5lIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzdjNztcbiAgICAgIH1cbiAgICAgIC5mdWxsLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAub25lX3RleHQge1xuICAgICAgICBjb2xvcjogcmdiKDE0NSwgMTM5LCAxMzkpO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICB9XG4gICAgICAuc2lnbnVwX3RleHQge1xuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLy8gdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6ICM3MjNlM2U7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM5Njc1NzU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTVweDtcbiAgICAgIH1cbiAgICAgIC5zaWdudXBfYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICM3NzhmM2YgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgICAuc2lnbnVwX2Zvcm0ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC53YXJuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDA7XG4gICAgICB9XG4gICAgICAuc2lnbnVwX3dhcm4ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICAgIC5jb2RlX3RleHQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNiZWNhYWI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgICAgLmNvZGVfYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICNkZDM3NWIgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG4gICAgICAuc2lnbnVwX2ltYWdle1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgLnNpZ251cF9iYWNrX2ltYWdle1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5zaWdudXBfYmFja3tcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICM5ZWJiN2Q7XG4gICAgICB9IiwiLmxvZ28ge1xuICB3aWR0aDogMzMlO1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMS41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWM3Yzc7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vbmVfdGV4dCB7XG4gIGNvbG9yOiAjOTE4YjhiO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5zaWdudXBfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3MjNlM2U7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5Njc1NzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNpZ251cF9idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzc3OGYzZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNpZ251cF9mb3JtIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi53YXJuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDA7XG59XG5cbi5zaWdudXBfd2FybiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29kZV90ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmVjYWFiO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvZGVfYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNkZDM3NWIgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWdudXBfaW1hZ2Uge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNpZ251cF9iYWNrX2ltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5zaWdudXBfYmFjayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzllYmI3ZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/routes/passport/signup/signup.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/routes/passport/signup/signup.page.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppRoutesPassportSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/authentiaction-code.service */
    "./src/app/shared/services/authentiaction-code.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/user-service.service */
    "./src/app/shared/services/user-service.service.ts");

    var SignupPage =
    /*#__PURE__*/
    function () {
      function SignupPage(authenticationCodeService, userService, router, alertCtrl) {
        _classCallCheck(this, SignupPage);

        this.authenticationCodeService = authenticationCodeService;
        this.userService = userService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.signup = {
          phone: '',
          email: '',
          shopName: '',
          password: '',
          confirmPassword: '',
          code: ''
        };
        this.submited = false;
        this.slideIndex = 0; // tslint:disable-next-line:member-ordering

        this.randomCode = null;
        this.verifyCode = {
          verifyCodeTips: '获取验证码',
          countdown: 60,
          disable: true
        };
      } // 字符串'signupSlides'和模板中的#signupSlides引用变量的名称一致


      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.signupSlides.lockSwipeNext(true);
        }
      }, {
        key: "onNext",
        value: function onNext() {
          this.slideIndex += 1;
          this.signupSlides.slideNext();
        }
      }, {
        key: "onPrevious",
        value: function onPrevious() {
          this.slideIndex -= 1;
          this.signupSlides.slidePrev();
        }
      }, {
        key: "onSignupPhone",
        value: function onSignupPhone(form) {
          this.submited = true;

          if (form.valid) {
            // 已通过客户端验证
            console.log(this.submited); // this.onNext();
          }
        }
      }, {
        key: "onSendSMS",
        value: function onSendSMS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.randomCode = this.authenticationCodeService.createCode(4);
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: '验证码',
                      message: '您的验证码是' + this.randomCode,
                      buttons: ['确认']
                    });

                  case 3:
                    alert = _context.sent;
                    alert.present();
                    console.log('随机生成4位随机数:' + this.randomCode); // 点击按钮后开始倒计时

                    this.verifyCode.disable = false;
                    this.settime();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "settime",
        value: function settime() {
          var _this = this;

          // tslint:disable-next-line:triple-equals
          if (this.verifyCode.countdown == 1) {
            this.verifyCode.countdown = 60;
            this.verifyCode.verifyCodeTips = '获取验证码';
            this.verifyCode.disable = true;
            return;
          } else {
            this.verifyCode.countdown--;
          }

          this.verifyCode.verifyCodeTips = '重新获取' + this.verifyCode.countdown + '秒';
          setTimeout(function () {
            _this.verifyCode.verifyCodeTips = '重新获取' + _this.verifyCode.countdown + '秒';

            _this.settime();
          }, 1000);
        }
      }, {
        key: "onValidateCode",
        value: function onValidateCode(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var inputCode, alert, _alert;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!form.valid) {
                      _context2.next = 15;
                      break;
                    }

                    // 已通过客户端验证
                    inputCode = this.signup.code; // tslint:disable-next-line:triple-equals

                    if (!(inputCode == this.randomCode)) {
                      _context2.next = 10;
                      break;
                    }

                    console.log('验证通过');
                    _context2.next = 6;
                    return this.alertCtrl.create({
                      header: '验证码通过',
                      message: '您的验证码正确！',
                      buttons: ['确认']
                    });

                  case 6:
                    alert = _context2.sent;
                    alert.present();
                    _context2.next = 15;
                    break;

                  case 10:
                    console.log('验证码不正确');
                    _context2.next = 13;
                    return this.alertCtrl.create({
                      header: '验证码错误',
                      message: '您的验证码错误！',
                      buttons: ['确认']
                    });

                  case 13:
                    _alert = _context2.sent;

                    _alert.present();

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onSignupInformation",
        value: function onSignupInformation(form) {
          if (this.signup.password === this.signup.confirmPassword) {
            // 注册成功，保存数据
            this.userService.signup_lyy(this.signup);
            this.onNext();
          } else {//this.pwdIsSame = false;
          }
        }
      }, {
        key: "gotoLogin",
        value: function gotoLogin() {
          this.router.navigateByUrl('\login');
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__["AuthentiactionCodeService"]
      }, {
        type: src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signupSlides', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], SignupPage.prototype, "signupSlides", void 0);
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/passport/signup/signup.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/routes/passport/signup/signup.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__["AuthentiactionCodeService"], src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-passport-signup-signup-module-es5.js.map