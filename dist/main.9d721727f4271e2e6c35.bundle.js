webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(378),
        styles: [__webpack_require__(371)],
    })
], AppComponent);

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_let__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_authentication__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
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
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
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
    DashboardPageComponent.prototype.onHomingClick = function () {
        this.store.dispatch(this.koruzaActions.homing());
    };
    DashboardPageComponent.prototype.onLedsStateChange = function (state) {
        this.store.dispatch(this.koruzaActions.setLeds(state));
    };
    return DashboardPageComponent;
}());
DashboardPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'dashboard-page',
        template: "\n    <div layout=\"row\">\n      <koruza-status\n        [status]=\"unitStatus | async\"\n        (homingClick)=\"onHomingClick()\"\n        (ledsStateChange)=\"onLedsStateChange($event)\"\n      >\n      </koruza-status>\n\n      <koruza-webcam\n        [calibration]=\"cameraCalibration | async\"\n        [motors]=\"motors | async\"\n        (cameraClick)=\"onWebcamClick($event)\"\n        (calibrationSet)=\"onWebcamCalibrationSet($event)\"\n        flex\n      >\n      </koruza-webcam>\n    </div>\n  ",
        styles: [__webpack_require__(374)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* KoruzaActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* KoruzaActions */]) === "function" && _b || Object])
], DashboardPageComponent);

var _a, _b;
//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_authentication__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
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
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'login-page',
        template: "\n    <div layout=\"row\">\n      <div flex></div>\n      <md-card flex>\n        <md-card-title>Login</md-card-title>\n        <md-card-content>\n          <div *ngIf=\"hasAuthenticationFailed | async\" class=\"login-error\">\n            Username and/or password are incorrect.\n          </div>\n          <form\n            layout=\"column\"\n            (ngSubmit)=\"onSubmit()\"\n            #loginForm=\"ngForm\">\n\n            <md-input-container flex>\n              <input\n                mdInput\n                required\n                name=\"username\"\n                placeholder=\"Username\"\n                [(ngModel)]=\"username\">\n            </md-input-container>\n\n            <md-input-container flex>\n              <input\n                mdInput\n                required\n                name=\"password\"\n                type=\"password\"\n                placeholder=\"Password\"\n                [(ngModel)]=\"password\">\n            </md-input-container>\n\n            <div *ngIf=\"!(isAuthenticating | async)\" flex layout=\"row\">\n              <div flex></div>\n              <button\n                type=\"submit\"\n                [disabled]=\"!loginForm.form.valid\"\n                md-raised-button>\n                Login\n              </button>\n            </div>\n            <div *ngIf=\"isAuthenticating | async\" flex layout=\"row\">\n              <div flex></div>\n              <md-spinner class=\"login-spinner\"></md-spinner>\n            </div>\n          </form>\n        </md-card-content>\n      </md-card>\n      <div flex></div>\n    </div>\n  ",
        styles: [__webpack_require__(375)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__actions__["b" /* AuthenticationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__actions__["b" /* AuthenticationActions */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 181;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(211);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthenticationActions = AuthenticationActions_1 = (function () {
    function AuthenticationActions() {
    }
    AuthenticationActions.prototype.login = function (username, password) {
        return {
            type: AuthenticationActions_1.LOGIN,
            payload: { username: username, password: password }
        };
    };
    AuthenticationActions.prototype.loginSuccess = function (username, password) {
        return {
            type: AuthenticationActions_1.LOGIN_SUCCESS,
            payload: { username: username, password: password }
        };
    };
    AuthenticationActions.prototype.loginFailed = function () {
        return {
            type: AuthenticationActions_1.LOGIN_FAILED
        };
    };
    AuthenticationActions.prototype.logout = function () {
        return {
            type: AuthenticationActions_1.LOGOUT
        };
    };
    AuthenticationActions.prototype.logoutSuccess = function () {
        return {
            type: AuthenticationActions_1.LOGOUT_SUCCESS
        };
    };
    AuthenticationActions.prototype.logoutFailed = function () {
        return {
            type: AuthenticationActions_1.LOGOUT_FAILED
        };
    };
    return AuthenticationActions;
}());
AuthenticationActions.LOGIN = 'authentication.login';
AuthenticationActions.LOGIN_SUCCESS = 'authentication.login_success';
AuthenticationActions.LOGIN_FAILED = 'authentication.login_failed';
AuthenticationActions.LOGOUT = 'authentication.logout';
AuthenticationActions.LOGOUT_SUCCESS = 'authentication.logout_success';
AuthenticationActions.LOGOUT_FAILED = 'authentication.logout_failed';
AuthenticationActions = AuthenticationActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AuthenticationActions);

var AuthenticationActions_1;
//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoruzaActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KoruzaActions = KoruzaActions_1 = (function () {
    function KoruzaActions() {
    }
    KoruzaActions.prototype.update = function () {
        return {
            type: KoruzaActions_1.UPDATE
        };
    };
    KoruzaActions.prototype.updateComplete = function (status) {
        return {
            type: KoruzaActions_1.UPDATE_COMPLETE,
            payload: { status: status }
        };
    };
    KoruzaActions.prototype.updateFailed = function () {
        return {
            type: KoruzaActions_1.UPDATE_FAILED
        };
    };
    KoruzaActions.prototype.moveMotors = function (x, y) {
        return {
            type: KoruzaActions_1.MOVE_MOTORS,
            payload: { x: x, y: y }
        };
    };
    KoruzaActions.prototype.setCalibration = function (x, y) {
        return {
            type: KoruzaActions_1.SET_CALIBRATION,
            payload: { x: x, y: y }
        };
    };
    KoruzaActions.prototype.setLeds = function (state) {
        return {
            type: KoruzaActions_1.SET_LEDS,
            payload: { state: state }
        };
    };
    KoruzaActions.prototype.homing = function () {
        return {
            type: KoruzaActions_1.HOMING,
            payload: {}
        };
    };
    return KoruzaActions;
}());
KoruzaActions.UPDATE = 'koruza.update';
KoruzaActions.UPDATE_COMPLETE = 'koruza.update_complete';
KoruzaActions.UPDATE_FAILED = 'koruza.update_failed';
KoruzaActions.MOVE_MOTORS = 'koruza.move_motors';
KoruzaActions.SET_CALIBRATION = 'koruza.set_calibration';
KoruzaActions.SET_LEDS = 'koruza.set_leds';
KoruzaActions.HOMING = 'koruza.homing';
KoruzaActions = KoruzaActions_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], KoruzaActions);

