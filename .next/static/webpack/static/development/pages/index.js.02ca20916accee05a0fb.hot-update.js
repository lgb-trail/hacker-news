webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout */ "./pages/layout.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _nextoffline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nextoffline */ "./pages/nextoffline.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      return __jsx(_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Latest News"
      }, __jsx(_header__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_nextoffline__WEBPACK_IMPORTED_MODULE_11__["default"], null), this.props.stories.map(function (story, index) {
        return __jsx("section", {
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
          href: "https://avatars1.githubusercontent.com/u/".concat(index, "?v=4"),
          className: "jsx-1976870081"
        }, __jsx("img", {
          src: "https://avatars1.githubusercontent.com/u/".concat(index, "?v=4"),
          alt: story.user,
          className: "jsx-1976870081" + " " + "story-image"
        })), __jsx("div", {
          className: "jsx-1976870081" + " " + "posted-by"
        }, " posted by ", __jsx("span", {
          className: "jsx-1976870081"
        }, story.user ? story.user : 'anonymous', " | ", __jsx("a", {
          target: "_blank",
          href: "http://".concat(story.domain),
          className: "jsx-1976870081" + " " + "domain-link"
        }, story.domain))), __jsx("p", {
          className: "jsx-1976870081"
        }, story.time_ago));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1976870081"
      }, "h2{font-weight:400;color:#333;font-size:16px;border-radius:10px;padding:10px;}.title-link{color:#fff;}.domain-link{color:#fff;}.posted-by{font-weight:300;color:#888;padding:15px 0;}p{font-weight:300;color:#999;}.story-card{padding:15px;border:1px solid #000;margin:15px;border-radius:15px;display:inline-block;width:100%;max-width:400px;background-color:#000;}.story-image{display:block;width:100%;height:auto;max-height:350px;}body{background:#fff;font-family:system-ui;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTG9sd2V0aHUuQm9uZ296YVxcRG9jdW1lbnRzXFxHaXRcXGhhY2tlci1uZXdzXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUdxQixBQVFOLEFBSUEsQUFJTSxBQU1BLEFBS0gsQUFXQyxBQU9FLFdBcENwQixBQUlBLEVBZTBCLENBV1osRUF0Q0MsQUFnQkEsQUFNQSxBQXVCVyxTQU5WLEVBdENHLEFBZ0JBLEFBTW5CLFFBS2dCLEVBWUssQ0FNUixJQTVDVSxBQWdCdkIsS0FXdUIsQUFrQnZCLE9BTndCLEFBQUMsT0F0Q1IsS0EyQlEsUUExQnpCLGFBMkJlLFdBQ0ssZ0JBQ00sc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTG9sd2V0aHUuQm9uZ296YVxcRG9jdW1lbnRzXFxHaXRcXGhhY2tlci1uZXdzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xyXG5pbXBvcnQgTmV4dE9mZmxpbmUgZnJvbSAnLi9uZXh0b2ZmbGluZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cclxuICAgICAgICBjb25zdCBzdG9yeVJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5oYWNrZXJ3ZWJhcHAuY29tL25ld3NgKTtcclxuICAgICAgICBjb25zdCB1c2VyUmVxID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnNgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcmllcyA9IGF3YWl0IHN0b3J5UmVxLmpzb24oKTtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHVzZXJSZXEuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7IHN0b3JpZXMsIHVzZXJzIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQgdGl0bGU9XCJMYXRlc3QgTmV3c1wiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxOZXh0T2ZmbGluZSAvPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdG9yaWVzLm1hcCgoc3RvcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzdG9yeS1jYXJkXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxhIGNsYXNzTmFtZT1cInRpdGxlLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZS5sZW5ndGggPCA0NSA/IHN0b3J5LnRpdGxlIDogc3RvcnkudGl0bGUuc3Vic3RyaW5nKDAsIDQ1KX0uLi48L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8ke2luZGV4fT92PTRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzdG9yeS1pbWFnZVwiIHNyYz17YGh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvJHtpbmRleH0/dj00YH0gYWx0PXtzdG9yeS51c2VyfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkLWJ5XCI+IHBvc3RlZCBieSA8c3Bhbj57c3RvcnkudXNlciA/IHN0b3J5LnVzZXIgOiAnYW5vbnltb3VzJ30gfCA8YSBjbGFzc05hbWU9XCJkb21haW4tbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwOi8vJHtzdG9yeS5kb21haW59YH0+e3N0b3J5LmRvbWFpbn08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntzdG9yeS50aW1lX2Fnb308L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuPHN0eWxlIGdsb2JhbCBqc3g+IHtgXHJcbmgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4gLnRpdGxlLWxpbmsge1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmRvbWFpbi1saW5rIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi5wb3N0ZWQtYnkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLnN0b3J5LWNhcmQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnN0b3J5LWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDpcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Lolwethu.Bongoza\\\\Documents\\\\Git\\\\hacker-news\\\\pages\\\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var storyReq, userReq, stories, users;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.hackerwebapp.com/news"));

            case 2:
              storyReq = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.github.com/users"));

            case 5:
              userReq = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(storyReq.json());

            case 8:
              stories = _context.sent;
              _context.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(userReq.json());

            case 11:
              users = _context.sent;
              return _context.abrupt("return", {
                stories: stories,
                users: users
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.02ca20916accee05a0fb.hot-update.js.map