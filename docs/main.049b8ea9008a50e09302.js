(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\On Progress Projects\Portfolio\PotrfolioApp\src\main.ts */"zUnb");


/***/ }),

/***/ "2Ic5":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about .about-content{\r\n  display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.subtitle {\r\n  margin: 2em 0 2em 0;\r\n}\r\n.fancy {\r\n  line-height: 0.5;\r\n  text-align: center;\r\n}\r\n.fancy span {\r\n  display: inline-block;\r\n  position: relative;  \r\n}\r\n.fancy span:before,\r\n.fancy span:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 5px;\r\n  border-bottom: 1px solid black;\r\n  border-top: 1px solid black;\r\n  top: 0;\r\n  width: 600px;\r\n}\r\n.fancy span:before {\r\n  right: 100%;\r\n  margin-right: 15px;\r\n}\r\n.fancy span:after {\r\n  left: 100%;\r\n  margin-left: 15px;\r\n}\r\np{\r\n  font-size:large;\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n.max-width{\r\n  max-width: 1300px;\r\n  padding: 0 80px;\r\n  margin: auto;\r\n}\r\nsection .title{\r\n  \r\n  position: relative;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  font-weight: 500;\r\n  margin-bottom: 60px;\r\n  padding-bottom: 20px;\r\n  font-family: 'Ubuntu', sans-serif;\r\n  block-size: 20px;\r\n}\r\nsection .title::before{\r\n  margin-top: 2px;\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 50%;\r\n  width: 180px;\r\n  height: 3px;\r\n  background: black;\r\n  transform: translateX(-50%);\r\n}\r\n/* about section styling */\r\n.about .about-content .left{\r\n  width: 45%;\r\n}\r\n.about .about-content .left img{\r\n  height: 400px;\r\n  width: 400px;\r\n  object-fit: cover;\r\n  border-radius: 6px;\r\n}\r\n.about .about-content .right{\r\n  width: 55%;\r\n}\r\n.about .about-content .right .text{\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  margin-bottom: 10px;\r\n}\r\n.about .about-content .right .text span{\r\n  color: crimson;\r\n}\r\n.about .about-content .right p{\r\n  text-align: justify;\r\n}\r\n.about .about-content .right a{\r\n  display: inline-block;\r\n  background: crimson;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  padding: 10px 30px;\r\n  margin-top: 20px;\r\n  border-radius: 6px;\r\n  border: 2px solid crimson;\r\n  transition: all 0.3s ease;\r\n}\r\n.about .about-content .right a:hover{\r\n  color: crimson;\r\n  background: none;\r\n}\r\n.img-wrapper\r\n{ \r\n   \r\n    overflow: hidden;\r\n    position: relative;\r\n    height: 400px;\r\n    width: 400px;\r\n    object-fit: cover;\r\n    border-radius: 50%; \r\n    \r\n}\r\n.img-wrapper:hover img{ \r\n\r\n    \r\n    \r\n    transform: scale(1.1,1.1);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n    \r\n    \r\n\r\n}\r\n/* responsive media query start */\r\n@media (max-width: 1104px) {\r\n  .about .about-content .left img{\r\n      height: 350px;\r\n      width: 350px;\r\n  }\r\n}\r\n@media (max-width: 991px) {\r\n  .max-width{\r\n      padding: 0 50px;\r\n  }\r\n}\r\n@media (max-width: 947px){\r\n \r\n \r\n  .about .about-content .column{\r\n      width: 100%;\r\n  }\r\n  .about .about-content .left{\r\n      display: flex;\r\n      justify-content: center;\r\n      margin: 0 auto 60px;\r\n  }\r\n  .about .about-content .right{\r\n      flex: 100%;\r\n  }\r\n  \r\n \r\n  .contact .contact-content .column{\r\n      width: 100%;\r\n      margin-bottom: 35px;\r\n  }\r\n}\r\n@media (max-width: 500px) {\r\n\r\n  .about .about-content .right .text{\r\n    font-size: 19px;\r\n  }\r\n \r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsTUFBTTtFQUNOLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJEQUEyRDtBQUM3RDtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3QjtBQUdBLDBCQUEwQjtBQUUxQjtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBOzs7SUFHSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTs7OztJQUlJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLFlBQVk7Ozs7QUFJaEI7QUFDQSxpQ0FBaUM7QUFDakM7RUFDRTtNQUNJLGFBQWE7TUFDYixZQUFZO0VBQ2hCO0FBQ0Y7QUFFQTtFQUNFO01BQ0ksZUFBZTtFQUNuQjtBQUNGO0FBRUE7OztFQUdFO01BQ0ksV0FBVztFQUNmO0VBQ0E7TUFDSSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtFQUN2QjtFQUNBO01BQ0ksVUFBVTtFQUNkOzs7RUFHQTtNQUNJLFdBQVc7TUFDWCxtQkFBbUI7RUFDdkI7QUFDRjtBQUlBOztFQUVFO0lBQ0UsZUFBZTtFQUNqQjs7O0FBR0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dCAuYWJvdXQtY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIG1hcmdpbjogMmVtIDAgMmVtIDA7XHJcbn1cclxuLmZhbmN5IHtcclxuICBsaW5lLWhlaWdodDogMC41O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZmFuY3kgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG59XHJcbi5mYW5jeSBzcGFuOmJlZm9yZSxcclxuLmZhbmN5IHNwYW46YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG4uZmFuY3kgc3BhbjpiZWZvcmUge1xyXG4gIHJpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uZmFuY3kgc3BhbjphZnRlciB7XHJcbiAgbGVmdDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTpsYXJnZTtcclxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1heC13aWR0aHtcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5zZWN0aW9uIC50aXRsZXtcclxuICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gIGJsb2NrLXNpemU6IDIwcHg7XHJcbn1cclxuc2VjdGlvbiAudGl0bGU6OmJlZm9yZXtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcblxyXG4vKiBhYm91dCBzZWN0aW9uIHN0eWxpbmcgKi9cclxuXHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAubGVmdHtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAubGVmdCBpbWd7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHR7XHJcbiAgd2lkdGg6IDU1JTtcclxufVxyXG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLnJpZ2h0IC50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmFib3V0IC5hYm91dC1jb250ZW50IC5yaWdodCAudGV4dCBzcGFue1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHQgcHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHQgYXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHQgYTpob3ZlcntcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5pbWctd3JhcHBlclxyXG57IFxyXG4gICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgXHJcbn1cclxuLmltZy13cmFwcGVyOmhvdmVyIGltZ3sgXHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIFxyXG4gICAgXHJcblxyXG59XHJcbi8qIHJlc3BvbnNpdmUgbWVkaWEgcXVlcnkgc3RhcnQgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDRweCkge1xyXG4gIC5hYm91dCAuYWJvdXQtY29udGVudCAubGVmdCBpbWd7XHJcbiAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5tYXgtd2lkdGh7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDdweCl7XHJcbiBcclxuIFxyXG4gIC5hYm91dCAuYWJvdXQtY29udGVudCAuY29sdW1ue1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IC5sZWZ0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcclxuICB9XHJcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IC5yaWdodHtcclxuICAgICAgZmxleDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiBcclxuICAuY29udGFjdCAuY29udGFjdC1jb250ZW50IC5jb2x1bW57XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHJcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IC5yaWdodCAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICB9XHJcbiBcclxuICBcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "5TFM":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"about\" id=\"about\" style=\"overflow: hidden;\">\n    <div class=\"max-width\">\n        <h1 class=\"subtitle fancy\"><span>About me</span></h1>\n        <div class=\"about-content\">\n            <div class=\"column left\">\n                <div class=\"img-wrapper\">\n                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'\n                    alt=\"\">\n                </div>\n            </div>\n            <div class=\"column right\">\n                <div class=\"text\">I'm Shrey and I'm a <span class=\"typing-2\"></span></div>\n                <p>Being a <b style=\"color:crimson\">Computer Science graduate</b> I \n                    have been learning various subjects related to different area of computers and technology. Particularly, I am interested in web development. I want to learn about different fields of web development. \n                    I want to be a full stack web developer.</p>\n                <a href=\"https://drive.google.com/file/d/1kMOiRsd10iVK93Q1NJnmVwNQ5aNtc13w/view?usp=sharing\">Download CV</a>\n            </div>\n        </div>\n    </div>\n</section>\n\n");

/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "5TFM");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.css */ "2Ic5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutComponent = class AboutComponent {
    constructor() {
        this.texts = ['Learner',
            'Front-end developer',
            'Back-end developer',
            'Tech enthusiast'
        ];
        this.count = 0;
        this.index = 0;
        this.currentText = '';
        this.letter = '';
    }
    ngOnInit() {
        setInterval(() => { this.myFunction(); }, 200);
    }
    myFunction() {
        if (this.count === this.texts.length) {
            this.count = 0;
        }
        this.currentText = this.texts[this.count];
        this.letter = this.currentText.slice(0, ++this.index);
        const target = document.querySelector('.typing-2');
        if (target != null) {
            target.textContent = this.letter;
        }
        else {
            console.log('target null');
        }
        if (this.letter.length === this.currentText.length) {
            this.count++;
            this.index = 0;
        }
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutComponent);



