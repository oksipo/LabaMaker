webpackJsonp([6],{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var Subject_1 = __webpack_require__(32);
var EdgeService = (function (_super) {
    tslib_1.__extends(EdgeService, _super);
    function EdgeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgeService.prototype.getCoordinates = function () {
        return this.asObservable().bufferCount(2).map(function (buffer) { return { first: buffer[0], second: buffer[1] }; });
    };
    return EdgeService;
}(Subject_1.Subject));
exports.EdgeService = EdgeService;


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var ChildComponent = (function () {
    function ChildComponent() {
    }
    ChildComponent.prototype.setTime = function (time) {
        this.time = time;
    };
    return ChildComponent;
}());
ChildComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-child',
        template: '<div>{{time}}</div>'
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var child_1 = __webpack_require__(180);
var ParentComponent = (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.updateViewChildren = function () {
        this.viewChildren.toArray().forEach(function (child) { return child.setTime(new Date().toTimeString()); });
    };
    return ParentComponent;
}());
tslib_1.__decorate([
    core_1.ViewChildren(child_1.ChildComponent),
    tslib_1.__metadata("design:type", core_1.QueryList)
], ParentComponent.prototype, "viewChildren", void 0);
ParentComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-parent',
        template: "<div>\n                <button (click)=\"updateViewChildren()\">Update Time via ViewChildren</button>\n                <appc-child></appc-child>\n                <appc-child></appc-child>\n              </div>"
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var ComponentHomeComponent = (function () {
    function ComponentHomeComponent() {
    }
    return ComponentHomeComponent;
}());
ComponentHomeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-component-home',
        template: __webpack_require__(237)
    })
], ComponentHomeComponent);
exports.ComponentHomeComponent = ComponentHomeComponent;


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var BlueDynamicComponent = (function () {
    function BlueDynamicComponent() {
    }
    return BlueDynamicComponent;
}());
BlueDynamicComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-dynamic-component',
        template: '<div class="img-rounded" style="background-color: lightskyblue;margin: 5px"> Blue Dynamic Component! </div>',
    })
], BlueDynamicComponent);
exports.BlueDynamicComponent = BlueDynamicComponent;


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var red_dynamic_component_1 = __webpack_require__(186);
var blue_dynamic_component_1 = __webpack_require__(183);
var green_dynamic_component_1 = __webpack_require__(185);
var DynamicComponent = (function () {
    function DynamicComponent() {
        this.componentTypes = [
            blue_dynamic_component_1.BlueDynamicComponent,
            green_dynamic_component_1.GreenDynamicComponent,
            red_dynamic_component_1.RedDynamicComponent
        ];
    }
    DynamicComponent.prototype.ngOnInit = function () {
        // default to the first available option
        this.selectedComponentType = this.componentTypes ? this.componentTypes[0] : null;
    };
    return DynamicComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Array)
], DynamicComponent.prototype, "componentTypes", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], DynamicComponent.prototype, "selectedComponentType", void 0);
DynamicComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-dynamic',
        template: __webpack_require__(238)
    })
], DynamicComponent);
exports.DynamicComponent = DynamicComponent;


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var GreenDynamicComponent = (function () {
    function GreenDynamicComponent() {
    }
    return GreenDynamicComponent;
}());
GreenDynamicComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-dynamic-component',
        template: '<div class="img-rounded" style="background-color: lightgreen;margin: 5px"> Green Dynamic Component! </div>',
    })
], GreenDynamicComponent);
exports.GreenDynamicComponent = GreenDynamicComponent;


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var RedDynamicComponent = (function () {
    function RedDynamicComponent() {
    }
    return RedDynamicComponent;
}());
RedDynamicComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-dynamic-component',
        template: '<div class="img-rounded" style="background-color: lightcoral;margin: 5px"> Red Dynamic Component! </div>',
    })
], RedDynamicComponent);
exports.RedDynamicComponent = RedDynamicComponent;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var EdgeComponent = (function () {
    function EdgeComponent() {
        this.style = {};
    }
    EdgeComponent.prototype.setCoordinates = function (first, second) {
        this.x1 = first.x;
        this.y1 = first.y;
        this.x2 = second.x;
        this.y2 = second.y;
        this.drawLine(this.x1, this.y1, this.x2, this.y2);
    };
    EdgeComponent.prototype.drawLine = function (x1, y1, x2, y2) {
        var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        var transform = 'rotate(' + angle + 'deg)';
        this.style = {
            position: 'absolute',
            transform: transform.toString(),
            width: length + 'px'
        };
    };
    return EdgeComponent;
}());
EdgeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-edge',
        template: '<div class="edge" [ngStyle]="style"></div>',
        styles: [__webpack_require__(316)]
    })
], EdgeComponent);
exports.EdgeComponent = EdgeComponent;


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var edge_service_1 = __webpack_require__(165);
var edge_component_1 = __webpack_require__(187);
var GraphComponent = (function () {
    function GraphComponent(componentResolver, edgeService) {
        this.componentResolver = componentResolver;
        this.edgeService = edgeService;
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edgeService.getCoordinates().subscribe(function (coordinates) {
            var factory = _this.componentResolver.resolveComponentFactory(edge_component_1.EdgeComponent);
            var res = coordinates.first.viewContainer.createComponent(factory);
            res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    };
    return GraphComponent;
}());
GraphComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-graph',
        template: __webpack_require__(239),
        styles: [
            "\n        .graph-table{\n            border-spacing: 70px;\n            border-collapse: separate;\n            }\n        "
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ComponentFactoryResolver, edge_service_1.EdgeService])
], GraphComponent);
exports.GraphComponent = GraphComponent;


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(8);
var Subject_1 = __webpack_require__(32);
var RxjsComponent = (function () {
    function RxjsComponent() {
        this.click$ = new Subject_1.Subject();
    }
    RxjsComponent.prototype.ngOnInit = function () {
        this.clock = Observable_1.Observable.merge(this.click$.mapTo('hour'), Observable_1.Observable.interval(1000).mapTo('second'))
            .startWith(new Date())
            .scan(function (acc, curr) {
            var date = new Date(acc.getTime());
            if (curr === 'second') {
                date.setSeconds(date.getSeconds() + 1);
            }
            if (curr === 'hour') {
                date.setHours(date.getHours() + 1);
            }
            return date;
        });
    };
    return RxjsComponent;
}());
RxjsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-rxjs',
        template: __webpack_require__(240)
    })
], RxjsComponent);
exports.RxjsComponent = RxjsComponent;


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "div.edge {\n  transform-origin: 0 100%;\n  height: 1px;\n  background: #337ab7; }\n", ""]);

