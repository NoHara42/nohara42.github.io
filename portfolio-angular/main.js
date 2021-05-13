(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Xv1":
/*!*****************************************************************!*\
  !*** ./src/app/sections/landing-page/landing-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LandingPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ned O'Hara");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Developer / Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class LandingPageComponent {
    constructor() {
        this.isBeingRendered = false;
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 2, vars: 1, consts: [["id", "landing-page", 3, "deferLoad"], [4, "ngIf"], [1, "landing-flex-grid"], ["src", "./assets/resizedprofilepicture.jpg", 1, "profile-picture", "animate__animated", "animate__rollIn"], [1, "name", "animate__animated", "animate__slideInRight"], [1, "occupation", "animate__animated", "animate__slideInRight"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function LandingPageComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LandingPageComponent_ng_container_1_Template, 7, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#landing-page[_ngcontent-%COMP%] {\n  background-image: url('northern-lights-3273425.jpg');\n  background-size: cover;\n  height: 100vh;\n}\n\n.landing-flex-grid[_ngcontent-%COMP%] {\n  margin: 50px;\n  display: grid;\n  grid-template-columns: 4fr 1fr 5fr;\n  grid-template-rows: 50% 50%;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  max-width: 25vw;\n  height: auto;\n  grid-column-start: 1;\n  grid-row: 1/3;\n  justify-self: center;\n  align-self: center;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 7vw;\n  grid-column-start: 3;\n  grid-row-start: 1;\n  justify-self: center;\n  align-self: center;\n}\n\n.occupation[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 3.5vw;\n  grid-column-start: 3;\n  grid-row-start: 2;\n  justify-self: center;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9EQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmctcGFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ub3J0aGVybi1saWdodHMtMzI3MzQyNS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5sYW5kaW5nLWZsZXgtZ3JpZCB7XG4gIG1hcmdpbjogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXgtd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogYXV0bztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtcm93OiAxIC8gMztcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDd2dztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ub2NjdXBhdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMy41dnc7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/nohara42.github.io/nohara42.github.io/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "N9Tx":
/*!*********************************************************************!*\
  !*** ./src/app/sections/education-page/education-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: EducationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPageComponent", function() { return EducationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-vertical-timeline */ "Vhrr");





function EducationPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Education:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-vertical-timeline", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.events);
} }
class EducationPageComponent {
    constructor() {
        this.isBeingRendered = false;
        this.events = [
            {
                id: 0,
                title: 'Studying Digital Humanities',
                content: '<div>What is Digital Humanities?</div><br/><p /><div>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with the humanities.</div>',
                date: '2017 - Current',
                icon: "../../assets/deflag.png"
            },
            {
                id: 1,
                title: 'Completed A-Levels',
                content: '<div>A-Levels in:</div><p /><div>~ Mathematics, Physics, Chemistry (A-Levels)</div><div>~ Geology (AS)</div>',
                date: '2014 - 2016',
                icon: "../../assets/ukflag.png"
            }
        ];
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
EducationPageComponent.ɵfac = function EducationPageComponent_Factory(t) { return new (t || EducationPageComponent)(); };
EducationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationPageComponent, selectors: [["app-education-page"]], decls: 2, vars: 1, consts: [["id", "education-page", 3, "deferLoad"], [4, "ngIf"], [1, "animate__animated", "animate__fadeInUp", "titles"], [3, "data"]], template: function EducationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function EducationPageComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EducationPageComponent_ng_container_1_Template, 4, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_3__["NgVerticalTimelineComponent"]], styles: ["#education-page {\n  background: radial-gradient(at 50% 100%, white, lightgrey);\n}\n#education-page ng-vertical-timeline {\n  display: block;\n  width: 100%;\n}\n#education-page ng-vertical-timeline .head {\n  background-color: #013535 !important;\n}\n#education-page ng-vertical-timeline .head span {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n  text-transform: none;\n}\n#education-page ng-vertical-timeline .head .icon {\n  height: 30px;\n  width: 30px;\n}\n#education-page ng-vertical-timeline .title {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: none;\n}\n#education-page ng-vertical-timeline .body {\n  padding: 10px;\n}\n#education-page ng-vertical-timeline .body p {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  text-align: left;\n}\n#education-page ng-vertical-timeline .container.left::after {\n  border: 4px solid #013535;\n  background: linear-gradient(-45deg, #e98567, #e73c7e, #23a6d5, #17db9a);\n}\n#education-page ng-vertical-timeline .container.left::before {\n  border-color: transparent #013535;\n  border-radius: 50%;\n}\n#education-page ng-vertical-timeline .timeline::after {\n  border-radius: 50%;\n  background-color: #013535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvZWR1Y2F0aW9uLXBhZ2UvZWR1Y2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwREFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDRSxvQ0FBQTtBQUNOO0FBQU07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRVI7QUFDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFHSTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtBQUZOO0FBSU07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtBQUhSO0FBT0k7RUFDRSx5QkFBQTtFQUNBLHVFQUFBO0FBTE47QUFRSTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUFOTjtBQVFJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQU5OIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvZWR1Y2F0aW9uLXBhZ2UvZWR1Y2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWR1Y2F0aW9uLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgNTAlIDEwMCUsIHdoaXRlLCBsaWdodGdyZXkpO1xuXG4gIG5nLXZlcnRpY2FsLXRpbWVsaW5lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5oZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTM1MzUgIWltcG9ydGFudDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICAuYm9keSB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcblxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250YWluZXIubGVmdDo6YWZ0ZXIge1xuICAgICAgYm9yZGVyOiA0cHggc29saWQgIzAxMzUzNTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNlOTg1NjcsICNlNzNjN2UsICMyM2E2ZDUsICMxN2RiOWEpO1xuICAgIH1cblxuICAgIC5jb250YWluZXIubGVmdDo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAxMzUzNTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLnRpbWVsaW5lOjphZnRlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzNTM1O1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG5cbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education-page',
                templateUrl: './education-page.component.html',
                styleUrls: ['./education-page.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _sections_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/landing-page/landing-page.component */ "/Xv1");
/* harmony import */ var _sections_contents_page_contents_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/contents-page/contents-page.component */ "Wnvv");
/* harmony import */ var _sections_about_me_page_hobby_about_me_page_hobby_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/about-me-page-hobby/about-me-page-hobby.component */ "qBZL");
/* harmony import */ var _sections_about_me_page_professional_about_me_page_professional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/about-me-page-professional/about-me-page-professional.component */ "uALO");
/* harmony import */ var _sections_work_exp_page_work_exp_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/work-exp-page/work-exp-page.component */ "wRea");
/* harmony import */ var _sections_education_page_education_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/education-page/education-page.component */ "N9Tx");
/* harmony import */ var _sections_showcase_page_showcase_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/showcase-page/showcase-page.component */ "xxzM");
/* harmony import */ var _sections_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/contact-page/contact-page.component */ "UpYA");











