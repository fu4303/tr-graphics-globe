webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar topojson = __webpack_require__(/*! topojson */ \"./node_modules/topojson/index.js\");\n\nvar world = __webpack_require__(/*! ./topo.json */ \"./src/lib/topo.json\");\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9___default.a();\nvar countries = topojson.feature(world, world.objects.gadm).features;\nvar borders = topojson.mesh(world, world.objects.gadm, function (a, b) {\n  return a !== b;\n});\nvar disputed = topojson.mesh(world, world.objects.disputed);\nvar land = topojson.feature(world, world.objects.land);\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      location: 'USA',\n      // border_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 2.5,\n      disputed: true,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n\n      if (x && y) {\n        projection.rotate([-x, props.vertical_tilt - y]);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].geoPath(projection, context);\n      var p;\n\n      if (Array.isArray(props.location)) {\n        p = props.location;\n      }\n\n      var l = Atlas.getCountry(props.location);\n      var location;\n\n      if (l) {\n        location = l.isoAlpha3;\n      } else {\n        location = 'NA';\n      }\n\n      render();\n\n      function render() {\n        var country = countries.filter(function (d) {\n          return d.properties.GID_0 === location;\n        })[0];\n        p = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].geoCentroid(country);\n\n        if (p[0]) {\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].interpolate(projection.rotate(), [-p[0], props.vertical_tilt - p[1]]);\n          canvas.attr('centroid-x', p[0]);\n          canvas.attr('centroid-y', p[1]);\n          _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n              context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n\n              if (props.enable_dot) {\n                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              }\n\n              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n          if (props.disputed) {\n            context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          }\n\n          context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsidG9wb2pzb24iLCJyZXF1aXJlIiwid29ybGQiLCJBdGxhcyIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJjb3VudHJpZXMiLCJmZWF0dXJlIiwib2JqZWN0cyIsImdhZG0iLCJmZWF0dXJlcyIsImJvcmRlcnMiLCJtZXNoIiwiYSIsImIiLCJkaXNwdXRlZCIsImxhbmQiLCJHbG9iZXRyb3R0ZXIiLCJsb2NhdGlvbiIsImJvcmRlcl9zdHJva2VfY29sb3IiLCJvdXRlcl9zdHJva2VfY29sb3IiLCJzdHJva2Vfd2lkdGhfY291bnRyaWVzIiwic3Ryb2tlX3dpZHRoX3NwaGVyZSIsImhpZ2hsaWdodF9jb2xvciIsImJhc2VfY29sb3IiLCJ2ZXJ0aWNhbF90aWx0IiwibWFyZ2luIiwiZHVyYXRpb24iLCJlbmFibGVfZG90IiwiZG90X3JhZGl1cyIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwIiwiQXJyYXkiLCJpc0FycmF5IiwibCIsImdldENvdW50cnkiLCJpc29BbHBoYTMiLCJyZW5kZXIiLCJjb3VudHJ5IiwiZmlsdGVyIiwiZCIsInByb3BlcnRpZXMiLCJHSURfMCIsImdlb0NlbnRyb2lkIiwiciIsImludGVycG9sYXRlIiwidHJhbnNpdGlvbiIsInR3ZWVuIiwidCIsImNlbnRyb2lkUHJvIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImFyYyIsIk1hdGgiLCJQSSIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxrREFBRCxDQUF4Qjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsd0NBQUQsQ0FBckI7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkosS0FBakIsRUFBd0JBLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUF0QyxFQUE0Q0MsUUFBOUQ7QUFDQSxJQUFNQyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ1csSUFBVCxDQUFjVCxLQUFkLEVBQXFCQSxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBbkMsRUFBeUMsVUFBQ0ksQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVUQsQ0FBQyxLQUFLQyxDQUFoQjtBQUFBLENBQXpDLENBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHZCxRQUFRLENBQUNXLElBQVQsQ0FBY1QsS0FBZCxFQUFxQkEsS0FBSyxDQUFDSyxPQUFOLENBQWNPLFFBQW5DLENBQWpCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHZixRQUFRLENBQUNNLE9BQVQsQ0FBaUJKLEtBQWpCLEVBQXdCQSxLQUFLLENBQUNLLE9BQU4sQ0FBY1EsSUFBdEMsQ0FBYjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxjQUFRLEVBQUUsS0FERztBQUViO0FBQ0FDLHlCQUFtQixFQUFFLFNBSFI7QUFJYkMsd0JBQWtCLEVBQUUsMkJBSlA7QUFLYkMsNEJBQXNCLEVBQUUsR0FMWDtBQU1iQyx5QkFBbUIsRUFBRSxHQU5SO0FBT2JDLHFCQUFlLEVBQUUsU0FQSjtBQVFiQyxnQkFBVSxFQUFFLDBCQVJDO0FBU2JDLG1CQUFhLEVBQUUsRUFU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IjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuY29uc3QgdG9wb2pzb24gPSByZXF1aXJlKCd0b3BvanNvbicpO1xuY29uc3Qgd29ybGQgPSByZXF1aXJlKCcuL3RvcG8uanNvbicpO1xuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5nYWRtKS5mZWF0dXJlcztcbmNvbnN0IGJvcmRlcnMgPSB0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmdhZG0sIChhLCBiKSA9PiBhICE9PSBiKTtcbmNvbnN0IGRpc3B1dGVkID0gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5kaXNwdXRlZCk7XG5jb25zdCBsYW5kID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5sYW5kKTtcblxuY2xhc3MgR2xvYmV0cm90dGVyIGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9jYXRpb246ICdVU0EnLFxuICAgIC8vIGJvcmRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpJyxcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Ryb2tlX3dpZHRoX2NvdW50cmllczogMC41LFxuICAgIHN0cm9rZV93aWR0aF9zcGhlcmU6IDEuMixcbiAgICBoaWdobGlnaHRfY29sb3I6ICcjZmNlNTg3JyxcbiAgICBiYXNlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICB2ZXJ0aWNhbF90aWx0OiAxNSxcbiAgICBtYXJnaW46IDEwLFxuICAgIGR1cmF0aW9uOiA3NTAsXG4gICAgZW5hYmxlX2RvdDogdHJ1ZSxcbiAgICBkb3RfcmFkaXVzOiAyLjUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgZGlzcHV0ZWRfZGFzaGFycmF5OiBbNSw1XSxcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IHNwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSk7XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5zZWxlY3Rpb24oKS5hcHBlbmRTZWxlY3QoJ2NhbnZhcycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB3aWR0aCk7XG5cbiAgICBjb25zdCB4ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnKTtcbiAgICBjb25zdCB5ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknKTtcblxuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIHByb2plY3Rpb24ucm90YXRlKFsteCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHldKVxuICAgIH1cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLm5vZGUoKS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgocHJvamVjdGlvbiwgY29udGV4dCk7XG4gICAgbGV0IHA7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMubG9jYXRpb24pKXtcbiAgICAgIHAgPSBwcm9wcy5sb2NhdGlvblxuICAgIH1cbiAgICBjb25zdCBsID0gQXRsYXMuZ2V0Q291bnRyeShwcm9wcy5sb2NhdGlvbik7XG4gICAgbGV0IGxvY2F0aW9uO1xuICAgIGlmIChsKSB7XG4gICAgICBsb2NhdGlvbiA9IGwuaXNvQWxwaGEzO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbiA9ICdOQSc7XG4gICAgfVxuICAgIHJlbmRlcigpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSBjb3VudHJpZXMuZmlsdGVyKGQgPT4gZC5wcm9wZXJ0aWVzLkdJRF8wID09PSBsb2NhdGlvbilbMF07XG4gICAgICBwID0gZDMuZ2VvQ2VudHJvaWQoY291bnRyeSk7XG4gICAgICBpZiAocFswXSl7ICAgICAgICBcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcFswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHBbMV1dKTtcbiAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwWzBdKTtcbiAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwWzFdKTtcblxuICAgICAgICBkMy50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgICAgLnR3ZWVuKCdyb3RhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHIodCkpO1xuICAgICAgICAgICAgICBjb25zdCBjZW50cm9pZFBybyA9IHByb2plY3Rpb24ocCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgobGFuZCksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvciwgY29udGV4dC5maWxsKCk7ICBcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChjb3VudHJ5KSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3IsIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICBpZiAocHJvcHMuZW5hYmxlX2RvdCl7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgY29udGV4dC5hcmMoY2VudHJvaWRQcm9bMF0sIGNlbnRyb2lkUHJvWzFdLCBwcm9wcy5kb3RfcmFkaXVzLCAwLCAyICogTWF0aC5QSSksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yLCBjb250ZXh0LmZpbGwoKTsgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCl7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChkaXNwdXRlZCksIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KSxjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoYm9yZGVycyksIGNvbnRleHQuc2V0TGluZURhc2goW10pLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKHNwaGVyZSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZSwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChsYW5kKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yLCBjb250ZXh0LmZpbGwoKTsgIFxuICAgICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCl7XG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGRpc3B1dGVkKSwgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpLGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoYm9yZGVycyksIGNvbnRleHQuc2V0TGluZURhc2goW10pLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoc3BoZXJlKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})