function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-category-list-category-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/category-list/category-list.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/category-list/category-list.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoutesCategoryListCategoryListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-button color=\"light\" (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>��Ʒ����</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button color=\"light\" routerLink=\"/addCategory\" [queryParams]=\"{'id': 0, 'name': ''}\">\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content no-padding>\n    <ion-grid no-padding>\n      <ion-row no-padding align-items-stretch>\n        <ion-col size=\"5\" no-padding left>\n          <ion-list lines=\"full\" color=\"light\">\n            <ion-item color=\"light\">�����</ion-item>\n            <ion-item *ngFor=\"let c of categories\" [color]=\"getItemColor(c.id)\" (click)=\"onSelectCategory(c.id)\" [ngClass]=\"{'item-active': c.id===activeCategory.id}\">\n              {{c.name}}\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col size=\"7\" no-padding>\n          <ion-list lines=\"none\">\n            <ion-item lines=\"full\">С����</ion-item>\n            <ion-item detail lines=\"full\" (click)=\"onSelectSubCategory(activeCategory)\">��С�����������</ion-item>\n            <ion-item detail *ngFor=\"let ac of activeCategory.children\" lines=\"full\" (click)=\"onSelectSubCategory(ac)\">\n              {{ac.name}}\n            </ion-item>\n            <ion-item detail=\"false\" routerLink=\"/addCategory\" [queryParams]=\"{'id': activeCategory.id, 'name': activeCategory.name}\">\n              <ion-icon slot=\"start\" name='add-circle' color=\"primary\"></ion-icon>\n              <ion-label color=\"primary\">����С����</ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-list class=\"list-footer\" lines=\"none\" no-margin >\n            <ion-item lines=\"full\">\n              <ion-text *ngIf=\"activeCategory.children.length===0\"><h6>Ŀǰû��С����</h6></ion-text>\n              <ion-text *ngIf=\"activeCategory.children.length!==0\">��{{activeCategory.children.length}}����Ʒ����</ion-text>\n              <ion-button color=\"light\" slot=\"end\" (click)=\"onPresentActionSheet()\">\n                <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/routes/category-list/category-list.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/routes/category-list/category-list.module.ts ***!
    \**************************************************************/

  /*! exports provided: CategoryListPageModule */

  /***/
  function srcAppRoutesCategoryListCategoryListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function () {
      return CategoryListPageModule;
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


    var _category_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-list.page */
    "./src/app/routes/category-list/category-list.page.ts");

    var routes = [{
      path: '',
      component: _category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]
    }];

    var CategoryListPageModule = function CategoryListPageModule() {
      _classCallCheck(this, CategoryListPageModule);
    };

    CategoryListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]]
    })], CategoryListPageModule);
    /***/
  },

  /***/
  "./src/app/routes/category-list/category-list.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/routes/category-list/category-list.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoutesCategoryListCategoryListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid {\n  height: 100%;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\nion-grid ion-row {\n  -webkit-box-flex: 1;\n          flex: 1 0 100%;\n  height: 100%;\n}\nion-grid ion-row ion-col[left] {\n  background-color: var(--ion-color-light);\n}\nion-grid .list-footer {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n}\nion-grid .item-active {\n  border-left-color: var(--ion-color-primary);\n  border-left-width: 4px;\n  border-left-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhdGVnb3J5LWxpc3QvQzpcXFVzZXJzXFxJcmVsaWE5N1xcRGVza3RvcFxcanNfcHJvalxcbXlQcm9qZWN0XFxTaGVuZ1lpWmh1YW5nSmlhL3NyY1xcYXBwXFxyb3V0ZXNcXGNhdGVnb3J5LWxpc3RcXGNhdGVnb3J5LWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9yb3V0ZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtVQUFBLG9CQUFBO0FDQ0o7QURBSTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtFQUNBLFlBQUE7QUNFTjtBRERNO0VBQ0Usd0NBQUE7QUNHUjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFTjtBRENJO0VBQ0UsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGZsZXg6IDEgMCAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGlvbi1jb2xbbGVmdF0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWZvb3RlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pdGVtLWFjdGl2ZXtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgfVxyXG4gIH0iLCJpb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5pb24tZ3JpZCBpb24tcm93IHtcbiAgZmxleDogMSAwIDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbFtsZWZ0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tZ3JpZCAubGlzdC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5pb24tZ3JpZCAuaXRlbS1hY3RpdmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/routes/category-list/category-list.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/routes/category-list/category-list.page.ts ***!
    \************************************************************/

  /*! exports provided: CategoryListPage */

  /***/
  function srcAppRoutesCategoryListCategoryListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListPage", function () {
      return CategoryListPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/category.service */
    "./src/app/shared/services/category.service.ts");

    var CategoryListPage =
    /*#__PURE__*/
    function () {
      function CategoryListPage(categoryService, actionSheetController, router, events, location) {
        var _this = this;

        _classCallCheck(this, CategoryListPage);

        this.categoryService = categoryService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.events = events;
        this.location = location;
        this.count = 0;
        categoryService.getAll().then(function (data) {
          _this.categories = data.result;

          if (_this.categories) {
            _this.activeCategory = _this.categories[0];
          }
        });
      }

      _createClass(CategoryListPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.categoryService.getAll().then(function (data) {
            _this2.categories = data.result;

            if (_this2.categories) {
              _this2.activeCategory = _this2.categories[0];
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onPresentActionSheet",
        value: function onPresentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'ѡ�����Ĳ���',
                      buttons: [{
                        text: '����С����',
                        role: 'destructive',
                        handler: function handler() {
                          _this3.router.navigate(['/addCategory'], {
                            queryParams: {
                              'id': _this3.activeCategory.id,
                              'name': _this3.activeCategory.name
                            }
                          });
                        }
                      }, {
                        text: '�༭����',
                        handler: function handler() {
                          _this3.router.navigate(['/editCategory'], {
                            queryParams: {
                              'id': _this3.activeCategory.id
                            }
                          });
                        }
                      }, {
                        text: 'ȡ��',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getItemColor",
        value: function getItemColor(id) {
          if (id === this.activeCategory.id) {
            return '';
          } else {
            return 'light';
          }
        }
      }, {
        key: "onSelectCategory",
        value: function onSelectCategory(id) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var c = _step.value;

              if (c.id === id) {
                this.activeCategory = c;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "onSelectSubCategory",
        value: function onSelectSubCategory(category) {
          this.events.publish('category:selected', category, Date.now()); //this.location.back();
        }
      }, {
        key: "back",
        value: function back() {//this.location.back();
        }
      }]);

      return CategoryListPage;
    }();

    CategoryListPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: Location
      }];
    };

    CategoryListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/category-list/category-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-list.page.scss */
      "./src/app/routes/category-list/category-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], Location])], CategoryListPage);
    /***/
  }
}]);
//# sourceMappingURL=routes-category-list-category-list-module-es5.js.map