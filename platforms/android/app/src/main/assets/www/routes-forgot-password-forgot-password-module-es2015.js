(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forgot-password/forgot-password.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forgot-password/forgot-password.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"Back\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>找回密码</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n      1. 输入邮箱或手机号> 2. 输入验证码>3. 重置密码\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n    <ion-slides  #forgotPasswordSlides>\r\n      <ion-slide>\r\n          <form (ngSubmit)=\"onSendPhone()\" #forgotPasswordForm=\"ngForm\" novalidate>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-label position=\"fixed\">邮箱/手机号</ion-label>\r\n                <ion-input name=\"forgotPhone\" type=\"text\" required [(ngModel)]=\"user.forgotPhone\"></ion-input>\r\n              </ion-item>\r\n              <div padding-horizontal>\r\n                <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"forgotPasswordForm.invalid\">提交</ion-button>\r\n              </div>\r\n            </ion-list>\r\n          </form>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <form (ngSubmit)=\"onSendCode()\" #codeForm=\"ngForm\" novalidate>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"fixed\">验证码</ion-label>\r\n              <ion-input name=\"code\" type=\"text\" required [(ngModel)]=\"user.code\"></ion-input>\r\n            </ion-item>\r\n            <ion-text text-left color=\"danger\" *ngIf=\"codeForm.submitted\">\r\n              <p [hidden]=\"codeIsRight\" padding-start>您的验证码有误!</p>\r\n            </ion-text>\r\n            <div padding-horizontal>\r\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"codeForm.invalid\">提交</ion-button>\r\n            </div>\r\n          </ion-list>\r\n        </form>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <form (ngSubmit)=\"onSendPwd()\" #pwdForm=\"ngForm\" novalidate>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"fixed\">新密码</ion-label>\r\n              <ion-input name=\"pwd\" type=\"password\" required [(ngModel)]=\"user.pwd\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"fixed\">确认密码</ion-label>\r\n              <ion-input name=\"cpwd\" type=\"password\" required [(ngModel)]=\"user.cpwd\"></ion-input>\r\n            </ion-item>\r\n            <ion-text text-left color=\"danger\" *ngIf=\"pwdForm.submitted\">\r\n              <p [hidden]=\"pwdIsSame\" padding-start>两次密码不相同</p>\r\n            </ion-text>\r\n            <div padding-horizontal>\r\n              <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"pwdForm.invalid\">提交</ion-button>\r\n            </div>\r\n          </ion-list>\r\n        </form>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/routes/forgot-password/forgot-password.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/forgot-password/forgot-password.module.ts ***!
  \******************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/routes/forgot-password/forgot-password.page.ts");







const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/routes/forgot-password/forgot-password.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/routes/forgot-password/forgot-password.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/routes/forgot-password/forgot-password.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/forgot-password/forgot-password.page.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/authentiaction-code.service */ "./src/app/shared/services/authentiaction-code.service.ts");
/* harmony import */ var src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user-service.service */ "./src/app/shared/services/user-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(authenticationCodeService, router, userService, toastController, alertController, menuController, alertCtrl) {
        this.authenticationCodeService = authenticationCodeService;
        this.router = router;
        this.userService = userService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.menuController = menuController;
        this.alertCtrl = alertCtrl;
        this.user = {
            forgotPhone: '',
            code: '',
            pwd: '',
            cpwd: ''
        };
        this.scode = "0";
        this.codeIsRight = true;
        this.pwdIsSame = true;
    }
    ngOnInit() {
        //this.forgotPasswordSlides.lockSwipeToNext(true);
    }
    ionViewDidEnter() {
        this.menuController.enable(false);
    }
    ionViewDidLeave() {
        this.menuController.enable(true);
    }
    next() {
        this.forgotPasswordSlides.lockSwipeToNext(false);
        this.forgotPasswordSlides.slideNext();
        this.forgotPasswordSlides.lockSwipeToNext(true);
    }
    previous() {
        this.forgotPasswordSlides.lockSwipeToNext(false);
        this.forgotPasswordSlides.slidePrev();
        this.forgotPasswordSlides.lockSwipeToNext(true);
    }
    onSendPhone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userService.check(this.user.forgotPhone)) {
                this.scode = this.authenticationCodeService.createCode(4);
                let alert = yield this.alertCtrl.create({
                    header: '验证码',
                    message: '您的验证码是' + this.scode,
                    buttons: ['确认']
                });
                alert.present();
                this.next();
            }
            else {
                let toast = yield this.toastController.create({
                    message: '不存在这个手机用户！',
                    duration: 3000
                });
                toast.present();
            }
        });
    }
    onSendCode() {
        if (this.scode == this.user.code) {
            this.next();
        }
        else {
            // 验证码错误
            this.codeIsRight = false;
        }
    }
    onSendPwd() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.user.pwd === this.user.cpwd) {
                // 注册成功，保存数据
                if (this.userService.update(this.user.forgotPhone, this.user.pwd)) {
                    let alert = yield this.alertController.create({
                        header: '提示',
                        message: '密码修改成功！',
                        buttons: ['确认']
                    });
                    alert.present();
                    this.router.navigateByUrl('login');
                }
            }
            else {
                this.pwdIsSame = false;
            }
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__["AuthentiactionCodeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forgotPasswordSlides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], ForgotPasswordPage.prototype, "forgotPasswordSlides", void 0);
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forgot-password/forgot-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/routes/forgot-password/forgot-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_authentiaction_code_service__WEBPACK_IMPORTED_MODULE_3__["AuthentiactionCodeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=routes-forgot-password-forgot-password-module-es2015.js.map