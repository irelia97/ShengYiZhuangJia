function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-add-category-add-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/add-category/add-category.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/add-category/add-category.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesAddCategoryAddCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title *ngIf=\"id==0\">新增大分类</ion-title>\r\n      <ion-title *ngIf=\"id!=0\">新增小分类</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content padding>\r\n    <form (ngSubmit)=\"onSave()\" #addCategoryForm=\"ngForm\" novalidate>\r\n      <ion-list lines=\"none\">\r\n        <ion-item *ngIf=\"id==0\">\r\n          <ion-label position=\"fixed\">大分类</ion-label>\r\n          <ion-input name=\"name\" type=\"text\" placeholder=\"商品大分类名称\" [(ngModel)]=\"category.name\"></ion-input>\r\n        </ion-item>\r\n        <ion-item *ngIf=\"id!=0\">\r\n          <ion-text>{{name}}</ion-text>\r\n        </ion-item>\r\n        \r\n        <ion-item *ngFor=\"let c of children\">\r\n          <ion-label position=\"fixed\">小分类</ion-label>\r\n          <ion-input name=\"children{{c.id}}\" type=\"text\" placeholder=\"商品小分类名称\" [(ngModel)]=\"c.name\"></ion-input>\r\n        </ion-item>\r\n        <ion-item detail=\"false\" (click)=\"onAddSubCategory()\">\r\n          <ion-icon slot=\"start\" name='add-circle' color=\"primary\"></ion-icon>\r\n          <ion-label color=\"primary\">新增小分类</ion-label>\r\n        </ion-item>\r\n        <div padding-horizontal>\r\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\" [disabled]=\"addCategoryForm.invalid\">保存</ion-button>\r\n        </div>\r\n      </ion-list>\r\n    </form>\r\n  </ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/routes/add-category/add-category.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/routes/add-category/add-category.module.ts ***!
    \************************************************************/

  /*! exports provided: AddCategoryPageModule */

  /***/
  function srcAppRoutesAddCategoryAddCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPageModule", function () {
      return AddCategoryPageModule;
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


    var _add_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-category.page */
    "./src/app/routes/add-category/add-category.page.ts");

    var routes = [{
      path: '',
      component: _add_category_page__WEBPACK_IMPORTED_MODULE_6__["AddCategoryPage"]
    }];

    var AddCategoryPageModule = function AddCategoryPageModule() {
      _classCallCheck(this, AddCategoryPageModule);
    };

    AddCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_add_category_page__WEBPACK_IMPORTED_MODULE_6__["AddCategoryPage"]]
    })], AddCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/routes/add-category/add-category.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/routes/add-category/add-category.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesAddCategoryAddCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/routes/add-category/add-category.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/routes/add-category/add-category.page.ts ***!
    \**********************************************************/

  /*! exports provided: AddCategoryPage */

  /***/
  function srcAppRoutesAddCategoryAddCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPage", function () {
      return AddCategoryPage;
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


    var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/category.service */
    "./src/app/shared/services/category.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AddCategoryPage =
    /*#__PURE__*/
    function () {
      function AddCategoryPage(activatedRoute, categoryService, toastController, alertController, router) {
        var _this = this;

        _classCallCheck(this, AddCategoryPage);

        this.activatedRoute = activatedRoute;
        this.categoryService = categoryService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.children = [];
        this.category = {
          id: 0,
          name: '',
          children: []
        };
        this.increaseId = 1;
        activatedRoute.queryParams.subscribe(function (queryParams) {
          _this.id = queryParams.id;
          _this.name = queryParams.name;
        });
        var newChildren = {
          id: this.increaseId++,
          name: '',
          children: []
        };
        this.children.push(newChildren);
      }

      _createClass(AddCategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddSubCategory",
        value: function onAddSubCategory() {
          var newChildren = {
            id: this.increaseId++,
            name: '',
            children: []
          };
          this.children.push(newChildren);
        }
      }, {
        key: "onSave",
        value: function onSave() {
          if (this.id == 0) {
            this.onSavaAddCategory();
          } else {
            this.onSavaAddSubCategory();
          }
        }
      }, {
        key: "onSavaAddCategory",
        value: function onSavaAddCategory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert, toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.category.children = this.children;

                    if (!this.categoryService.insert(this.category)) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 4;
                    return this.alertController.create({
                      header: '提示',
                      message: '新增成功',
                      buttons: ['确定']
                    });

                  case 4:
                    alert = _context.sent;
                    alert.present();
                    this.router.navigateByUrl('categoryList');
                    _context.next = 13;
                    break;

                  case 9:
                    _context.next = 11;
                    return this.toastController.create({
                      message: '请注意商品大类或者小类不能重复1！',
                      duration: 3000
                    });

                  case 11:
                    toast = _context.sent;
                    toast.present();

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSavaAddSubCategory",
        value: function onSavaAddSubCategory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var data, alert, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.category.children = this.children;
                    this.category.id = this.id;
                    _context2.next = 4;
                    return this.categoryService.insertSubCategory(this.category);

                  case 4:
                    data = _context2.sent;

                    if (!data.success) {
                      _context2.next = 13;
                      break;
                    }

                    _context2.next = 8;
                    return this.alertController.create({
                      header: '提示',
                      message: '新增成功',
                      buttons: ['确定']
                    });

                  case 8:
                    alert = _context2.sent;
                    alert.present();
                    this.router.navigateByUrl('categoryList');
                    _context2.next = 17;
                    break;

                  case 13:
                    _context2.next = 15;
                    return this.toastController.create({
                      message: '请注意商品大类或者小类不能重复2！',
                      duration: 3000
                    });

                  case 15:
                    toast = _context2.sent;
                    toast.present();

                  case 17:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AddCategoryPage;
    }();

    AddCategoryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AddCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/add-category/add-category.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.page.scss */
      "./src/app/routes/add-category/add-category.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AddCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-add-category-add-category-module-es5.js.map