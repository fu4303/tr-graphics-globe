webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/base/ChartComponent.js":
/*!****************************************!*\
  !*** ./src/lib/base/ChartComponent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _errorClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorClasses */ \"./src/lib/base/errorClasses.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function () {\n  function ChartComponent(selector) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultProps\", {});\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultData\", []);\n\n    this.selection(selector);\n  }\n  /**\n   * Getter/setter for DOM node chart is drawn into\n   * @param  {String or Element} selector\n   */\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"selection\",\n    value: function selection(selector) {\n      if (!selector) return this._selection;\n\n      if (!(selector instanceof Element) && typeof selector !== 'string') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorSelectorType\"](this.constructor.name);\n      }\n\n      this._selection = _utils_d3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].select(selector);\n      return this;\n    }\n    /**\n     * Default props\n     * @type {Object}\n     */\n\n  }, {\n    key: \"props\",\n\n    /**\n     * Getter/setter for props object\n     * @param  {Object} obj props\n     */\n    value: function props(obj) {\n      if (!obj) return this._props || this.defaultProps;\n\n      if (!(obj instanceof Object)) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorPropsType\"](this.constructor.name);\n      }\n\n      this._props = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()(this._props || this.defaultProps, obj);\n      return this;\n    }\n    /**\n     * Default data\n     * @type {Array}\n     */\n\n  }, {\n    key: \"location\",\n\n    /**\n     * Getter/setter for chart location\n     * @param  {Array} arr data\n     */\n    value: function location(arrOrString) {\n      if (!arrOrString) return this._location || 'singapore';\n\n      if (!(arrOrString instanceof Array) && !(typeof arrOrString === 'string')) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorLocationType\"](this.constructor.name);\n      }\n\n      this._location = arrOrString;\n      return this;\n    }\n    /**\n     * Getter/setter for chart topojson\n     * @param  {Object} obj topology\n     */\n\n  }, {\n    key: \"topojson\",\n    value: function topojson(obj) {\n      if (!obj) return this._topojson || {};\n      console.log('topojson', obj);\n\n      if (typeof obj !== 'object') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorTopojsonType\"](this.constructor.name);\n      }\n\n      this._topojson = obj;\n      return this;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorDrawMethodUndefined\"](this.constructor.name);\n    }\n  }]);\n\n  return ChartComponent;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Jhc2UvQ2hhcnRDb21wb25lbnQuanM/YzlmNCJdLCJuYW1lcyI6WyJDaGFydENvbXBvbmVudCIsInNlbGVjdG9yIiwic2VsZWN0aW9uIiwiX3NlbGVjdGlvbiIsIkVsZW1lbnQiLCJFcnJvclNlbGVjdG9yVHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImQzIiwic2VsZWN0Iiwib2JqIiwiX3Byb3BzIiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiRXJyb3JQcm9wc1R5cGUiLCJtZXJnZSIsImFyck9yU3RyaW5nIiwiX2xvY2F0aW9uIiwiQXJyYXkiLCJFcnJvckxvY2F0aW9uVHlwZSIsIl90b3BvanNvbiIsImNvbnNvbGUiLCJsb2ciLCJFcnJvclRvcG9qc29uVHlwZSIsIkVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7O0lBRU1BLGM7QUFDSiwwQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLG9IQXVCUCxFQXZCTzs7QUFBQSxtSEE0Q1IsRUE1Q1E7O0FBQ3BCLFNBQUtDLFNBQUwsQ0FBZUQsUUFBZjtBQUNEO0FBRUQ7Ozs7Ozs7OzhCQUlVQSxRLEVBQVU7QUFDbEIsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxLQUFLRSxVQUFaOztBQUVmLFVBQUksRUFBRUYsUUFBUSxZQUFZRyxPQUF0QixLQUFrQyxPQUFPSCxRQUFQLEtBQW9CLFFBQTFELEVBQW9FO0FBQ2xFLGNBQU0sSUFBSUksK0RBQUosQ0FBc0IsS0FBS0MsV0FBTCxDQUFpQkMsSUFBdkMsQ0FBTjtBQUNEOztBQUVELFdBQUtKLFVBQUwsR0FBa0JLLGlEQUFFLENBQUNDLE1BQUgsQ0FBVVIsUUFBVixDQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUE7Ozs7MEJBSU1TLEcsRUFBSztBQUNULFVBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sS0FBS0MsTUFBTCxJQUFlLEtBQUtDLFlBQTNCOztBQUVWLFVBQUksRUFBRUYsR0FBRyxZQUFZRyxNQUFqQixDQUFKLEVBQThCO0FBQzVCLGNBQU0sSUFBSUMsNERBQUosQ0FBbUIsS0FBS1IsV0FBTCxDQUFpQkMsSUFBcEMsQ0FBTjtBQUNEOztBQUVELFdBQUtJLE1BQUwsR0FBY0ksbURBQUssQ0FBQyxLQUFLSixNQUFMLElBQWUsS0FBS0MsWUFBckIsRUFBbUNGLEdBQW5DLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQTs7Ozs2QkFJU00sVyxFQUFhO0FBQ3BCLFVBQUksQ0FBQ0EsV0FBTCxFQUFrQixPQUFPLEtBQUtDLFNBQUwsSUFBa0IsV0FBekI7O0FBRWxCLFVBQUksRUFBRUQsV0FBVyxZQUFZRSxLQUF6QixLQUFtQyxFQUFFLE9BQU9GLFdBQVAsS0FBdUIsUUFBekIsQ0FBdkMsRUFBMkU7QUFDekUsY0FBTSxJQUFJRywrREFBSixDQUFzQixLQUFLYixXQUFMLENBQWlCQyxJQUF2QyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS1UsU0FBTCxHQUFpQkQsV0FBakI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OzZCQUlTTixHLEVBQUs7QUFDWixVQUFJLENBQUNBLEdBQUwsRUFBVSxPQUFPLEtBQUtVLFNBQUwsSUFBa0IsRUFBekI7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlosR0FBeEI7O0FBQ0EsVUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0IsY0FBTSxJQUFJYSwrREFBSixDQUFzQixLQUFLakIsV0FBTCxDQUFpQkMsSUFBdkMsQ0FBTjtBQUNEOztBQUVELFdBQUthLFNBQUwsR0FBaUJWLEdBQWpCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFFTTtBQUNMLFlBQU0sSUFBSWMsc0VBQUosQ0FBNkIsS0FBS2xCLFdBQUwsQ0FBaUJDLElBQTlDLENBQU47QUFDRDs7Ozs7O0FBR1lQLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9iYXNlL0NoYXJ0Q29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRXJyb3JEcmF3TWV0aG9kVW5kZWZpbmVkLFxuICBFcnJvckxvY2F0aW9uVHlwZSxcbiAgRXJyb3JQcm9wc1R5cGUsXG4gIEVycm9yU2VsZWN0b3JUeXBlLFxuICBFcnJvclRvcG9qc29uVHlwZVxufSBmcm9tICcuL2Vycm9yQ2xhc3Nlcyc7XG5cbmltcG9ydCBkMyBmcm9tICcuLi91dGlscy9kMyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlJztcblxuY2xhc3MgQ2hhcnRDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBET00gbm9kZSBjaGFydCBpcyBkcmF3biBpbnRvXG4gICAqIEBwYXJhbSAge1N0cmluZyBvciBFbGVtZW50fSBzZWxlY3RvclxuICAgKi9cbiAgc2VsZWN0aW9uKHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcblxuICAgIGlmICghKHNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yU2VsZWN0b3JUeXBlKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2VsZWN0aW9uID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHByb3BzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBkZWZhdWx0UHJvcHMgPSB7fVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBwcm9wcyBvYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvYmogcHJvcHNcbiAgICovXG4gIHByb3BzKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gdGhpcy5fcHJvcHMgfHwgdGhpcy5kZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoIShvYmogaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JQcm9wc1R5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9wcyA9IG1lcmdlKHRoaXMuX3Byb3BzIHx8IHRoaXMuZGVmYXVsdFByb3BzLCBvYmopO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZGF0YVxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBkZWZhdWx0RGF0YSA9IFtdXG5cbiAgLyoqXG4gICAqIEdldHRlci9zZXR0ZXIgZm9yIGNoYXJ0IGxvY2F0aW9uXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnIgZGF0YVxuICAgKi9cbiAgbG9jYXRpb24oYXJyT3JTdHJpbmcpIHtcbiAgICBpZiAoIWFyck9yU3RyaW5nKSByZXR1cm4gdGhpcy5fbG9jYXRpb24gfHwgJ3NpbmdhcG9yZSc7XG5cbiAgICBpZiAoIShhcnJPclN0cmluZyBpbnN0YW5jZW9mIEFycmF5KSAmJiAhKHR5cGVvZiBhcnJPclN0cmluZyA9PT0gJ3N0cmluZycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JMb2NhdGlvblR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhdGlvbiA9IGFyck9yU3RyaW5nO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlci9zZXR0ZXIgZm9yIGNoYXJ0IHRvcG9qc29uXG4gICAqIEBwYXJhbSAge09iamVjdH0gb2JqIHRvcG9sb2d5XG4gICAqL1xuICB0b3BvanNvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIHRoaXMuX3RvcG9qc29uIHx8IHt9O1xuICAgIGNvbnNvbGUubG9nKCd0b3BvanNvbicsIG9iaik7XG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JUb3BvanNvblR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b3BvanNvbiA9IG9iajtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/base/ChartComponent.js\n");

/***/ })

})