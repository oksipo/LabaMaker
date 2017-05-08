webpackJsonp([3],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var register_component_1 = __webpack_require__(210);
var register_confirmation_component_1 = __webpack_require__(209);
var register_routes_1 = __webpack_require__(313);
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [register_routes_1.routing, shared_module_1.SharedModule],
        declarations: [register_component_1.RegisterComponent, register_confirmation_component_1.RegisterConfirmationComponent]
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var control_base_1 = __webpack_require__(21);
var ControlTextbox = (function (_super) {
    tslib_1.__extends(ControlTextbox, _super);
    function ControlTextbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'textbox';
        return _this;
    }
    return ControlTextbox;
}(control_base_1.ControlBase));
exports.ControlTextbox = ControlTextbox;


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var RegisterConfirmationComponent = (function () {
    function RegisterConfirmationComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    RegisterConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router
            .routerState.root
            .queryParams
            .subscribe(function (params) {
            _this.emailConfirmed = (params.emailConfirmed && params.emailConfirmed.toLowerCase() === 'true');
        });
    };
    RegisterConfirmationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return RegisterConfirmationComponent;
}());
RegisterConfirmationComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-register-confirmation',
        template: __webpack_require__(262)
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], RegisterConfirmationComponent);
exports.RegisterConfirmationComponent = RegisterConfirmationComponent;


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(7);
var account_service_1 = __webpack_require__(20);
var control_textbox_1 = __webpack_require__(167);
var RegisterComponent = (function () {
    function RegisterComponent(accountService, router, route) {
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.errors = [];
    }
    RegisterComponent.prototype.register = function (model) {
        var _this = this;
        this.accountService.register(model)
            .subscribe(function (res) {
            _this.router.navigate(['../registerconfirmation'], { relativeTo: _this.route, queryParams: { emailConfirmed: true } });
        }, function (errors) {
            _this.errors = errors;
        });
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        var controls = [
            new control_textbox_1.ControlTextbox({
                key: 'username',
                label: 'Username',
                placeholder: 'Username',
                value: '',
                type: 'textbox',
                required: true,
                order: 1
            }),
            new control_textbox_1.ControlTextbox({
                key: 'firstname',
                label: 'Firstname',
                placeholder: 'Firstname',
                value: '',
                type: 'textbox',
                required: true,
                order: 2
            }),
            new control_textbox_1.ControlTextbox({
                key: 'lastname',
                label: 'Lastname',
                placeholder: 'Lastname',
                value: '',
                type: 'textbox',
                required: true,
                order: 3
            }),
            new control_textbox_1.ControlTextbox({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 4
            }),
            new control_textbox_1.ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 5
            })
        ];
        this.controls = controls;
    };
    return RegisterComponent;
}());
RegisterComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-register',
        template: __webpack_require__(263)
    }),
    tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router, router_1.ActivatedRoute])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <appc-page-heading text=\"Registration confirmed\">\r\n    </appc-page-heading>\r\n\r\n    <p *ngIf=\"!emailConfirmed\">\r\n        We have sent you a confirmation email, please visit your inbox and confirm by clicking the confirmation link.\r\n    </p>\r\n\r\n    <p *ngIf=\"emailConfirmed\">\r\n        Thank you for confirming your email, please <a routerLink=\"../../login\">Login</a> now.\r\n    </p>\r\n</div>#";

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            Register\r\n        </div>\r\n        \r\n        <div class=\"card-block\">\r\n            <appc-error-summary [errors]=\"errors\"></appc-error-summary>\r\n            <appc-dynamic-form (formsubmit)=\"register($event)\" [controls]=\"controls\" [btnText]=\"'Register'\"></appc-dynamic-form>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var register_component_1 = __webpack_require__(210);
var register_confirmation_component_1 = __webpack_require__(209);
var routes = [
    { path: '', redirectTo: 'registerhome', pathMatch: 'full' },
    { path: 'registerhome', component: register_component_1.RegisterComponent },
    { path: 'registerconfirmation', component: register_confirmation_component_1.RegisterConfirmationComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ })

});
//# sourceMappingURL=3.js.map