/***/ }),

/***/ "9ih/":
/*!***********************************************!*\
  !*** ./src/app/headers/headers.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() {
        this.texts = ['Hello! welcome to my online portfolio',
            '????????????! ???????????? ?????????????????? ????????????????????????????????? ????????? ???????????? ?????????????????? ??????'
        ];
        this.count = 0;
        this.index = 0;
        this.currentText = '';
        this.letter = '';
        this.content = {
            top: {
                title: "Hi people, ",
                description: "Wisdom provides all the key features of a modern single page application ready to use, so, for you to focus on launching your idea the quickest!",
                image: "assets/img/blue-buddha.svg"
            }
        };
    }
    ngOnInit() {
        setInterval(() => { this.myFunction(); }, 400);
    }
    myFunction() {
        if (this.count === this.texts.length) {
            this.count = 0;
        }
        this.currentText = this.texts[this.count];
        this.letter = this.currentText.slice(0, ++this.index);
        const target = document.querySelector('.typing');
        if (target != null) {
            target.textContent = this.letter;
        }
        else {
            console.log('target null');
        }
        if (this.letter.length === this.currentText.length) {
            this.count++;
            this.index = 0;
        }
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

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
const environment = {
    production: true
};


/***/ }),

/***/ "BGiY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"form-container\" style=\"overflow: hidden\">\r\n      <div class=\"left-container\">\r\n         \r\n        </div>\r\n      <div class=\"right-container\">\r\n        <div class=\"right-inner-container\">\r\n          <form action=\"#\">\r\n              <h2 class=\"lg-view\">Contact</h2>\r\n              <form ngNoForm action=\"https://formspree.io/f/xyyljjdd\" method=\"post\" >\r\n                <input type=\"email\" name=\"_replyto\" placeholder=\"Email\" />\r\n                <input type=\"text\"  name=\"firstName\" placeholder=\"First Name\"  />\r\n                <input type=\"text\"  name=\"lastName\" placeholder=\"Last Name\"  />\r\n                <textarea rows=\"4\" name=\"message\" placeholder=\"Message\"></textarea>\r\n                \r\n                <button type=\"submit\">Submit</button>\r\n              </form>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "CF56":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footers/footers.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar layout=\"fill\">  \r\n\t<span class=\"fill-space\"></span>\r\n\t<a [href]=\"twitterUrl\" target=\"_blank\">\r\n\t\t<img src=\"https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/twitter-hexagon-social-media-32.png\" alt=\"\" matTooltip=\"Twitter\"\r\n\t\t matTooltipPosition=\"above\">\r\n\t</a>\r\n\t<a [href]=\"githubUrl\" target=\"_blank\">\r\n\t\t<img src=\"https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_six_color-32.png\" alt=\"\" matTooltip=\"Github\"\r\n\t\t matTooltipPosition=\"above\">\r\n\t</a>\r\n\t<a [href]=\"facebookUrl\" target=\"_blank\">\r\n\t\t<img src=\"https://cdn3.iconfinder.com/data/icons/free-social-icons/67/Untitled-16-32.png\" alt=\"\" matTooltip=\"Facebook\" matTooltipPosition=\"above\">\r\n\t</a>\r\n    <a [href]=\"linkedinUrl\" target=\"_blank\">\r\n\t\t<img src=\"https://cdn3.iconfinder.com/data/icons/free-social-icons/67/Untitled-11-32.png\" alt=\"\" matTooltip=\"LinkedIn\" matTooltipPosition=\"above\">\r\n\t</a>\r\n\t<span class=\"fill-space\"></span>\r\n</mat-toolbar>\r\n<p class=\"footer\">Copyright &copy; 2021 All Rights Reserved by\r\n    <a href=\"https://github.com/Shrey-1123\">Shrey Kumar</a>.\r\n</p>");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<section fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"banner\">\r\n\r\n    <div fxFlex.gt-sm=\"50\" fxLayout=\"column\" fxLayoutAlign=\"center left\" class=\"textbox\" >\r\n        \r\n        \r\n        <h1 class=\"typing mat-display-3\"></h1>\r\n\r\n        \r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <img  fxFlex=\"40\" [src]=\"content.top.image\"/>\r\n\r\n</section>\r\n");

/***/ }),

