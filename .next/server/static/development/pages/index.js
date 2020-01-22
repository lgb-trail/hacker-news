module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-2412149375"
    }, __jsx("header", {
      className: "jsx-2412149375"
    }, __jsx("img", {
      src: "https://avatars0.githubusercontent.com/u/6485454?s=400&v=4",
      alt: "Logo",
      className: "jsx-2412149375" + " " + "logo"
    }), __jsx("div", {
      className: "jsx-2412149375" + " " + "logo-text"
    }, "NextJS PWA POC")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2412149375"
    }, "header{min-height:100px;background-color:#fff;border-bottom:5px solid #FF4F00;}.logo{height:100px;width:auto;display:inline;margin-top:20px;}.logo-text{display:inline-block;padding:10px;font-size:26px;font-weight:400;margin-top:50px;position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTG9sd2V0aHUuQm9uZ296YVxcRG9jdW1lbnRzXFxHaXRcXGhhY2tlci1uZXdzXFxwYWdlc1xcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQixBQUlzQixBQU1KLEFBUVEsYUFQVixJQU5XLElBY1QsR0FQRSxVQVFBLEtBZGlCLEFBT2hCLFVBUUEsTUFOcEIsVUFPb0IsTUFmcEIsVUFnQnNCLGtCQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXExvbHdldGh1LkJvbmdvemFcXERvY3VtZW50c1xcR2l0XFxoYWNrZXItbmV3c1xccGFnZXNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aGVhZGVyID5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cImh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjQ4NTQ1ND9zPTQwMCZ2PTRcIiBhbHQ9XCJMb2dvXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXRleHRcIj5OZXh0SlMgUFdBIFBPQzwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuPHN0eWxlIGdsb2JhbCBqc3g+IHtgXHJcblxyXG5oZWFkZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNGRjRGMDA7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Lolwethu.Bongoza\\\\Documents\\\\Git\\\\hacker-news\\\\pages\\\\header.js */"));
  }

});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _nextoffline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nextoffline */ "./pages/nextoffline.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps() {
    const storyReq = await fetch(`https://api.hackerwebapp.com/news`);
    const userReq = await fetch(`https://api.github.com/users`);
    const stories = await storyReq.json();
    const users = await userReq.json();
    return {
      stories,
      users
    };
  }

  render() {
    return __jsx(_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Latest News"
    }, __jsx(_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_nextoffline__WEBPACK_IMPORTED_MODULE_5__["default"], null), this.props.stories.map((story, index) => __jsx("section", {
      key: index,
      className: "jsx-1976870081" + " " + "story-card"
    }, __jsx("h2", {
      className: "jsx-1976870081"
    }, __jsx("a", {
      target: "_blank",
      href: story.url,
      className: "jsx-1976870081" + " " + "title-link"
    }, story.title.length < 45 ? story.title : story.title.substring(0, 45), "...")), __jsx("a", {
      target: "_blank",
      href: `https://avatars1.githubusercontent.com/u/${index}?v=4`,
      className: "jsx-1976870081"
    }, __jsx("img", {
      src: `https://avatars1.githubusercontent.com/u/${index}?v=4`,
      alt: story.user,
      className: "jsx-1976870081" + " " + "story-image"
    })), __jsx("div", {
      className: "jsx-1976870081" + " " + "posted-by"
    }, " posted by ", __jsx("span", {
      className: "jsx-1976870081"
    }, story.user ? story.user : 'anonymous', " | ", __jsx("a", {
      target: "_blank",
      href: `http://${story.domain}`,
      className: "jsx-1976870081" + " " + "domain-link"
    }, story.domain))), __jsx("p", {
      className: "jsx-1976870081"
    }, story.time_ago))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1976870081"
    }, "h2{font-weight:400;color:#333;font-size:16px;border-radius:10px;padding:10px;}.title-link{color:#fff;}.domain-link{color:#fff;}.posted-by{font-weight:300;color:#888;padding:15px 0;}p{font-weight:300;color:#999;}.story-card{padding:15px;border:1px solid #000;margin:15px;border-radius:15px;display:inline-block;width:100%;max-width:400px;background-color:#000;}.story-image{display:block;width:100%;height:auto;max-height:350px;}body{background:#fff;font-family:system-ui;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTG9sd2V0aHUuQm9uZ296YVxcRG9jdW1lbnRzXFxHaXRcXGhhY2tlci1uZXdzXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUdxQixBQVFOLEFBSUEsQUFJTSxBQU1BLEFBS0gsQUFXQyxBQU9FLFdBcENwQixBQUlBLEVBZTBCLENBV1osRUF0Q0MsQUFnQkEsQUFNQSxBQXVCVyxTQU5WLEVBdENHLEFBZ0JBLEFBTW5CLFFBS2dCLEVBWUssQ0FNUixJQTVDVSxBQWdCdkIsS0FXdUIsQUFrQnZCLE9BTndCLEFBQUMsT0F0Q1IsS0EyQlEsUUExQnpCLGFBMkJlLFdBQ0ssZ0JBQ00sc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTG9sd2V0aHUuQm9uZ296YVxcRG9jdW1lbnRzXFxHaXRcXGhhY2tlci1uZXdzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgTmV4dE9mZmxpbmUgZnJvbSAnLi9uZXh0b2ZmbGluZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cclxuICAgICAgICBjb25zdCBzdG9yeVJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKTtcclxuICAgICAgICBjb25zdCB1c2VyUmVxID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnNgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IHN0b3J5UmVxLmpzb24oKTtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHVzZXJSZXEuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7IHN0b3JpZXMsIHVzZXJzIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9XCJMYXRlc3QgTmV3c1wiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxOZXh0T2ZmbGluZSAvPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdG9yeS1jYXJkXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxhIGNsYXNzTmFtZT1cInRpdGxlLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZS5sZW5ndGggPCA0NSA/IHN0b3J5LnRpdGxlIDogc3RvcnkudGl0bGUuc3Vic3RyaW5nKDAsIDQ1KX0uLi48L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8ke2luZGV4fT92PTRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdG9yeS1pbWFnZVwiIHNyYz17YGh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvJHtpbmRleH0/dj00YH0gYWx0PXtzdG9yeS51c2VyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkLWJ5XCI+IHBvc3RlZCBieSA8c3Bhbj57c3RvcnkudXNlciA/IHN0b3J5LnVzZXIgOiAnYW5vbnltb3VzJ30gfCA8YSBjbGFzc05hbWU9XCJkb21haW4tbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwOi8vJHtzdG9yeS5kb21haW59YH0+e3N0b3J5LmRvbWFpbn08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeS50aW1lX2Fnb308L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuPHN0eWxlIGdsb2JhbCBqc3g+IHtgXHJcbmgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4gLnRpdGxlLWxpbmsge1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmRvbWFpbi1saW5rIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi5wb3N0ZWQtYnkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnN0b3J5LWNhcmQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnN0b3J5LWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDpcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Lolwethu.Bongoza\\\\Documents\\\\Git\\\\hacker-news\\\\pages\\\\index.js */"));
  }

});

