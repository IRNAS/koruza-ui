webpackJsonp([0,3],{

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koruza__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_add_operator_select__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_add_operator_select__);
/* harmony export (immutable) */ exports["b"] = getAuthenticationState;
/* harmony export (immutable) */ exports["c"] = getKoruzaState;




/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* combineReducers */])({
    authentication: __WEBPACK_IMPORTED_MODULE_1__authentication__["b" /* reducer */],
    koruza: __WEBPACK_IMPORTED_MODULE_2__koruza__["a" /* reducer */]
});
function getAuthenticationState() {
    return function (state) {
        return state.select(function (s) { return s.authentication; });
    };
}
function getKoruzaState() {
    return function (state) {
        return state.select(function (s) { return s.koruza; });
    };
}
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_add_operator_select__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ngrx_core_add_operator_select__);
/* harmony export (immutable) */ exports["a"] = reducer;
/* harmony export (immutable) */ exports["b"] = getCameraCalibration;
/* harmony export (immutable) */ exports["c"] = getMotors;



var initialState = {
    connected: false,
    errors: {
        code: 0,
    },
    motors: {
        x: 0,
        y: 0,
        rangeX: 25000,
        rangeY: 25000
    },
    sfps: {},
    cameraCalibration: {
        port: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].webcam.port,
        path: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].webcam.path,
        width: 1280,
        height: 720,
        offsetX: 0,
        offsetY: 0,
        distance: 7000
    },
    isFetching: false,
    lastUpdated: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* KoruzaActions */].UPDATE: {
            return Object.assign({}, state, {
                isFetching: true
            });
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* KoruzaActions */].UPDATE_COMPLETE: {
            var status = action.payload.status;
            return Object.assign({}, state, {
                connected: status.connected,
                errors: {
                    code: status.errors.code,
                },
                motors: {
                    x: status.motors.x,
                    y: status.motors.y,
                    rangeX: status.motors.range_x || 25000,
                    rangeY: status.motors.range_y || 25000
                },
                sfps: status.sfps,
                cameraCalibration: {
                    port: status.camera_calibration.port || __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].webcam.port,
                    path: status.camera_calibration.path || __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].webcam.path,
                    width: status.camera_calibration.width || 1280,
                    height: status.camera_calibration.height || 720,
                    offsetX: status.camera_calibration.offset_x,
                    offsetY: status.camera_calibration.offset_y,
                    distance: status.camera_calibration.distance || 7000
                },
                isFetching: false,
                lastUpdated: new Date()
            });
        }
        default: {
            return state;
        }
    }
}
;
function getCameraCalibration() {
    return function (state) {
        return state.select(function (s) { return s.cameraCalibration; });
    };
}
function getMotors() {
    return function (state) {
        return state.select(function (s) { return s.motors; });
    };
}
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/koruza.js.map

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
var environment = {
    production: true,
    ubus: {
        endpoint: '/ubus'
    },
    webcam: {}
};
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/environment.prod.js.map

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_add_operator_select__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_add_operator_select__);
/* harmony export (immutable) */ exports["b"] = reducer;
/* harmony export (immutable) */ exports["a"] = isAuthenticated;
/* harmony export (immutable) */ exports["c"] = isAuthenticating;
/* harmony export (immutable) */ exports["d"] = hasAuthenticationFailed;
/* unused harmony export getUsername */


var initialState = {
    authenticated: false,
    username: '',
    isAuthenticating: false,
    authenticationFailed: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* AuthenticationActions */].LOGIN: {
            return Object.assign({}, state, {
                isAuthenticating: true,
                authenticationFailed: false
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* AuthenticationActions */].LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                authenticated: true,
                username: action.payload.username,
                isAuthenticating: false,
                authenticationFailed: false
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* AuthenticationActions */].LOGIN_FAILED: {
            return Object.assign({}, state, {
                authenticated: false,
                username: '',
                isAuthenticating: false,
                authenticationFailed: true
            });
        }
        default: {
            return state;
        }
    }
}
;
function isAuthenticated() {
    return function (state) {
        return state.select(function (s) { return s.authenticated; });
    };
}
function isAuthenticating() {
    return function (state) {
        return state.select(function (s) { return s.isAuthenticating; });
    };
}
function hasAuthenticationFailed() {
    return function (state) {
        return state.select(function (s) { return s.authenticationFailed; });
    };
}
function getUsername() {
    return function (state) {
        return state.select(function (s) { return s.username; });
    };
}
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/authentication.js.map

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ubus__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localstorage__ = __webpack_require__(693);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ubus__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__localstorage__["a"]; });



/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__ubus__["a" /* UbusService */],
    __WEBPACK_IMPORTED_MODULE_1__localstorage__["a" /* LocalStorageService */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(854),
            styles: [__webpack_require__(849)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/app.js.map

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_let__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_authentication__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Authentication router guard.
 */
var AuthenticationGuard = (function () {
    function AuthenticationGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducers__["b" /* getAuthenticationState */])())
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducers_authentication__["a" /* isAuthenticated */])())
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        })
            .take(1);
    };
    AuthenticationGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationGuard);
    return AuthenticationGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/authentication.js.map

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPageComponent = (function () {
    function DashboardPageComponent(store, koruzaActions) {
        this.store = store;
        this.koruzaActions = koruzaActions;
        this.cameraCalibration = this.store
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getKoruzaState */])())
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["b" /* getCameraCalibration */])());
        this.motors = this.store
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getKoruzaState */])())
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["c" /* getMotors */])());
        this.unitStatus = this.store
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getKoruzaState */])());
    }
    DashboardPageComponent.prototype.onWebcamClick = function (coordinates) {
        // Request the motors to move based on coordinates.
        this.store.dispatch(this.koruzaActions.moveMotors(coordinates.x, coordinates.y));
    };
    DashboardPageComponent.prototype.onWebcamCalibrationSet = function (coordinates) {
        // Request the driver to configure webcam calibration.
        this.store.dispatch(this.koruzaActions.setCalibration(Math.round(coordinates.x), Math.round(coordinates.y)));
    };
    DashboardPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'dashboard-page',
            template: "\n    <div layout=\"row\">\n      <koruza-status [status]=\"unitStatus | async\"></koruza-status>\n\n      <koruza-webcam\n        [calibration]=\"cameraCalibration | async\"\n        [motors]=\"motors | async\"\n        (cameraClick)=\"onWebcamClick($event)\"\n        (calibrationSet)=\"onWebcamCalibrationSet($event)\"\n        flex\n      >\n      </koruza-webcam>\n    </div>\n  ",
            styles: [__webpack_require__(852)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* KoruzaActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* KoruzaActions */]) === 'function' && _b) || Object])
    ], DashboardPageComponent);
    return DashboardPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/dashboard.js.map

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_authentication__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPageComponent = (function () {
    function LoginPageComponent(store, actions) {
        this.store = store;
        this.actions = actions;
        this.username = '';
        this.password = '';
        this.isAuthenticating = this.store
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getAuthenticationState */])())
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducers_authentication__["c" /* isAuthenticating */])());
        this.hasAuthenticationFailed = this.store
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getAuthenticationState */])())
            .let(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__reducers_authentication__["d" /* hasAuthenticationFailed */])());
    }
    LoginPageComponent.prototype.onSubmit = function () {
        this.store.dispatch(this.actions.login(this.username, this.password));
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'login-page',
            template: "\n    <div layout=\"row\">\n      <div flex></div>\n      <md-card flex>\n        <md-card-title>Login</md-card-title>\n        <md-card-content>\n          <div *ngIf=\"hasAuthenticationFailed | async\" class=\"login-error\">\n            Username and/or password are incorrect.\n          </div>\n          <form\n            layout=\"column\"\n            (ngSubmit)=\"onSubmit()\"\n            #loginForm=\"ngForm\">\n\n            <md-input\n              flex\n              required\n              name=\"username\"\n              placeholder=\"Username\"\n              [(ngModel)]=\"username\">\n            </md-input>\n\n            <md-input\n              flex\n              required\n              name=\"password\"\n              type=\"password\"\n              placeholder=\"Password\"\n              [(ngModel)]=\"password\">\n            </md-input>\n\n            <div *ngIf=\"!(isAuthenticating | async)\" flex layout=\"row\">\n              <div flex></div>\n              <button\n                type=\"submit\"\n                [disabled]=\"!loginForm.form.valid\"\n                md-raised-button>\n                Login\n              </button>\n            </div>\n            <div *ngIf=\"isAuthenticating | async\" flex layout=\"row\">\n              <div flex></div>\n              <md-spinner class=\"login-spinner\"></md-spinner>\n            </div>\n          </form>\n        </md-card-content>\n      </md-card>\n      <div flex></div>\n    </div>\n  ",
            styles: [__webpack_require__(853)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__actions__["b" /* AuthenticationActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__actions__["b" /* AuthenticationActions */]) === 'function' && _b) || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/login.js.map

