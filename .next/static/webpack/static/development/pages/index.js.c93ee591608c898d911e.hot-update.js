webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/nextoffline.js":
/*!******************************!*\
  !*** ./pages/nextoffline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_offline_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-offline/runtime */ "./node_modules/next-offline/runtime.js");
/* harmony import */ var next_offline_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_offline_runtime__WEBPACK_IMPORTED_MODULE_6__);








var NextOffline =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NextOffline, _PureComponent);

  function NextOffline() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NextOffline);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NextOffline).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NextOffline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(next_offline_runtime__WEBPACK_IMPORTED_MODULE_6__["register"])(); // if ('serviceWorker' in navigator) {
      //     window.addEventListener('load', function () {
      //         navigator.serviceWorker
      //             .register('/service-worker.js', { scope: '/' }).then(registration => {
      //                 console.log('Service worker registered', registration);
      //             }).catch((registrationError) => {
      //                 console.log('Service Worker registration failed: ', registrationError)
      //             });
      //     });
      // }

      Window.addEventListener('installprompt', function () {
        alert('Des');
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(next_offline_runtime__WEBPACK_IMPORTED_MODULE_6__["unregister"])();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return NextOffline;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (NextOffline);

/***/ })

})
//# sourceMappingURL=index.js.c93ee591608c898d911e.hot-update.js.map