// exports


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".vertex-text {\n  position: absolute;\n  top: 50%;\n  height: 50%;\n  width: 40px;\n  margin-top: -25%;\n  text-align: center;\n  color: white; }\n\n.vertex {\n  /*border-radius: 50%;*/\n  width: 40px;\n  height: 40px;\n  background-color: #337ab7;\n  position: relative;\n  display: block; }\n", ""]);

// exports


/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12 col-md-3 push-md-9\">\r\n        <div class=\"list-group\">\r\n            <a class=\"list-group-item\" routerLinkActive=\"active\" [routerLink]=\"['graph']\">Dynamic grapah</a>\r\n            <a class=\"list-group-item\" routerLinkActive=\"active\" [routerLink]=\"['accesschildcomponent']\">Access child component</a>\r\n            <a class=\"list-group-item\" routerLinkActive=\"active\" [routerLink]=\"['dynamiccomponent']\">Dynamic component</a>\r\n            <a class=\"list-group-item\" routerLinkActive=\"active\" [routerLink]=\"['rxjs']\">Rxjs</a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-9 pull-md-3 bd-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<b>Creating AOT Friendly Dynamic Components with Angular 2</b>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Application Code</div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"input-group\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedComponentType\">\r\n                        <option *ngFor=\"let cellComponentType of componentTypes\" [ngValue]=\"cellComponentType\">{{cellComponentType.name}}</option>\r\n                    </select>\r\n                    <span class=\"input-group-btn\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"grid.addDynamicCellComponent(selectedComponentType)\">Add Dynamic Grid component</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Library Code</div>\r\n            <div class=\"panel-body\">\r\n                <appc-grid-component #grid></appc-grid-component>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <div class=\"alert alert-info\" role=\"alert\">\r\n        Click any pair of nodes to connect them with an edge\r\n    </div>\r\n\r\n    <appc-vertex [value]=\"'A'\"></appc-vertex>\r\n\r\n    <table class=\"graph-table\">\r\n        <tr>\r\n            <td>\r\n                <appc-vertex [value]=\"'B'\"></appc-vertex>\r\n                <td>\r\n                    <appc-vertex [value]=\"'C'\"></appc-vertex>\r\n                </td>\r\n                <tr>\r\n                    <td>\r\n                        <appc-vertex [value]=\"'E'\"></appc-vertex>\r\n                    </td>\r\n                    <td>\r\n                        <appc-vertex [value]=\"'F'\"></appc-vertex>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <appc-vertex [value]=\"'G'\"></appc-vertex>\r\n                    </td>\r\n                    <td>\r\n                        <appc-vertex [value]=\"'H'\"></appc-vertex>\r\n                    </td>\r\n                    <td>\r\n                        <appc-vertex [value]=\"'I'\"></appc-vertex>\r\n                    </td>\r\n                </tr>\r\n    </table>\r\n</div>";

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<h2>Clock by merging streams</h2>\r\n\r\n<button (click)=\"click$.next()\">Update an hour</button> {{ clock | async | date: 'dd-MM-yyyy hh:mm:ss'}}";

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var component_home_component_1 = __webpack_require__(182);
var graph_component_1 = __webpack_require__(188);
var edge_component_1 = __webpack_require__(187);
var vertex_component_1 = __webpack_require__(273);
var parent_1 = __webpack_require__(181);
var child_1 = __webpack_require__(180);
var edge_service_1 = __webpack_require__(165);
var component_home_routes_1 = __webpack_require__(268);
var grid_module_1 = __webpack_require__(271);
var blue_dynamic_component_1 = __webpack_require__(183);
var green_dynamic_component_1 = __webpack_require__(185);
var red_dynamic_component_1 = __webpack_require__(186);
var dynamic_component_1 = __webpack_require__(184);
var rxjs_component_1 = __webpack_require__(189);
var ComponentModule = (function () {
    function ComponentModule() {
    }
    return ComponentModule;
}());
ComponentModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            component_home_routes_1.routing,
            shared_module_1.SharedModule,
            grid_module_1.GridModule.withComponents([
                blue_dynamic_component_1.BlueDynamicComponent,
                green_dynamic_component_1.GreenDynamicComponent,
                red_dynamic_component_1.RedDynamicComponent
            ])
        ],
        exports: [],
        declarations: [
            graph_component_1.GraphComponent,
            edge_component_1.EdgeComponent,
            vertex_component_1.VertexComponent,
            component_home_component_1.ComponentHomeComponent,
            parent_1.ParentComponent,
            child_1.ChildComponent,
            dynamic_component_1.DynamicComponent,
            blue_dynamic_component_1.BlueDynamicComponent,
            green_dynamic_component_1.GreenDynamicComponent,
            red_dynamic_component_1.RedDynamicComponent,
            rxjs_component_1.RxjsComponent
        ],
        // dynamic components have to be added in entry components
        entryComponents: [edge_component_1.EdgeComponent],
        providers: [edge_service_1.EdgeService],
    })
], ComponentModule);
exports.ComponentModule = ComponentModule;


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var component_home_component_1 = __webpack_require__(182);
var graph_component_1 = __webpack_require__(188);
var parent_1 = __webpack_require__(181);
var dynamic_component_1 = __webpack_require__(184);
var rxjs_component_1 = __webpack_require__(189);
var routes = [
    {
        path: '', component: component_home_component_1.ComponentHomeComponent, children: [
            { path: 'graph', component: graph_component_1.GraphComponent },
            { path: 'accesschildcomponent', component: parent_1.ParentComponent },
            { path: 'dynamiccomponent', component: dynamic_component_1.DynamicComponent },
            { path: 'rxjs', component: rxjs_component_1.RxjsComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var CellComponent = (function () {
    function CellComponent(viewContainerRef, cfr) {
        this.viewContainerRef = viewContainerRef;
        this.cfr = cfr;
    }
    CellComponent.prototype.ngOnInit = function () {
        var compFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.viewContainerRef.createComponent(compFactory);
    };
    return CellComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CellComponent.prototype, "componentType", void 0);
CellComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-grid-cell',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
], CellComponent);
exports.CellComponent = CellComponent;


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var GridComponent = (function () {
    function GridComponent() {
        this.cellComponentTypes = [];
    }
    GridComponent.prototype.addDynamicCellComponent = function (selectedComponentType) {
        this.cellComponentTypes.push(selectedComponentType);
    };
    return GridComponent;
}());
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], GridComponent.prototype, "componentTypes", void 0);
GridComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-grid-component',
        template: "\n        <div class=\"row\" *ngFor=\"let cellComponentType of cellComponentTypes\">\n            <div class=\"col-lg-12\">\n                <appc-grid-cell [componentType]=\"cellComponentType\"></appc-grid-cell>\n            </div>\n        </div>\n    "
    })
], GridComponent);
exports.GridComponent = GridComponent;


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var common_1 = __webpack_require__(33);
var core_1 = __webpack_require__(0);
var grid_component_1 = __webpack_require__(270);
var cell_component_1 = __webpack_require__(269);
var GridModule = GridModule_1 = (function () {
    function GridModule() {
    }
    GridModule.withComponents = function (components) {
        return {
            ngModule: GridModule_1,
            providers: [
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    return GridModule;
}());
GridModule = GridModule_1 = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            grid_component_1.GridComponent,
            cell_component_1.CellComponent
        ],
        exports: [
            grid_component_1.GridComponent
        ]
    })
], GridModule);
exports.GridModule = GridModule;
var GridModule_1;


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates = (function () {
    function Coordinates(x, y, viewContainer) {
        this.x = x;
        this.y = y;
        this.viewContainer = viewContainer;
    }
    return Coordinates;
}());
exports.Coordinates = Coordinates;


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var edge_service_1 = __webpack_require__(165);
var coordinates_1 = __webpack_require__(272);
var VertexComponent = (function () {
    function VertexComponent(edgeService, vc) {
        this.edgeService = edgeService;
        this.vc = vc;
    }
    VertexComponent.prototype.setCoordinates = function () {
        var offsetLeft = this.element.nativeElement.offsetLeft;
        var offsetTop = this.element.nativeElement.offsetTop;
        this.edgeService.next(new coordinates_1.Coordinates(offsetLeft, offsetTop, this.vc));
    };
    return VertexComponent;
}());
tslib_1.__decorate([
    core_1.ViewChild('vertex'),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], VertexComponent.prototype, "element", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], VertexComponent.prototype, "value", void 0);
VertexComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-vertex',
        styles: [__webpack_require__(317)],
        template: '<div #vertex class="vertex" (click)="setCoordinates()"><span class="vertex-text">{{value}}</span></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [edge_service_1.EdgeService, core_1.ViewContainerRef])
], VertexComponent);
exports.VertexComponent = VertexComponent;


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(218);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(219);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=6.js.map