/***/ },

/***/ 505:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 505;


/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(687);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app__["a" /* AppModule */]);
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/main.js.map

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationActions = (function () {
    function AuthenticationActions() {
    }
    AuthenticationActions.prototype.login = function (username, password) {
        return {
            type: AuthenticationActions.LOGIN,
            payload: { username: username, password: password }
        };
    };
    AuthenticationActions.prototype.loginSuccess = function (username, password) {
        return {
            type: AuthenticationActions.LOGIN_SUCCESS,
            payload: { username: username, password: password }
        };
    };
    AuthenticationActions.prototype.loginFailed = function () {
        return {
            type: AuthenticationActions.LOGIN_FAILED
        };
    };
    AuthenticationActions.prototype.logout = function () {
        return {
            type: AuthenticationActions.LOGOUT
        };
    };
    AuthenticationActions.prototype.logoutSuccess = function () {
        return {
            type: AuthenticationActions.LOGOUT_SUCCESS
        };
    };
    AuthenticationActions.prototype.logoutFailed = function () {
        return {
            type: AuthenticationActions.LOGOUT_FAILED
        };
    };
    AuthenticationActions.LOGIN = 'authentication.login';
    AuthenticationActions.LOGIN_SUCCESS = 'authentication.login_success';
    AuthenticationActions.LOGIN_FAILED = 'authentication.login_failed';
    AuthenticationActions.LOGOUT = 'authentication.logout';
    AuthenticationActions.LOGOUT_SUCCESS = 'authentication.logout_success';
    AuthenticationActions.LOGOUT_FAILED = 'authentication.logout_failed';
    AuthenticationActions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AuthenticationActions);
    return AuthenticationActions;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/authentication.js.map

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KoruzaActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KoruzaActions = (function () {
    function KoruzaActions() {
    }
    KoruzaActions.prototype.update = function () {
        return {
            type: KoruzaActions.UPDATE
        };
    };
    KoruzaActions.prototype.updateComplete = function (status) {
        return {
            type: KoruzaActions.UPDATE_COMPLETE,
            payload: { status: status }
        };
    };
    KoruzaActions.prototype.updateFailed = function () {
        return {
            type: KoruzaActions.UPDATE_FAILED
        };
    };
    KoruzaActions.prototype.moveMotors = function (x, y) {
        return {
            type: KoruzaActions.MOVE_MOTORS,
            payload: { x: x, y: y }
        };
    };
    KoruzaActions.prototype.setCalibration = function (x, y) {
        return {
            type: KoruzaActions.SET_CALIBRATION,
            payload: { x: x, y: y }
        };
    };
    KoruzaActions.UPDATE = 'koruza.update';
    KoruzaActions.UPDATE_COMPLETE = 'koruza.update_complete';
    KoruzaActions.UPDATE_FAILED = 'koruza.update_failed';
    KoruzaActions.MOVE_MOTORS = 'koruza.move_motors';
    KoruzaActions.SET_CALIBRATION = 'koruza.set_calibration';
    KoruzaActions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], KoruzaActions);
    return KoruzaActions;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/koruza.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webcam__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status__ = __webpack_require__(678);
/* unused harmony reexport WebcamComponent */
/* unused harmony reexport StatusComponent */




/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__webcam__["a" /* WebcamComponent */],
    __WEBPACK_IMPORTED_MODULE_1__status__["a" /* StatusComponent */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_koruza__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ERROR_ENCODER_X_NOT_CONNECTED = 1 << 0;
var ERROR_ENCODER_Y_NOT_CONNECTED = 1 << 1;
var ERROR_ENCODER_X_MAG_LOW = 1 << 2;
var ERROR_ENCODER_Y_MAG_LOW = 1 << 3;
var ERROR_ENCODER_X_MAG_HIGH = 1 << 4;
var ERROR_ENCODER_Y_MAG_HIGH = 1 << 5;
var StatusComponent = (function () {
    function StatusComponent() {
    }
    Object.defineProperty(StatusComponent.prototype, "hasErrors", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["isNumber"](this.status.errors.code) && this.status.errors.code > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "errors", {
        get: function () {
            if (!this.hasErrors)
                return [];
            var result = [];
            var code = this.status.errors.code;
            if (code & ERROR_ENCODER_X_NOT_CONNECTED)
                result.push("Encoder X not connected.");
            if (code & ERROR_ENCODER_Y_NOT_CONNECTED)
                result.push("Encoder Y not connected.");
            if (code & ERROR_ENCODER_X_MAG_LOW)
                result.push("Encoder X field too low.");
            if (code & ERROR_ENCODER_Y_MAG_LOW)
                result.push("Encoder Y field too low.");
            if (code & ERROR_ENCODER_X_MAG_HIGH)
                result.push("Encoder X field too high.");
            if (code & ERROR_ENCODER_Y_MAG_HIGH)
                result.push("Encoder Y field too high.");
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "sfpConnected", {
        get: function () {
            return !__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](this.status.sfps);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "sfp", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["first"](__WEBPACK_IMPORTED_MODULE_0_lodash__["values"](this.status.sfps));
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__reducers_koruza__["KoruzaState"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__reducers_koruza__["KoruzaState"]) === 'function' && _a) || Object)
    ], StatusComponent.prototype, "status", void 0);
    StatusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
            selector: 'koruza-status',
            template: "\n    <div layout=\"column\" class=\"container\">\n      <!-- MCU -->\n      <div *ngIf=\"status.connected\" class=\"status ok\" flex layout=\"row\">\n        <md-icon>check_circle</md-icon>\n        <span>MCU Connected</span>\n      </div>\n\n      <div *ngIf=\"!status.connected\" class=\"status warning\" flex layout=\"row\">\n        <md-icon>warning</md-icon>\n        <span>MCU Disconnected</span>\n      </div>\n\n      <div *ngIf=\"status.connected\" flex layout=\"column\">\n        <span class=\"datum-name\">Motor X</span>\n        <span>{{status.motors.x}}</span>\n        <span class=\"datum-name\">Motor Y</span>\n        <span>{{status.motors.y}}</span>\n      </div>\n\n      <div *ngIf=\"hasErrors\" class=\"status warning\" flex layout=\"row\">\n        <md-icon>warning</md-icon>\n        <span>MCU Error</span>\n      </div>\n\n      <div *ngIf=\"hasErrors\" flex layout=\"column\">\n        <span class=\"error\" *ngFor=\"let error of errors\">{{error}}</span>\n      </div>\n\n      <!-- SFP -->\n      <div *ngIf=\"sfpConnected\" class=\"status ok\" flex layout=\"row\">\n        <md-icon>check_circle</md-icon>\n        <span>SFP Connected</span>\n      </div>\n\n      <div *ngIf=\"!sfpConnected\" class=\"status warning\" flex layout=\"row\">\n        <md-icon>warning</md-icon>\n        <span>SFP Disconnected</span>\n      </div>\n\n      <div *ngIf=\"sfpConnected\" flex layout=\"column\">\n        <span class=\"datum-name\">Serial Number</span>\n        <span>{{sfp.serialNumber}}</span>\n        <span class=\"datum-name\">TX Wavelength</span>\n        <span>{{sfp.wavelength}} nm</span>\n        <span class=\"datum-name\">RX Power</span>\n        <span>{{sfp.diagnostics.rxPower}} ({{sfp.diagnostics.rxPower | dbm}} dBm)</span>\n        <span class=\"datum-name\">TX Power</span>\n        <span>{{sfp.diagnostics.txPower}} ({{sfp.diagnostics.txPower | dbm}} dBm)</span>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(850)],
        }), 
        __metadata('design:paramtypes', [])
    ], StatusComponent);
    return StatusComponent;
    var _a;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/status.js.map

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WebcamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WEBCAM_CENTER_WIDTH = 40;
var WEBCAM_CENTER_HEIGHT = 40;
var PX_PER_MM = 18225;
var PX_PER_MM_AT_WEBCAM = { x: 2592, y: 1944 };
var STEPS_PER_ROTATION = 4096;
var ROTATION_DISTANCE = 0.8;
var LEAVER = 115.8;
var ANGLE_PER_STEP = Math.atan(ROTATION_DISTANCE / (STEPS_PER_ROTATION * LEAVER));
// TODO: Get the rotation angle from somewhere.
var ROTATION_ANGLE = 0;
var MouseMode;
(function (MouseMode) {
    MouseMode[MouseMode["NONE"] = 0] = "NONE";
    MouseMode[MouseMode["MOVE"] = 1] = "MOVE";
    MouseMode[MouseMode["SET_CALIBRATION"] = 2] = "SET_CALIBRATION";
})(MouseMode || (MouseMode = {}));
var WebcamComponent = (function () {
    function WebcamComponent() {
        // Click event.
        this.cameraClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* EventEmitter */]();
        // Calibration set event.
        this.calibrationSet = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* EventEmitter */]();
        this.cameraImageLoaded = false;
        this.cameraImageError = false;
        this.baseWidth = 0;
        this.baseHeight = 0;
        this.baseOffsetLeft = 0;
        this.baseOffsetTop = 0;
        this.mouseMode = MouseMode.NONE;
        this.mouseOverlay = false;
        this.mouse = { x: 0, y: 0 };
        this.mouseWebcam = { x: 0, y: 0 };
        this.mouseMotors = { x: 0, y: 0 };
        this.arrowSteps = 1000;
    }
    Object.defineProperty(WebcamComponent.prototype, "cameraUrl", {
        /**
         * Returns the URL of the camera image.
         */
        get: function () {
            if (!this.calibration.path)
                return null;
            var config = __WEBPACK_IMPORTED_MODULE_0_lodash__["defaults"]({}, this.calibration, __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webcam, {
                host: window.location.hostname,
                port: window.location.port
            });
            return "http://" + config.host + ":" + config.port + config.path;
        },
        enumerable: true,
        configurable: true
    });
    WebcamComponent.prototype.onResize = function (event) {
        this.recomputeCenterGeometry();
    };
    WebcamComponent.prototype.onCameraImageLoad = function () {
        this.cameraImageLoaded = true;
        this.recomputeCenterGeometry();
    };
    WebcamComponent.prototype.onCameraImageError = function () {
        this.cameraImageLoaded = false;
        this.cameraImageError = true;
    };
    WebcamComponent.prototype.onCameraImageMouseMove = function (event) {
        var boundingBox = this.cameraImage.nativeElement.getBoundingClientRect();
        var x = event.clientX - boundingBox.left;
        var y = event.clientY - boundingBox.top;
        this.mouseOverlay = true;
        this.mouse = { x: x, y: y };
        this.mouseWebcam = this.mapBrowserToWebcam({ x: x, y: y });
        this.mouseMotors = this.mapReferenceToMotor(this.mapWebcamToReference(this.mouseWebcam));
    };
    WebcamComponent.prototype.onCameraImageMouseLeave = function () {
        this.mouseOverlay = false;
    };
    WebcamComponent.prototype.onCameraImageClick = function (event) {
        var boundingBox = this.cameraImage.nativeElement.getBoundingClientRect();
        var x = event.clientX - boundingBox.left;
        var y = event.clientY - boundingBox.top;
        // Inverse transformation to motor coordinates.
        var webcam = this.mapBrowserToWebcam({ x: x, y: y });
        var reference = this.mapWebcamToReference(webcam);
        var motor = this.mapReferenceToMotor(reference);
        switch (this.mouseMode) {
            case MouseMode.MOVE: {
                this.cameraClick.emit(motor);
                break;
            }
            case MouseMode.SET_CALIBRATION: {
                this.calibrationSet.emit(webcam);
                this.mouseMode = MouseMode.NONE;
                break;
            }
            default: break;
        }
    };
    WebcamComponent.prototype.onMoveClick = function (where) {
        this.cameraClick.emit({
            x: this.motors.x + this.arrowSteps * (where.x || 0),
            y: this.motors.y + this.arrowSteps * (where.y || 0)
        });
    };
    /**
     * Returns the width and height ratios between browser and webcam coordinates.
     */
    WebcamComponent.prototype.ratioBrowserToWebcam = function () {
        return {
            x: this.baseWidth / this.calibration.width,
            y: this.baseHeight / this.calibration.height
        };
    };
    /**
     * Maps coordinates in webcam coordinate system to coordinates in browser
     * coordinate system.
     */
    WebcamComponent.prototype.mapWebcamToBrowser = function (_a) {
        var x = _a.x, y = _a.y;
        var ratio = this.ratioBrowserToWebcam();
        x = Math.min(this.baseWidth, Math.max(0, ratio.x * x));
        y = Math.min(this.baseHeight, Math.max(0, ratio.y * y));
        return { x: x, y: y };
    };
    /**
     * Maps coordinates in browser coordinate system to coordinates in webcam
     * coordinate system.
     */
    WebcamComponent.prototype.mapBrowserToWebcam = function (_a) {
        var x = _a.x, y = _a.y;
        var ratio = this.ratioBrowserToWebcam();
        x = x / ratio.x;
        y = y / ratio.y;
        return { x: x, y: y };
    };
    /**
     * Returns the number of pixels per millimeter when converting from the
     * reference coordinate system to the webcam coordinate system. This value
     * depends on the camera resolution.
     */
    WebcamComponent.prototype.getPixelsPerMm = function () {
        var ratio = {
            x: this.calibration.width / PX_PER_MM_AT_WEBCAM.x,
            y: this.calibration.height / PX_PER_MM_AT_WEBCAM.y
        };
        return ((ratio.x + ratio.y) / 2) * PX_PER_MM;
    };
    /**
     * Maps coordinates in reference coordinate system to coordinates in webcam
     * coordinate system.
     */
    WebcamComponent.prototype.mapReferenceToWebcam = function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        var pixelsPerMm = this.getPixelsPerMm();
        var transform = function (_a) {
            var x = _a.x, y = _a.y;
            return {
                x: x * pixelsPerMm / _this.calibration.distance,
                y: -y * pixelsPerMm / _this.calibration.distance
            };
        };
        // Reference position (0, 0) should be in the calibration center when motors are at (0, 0).
        var motorOrigin = transform(this.mapMotorToReference({ x: 0, y: 0 }));
        var motorCurrent = transform(this.mapMotorToReference(this.motors));
        (_b = transform({ x: x, y: y }), x = _b.x, y = _b.y, _b);
        x = x + this.calibration.offsetX - (motorCurrent.x - motorOrigin.x);
        y = y + this.calibration.offsetY - (motorCurrent.y - motorOrigin.y);
        return { x: x, y: y };
        var _b;
    };
    /**
     * Maps coordinates in webcam coordinate system to coordinates in reference
     * coordinate system.
     */
    WebcamComponent.prototype.mapWebcamToReference = function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        var pixelsPerMm = this.getPixelsPerMm();
        var transform = function (_a) {
            var x = _a.x, y = _a.y;
            return {
                x: x * pixelsPerMm / _this.calibration.distance,
                y: -y * pixelsPerMm / _this.calibration.distance
            };
        };
        // Reference position (0, 0) should be in the calibration center when motors are at (0, 0).
        var motorOrigin = transform(this.mapMotorToReference({ x: 0, y: 0 }));
        var motorCurrent = transform(this.mapMotorToReference(this.motors));
        x = x - this.calibration.offsetX + (motorCurrent.x - motorOrigin.x);
        y = y - this.calibration.offsetY + (motorCurrent.y - motorOrigin.y);
        x = x * this.calibration.distance / pixelsPerMm;
        y = -y * this.calibration.distance / pixelsPerMm;
        return { x: x, y: y };
    };
    /**
     * Returns the motor coordinate range.
     */
    WebcamComponent.prototype.getMotorRange = function () {
        return {
            x: 0.5 * this.calibration.distance * Math.sin(ANGLE_PER_STEP * this.motors.rangeX * 2),
            y: 0.5 * this.calibration.distance * Math.sin(ANGLE_PER_STEP * this.motors.rangeY * 2)
        };
    };
    /**
     * Maps coordinates in motor coordinate system to coordinates in reference
     * coordinate system.
     */
    WebcamComponent.prototype.mapMotorToReference = function (_a) {
        var x = _a.x, y = _a.y;
        var range = this.getMotorRange();
        x += this.motors.rangeX;
        y += this.motors.rangeY;
        x = Math.cos(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * x) - range.x) -
            Math.sin(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * y) - range.y);
        y = Math.sin(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * x) - range.x) +
            Math.cos(ROTATION_ANGLE) * (this.calibration.distance * Math.sin(ANGLE_PER_STEP * y) - range.y);
        return { x: x, y: y };
    };
    /**
     * Maps coordinates in reference coordinate system to coordinates in motor
     * coordinate system.
     */
    WebcamComponent.prototype.mapReferenceToMotor = function (_a) {
        var x = _a.x, y = _a.y;
        var range = this.getMotorRange();
        x = (1.0 / ANGLE_PER_STEP) * Math.asin((x * Math.cos(ROTATION_ANGLE) + y * Math.sin(ROTATION_ANGLE) + range.x) / this.calibration.distance);
        y = (1.0 / ANGLE_PER_STEP) * Math.asin((-x * Math.sin(ROTATION_ANGLE) + y * Math.cos(ROTATION_ANGLE) + range.x) / this.calibration.distance);
        x -= this.motors.rangeX;
        y -= this.motors.rangeY;
        x = Math.round(Math.max(-this.motors.rangeX, Math.min(this.motors.rangeX, x)));
        y = Math.round(Math.max(-this.motors.rangeY, Math.min(this.motors.rangeX, y)));
        return { x: x, y: y };
    };
    Object.defineProperty(WebcamComponent.prototype, "bbPath", {
        get: function () {
            // Compute the corners of the bounding box.
            var corners = [
                { x: -this.motors.rangeX, y: this.motors.rangeY },
                { x: this.motors.rangeX, y: this.motors.rangeY },
                { x: this.motors.rangeX, y: -this.motors.rangeY },
                { x: -this.motors.rangeX, y: -this.motors.rangeY }
            ];
            // Generate the SVG path for the bounding box.
            var bbPath = [];
            for (var _i = 0, corners_1 = corners; _i < corners_1.length; _i++) {
                var corner = corners_1[_i];
                var mapped = this.mapWebcamToBrowser(this.mapReferenceToWebcam(this.mapMotorToReference(corner)));
                var command = __WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"](bbPath) ? 'M' : 'L';
                bbPath.push("" + command + mapped.x + " " + mapped.y);
            }
            bbPath.push('Z');
            // Draw center and measuring lines of 120mm.
            var center = [
                { c: 'M', x: 0, y: 0 },
                { c: 'L', x: 120, y: 0 },
                { c: 'M', x: 0, y: 0 },
                { c: 'L', x: 0, y: 120 }
            ];
            for (var _a = 0, center_1 = center; _a < center_1.length; _a++) {
                var corner = center_1[_a];
                var mapped = this.mapWebcamToBrowser(this.mapReferenceToWebcam(corner));
                bbPath.push("" + corner.c + mapped.x + " " + mapped.y);
            }
            return bbPath.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "centerBox", {
        get: function () {
            // Compute the size of the center overlay.
            var centerSize = this.mapWebcamToBrowser({ x: WEBCAM_CENTER_WIDTH, y: WEBCAM_CENTER_HEIGHT });
            // Compute the current position of the center overlay.
            var centerWebcam = { x: this.calibration.offsetX, y: this.calibration.offsetY };
            var centerPosition = this.mapWebcamToBrowser(centerWebcam);
            return {
                visible: centerWebcam.x > 0 && centerWebcam.y > 0,
                left: this.baseOffsetLeft + Math.max(0, centerPosition.x - centerSize.x / 2),
                top: this.baseOffsetTop + Math.max(0, centerPosition.y - centerSize.y / 2),
                width: centerSize.x,
                height: centerSize.y
            };
        },
        enumerable: true,
        configurable: true
    });
    WebcamComponent.prototype.recomputeCenterGeometry = function () {
        this.baseWidth = this.cameraImage.nativeElement.offsetWidth;
        this.baseHeight = this.cameraImage.nativeElement.offsetHeight;
        this.baseOffsetLeft = this.cameraImage.nativeElement.offsetLeft;
        this.baseOffsetTop = this.cameraImage.nativeElement.offsetTop;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["CameraCalibrationState"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["CameraCalibrationState"]) === 'function' && _a) || Object)
    ], WebcamComponent.prototype, "calibration", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["MotorState"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["MotorState"]) === 'function' && _b) || Object)
    ], WebcamComponent.prototype, "motors", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* EventEmitter */]) === 'function' && _c) || Object)
    ], WebcamComponent.prototype, "cameraClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Output */])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* EventEmitter */]) === 'function' && _d) || Object)
    ], WebcamComponent.prototype, "calibrationSet", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* ViewChild */])('cameraImage'), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]) === 'function' && _e) || Object)
    ], WebcamComponent.prototype, "cameraImage", void 0);
    WebcamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* Component */])({
            selector: 'koruza-webcam',
            template: "\n    <md-card class=\"camera-container\">\n      <div layout=\"column\" alignItems=\"center\">\n        <div flex layout=\"column\" alignItems=\"center\">\n          <div>\n            <span>Mode:</span>\n            <md-button-toggle-group name=\"alignment\" [(ngModel)]=\"mouseMode\">\n              <md-button-toggle [value]=\"0\">None</md-button-toggle>\n              <md-button-toggle [value]=\"1\">Movement</md-button-toggle>\n              <md-button-toggle [value]=\"2\">Calibration</md-button-toggle>\n            </md-button-toggle-group>\n            <span>Steps:</span>\n            <md-button-toggle-group name=\"steps\" [(ngModel)]=\"arrowSteps\">\n              <md-button-toggle [value]=\"1\">1</md-button-toggle>\n              <md-button-toggle [value]=\"10\">10</md-button-toggle>\n              <md-button-toggle [value]=\"100\">100</md-button-toggle>\n              <md-button-toggle [value]=\"1000\">1000</md-button-toggle>\n            </md-button-toggle-group>\n          </div>\n          <div>\n            &nbsp;\n          </div>\n          <div>\n            <button md-icon-button (click)=\"onMoveClick({y: 1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n                <md-icon>keyboard_arrow_up</md-icon>\n            </button>\n          </div>\n        </div>\n        <div flex layout=\"row\" alignItems=\"center\">\n          <div>\n            <button md-icon-button (click)=\"onMoveClick({x: -1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n              <md-icon>keyboard_arrow_left</md-icon>\n            </button>\n          </div>\n          <div flex class=\"camera-image-container\">\n            <img\n              #cameraImage\n              class=\"camera\"\n              [src]=\"cameraUrl\"\n              [style.visibility]=\"cameraImageLoaded ? 'visible' : 'hidden'\"\n              (load)=\"onCameraImageLoad()\"\n              (error)=\"onCameraImageError()\"\n              (click)=\"onCameraImageClick($event)\"\n              (window:resize)=\"onResize($event)\"\n              *ngIf=\"!!cameraUrl && !cameraImageError\"\n            />\n\n            <div *ngIf=\"!cameraImageLoaded\">\n              <md-spinner *ngIf=\"!cameraImageError\"></md-spinner>\n              <div *ngIf=\"cameraImageError\">Camera image unavailable.</div>\n            </div>\n\n            <svg\n              class=\"bounding-box\"\n              (click)=\"onCameraImageClick($event)\"\n              (mousemove)=\"onCameraImageMouseMove($event)\"\n              (mouseleave)=\"onCameraImageMouseLeave()\"\n              *ngIf=\"cameraImageLoaded\"\n            >\n              <path [attr.d]=\"bbPath\" fill=\"transparent\" stroke=\"lime\" stroke-width=\"2\" />\n\n              <g *ngIf=\"mouseOverlay\" transform=\"translate(10, 5)\" class=\"mouse-coordinates\">\n                <text x=\"0\" y=\"0\">\n                  <tspan x=\"0\" dy=\"1.2em\">Webcam: X={{mouseWebcam.x | number:'1.0-0'}} Y={{mouseWebcam.y | number:'1.0-0'}}</tspan>\n                  <tspan x=\"0\" dy=\"1.2em\">Motors: X={{mouseMotors.x | number:'1.0-0'}} Y={{mouseMotors.y | number:'1.0-0'}}</tspan>\n                </text>\n              </g>\n            </svg>\n\n            <div\n              class=\"camera-center\"\n              [style.width.px]=\"centerBox.width\"\n              [style.height.px]=\"centerBox.height\"\n              [style.left.px]=\"centerBox.left\"\n              [style.top.px]=\"centerBox.top\"\n              *ngIf=\"cameraImageLoaded && centerBox.visible\"\n            >\n              <md-icon\n                class=\"camera-cross\"\n                [style.left.px]=\"centerBox.width / 4\"\n                [style.top.px]=\"centerBox.height / 4\"\n                [style.width.px]=\"centerBox.width / 2\"\n                [style.height.px]=\"centerBox.height / 2\"\n                [style.fontSize.px]=\"(centerBox.width + centerBox.height) / 4\"\n              >\n                add\n              </md-icon>\n            </div>\n          </div>\n          <div>\n            <button md-icon-button (click)=\"onMoveClick({x: 1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n              <md-icon>keyboard_arrow_right</md-icon>\n            </button>\n          </div>\n        </div>\n        <div>\n          <button md-icon-button (click)=\"onMoveClick({y: -1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n            <md-icon>keyboard_arrow_down</md-icon>\n          </button>\n        </div>\n      </div>\n    </md-card>\n  ",
            styles: [__webpack_require__(851)],
        }), 
        __metadata('design:paramtypes', [])
    ], WebcamComponent);
    return WebcamComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/webcam.js.map

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FlexDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlexDirective = (function () {
    function FlexDirective() {
        this.shrink = 1;
        this.grow = 1;
    }
    Object.defineProperty(FlexDirective.prototype, "style", {
        get: function () {
            return this.grow + " " + this.shrink + " " + (this.flex === '' ? '0' : this.flex) + "%";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], FlexDirective.prototype, "shrink", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number)
    ], FlexDirective.prototype, "grow", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', String)
    ], FlexDirective.prototype, "flex", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('style.flex'), 
        __metadata('design:type', Object)
    ], FlexDirective.prototype, "style", null);
    FlexDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({
            selector: '[flex]'
        }), 
        __metadata('design:paramtypes', [])
    ], FlexDirective);
    return FlexDirective;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/flex.js.map

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flex__ = __webpack_require__(680);
/* unused harmony reexport LayoutDirective */
/* unused harmony reexport FlexDirective */



