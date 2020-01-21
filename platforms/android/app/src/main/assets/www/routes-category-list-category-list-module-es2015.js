(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-category-list-category-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/category-list/category-list.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/category-list/category-list.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button color=\"light\" href=\"\\home\">\r\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>商品分类</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button color=\"light\" href=\"\\add-category\">\r\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content no-padding>\r\n    <ion-grid no-padding>\r\n      <ion-row no-padding align-items-stretch>\r\n        <ion-col size=\"5\" no-padding left>\r\n          <ion-list lines=\"full\" color=\"light\">\r\n            <ion-item color=\"light\">大分类</ion-item>\r\n            <ion-item *ngFor=\"let c of categories\" [color]=\"getItemColor(c.id)\" (click)=\"onSelectCategory(c.id)\" [ngClass]=\"{'item-active': c.id===activeCategory.id}\">\r\n              {{c.name}}\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n        <ion-col size=\"7\" no-padding>\r\n          <ion-list lines=\"none\">\r\n            <ion-item lines=\"full\">小分类</ion-item>\r\n            <ion-item detail lines=\"full\">无小分类进入大分类</ion-item>\r\n            <ion-item detail *ngFor=\"let ac of activeCategory.children\" lines=\"full\">\r\n              {{ac.name}}\r\n            </ion-item>\r\n            <ion-item detail=\"false\" routerLink=\"/addCategory\" [queryParams]=\"{'id': activeCategory.id, 'name': activeCategory.name}\">\r\n              <ion-icon slot=\"start\" name='add-circle' color=\"primary\"></ion-icon>\r\n              <ion-label color=\"primary\">新增小分类</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list class=\"list-footer\" lines=\"none\" no-margin >\r\n            <ion-item lines=\"full\">\r\n              <ion-text *ngIf=\"activeCategory.children.length===0\"><h6>目前没有小分类</h6></ion-text>\r\n              <ion-text *ngIf=\"activeCategory.children.length!==0\">共{{activeCategory.children.length}}种商品分类</ion-text>\r\n              <ion-button color=\"light\" slot=\"end\" (click)=\"onPresentActionSheet()\">\r\n                <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/routes/category-list/category-list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/category-list/category-list.module.ts ***!
  \**************************************************************/
/*! exports provided: CategoryListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function() { return CategoryListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list.page */ "./src/app/routes/category-list/category-list.page.ts");







const routes = [
    {
        path: '',
        component: _category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]
    }
];
let CategoryListPageModule = class CategoryListPageModule {
};
CategoryListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]]
    })
], CategoryListPageModule);



/***/ }),

/***/ "./src/app/routes/category-list/category-list.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/routes/category-list/category-list.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  height: 100%;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\nion-grid ion-row {\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n  height: 100%;\n}\nion-grid ion-row ion-col[left] {\n  background-color: var(--ion-color-light);\n}\nion-grid .list-footer {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n}\nion-grid .item-active {\n  border-left-color: var(--ion-color-primary);\n  border-left-width: 4px;\n  border-left-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhdGVnb3J5LWxpc3QvQzpcXFVzZXJzXFxJcmVsaWE5N1xcRGVza3RvcFxcanNfcHJvalxcbXlQcm9qZWN0XFxTaGVuZ1lpWmh1YW5nSmlhL3NyY1xcYXBwXFxyb3V0ZXNcXGNhdGVnb3J5LWxpc3RcXGNhdGVnb3J5LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtVQUFBLG9CQUFBO0FDQ0o7QURBSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLFlBQUE7QUNFTjtBRERNO0VBQ0Usd0NBQUE7QUNHUjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFTjtBRENJO0VBQ0UsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGZsZXg6IDEgMCAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGlvbi1jb2xbbGVmdF0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWZvb3RlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pdGVtLWFjdGl2ZXtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG4gIH0iLCJpb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5pb24tZ3JpZCBpb24tcm93IHtcbiAgZmxleDogMSAwIDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbFtsZWZ0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tZ3JpZCAubGlzdC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5pb24tZ3JpZCAuaXRlbS1hY3RpdmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/routes/category-list/category-list.page.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/category-list/category-list.page.ts ***!
  \************************************************************/
/*! exports provided: CategoryListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPage", function() { return CategoryListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/category.service */ "./src/app/shared/services/category.service.ts");





let CategoryListPage = class CategoryListPage {
    constructor(categoryService, actionSheetController, router, events) {
        this.categoryService = categoryService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.events = events;
        this.count = 0;
        categoryService.getAll().then((data) => {
            this.categories = data.result;
            if (this.categories) {
                this.activeCategory = this.categories[0];
            }
        });
    }
    ionViewWillEnter() {
        this.categoryService.getAll().then((data) => {
            this.categories = data.result;
            if (this.categories) {
                this.activeCategory = this.categories[0];
            }
        });
    }
    ngOnInit() {
    }
    onPresentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: '选择您的操作',
                buttons: [
                    {
                        text: '新增小分类',
                        role: 'destructive',
                        handler: () => {
                            this.router.navigateByUrl('/add-category', { queryParams: { 'id': this.activeCategory.id, 'name': this.activeCategory.name } });
                        }
                    }, {
                        text: '编辑分类',
                        handler: () => {
                            this.router.navigate(['/editCategory'], { queryParams: { 'id': this.activeCategory.id } });
                        }
                    }, {
                        text: '取消',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    getItemColor(id) {
        if (id === this.activeCategory.id) {
            return '';
        }
        else {
            return 'light';
        }
    }
    onSelectCategory(id) {
        for (let c of this.categories) {
            if (c.id === id) {
                this.activeCategory = c;
                break;
            }
        }
    }
    onSelectSubCategory(category) {
        this.events.publish('category:selected', category, Date.now());
        //this.location.back();
    }
    back() {
        //this.location.back();
    }
};
CategoryListPage.ctorParameters = () => [
    { type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
CategoryListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/category-list/category-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-list.page.scss */ "./src/app/routes/category-list/category-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], CategoryListPage);



/***/ })

}]);
//# sourceMappingURL=routes-category-list-category-list-module-es2015.js.map