/***/ "Gmv5":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle {\r\n    margin: 2em 0 2em 0;\r\n  }\r\n  .fancy {\r\n    line-height: 0.5;\r\n    text-align: center;\r\n  }\r\n  .fancy span {\r\n    display: inline-block;\r\n    position: relative;  \r\n  }\r\n  .fancy span:before,\r\n  .fancy span:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 5px;\r\n    border-bottom: 1px solid black;\r\n    border-top: 1px solid black;\r\n    top: 0;\r\n    width: 600px;\r\n  }\r\n  .fancy span:before {\r\n    right: 100%;\r\n    margin-right: 15px;\r\n  }\r\n  .fancy span:after {\r\n    left: 100%;\r\n    margin-left: 15px;\r\n  }\r\n  .wrapper {\r\n    margin-top: 2rem;\r\n    display: grid ;\r\n    grid-gap: 35px;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr) ) ;\r\n    background-color:transparent;\r\n    color: #444;\r\n    margin-left: 2rem;\r\n    overflow:hidden;\r\n    overscroll-behavior-y: ease;\r\n    min-height: 200px;\r\n    \r\n  }\r\n  .box {\r\n    background-color: #444;\r\n    color: #fff;\r\n    border-radius: 15px;\r\n    padding: 20px;\r\n    font-size: 150%;\r\n    justify-content:center;\r\n\r\n  }\r\n  img{ \r\n      height:90px;\r\n      width:70px;\r\n  }\r\n  .mat-tab-body-content{\r\n    overflow:hidden;\r\n  }\r\n  .Interests{\r\n    \r\n    height: 100px;\r\n    width: 180px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixNQUFNO0lBQ04sWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0VBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCw4REFBOEQ7SUFDOUQsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixpQkFBaUI7O0VBRW5CO0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjs7RUFFeEI7RUFDQTtNQUNJLFdBQVc7TUFDWCxVQUFVO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsWUFBWTtFQUNkIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogMmVtIDAgMmVtIDA7XHJcbiAgfVxyXG4gIC5mYW5jeSB7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZmFuY3kgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICB9XHJcbiAgLmZhbmN5IHNwYW46YmVmb3JlLFxyXG4gIC5mYW5jeSBzcGFuOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgLmZhbmN5IHNwYW46YmVmb3JlIHtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuZmFuY3kgc3BhbjphZnRlciB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQgO1xyXG4gICAgZ3JpZC1nYXA6IDM1cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMmZyKSApIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBlYXNlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICB9XHJcbiAgaW1neyBcclxuICAgICAgaGVpZ2h0OjkwcHg7XHJcbiAgICAgIHdpZHRoOjcwcHg7XHJcbiAgfVxyXG4gIC5tYXQtdGFiLWJvZHktY29udGVudHtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLkludGVyZXN0c3tcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "Lgup":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"row\" fxLayoutAlign=\"center left\" class=\"banner\">\n\n    <div fxFlex.gt-sm=\"50\" fxLayout=\"column\" fxLayoutAlign=\"left left\" class=\"textbox\" >\n        \n        \n        <h1 class=\"subtitle fancy\"><span>Skills & Interests</span></h1>\n        <mat-tab-group mat-align-tabs=\"center\" animationDuration=\"1500ms\">\n            <mat-tab label=\"Skills\">\n                <div cdkscrollable=\"\" class=\"mat-tab-body-content ng-tns-c68-5 ng-trigger ng-trigger-translateTab\" style=\"overflow:hidden\">\n                        <div class=\"wrapper\">\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/color/144/000000/html-5--v1.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/color/144/000000/css3.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/color/144/000000/javascript.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/color/144/000000/angularjs.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/dusk/128/000000/php-logo.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"assets/img/LOGOS/dotnet.svg\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/color/144/000000/spring-logo.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/color/144/000000/git.png\"/>\n                            </div>\n                            <div class=\"box\" fxLayout=\"center center\">\n                                <img src=\"https://img.icons8.com/ios/150/000000/java-coffee-cup-logo--v2.png\"/>\n                            </div>\n                        </div>\n                    </div> \n            </mat-tab>\n            <mat-tab label=\"Interests\">\n                <div cdkscrollable=\"\" class=\"mat-tab-body-content ng-tns-c68-5 ng-trigger ng-trigger-translateTab\" style=\"overflow:hidden\">\n                    <div class=\"wrapper\">\n                        <div class=\"box\">\n                            <img class=\"Interests\" src=\"assets/img/webdev.png\"/>\n                        </div>\n                        <div class=\"box\">\n                            <img  class=\"Interests\" src=\"assets/img/devops.jfif\"/>\n                        </div>\n                        <div class=\"box\">\n                            <img  class=\"Interests\" src=\"assets/img/backend.jfif\"/>\n                        </div>\n                        <div class=\"box\">\n                            <img  class=\"Interests\" src=\"assets/img/sysdesign.jfif\"/>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n        \n        \n\n\n\n\n    </div>\n\n  \n\n</section>\n");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\r\n    position: relative;\r\n   \r\n\r\n    width: 100%;\r\n    height: 80vh;\r\n    min-height: 660px;\r\n    max-height: 560px;\r\n\r\n  \r\n\r\n   \r\n  }\r\n\r\n  .textbox { \r\n      \r\n    box-sizing: border-box;\r\n    padding: 25px; \r\n\r\n    \r\n\r\n   \r\n  }\r\n\r\n  .title{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-shadow: 2px 2px 3px rgb(4, 4, 129);\r\n    color:rgb(128, 128, 245);\r\n    position: relative;\r\n    margin-bottom: 3%;\r\n  }\r\n\r\n  .typing {\r\n    \r\n   \r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-shadow: 2px 2px 3px rgb(4, 4, 129);\r\n    color:rgb(128, 128, 245);\r\n    position: relative;\r\n    \r\n  }\r\n\r\n  .typing::after{\r\n      margin-left: 6px;\r\n      content: \"\";\r\n      position: absolute;\r\n      width: 1px;\r\n      height:50px; \r\n      border-right: 2px solid rgb(7, 1, 24);\r\n      animation: blink 0.5s infinite ease;\r\n  }\r\n\r\n  @keyframes blink{\r\n      0%{\r\n          opacity: 0;\r\n      }\r\n      100%{\r\n          opacity: 1;\r\n      }\r\n  }\r\n\r\n  p { \r\n    text-align: justify;\r\n    text-indent: justify;\r\n    font-size: x-large;\r\n    word-spacing: 0em;\r\n    color: rgb(46, 98, 100);\r\n    \r\n   }\r\n\r\n  img:hover{\r\n    transform: scale(1.2,1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n   }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7O0lBR2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjs7Ozs7RUFLbkI7O0VBRUE7O0lBRUUsc0JBQXNCO0lBQ3RCLGFBQWE7Ozs7O0VBS2Y7O0VBQ0E7SUFDRSx5Q0FBeUM7SUFDekMsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRSx5Q0FBeUM7SUFDekMsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixrQkFBa0I7O0VBRXBCOztFQUNBO01BQ0ksZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxxQ0FBcUM7TUFDckMsbUNBQW1DO0VBQ3ZDOztFQUNBO01BQ0k7VUFDSSxVQUFVO01BQ2Q7TUFDQTtVQUNJLFVBQVU7TUFDZDtFQUNKOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1Qjs7R0FFeEI7O0VBRUE7SUFDQyx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLG9DQUFvQztHQUNyQyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgXHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBtaW4taGVpZ2h0OiA2NjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDU2MHB4O1xyXG5cclxuICBcclxuXHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLnRleHRib3ggeyBcclxuICAgICAgXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMjVweDsgXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuICB9ICAgXHJcbiAgLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDQsIDQsIDEyOSk7XHJcbiAgICBjb2xvcjpyZ2IoMTI4LCAxMjgsIDI0NSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB9XHJcblxyXG4gIC50eXBpbmcge1xyXG4gICAgXHJcbiAgIFxyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDQsIDQsIDEyOSk7XHJcbiAgICBjb2xvcjpyZ2IoMTI4LCAxMjgsIDI0NSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICB9XHJcbiAgLnR5cGluZzo6YWZ0ZXJ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OjUwcHg7IFxyXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoNywgMSwgMjQpO1xyXG4gICAgICBhbmltYXRpb246IGJsaW5rIDAuNXMgaW5maW5pdGUgZWFzZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBibGlua3tcclxuICAgICAgMCV7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCV7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBwIHsgXHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgdGV4dC1pbmRlbnQ6IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDBlbTtcclxuICAgIGNvbG9yOiByZ2IoNDYsIDk4LCAxMDApO1xyXG4gICAgXHJcbiAgIH1cclxuXHJcbiAgIGltZzpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "RzDo":
/*!************************************************************!*\
  !*** ./src/app/accomplishment/accomplishment.component.ts ***!
  \************************************************************/
/*! exports provided: AccomplishmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccomplishmentComponent", function() { return AccomplishmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accomplishment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accomplishment.component.html */ "jzEQ");
/* harmony import */ var _accomplishment_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accomplishment.component.css */ "s1ZI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AccomplishmentComponent = class AccomplishmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccomplishmentComponent.ctorParameters = () => [];
AccomplishmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accomplishment',
        template: _raw_loader_accomplishment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accomplishment_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccomplishmentComponent);



/***/ }),

