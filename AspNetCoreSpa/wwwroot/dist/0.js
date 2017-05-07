webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var profile_routes_1 = __webpack_require__(303);
var profile_component_1 = __webpack_require__(199);
var profile_service_1 = __webpack_require__(157);
var change_name_component_1 = __webpack_require__(299);
var change_password_component_1 = __webpack_require__(301);
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [profile_routes_1.routing, shared_module_1.SharedModule],
        declarations: [profile_component_1.ProfileComponent, change_name_component_1.ChangeNameComponent, change_password_component_1.ChangePasswordComponent],
        providers: [profile_service_1.ProfileService]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var data_service_1 = __webpack_require__(19);
var ProfileService = (function () {
    function ProfileService(dataService) {
        this.dataService = dataService;
        this.userNameApi = 'api/profile/username/';
        this.changePasswordApi = 'api/profile/changepassword/';
    }
    ProfileService.prototype.changePassword = function (changePasswordModel) {
        return this.dataService.post(this.changePasswordApi, changePasswordModel);
    };
    ProfileService.prototype.userName = function (userNameModel) {
        if (userNameModel) {
            return this.dataService.post(this.userNameApi, userNameModel);
        }
        else {
            return this.dataService.get(this.userNameApi);
        }
    };
    return ProfileService;
}());
ProfileService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [data_service_1.DataService])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.notify = function (message) {
        this.notificationMessage = message;
    };
    return ProfileComponent;
}());
ProfileComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-user-profile',
        template: __webpack_require__(252)
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<appc-page-heading text=\"Change User's name\"></appc-page-heading>\r\n\r\n<form class=\"form-horizontal\" #hf=\"ngForm\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First name</label>\r\n        <input type=\"text\" [class.error]=\"!firstName.valid\" class=\"form-control input-lg\" placeholder=\"First name\" [(ngModel)]=\"userNameModel.firstName\"\r\n            name=\"firstName\" ngControl=\"firstName\" required #firstName=\"ngModel\" />\r\n        <label *ngIf=\"!firstName.valid && firstName.touched\" class=\"error\">\r\n                        FirstName is required\r\n            </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last name</label>\r\n        <input type=\"text\" [class.error]=\"!lastName.valid\" class=\"form-control input-lg\" placeholder=\"LastName\" [(ngModel)]=\"userNameModel.lastName\"\r\n            name=\"lastName\" ngControl=\"lastName\" required #lastName=\"ngModel\" />\r\n        <label *ngIf=\"!lastName.valid && lastName.touched\" class=\"error\">\r\n                            LastName is required\r\n                        </label>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary pull-right\" (click)=\"save()\" [disabled]=\"!hf.form.valid\">Update</button>\r\n</form>";

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<appc-page-heading text=\"Change password\"></appc-page-heading>\r\n\r\n<form class=\"form-horizontal\" [formGroup]=\"changePasswordForm\">\r\n    <div class=\"form-group\">\r\n        <label>Old password</label>\r\n        <input type=\"password\" [class.error]=\"!changePasswordForm.get('oldPassword').valid\" class=\"form-control input-lg\" placeholder=\"Old password\"\r\n            formControlName=\"oldPassword\" />\r\n        <span [hidden]=\"changePasswordForm.get('oldPassword').valid || (changePasswordForm.get('oldPassword').pristine && !submitted)\"\r\n            class=\"text-danger\">\r\n                    Old password is required\r\n            </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>New password</label>\r\n        <input type=\"password\" [class.error]=\"!changePasswordForm.get('newPassword').valid\" class=\"form-control input-lg\" placeholder=\"New password\"\r\n            formControlName=\"newPassword\" />\r\n        <span [hidden]=\"changePasswordForm.get('newPassword').valid || (changePasswordForm.get('newPassword').pristine && !submitted)\"\r\n            class=\"text-danger\">\r\n                    New password is required\r\n            </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Confirm password</label>\r\n        <input type=\"password\" [class.error]=\"!changePasswordForm.get('confirmPassword').valid\" class=\"form-control input-lg\" placeholder=\"Confirm password\"\r\n            formControlName=\"confirmPassword\" />\r\n        <span [hidden]=\"changePasswordForm.get('confirmPassword').valid || (changePasswordForm.get('confirmPassword').pristine && !submitted)\"\r\n            class=\"text-danger\">\r\n                    Confirm password is required\r\n            </span>\r\n    </div>\r\n\r\n    <button (click)=\"changePassword()\" class=\"btn btn-primary pull-right\">Change password</button>\r\n\r\n</form>";

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<!--Alert message-->\r\n<div class=\"row\">\r\n    <ngb-alert *ngIf=\"notificationMessage\" type=\"success\" (close)=\"notificationMessage = null\">{{ notificationMessage }}</ngb-alert>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <appc-change-name (notification)=\"notify($event)\"></appc-change-name>\r\n    </div>\r\n    <div class=\"col\">\r\n        <appc-change-password (notification)=\"notify($event)\"></appc-change-password>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__(157);
var change_name_model_1 = __webpack_require__(300);
var ChangeNameComponent = (function () {
    function ChangeNameComponent(profileService) {
        this.profileService = profileService;
        this.userNameModel = new change_name_model_1.ChangeNameModel('', '');
        this.notification = new core_1.EventEmitter();
    }
    ChangeNameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.userName()
            .subscribe(function (res) {
            _this.userNameModel.firstName = res.firstName;
            _this.userNameModel.lastName = res.lastName;
        });
    };
    ChangeNameComponent.prototype.save = function () {
        var _this = this;
        this.profileService.userName(this.userNameModel)
            .subscribe(function (res) {
            _this.userNameModel.firstName = res.firstName;
            _this.userNameModel.lastName = res.lastName;
            _this.notification.emit("Profile name changed to " + res.firstName + " " + res.lastName);
        });
    };
    return ChangeNameComponent;
}());
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], ChangeNameComponent.prototype, "notification", void 0);
ChangeNameComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-change-name',
        template: __webpack_require__(250)
    }),
    tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService])
], ChangeNameComponent);
exports.ChangeNameComponent = ChangeNameComponent;


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChangeNameModel = (function () {
    function ChangeNameModel(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return ChangeNameModel;
}());
exports.ChangeNameModel = ChangeNameModel;


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(8);
var profile_service_1 = __webpack_require__(157);
var change_password_model_1 = __webpack_require__(302);
var validation_service_1 = __webpack_require__(22);
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(profileService, fb) {
        this.profileService = profileService;
        this.fb = fb;
        this.submitted = false;
        this.changePasswordModel = new change_password_model_1.ChangePasswordModel('', '', '');
        this.notification = new core_1.EventEmitter();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            newPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])],
            confirmPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator])]
        });
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.submitted = true;
        if (this.changePasswordForm.valid && this.changePasswordForm.dirty) {
            this.changePasswordModel.oldPassword = this.changePasswordForm.value.oldPassword;
            this.changePasswordModel.newPassword = this.changePasswordForm.value.newPassword;
            this.changePasswordModel.confirmPassword = this.changePasswordForm.value.confirmPassword;
            this.profileService.changePassword(this.changePasswordModel)
                .subscribe(function (res) {
                _this.notification.emit("Password changed successfully");
            });
        }
    };
    return ChangePasswordComponent;
}());
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], ChangePasswordComponent.prototype, "notification", void 0);
ChangePasswordComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-change-password',
        template: __webpack_require__(251)
    }),
    tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService, forms_1.FormBuilder])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChangePasswordModel = (function () {
    function ChangePasswordModel(oldPassword, newPassword, confirmPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
    return ChangePasswordModel;
}());
exports.ChangePasswordModel = ChangePasswordModel;


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(6);
var profile_component_1 = __webpack_require__(199);
var routes = [
    { path: '', component: profile_component_1.ProfileComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ })

});
//# sourceMappingURL=0.js.map