var KoruzaActions_1;
//# sourceMappingURL=koruza.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webcam__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status__ = __webpack_require__(202);
/* unused harmony reexport WebcamComponent */
/* unused harmony reexport StatusComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components; });




var components = [
    __WEBPACK_IMPORTED_MODULE_0__webcam__["a" /* WebcamComponent */],
    __WEBPACK_IMPORTED_MODULE_1__status__["a" /* StatusComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_koruza__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
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
        // Homing request.
        this.homingClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
        // LED toggle.
        this.ledsStateChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
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
    return StatusComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__reducers_koruza__["KoruzaState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__reducers_koruza__["KoruzaState"]) === "function" && _a || Object)
], StatusComponent.prototype, "status", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]) === "function" && _b || Object)
], StatusComponent.prototype, "homingClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], StatusComponent.prototype, "ledsStateChange", void 0);
StatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'koruza-status',
        template: "\n    <div layout=\"column\" class=\"container\">\n      <!-- MCU -->\n      <div *ngIf=\"status.connected\" class=\"status ok\" flex layout=\"row\">\n        <md-icon>check_circle</md-icon>\n        <span>MCU Connected</span>\n      </div>\n\n      <div *ngIf=\"!status.connected\" class=\"status warning\" flex layout=\"row\">\n        <md-icon>warning</md-icon>\n        <span>MCU Disconnected</span>\n      </div>\n\n      <div *ngIf=\"status.connected\" flex layout=\"column\">\n        <span class=\"datum-name\">Motor X</span>\n        <span>{{status.motors.x}}</span>\n        <span class=\"datum-name\">Motor Y</span>\n        <span>{{status.motors.y}}</span>\n      </div>\n\n      <div *ngIf=\"hasErrors\" class=\"status warning\" flex layout=\"row\">\n        <md-icon>warning</md-icon>\n        <span>MCU Error</span>\n      </div>\n\n      <div *ngIf=\"hasErrors\" flex layout=\"column\">\n        <span class=\"error\" *ngFor=\"let error of errors\">{{error}}</span>\n      </div>\n\n      <!-- SFP -->\n      <div *ngIf=\"sfpConnected\" class=\"status ok\" flex layout=\"row\">\n        <md-icon>check_circle</md-icon>\n        <span>SFP Connected</span>\n      </div>\n\n      <div *ngIf=\"!sfpConnected\" class=\"status warning\" flex layout=\"row\">\n        <md-icon>warning</md-icon>\n        <span>SFP Disconnected</span>\n      </div>\n\n      <div *ngIf=\"sfpConnected\" flex layout=\"column\">\n        <span class=\"datum-name\">Serial Number</span>\n        <span>{{sfp.serialNumber}}</span>\n        <span class=\"datum-name\">TX Wavelength</span>\n        <span>{{sfp.wavelength}} nm</span>\n        <span class=\"datum-name\">RX Power</span>\n        <span>{{sfp.diagnostics.rxPower}} ({{sfp.diagnostics.rxPower | dbm}} dBm)</span>\n        <span class=\"datum-name\">TX Power</span>\n        <span>{{sfp.diagnostics.txPower}} ({{sfp.diagnostics.txPower | dbm}} dBm)</span>\n      </div>\n\n      <!-- Controls -->\n      <div *ngIf=\"sfpConnected\" class=\"status ok\" flex layout=\"row\">\n        <md-icon>settings</md-icon>\n        <span>Controls</span>\n      </div>\n\n      <div flex layout=\"row\">\n        <button md-raised-button flex=\"90\" (click)=\"homingClick.emit(null)\">Homing</button>\n        <span flex=\"10\"></span>\n      </div>\n\n      <div flex layout=\"row\">\n        <md-slide-toggle\n          [checked]=\"status.leds.state\"\n          (change)=\"ledsStateChange.emit($event.checked)\"\n        >\n          LEDs\n        </md-slide-toggle>\n      </div>\n    </div>\n  ",
        styles: [__webpack_require__(372)],
    })
], StatusComponent);

var _a, _b, _c;
//# sourceMappingURL=status.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebcamComponent; });
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
// Special position, which can be used when a coordinate is not available.
var POSITION_UNDEFINED = -2147483648;
var MouseMode;
(function (MouseMode) {
    MouseMode[MouseMode["NONE"] = 0] = "NONE";
    MouseMode[MouseMode["MOVE"] = 1] = "MOVE";
    MouseMode[MouseMode["SET_CALIBRATION"] = 2] = "SET_CALIBRATION";
})(MouseMode || (MouseMode = {}));
var WebcamComponent = (function () {
    function WebcamComponent() {
        // Click event.
        this.cameraClick = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
        // Calibration set event.
        this.calibrationSet = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
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
        var _this = this;
        var transform = function (current, delta) {
            // Replace undefined coordinates with special value.
            if (!delta)
                return POSITION_UNDEFINED;
            return current + _this.arrowSteps * delta;
        };
        this.cameraClick.emit({
            x: transform(this.motors.x, where.x),
            y: transform(this.motors.y, where.y)
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
        (_b = transform({ x: x, y: y }), x = _b.x, y = _b.y);
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
    return WebcamComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["CameraCalibrationState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["CameraCalibrationState"]) === "function" && _a || Object)
], WebcamComponent.prototype, "calibration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["MotorState"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reducers_koruza__["MotorState"]) === "function" && _b || Object)
], WebcamComponent.prototype, "motors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]) === "function" && _c || Object)
], WebcamComponent.prototype, "cameraClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]) === "function" && _d || Object)
], WebcamComponent.prototype, "calibrationSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('cameraImage'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */]) === "function" && _e || Object)
], WebcamComponent.prototype, "cameraImage", void 0);
WebcamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'koruza-webcam',
        template: "\n    <md-card class=\"camera-container\">\n      <div layout=\"column\" alignItems=\"center\">\n        <div flex layout=\"column\" alignItems=\"center\">\n          <div>\n            <span>Mode:</span>\n            <md-button-toggle-group name=\"alignment\" [(ngModel)]=\"mouseMode\">\n              <md-button-toggle [value]=\"0\">None</md-button-toggle>\n              <md-button-toggle [value]=\"1\">Movement</md-button-toggle>\n              <md-button-toggle [value]=\"2\">Calibration</md-button-toggle>\n            </md-button-toggle-group>\n            <span>Steps:</span>\n            <md-button-toggle-group name=\"steps\" [(ngModel)]=\"arrowSteps\">\n              <md-button-toggle [value]=\"1\">1</md-button-toggle>\n              <md-button-toggle [value]=\"10\">10</md-button-toggle>\n              <md-button-toggle [value]=\"100\">100</md-button-toggle>\n              <md-button-toggle [value]=\"1000\">1000</md-button-toggle>\n            </md-button-toggle-group>\n          </div>\n          <div>\n            &nbsp;\n          </div>\n          <div>\n            <button md-icon-button (click)=\"onMoveClick({y: 1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n                <md-icon>keyboard_arrow_up</md-icon>\n            </button>\n          </div>\n        </div>\n        <div flex layout=\"row\" alignItems=\"center\">\n          <div>\n            <button md-icon-button (click)=\"onMoveClick({x: -1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n              <md-icon>keyboard_arrow_left</md-icon>\n            </button>\n          </div>\n          <div flex class=\"camera-image-container\">\n            <img\n              #cameraImage\n              class=\"camera\"\n              [src]=\"cameraUrl\"\n              [style.visibility]=\"cameraImageLoaded ? 'visible' : 'hidden'\"\n              (load)=\"onCameraImageLoad()\"\n              (error)=\"onCameraImageError()\"\n              (click)=\"onCameraImageClick($event)\"\n              (window:resize)=\"onResize($event)\"\n              *ngIf=\"!!cameraUrl && !cameraImageError\"\n            />\n\n            <div *ngIf=\"!cameraImageLoaded\">\n              <md-spinner *ngIf=\"!cameraImageError\"></md-spinner>\n              <div *ngIf=\"cameraImageError\">Camera image unavailable.</div>\n            </div>\n\n            <svg\n              class=\"bounding-box\"\n              (click)=\"onCameraImageClick($event)\"\n              (mousemove)=\"onCameraImageMouseMove($event)\"\n              (mouseleave)=\"onCameraImageMouseLeave()\"\n              *ngIf=\"cameraImageLoaded\"\n            >\n              <path [attr.d]=\"bbPath\" fill=\"transparent\" stroke=\"lime\" stroke-width=\"2\" />\n\n              <g *ngIf=\"mouseOverlay\" transform=\"translate(10, 5)\" class=\"mouse-coordinates\">\n                <text x=\"0\" y=\"0\">\n                  <tspan x=\"0\" dy=\"1.2em\">Webcam: X={{mouseWebcam.x | number:'1.0-0'}} Y={{mouseWebcam.y | number:'1.0-0'}}</tspan>\n                  <tspan x=\"0\" dy=\"1.2em\">Motors: X={{mouseMotors.x | number:'1.0-0'}} Y={{mouseMotors.y | number:'1.0-0'}}</tspan>\n                </text>\n              </g>\n            </svg>\n\n            <div\n              class=\"camera-center\"\n              [style.width.px]=\"centerBox.width\"\n              [style.height.px]=\"centerBox.height\"\n              [style.left.px]=\"centerBox.left\"\n              [style.top.px]=\"centerBox.top\"\n              *ngIf=\"cameraImageLoaded && centerBox.visible\"\n            >\n              <md-icon\n                class=\"camera-cross\"\n                [style.left.px]=\"centerBox.width / 4\"\n                [style.top.px]=\"centerBox.height / 4\"\n                [style.width.px]=\"centerBox.width / 2\"\n                [style.height.px]=\"centerBox.height / 2\"\n                [style.fontSize.px]=\"(centerBox.width + centerBox.height) / 4\"\n              >\n                add\n              </md-icon>\n            </div>\n          </div>\n          <div>\n            <button md-icon-button (click)=\"onMoveClick({x: 1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n              <md-icon>keyboard_arrow_right</md-icon>\n            </button>\n          </div>\n        </div>\n        <div>\n          <button md-icon-button (click)=\"onMoveClick({y: -1})\" [disabled]=\"!cameraImageLoaded\" [disableRipple]=\"true\">\n            <md-icon>keyboard_arrow_down</md-icon>\n          </button>\n        </div>\n      </div>\n    </md-card>\n  ",
        styles: [__webpack_require__(373)],
    })
], WebcamComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=webcam.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexDirective; });
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
    return FlexDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], FlexDirective.prototype, "shrink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], FlexDirective.prototype, "grow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], FlexDirective.prototype, "flex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.flex'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FlexDirective.prototype, "style", null);
FlexDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[flex]'
    })
], FlexDirective);

//# sourceMappingURL=flex.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flex__ = __webpack_require__(204);
/* unused harmony reexport LayoutDirective */
/* unused harmony reexport FlexDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return directives; });



var directives = [
    __WEBPACK_IMPORTED_MODULE_0__layout__["a" /* LayoutDirective */],
    __WEBPACK_IMPORTED_MODULE_1__flex__["a" /* FlexDirective */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutDirective; });
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
    return LayoutDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], LayoutDirective.prototype, "layout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.align-items'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('alignItems'),
    __metadata("design:type", String)
], LayoutDirective.prototype, "alignItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], LayoutDirective.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.flex-direction'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], LayoutDirective.prototype, "direction", null);
LayoutDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[layout]'
    })
], LayoutDirective);

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationEffects; });
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
    return AuthenticationEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "loginRedirect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "loginInvalidateSession", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "loginStoreSession", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "loginRestoreSession", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "logoutInvalidateSession", void 0);
AuthenticationEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UbusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["b" /* UbusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__actions__["b" /* AuthenticationActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services__["c" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["c" /* LocalStorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], AuthenticationEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__koruza__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__koruza__["a"]; });
/* unused harmony export effects */




var effects = [
    __WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* AuthenticationEffects */],
    __WEBPACK_IMPORTED_MODULE_1__koruza__["a" /* KoruzaEffects */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoruzaEffects; });
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
        /**
         * Handle set leds command.
         */
        this.ledsSet = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */].SET_LEDS)
            .switchMap(function (action) {
            return _this.ubus.call('koruza.set_leds', {
                state: action.payload.state,
            })
                .map(function () { return _this.actions.update(); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(_this.actions.update()); });
        });
        /**
         * Handle homing command.
         */
        this.homing = this.updates
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */].HOMING)
            .switchMap(function (action) { return _this.ubus.call('koruza.homing'); });
    }
    return KoruzaEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], KoruzaEffects.prototype, "periodicRefresh", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], KoruzaEffects.prototype, "refreshState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], KoruzaEffects.prototype, "moveMotors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], KoruzaEffects.prototype, "calibrationSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], KoruzaEffects.prototype, "ledsSet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], KoruzaEffects.prototype, "homing", void 0);
KoruzaEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services__["b" /* UbusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["b" /* UbusService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__actions__["c" /* KoruzaActions */]) === "function" && _c || Object])
], KoruzaEffects);

var _a, _b, _c;
//# sourceMappingURL=koruza.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(119);
/* unused harmony reexport AuthenticationGuard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return guards; });


var guards = [
    __WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* AuthenticationGuard */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(118);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module__ = __webpack_require__(212);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__effects__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__actions__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // Router.
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__routes__["a" /* routes */], { useHash: true }),
            // NgRx.
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_11__reducers__["a" /* default */]),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* EffectsModule */].runAfterBootstrap(__WEBPACK_IMPORTED_MODULE_12__effects__["a" /* AuthenticationEffects */]),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__effects__["b" /* KoruzaEffects */]),
            // Forms.
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            // HTTP.
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            // Angular Material.
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MdSlideToggleModule */],
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_19__pipes__["a" /* pipes */].concat(__WEBPACK_IMPORTED_MODULE_15__directives__["a" /* directives */], __WEBPACK_IMPORTED_MODULE_16__components__["a" /* components */], __WEBPACK_IMPORTED_MODULE_18__pages__["a" /* pages */], [
            // Main component.
            __WEBPACK_IMPORTED_MODULE_9__app__["a" /* AppComponent */]
        ]),
        providers: __WEBPACK_IMPORTED_MODULE_13__services__["a" /* services */].concat(__WEBPACK_IMPORTED_MODULE_14__actions__["a" /* actions */], __WEBPACK_IMPORTED_MODULE_17__guards__["a" /* guards */]),
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(121);
/* unused harmony reexport DashboardPageComponent */
/* unused harmony reexport LoginPageComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pages; });




var pages = [
    __WEBPACK_IMPORTED_MODULE_0__dashboard__["a" /* DashboardPageComponent */],
    __WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPageComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbmPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    return DbmPipe;
}());
DbmPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'dbm' })
], DbmPipe);

