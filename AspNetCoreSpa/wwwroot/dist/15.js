webpackJsonp([15],{

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var utility_service_1 = __webpack_require__(17);
var MarkdownEditorComponent = (function () {
    function MarkdownEditorComponent(us) {
        this.us = us;
    }
    MarkdownEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.us.loadStyle('https://cdnjs.cloudflare.com/ajax/libs/simplemde/1.11.2/simplemde.min.css')
            .subscribe(function (style) {
            _this.us.loadScript('https://cdnjs.cloudflare.com/ajax/libs/simplemde/1.11.2/simplemde.min.js')
                .subscribe(function (script) {
                var mde = new SimpleMDE({ element: _this.textarea.nativeElement });
                console.log(mde);
            });
        });
    };
    return MarkdownEditorComponent;
}());
tslib_1.__decorate([
    core_1.ViewChild('simplemde'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], MarkdownEditorComponent.prototype, "textarea", void 0);
MarkdownEditorComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-markdown-editor',
        template: __webpack_require__(237),
        styles: [__webpack_require__(313)],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [utility_service_1.UtilityService])
], MarkdownEditorComponent);
exports.MarkdownEditorComponent = MarkdownEditorComponent;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<h3>\r\n    SimpleMDE Markdown Editor\r\n</h3>\r\n<p>\r\n    Details <a href=\"https://simplemde.com/\">here</a>\r\n</p>\r\n\r\n<textarea #simplemde></textarea>";

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var markdown_editor_routes_1 = __webpack_require__(275);
var markdown_editor_component_1 = __webpack_require__(186);
var MarkdownEditorModule = (function () {
    function MarkdownEditorModule() {
    }
    return MarkdownEditorModule;
}());
MarkdownEditorModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            markdown_editor_routes_1.routing,
            shared_module_1.SharedModule
        ],
        exports: [],
        declarations: [
            markdown_editor_component_1.MarkdownEditorComponent
        ],
        providers: [],
    })
], MarkdownEditorModule);
exports.MarkdownEditorModule = MarkdownEditorModule;


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(6);
var markdown_editor_component_1 = __webpack_require__(186);
var routes = [
    {
        path: '', component: markdown_editor_component_1.MarkdownEditorComponent
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(215);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=15.js.map