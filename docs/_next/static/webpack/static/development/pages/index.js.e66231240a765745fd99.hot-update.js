webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var _LocationOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LocationOptions */ \"./src/demo/LocationOptions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _SpinOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SpinOptions */ \"./src/demo/SpinOptions.js\");\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jmac/Scripts/chart-module-globetrotter/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      width: 'mobile',\n      location: ['singapore'],\n      spin: false,\n      spinSpeed: 5000\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('https://cdn.jsdelivr.net/npm/@reuters-graphics/graphics-atlas-client@0.3.5/topojson/custom/world.json').then(function (r) {\n        return r.json();\n      }).then(function (topojson) {\n        // Use our chart module.\n        _this2.chart.selection(_this2.chartContainer.current).topojson(topojson).props({\n          fill: _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_13__[\"base\"].blue.hex\n        }).draw();\n      }); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      var _this$chart$props;\n\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      var _this$state = this.state,\n          spin = _this$state.spin,\n          spinSpeed = _this$state.spinSpeed;\n\n      (_this$chart$props = this.chart.props({\n        spin: spin,\n        spinSpeed: spinSpeed,\n        replacementThreshold: 100000\n      })).location.apply(_this$chart$props, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.state.location)).draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state2 = this.state,\n          width = _this$state2.width,\n          spin = _this$state2.spin,\n          spinSpeed = _this$state2.spinSpeed;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 7\n        }\n      }, __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }\n      })), __jsx(\"div\", {\n        className: \"chart-options\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }\n      }, __jsx(_LocationOptions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        setState: function setState(state) {\n          return _this3.setState(state);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }), __jsx(_SpinOptions__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        spin: spin,\n        setSpin: function setSpin() {\n          return _this3.setState(function (prevState) {\n            return {\n              spin: !prevState.spin\n            };\n          });\n        },\n        spinSpeed: spinSpeed,\n        setSpinSpeed: function setSpinSpeed(spinSpeed) {\n          return _this3.setState({\n            spinSpeed: spinSpeed\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJsb2NhdGlvbiIsInNwaW4iLCJzcGluU3BlZWQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiZGVib3VuY2UiLCJjaGFydCIsImRyYXciLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsInRvcG9qc29uIiwic2VsZWN0aW9uIiwiY2hhcnRDb250YWluZXIiLCJjdXJyZW50IiwicHJvcHMiLCJmaWxsIiwiYmFzZSIsImJsdWUiLCJoZXgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwicmVwbGFjZW1lbnRUaHJlc2hvbGQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsV0FBSyxFQUFFLFFBREQ7QUFFTkMsY0FBUSxFQUFFLENBQUMsV0FBRCxDQUZKO0FBR05DLFVBQUksRUFBRSxLQUhBO0FBSU5DLGVBQVMsRUFBRTtBQUpMLEs7O3lOQU9TQyw2Q0FBSyxDQUFDQyxTQUFOLEU7O2dOQUdULElBQUlDLHFEQUFKLEU7O2lOQUdDQyx1REFBUSxDQUFDLFlBQU07QUFBRSxZQUFLQyxLQUFMLENBQVdDLElBQVg7QUFBb0IsS0FBN0IsRUFBK0IsR0FBL0IsQzs7Ozs7Ozt3Q0FFRztBQUFBOztBQUNsQkMsV0FBSyxDQUFDLHVHQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLElBQUYsRUFBSjtBQUFBLE9BRFQsRUFFR0YsSUFGSCxDQUVRLFVBQUFHLFFBQVEsRUFBSTtBQUNoQjtBQUNBLGNBQUksQ0FBQ04sS0FBTCxDQUNHTyxTQURILENBQ2EsTUFBSSxDQUFDQyxjQUFMLENBQW9CQyxPQURqQyxFQUVHSCxRQUZILENBRVlBLFFBRlosRUFHR0ksS0FISCxDQUdTO0FBQUVDLGNBQUksRUFBRUMsb0ZBQUksQ0FBQ0MsSUFBTCxDQUFVQztBQUFsQixTQUhULEVBSUdiLElBSkg7QUFLRCxPQVRILEVBRGtCLENBWWxCOztBQUNBYyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLE1BQXZDO0FBQ0Q7OzsyQ0FFc0I7QUFDckI7QUFDQUYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLRCxNQUExQztBQUNEOzs7eUNBRW9CO0FBQUE7O0FBQ25CO0FBQ0E7QUFGbUIsd0JBR1MsS0FBS0UsS0FIZDtBQUFBLFVBR1h6QixJQUhXLGVBR1hBLElBSFc7QUFBQSxVQUdMQyxTQUhLLGVBR0xBLFNBSEs7O0FBSW5CLGdDQUFLSyxLQUFMLENBQ0dVLEtBREgsQ0FDUztBQUFFaEIsWUFBSSxFQUFKQSxJQUFGO0FBQVFDLGlCQUFTLEVBQVRBLFNBQVI7QUFBbUJ5Qiw0QkFBb0IsRUFBRTtBQUF6QyxPQURULEdBRUczQixRQUZILHVIQUVlLEtBQUswQixLQUFMLENBQVcxQixRQUYxQixHQUdHUSxJQUhIO0FBSUQ7Ozs2QkFFUTtBQUFBOztBQUFBLHlCQUM0QixLQUFLa0IsS0FEakM7QUFBQSxVQUNDM0IsS0FERCxnQkFDQ0EsS0FERDtBQUFBLFVBQ1FFLElBRFIsZ0JBQ1FBLElBRFI7QUFBQSxVQUNjQyxTQURkLGdCQUNjQSxTQURkO0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxpRUFBRDtBQUFnQixhQUFLLEVBQUVILEtBQXZCO0FBQThCLGdCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUM2QixRQUFMLENBQWM7QUFBRTdCLGlCQUFLLEVBQUxBO0FBQUYsV0FBZCxDQUFYO0FBQUEsU0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssVUFBRSxFQUFDLE9BQVI7QUFBZ0IsV0FBRyxFQUFFLEtBQUtnQixjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixFQUtFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHlEQUFEO0FBQWlCLGdCQUFRLEVBQUUsa0JBQUNXLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNFLFFBQUwsQ0FBY0YsS0FBZCxDQUFYO0FBQUEsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUUsTUFBQyxxREFBRDtBQUNFLFlBQUksRUFBRXpCLElBRFI7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUMyQixRQUFMLENBQWMsVUFBQUMsU0FBUztBQUFBLG1CQUFLO0FBQUU1QixrQkFBSSxFQUFFLENBQUM0QixTQUFTLENBQUM1QjtBQUFuQixhQUFMO0FBQUEsV0FBdkIsQ0FBTjtBQUFBLFNBRlg7QUFHRSxpQkFBUyxFQUFFQyxTQUhiO0FBSUUsb0JBQVksRUFBRSxzQkFBQ0EsU0FBRDtBQUFBLGlCQUFlLE1BQUksQ0FBQzBCLFFBQUwsQ0FBYztBQUFFMUIscUJBQVMsRUFBVEE7QUFBRixXQUFkLENBQWY7QUFBQSxTQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FMRixDQURGO0FBa0JEOzs7O0VBbkUwQkMsNkNBQUssQ0FBQzJCLFM7O0FBc0VwQmhDLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2RlbW8vQ2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnLi4vbGliL2NoYXJ0LmpzJztcbmltcG9ydCBDaGFydENvbnRhaW5lciBmcm9tICcuL2Z1cm5pdHVyZS9DaGFydENvbnRhaW5lcic7XG5pbXBvcnQgTG9jYXRpb25PcHRpb25zIGZyb20gJy4vTG9jYXRpb25PcHRpb25zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbk9wdGlvbnMgZnJvbSAnLi9TcGluT3B0aW9ucyc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3Mvc3R5bGUtY29sb3IvZGlzdC9jYXRlZ29yaWNhbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcblxuY2xhc3MgQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB3aWR0aDogJ21vYmlsZScsXG4gICAgbG9jYXRpb246IFsnc2luZ2Fwb3JlJ10sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgc3BpblNwZWVkOiA1MDAwLFxuICB9O1xuXG4gIGNoYXJ0Q29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgLy8gSW5zdGFudGlhdGUgYW5kIGFkZCBvdXIgY2hhcnQgY2xhc3MgdG8gdGhpcyBjb21wb25lbnQuXG4gIGNoYXJ0ID0gbmV3IENoYXJ0KCk7XG5cbiAgLy8gQSByZXNpemUgZnVuY3Rpb24gdG8gcmVkcmF3IHRoZSBjaGFydC5cbiAgcmVzaXplID0gZGVib3VuY2UoKCkgPT4geyB0aGlzLmNoYXJ0LmRyYXcoKTsgfSwgMjUwKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnRAMC4zLjUvdG9wb2pzb24vY3VzdG9tL3dvcmxkLmpzb24nKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHRvcG9qc29uID0+IHtcbiAgICAgICAgLy8gVXNlIG91ciBjaGFydCBtb2R1bGUuXG4gICAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgICAgICAudG9wb2pzb24odG9wb2pzb24pXG4gICAgICAgICAgLnByb3BzKHsgZmlsbDogYmFzZS5ibHVlLmhleCB9KVxuICAgICAgICAgIC5kcmF3KCk7XG4gICAgICB9KTtcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIC8vIENhbiBjaGFuZ2UgZGF0YSBvciBwcm9wcyBoZXJlLCB3aGF0ZXZlci4uLlxuICAgIGNvbnN0IHsgc3Bpbiwgc3BpblNwZWVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5wcm9wcyh7IHNwaW4sIHNwaW5TcGVlZCwgcmVwbGFjZW1lbnRUaHJlc2hvbGQ6IDEwMDAwMCB9KVxuICAgICAgLmxvY2F0aW9uKC4uLnRoaXMuc3RhdGUubG9jYXRpb24pXG4gICAgICAuZHJhdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGgsIHNwaW4sIHNwaW5TcGVlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENoYXJ0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0gc2V0V2lkdGg9eyh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pfT5cbiAgICAgICAgICB7LyogVGhpcyBpcyBvdXIgY2hhcnQgY29udGFpbmVyIPCfkYcgKi99XG4gICAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXJ0LW9wdGlvbnMnPlxuICAgICAgICAgIDxMb2NhdGlvbk9wdGlvbnMgc2V0U3RhdGU9eyhzdGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZShzdGF0ZSl9IC8+XG4gICAgICAgICAgPFNwaW5PcHRpb25zXG4gICAgICAgICAgICBzcGluPXtzcGlufVxuICAgICAgICAgICAgc2V0U3Bpbj17KCkgPT4gdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHsgc3BpbjogIXByZXZTdGF0ZS5zcGluIH0pKX1cbiAgICAgICAgICAgIHNwaW5TcGVlZD17c3BpblNwZWVkfVxuICAgICAgICAgICAgc2V0U3BpblNwZWVkPXsoc3BpblNwZWVkKSA9PiB0aGlzLnNldFN0YXRlKHsgc3BpblNwZWVkIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})