//# sourceMappingURL=dbm.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dbm__ = __webpack_require__(214);
/* unused harmony reexport DbmPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pipes; });


var pipes = [
    __WEBPACK_IMPORTED_MODULE_0__dbm__["a" /* DbmPipe */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_authentication__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var routes = [
    // Default route.
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // Pages.
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login__["a" /* LoginPageComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard__["a" /* DashboardPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication__["a" /* AuthenticationGuard */]] }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LocalStorageService);

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* unused harmony export UbusStatus */
/* unused harmony export UbusError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbusService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var _this = _super.call(this, "uBus call has failed with error code " + errorCode) || this;
        _this.errorCode = errorCode;
        return _this;
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
    return UbusService;
}());
UbusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UbusService);

var _a;
//# sourceMappingURL=ubus.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__koruza__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__koruza__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });




var actions = [
    __WEBPACK_IMPORTED_MODULE_0__authentication__["a" /* AuthenticationActions */],
    __WEBPACK_IMPORTED_MODULE_1__koruza__["a" /* KoruzaActions */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports
exports.i(__webpack_require__(369), "");

// module
exports.push([module.i, ".fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.page-content {\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".status {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .status span {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-left: 10px; }\n  .status.ok {\n    color: green; }\n  .status.warning {\n    color: orange; }\n\n.container div {\n  padding-top: 5px; }\n\n.datum-name {\n  font-weight: bold; }\n\n.error {\n  color: orange; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".camera-container {\n  text-align: center; }\n\n.camera-image-container {\n  position: relative; }\n\n.camera-center {\n  position: absolute;\n  width: 0px;\n  height: 0px;\n  border: 2px dashed red;\n  cursor: default;\n  pointer-events: none; }\n  .camera-center md-icon {\n    position: absolute;\n    color: red; }\n\n.bounding-box {\n  position: absolute;\n  left: 1%;\n  top: 0;\n  width: 98%;\n  height: 100%; }\n\n.camera {\n  width: 98%; }\n\n.mouse-coordinates {\n  cursor: default;\n  fill: lime; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "koruza-status {\n  width: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, ".login-error {\n  color: red;\n  margin-bottom: 15px;\n  text-align: center; }\n\n.login-spinner {\n  height: 30px;\n  width: 30px;\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n  <md-sidenav #sidenav>\n    <md-nav-list>\n      <a md-list-item routerLink=\"/dashboard\" (click)=\"sidenav.close()\">\n        <md-icon md-list-icon>book</md-icon>\n        <span md-line>Dashboard</span>\n        <span md-line class=\"secondary\">Show unit dashboard</span>\n      </a>\n    </md-nav-list>\n  </md-sidenav>\n\n  <md-toolbar color=\"primary\">\n    <button md-icon-button (click)=\"sidenav.open()\">\n      <md-icon>menu</md-icon>\n    </button>\n    <span>KORUZA Management Interface</span>\n    <span class=\"fill-space\"></span>\n    <button md-icon-button>\n      <md-icon>account_circle</md-icon>\n    </button>\n  </md-toolbar>\n\n  <div class=\"page-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koruza__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_add_operator_select__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_add_operator_select__);
/* harmony export (immutable) */ __webpack_exports__["b"] = getAuthenticationState;
/* harmony export (immutable) */ __webpack_exports__["c"] = getKoruzaState;




/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* combineReducers */])({
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
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_add_operator_select__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ngrx_core_add_operator_select__);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCameraCalibration;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMotors;



var initialState = {
    connected: false,
    leds: {
        state: true,
    },
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
                leds: {
                    state: status.leds.state,
                },
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
//# sourceMappingURL=koruza.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    ubus: {
        endpoint: '/ubus'
    },
    webcam: {
        port: 80,
        path: '/?action=stream'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_add_operator_select__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ngrx_core_add_operator_select__);
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (immutable) */ __webpack_exports__["a"] = isAuthenticated;
/* harmony export (immutable) */ __webpack_exports__["c"] = isAuthenticating;
/* harmony export (immutable) */ __webpack_exports__["d"] = hasAuthenticationFailed;
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
//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ubus__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localstorage__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ubus__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__localstorage__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return services; });



var services = [
    __WEBPACK_IMPORTED_MODULE_0__ubus__["a" /* UbusService */],
    __WEBPACK_IMPORTED_MODULE_1__localstorage__["a" /* LocalStorageService */]
];
//# sourceMappingURL=index.js.map

/***/ })

},[447]);