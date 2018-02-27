webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container body-sub\">\n  <div class=\"container bandeautop1\"><p>RedKoala Challenges</p></div>\n  <div class=\"container bandeautop2\"></div>\n  <app-main-menu></app-main-menu>  \n  \n  <div class=\"container centre\">\n\n    \n    <app-side-menu class=\"container menu_cote\"></app-side-menu>\n    \n    <div class=\"container aside\">\n      <app-login></app-login>\n    </div>\n    <div class=\"container main\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div class=\"container footer\">\n      <p>Copyright test - Tous droits réservés</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_guard__ = __webpack_require__("../../../../../src/app/login/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_article_main_article_component__ = __webpack_require__("../../../../../src/app/main-article/main-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_article_login_article_component__ = __webpack_require__("../../../../../src/app/login-article/login-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__programming_project_article_programming_project_article_component__ = __webpack_require__("../../../../../src/app/programming-project-article/programming-project-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_service__ = __webpack_require__("../../../../../src/app/register/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__challenges_article_challenges_article_component__ = __webpack_require__("../../../../../src/app/challenges-article/challenges-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__whistle_challenge_whistle_challenge_component__ = __webpack_require__("../../../../../src/app/whistle-challenge/whistle-challenge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_article_main_article_component__["a" /* MainArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_article_login_article_component__["a" /* LoginArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__programming_project_article_programming_project_article_component__["a" /* ProgrammingProjectArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__challenges_article_challenges_article_component__["a" /* ChallengesArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__whistle_challenge_whistle_challenge_component__["a" /* WhistleChallengeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_10__main_article_main_article_component__["a" /* MainArticleComponent */]
                    },
                    {
                        path: 'login-component',
                        component: __WEBPACK_IMPORTED_MODULE_11__login_article_login_article_component__["a" /* LoginArticleComponent */]
                    },
                    {
                        path: 'challenges-component',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_login_guard__["a" /* LoginGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_16__challenges_article_challenges_article_component__["a" /* ChallengesArticleComponent */]
                    },
                    {
                        path: 'whistle-challenge',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_login_guard__["a" /* LoginGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_17__whistle_challenge_whistle_challenge_component__["a" /* WhistleChallengeComponent */]
                    },
                    {
                        path: 'register',
                        component: __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */]
                    },
                    {
                        path: 'programming-project',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_5__login_login_guard__["a" /* LoginGuard */]],
                        component: __WEBPACK_IMPORTED_MODULE_12__programming_project_article_programming_project_article_component__["a" /* ProgrammingProjectArticleComponent */]
                    },
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__register_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_18__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__login_login_guard__["a" /* LoginGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/challenges-article/challenges-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\ttext-align: left;\r\n    height: 100%;\r\n\tmargin-left:5%;\r\n\tmargin-right: 5%;\r\n    overflow: auto;\r\n\tmargin-bottom: 40px;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.article h3\r\n{\r\n    font-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n    color :rgb(207, 52, 52);\r\n}\r\n\r\n.custom-select select{\r\n    width: 50px;\r\n    padding: 3px 5px;\r\n    margin: 2px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.container .imageLinks{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.imageLinks a{\r\n    width:170px;\r\n    margin:10px;\r\n}\r\n\r\n.imageLinks img{\r\n    width:170px;\r\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.imageLinks img:hover{\r\n    width:170px;\r\n    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.imageLinks h3{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/challenges-article/challenges-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container article\">\n  <h1>Choose a challenge :</h1>\n  <p>Each of the proposed challenges have been created to follow your progression and to help you complete every steps until you master a new skill.\n  <br><br>\n  Try one of these challenges to put yourself to the test!\n  <div class=\"container imageLinks\">\n    <div class=\"block imageLinks\"><a routerLink=\"''\"><h3>Sports</h3><img src=\"../../assets/images/sport.jpg\"></a></div>\n    <div class=\"block imageLinks\"><a routerLink=\"''\"><h3>Nutrition</h3><img src=\"../../assets/images/nutrition.jpg\"></a></div>\n    <div class=\"block imageLinks\"><a routerLink=\"''\"><h3>Self management</h3><img src=\"../../assets/images/management.jpg\"></a></div>\n    <div class=\"block imageLinks\"><a routerLink=\"''\"><h3>Computing skills</h3><img src=\"../../assets/images/computing.jpg\"></a></div>\n    <div class=\"block imageLinks\"><a routerLink=\"''\"><h3>Creative challenges</h3><img src=\"../../assets/images/arts.jpg\"></a></div>\n    <div class=\"block imageLinks\"><a routerLink=\"''\"><h3>Random RedKoala</h3><img src=\"../../assets/images/redkoala.jpg\"></a></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/challenges-article/challenges-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengesArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChallengesArticleComponent = /** @class */ (function () {
    function ChallengesArticleComponent() {
    }
    ChallengesArticleComponent.prototype.ngOnInit = function () {
    };
    ChallengesArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-challenges-article',
            template: __webpack_require__("../../../../../src/app/challenges-article/challenges-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/challenges-article/challenges-article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallengesArticleComponent);
    return ChallengesArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-article/login-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\ttext-align: left;\r\n    height: 100%;\r\n\tmargin-left:5%;\r\n\tmargin-right: 5%;\r\n    overflow: auto;\r\n\tmargin-bottom: 40px;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.article h3,h1\r\n{\r\n    font-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n    color :rgb(207, 52, 52);\r\n}\r\n\r\n.custom-select select{\r\n    width: 50px;\r\n    padding: 3px 5px;\r\n    margin: 2px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\tcolor: rgb(100, 100, 100);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-article/login-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container article\">\n    <h1>Log in to access content</h1>\n    <p>Each of the proposed challenges have been created to follow your progression and to help you complete every steps until you master a new skill.\n    <br /><br />\n    Try one of these challenges to put yourself to the test !\n    <br /><br />\n    <h3>You must be connected to have access to all the challenges and functionalities.</h3>\n    <br /><br />\n    You can try the free challenge above to see if you are up to the task !\n  </div>"

/***/ }),

/***/ "../../../../../src/app/login-article/login-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginArticleComponent = /** @class */ (function () {
    function LoginArticleComponent() {
    }
    LoginArticleComponent.prototype.ngOnInit = function () {
    };
    LoginArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-article',
            template: __webpack_require__("../../../../../src/app/login-article/login-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-article/login-article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginArticleComponent);
    return LoginArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-aside\r\n{\r\n    color:rgb(71, 71, 71);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item item-aside\">\n  <div *ngIf=\"boolConnected==false || boolConnected==null; else logged;\">\n    <h3>Sign in</h3>\n    <form [formGroup]=\"formdata\" (ngSubmit) = \"onClickSubmit(formdata.value)\">\n        E-mail:<br><input type=\"text\" name=\"email\" formControlName=\"email\"><br>\n        Password:<br><input type=\"password\" name=\"password\" formControlName=\"password\"><br>\n        <button [disabled]=\"!formdata.valid\" class=\"formsubmit\" value=\"Login\">OK</button><br>\n    </form>\n    <a routerLink=\"/register\"><h4>Register</h4></a>\n    <a routerLink=\"/register\"><h4>Forgotten password?</h4></a> \n  </div>\n  <ng-template #logged>\n    <h3>Welcome {{pseudo}}!</h3>\n    <div *ngIf=\"currentChallenge!='';\">\n      <h4>Current challenge: </h4><p>{{currentChallenge}}</p>\n    </div>\n  </ng-template>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, user, userInfo) {
        this.router = router;
        this.user = user;
        this.userInfo = userInfo;
        this.successCode = "200";
        if (sessionStorage.getItem('user') == null) {
            var userData = {
                "connected": false
            };
            var strUser = JSON.stringify(userData);
            sessionStorage.setItem('user', strUser);
        }
        else {
            var dataUser = JSON.parse(sessionStorage.getItem('user'));
            this.boolConnected = dataUser.connected;
            this.pseudo = dataUser.pseudo;
            console.log(this.boolConnected);
        }
        this.currentChallenge = userInfo.getCurrentChallengeName();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formdata = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", this.passwordvalidation)
        });
    };
    LoginComponent.prototype.passwordvalidation = function (formcontrol) {
        if (formcontrol.value.length < 3) {
            return { "password": true };
        }
    };
    LoginComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        console.log("envoi : " + data.email);
        this.user.sendLoginInfo(data.email, data.password)
            .subscribe(function (data) {
            console.log("data : " + data);
            _this.code = data['code'];
            _this.message = data['message'];
            _this.pseudo = data['pseudo'];
            console.log("code : " + _this.code);
            console.log("message : " + _this.message);
            console.log("pseudo : " + _this.pseudo);
            if (_this.code == _this.successCode) {
                alert("Login Successful");
                /**************** Ici sont enregistrées les données de session ******************/
                var userData = {
                    "connected": true,
                    "pseudo": _this.pseudo
                };
                var strUser = JSON.stringify(userData);
                sessionStorage.setItem('user', strUser);
                /********************************************************************************/
                _this.boolConnected = true;
                console.log(_this.boolConnected);
                _this.router.navigate(['main-component']);
            }
            else {
                alert("Invalid Login");
                _this.boolConnected = false;
                _this.router.navigate(['']);
                return false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (this.user.getUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login-component']);
            return false;
        }
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.userLoggedIn = false;
    }
    LoginService.prototype.setUserLoggedIn = function () {
        this.userLoggedIn = true;
    };
    LoginService.prototype.getUserLoggedIn = function () {
        var dataUser = JSON.parse(sessionStorage.getItem('user'));
        return dataUser.connected;
    };
    LoginService.prototype.setUserPseudo = function (pseudo) {
        this.userPseudo = pseudo;
    };
    LoginService.prototype.getUserPseudo = function () {
        return this.userPseudo;
    };
    LoginService.prototype.sendLoginInfo = function (email, password) {
        console.log("envoi login");
        console.log("http://192.168.1.38:8081/projet/login-service?var1=login&var2=" + email +
            '&var3=' + password);
        alert("login...");
        return this.httpClient.get("http://192.168.1.38:8081/projet/login-service?var1=login&var2=" + email +
            '&var3=' + password);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/main-article/main-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\ttext-align: left;\r\n    height: 100%;\r\n\tmargin-left:5%;\r\n\tmargin-right: 5%;\r\n    overflow: auto;\r\n\tmargin-bottom: 40px;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.article h3\r\n{\r\n\tfont-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n}\r\n\r\n.custom-select select{\r\n    width: 50px;\r\n    padding: 3px 5px;\r\n    margin: 2px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\tcolor: rgb(100, 100, 100);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-article/main-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container article\">\n  <h1>1 hour a day challenge</h1>\n  <p>Each of the proposed challenges have been created to follow your progression and to help you complete every steps until you master a new skill.\n  <br /><br />\n  Try one of these challenges to put yourself to the test !\n  <br />  \n</div>"

/***/ }),

/***/ "../../../../../src/app/main-article/main-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainArticleComponent = /** @class */ (function () {
    function MainArticleComponent() {
        this.categorie = "1. Logement";
        this.boolConnected = false;
        this.tailleLogement = ["15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    }
    MainArticleComponent.prototype.ngOnInit = function () {
    };
    MainArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-article',
            template: __webpack_require__("../../../../../src/app/main-article/main-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-article/main-article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainArticleComponent);
    return MainArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu_haut\r\n{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: rgb(207, 52, 52);\r\n    list-style: none;\r\n\tmin-width: 500px;\r\n}\r\n\r\n.block_top\r\n{\t\r\n\tdisplay: -webkit-box;\t\r\n\tdisplay: -ms-flexbox;\t\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tbackground-color: rgb(207, 52, 52);\r\n\t-webkit-transition: all linear 0.5s;\r\n\ttransition: all linear 0.5s;\r\n\twidth: 150px;\r\n\theight: 100%;\r\n\tfont-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n}\r\n\r\n.block_top:hover\r\n{\r\n\tbackground-color: rgb(147, 42, 42);\r\n}\r\n\r\n.block_top .top_deroulant\r\n{\r\n\tbackground: #555554;\r\n\tdisplay:none;\r\n\tposition: absolute;\r\n\ttop: 119px;\r\n\twidth: 150px;\r\n\theight: 60px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.block_top:hover .top_deroulant\r\n{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n}\r\n\r\n.block_top .item_top\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth:100%;\r\n\theight: 100%;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.block_top .item_top:hover\r\n{\r\n\tbackground-color: rgb(147, 42, 42);\r\n\twidth: 100%;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.top_deroulant .item_top\r\n{\r\n\theight: 50%;\r\n}\r\n\r\n.top_deroulant .item_top:hover\r\n{\r\n\tbackground-color: #CCCCCC;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"container menu_haut\">\n    <div class=\"container block_top\">\n            \n        <a class=\"item item_top\" routerLink=\"challenges-component\">Challenges</a>\n    </div>\n\n    <div class=\"container block_top\">\n        <a class=\"item item_top\" routerLink=\"main-component\">Languages</a>\n        <div class=\"container top_deroulant\">\n            <a class=\"item item_top\" routerLink=\"main-component\">Reading / Writing</a>\n            <a class=\"item item_top\" routerLink=\"main-component\">Listening / Speaking</a>\n        </div>\n    </div>\n\n    <div class=\"container block_top\">\n        <a class=\"item item_top\" routerLink=\"main-component\">Programming</a>\n        <div class=\"container top_deroulant\">\n            <a class=\"item item_top\" routerLink=\"main-component\">Basics</a>\n            <a class=\"item item_top\" routerLink=\"programming-project\">Projects</a>\n        </div>\n    </div>\n\n    <div class=\"container block_top\">\n        <a class=\"item item_top\" routerLink=\"main-component\">Life goals</a>\n        <div class=\"container top_deroulant\">\n            <a class=\"item item_top\" routerLink=\"main-component\">Nutrition</a>\n            <a class=\"item item_top\" routerLink=\"main-component\">Self accomplishment</a>\n        </div>\n    </div>\n\n    <div class=\"container block_top\">\n        <a class=\"item item_top\" routerLink=\"whistle-challenge\">Random stuff</a>\n    </div>\n\n</header> "

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-menu',
            template: __webpack_require__("../../../../../src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/programming-project-article/programming-project-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\ttext-align: left;\r\n    height: 100%;\r\n\tmargin-left:5%;\r\n\tmargin-right: 5%;\r\n    overflow: auto;\r\n\tmargin-bottom: 40px;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.article h3\r\n{\r\n\tfont-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n}\r\n\r\n.custom-select select{\r\n    width: 100%;\r\n    padding: 3px 5px;\r\n    margin: 2px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\tcolor: rgb(100, 100, 100);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/programming-project-article/programming-project-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container article\">\n  <h1>Programming project</h1>\n  <p>You know some programming and you would like to try it on a new project ? You want to start a fresh project from start to try to launch your web or software buiseness ?\n  <br />\n  Pick one of the project listed above to train your programming skills with defined steps, latest frameworks and fresh ideas !\n  </p>\n    <form> \n      <div class=\"custom-select\">\n        <h3>{{ProgrammingProjectFormTitles[0]}} : </h3>\n        <select>\n            <option *ngFor=\"let i of ProgrammingProjectCategories\">{{i}}</option>\n        </select>\n      </div>\n      <br><br>\n      <button type=\"submit\" target=\"_blank\">Save your choice</button>\n    </form>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/programming-project-article/programming-project-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgrammingProjectArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgrammingProjectArticleComponent = /** @class */ (function () {
    function ProgrammingProjectArticleComponent() {
        this.ProgrammingProjectFormTitles = ["Category", "Technology", "Subject"];
        this.ProgrammingProjectCategories = ["Front-End", "Back-End", "Business"];
        this.ProgrammingProjectFrontTitles = ["A", "B", "C"];
        this.ProgrammingProjectBackTitles = ["1", "2", "3"];
        this.ProgrammingProjectBusinessTitles = ["1$", "2$", "3$"];
    }
    ProgrammingProjectArticleComponent.prototype.ngOnInit = function () {
    };
    ProgrammingProjectArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-programming-project-article',
            template: __webpack_require__("../../../../../src/app/programming-project-article/programming-project-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/programming-project-article/programming-project-article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgrammingProjectArticleComponent);
    return ProgrammingProjectArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\ttext-align: left;\r\n    height: 100%;\r\n\tmargin-left:5%;\r\n\tmargin-right: 5%;\r\n    overflow: auto;\r\n\tmargin-bottom: 40px;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.article h3\r\n{\r\n\tfont-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n}\r\n\r\n.article h1\r\n{\r\n\ttext-align: center;\r\n}\r\n\r\n.custom-select select{\r\n    width: 50px;\r\n    padding: 3px 5px;\r\n    margin: 2px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\tcolor: rgb(100, 100, 100);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container article\">\n  <h1>Inscription</h1>\n  <br />\n    <form [formGroup]=\"formdata\" (ngSubmit) = \"onClickSubmit(formdata.value)\"> \n      <div class=\"custom-select\">\n        Civilité :\n        <select formControlName=\"registerCiv\">\n            <option *ngFor=\"let i of civiliteList\" name=\"registerCiv\">{{i}}</option>\n        </select>\n      </div>\n      Nom :<br><input type=\"text\" name=\"registerLastName\" formControlName=\"registerLastName\"><br>\n      Prénom :<br><input type=\"text\" name=\"registerFirstName\" formControlName=\"registerFirstName\"><br>\n      <div class=\"custom-select\">\n        Age :\n        <select formControlName=\"registerAge\">\n            <option *ngFor=\"let i of ageList\" name=\"registerAge\">{{i}}</option>\n        </select>\n      </div>\n      <br>\n      Pseudo :<br><input type=\"text\" name=\"registerPseudo\" formControlName=\"registerPseudo\"><br>\n      Adressse e-mail :<br><input type=\"text\" name=\"registerEmail\" formControlName=\"registerEmail\"><br>\n      Mot de passe :<br><input type=\"password\" name=\"registerPassword\" formControlName=\"registerPassword\"><br>\n      Confirmation du mot de passe :<br><input type=\"password\" name=\"registerPasswordVerif\" formControlName=\"registerPasswordVerif\"><br><br>\n      <br><br>\n      <button [disabled]=\"!formdata.valid\" class=\"formsubmit\" value=\"Register\">Envoyer</button>\n    </form>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_service__ = __webpack_require__("../../../../../src/app/register/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerSend) {
        this.registerSend = registerSend;
        this.civiliteList = ["", "M.", "Mme."];
        this.ageList = ["", "18", "19", "20"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.formdata = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            registerCiv: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            registerLastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)
            ])),
            registerFirstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)
            ])),
            registerAge: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            registerPseudo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)
            ])),
            registerEmail: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)
            ])),
            registerPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)
            ])),
            registerPasswordVerif: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)
            ]))
        });
    };
    RegisterComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        this.registerCiv = data.registerCiv;
        this.registerLastName = data.registerLastName;
        this.registerFirstName = data.registerFirstName;
        this.registerAge = data.registerAge;
        this.registerPseudo = data.registerPseudo;
        this.registerEmail = data.registerEmail;
        this.registerPassword = data.registerPassword;
        this.registerPasswordVerif = data.registerPasswordVerif;
        this.registerSend.sendRegisterInfo(this.registerCiv, this.registerLastName, this.registerFirstName, this.registerAge, this.registerPseudo, this.registerEmail, this.registerPassword)
            .subscribe(function (data) {
            console.log("data : " + data);
            _this.code = data['code'];
            _this.message = data['message'];
            console.log("code : " + _this.code);
            console.log("message : " + _this.message);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__register_service__["a" /* RegisterService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(httpClient) {
        this.httpClient = httpClient;
    }
    RegisterService.prototype.sendRegisterInfo = function (civ, nom, prenom, age, pseudo, email, password) {
        console.log("envoi");
        console.log("http://192.168.1.38:8080/projet/register-service?var1=register&var2=" + civ +
            '&var3=' + nom +
            '&var4=' + prenom +
            '&var5=' + age +
            '&var6=' + pseudo +
            '&var7=' + email +
            '&var8=' + password);
        return this.httpClient.get("http://192.168.1.38:8080/projet/register-service?var1=register&var2=" + civ +
            '&var3=' + nom +
            '&var4=' + prenom +
            '&var5=' + age +
            '&var6=' + pseudo +
            '&var7=' + email +
            '&var8=' + password);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".block_cote\r\n{\r\n\t--current-background-color:rgb(236, 170, 26);\r\n\t--done-background-color:#CF3434;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tbackground-color: #555554;\r\n\twidth:120px;\r\n\theight: 80px;\r\n\tmargin: 10px;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tfont-weight: bold;\r\n\t-webkit-transition: all linear 0.1s;\r\n\ttransition: all linear 0.1s;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.block_cote:hover\r\n{\r\n\tbackground-color:var(--current-background-color);\r\n\t-webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);\r\n\t        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);\r\n\tcursor: pointer;\r\n}\r\n\r\n#one{\r\n\tbackground-color: #CF3434;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"container block_cote\" #one (click)=\"goToChallengeDayArticle(1)\">Day 1</a>\n<a class=\"container block_cote\" #two (click)=\"goToChallengeDayArticle(2)\">Day 2</a>\n<a class=\"container block_cote\" #three (click)=\"goToChallengeDayArticle(3)\">Day 3</a>\n<a class=\"container block_cote\" #four (click)=\"goToChallengeDayArticle(4)\">Day 4</a>\n<a class=\"container block_cote\" #five (click)=\"goToChallengeDayArticle(5)\">Day 5</a>\n<a class=\"container block_cote\" #six (click)=\"goToChallengeDayArticle(6)\">Day 6</a>\n<a class=\"container block_cote\" #seven (click)=\"goToChallengeDayArticle(7)\">Day 7</a>\n<a class=\"container block_cote\" #eight (click)=\"goToChallengeDayArticle(8)\">Day 8</a>\n<a class=\"container block_cote\" #nine (click)=\"goToChallengeDayArticle(9)\">Day 9</a>\n<a class=\"container block_cote\" #ten (click)=\"goToChallengeDayArticle(10)\">Day 10</a>"

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    SideMenuComponent.prototype.goToChallengeDayArticle = function (value) {
        this.user.setCurrentChallengeDay(value);
        if (this.currentChallenge == "Whistle challenge") {
            this.router.navigate(['/whistle-challenge']);
            location.reload();
        }
    };
    SideMenuComponent.prototype.ngOnInit = function () {
        this.currentChallenge = this.user.getCurrentChallengeName();
        this.challengeDay = this.user.getCurrentChallengeDay();
    };
    SideMenuComponent.prototype.ngAfterViewInit = function () {
        if (this.challengeDay == 0) {
        }
        if (this.challengeDay == 1) {
            this.one.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 2) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 3) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 4) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 5) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 6) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.six.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 7) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.six.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.seven.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 8) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.six.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.seven.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.eight.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 9) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.six.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.seven.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.eight.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.nine.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay == 10) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.six.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.seven.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.eight.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.nine.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.ten.nativeElement.style.setProperty('background-color', 'var(--current-background-color)');
        }
        else if (this.challengeDay >= 11) {
            this.one.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.two.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.three.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.four.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.five.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.six.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.seven.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.eight.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.nine.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
            this.ten.nativeElement.style.setProperty('background-color', 'rgb(207, 52, 52)');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('one'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "one", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('two'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "two", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('three'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "three", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('four'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "four", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('five'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "five", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('six'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "six", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('seven'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "seven", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('eight'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "eight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('nine'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "nine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('ten'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SideMenuComponent.prototype, "ten", void 0);
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-menu',
            template: __webpack_require__("../../../../../src/app/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        if (sessionStorage.getItem('user') == null) {
            this.userData = JSON.parse("{\"connected\":false}");
        }
        else {
            this.userData = JSON.parse(sessionStorage.getItem('user'));
        }
    }
    UserService.prototype.getCurrentChallengeName = function () {
        if (this.userData.currentChallenge == null) {
            return 0;
        }
        return this.userData.currentChallenge;
    };
    UserService.prototype.getCurrentChallengeDay = function () {
        var currentChallenge = this.userData.currentChallenge;
        if (currentChallenge != null) {
            for (var i = 0; i < this.userData.activeChallenges.length; i++) {
                if (this.userData.activeChallenges[i].challengeName == currentChallenge) {
                    return this.userData.activeChallenges[i].challengeDay;
                }
            }
        }
        else {
            return 0;
        }
    };
    UserService.prototype.nextDay = function () {
        if (this.getCurrentChallengeName() != "") {
            for (var i = 0; i < this.userData.activeChallenges.length; i++) {
                if (this.userData.activeChallenges[i].challengeName == this.getCurrentChallengeName()) {
                    this.userData.activeChallenges[i].challengeDay = this.getCurrentChallengeDay() + 1;
                    var userStr = JSON.stringify(this.userData);
                    sessionStorage.user = userStr;
                }
            }
        }
    };
    UserService.prototype.previousDay = function () {
        if (this.getCurrentChallengeName() != "") {
            for (var i = 0; i < this.userData.activeChallenges.length; i++) {
                if (this.userData.activeChallenges[i].challengeName == this.getCurrentChallengeName()) {
                    this.userData.activeChallenges[i].challengeDay = this.getCurrentChallengeDay() - 1;
                    var userStr = JSON.stringify(this.userData);
                    sessionStorage.user = userStr;
                }
            }
        }
    };
    UserService.prototype.setCurrentChallengeDay = function (value) {
        if (this.getCurrentChallengeName() != "") {
            for (var i = 0; i < this.userData.activeChallenges.length; i++) {
                if (this.userData.activeChallenges[i].challengeName == this.getCurrentChallengeName()) {
                    this.userData.activeChallenges[i].challengeDay = value;
                    var userStr = JSON.stringify(this.userData);
                    sessionStorage.user = userStr;
                }
            }
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/whistle-challenge/whistle-challenge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article\r\n{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n    height: 100%;\r\n\tmargin-left:5%;\r\n\tmargin-right: 5%;\r\n    overflow: auto;\r\n\tmargin-bottom: 40px;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.article h3\r\n{\r\n    font-family: customFontTitle, Tahoma, Geneva, sans-serif;\r\n    color :rgb(207, 52, 52);\r\n}\r\n\r\n.custom-select select{\r\n    width: 50px;\r\n    padding: 3px 5px;\r\n    margin: 2px 0;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n\tcolor: rgb(100, 100, 100);\r\n}\r\n\r\n.container .back-next{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width:100%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack:justify;\r\n        -ms-flex-pack:justify;\r\n            justify-content:space-between;\r\n    border: 5px red;\r\n}\r\n\r\n.container .back-next button{\r\n    width:20%;\r\n}\r\n\r\n.imgArticle{\r\n    text-align: center;\r\n}\r\n\r\n.imgArticle img{\r\n    width: 50%;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/whistle-challenge/whistle-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container article\">\n  <h1>Learn how to whistle in 10 hours! </h1>\n  <!--Start-->\n  <div *ngIf=\"whistleDay==null;\"> \n    <p>You never achieved to whistle properly ? Try those ten easy steps to master this skill faster than you expected.\n    <br><br>\n    </p>\n    <div class=\"container imgArticle\">\n    <img src=\"../../assets/gifs/mickeyWhistle.gif\">\n    <br><br>\n    <button (click)=\"registerWhistleChallenge()\" >Start the whistle challenge !</button>\n    </div>\n  </div>\n\n  <!--Day 1-->\n  <div *ngIf=\"whistleDay==1;\">\n    <p>\n      Day 1:<br><br>\n      To achieve this challenge, you should try to start with the basics.<br>\n      Position your lips as if you were trying to pronounce the \"u\" sound and blow gently some air to see if it creates a sound.<br/>\n      You don't need to try to whistle loudly at the begining. Just try to have this first whistle sound.<br>\n    </p>\n    <h3>If you have it, keep it and repeat it!</h3>\n    <p>\n      <br>\n      When you feel you can reproduce this simple whistle with ease, you can then try to modulate the sound you produced moving your tongue inside your mouth.<br/>\n      It should create higher notes with your tongue up, and lower notes with the tongue down.<br>\n      <br>\n      Practice during small sessions of 10 minutes during the day.<br>\n      If you (or too many people around) you feel tired of it, take some time before going back to practice in better conditions!    \n    \n    </p>\n    <div class=\"container back-next\">\n      <div></div>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n\n  <!--Day 2-->\n  <div *ngIf=\"whistleDay==2;\">\n    <p>Day 2</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 3-->\n  <div *ngIf=\"whistleDay==3;\">\n    <p>Day 3</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 4-->\n  <div *ngIf=\"whistleDay==4;\">\n    <p>Day 4</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 5-->\n  <div *ngIf=\"whistleDay==5;\">\n    <p>Day 5</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 6-->\n  <div *ngIf=\"whistleDay==6;\">\n    <p>Day 6</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 7-->\n  <div *ngIf=\"whistleDay==7;\">\n    <p>Day 7</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 8-->\n  <div *ngIf=\"whistleDay==8;\">\n    <p>Day 8</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 9-->\n  <div *ngIf=\"whistleDay==9;\">\n    <p>Day 9</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Next Step</button>\n    </div>\n  </div>\n  <!--Day 10-->\n  <div *ngIf=\"whistleDay==10;\">\n    <p>Day 10</p><br /><br />\n    <div class=\"container back-next\">\n      <button class=\"back-button\" (click)=\"previousWhistleDay()\">Back</button>\n      <button class=\"next-button\" (click)=\"nextWhistleDay()\">Finish !</button>\n    </div>\n  </div>\n  <!--End-->\n  <div *ngIf=\"whistleDay==11;\"> \n    <h3>Success !</h3>\n    <p>Congratz, you achieved the whistle challenge !\n    <br /><br />\n    <button routerLink=\"/challenges-component\" >Start another challenge !</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/whistle-challenge/whistle-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhistleChallengeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhistleChallengeComponent = /** @class */ (function () {
    function WhistleChallengeComponent(user) {
        this.user = user;
        if (user.getCurrentChallengeName() != "Whistle challenge") {
            this.whistleDay = null;
        }
        else {
            this.whistleDay = user.getCurrentChallengeDay();
        }
    }
    WhistleChallengeComponent.prototype.ngOnInit = function () {
    };
    WhistleChallengeComponent.prototype.registerWhistleChallenge = function () {
        var userData = JSON.parse(sessionStorage.getItem('user'));
        userData.currentChallenge = 'Whistle challenge';
        if (userData.activeChallenges == null) {
            userData.activeChallenges = [];
        }
        if (!userData.activeChallenges.some(function (item) { return item.challengeName === "Whistle challenge"; })) {
            console.log("add whistle challenge");
            userData['activeChallenges'].push({ "challengeName": "Whistle challenge", "challengeStatus": "active", "challengeDay": 1 });
            location.reload();
        }
        else {
            alert("Challenge already saved.");
        }
        var userStr = JSON.stringify(userData);
        sessionStorage.user = userStr;
    };
    WhistleChallengeComponent.prototype.cancelWhistleChallenge = function () {
        var userData = JSON.parse(sessionStorage.getItem('user'));
        userData.whistleChallenge = 'cancelled';
        var userStr = JSON.stringify(userData);
        sessionStorage.user = userStr;
    };
    WhistleChallengeComponent.prototype.nextWhistleDay = function () {
        this.user.nextDay();
        location.reload();
    };
    WhistleChallengeComponent.prototype.previousWhistleDay = function () {
        this.user.previousDay();
        location.reload();
    };
    WhistleChallengeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-whistle-challenge',
            template: __webpack_require__("../../../../../src/app/whistle-challenge/whistle-challenge.component.html"),
            styles: [__webpack_require__("../../../../../src/app/whistle-challenge/whistle-challenge.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]])
    ], WhistleChallengeComponent);
    return WhistleChallengeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map