/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* LayoutDirective */],
    __WEBPACK_IMPORTED_MODULE_1__flex__["a" /* FlexDirective */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LayoutDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutDirective = (function () {
    function LayoutDirective() {
        this.display = 'flex';
    }
    Object.defineProperty(LayoutDirective.prototype, "direction", {
        get: function () {
            return (this.layout === 'column') ? 'column' : 'row';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', String)
    ], LayoutDirective.prototype, "layout", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('style.align-items'),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('alignItems'), 
        __metadata('design:type', String)
    ], LayoutDirective.prototype, "alignItems", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('style.display'), 
        __metadata('design:type', Object)
    ], LayoutDirective.prototype, "display", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostBinding */])('style.flex-direction'), 
        __metadata('design:type', Object)
    ], LayoutDirective.prototype, "direction", null);
    LayoutDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({
            selector: '[layout]'
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutDirective);
    return LayoutDirective;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/layout.js.map

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthenticationEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationEffects = (function () {
    function AuthenticationEffects(ubus, updates, actions, localStorage, router) {
        var _this = this;
        this.ubus = ubus;
        this.updates = updates;
        this.actions = actions;
        this.localStorage = localStorage;
        this.router = router;
        /**
         * Handles the login via uBus.
         */
        this.login = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */].LOGIN)
            .map(function (update) { return update.payload; })
            .switchMap(function (payload) {
            return _this.ubus.login(payload.username, payload.password)
                .map(function (session) { return _this.actions.loginSuccess(session.username, payload.password); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.actions.loginFailed()); });
        });
        /**
         * Performs a redirect after a successful login.
         */
        this.loginRedirect = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */].LOGIN_SUCCESS)
            .do(function () { return _this.router.navigate(['/']); });
        /**
         * Invalidates the session after a failed login.
         */
        this.loginInvalidateSession = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */].LOGIN_FAILED)
            .do(function () { return _this.localStorage.removeItem('login.data'); });
        /**
         * Stores the login credentials after a successful login.
         */
        this.loginStoreSession = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */].LOGIN_SUCCESS)
            .do(function (update) { return _this.localStorage.setItem('login.data', {
            username: update.payload.username,
            password: update.payload.password
        }); });
        /**
         * Restores an existing session when available.
         */
        this.loginRestoreSession = this.localStorage.getObservable('login.data')
            .filter(function (value) { return !!value; })
            .map(function (data) { return _this.actions.login(data.username, data.password); });
        /**
         * Handles the logout via uBus.
         */
        this.logout = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */].LOGOUT)
            .switchMap(function (action) {
            return _this.ubus.logout()
                .map(function () { return _this.actions.logoutSuccess(); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.actions.logoutFailed()); });
        });
        /**
         * Invalidates the session after a successful logout.
         */
        this.logoutInvalidateSession = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */].LOGOUT_SUCCESS)
            .do(function () { return _this.localStorage.removeItem('login.data'); });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "login", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "loginRedirect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "loginInvalidateSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "loginStoreSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "loginRestoreSession", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "logout", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }), 
        __metadata('design:type', Object)
    ], AuthenticationEffects.prototype, "logoutInvalidateSession", void 0);
    AuthenticationEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UbusService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UbusService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services__["c" /* LocalStorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services__["c" /* LocalStorageService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], AuthenticationEffects);
    return AuthenticationEffects;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/authentication.js.map

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__koruza__ = __webpack_require__(685);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__koruza__["a"]; });




/* unused harmony default export */ var _unused_webpack_default_export = [
    __WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* AuthenticationEffects */],
    __WEBPACK_IMPORTED_MODULE_1__koruza__["a" /* KoruzaEffects */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KoruzaEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KoruzaEffects = (function () {
    function KoruzaEffects(ubus, updates, actions) {
        var _this = this;
        this.ubus = ubus;
        this.updates = updates;
        this.actions = actions;
        /**
         * Periodically refresh state from the remote node.
         */
        this.periodicRefresh = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 1000).map(function () { return _this.actions.update(); });
        /**
         * Handle state refresh via an uBus call.
         */
        this.refreshState = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */].UPDATE)
            .switchMap(function (action) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].zip(_this.ubus.call('koruza.get_status'), _this.ubus.call('sfp.get_modules'), _this.ubus.call('sfp.get_diagnostics'))
                .map(function (_a) {
                var status = _a[0], sfpModules = _a[1], sfpDiagnostics = _a[2];
                // Merge in SFP modules.
                status.sfps = {};
                for (var key in sfpModules) {
                    var sfp = sfpModules[key];
                    var diagnostics = sfpDiagnostics[key].value || {};
                    status.sfps[key] = {
                        bus: sfp.bus,
                        manufacturer: sfp.manufacturer,
                        serialNumber: sfp.serial_number,
                        type: sfp.type,
                        connector: sfp.connector,
                        bitrate: sfp.bitrate,
                        wavelength: sfp.wavelength,
                        diagnostics: {
                            temperature: Number.parseFloat(diagnostics.temperature),
                            vcc: Number.parseFloat(diagnostics.vcc),
                            txBias: Number.parseFloat(diagnostics.tx_bias),
                            txPower: Number.parseFloat(diagnostics.tx_power),
                            rxPower: Number.parseFloat(diagnostics.rx_power)
                        }
                    };
                }
                return _this.actions.updateComplete(status);
            })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.actions.updateFailed()); });
        });
        /**
         * Handle motor move command.
         */
        this.moveMotors = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */].MOVE_MOTORS)
            .switchMap(function (action) {
            return _this.ubus.call('koruza.move_motor', {
                x: action.payload.x,
                y: action.payload.y,
                z: 0
            })
                .map(function () { return _this.actions.update(); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.actions.update()); });
        });
        /**
         * Handle calibration configuration command.
         */
        this.calibrationSet = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */].SET_CALIBRATION)
            .switchMap(function (action) {
            return _this.ubus.call('koruza.set_webcam_calibration', {
                x: action.payload.x,
                y: action.payload.y,
            })
                .map(function () { return _this.actions.update(); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.actions.update()); });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], KoruzaEffects.prototype, "periodicRefresh", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], KoruzaEffects.prototype, "refreshState", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], KoruzaEffects.prototype, "moveMotors", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], KoruzaEffects.prototype, "calibrationSet", void 0);
    KoruzaEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services__["b" /* UbusService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services__["b" /* UbusService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */]) === 'function' && _c) || Object])
    ], KoruzaEffects);
    return KoruzaEffects;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/koruza.js.map

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(444);
/* unused harmony reexport AuthenticationGuard */