class AppComponent {
    constructor(spinner) {
        this.spinner = spinner;
    }
    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 2 seconds */
            this.spinner.hide();
        }, 2000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 68, vars: 0, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-atom"], [2, "font-size", "20px", "color", "white"], ["id", "showcase-page-1"], [1, "showcase-container"], ["src", "../../assets/csas1.gif", 1, "showcase-gallery", "animate__animated", "animate__fadeInLeft"], [1, "showcase-text"], [1, "showcase-title"], [1, "showcase-description"], [1, "showcase-link"], ["href", "https://collaborative-street-art-sim.herokuapp.com/"], ["id", "showcase-page-2"], ["src", "./assets/perfect.gif", 1, "showcase-gallery", "animate__animated", "animate__fadeInLeft", "stopping-cue-gif"], ["href", "https://addons.mozilla.org/en-US/firefox/addon/stoppingcues-alpha/"], ["id", "showcase-page-3"], [1, "showcase-gallery-collection", "animate__animated", "animate__fadeInLeft"], ["src", "../../assets/idhPage1.png", 1, "showcase-page"], [1, "showcase-graphs"], ["src", "../../assets/idhPage8.png", 1, "showcase-linechart"], [1, "showcase-whitespace"], ["src", "../../assets/bias_hashtags_count_piechart.png", 1, "showcase-piechart2"], ["src", "../../assets/newspaper_sentiments_linechart.png", 1, "showcase-piechart"], ["href", "https://github.com/NoHara42/nohara42.github.io/blob/dev/src/assets/BrexitTwitterCrawler_DigitalHumanitiesProject.pdf"], ["id", "showcase-page-4"], ["src", "../../assets/thatOneMovie.gif", 1, "showcase-gallery", "animate__animated", "animate__fadeInLeft", "stopping-cue-gif"], ["href", "https://nohara42.github.io/ThatOneMovie-Front-End/"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-landing-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contents-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-about-me-page-hobby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about-me-page-professional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-work-exp-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-education-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-showcase-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 3D Street-art Simulator: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " I built a 3D game which runs in the browser using the three.js library. It supports multi-touch and can be used best on an android phone. In future, I plan to extend the game to be usable on iOS devices and make the game collaborative (ie. multiplayer). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " See the game here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-showcase-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Stopping Cues: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " We built a digitally-humane firefox extension, that combats the habits people form when using the infinite scroll. It displays a stopwatch that times how long you have been scrolling - it also randomly presents you with funny little messages that politely remind you to stop scrolling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Try the extension here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-showcase-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Brexit Twitter Crawler:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "We built a Twitter crawler, (a program that collects data from an API) to analyse the sentiment (reaction) of tweets of various UK newspaper publisher's followers - throughout the Brexit saga. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " See the paper here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "app-showcase-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Semantic Movie Recommender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " We built a web-app that prompts the user with a small dialogue, asking for the film the user is looking for. Following this, a semantic comparison is made between the user-input and aggregated descriptions of various movie DB APIs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " After that, it returns the top 5 most semantically-similar films. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " See the web-app here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-contact-page");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _sections_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"], _sections_contents_page_contents_page_component__WEBPACK_IMPORTED_MODULE_3__["ContentsPageComponent"], _sections_about_me_page_hobby_about_me_page_hobby_component__WEBPACK_IMPORTED_MODULE_4__["AboutMePageHobbyComponent"], _sections_about_me_page_professional_about_me_page_professional_component__WEBPACK_IMPORTED_MODULE_5__["AboutMePageProfessionalComponent"], _sections_work_exp_page_work_exp_page_component__WEBPACK_IMPORTED_MODULE_6__["WorkExpPageComponent"], _sections_education_page_education_page_component__WEBPACK_IMPORTED_MODULE_7__["EducationPageComponent"], _sections_showcase_page_showcase_page_component__WEBPACK_IMPORTED_MODULE_8__["ShowcasePageComponent"], _sections_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"]], styles: [".timeline-element[_ngcontent-%COMP%] {\n  color: black;\n  fill: black;\n}\n\n.date-text[_ngcontent-%COMP%] {\n  color: #013535;\n  font-size: 20px;\n}\n\n.back-to-top-text[_ngcontent-%COMP%] {\n  font-family: \"Maven Pro\";\n  color: lightgrey;\n  font-size: 20px;\n  text-decoration: none;\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  background-color: #013535;\n  display: flex;\n  justify-content: center;\n}\n\n\n\n.vertical-timeline[_ngcontent-%COMP%]::before {\n  background: #013535 !important;\n  opacity: 0.4;\n  border-radius: 50%;\n}\n\n\n\n.vertical-timeline-element-icon[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);\n}\n\n.vertical-timeline-element[_ngcontent-%COMP%] {\n  font-family: \"Maven Pro\";\n}\n\n.vertical-timeline--two-columns[_ngcontent-%COMP%]   .vertical-timeline-element-icon[_ngcontent-%COMP%]   .flag-size[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.showcase-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  margin: 100px 50px 100px 50px;\n  width: 75vw;\n}\n\n.showcase-gallery[_ngcontent-%COMP%] {\n  height: auto;\n  box-shadow: 5px 7px 5px #aaaaaa;\n  background: white;\n  overflow: hidden;\n}\n\n.showcase-gallery-collection[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 40vw;\n  box-shadow: 5px 7px 5px #aaaaaa;\n  background: white;\n}\n\n.showcase-page[_ngcontent-%COMP%] {\n  max-width: 70%;\n  height: auto;\n}\n\n#showcase-page-1[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 0%, white, lightgrey);\n}\n\n#showcase-page-2[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 100%, white, lightgrey);\n}\n\n#showcase-page-3[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 0%, white, lightgrey);\n}\n\n#showcase-page-4[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 100%, white, lightgrey);\n}\n\n.showcase-graphs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  max-width: 100%;\n  flex-direction: column;\n}\n\n.showcase-linechart[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100%;\n}\n\n.showcase-whitespace[_ngcontent-%COMP%] {\n  background: white;\n  height: 100%;\n  width: 100%;\n}\n\n.showcase-piechart[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100%;\n}\n\n.showcase-piechart2[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100%;\n}\n\n.showcase-link[_ngcontent-%COMP%] {\n  font-family: \"Maven Pro\";\n  margin-top: 20px;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: left;\n}\n\n.showcase-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  margin: 20px;\n  margin-left: 50px;\n}\n\n.showcase-title[_ngcontent-%COMP%] {\n  font-family: \"Maven Pro\";\n  font-size: 40px;\n  text-align: left;\n  font-weight: 600;\n  justify-self: flex-start;\n  margin-bottom: 50px;\n}\n\n.showcase-description[_ngcontent-%COMP%] {\n  font-family: \"Maven Pro\";\n  text-align: left;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.stopping-cue-gif[_ngcontent-%COMP%] {\n  width: 200%;\n  max-height: auto;\n}\n\n\n\n@media only screen and (max-width: 812px) {\n  .showcase-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .showcase-gallery[_ngcontent-%COMP%] {\n    height: 50vh;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBLGFBQUE7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBLDRCQUFBOztBQUNBO0VBQ0UsK0ZBQUE7QUFDRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLHdEQUFBO0FBQUY7O0FBR0E7RUFDRSwwREFBQTtBQUFGOztBQUlBO0VBQ0Usd0RBQUE7QUFERjs7QUFLQTtFQUNFLDBEQUFBO0FBRkY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQSxxQ0FBQTs7QUFPQTtFQUNFO0lBQ0Usc0JBQUE7RUFURjs7RUFZQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1lbGVtZW50IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmaWxsOiBibGFjaztcbn1cblxuLmRhdGUtdGV4dCB7XG4gIGNvbG9yOiAjMDEzNTM1O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5iYWNrLXRvLXRvcC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCI7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmFjay10by10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzNTM1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogVGhlIGxpbmUgKi9cbi52ZXJ0aWNhbC10aW1lbGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAxMzUzNSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogSWNvbiBjb250YWluZXIncyBib3JkZXIgKi9cbi52ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LWljb24ge1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggd2hpdGUsIGluc2V0IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSxcbiAgICAwIDNweCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udmVydGljYWwtdGltZWxpbmUtZWxlbWVudCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiO1xufVxuXG4udmVydGljYWwtdGltZWxpbmUtLXR3by1jb2x1bW5zIC52ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LWljb24gLmZsYWctc2l6ZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5zaG93Y2FzZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggNTBweCAxMDBweCA1MHB4O1xuICB3aWR0aDogNzV2dztcbn1cblxuLnNob3djYXNlLWdhbGxlcnkge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDVweCA3cHggNXB4ICNhYWFhYWE7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2hvd2Nhc2UtZ2FsbGVyeS1jb2xsZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA0MHZ3O1xuICBib3gtc2hhZG93OiA1cHggN3B4IDVweCAjYWFhYWFhO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnNob3djYXNlLXBhZ2Uge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jc2hvd2Nhc2UtcGFnZS0xIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAwJSwgd2hpdGUsIGxpZ2h0Z3JleSk7XG59XG5cbiNzaG93Y2FzZS1wYWdlLTIge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgNTAlIDEwMCUsIHdoaXRlLCBsaWdodGdyZXkpO1xuXG59XG5cbiNzaG93Y2FzZS1wYWdlLTMge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgNTAlIDAlLCB3aGl0ZSwgbGlnaHRncmV5KTtcblxufVxuXG4jc2hvd2Nhc2UtcGFnZS00IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAxMDAlLCB3aGl0ZSwgbGlnaHRncmV5KTtcblxufVxuXG4uc2hvd2Nhc2UtZ3JhcGhzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaG93Y2FzZS1saW5lY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnNob3djYXNlLXdoaXRlc3BhY2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNob3djYXNlLXBpZWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zaG93Y2FzZS1waWVjaGFydDIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnNob3djYXNlLWxpbmsge1xuICBmb250LWZhbWlseTogXCJNYXZlbiBQcm9cIjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2hvd2Nhc2UtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5zaG93Y2FzZS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNob3djYXNlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN0b3BwaW5nLWN1ZS1naWYge1xuICB3aWR0aDogMjAwJTtcbiAgbWF4LWhlaWdodDogYXV0bztcbn1cblxuLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MHB4KSB7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE2OXB4KSB7XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEycHgpIHtcbiAgLnNob3djYXNlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zaG93Y2FzZS1nYWxsZXJ5IHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "UpYA":