/***/ "S9uk":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-tab-group {\r\n    margin-bottom: 48px;\r\n    position: relative;\r\n  }\r\n\r\n  .subtitle {\r\n    margin: 2em 0 2em 0;\r\n  }\r\n\r\n  .fancy {\r\n    line-height: 0.5;\r\n    text-align: center;\r\n  }\r\n\r\n  .fancy span {\r\n    display: inline-block;\r\n    position: relative;  \r\n  }\r\n\r\n  .fancy span:before,\r\n  .fancy span:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 5px;\r\n    border-bottom: 1px solid black;\r\n    border-top: 1px solid black;\r\n    top: 0;\r\n    width: 600px;\r\n  }\r\n\r\n  .fancy span:before {\r\n    right: 100%;\r\n    margin-right: 15px;\r\n  }\r\n\r\n  .fancy span:after {\r\n    left: 100%;\r\n    margin-left: 15px;\r\n  }\r\n\r\n  .content {\r\n    padding: 16px;\r\n}\r\n\r\n  .content > mat-card {\r\n    margin-bottom: 16px;\r\n    display: flex;\r\n}\r\n\r\n  .column-label {\r\n    margin-right: 8px;\r\n    font-size: 1rem;\r\n}\r\n\r\n  .mat-card{\r\n    overflow: hidden;\r\n    background: transparent;\r\n    border-radius: 15px;\r\n    transition: 0.4s ease-out;\r\n    justify-content:center;\r\n}\r\n\r\n  .card{\r\n    object-fit: cover;\r\n    justify-content:center;\r\n    width: 290px;\r\n    height: 390px;\r\n    border-radius: 15px;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    transition: 0.4s ease-out;\r\n    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);\r\n    background:rgba(247, 159, 225, 0.8);\r\n    box-shadow:  0 4px 8px 0 rgba(15, 11, 231, 0.904), 0 6px 20px 0 rgba(240, 6, 96, 0.966);\r\n}\r\n\r\n  .card:hover {\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  .card:hover:before {\r\n    opacity: 1;\r\n  }\r\n\r\n  .card:hover .info {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .card:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 15px;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    z-index: 2;\r\n    transition: 0.5s;\r\n    opacity: 0;\r\n  }\r\n\r\n  .card img {\r\n    \r\n    width: 280px;\r\n    height: 360px;\r\n    border-radius: 15px;\r\n    object-fit: cover;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin-left:5px\r\n\r\n   \r\n    \r\n   \r\n    \r\n  }\r\n\r\n  .card .info {\r\n\r\n    margin-top:0px;\r\n    position: relative;\r\n    z-index: 3;\r\n    color: white;\r\n    opacity: 0;\r\n    transform: translateY(50px);\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .info-btn {\r\n\r\n    padding: 0.6rem;\r\n    outline: none;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background: white;\r\n    color: black;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: 0.4s ease;\r\n    margin-right: 90px;\r\n  }\r\n\r\n  .info-btn:hover {\r\n    background: rgb(226, 21, 31);\r\n    color: white;\r\n  }\r\n\r\n  .modal{\r\n    background:black;\r\n    color: white;\r\n  }\r\n\r\n  .modal-body{\r\n    background-image: url('bgimg.3296ebbe2e50c33a7e36.jpg');\r\n    color: white;\r\n    \r\n  }\r\n\r\n  .modal-footer{\r\n    background-image: url('bgimg.3296ebbe2e50c33a7e36.jpg');\r\n  }\r\n\r\n  .modal-header{\r\n    background-color: black;color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBQ0E7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixNQUFNO0lBQ04sWUFBWTtFQUNkOztFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUY7SUFDSSxhQUFhO0FBQ2pCOztFQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0VBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0VBQ0E7SUFHSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0lBQ25DLHVGQUF1RjtBQUMzRjs7RUFDQTtJQUNJLDJCQUEyQjtFQUM3Qjs7RUFDQTtJQUNFLFVBQVU7RUFDWjs7RUFDQTtJQUNFLFVBQVU7SUFDViwwQkFBMEI7RUFDNUI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFDQTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUVuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1A7Ozs7OztFQU1GOztFQUNBOztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjs7RUFFRjs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBQ0Y7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkOztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFHQTtJQUNFLHVEQUF5RDtJQUN6RCxZQUFZOztFQUVkOztFQUNBO0lBQ0UsdURBQXlEO0VBQzNEOztFQUNBO0lBQ0UsdUJBQXVCLENBQUMsWUFBWTtFQUN0QyIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDJlbSAwIDJlbSAwO1xyXG4gIH1cclxuLmZhbmN5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mYW5jeSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxyXG4gIH1cclxuICAuZmFuY3kgc3BhbjpiZWZvcmUsXHJcbiAgLmZhbmN5IHNwYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuICAuZmFuY3kgc3BhbjpiZWZvcmUge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5mYW5jeSBzcGFuOmFmdGVyIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGVudCA+IG1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sdW1uLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5tYXQtY2FyZHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG4uY2FyZHtcclxuICAgIFxyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgICBoZWlnaHQ6IDM5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgyNDcsIDE1OSwgMjI1LCAwLjgpO1xyXG4gICAgYm94LXNoYWRvdzogIDAgNHB4IDhweCAwIHJnYmEoMTUsIDExLCAyMzEsIDAuOTA0KSwgMCA2cHggMjBweCAwIHJnYmEoMjQwLCA2LCA5NiwgMC45NjYpO1xyXG59XHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbiAgLmNhcmQ6aG92ZXI6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyIC5pbmZvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbiAgLmNhcmQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5jYXJkIGltZyB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHhcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIC5jYXJkIC5pbmZvIHtcclxuXHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiBcclxuLmluZm8tYnRuIHtcclxuXHJcbiAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAgIG1hcmdpbi1yaWdodDogOTBweDtcclxuICB9XHJcbi5pbmZvLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI2LCAyMSwgMzEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5tb2RhbHtcclxuICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL3BvcnRmb2xpby9iZ2ltZy5qcGcpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5tb2RhbC1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvcG9ydGZvbGlvL2JnaW1nLmpwZyk7XHJcbiAgfVxyXG4gIC5tb2RhbC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "SECP":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .filler {\r\n    flex: 1 1 auto;\r\n }\r\n .gap {\r\n    margin-right: 10px;\r\n }\r\n .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  .navitems{\r\n      margin-right: 50%;\r\n  }\r\n  .example-container{\r\n\r\n    height : calc(100vh -65px);\r\n  }\r\n\r\n  mat-sidenav{\r\n      margin: 16px;\r\n      width: 200px;\r\n      border-right: none;\r\n      background : #002b5c;\r\n      color : white;\r\n      border-radius: 10px;\r\n      padding : 16px;\r\n      text-align: center;\r\n\r\n  }\r\n  #profile1{\r\n    border-radius:50%;\r\n  }\r\n  .name\r\n  {\r\n  \r\n    margin: 0;\r\n    margin-top:8px;\r\n    font-weight: normal;\r\n    \r\n  }\r\n  .designation{\r\n    margin-top: 2px;\r\n    font-size: 0.9rem;\r\n    color: lightgrey;\r\n    border-bottom: 1px solid;\r\n  }\r\n  .home{\r\n    margin-top: 2px;\r\n  }\r\n\r\n  mat-divider{\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255,255,255,0.5);\r\n  }\r\n   */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzREkiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZmlsbGVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gfVxyXG4gLmdhcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiB9XHJcbiAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC5uYXZpdGVtc3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lcntcclxuXHJcbiAgICBoZWlnaHQgOiBjYWxjKDEwMHZoIC02NXB4KTtcclxuICB9XHJcblxyXG4gIG1hdC1zaWRlbmF2e1xyXG4gICAgICBtYXJnaW46IDE2cHg7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kIDogIzAwMmI1YztcclxuICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZyA6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG4gICNwcm9maWxlMXtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIH1cclxuICAubmFtZVxyXG4gIHtcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIFxyXG4gIH1cclxuICAuZGVzaWduYXRpb257XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgfVxyXG4gIC5ob21le1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWRpdmlkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICB9XHJcbiAgICovIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");





let AppComponent = class AppComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.title = 'PotrfolioApp';
    }
    ngOnInit() {
        this.showSpinner();
    }
    showSpinner() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 3000);
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-profile></app-profile>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "fMGI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);







let ProfileComponent = class ProfileComponent {
    constructor() {
        this.opened = false;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_4__["init"]();
    }
    onResize(event) {
        if (event.target.innerWidth > 960) {
        }
        if (event.target.innerWidth < 960) {
        }
    }
    IOpen() {
        if (this.opened === false) {
            this.opened = true;
        }
        else {
            this.opened = false;
        }
        //console.log(this.opened);
    }
    toaccomplishment() {
        this.accomplishment.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start", });
    }
    tohome() {
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start", });
    }
    toabout() {
        this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start", });
    }
    toskill() {
        this.skill.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start", });
    }
    tocontact() {
        this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start", });
    }
    toproject() {
        this.project.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start", });
    }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['sidenav',] }],
    home: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['one',] }],
    about: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['two',] }],
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['three',] }],
    accomplishment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['four',] }],
    skill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['five',] }],
    contact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['six',] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _headers_headers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./headers/headers.component */ "jA33");