/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* AuthenticationGuard */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(443);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__(688);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__module__["a"]; });


//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__actions__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes__ = __webpack_require__(691);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                // Router.
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* routes */], { useHash: true }),
                // NgRx.
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_10__reducers__["a" /* default */]),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* EffectsModule */].runAfterBootstrap(__WEBPACK_IMPORTED_MODULE_11__effects__["a" /* AuthenticationEffects */]),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__effects__["b" /* KoruzaEffects */]),
                // Forms.
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                // HTTP.
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                // Angular Material.
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["MaterialModule"].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__pipes__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_14__directives__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_15__components__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_17__pages__["a" /* default */],
                // Main component.
                __WEBPACK_IMPORTED_MODULE_8__app__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_13__actions__["a" /* default */],
                __WEBPACK_IMPORTED_MODULE_16__guards__["a" /* default */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/module.js.map

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(446);
/* unused harmony reexport DashboardPageComponent */
/* unused harmony reexport LoginPageComponent */




/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__dashboard__["a" /* DashboardPageComponent */],
    __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPageComponent */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DbmPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A pipe which transforms the input value from mW to dBm.
 */
var DbmPipe = (function () {
    function DbmPipe() {
    }
    DbmPipe.prototype.transform = function (value) {
        var valueDbm = 10 * Math.log10(value);
        if (valueDbm < -40)
            valueDbm = -40;
        return Number.parseFloat(valueDbm.toFixed(2));
    };
    DbmPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Pipe */])({ name: 'dbm' }), 
        __metadata('design:paramtypes', [])
    ], DbmPipe);
    return DbmPipe;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/dbm.js.map

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dbm__ = __webpack_require__(690);
/* unused harmony reexport DbmPipe */


