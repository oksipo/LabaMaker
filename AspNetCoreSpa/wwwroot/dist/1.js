webpackJsonp([1],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var social_login_component_1 = __webpack_require__(298);
var login_component_1 = __webpack_require__(198);
var login_routes_1 = __webpack_require__(297);
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [login_routes_1.routing, shared_module_1.SharedModule],
        declarations: [login_component_1.LoginComponent, social_login_component_1.SocialLoginComponent]
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),

/***/ 158:
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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(6);
var account_service_1 = __webpack_require__(20);
var control_textbox_1 = __webpack_require__(158);
var utility_service_1 = __webpack_require__(17);
var LoginComponent = (function () {
    function LoginComponent(accountService, router, utilityService) {
        this.accountService = accountService;
        this.router = router;
        this.utilityService = utilityService;
        this.errors = [];
    }
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this.errors = [];
        this.accountService.login(model)
            .subscribe(function () {
            _this.utilityService.navigate('');
        }, function (errors) {
            _this.errors.push(errors['error_description']);
        });
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        var controls = [
            new control_textbox_1.ControlTextbox({
                key: 'username',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 1
            }),
            new control_textbox_1.ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 2
            })
        ];
        this.controls = controls;
    };
    return LoginComponent;
}());
LoginComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-login',
        styles: [__webpack_require__(320)],
        template: __webpack_require__(248)
    }),
    tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService,
        router_1.Router,
        utility_service_1.UtilityService])
], LoginComponent);
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".separator {\n  font-size: 15px;\n  font-weight: 600;\n  margin: 24px auto 16px auto;\n  position: relative;\n  overflow: hidden;\n  width: 100px;\n  color: rgba(0, 0, 0, 0.54); }\n  .separator .text {\n    display: inline-block;\n    vertical-align: baseline;\n    position: relative;\n    padding: 0 8px;\n    z-index: 9999; }\n    .separator .text:before, .separator .text:after {\n      content: '';\n      display: block;\n      width: 30px;\n      position: absolute;\n      top: 10px;\n      border-top: 1px solid rgba(0, 0, 0, 0.12); }\n    .separator .text:before {\n      right: 100%; }\n    .separator .text:after {\n      left: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".social-login-button {\n  margin: 5px; }\n  .social-login-button.google, .social-login-button.facebook, .social-login-button.microsoft, .social-login-button.twitter, .social-login-button.github, .social-login-button.linkedin {\n    width: 192px;\n    text-transform: none;\n    color: #FFFFFF;\n    font-size: 13px; }\n    .social-login-button.google md-icon, .social-login-button.facebook md-icon, .social-login-button.microsoft md-icon, .social-login-button.twitter md-icon, .social-login-button.github md-icon, .social-login-button.linkedin md-icon {\n      color: #FFFFFF;\n      margin: 0 8px 0 0; }\n  .social-login-button.google {\n    background-color: #D73D32; }\n  .social-login-button.facebook {\n    background-color: #3f5c9a; }\n  .social-login-button.microsoft {\n    background-color: #2672EC; }\n  .social-login-button.twitter {\n    background-color: #55ACEE; }\n  .social-login-button.github {\n    background-color: #444444; }\n  .social-login-button.linkedin {\n    background-color: #007BB6; }\n", ""]);

// exports


/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            Login\r\n        </div>\r\n\r\n        <div class=\"card-block\">\r\n            <appc-error-summary [errors]=\"errors\"></appc-error-summary>\r\n            <appc-dynamic-form (formsubmit)=\"login($event)\" [controls]=\"controls\" [btnText]=\"'Login'\"></appc-dynamic-form>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <p class=\"text-center font-weight-bold\">\r\n        OR\r\n    </p>\r\n\r\n    <div class=\"text-center\">\r\n        <appc-social-login></appc-social-login>\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn social-login-button google\" (click)=\"loginGoogle()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n                    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\r\n                    <span>Log in with Google</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button facebook\" (click)=\"loginFacebook()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                    <span>Log in with Facebook</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button microsoft\" (click)=\"loginMicrosoft()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n                    <i class=\"fa fa-windows\" aria-hidden=\"true\"></i>\r\n                    <span>Log in with Microsoft</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button twitter\" (click)=\"loginTwitter()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                    <span>Log in with Twitter</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button github\" (click)=\"loginGithub()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n                    <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n                    <span>Log in with Github</span>\r\n        </span>\r\n    </div>\r\n</button>\r\n\r\n<button class=\"btn social-login-button linkedin\" (click)=\"loginLinkedIn()\">\r\n    <div layout=\"row\" layout-align=\"center center\">\r\n        <span>\r\n                    <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\r\n                    <span>Log in with LinkedIn</span>\r\n        </span>\r\n    </div>\r\n</button>";

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(6);
var login_component_1 = __webpack_require__(198);
var routes = [
    { path: '', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(33);
var SocialLoginComponent = (function () {
    function SocialLoginComponent(location) {
        this.location = location;
    }
    SocialLoginComponent.prototype.loginGoogle = function () {
        this.redirect('Google');
    };
    SocialLoginComponent.prototype.loginFacebook = function () {
        this.redirect('Facebook');
    };
    SocialLoginComponent.prototype.loginMicrosoft = function () {
        this.redirect('Microsoft');
    };
    SocialLoginComponent.prototype.loginTwitter = function () {
        this.redirect('Twitter');
    };
    SocialLoginComponent.prototype.loginGithub = function () {
        this.redirect('GitHub');
    };
    SocialLoginComponent.prototype.loginLinkedIn = function () {
        this.redirect('LinkedIn');
    };
    SocialLoginComponent.prototype.redirect = function (provider) {
        var url = window.location.protocol + '//' + window.location.host + '/api/account/ExternalLogin?provider=' + provider;
        console.log(url);
        window.location.href = url;
    };
    return SocialLoginComponent;
}());
SocialLoginComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-social-login',
        styles: [__webpack_require__(321)],
        template: __webpack_require__(249)
    }),
    tslib_1.__metadata("design:paramtypes", [common_1.Location])
], SocialLoginComponent);
exports.SocialLoginComponent = SocialLoginComponent;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(222);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(223);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=1.js.map