/* harmony import */ var _footers_footers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footers/footers.component */ "u0Wp");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _accomplishment_accomplishment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./accomplishment/accomplishment.component */ "RzDo");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");






















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_12__["ProjectsComponent"],
            _headers_headers_component__WEBPACK_IMPORTED_MODULE_13__["HeadersComponent"],
            _footers_footers_component__WEBPACK_IMPORTED_MODULE_14__["FootersComponent"],
            _accomplishment_accomplishment_component__WEBPACK_IMPORTED_MODULE_17__["AccomplishmentComponent"],
            _skills_skills_component__WEBPACK_IMPORTED_MODULE_18__["SkillsComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "aMQp":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<Section fxLayout=\"column\" fxlayoutalign=\"center center\" class=\"outersection\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex.gt-sm=\"10\">\r\n    <h1 class=\"subtitle fancy\"><span>Recent Projects</span></h1>\r\n    <div class=\"project-tabs\" fxlayout=\"column wrapper\" fxlayoutalign=\"center left\" fxFlex.gt-sm=\"10\">\r\n      <mat-tab-group mat-align-tabs=\"center\" animationDuration=\"1500ms\">\r\n        <mat-tab label=\"ALL\">\r\n          <div cdkscrollable=\"\" class=\"mat-tab-body-content ng-tns-c68-2 ng-trigger ng-trigger-translateTab\" style=\"overflow: hidden;\">\r\n            <!--container-->\r\n            <div class=\"content\">\r\n              <div class=\"cardbox\" fxLayout=\"row wrapper\" fxLayoutGap=\"16px grid\">\r\n                <div *ngFor=\"let project of projects\">\r\n                  <mat-card class=\"mat-elevation-z4\">\r\n                    <div class=\"card\">\r\n                      <img mat-card-image src={{project.imgURL}}>\r\n                      <div class=\"info\">\r\n                        <button class=\"info-btn\" (click)=\"openModalWithClass(template)\">Learn more</button>\r\n                      </div>\r\n                    </div>\r\n                  </mat-card>\r\n                  <!--Modal template starts-->\r\n                  <ng-template data-aos=\"fade-in\" class=\"modal\" #template>  \r\n                    <div class=\"modal-header\">  \r\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">                   \r\n                        <span aria-hidden=\"true\">??</span>  \r\n                      </button>  \r\n                    </div>\r\n                    <div class=\"modal-body\">  \r\n                      <div  class=\"portfolio-details\">\r\n                        <div class=\"container\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-8\">\r\n                              <h2 class=\"portfolio-title\">{{project.Name}}</h2>\r\n                              <div class=\"portfolio-details-slider swiper-container\">\r\n                                <div class=\"swiper-wrapper align-items-center\">\r\n                                  <div class=\"swiper-slide\">\r\n                                    <img src={{project.imgURL}} alt=\"\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"swiper-pagination\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 portfolio-info\">\r\n                              <h3>Project information</h3>\r\n                              <ul>\r\n                                <li><strong>Category</strong>: {{project.Name}}</li>\r\n                                <li><strong>Project date</strong>: Jul, 2020</li>\r\n                                <li><strong>Project URL</strong>: <a href={{project.URL}}>View Demo</a></li>\r\n                              </ul>\r\n                              <p>\r\n                               {{project.Description}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div><!-- End Portfolio Details -->\r\n                    </div>       \r\n                    <div class=\"modal-footer\">    \r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"modalRef.hide()\">Close</button>  \r\n                    </div>  \r\n                  </ng-template> \r\n                  <!--Modal template ends-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n        </mat-tab>\r\n        <mat-tab label=\"PHP/JAVASCRIPT\">\r\n          <div cdkscrollable=\"\" class=\"mat-tab-body-content ng-tns-c68-2 ng-trigger ng-trigger-translateTab\" style=\"overflow: hidden;\">\r\n            <div data-aos=\"fade-in\" class=\"content\">\r\n              <div fxLayout=\"row wrapper\" fxLayoutGap=\"16px grid\">\r\n                <div *ngFor=\"let project of projects\">\r\n                  <div class=\"cardbox\" *ngIf=\"project.Category==='PHP/JAVASCRIPT'\">\r\n                    <mat-card class=\"mat-elevation-z4\">\r\n                      <div class=\"card\">\r\n                        <img mat-card-image src={{project.imgURL}}>\r\n                        <div class=\"info\">\r\n                          <button class=\"info-btn\" (click)=\"openModalWithClass(template)\">Learn more</button>\r\n                        </div>\r\n                      </div>\r\n                    </mat-card>\r\n                     <!--Modal template starts-->\r\n                  <ng-template data-aos=\"fade-in\" class=\"modal\" #template>  \r\n                    <div class=\"modal-header\">  \r\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">                   \r\n                        <span aria-hidden=\"true\">??</span>  \r\n                      </button>  \r\n                    </div>\r\n                    <div class=\"modal-body\">  \r\n                      <div  class=\"portfolio-details\">\r\n                        <div class=\"container\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-8\">\r\n                              <h2 class=\"portfolio-title\">{{project.Name}}</h2>\r\n                              <div class=\"portfolio-details-slider swiper-container\">\r\n                                <div class=\"swiper-wrapper align-items-center\">\r\n                                  <div class=\"swiper-slide\">\r\n                                    <img src=\"assets/img/portfolio/project.png\" alt=\"\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"swiper-pagination\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 portfolio-info\">\r\n                              <h3>Project information</h3>\r\n                              <ul>\r\n                                <li><strong>Category</strong>: {{project.Name}}</li>\r\n                                <li><strong>Project date</strong>: Jul, 2020</li>\r\n                                <li><strong>Project URL</strong>: <a href={{project.URL}}>View demo</a></li>\r\n                              </ul>\r\n                              <p>\r\n                               {{project.Description}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div><!-- End Portfolio Details -->\r\n                    </div>       \r\n                    <div class=\"modal-footer\">    \r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"modalRef.hide()\">Close</button>  \r\n                    </div>  \r\n                  </ng-template> \r\n                  <!--Modal template ends-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </mat-tab>\r\n        <mat-tab label=\"ANGULAR/.NET/OTHERS\">\r\n          <div cdkscrollable=\"\" class=\"mat-tab-body-content ng-tns-c68-2 ng-trigger ng-trigger-translateTab\" style=\"overflow: hidden;\">\r\n            <div data-aos=\"fade-in\" class=\"content\">\r\n              <div fxLayout=\"row wrapper\" fxLayoutGap=\"16px grid\">\r\n                <div class=\"cardbox\" *ngFor=\"let project of projects\">\r\n                  <div *ngIf=\"project.Category==='ANGULAR/.NET/OTHERS'\">\r\n                    <mat-card class=\"mat-elevation-z4\">\r\n                      <div class=\"card\">\r\n                        <img mat-card-image src={{project.imgURL}}>\r\n                        <div class=\"info\">\r\n                          <button class=\"info-btn\" (click)=\"openModalWithClass(template)\">Learn more</button>\r\n                        </div>\r\n                      </div>\r\n                    </mat-card>\r\n                       <!--Modal template starts-->\r\n                  <ng-template data-aos=\"fade-in\" class=\"modal\" #template>  \r\n                    <div class=\"modal-header\">  \r\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">                   \r\n                        <span aria-hidden=\"true\">??</span>  \r\n                      </button>  \r\n                    </div>\r\n                    <div class=\"modal-body\">  \r\n                      <div  class=\"portfolio-details\">\r\n                        <div class=\"container\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-8\">\r\n                              <h2 class=\"portfolio-title\">{{project.Name}}</h2>\r\n                              <div class=\"portfolio-details-slider swiper-container\">\r\n                                <div class=\"swiper-wrapper align-items-center\">\r\n                                  <div class=\"swiper-slide\">\r\n                                    <img src={{project.imgURL}} alt=\"\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"swiper-pagination\"></div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 portfolio-info\">\r\n                              <h3>Project information</h3>\r\n                              <ul>\r\n                                <li><strong>Category</strong>: {{project.Name}}</li>\r\n                                <li><strong>Project date</strong>: Jul, 2020</li>\r\n                                <li><strong>Project URL</strong>: <a href={{project.URL}}>View demo</a></li>\r\n                              </ul>\r\n                              <p>\r\n                               {{project.Description}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div><!-- End Portfolio Details -->\r\n                    </div>       \r\n                    <div class=\"modal-footer\">    \r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"modalRef.hide()\">Close</button>  \r\n                    </div>  \r\n                  </ng-template> \r\n                  <!--Modal template ends-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</Section>");