/*!*****************************************************************!*\
  !*** ./src/app/sections/contact-page/contact-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ContactPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact me!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LinkedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " +4915257013680 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " mailned42@gmail.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactPageComponent {
    constructor() {
        this.isBeingRendered = false;
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 2, vars: 1, consts: [["id", "contact-page", 3, "deferLoad"], ["class", "contact-container", 4, "ngIf"], [1, "contact-container"], [1, "contact-title", "animate__animated", "animate__tada"], [1, "contact-list", "animate__animated", "animate__slideInRight"], [1, "contact-item"], ["href", "https://www.facebook.com/ned.ohara"], ["src", "./assets/logo-facebook.svg", 1, "contact-icon"], ["href", "https://www.facebook.com/ned.ohara", 1, "contact-links"], [1, "contact-text"], ["href", "https://www.linkedin.com/in/ned-o-hara-b5840b127/"], ["src", "./assets/logo-linkedin.svg", 1, "contact-icon"], ["href", "https://www.linkedin.com/in/ned-o-hara-b5840b127/", 1, "contact-links"], ["src", "./assets/call-outline.svg", 1, "contact-icon", "animate__animated", "animate__tada"], [1, "contact-links"], ["href", "mailto:mailned42@gmail.com"], ["src", "./assets/mail-outline.svg", 1, "contact-icon"], ["href", "mailto:mailned42@gmail.com", 1, "contact-links"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function ContactPageComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactPageComponent_div_1_Template, 28, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#contact-page[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 0%, white, lightgrey);\n}\n\n.contact-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  margin: 100px 50px 100px 50px;\n}\n\n.contact-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\na[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n}\n\n.contact-text[_ngcontent-%COMP%] {\n  display: inline-grid;\n  color: #013535;\n  font-size: 2vw;\n  font-weight: 400;\n  align-content: center;\n  height: 10vh;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  color: #013535;\n  font-size: 4vw;\n  font-weight: 600;\n  word-wrap: break-word;\n  margin-right: 100px;\n}\n\n.contact-icon[_ngcontent-%COMP%] {\n  width: 2vw;\n  margin-right: 1rem;\n  filter: invert(15%) sepia(58%) saturate(800%) hue-rotate(134deg) brightness(96%) contrast(104%);\n}\n\n.contact-links[_ngcontent-%COMP%] {\n  justify-self: left;\n}\n\n\n\n@media only screen and (max-width: 1169px) {\n  .contact-text[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n    font-weight: 100;\n  }\n\n  .contact-icon[_ngcontent-%COMP%] {\n    width: 3.5vw;\n  }\n}\n\n@media only screen and (max-width: 812px) {\n  .contact-title[_ngcontent-%COMP%] {\n    margin-right: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0ZBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0EscUNBQUE7O0FBSUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFIRjs7RUFLQTtJQUNFLFlBQUE7RUFGRjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxrQkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3QtcGFnZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCA1MCUgMCUsIHdoaXRlLCBsaWdodGdyZXkpO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggNTBweCAxMDBweCA1MHB4O1xufVxuXG4uY29udGFjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGNvbG9yOiAjMDEzNTM1O1xuICBmb250LXNpemU6IDJ2dztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwdmg7XG59XG5cbi5jb250YWN0LXRpdGxlIHtcbiAgY29sb3I6ICMwMTM1MzU7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG5cbi5jb250YWN0LWljb24ge1xuICB3aWR0aDogMnZ3O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZpbHRlcjogaW52ZXJ0KDE1JSkgc2VwaWEoNTglKSBzYXR1cmF0ZSg4MDAlKSBodWUtcm90YXRlKDEzNGRlZylcbiAgICBicmlnaHRuZXNzKDk2JSkgY29udHJhc3QoMTA0JSk7XG59XG5cbi5jb250YWN0LWxpbmtzIHtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4vKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTY5cHgpIHtcbiAgLmNvbnRhY3QtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIC5jb250YWN0LWljb24ge1xuICAgIHdpZHRoOiAzLjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuY29udGFjdC10aXRsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Wnvv":
/*!*******************************************************************!*\
  !*** ./src/app/sections/contents-page/contents-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsPageComponent", function() { return ContentsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ContentsPageComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Portfolio Contents: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " About Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Work Experience ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Education ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Show Case ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContentsPageComponent {
    constructor() {
        this.isBeingRendered = false;
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
ContentsPageComponent.ɵfac = function ContentsPageComponent_Factory(t) { return new (t || ContentsPageComponent)(); };
ContentsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentsPageComponent, selectors: [["app-contents-page"]], decls: 7, vars: 1, consts: [["id", "contents-page", 3, "deferLoad"], ["href", "https://github.com/NoHara42", "aria-label", "View source on GitHub", 1, "github-corner"], ["width", "100px", "height", "100px", "viewBox", "0 0 250 250", "aria-hidden", "true", 2, "fill", "#64CEAA", "color", "#fff", "position", "absolute", "top", "0", "border", "0", "right", "0"], ["d", "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], ["d", "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", "fill", "currentColor", 1, "octo-arm", 2, "transform-origin", "130px 106px"], ["d", "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", "fill", "currentColor", 1, "octo-body"], ["class", "contents-container", 4, "ngIf"], [1, "contents-container"], [1, "contents-title", "animate__animated", "animate__slideInLeft"], [1, "contents-list", "animate__animated", "animate__slideInRight"], [1, "contents-item"], ["href", "#about-me-page-hobby"], ["src", "./assets/aboutme.svg", 1, "contents-icon"], [1, "contents-text"], ["href", "#work-experience-page"], ["src", "./assets/workexperience.svg", 1, "contents-icon"], ["href", "#education-page"], ["src", "./assets/education.svg", 1, "contents-icon"], ["href", "#showcase-page"], ["src", "./assets/showcase.svg", 1, "contents-icon"], ["href", "#contact-page"], ["src", "./assets/mail-outline.svg", 1, "contents-icon"]], template: function ContentsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function ContentsPageComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContentsPageComponent_div_6_Template, 34, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#contents-page[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 100%, white, lightgrey);\n  height: 100vh;\n}\n\n.contents-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  margin: 100px 50px 100px 50px;\n}\n\n.contents-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.contents-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\na[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n}\n\n.contents-text[_ngcontent-%COMP%] {\n  display: inline-grid;\n  color: #013535;\n  font-size: 2vw;\n  font-weight: 400;\n  align-content: center;\n  height: 10vh;\n}\n\n.contents-title[_ngcontent-%COMP%] {\n  color: #013535;\n  font-size: 4vw;\n  font-weight: 600;\n  word-wrap: break-word;\n  margin-right: 100px;\n}\n\n.contents-icon[_ngcontent-%COMP%] {\n  width: 2vw;\n  margin-right: 1rem;\n  filter: invert(15%) sepia(58%) saturate(800%) hue-rotate(134deg) brightness(96%) contrast(104%);\n}\n\n\n\n@media only screen and (max-width: 1169px) {\n  .contents-text[_ngcontent-%COMP%] {\n    font-size: 3.5vw;\n    font-weight: 100;\n  }\n\n  .contents-icon[_ngcontent-%COMP%] {\n    width: 3.5vw;\n  }\n}\n\n@media only screen and (max-width: 812px) {\n  .contents-title[_ngcontent-%COMP%] {\n    margin-right: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvY29udGVudHMtcGFnZS9jb250ZW50cy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMERBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUdBO0VBQ0Usb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0ZBQUE7QUFFRjs7QUFFQSxxQ0FBQTs7QUFJQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQUZGOztFQUlBO0lBQ0UsWUFBQTtFQURGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGtCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2NvbnRlbnRzLXBhZ2UvY29udGVudHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50cy1wYWdlIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAxMDAlLCB3aGl0ZSwgbGlnaHRncmV5KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMDBweCA1MHB4IDEwMHB4IDUwcHg7XG59XG5cbi5jb250ZW50cy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuXG4uY29udGVudHMtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudHMtdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBjb2xvcjogIzAxMzUzNTtcbiAgZm9udC1zaXplOiAydnc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMHZoO1xufVxuLmNvbnRlbnRzLXRpdGxlIHtcbiAgY29sb3I6ICMwMTM1MzU7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG59XG4uY29udGVudHMtaWNvbiB7XG4gIHdpZHRoOiAydnc7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZmlsdGVyOiBpbnZlcnQoMTUlKSBzZXBpYSg1OCUpIHNhdHVyYXRlKDgwMCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKVxuICAgIGJyaWdodG5lc3MoOTYlKSBjb250cmFzdCgxMDQlKTtcbn1cblxuLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MHB4KSB7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE2OXB4KSB7XG4gIC5jb250ZW50cy10ZXh0IHtcbiAgICBmb250LXNpemU6IDMuNXZ3O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgLmNvbnRlbnRzLWljb24ge1xuICAgIHdpZHRoOiAzLjV2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTJweCkge1xuICAuY29udGVudHMtdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgfVxufVxuIl19 */", ".github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%]{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%]{animation:none}.github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%]{animation:octocat-wave 560ms ease-in-out}}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contents-page',
                templateUrl: './contents-page.component.html',
                styleUrls: ['./contents-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sections_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/landing-page/landing-page.component */ "/Xv1");
/* harmony import */ var _sections_about_me_page_professional_about_me_page_professional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/about-me-page-professional/about-me-page-professional.component */ "uALO");
/* harmony import */ var _sections_about_me_page_hobby_about_me_page_hobby_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/about-me-page-hobby/about-me-page-hobby.component */ "qBZL");
/* harmony import */ var _sections_education_page_education_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/education-page/education-page.component */ "N9Tx");
/* harmony import */ var _sections_work_exp_page_work_exp_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/work-exp-page/work-exp-page.component */ "wRea");
/* harmony import */ var _sections_showcase_page_showcase_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/showcase-page/showcase-page.component */ "xxzM");
/* harmony import */ var _sections_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/contact-page/contact-page.component */ "UpYA");
/* harmony import */ var _sections_contents_page_contents_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/contents-page/contents-page.component */ "Wnvv");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rinminase_ng_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @rinminase/ng-charts */ "pXo9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-vertical-timeline */ "Vhrr");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_12__["DeferLoadModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _rinminase_ng_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
            ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_16__["NgVerticalTimelineModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _sections_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
        _sections_about_me_page_professional_about_me_page_professional_component__WEBPACK_IMPORTED_MODULE_5__["AboutMePageProfessionalComponent"],
        _sections_about_me_page_hobby_about_me_page_hobby_component__WEBPACK_IMPORTED_MODULE_6__["AboutMePageHobbyComponent"],
        _sections_education_page_education_page_component__WEBPACK_IMPORTED_MODULE_7__["EducationPageComponent"],
        _sections_work_exp_page_work_exp_page_component__WEBPACK_IMPORTED_MODULE_8__["WorkExpPageComponent"],
        _sections_showcase_page_showcase_page_component__WEBPACK_IMPORTED_MODULE_9__["ShowcasePageComponent"],
        _sections_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"],
        _sections_contents_page_contents_page_component__WEBPACK_IMPORTED_MODULE_11__["ContentsPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_12__["DeferLoadModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _rinminase_ng_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
        ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_16__["NgVerticalTimelineModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _sections_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
                    _sections_about_me_page_professional_about_me_page_professional_component__WEBPACK_IMPORTED_MODULE_5__["AboutMePageProfessionalComponent"],
                    _sections_about_me_page_hobby_about_me_page_hobby_component__WEBPACK_IMPORTED_MODULE_6__["AboutMePageHobbyComponent"],
                    _sections_education_page_education_page_component__WEBPACK_IMPORTED_MODULE_7__["EducationPageComponent"],
                    _sections_work_exp_page_work_exp_page_component__WEBPACK_IMPORTED_MODULE_8__["WorkExpPageComponent"],
                    _sections_showcase_page_showcase_page_component__WEBPACK_IMPORTED_MODULE_9__["ShowcasePageComponent"],
                    _sections_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_10__["ContactPageComponent"],
                    _sections_contents_page_contents_page_component__WEBPACK_IMPORTED_MODULE_11__["ContentsPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_12__["DeferLoadModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _rinminase_ng_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
                    ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_16__["NgVerticalTimelineModule"],
                ],
                providers: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qBZL":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/about-me-page-hobby/about-me-page-hobby.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AboutMePageHobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMePageHobbyComponent", function() { return AboutMePageHobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AboutMePageHobbyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hi! \uD83D\uDC4B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I study the interaction between humans and computers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I play guitar, \uD83C\uDFB8 throw hoops \uD83C\uDFC0 and am proudly creative. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutMePageHobbyComponent {
    constructor() {
        this.isBeingRendered = false;
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
AboutMePageHobbyComponent.ɵfac = function AboutMePageHobbyComponent_Factory(t) { return new (t || AboutMePageHobbyComponent)(); };
AboutMePageHobbyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMePageHobbyComponent, selectors: [["app-about-me-page-hobby"]], decls: 2, vars: 1, consts: [["id", "about-me-page-hobby", 3, "deferLoad"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "animate__animated", "animate__fadeInUp", "titles"], [1, "animate__animated", "animate__fadeInUp"]], template: function AboutMePageHobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function AboutMePageHobbyComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutMePageHobbyComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#about-me-page-hobby[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 0%, white, lightgrey);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 100px;\n  padding-bottom: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvYWJvdXQtbWUtcGFnZS1ob2JieS9hYm91dC1tZS1wYWdlLWhvYmJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0RBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvYWJvdXQtbWUtcGFnZS1ob2JieS9hYm91dC1tZS1wYWdlLWhvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0LW1lLXBhZ2UtaG9iYnkge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoYXQgNTAlIDAlLCB3aGl0ZSwgbGlnaHRncmV5KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDB2aDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMePageHobbyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me-page-hobby',
                templateUrl: './about-me-page-hobby.component.html',
                styleUrls: ['./about-me-page-hobby.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uALO":
/*!*********************************************************************************************!*\
  !*** ./src/app/sections/about-me-page-professional/about-me-page-professional.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AboutMePageProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMePageProfessionalComponent", function() { return AboutMePageProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rinminase_ng_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rinminase/ng-charts */ "pXo9");





function AboutMePageProfessionalComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I've done a lot of technical work.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is what I've been doing lately.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r0.chartData)("options", ctx_r0.chartOptions)("labels", ctx_r0.chartLabels);
} }
class AboutMePageProfessionalComponent {
    constructor() {
        this.isBeingRendered = false;
        this.chartOptions = {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    beginAtZero: true,
                    min: 0,
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        };
        this.chartLabels = ['Typescript', 'ES6', 'Angular', 'React', 'Vue', 'MongoDB', 'Python'];
        this.chartData = [
            { min: 0, max: 100, data: [88, 77, 80, 45, 30, 50, 70], label: 'Proficiency', fill: true, },
        ];
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
AboutMePageProfessionalComponent.ɵfac = function AboutMePageProfessionalComponent_Factory(t) { return new (t || AboutMePageProfessionalComponent)(); };
AboutMePageProfessionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMePageProfessionalComponent, selectors: [["app-about-me-page-professional"]], decls: 2, vars: 1, consts: [["id", "about-me-page-professional", 3, "deferLoad"], [4, "ngIf"], [1, "titles", "animate__animated", "animate__fadeInUp"], [1, "animate__animated", "animate__fadeInUp"], ["baseChart", "", "chartType", "radar", "height", "75vh", 3, "datasets", "options", "labels"]], template: function AboutMePageProfessionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function AboutMePageProfessionalComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutMePageProfessionalComponent_ng_container_1_Template, 7, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _rinminase_ng_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["#about-me-page-professional[_ngcontent-%COMP%] {\n  background: radial-gradient(at 50% 100%, white, lightgrey);\n  padding-bottom: 100px;\n}\n#about-me-page-professional[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvYWJvdXQtbWUtcGFnZS1wcm9mZXNzaW9uYWwvYWJvdXQtbWUtcGFnZS1wcm9mZXNzaW9uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwREFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9hYm91dC1tZS1wYWdlLXByb2Zlc3Npb25hbC9hYm91dC1tZS1wYWdlLXByb2Zlc3Npb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dC1tZS1wYWdlLXByb2Zlc3Npb25hbCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCA1MCUgMTAwJSwgd2hpdGUsIGxpZ2h0Z3JleSk7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMePageProfessionalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me-page-professional',
                templateUrl: './about-me-page-professional.component.html',
                styleUrls: ['./about-me-page-professional.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wRea":
/*!*******************************************************************!*\
  !*** ./src/app/sections/work-exp-page/work-exp-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: WorkExpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExpPageComponent", function() { return WorkExpPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-vertical-timeline */ "Vhrr");





function WorkExpPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Work Experience:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng-vertical-timeline", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.events);
} }
class WorkExpPageComponent {
    constructor() {
        this.isBeingRendered = false;
        this.events = [
            {
                id: 0,
                title: 'Front-End Developer (Working Student)',
                date: '2020 - Current',
                content: "<div>Rhode & Schwarz Cybersecurity</div><br/><p /><div>To preserve company confidentiality, I can't tell you what I'm working on.</div><div>However, <i>I really love building shiny things with Angular.</i></div>",
                icon: "../../assets/Logo-Rohde_Schwarz.jpg",
            },
            {
                id: 1,
                title: 'Back-End Developer (Working Student)',
                content: "<div>eCommeleon</div><br/><p /><p/><div>~ Integrated Walmart marketplace, facilitating large transaction inserts to MySQL databases.</div><div>~ Built Windows Desktop Applications to facilitate this.</div><div>~ Responsible for writing technical documentation.</div>",
                date: '2019 - 2020',
                icon: "../../assets/eCommeleonCentered.png",
            },
            {
                id: 2,
                title: 'Student Researcher',
                content: "<div>Digital City Department, City of Leipzig</div><p/><div>~ Automation programming and the digitalisation of bureaucratic processes.</div><div>~ Project management and organisation of citizen-participation initiatives.</div><div>~ 'Smart City'-based research.</div>",
                date: '2018 - 2019',
                icon: "../../assets/leipzigCentered.png"
            },
            {
                id: 3,
                title: 'Coworking Community Manager',
                content: "<div>Basislager Coworking, Leipzig</div><p/>        <p/><div>~ Event management</div><div>~ Community management. (Offline and Online.)</div><div>~ Organisation of event formats.</div><div>~ Facilitation of creative culture principles and values.</div>",
                date: '2016 - 2017',
                icon: "../../assets/basislagerCentered.png"
            },
        ];
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
WorkExpPageComponent.ɵfac = function WorkExpPageComponent_Factory(t) { return new (t || WorkExpPageComponent)(); };
WorkExpPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkExpPageComponent, selectors: [["app-work-exp-page"]], decls: 2, vars: 1, consts: [["id", "work-experience-page", 3, "deferLoad"], [4, "ngIf"], [1, "animate__animated", "animate__fadeInUp", "titles"], [3, "data"]], template: function WorkExpPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function WorkExpPageComponent_Template_section_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkExpPageComponent_ng_container_1_Template, 4, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_vertical_timeline__WEBPACK_IMPORTED_MODULE_3__["NgVerticalTimelineComponent"]], styles: ["#work-experience-page {\n  padding-top: 150px;\n  padding-bottom: 150px;\n  background: radial-gradient(at 50% 0%, white, lightgrey);\n}\n#work-experience-page ng-vertical-timeline {\n  display: block;\n  width: 100%;\n}\n#work-experience-page ng-vertical-timeline .head {\n  background-color: #013535 !important;\n}\n#work-experience-page ng-vertical-timeline .head span {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  font-weight: 300;\n  text-transform: none;\n}\n#work-experience-page ng-vertical-timeline .head .icon {\n  height: 30px;\n  width: 30px;\n}\n#work-experience-page ng-vertical-timeline .head .icon img {\n  border-radius: 50%;\n}\n#work-experience-page ng-vertical-timeline .title {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: none;\n}\n#work-experience-page ng-vertical-timeline .body {\n  padding: 10px;\n}\n#work-experience-page ng-vertical-timeline .body p {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  text-align: left;\n}\n#work-experience-page ng-vertical-timeline .container.left::after {\n  border: 4px solid #013535;\n  background: linear-gradient(-45deg, #e98567, #e73c7e, #23a6d5, #17db9a);\n}\n#work-experience-page ng-vertical-timeline .container.left::before {\n  border-color: transparent #013535;\n  border-radius: 50%;\n}\n#work-experience-page ng-vertical-timeline .timeline::after {\n  border-radius: 50%;\n  background-color: #013535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvd29yay1leHAtcGFnZS93b3JrLWV4cC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdEQUFBO0FBQ0Y7QUFFRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBQUo7QUFFSTtFQUNFLG9DQUFBO0FBQU47QUFDTTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUVNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBUjtBQUNRO0VBQ0Usa0JBQUE7QUFDVjtBQUlJO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFLTTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0FBSlI7QUFRSTtFQUNFLHlCQUFBO0VBQ0EsdUVBQUE7QUFOTjtBQVNJO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQVBOO0FBU0k7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBUE4iLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy93b3JrLWV4cC1wYWdlL3dvcmstZXhwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd29yay1leHBlcmllbmNlLXBhZ2Uge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAwJSwgd2hpdGUsIGxpZ2h0Z3JleSk7XG5cblxuICBuZy12ZXJ0aWNhbC10aW1lbGluZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzNTM1ICFpbXBvcnRhbnQ7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgLmJvZHkge1xuICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdmVuIFByb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGFpbmVyLmxlZnQ6OmFmdGVyIHtcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMTM1MzU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZTk4NTY3LCAjZTczYzdlLCAjMjNhNmQ1LCAjMTdkYjlhKTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLmxlZnQ6OmJlZm9yZSB7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMwMTM1MzU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC50aW1lbGluZTo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzUzNTtcbiAgICB9XG4gIH1cblxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExpPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work-exp-page',
                templateUrl: './work-exp-page.component.html',
                styleUrls: ['./work-exp-page.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xxzM":
/*!*******************************************************************!*\
  !*** ./src/app/sections/showcase-page/showcase-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowcasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePageComponent", function() { return ShowcasePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trademe/ng-defer-load */ "TMEK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ShowcasePageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = ["*"];
class ShowcasePageComponent {
    constructor() {
        this.isBeingRendered = false;
    }
    ngOnInit() {
    }
    beingRendered() {
        this.isBeingRendered = !this.isBeingRendered;
    }
}
ShowcasePageComponent.ɵfac = function ShowcasePageComponent_Factory(t) { return new (t || ShowcasePageComponent)(); };
ShowcasePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowcasePageComponent, selectors: [["app-showcase-page"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "deferLoad"], [4, "ngIf"]], template: function ShowcasePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deferLoad", function ShowcasePageComponent_Template_div_deferLoad_0_listener() { return ctx.beingRendered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowcasePageComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingRendered);
    } }, directives: [_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_1__["DeferLoadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3Nob3djYXNlLXBhZ2Uvc2hvd2Nhc2UtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcasePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showcase-page',
                templateUrl: './showcase-page.component.html',
                styleUrls: ['./showcase-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map