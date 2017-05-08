webpackJsonp([4],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var admin_component_1 = __webpack_require__(175);
var admin_service_1 = __webpack_require__(176);
var admin_routes_1 = __webpack_require__(264);
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [admin_routes_1.routing, shared_module_1.SharedModule],
        declarations: [admin_component_1.AdminComponent],
        providers: [admin_service_1.AdminService]
    })
], AdminModule);
exports.AdminModule = AdminModule;


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var data_service_1 = __webpack_require__(19);
var admin_service_1 = __webpack_require__(176);
var AdminComponent = (function () {
    function AdminComponent(adminService, apiGateway) {
        this.adminService = adminService;
        this.apiGateway = apiGateway;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiGateway.pendingCommands$.subscribe(function (x) {
            _this.loading = x > 0;
        });
    };
    AdminComponent.prototype.doAdminOperation = function () {
        var _this = this;
        this.adminService.do()
            .subscribe(function (data) { return _this.message = data; });
    };
    return AdminComponent;
}());
AdminComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-admin',
        template: __webpack_require__(233)
    }),
    tslib_1.__metadata("design:paramtypes", [admin_service_1.AdminService, data_service_1.DataService])
], AdminComponent);
exports.AdminComponent = AdminComponent;


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var data_service_1 = __webpack_require__(19);
var AdminService = (function () {
    function AdminService(dataService) {
        this.dataService = dataService;
        this.adminApiUrl = 'api/admin/doadminoperation/';
    }
    AdminService.prototype.do = function () {
        return this.dataService.get(this.adminApiUrl);
    };
    return AdminService;
}());
AdminService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [data_service_1.DataService])
], AdminService);
exports.AdminService = AdminService;


/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"doAdminOperation()\">\r\n        Do Admin Operation\r\n    </button>\r\n<span>{{message?.message}}</span>\r\n\r\n<p [hidden]=\"!loading\">\r\n    <i class=\"fa fa-spinner fa-spin fa-5x\"></i>\r\n</p>";

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var admin_component_1 = __webpack_require__(175);
var routes = [
    { path: '', component: admin_component_1.AdminComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ })

});
//# sourceMappingURL=4.js.map