/***/ }),

/***/ "bYh+":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/headers/headers.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>headers works!</p>\n");

/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "BGiY");
/* harmony import */ var _contact_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.css */ "e+VI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactComponent);



/***/ }),

/***/ "e+VI":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    background-color: #ffffff;\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    min-height: 560px;\r\n    min-width: 370px;\r\n    margin-top: 2rem;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n  \r\n  h2 {\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-container {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  .left-container {\r\n    overflow: hidden;\r\n    flex: 1;\r\n    min-height: 560px;\r\n    margin-left: 0%;\r\n    min-width: 380px;\r\n    background-image: url('pexels-pixabay-414645.09e3176b2186d21cdf35.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n\r\n  }\r\n  \r\n  .right-container {\r\n    display: flex;\r\n    flex: 1;\r\n    height: 460px;\r\n    background-color: #ffffff;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .right-inner-container {\r\n    width: 70%;\r\n    height: 80%;\r\n    text-align: center;\r\n  }\r\n  \r\n  input, textarea {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 12px 15px;\r\n    margin: 8px 0;\r\n    width: 100%;\r\n    font-size: 0.8rem;\r\n  }\r\n  \r\n  input:focus, textarea:focus {\r\n    outline: 1px solid #00b4cf;\r\n  }\r\n  \r\n  button {\r\n    border-radius: 20px;\r\n    border: 1px solid #00b4cf;\r\n    background-color: #00b4cf;\r\n    color: #FFFFFF;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    padding: 12px 45px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    transition: transform 80ms ease-in;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button:hover {\r\n    opacity: 0.7;\r\n  }\r\n  \r\n  @media only screen and (max-width: 600px) {\r\n    .left-container {\r\n      display: none;\r\n    }\r\n  \r\n    .lg-view {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (min-width: 600px) {\r\n    .sm-view {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  form p {\r\n    text-align: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1RUFBZ0g7SUFDaEgsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQ0FBa0M7O0VBRXBDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLE9BQU87SUFDUCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBS0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFHQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGFBQWE7SUFDZjtFQUNGOztFQUNBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7RUFDRjs7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NjBweDtcclxuICAgIG1pbi13aWR0aDogMzcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAubGVmdC1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4taGVpZ2h0OiA1NjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIG1pbi13aWR0aDogMzgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJEOi9PbiBQcm9ncmVzcyBQcm9qZWN0cy9Qb3J0Zm9saW8vUG90cmZvbGlvQXBwL3NyYy9hc3NldHMvaW1nL3BleGVscy1waXhhYmF5LTQxNDY0NS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblxyXG4gIH1cclxuICBcclxuICAucmlnaHQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgaGVpZ2h0OiA0NjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG5cclxuIFxyXG4gIFxyXG4gIC5yaWdodC1pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMDBiNGNmO1xyXG4gIH1cclxuICBcclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGI0Y2Y7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiNGNmO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEycHggNDVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmxlZnQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5sZy12aWV3IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnNtLXZpZXcge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3JtIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9Il19 */");

/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skills_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skills.component.html */ "Lgup");
/* harmony import */ var _skills_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.component.css */ "Gmv5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillsComponent.ctorParameters = () => [];
SkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skills',
        template: _raw_loader_skills_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skills_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SkillsComponent);



/***/ }),

/***/ "fMGI":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filler {\r\n    flex: 1 1 auto;\r\n }\r\n .gap {\r\n    margin-right: 10px;\r\n }\r\n .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n .apptoolbar{\r\n      \r\n      position: sticky;\r\n      position: -webkit-sticky; /* For macOS/iOS Safari */\r\n      top: 0; /* Sets the sticky toolbar to be on top */\r\n      z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n      \r\n\r\n  }\r\n .nav{\r\n    background: linear-gradient(-1deg, #f1977c, #e678a2, #8dd2eb, #82ebd2);\r\n    animation: grad 15s ease infinite;\r\n  }\r\n @keyframes grad {\r\n    0% {\r\n        background-position: 0% 5%;\r\n    }\r\n    5% {\r\n        background-position: 10% 5%;\r\n    }\r\n    10% {\r\n        background-position: 0% 5%;\r\n    }\r\n}\r\n .navitems{\r\n      margin-right: 50%;\r\n  }\r\n .example-container{\r\n\r\n    height : calc(100vh -65px);\r\n    /* background: -webkit-linear-gradient(rgba(16, 13, 185, 0.7), rgba(255, 255, 255, 0.637)); */\r\n\r\n    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\r\n    background-size: 400% 400%;\r\n    animation: gradient 15s ease infinite;\r\n  }\r\n @keyframes gradient {\r\n    0% {\r\n        background-position: 0% 50%;\r\n    }\r\n    50% {\r\n        background-position: 100% 50%;\r\n    }\r\n    100% {\r\n        background-position: 0% 50%;\r\n    }\r\n}\r\n mat-sidenav{\r\n\r\n      overflow: hidden;\r\n      width: -webkit-fit-content;\r\n      width: -moz-fit-content;\r\n      width: fit-content;\r\n      width: 200px;\r\n      border-right: none;\r\n      background : #0a336198;\r\n      color : white;\r\n      border-radius: 10px;\r\n      padding : 16px;\r\n      text-align: center;\r\n\r\n  }\r\n #profile1{\r\n    border-radius:50%;\r\n  }\r\n #profile1:hover{\r\n    transform: scale(1.2,1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n  }\r\n .name\r\n  {\r\n  \r\n    margin: 0;\r\n    margin-top:8px;\r\n    font-weight: normal;\r\n    \r\n  }\r\n .designation{\r\n    margin-top: 2px;\r\n    font-size: 0.9rem;\r\n    color: lightgrey;\r\n    border-bottom: 1px solid;\r\n  }\r\n .home{\r\n    margin-top: 2px;\r\n  }\r\n mat-divider{\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255,255,255,0.5);\r\n  }\r\n .about{\r\n    z-index: -1;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7Q0FDQTtJQUNHLGtCQUFrQjtDQUNyQjtDQUNBO0lBQ0csY0FBYztFQUNoQjtDQUNBOztNQUVJLGdCQUFnQjtNQUNoQix3QkFBd0IsRUFBRSx5QkFBeUI7TUFDbkQsTUFBTSxFQUFFLHlDQUF5QztNQUNqRCxhQUFhLEVBQUUsK0RBQStEOzs7RUFHbEY7Q0FDQTtJQUNFLHNFQUFzRTtJQUN0RSxpQ0FBaUM7RUFDbkM7Q0FDQTtJQUNFO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0NBQ0U7TUFDSSxpQkFBaUI7RUFDckI7Q0FDQTs7SUFFRSwwQkFBMEI7SUFDMUIsNkZBQTZGOztJQUU3Rix1RUFBdUU7SUFDdkUsMEJBQTBCO0lBQzFCLHFDQUFxQztFQUN2QztDQUVBO0lBQ0U7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7Q0FFRTs7TUFFSSxnQkFBZ0I7TUFDaEIsMEJBQWtCO01BQWxCLHVCQUFrQjtNQUFsQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixjQUFjO01BQ2Qsa0JBQWtCOztFQUV0QjtDQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0NBQ0E7SUFDRSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLG9DQUFvQztFQUN0QztDQUNBOzs7SUFHRSxTQUFTO0lBQ1QsY0FBYztJQUNkLG1CQUFtQjs7RUFFckI7Q0FDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtFQUMxQjtDQUNBO0lBQ0UsZUFBZTtFQUNqQjtDQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1Q0FBdUM7RUFDekM7Q0FDQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbGVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gfVxyXG4gLmdhcCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiB9XHJcbiAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC5hcHB0b29sYmFye1xyXG4gICAgICBcclxuICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBGb3IgbWFjT1MvaU9TIFNhZmFyaSAqL1xyXG4gICAgICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG4gICAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbiAgICAgIFxyXG5cclxuICB9XHJcbiAgLm5hdntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMWRlZywgI2YxOTc3YywgI2U2NzhhMiwgIzhkZDJlYiwgIzgyZWJkMik7XHJcbiAgICBhbmltYXRpb246IGdyYWQgMTVzIGVhc2UgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZ3JhZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNSU7XHJcbiAgICB9XHJcbiAgICA1JSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAlIDUlO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1JTtcclxuICAgIH1cclxufVxyXG4gIC5uYXZpdGVtc3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNvbnRhaW5lcntcclxuXHJcbiAgICBoZWlnaHQgOiBjYWxjKDEwMHZoIC02NXB4KTtcclxuICAgIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoMTYsIDEzLCAxODUsIDAuNyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MzcpKTsgKi9cclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZWU3NzUyLCAjZTczYzdlLCAjMjNhNmQ1LCAjMjNkNWFiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xyXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZ3JhZGllbnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgbWF0LXNpZGVuYXZ7XHJcblxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kIDogIzBhMzM2MTk4O1xyXG4gICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nIDogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB9XHJcbiAgI3Byb2ZpbGUxe1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgfVxyXG4gICNwcm9maWxlMTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgLm5hbWVcclxuICB7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBcclxuICB9XHJcbiAgLmRlc2lnbmF0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIH1cclxuICAuaG9tZXtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcblxyXG4gIG1hdC1kaXZpZGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgfVxyXG4gIC5hYm91dHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");









const MaterialComponent = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            MaterialComponent
        ],
        exports: [MaterialComponent]
    })
], MaterialModule);