/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__dbm__["a" /* DbmPipe */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_authentication__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard__ = __webpack_require__(445);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });



var routes = [
    // Default route.
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // Pages.
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login__["a" /* LoginPageComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard__["a" /* DashboardPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication__["a" /* AuthenticationGuard */]] }
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/routes.js.map

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = (function () {
    function LocalStorageService() {
        this._storage = window.sessionStorage;
        this._serializer = JSON.stringify;
        this._deserializer = JSON.parse;
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        this._storage.setItem(key, this._serializer(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return this._deserializer(this._storage.getItem(key));
    };
    LocalStorageService.prototype.removeItem = function (key) {
        this._storage.removeItem(key);
    };
    LocalStorageService.prototype.getObservable = function (key) {
        // TODO: Actually observe the value.
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.getItem(key));
    };
    LocalStorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/localstorage.js.map

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* unused harmony export UbusStatus */
/* unused harmony export UbusError */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UbusService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * uBus response codes.
 */
var UbusStatus;
(function (UbusStatus) {
    UbusStatus[UbusStatus["OK"] = 0] = "OK";
    UbusStatus[UbusStatus["INVALID_COMMAND"] = 1] = "INVALID_COMMAND";
    UbusStatus[UbusStatus["INVALID_ARGUMENT"] = 2] = "INVALID_ARGUMENT";
    UbusStatus[UbusStatus["METHOD_NOT_FOUND"] = 3] = "METHOD_NOT_FOUND";
    UbusStatus[UbusStatus["NOT_FOUND"] = 4] = "NOT_FOUND";
    UbusStatus[UbusStatus["NO_DATA"] = 5] = "NO_DATA";
    UbusStatus[UbusStatus["PERMISSION_DENIED"] = 6] = "PERMISSION_DENIED";
    UbusStatus[UbusStatus["TIMEOUT"] = 7] = "TIMEOUT";
    UbusStatus[UbusStatus["NOT_SUPPORTED"] = 8] = "NOT_SUPPORTED";
    UbusStatus[UbusStatus["UNKNOWN_ERROR"] = 9] = "UNKNOWN_ERROR";
    UbusStatus[UbusStatus["CONNECTION_FAILED"] = 10] = "CONNECTION_FAILED";
})(UbusStatus || (UbusStatus = {}));
/**
 * Errors returned by calls to uBus.
 */
var UbusError = (function (_super) {
    __extends(UbusError, _super);
    function UbusError(errorCode) {
        _super.call(this, "uBus call has failed with error code " + errorCode);
        this.errorCode = errorCode;
    }
    return UbusError;
}(Error));
/**
 * A service that enables communication with UBUS.
 */
var UbusService = (function () {
    function UbusService(_http) {
        this._http = _http;
    }
    /**
     * Calls a method on an object via UBUS.
     *
     * @param object Object identifier
     * @param method Method name
     * @param parameters Parameters object
     * @return A response observable
     */
    UbusService.prototype._call = function (object, method, parameters) {
        // The login method must be handled specially, as it requires a NULL session.
        var sessionId = this._sessionId;
        if (!sessionId || object === 'session' && method === 'login') {
            sessionId = '00000000000000000000000000000000';
        }
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ubus.endpoint, {
            jsonrpc: '2.0',
            method: 'call',
            id: 1,
            params: [sessionId, object, method, parameters]
        }).map(function (response) {
            var body = response.json();
            if (body.result) {
                var resultCode = body.result[0];
                if (resultCode === UbusStatus.OK) {
                    return body.result[1];
                }
                else {
                    throw new UbusError(resultCode);
                }
            }
            else if (body.error) {
                throw new UbusError(body.error.code);
            }
        });
    };
    /**
     * Calls a method on an object via UBUS.
     *
     * @param path Path in the form of `object.method`
     * @param parameters Parameters object
     * @return A response observable
     */
    UbusService.prototype.call = function (path, parameters) {
        if (parameters === void 0) { parameters = {}; }
        var _a = path.split('.'), object = _a[0], method = _a[1];
        return this._call(object, method, parameters);
    };
    /**
     * Establishes a new RPC session via UBUS.
     *
     * @param username Username
     * @param password Password
     * @return A session information observable
     */
    UbusService.prototype.login = function (username, password) {
        var _this = this;
        return this._call('session', 'login', {
            username: username,
            password: password,
            timeout: 3600
        }).map(function (response) {
            if (!response.ubus_rpc_session) {
                throw new Error('Received invalid response from session.login!');
            }
            _this._sessionId = response.ubus_rpc_session;
            // TODO: What about session expiration?
            return {
                username: response.data.username
            };
        });
    };
    /**
     * Terminates the current session via UBUS.
     */
    UbusService.prototype.logout = function () {
        return this._call('session', 'destroy', { session: this._sessionId });
    };
    UbusService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UbusService);
    return UbusService;
    var _a;
}());
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/ubus.js.map

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/polyfills.js.map

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__koruza__ = __webpack_require__(676);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__koruza__["a"]; });




