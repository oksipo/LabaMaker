webpackJsonp([12],{

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
// import '../../../../node_modules/tinymce/tinymce.js';
// import '../../../../node_modules/tinymce/themes/modern/theme.js';
// import '../../../../node_modules/tinymce/plugins/link/plugin.js';
// import '../../../../node_modules/tinymce/plugins/paste/plugin.js';
// import '../../../../node_modules/tinymce/plugins/table/plugin.js';
var TextEditorComponent = (function () {
    function TextEditorComponent() {
    }
    TextEditorComponent.prototype.keyupHandlerFunction = function (content) {
        console.log(content);
    };
    return TextEditorComponent;
}());
TextEditorComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-text-editor',
        template: __webpack_require__(252),
        styles: [__webpack_require__(326)]
    })
], TextEditorComponent);
exports.TextEditorComponent = TextEditorComponent;


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<h3>\r\n    Tinymce text editor\r\n</h3>\r\n<p>\r\n    How to implement in <a href=\"https://www.tinymce.com/docs/integrations/angular2/\">angular</a>\r\n</p>\r\n<appc-simple-tiny [elementId]=\"'my-editor-id'\" (onEditorKeyup)=\"keyupHandlerFunction($event)\">\r\n</appc-simple-tiny>";

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var utility_service_1 = __webpack_require__(17);
var SimpleTinyComponent = (function () {
    function SimpleTinyComponent(us) {
        this.us = us;
        this.onEditorKeyup = new core_1.EventEmitter();
    }
    SimpleTinyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.us.loadScript('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/tinymce.min.js')
            .subscribe(function (tm) {
            _this.us.loadScript('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/themes/modern/theme.min.js')
                .subscribe(function (mt) {
                _this.us.loadScript('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/plugins/link/plugin.min.js')
                    .subscribe(function (lp) {
                    _this.us.loadScript('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/plugins/paste/plugin.min.js')
                        .subscribe(function (pp) {
                        _this.us.loadScript('https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/plugins/noneditable/plugin.min.js')
                            .subscribe(function (nep) {
                            tinymce.init({
                                selector: '#' + _this.elementId,
                                plugins: ['link', 'paste', 'table'],
                                skin_url: '/assets/skins/lightgray',
                                setup: function (editor) {
                                    _this.editor = editor;
                                    editor.on('keyup', function () {
                                        var content = editor.getContent();
                                        _this.onEditorKeyup.emit(content);
                                    });
                                },
                            });
                        });
                    });
                });
            });
        });
    };
    SimpleTinyComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return SimpleTinyComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], SimpleTinyComponent.prototype, "elementId", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", Object)
], SimpleTinyComponent.prototype, "onEditorKeyup", void 0);
SimpleTinyComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-simple-tiny',
        template: "<textarea id=\"{{elementId}}\"></textarea>"
    }),
    tslib_1.__metadata("design:paramtypes", [utility_service_1.UtilityService])
], SimpleTinyComponent);
exports.SimpleTinyComponent = SimpleTinyComponent;


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var text_editor_routes_1 = __webpack_require__(295);
var text_editor_component_1 = __webpack_require__(201);
var simple_tiny_component_1 = __webpack_require__(293);
var TextEditorModule = (function () {
    function TextEditorModule() {
    }
    return TextEditorModule;
}());
TextEditorModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            text_editor_routes_1.routing,
            shared_module_1.SharedModule
        ],
        exports: [],
        declarations: [
            simple_tiny_component_1.SimpleTinyComponent,
            text_editor_component_1.TextEditorComponent
        ],
        providers: [],
    })
], TextEditorModule);
exports.TextEditorModule = TextEditorModule;


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var text_editor_component_1 = __webpack_require__(201);
var routes = [
    {
        path: '', component: text_editor_component_1.TextEditorComponent
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(228);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=12.js.map