/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "keMZ");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.css */ "SECP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
        //console.log(this.opened);
    }
};
NavComponent.ctorParameters = () => [];
NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavComponent);



/***/ }),

/***/ "jA33":
/*!**********************************************!*\
  !*** ./src/app/headers/headers.component.ts ***!
  \**********************************************/
/*! exports provided: HeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersComponent", function() { return HeadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_headers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./headers.component.html */ "bYh+");
/* harmony import */ var _headers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers.component.css */ "9ih/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeadersComponent = class HeadersComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeadersComponent.ctorParameters = () => [];
HeadersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-headers',
        template: _raw_loader_headers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_headers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeadersComponent);



/***/ }),

/***/ "jzEQ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accomplishment/accomplishment.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxlayoutalign=\"center center\">\n    <div fxlayoutalign=\"center center\" class=\"container\">\n        <h1 class=\"subtitle fancy\"><span>Accomplishments</span></h1>\n        <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n           \n            <carousel [isAnimated]=\"true\" [pauseOnFocus]=\"true\">\n                <slide>\n                    <div class=\"carousel-caption\">\n                        <p>Shrey is very much intrigued into learning new technologies and gives his maximum effort wherever required. He can get \n                            the work done and is always ready to help his peers \n                            while doing so. He is a great asset to have.</p> \n                            <img src=\"https://avatars.githubusercontent.com/u/49820685?v=4\">\n                        <div id=\"image-caption\">\n                            Soma Ghosh\n                        </div>\n                        <a href=\"https://soma-ghosh.github.io/\">Visit this profile</a>\n                    </div>\n                </slide>\n                <slide>\n                    <div class=\"carousel-caption\">\n                        <p>Shrey is very much intrigued into learning new technologies and gives his maximum effort wherever required. He can get \n                            the work done and is always ready to help his peers \n                            while doing so. He is a great asset to have.</p> \n                            <img src=\"https://avatars.githubusercontent.com/u/49820685?v=4\">\n                        <div id=\"image-caption\">\n                            Soma Ghosh\n                        </div>\n                        <a href=\"https://soma-ghosh.github.io/\">Visit this profile</a>\n                    </div>\n                </slide>\n            </carousel>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "keMZ":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "qWbt":
/*!***********************************************!*\
  !*** ./src/app/footers/footers.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.footer{\r\n    overflow: hidden;\r\n    min-height: -webkit-fit-content;\r\n    min-height: -moz-fit-content;\r\n    min-height: fit-content;\r\n    padding: 10px 10px 10px 10px;\r\n    margin-bottom: 0%;\r\n    background:black;\r\n    color:white;\r\n    margin-top:0;\r\n    margin-right: 0;\r\n    text-align:Center;\r\n}\r\n\r\n.social > a img {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQXVCO0lBQXZCLDRCQUF1QjtJQUF2Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoiZm9vdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb290ZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOkNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbCA+IGEgaW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59Il19 */");

/***/ }),

