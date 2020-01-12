(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/login/login.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>登录</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <img src=\"assets/img/logoin_title.jpg\" alt=\"\">\n  <div padding-horizontal>\n    <form #loginForm=\"ngForm\">\n      <ion-list padding-right no-margin>\n        <ion-item lines=\"none\"></ion-item>\n        <ion-item>\n          <ion-label position=\"fixed\">账号</ion-label>\n          <ion-input name=\"username\" type=\"text\" placeholder=\"手机号或者电子邮箱\" [(ngModel)]=\"username\" required></ion-input>\n        </ion-item>\n        <ion-item margin-top>\n          <ion-label position=\"fixed\">密码</ion-label>\n          <ion-input name=\"password\" type=\"password\" placeholder=\"您的生意专家登录密码\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-item no-lines></ion-item>\n      </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"onLogin()\">登录</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button expand=\"full\" fill=\"outline\" color=\"primary\" href=\"/signup\">注册新账号</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button fill=\"clear\" size=\"small\" (click)=\"openForgotPassword()\">忘记密码？</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col>查看演示</ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/routes/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/routes/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/routes/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/routes/login/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/routes/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/routes/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user-service.service */ "./src/app/shared/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginPage = class LoginPage {
    constructor(toastController, userService, alertController, router) {
        this.toastController = toastController;
        this.userService = userService;
        this.alertController = alertController;
        this.router = router;
        this.username = ''; // ��ͼģ�͵������˺ţ�˫���
        this.password = ''; // ��ͼģ�͵��������룬˫���
    }
    ngOnInit() {
    }
    onLogin(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('onLogin()');
            //console.log(form);
            if (this.username === '') {
                const toast = yield this.toastController.create({
                    message: 'Please input your Tel or Email',
                    duration: 3000
                });
                toast.present();
            }
            else if (this.password === '') {
                const toast = yield this.toastController.create({
                    message: 'Please input password',
                    duration: 3000
                });
                toast.present();
            }
            //  ���������ĵ�¼����
            this.userService.login(this.username, this.password);
        });
    }
    openForgotPassword() {
        this.router.navigateByUrl('forgot-password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/routes/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_shared_services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=routes-login-login-module-es2015.js.map