/***/ }),

/***/ "./pages/layout.js":
/*!*************************!*\
  !*** ./pages/layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, this.props.title), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ff6600"
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: "/static/icon.png"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: "Hacker News"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), __jsx("meta", {
      name: "mobile-web-app-capable",
      content: "yes"
    }), __jsx("link", {
      rel: "manifest",
      href: "/manifest.webmanifest"
    })), this.props.children);
  }

});

/***/ }),

/***/ "./pages/nextoffline.js":
/*!******************************!*\
  !*** ./pages/nextoffline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_offline_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-offline/runtime */ "next-offline/runtime");
/* harmony import */ var next_offline_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_offline_runtime__WEBPACK_IMPORTED_MODULE_1__);



class NextOffline extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  componentDidMount() {
    Object(next_offline_runtime__WEBPACK_IMPORTED_MODULE_1__["register"])(); // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', function () {
    //         navigator.serviceWorker
    //             .register('/service-worker.js', { scope: '/' }).then(registration => {
    //                 console.log('Service worker registered', registration);
    //             }).catch((registrationError) => {
    //                 console.log('Service Worker registration failed: ', registrationError)
    //             });
    //     });
    // }
  }

  componentWillUnmount() {
    Object(next_offline_runtime__WEBPACK_IMPORTED_MODULE_1__["unregister"])();
  }

  render() {
    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NextOffline);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lolwethu.Bongoza\Documents\Git\hacker-news\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-offline/runtime":
/*!***************************************!*\
  !*** external "next-offline/runtime" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-offline/runtime");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map