/***/ "s1ZI":
/*!*************************************************************!*\
  !*** ./src/app/accomplishment/accomplishment.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#demo {\r\n    background: linear-gradient(112deg, #ffffff 50%, antiquewhite 50%);\r\n    max-width: 900px;\r\n    margin:auto;\r\n    margin-top:5rem;\r\n    \r\n}\r\n.subtitle {\r\n    margin: 0 0 2em 0;\r\n  }\r\n.fancy {\r\n    line-height: 0.5;\r\n    text-align: center;\r\n  }\r\n.fancy span {\r\n    display: inline-block;\r\n    position: relative;  \r\n  }\r\n.fancy span:before,\r\n  .fancy span:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 5px;\r\n    border-bottom: 1px solid black;\r\n    border-top: 1px solid black;\r\n    top: 0;\r\n    width: 600px;\r\n  }\r\n.fancy span:before {\r\n    right: 100%;\r\n    margin-right: 15px;\r\n  }\r\n.fancy span:after {\r\n    left: 100%;\r\n    margin-left: 15px;\r\n  }\r\n.carousel-caption {\r\n    position: initial;\r\n    z-index: 10;\r\n    padding: 5rem 8rem;\r\n    color: rgba(78, 77, 77, 0.856);\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    font-style: italic;\r\n    font-weight: bold;\r\n    line-height: 2rem\r\n}\r\n@media(max-width:767px) {\r\n    .carousel-caption {\r\n        position: initial;\r\n        z-index: 10;\r\n        padding: 3rem 2rem;\r\n        color: rgba(78, 77, 77, 0.856);\r\n        text-align: center;\r\n        font-size: 0.7rem;\r\n        font-style: italic;\r\n        font-weight: bold;\r\n        line-height: 1.5rem\r\n    }\r\n}\r\n.carousel-caption img {\r\n    width: 6rem;\r\n    border-radius: 5rem;\r\n    margin-top: 2rem\r\n}\r\n@media(max-width:767px) {\r\n    .carousel-caption img {\r\n        width: 4rem;\r\n        border-radius: 4rem;\r\n        margin-top: 1rem\r\n    }\r\n}\r\n#image-caption {\r\n    font-style: normal;\r\n    font-size: 1rem;\r\n    margin-top: 0.5rem\r\n}\r\n@media(max-width:767px) {\r\n    #image-caption {\r\n        font-style: normal;\r\n        font-size: 0.6rem;\r\n        margin-top: 0.5rem\r\n    }\r\n}\r\ni {\r\n    background-color: rgb(223, 56, 89);\r\n    padding: 1.4rem\r\n}\r\n@media(max-width:767px) {\r\n    i {\r\n        padding: 0.8rem\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tcGxpc2htZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrRUFBa0U7SUFDbEUsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0FBQ0E7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixNQUFNO0lBQ04sWUFBWTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQjtJQUNKO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CO0lBQ0o7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKO0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakI7SUFDSjtBQUNKO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEM7QUFDSjtBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0oiLCJmaWxlIjoiYWNjb21wbGlzaG1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZW1vIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTJkZWcsICNmZmZmZmYgNTAlLCBhbnRpcXVld2hpdGUgNTAlKTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6NXJlbTtcclxuICAgIFxyXG59XHJcbi5zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICB9XHJcbi5mYW5jeSB7XHJcbiAgICBsaW5lLWhlaWdodDogMC41O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZmFuY3kgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcclxuICB9XHJcbiAgLmZhbmN5IHNwYW46YmVmb3JlLFxyXG4gIC5mYW5jeSBzcGFuOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgLmZhbmN5IHNwYW46YmVmb3JlIHtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuZmFuY3kgc3BhbjphZnRlciB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZzogNXJlbSA4cmVtO1xyXG4gICAgY29sb3I6IHJnYmEoNzgsIDc3LCA3NywgMC44NTYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbiAgICAgICAgY29sb3I6IHJnYmEoNzgsIDc3LCA3NywgMC44NTYpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiBpbWcge1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbVxyXG4gICAgfVxyXG59XHJcblxyXG4jaW1hZ2UtY2FwdGlvbiB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgI2ltYWdlLWNhcHRpb24ge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW1cclxuICAgIH1cclxufVxyXG5cclxuaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCA1NiwgODkpO1xyXG4gICAgcGFkZGluZzogMS40cmVtXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "u0Wp":
/*!**********************************************!*\
  !*** ./src/app/footers/footers.component.ts ***!
  \**********************************************/
/*! exports provided: FootersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootersComponent", function() { return FootersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footers.component.html */ "CF56");
/* harmony import */ var _footers_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footers.component.css */ "qWbt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FootersComponent = class FootersComponent {
    constructor() {
        this.linkedinUrl = 'https://www.linkedin.com/in/shrey-kumar-992481185';
        this.facebookUrl = 'https://www.facebook.com';
        this.twitterUrl = 'https://twitter.com';
        this.githubUrl = 'https://github.com/Shrey-1123';
    }
    ngOnInit() {
    }
};
FootersComponent.ctorParameters = () => [];
FootersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footers',
        template: _raw_loader_footers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footers_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FootersComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(0,0,0,0.9)\" size=\"medium\"  color=\"#fff\" type=\"line-scale-party\" [fullScreen]=\"true\">\n    <p style=\"color: white\"></p>\n  </ngx-spinner>\n  \n  <mat-toolbar class=\"nav apptoolbar\" color=\"white\">\n    <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n      <button (click)=\"sidenav.toggle()\" (click)=\"IOpen()\" mat-icon-button color=\"success\"\n        aria-label=\"Example icon button with a menu icon\">\n        <mat-icon *ngIf=\"!opened\">menu</mat-icon>\n        <mat-icon *ngIf=\"opened\">close</mat-icon>\n      </button>\n    </div>\n  \n  \n    <span class=\"example-spacer\"></span>\n  \n    <div class=\"navitems\" fxShow=\"true\" fxHide.lt-md=\"true\">\n      <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n      <a (click)=\"tohome()\"  mat-button>Home</a>\n      <a (click)=\"toabout()\" mat-button>About</a>\n      <a (click)=\"toproject()\"  mat-button>Projects</a>\n      <a (click)=\"toaccomplishment()\" mat-button>Accomplishments</a>\n      <a (click)=\"toskill()\" mat-button>Skills</a>\n      <a (click)=\"tocontact()\" mat-button>Contact</a>\n  \n  \n    </div>\n    <div>\n      <a href=\"#\" mat-button>Shrey Kumar</a>\n    </div>\n  </mat-toolbar>\n  \n  \n  <mat-sidenav-container class=\"sidepart\"  class=\"example-container\" style=\"overflow: hidden;\">\n    <mat-sidenav #sidenav fxLayout=\"column\" mode=\"over\">\n      <img id=\"profile1\" class=\"avatar mat-elevation-z8\" src=\"./assets/Profile.jpg\">\n      <h4 class=\"name\">Shrey Kumar</h4>\n      <p class=\"designation\">Programmer Analyst</p>\n      <mat-divider></mat-divider>\n      <div fxLayout=\"column\">\n  \n      <a (click)=\"tohome()\"  mat-button>Home</a>\n      <a (click)=\"toabout()\" mat-button>About</a>\n      <a (click)=\"toproject()\"  mat-button>Projects</a>\n      <a (click)=\"toaccomplishment()\" mat-button>Accomplishments</a>\n      <a (click)=\"toskill()\" mat-button>Skills</a>\n      <a (click)=\"tocontact()\" mat-button>Contact</a>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content fxLayout=\"column\">\n       <!--main page content-->\n      <router-outlet></router-outlet>\n       <div #one data-aos=\"fade-right\">\n        <app-home></app-home>\n       </div>\n  \n       <div #two data-aos=\"fade-left\" class=\"sectionone\">\n        <app-about></app-about>\n       </div>\n  \n       <div #three data-aos=\"fade-right\" class=\"sectiontwo\">\n        <app-projects></app-projects>\n       </div>\n  \n       <div #four data-aos=\"fade-left\" class=\"sectionthree\">\n        <app-accomplishment></app-accomplishment>\n       </div>\n  \n       <div #five data-aos=\"fade-right\" class=\"sectionfour\">\n       <app-skills></app-skills>\n       </div>\n  \n       <div #six >\n        <app-contact></app-contact>\n       </div>\n       <app-footers fxFlexOffset=\"auto\"  style=\"overflow: hidden;\"></app-footers>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n");

/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projects.component.html */ "aMQp");
/* harmony import */ var _projects_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component.css */ "S9uk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");





let ProjectsComponent = class ProjectsComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.projects = [
            {
                Id: '1',
                Name: 'E-Commerce website',
                Category: 'PHP/JAVASCRIPT',
                Description: 'This is a php based web application which enables any user to make purchase products online. A user can perform various operations such as change password update password or make payment. I am using xaamp sever to create request response cycles using stateful http sessoins and MySQL to build the database in myphpAdmin. I am looking forward to add some more fatures in my website meanwhile i learn new technologies to make this more interactive and user friendly.',
                ShortDescription: 'An ecommerce website demo build using PHP',
                URL: 'http://lifestylestoreshreykumar.epizy.com',
                imgURL: 'assets/img/portfolio/project.png',
            },
            {
                Id: '2',
                Name: 'Dating App',
                Category: 'ANGULAR/.NET/OTHERS',
                Description: 'A dating website',
                ShortDescription: 'A test short Description for above project.........',
                URL: 'https://github.com/Shrey-1123/DatingAppDemo',
                imgURL: 'assets/img/portfolio/p1.jpg'
            }
        ];
    }
    ngOnInit() {
    }
    openModalWithClass(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
];
ProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_projects_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProjectsComponent);



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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
//# sourceMappingURL=main.049b8ea9008a50e09302.js.map