webpackJsonp([10],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var AnimationsComponent = (function () {
    function AnimationsComponent() {
    }
    return AnimationsComponent;
}());
AnimationsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-animation',
        template: __webpack_require__(234)
    })
], AnimationsComponent);
exports.AnimationsComponent = AnimationsComponent;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var AnimationsBasicExamplesComponent = (function () {
    function AnimationsBasicExamplesComponent() {
        this.buttonState = 'inactive';
        this.signal = 'stop';
        this.isHere = false;
    }
    AnimationsBasicExamplesComponent.prototype.onGoClick = function () {
        this.signal = 'go';
    };
    AnimationsBasicExamplesComponent.prototype.onStopClick = function () {
        this.signal = 'stop';
    };
    AnimationsBasicExamplesComponent.prototype.toggleAnimation = function () {
        this.buttonState = this.buttonState === 'active' ? 'inactive' : 'active';
    };
    AnimationsBasicExamplesComponent.prototype.onToggle = function () {
        this.isHere = !this.isHere;
    };
    return AnimationsBasicExamplesComponent;
}());
AnimationsBasicExamplesComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-animations-basic-examples',
        template: __webpack_require__(235),
        styles: [__webpack_require__(314)],
        animations: [
            core_1.trigger('signal', [
                core_1.state('void', core_1.style({
                    transform: 'translateY(-100%)'
                })),
                core_1.state('go', core_1.style({
                    backgroundColor: 'green',
                    height: '100px'
                })),
                core_1.state('stop', core_1.style({
                    backgroundColor: 'red',
                    height: '50px'
                })),
                core_1.transition('* => *', core_1.animate('1s ease-out'))
            ]),
            core_1.trigger('buttonState', [
                core_1.state('inactive', core_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                core_1.state('active', core_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.5)'
                })),
                core_1.transition('inactive => active', core_1.animate('100ms ease-in')),
                core_1.transition('active => inactive', core_1.animate('100ms ease-out'))
            ])
        ]
    })
], AnimationsBasicExamplesComponent);
exports.AnimationsBasicExamplesComponent = AnimationsBasicExamplesComponent;


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var animations_1 = __webpack_require__(23);
var AnimationsRepeatingItemsComponent = (function () {
    function AnimationsRepeatingItemsComponent() {
        this.state = 'inactive';
        this.ourItems = [
            'Start the new app project',
            'Work on blog',
            'Lunch at 1'
        ];
    }
    AnimationsRepeatingItemsComponent.prototype.toggleFocus = function () {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    AnimationsRepeatingItemsComponent.prototype.submitItem = function (event) {
        this.ourItems.push(event.target.value);
        event.target.value = '';
    };
    AnimationsRepeatingItemsComponent.prototype.removeItem = function (event, i) {
        this.ourItems.splice(i, 1);
    };
    return AnimationsRepeatingItemsComponent;
}());
AnimationsRepeatingItemsComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-animation-repeating-items',
        template: __webpack_require__(236),
        styles: [__webpack_require__(315)],
        animations: [
            animations_1.trigger('focusPanel', [
                animations_1.state('inactive', animations_1.style({
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    transform: 'scale(1.04)'
                })),
                animations_1.transition('inactive => active', animations_1.animate('500ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('500ms ease-out'))
            ]),
            animations_1.trigger('note', [
                animations_1.state('inactive', animations_1.style({
                    opacity: '0'
                })),
                animations_1.state('active', animations_1.style({
                    opacity: '1'
                })),
                animations_1.transition('inactive => active', [
                    animations_1.animate(300, animations_1.keyframes([
                        animations_1.style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
                        animations_1.style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.6 }),
                        animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))
                ]),
                animations_1.transition('active => inactive', [
                    animations_1.animate(300, animations_1.keyframes([
                        animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                        animations_1.style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.7 }),
                        animations_1.style({ opacity: 0, transform: 'translateY(100%)', offset: 1 }),
                    ]))
                ])
            ]),
            animations_1.trigger('itemEnter', [
                animations_1.state('in', animations_1.style({ transform: 'translateY(0)' })),
                animations_1.transition('void => *', [
                    animations_1.style({ transform: 'translateY(-100%)', opacity: 0 }),
                    animations_1.animate('300ms ease-out')
                ]),
                animations_1.transition('* => void', [
                    animations_1.animate('300ms ease-out', animations_1.style({ transform: 'scaleY(0) translateY(200px)' }))
                ])
            ])
        ]
    })
], AnimationsRepeatingItemsComponent);
exports.AnimationsRepeatingItemsComponent = AnimationsRepeatingItemsComponent;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".traffic-light {\n  width: 100px;\n  height: 100px;\n  background-color: black; }\n", ""]);

// exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* @import url('https://fonts.googleapis.com/css?family=Raleway:200,400'); */\n* {\n  font-family: 'Raleway';\n  font-size: 20px;\n  color: #fff; }\n\nbody {\n  background-color: #272b2d;\n  padding: 7rem 0; }\n\nul {\n  list-style-type: none;\n  margin: 0 0 4rem 0; }\n\nul li {\n  display: inline;\n  float: left;\n  margin-right: 5rem; }\n\nul li a {\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1.3rem; }\n\n.panel {\n  background: #2e3437;\n  padding: 3rem;\n  width: 100%;\n  margin-bottom: 3rem; }\n\ninput {\n  background: none !important;\n  border: none !important;\n  box-shadow: none !important;\n  border-bottom: 1px solid #4d575d !important;\n  font-size: 1.9rem !important;\n  color: #fff !important;\n  font-weight: 200;\n  padding: 0 0 15px 0 !important; }\n\n::-webkit-input-placeholder {\n  color: #707374 !important; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #707374 !important; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #707374 !important; }\n\n:-ms-input-placeholder {\n  color: #707374 !important; }\n\np#subtxt {\n  color: #6a6c6e;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: .7em;\n  margin-bottom: 0; }\n\n.nplr {\n  padding-left: 0;\n  padding-right: 0; }\n\n.item-container {\n  background: #232628;\n  height: 65px;\n  margin-bottom: 2px; }\n\n.identifier {\n  background-color: #ff3a89;\n  width: 1%;\n  display: inline;\n  float: left;\n  height: 65px; }\n\n.item-container p, .item-container a {\n  display: inline;\n  float: left; }\n\n.item-container p {\n  width: 85%;\n  margin: 17px 0 0 0;\n  padding: 0;\n  text-indent: 30px; }\n\n.item-container a {\n  width: 11%;\n  margin-top: 17px;\n  text-align: center; }\n\n.clear {\n  clear: both; }\n\n.pages {\n  padding: 3rem; }\n\n.pages p, .pages ul li {\n  color: #7b878e;\n  clear: both; }\n\nh2 {\n  font-size: 1.3rem;\n  margin-bottom: 20px;\n  text-transform: uppercase; }\n", ""]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<appc-page-heading text=\"Animations\"></appc-page-heading>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-12 col-md-3 push-md-9\">\r\n        <div class=\"list-group\">\r\n            <a class=\"list-group-item\" routerLinkActive=\"active\" [routerLink]=\"['basicanimation']\">Basic animations</a>\r\n            <a class=\"list-group-item\" routerLinkActive=\"active\" [routerLink]=\"['repeatinganimations']\">Repeating items</a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-9 pull-md-3 bd-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"container\">\r\n        <button (click)=\"toggleAnimation()\" class=\"btn btn-primary\" [@buttonState]=\"buttonState\"> {{buttonState}} </button>\r\n    </div>\r\n</div>\r\n\r\n<h3>Traffic light</h3>\r\n<div class=\"row\">\r\n    <div class=\"container\">\r\n        <div class=\"traffic-light\" *ngIf=\"isHere\" [@signal]=\"signal\"></div>\r\n        <button (click)=\"onGoClick()\" class=\"btn btn-sm btn-primary\">Go </button>\r\n        <button (click)=\"onStopClick()\" class=\"btn btn-sm btn-danger\">Stop </button>\r\n        <button (click)=\"onToggle()\" class=\"btn btn-sm btn-warning\">Toggle </button>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"panel\" [@focusPanel]='state'>\r\n        <input type=\"text\" placeholder=\"Add an item here.\" on-focus='toggleFocus()' on-focusout='toggleFocus()' (keyup.enter)='submitItem($event)'>\r\n        <p id=\"subtxt\" [@note]='state'>Hit enter to add</p>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"small-12 medium-6\">\r\n    <div class=\"panel nplr\">\r\n        <div class=\"item-container\" *ngFor=\"let item of ourItems; let i = index\" [attr.data-index]=\"i\" [@itemEnter]=\"state\">\r\n            <div class=\"identifier\"></div>\r\n            <p>{{ item }}</p>\r\n            <a (click)=\"removeItem($event, i)\">X</a>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var animations_component_1 = __webpack_require__(177);
var shared_module_1 = __webpack_require__(31);
var repeating_items_component_1 = __webpack_require__(179);
var basic_examples_component_1 = __webpack_require__(178);
var animations_routes_1 = __webpack_require__(266);
var AnimationsModule = (function () {
    function AnimationsModule() {
    }
    return AnimationsModule;
}());
AnimationsModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [animations_routes_1.routing, shared_module_1.SharedModule],
        declarations: [
            animations_component_1.AnimationsComponent,
            basic_examples_component_1.AnimationsBasicExamplesComponent,
            repeating_items_component_1.AnimationsRepeatingItemsComponent
        ],
        providers: []
    })
], AnimationsModule);
exports.AnimationsModule = AnimationsModule;


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(7);
var animations_component_1 = __webpack_require__(177);
var basic_examples_component_1 = __webpack_require__(178);
var repeating_items_component_1 = __webpack_require__(179);
var routes = [
    {
        path: '', component: animations_component_1.AnimationsComponent, children: [
            { path: 'basicanimation', component: basic_examples_component_1.AnimationsBasicExamplesComponent },
            { path: 'repeatinganimations', component: repeating_items_component_1.AnimationsRepeatingItemsComponent }
        ]
    },
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(216);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(217);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=10.js.map