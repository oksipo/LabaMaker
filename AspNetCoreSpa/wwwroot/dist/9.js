webpackJsonp([9],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(7);
var http_1 = __webpack_require__(5);
var weather_data_1 = __webpack_require__(294);
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
        this.URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.KEY = '16b0f73c6b8a9412f74b1b56a485e456';
        this.IMP = '&units=imperial';
    }
    WeatherService.prototype.getWeatherItems = function () {
        return weather_data_1.WEATHER_ITEMS;
    };
    WeatherService.prototype.addWeatherItem = function (weatherItem) {
        weather_data_1.WEATHER_ITEMS.push(weatherItem);
    };
    WeatherService.prototype.clearWeatherItems = function () {
        weather_data_1.WEATHER_ITEMS.splice(0);
    };
    WeatherService.prototype.searchWeatherData = function (cityName) {
        return this._http.get(this.URL + cityName + '&APPID=' + this.KEY + this.IMP)
            .map(function (res) { return res.json(); })
            .do(function (res) { return console.log('Weather Data Object: ' + JSON.stringify(res)); })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    return WeatherService;
}());
WeatherService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WeatherProfileService = (function () {
    function WeatherProfileService() {
        this.profiles = [
            { profileName: '1', cities: 'New York' },
            { profileName: '2', cities: 'London' },
            { profileName: '3', cities: 'Berlin' }
        ];
    }
    WeatherProfileService.prototype.saveNewProfile = function (profile) {
        return this.profiles.push(profile);
    };
    WeatherProfileService.prototype.getProfiles = function () {
        return this.profiles;
    };
    WeatherProfileService.prototype.deleteProfile = function (profile) {
        this.profiles.splice(this.profiles.indexOf(profile), 1);
    };
    return WeatherProfileService;
}());
exports.WeatherProfileService = WeatherProfileService;


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var weather_service_1 = __webpack_require__(147);
var profile_service_1 = __webpack_require__(196);
var WeatherComponent = (function () {
    function WeatherComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.weatherItems = this._weatherService.getWeatherItems();
    };
    return WeatherComponent;
}());
WeatherComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-weather',
        template: "\n        <!-- Sidebar -->\n        <appc-we-sidebar></appc-we-sidebar>\n\n        <!-- Weather Details -->\n        <appc-we-search></appc-we-search>\n        <appc-we-list></appc-we-list>\n    ",
        providers: [weather_service_1.WeatherService, profile_service_1.WeatherProfileService]
    }),
    tslib_1.__metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<h3>Saved Profiles</h3>\r\n<div class=\"row\">\r\n  <form (ngSubmit)=\"onSaveNew()\" class=\"form-inline\">\r\n    <input type=\"text\" [(ngModel)]=\"newProfile.profileName\" name=\"profileName\" placeholder=\"Name\" class=\"form-control\">\r\n    <input type=\"text\" [(ngModel)]=\"newProfile.cities\" name=\"profileCity\" placeholder=\"City\" class=\"form-control\">\r\n    <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n  </form>\r\n</div>\r\n\r\n<!--Profile list-->\r\n<div class=\"row\">\r\n  <div class=\"card\" *ngFor=\"let profile of profiles\">\r\n    <div class=\"card-block\">\r\n      <h4 class=\"card-title\">{{ profile.profileName }} - {{ profile.cities }}</h4>\r\n      <p class=\"card-text\"></p>\r\n      <a class=\"btn btn-danger\" (click)=\"onDeleteProfile($event, profile)\">Delete</a>\r\n      <a class=\"btn btn-primary\" (click)=\"onLoadProfile(profile)\">Load</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"well\" *ngIf=\"weatherItem\">\r\n    <h2>{{ weatherItem?.name }}</h2>\r\n    <p><span class=\"label label-primary\">Temp </span>&nbsp; {{ weatherItem?.main.temp }}°F</p>\r\n    <p><span class=\"label label-info\">Outlook </span>&nbsp; {{ weatherItem?.weather[0].description }}</p>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var weather_service_1 = __webpack_require__(147);
