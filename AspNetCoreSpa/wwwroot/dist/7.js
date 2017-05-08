webpackJsonp([7],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(8);
var data_service_1 = __webpack_require__(19);
var ProductService = (function () {
    function ProductService(dataService) {
        this.dataService = dataService;
        this.baseUrl = 'api/product';
    }
    ProductService.prototype.getProducts = function () {
        return this.dataService.get(this.baseUrl);
    };
    ProductService.prototype.getProduct = function (id) {
        if (id === '0') {
            return Observable_1.Observable.of(this.initializeProduct());
        }
        var url = this.baseUrl + "/" + id;
        return this.dataService.get(url);
    };
    ProductService.prototype.deleteProduct = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.dataService.delete(url);
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product._id === '0') {
            return this.createProduct(product);
        }
        return this.updateProduct(product);
    };
    ProductService.prototype.createProduct = function (product) {
        product._id = '';
        return this.dataService.post(this.baseUrl, product);
    };
    ProductService.prototype.updateProduct = function (product) {
        var url = this.baseUrl + "/" + product._id;
        return this.dataService.put(url, product);
    };
    ProductService.prototype.initializeProduct = function () {
        // Return an initialized object
        return {
            _id: '0',
            productName: '',
            productCode: '',
            tags: [''],
            releaseDate: '',
            price: 0,
            description: '',
            starRating: 0,
            imageUrl: ''
        };
    };
    return ProductService;
}());
ProductService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [data_service_1.DataService])
], ProductService);
exports.ProductService = ProductService;


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var product_service_1 = __webpack_require__(155);
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['_id'];
            _this.getProduct(id);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) { return _this.product = product; }, 
        // tslint:disable-next-line:whitespace
        function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['examples/reactiveforms']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = tslib_1.__decorate([
    core_1.Component({
        template: __webpack_require__(248)
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(9);
var router_1 = __webpack_require__(7);
var Observable_1 = __webpack_require__(8);
var product_service_1 = __webpack_require__(155);
var number_validator_1 = __webpack_require__(290);
var generic_validator_1 = __webpack_require__(289);
var ProductEditComponent = (function () {
    function ProductEditComponent(fb, route, router, productService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        this.validationMessages = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }
        };
        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    Object.defineProperty(ProductEditComponent.prototype, "tags", {
        get: function () {
            // tslint:disable-next-line:whitespace
            return this.productForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this.fb.group({
            productName: ['', [forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            productCode: ['', forms_1.Validators.required],
            starRating: ['', number_validator_1.NumberValidators.range(1, 5)],
            tags: this.fb.array([]),
            description: ''
        });
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['_id'];
            _this.getProduct(id);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable
            .merge.apply(Observable_1.Observable, [this.productForm.valueChanges].concat(controlBlurs)).debounceTime(800)
            .subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new forms_1.FormControl());
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.onProductRetrieved(product); }, 
        // tslint:disable-next-line:whitespace
        function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        if (this.productForm) {
            this.productForm.reset();
        }
        this.product = product;
        if (this.product._id === '0') {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
        // Update the data on the form
        this.productForm.patchValue({
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description
        });
        this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product._id === '0') {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.productService.deleteProduct(this.product._id)
                    .subscribe(function () { return _this.onSaveComplete(); }, 
                // tslint:disable-next-line:whitespace
                function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.productForm.dirty && this.productForm.valid) {
            // Copy the form values over the product object values
            var p = Object.assign({}, this.product, this.productForm.value);
            this.productService.saveProduct(p)
                .subscribe(function () { return _this.onSaveComplete(); }, 
            // tslint:disable-next-line:whitespace
            function (error) { return _this.errorMessage = error; });
        }
        else if (!this.productForm.dirty) {
            this.onSaveComplete();
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.productForm.reset();
        this.router.navigate(['examples/reactiveforms']);
    };
    return ProductEditComponent;
}());
tslib_1.__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    tslib_1.__metadata("design:type", core_1.QueryList)
], ProductEditComponent.prototype, "formInputElements", void 0);
ProductEditComponent = tslib_1.__decorate([
    core_1.Component({
        template: __webpack_require__(249)
    }),
    tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var ProductDetailGuard = (function () {
    function ProductDetailGuard(router) {
        this.router = router;
    }
    ProductDetailGuard.prototype.canActivate = function (route) {
        var id = route.url[1].path;
        if (!id) {
            alert('Invalid product Id');
            // start a new navigation to redirect to list page
            this.router.navigate(['examples/reactiveforms']);
            // abort current navigation
            return false;
        }
        return true;
    };
    return ProductDetailGuard;
}());
ProductDetailGuard = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [router_1.Router])
], ProductDetailGuard);
exports.ProductDetailGuard = ProductDetailGuard;
// tslint:disable-next-line:max-classes-per-file
var ProductEditGuard = (function () {
    function ProductEditGuard() {
    }
    ProductEditGuard.prototype.canDeactivate = function (component) {
        if (component.productForm) {
            var productName = component.productForm.get('productName').value || 'New Product';
            return confirm("Navigate away and lose all changes to " + productName + "?");
        }
        return true;
    };
    return ProductEditGuard;
}());
ProductEditGuard = tslib_1.__decorate([
    core_1.Injectable()
], ProductEditGuard);
exports.ProductEditGuard = ProductEditGuard;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var product_service_1 = __webpack_require__(155);
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, 
        // tslint:disable-next-line:whitespace
        function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    return ProductListComponent;
}());
ProductListComponent = tslib_1.__decorate([
    core_1.Component({
        template: __webpack_require__(250),
        styles: [__webpack_require__(324)]
    }),
    tslib_1.__metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".crop {\n  overflow: hidden; }\n\ndiv {\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "thead {\n  color: #337AB7; }\n", ""]);

// exports


/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" \r\n    [style.width.px]=\"starWidth\"\r\n    [title]=\"rating\"\r\n    (click)='onClick()'>\r\n    <div style=\"width: 86px\">\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n        <span class=\"fa fa-star\"></span>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"product\">\r\n    <div class=\"panel-heading\" style=\"font-size:large\">\r\n        {{pageTitle + \": \" + product.productName}}\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">Name:</div>\r\n                    <div class=\"col-md-6\">{{product.productName}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">Code:</div>\r\n                    <div class=\"col-md-6\">{{product.productCode}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">Description:</div>\r\n                    <div class=\"col-md-6\">{{product.description}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">Availability:</div>\r\n                    <div class=\"col-md-6\">{{product.releaseDate}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">Price:</div>\r\n                    <div class=\"col-md-6\">{{product.price|currency:\"USD\":true}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">5 Star Rating:</div>\r\n                    <div class=\"col-md-6\">\r\n                        <appc-ai-star [rating]=\"product.starRating\"\r\n                                (ratingClicked)=\"onRatingClicked($event)\">\r\n                        </appc-ai-star>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">Tags:</div>\r\n                    <div class=\"col-md-6\">{{product.tags}}</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\" *ngIf=\"product.imageUrl\">\r\n                <img class=\"center-block img-responsive\" \r\n                     [style.width.px]=\"200\" \r\n                     [style.margin.px]=\"2\" \r\n                     [src]=\"product.imageUrl\"\r\n                     [title]=\"product.productName\">\r\n            </div>\r\n        </div>\r\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\r\n    </div>\r\n\r\n    <div class=\"panel-footer\">\r\n        <a class=\"btn btn-default\" (click)=\"onBack()\" style=\"width:80px\">\r\n            <i class=\"glyphicon glyphicon-chevron-left\"></i> Back\r\n        </a>\r\n        <a class=\"btn btn-primary\" style=\"width:80px;margin-left:10px\" \r\n           [routerLink]=\"['/examples/reactiveforms/productEdit', product._id]\">\r\n            Edit\r\n        </a>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">\r\n        {{pageTitle}}\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <form class=\"form-horizontal\"\r\n              (ngSubmit)=\"saveProduct()\"\r\n              [formGroup]=\"productForm\" >\r\n            <fieldset>\r\n                <div class=\"form-group\" \r\n                     [ngClass]=\"{'has-error': displayMessage.productName }\">\r\n                    <label class=\"col-md-2 control-label\" for=\"productNameId\">Product Name</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" \r\n                                id=\"productNameId\" \r\n                                type=\"text\" \r\n                                placeholder=\"Name (required)\" \r\n                                formControlName=\"productName\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.productName\">\r\n                                {{displayMessage.productName}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group\" \r\n                     [ngClass]=\"{'has-error': displayMessage.productCode}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"productCodeId\">Product Code</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" \r\n                                id=\"productCodeId\" \r\n                                type=\"text\" \r\n                                placeholder=\"Code (required)\" \r\n                                formControlName=\"productCode\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.productCode\">\r\n                                {{displayMessage.productCode}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.starRating}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"starRatingId\">Star Rating (1-5)</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <input class=\"form-control\" \r\n                                id=\"starRatingId\" \r\n                                type=\"text\" \r\n                                placeholder=\"Rating\" \r\n                                formControlName=\"starRating\" />\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.starRating\">\r\n                                {{displayMessage.starRating}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div formArrayName=\"tags\">\r\n                    <div class=\"row\">\r\n                        <button class=\"btn btn-default\"\r\n                                type=\"button\"\r\n                                (click)=\"addTag()\">Add Tag\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"form-group\"\r\n                        *ngFor=\"let tag of tags.controls; let i=index\" >\r\n                        <label class=\"col-md-2 control-label\" [attr.for]=\"i\">Tag</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" \r\n                                    [id]=\"i\" \r\n                                    type=\"text\" \r\n                                    placeholder=\"Tag\" \r\n                                    [formControlName]=\"i\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error': displayMessage.description}\">\r\n                    <label class=\"col-md-2 control-label\" for=\"descriptionId\">Description</label>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <textarea class=\"form-control\" \r\n                                id=\"descriptionId\" \r\n                                placeholder=\"Description\"\r\n                                rows=3\r\n                                formControlName=\"description\"></textarea>\r\n                        <span class=\"help-block\" *ngIf=\"displayMessage.description\">\r\n                                {{ displayMessage.description}}\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-4 col-md-offset-2\">\r\n                        <span>\r\n                            <button class=\"btn btn-primary\"\r\n                                    type=\"submit\"\r\n                                    style=\"width:80px;margin-right:10px\"\r\n                                    [disabled]='!productForm.valid'>\r\n                                Save\r\n                            </button>\r\n                        </span>\r\n                        <span>\r\n                            <a class=\"btn btn-default\"\r\n                               style=\"width:80px\"\r\n                               [routerLink]=\"['../../']\">\r\n                                Cancel\r\n                            </a>\r\n                        </span>\r\n                        <span>\r\n                            <a class=\"btn btn-default\"\r\n                               style=\"width:80px\"\r\n                               (click)=\"deleteProduct()\">\r\n                                Delete\r\n                            </a>\r\n                        </span>       \r\n                     </div>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\r\n    </div>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n    <div class='panel-heading'>\r\n        {{pageTitle}}\r\n    </div>\r\n\r\n    <!-- Filter the Products   -->\r\n    <div class='panel-body'>\r\n        <div class='row'>\r\n            <div class='col-md-2'>Filter by:</div>\r\n            <div class='col-md-4'>\r\n                <input type='text' [(ngModel)]='listFilter' />\r\n            </div>\r\n        </div>\r\n        <div class='row' *ngIf='listFilter'>\r\n            <div class='col-md-6'>\r\n                <h3>Filtered by: {{listFilter}} </h3>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>\r\n\r\n        <div class='table-responsive'>\r\n            <table class='table'\r\n                   *ngIf='products && products.length'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            <button class='btn btn-primary'\r\n                                (click)='toggleImage()'>\r\n                                {{showImage ? 'Hide' : 'Show'}} Image\r\n                            </button>\r\n                        </th>\r\n                        <th>Product</th>\r\n                        <th>Code</th>\r\n                        <th>Available</th>\r\n                        <th>Price</th>\r\n                        <th>5 Star Rating</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let product of products | productFilter:listFilter'>\r\n                        <td>\r\n                            <img *ngIf='showImage && product.imageUrl'\r\n                                 [src]='product.imageUrl'\r\n                                 [title]='product.productName | uppercase'\r\n                                 [style.width.px]='imageWidth' \r\n                                 [style.margin.px]='imageMargin'>\r\n                        </td>\r\n                        <td><a [routerLink]=\"['product', product._id]\">\r\n                            {{product.productName}}\r\n                            </a>\r\n                        </td>\r\n                        <td>{{ product.productCode | lowercase }}</td>\r\n                        <td>{{ product.releaseDate }}</td>\r\n                        <td>{{ product.price | currency:'GBP':true:'1.2-2' }}</td>\r\n                        <td>\r\n                            <appc-ai-star [rating]='product.starRating'\r\n                                    (ratingClicked)='onRatingClicked($event)'>\r\n                            </appc-ai-star>\r\n                       </td>\r\n                       <td>\r\n                            <a class=\"btn btn-primary\" \r\n                               [routerLink]=\"['productEdit', product._id]\">\r\n                                Edit\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var StarComponent = (function () {
    function StarComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarComponent.prototype.ngOnChanges = function (changes) {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 86 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    return StarComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Number)
], StarComponent.prototype, "rating", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-ai-star',
        template: __webpack_require__(247),
        styles: [__webpack_require__(323)]
    })
], StarComponent);
exports.StarComponent = StarComponent;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
// tslint:disable-next-line:use-pipe-transform-interface
var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : '';
        return filterBy ? value.filter(function (product) {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    return ProductFilterPipe;
}());
ProductFilterPipe = tslib_1.__decorate([
    core_1.Pipe({
        // tslint:disable-next-line:pipe-naming
        name: 'productFilter'
    })
], ProductFilterPipe);
exports.ProductFilterPipe = ProductFilterPipe;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var star_component_1 = __webpack_require__(285);
var shared_module_1 = __webpack_require__(31);
var product_list_component_1 = __webpack_require__(199);
var product_detail_component_1 = __webpack_require__(196);
var product_edit_component_1 = __webpack_require__(197);
var product_guard_service_1 = __webpack_require__(198);
var product_filter_pipe_1 = __webpack_require__(286);
var product_service_1 = __webpack_require__(155);
var product_routes_1 = __webpack_require__(288);
var ReactiveFormsExampleModules = (function () {
    function ReactiveFormsExampleModules() {
    }
    return ReactiveFormsExampleModules;
}());
ReactiveFormsExampleModules = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            product_routes_1.routing
        ],
        declarations: [
            product_list_component_1.ProductListComponent,
            product_edit_component_1.ProductEditComponent,
            product_detail_component_1.ProductDetailComponent,
            product_filter_pipe_1.ProductFilterPipe,
            star_component_1.StarComponent
        ],
        providers: [
            product_service_1.ProductService,
            product_guard_service_1.ProductDetailGuard,
            product_guard_service_1.ProductEditGuard
        ]
    })
], ReactiveFormsExampleModules);
exports.ReactiveFormsExampleModules = ReactiveFormsExampleModules;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var product_list_component_1 = __webpack_require__(199);
var product_detail_component_1 = __webpack_require__(196);
var product_edit_component_1 = __webpack_require__(197);
var product_guard_service_1 = __webpack_require__(198);
var routes = [
    { path: '', component: product_list_component_1.ProductListComponent },
    { path: 'product/:_id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
    { path: 'productEdit/:_id', canDeactivate: [product_guard_service_1.ProductEditGuard], component: product_edit_component_1.ProductEditComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__(9);
// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.
var GenericValidator = (function () {
    // Provide the set of valid validation messages
    // Stucture:
    // controlName1: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // },
    // controlName2: {
    //     validationRuleName1: 'Validation Message.',
    //     validationRuleName2: 'Validation Message.'
    // }
    function GenericValidator(validationMessages) {
        this.validationMessages = validationMessages;
    }
    // Processes each control within a FormGroup
    // And returns a set of validation messages to display
    // Structure
    // controlName1: 'Validation Message.',
    // controlName2: 'Validation Message.'
    GenericValidator.prototype.processMessages = function (container) {
        var _this = this;
        var messages = {};
        var _loop_1 = function (controlKey) {
            if (container.controls.hasOwnProperty(controlKey)) {
                var c = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (c instanceof forms_1.FormGroup) {
                    var childMessages = this_1.processMessages(c);
                    Object.assign(messages, childMessages);
                }
                else {
                    // Only validate if there are validation messages for the control
                    if (this_1.validationMessages[controlKey]) {
                        messages[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(function (messageKey) {
                                if (_this.validationMessages[controlKey][messageKey]) {
                                    messages[controlKey] += _this.validationMessages[controlKey][messageKey] + ' ';
                                }
                            });
                        }
                    }
                }
            }
        };
        var this_1 = this;
        for (var controlKey in container.controls) {
            _loop_1(controlKey);
        }
        return messages;
    };
    return GenericValidator;
}());
exports.GenericValidator = GenericValidator;


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NumberValidators = (function () {
    function NumberValidators() {
    }
    NumberValidators.range = function (min, max) {
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { range: true };
            }
            return null;
        };
    };
    return NumberValidators;
}());
exports.NumberValidators = NumberValidators;


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(225);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(226);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=7.js.map