/* harmony default export */ exports["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* AuthenticationActions */],
    __WEBPACK_IMPORTED_MODULE_1__koruza__["a" /* KoruzaActions */]
];
//# sourceMappingURL=/home/kostko/development/irnas/koruza-ui/src/index.js.map

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n[md-button].md-button-focus.md-primary .md-button-focus-overlay, [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, [md-fab].md-button-focus.md-primary .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n[md-button].md-button-focus.md-accent .md-button-focus-overlay, [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, [md-fab].md-button-focus.md-accent .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n[md-button].md-button-focus.md-warn .md-button-focus-overlay, [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, [md-fab].md-button-focus.md-warn .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n[md-button], [md-icon-button] {\n  background: transparent; }\n  [md-button].md-primary, [md-icon-button].md-primary {\n    color: #3f51b5; }\n  [md-button].md-accent, [md-icon-button].md-accent {\n    color: #ff4081; }\n  [md-button].md-warn, [md-icon-button].md-warn {\n    color: #f44336; }\n  [md-button].md-primary[disabled], [md-button].md-accent[disabled], [md-button].md-warn[disabled], [md-button][disabled][disabled], [md-icon-button].md-primary[disabled], [md-icon-button].md-accent[disabled], [md-icon-button].md-warn[disabled], [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-button]:hover.md-primary .md-button-focus-overlay, [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  [md-button]:hover.md-accent .md-button-focus-overlay, [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  [md-button]:hover.md-warn .md-button-focus-overlay, [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n[md-raised-button], [md-fab], [md-mini-fab] {\n  background-color: #fafafa; }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    color: white; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    color: white; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n[md-fab], [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\nmd-card {\n  background: white;\n  color: black; }\n\nmd-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.md-checkbox-indeterminate.md-primary .md-checkbox-background, .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.md-checkbox-indeterminate.md-accent .md-checkbox-background, .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.md-checkbox-indeterminate.md-warn .md-checkbox-background, .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\nmd-dialog-container {\n  background: white; }\n\nmd-icon.md-primary {\n  color: #3f51b5; }\n\nmd-icon.md-accent {\n  color: #ff4081; }\n\nmd-icon.md-warn {\n  color: #f44336; }\n\n.md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\ninput.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\nmd-list md-list-item, md-list a[md-list-item], md-nav-list md-list-item, md-nav-list a[md-list-item] {\n  color: black; }\n\nmd-list [md-subheader], md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\nmd-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\nmd-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.md-menu-content {\n  background: white; }\n\n[md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  [md-menu-item]:hover:not([disabled]), [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\nmd-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\nmd-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\nmd-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\nmd-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\nmd-progress-spinner path, md-progress-circle path, md-spinner path {\n  stroke: #3949ab; }\n\nmd-progress-spinner.md-accent path, md-progress-circle.md-accent path, md-spinner.md-accent path {\n  stroke: #d81b60; }\n\nmd-progress-spinner.md-warn path, md-progress-circle.md-warn path, md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-arrow {\n    color: #f44336; }\n\n.md-select-content {\n  background: white; }\n\n.md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\nmd-option:hover:not(.md-option-disabled), md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\nmd-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\nmd-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\nmd-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\nmd-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.md-slider-track-fill {\n  background-color: #ff4081; }\n\n.md-slider-thumb {\n  background-color: #ff4081; }\n\n.md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.md-slider-thumb-label-text {\n  color: white; }\n\n[md-tab-nav-bar],\n.md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\nmd-ink-bar {\n  background-color: #3f51b5; }\n\nmd-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.page-content {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px; }\n"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = ".status {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .status span {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-left: 10px; }\n  .status.ok {\n    color: green; }\n  .status.warning {\n    color: orange; }\n\n.container div {\n  padding-top: 5px; }\n\n.datum-name {\n  font-weight: bold; }\n\n.error {\n  color: orange; }\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = ".camera-container {\n  text-align: center; }\n\n.camera-image-container {\n  position: relative; }\n\n.camera-center {\n  position: absolute;\n  width: 0px;\n  height: 0px;\n  border: 2px dashed red;\n  cursor: default;\n  pointer-events: none; }\n  .camera-center md-icon {\n    position: absolute;\n    color: red; }\n\n.bounding-box {\n  position: absolute;\n  left: 1%;\n  top: 0;\n  width: 98%;\n  height: 100%; }\n\n.camera {\n  width: 98%; }\n\n.mouse-coordinates {\n  cursor: default;\n  fill: lime; }\n"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = "koruza-status {\n  width: 200px; }\n"

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = ".login-error {\n  color: red;\n  margin-bottom: 15px;\n  text-align: center; }\n\n.login-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = "<md-sidenav-layout fullscreen>\n  <md-sidenav #sidenav>\n    <md-nav-list>\n      <a md-list-item routerLink=\"/dashboard\" (click)=\"sidenav.close()\">\n        <md-icon md-list-icon>book</md-icon>\n        <span md-line>Dashboard</span>\n        <span md-line class=\"secondary\">Show unit dashboard</span>\n      </a>\n    </md-nav-list>\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button md-icon-button (click)=\"sidenav.open()\">\n      <md-icon>menu</md-icon>\n    </button>\n    <span>KORUZA Management Interface</span>\n    <span class=\"fill-space\"></span>\n    <button md-icon-button>\n      <md-icon>account_circle</md-icon>\n    </button>\n  </md-toolbar>\n\n  <div class=\"page-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-layout>\n"

/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(506);


/***/ }

},[909]);