var profile_service_1 = __webpack_require__(196);
var SidebarComponent = (function () {
    function SidebarComponent(_profileService, _weatherService) {
        this._profileService = _profileService;
        this._weatherService = _weatherService;
        this.newProfile = { profileName: '', cities: '' };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.profiles = this.getProfiles();
    };
    SidebarComponent.prototype.getProfiles = function () {
        return this._profileService.getProfiles();
    };
    SidebarComponent.prototype.onSaveNew = function () {
        var profileItem = {
            profileName: this.newProfile.profileName,
            cities: this.newProfile.cities
        };
        console.log(profileItem);
        this._profileService.saveNewProfile(profileItem);
        this.getProfiles();
        this.newProfile.profileName = '';
        this.newProfile.cities = '';
    };
    SidebarComponent.prototype.onLoadProfile = function (profile) {
        var _this = this;
        this._weatherService.searchWeatherData(profile.cities)
            .subscribe(function (data) { return _this.weatherItem = data; });
    };
    SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
        event.stopPropagation();
        this._profileService.deleteProfile(profile);
    };
    return SidebarComponent;
}());
SidebarComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-we-sidebar',
        styles: [__webpack_require__(319)],
        template: __webpack_require__(247)
    }),
    tslib_1.__metadata("design:paramtypes", [profile_service_1.WeatherProfileService, weather_service_1.WeatherService])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var WeatherItemComponent = (function () {
    function WeatherItemComponent() {
    }
    return WeatherItemComponent;
}());
tslib_1.__decorate([
    core_1.Input('weatherItem'),
    tslib_1.__metadata("design:type", Object)
], WeatherItemComponent.prototype, "weatherItem", void 0);
WeatherItemComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-we-item',
        template: "\n        <div class=\"card\">\n            <h2>{{ weatherItem.cityName }}</h2>\n            <p><span class=\"label label-primary\">Temp </span>&nbsp;\n                {{ weatherItem.temperature }}\u00B0F</p>\n            <p><span class=\"label label-info\">Outlook </span>&nbsp;\n                {{ weatherItem.description }}</p>\n        </div>\n    "
    })
], WeatherItemComponent);
exports.WeatherItemComponent = WeatherItemComponent;


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var weather_service_1 = __webpack_require__(147);
var WeatherListComponent = (function () {
    function WeatherListComponent(_weatherService) {
        this._weatherService = _weatherService;
    }
    WeatherListComponent.prototype.ngOnInit = function () {
        this.weatherItems = this._weatherService.getWeatherItems();
    };
    return WeatherListComponent;
}());
WeatherListComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-we-list',
        template: "\n        <div class=\"card weather-list\">\n            <appc-we-item *ngFor=\"let weatherItem of weatherItems\"\n                [weatherItem]=\"weatherItem\">\n           </appc-we-item>\n        </div>\n    "
    }),
    tslib_1.__metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherListComponent);
exports.WeatherListComponent = WeatherListComponent;


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(8);
var weather_service_1 = __webpack_require__(147);
var WeatherSearchComponent = (function () {
    function WeatherSearchComponent(_weatherService) {
        this._weatherService = _weatherService;
        this.city = {};
    }
    WeatherSearchComponent.prototype.onSubmit = function () {
        var weatherItem = {
            cityName: this.city.name,
            description: this.city.weather[0].description,
            temperature: this.city.main.temp
        };
        this._weatherService.addWeatherItem(weatherItem);
        this.city.name = '';
    };
    WeatherSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchInput = new forms_1.FormControl('');
        this.searchInput.valueChanges
            .debounceTime(300) // wait 300 milliseconds
            .distinctUntilChanged() // emit when the current value is different than last.
            .switchMap(function (input) {
            return _this._weatherService.searchWeatherData(input);
        })
            .subscribe(function (city) { return _this.city = city; }, function (err) {
            console.log("Can't get weather. Error code: " + err.cod + ", Message: " + err.message);
            console.log(err);
        });
    };
    return WeatherSearchComponent;
}());
WeatherSearchComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'appc-we-search',
        template: "\n        <div class=\"weather-search\">\n            <form (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n              <h3>Add City: </h3>\n                <input\n                    [formControl]=\"searchInput\"\n                    type=\"text\"\n                    class=\"form-control input-sm\"\n                    placeholder=\"City\">\n                </div>\n                  <button class=\"btn btn-success profile-btn\" type=\"submit\">\n                       Submit\n                  </button>\n            </form>\n            <div *ngIf=\"city.name\">\n                <h4>City found: <small>{{city.name}}</small></h4>\n            </div>\n        </div>\n    "
    }),
    tslib_1.__metadata("design:paramtypes", [weather_service_1.WeatherService])
], WeatherSearchComponent);
exports.WeatherSearchComponent = WeatherSearchComponent;


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WEATHER_ITEMS = [];


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(2);
var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(31);
var weather_routes_1 = __webpack_require__(296);
var weather_component_1 = __webpack_require__(197);
var weather_list_component_1 = __webpack_require__(292);
var weather_item_component_1 = __webpack_require__(291);
var weather_search_component_1 = __webpack_require__(293);
var sidebar_component_1 = __webpack_require__(290);
var WeatherModule = (function () {
    function WeatherModule() {
    }
    return WeatherModule;
}());
WeatherModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            weather_routes_1.routing,
            shared_module_1.SharedModule
        ],
        providers: [],
        declarations: [
            sidebar_component_1.SidebarComponent,
            weather_component_1.WeatherComponent,
            weather_list_component_1.WeatherListComponent,
            weather_item_component_1.WeatherItemComponent,
            weather_search_component_1.WeatherSearchComponent
        ]
    })
], WeatherModule);
exports.WeatherModule = WeatherModule;


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(6);
var weather_component_1 = __webpack_require__(197);
var routes = [
    { path: '', component: weather_component_1.WeatherComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(221);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=9.js.map