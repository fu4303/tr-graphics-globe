webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar topojson = __webpack_require__(/*! topojson */ \"./node_modules/topojson/index.js\");\n\nvar world = __webpack_require__(/*! ./topo.json */ \"./src/lib/topo.json\");\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_9___default.a();\nvar countries = topojson.feature(world, world.objects.gadm).features;\nvar borders = topojson.mesh(world, world.objects.gadm, function (a, b) {\n  return a !== b;\n});\nvar disputed = topojson.mesh(world, world.objects.disputed);\nvar land = topojson.feature(world, world.objects.land);\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      location: 'USA',\n      // border_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 2.5,\n      disputed: true,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n\n      if (x && y) {\n        projection.rotate([-x, props.vertical_tilt - y]);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].geoPath(projection, context);\n      var p = [];\n\n      if (Array.isArray(props.location)) {\n        p = props.location;\n      } else {\n        var l = Atlas.getCountry(props.location);\n\n        var _location;\n\n        if (l) {\n          _location = l.isoAlpha3;\n        } else {\n          _location = 'NA';\n        }\n      }\n\n      render();\n\n      function render() {\n        var country;\n\n        if (!p[0]) {\n          country = countries.filter(function (d) {\n            return d.properties.GID_0 === location;\n          })[0];\n          p = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].geoCentroid(country);\n        }\n\n        if (p[0]) {\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].interpolate(projection.rotate(), [-p[0], props.vertical_tilt - p[1]]);\n          canvas.attr('centroid-x', p[0]);\n          canvas.attr('centroid-y', p[1]);\n          _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n              if (country) {\n                context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.enable_dot) {\n                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              }\n\n              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n          if (props.disputed) {\n            context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          }\n\n          context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsidG9wb2pzb24iLCJyZXF1aXJlIiwid29ybGQiLCJBdGxhcyIsIkF0bGFzTWV0YWRhdGFDbGllbnQiLCJjb3VudHJpZXMiLCJmZWF0dXJlIiwib2JqZWN0cyIsImdhZG0iLCJmZWF0dXJlcyIsImJvcmRlcnMiLCJtZXNoIiwiYSIsImIiLCJkaXNwdXRlZCIsImxhbmQiLCJHbG9iZXRyb3R0ZXIiLCJsb2NhdGlvbiIsImJvcmRlcl9zdHJva2VfY29sb3IiLCJvdXRlcl9zdHJva2VfY29sb3IiLCJzdHJva2Vfd2lkdGhfY291bnRyaWVzIiwic3Ryb2tlX3dpZHRoX3NwaGVyZSIsImhpZ2hsaWdodF9jb2xvciIsImJhc2VfY29sb3IiLCJ2ZXJ0aWNhbF90aWx0IiwibWFyZ2luIiwiZHVyYXRpb24iLCJlbmFibGVfZG90IiwiZG90X3JhZGl1cyIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwIiwiQXJyYXkiLCJpc0FycmF5IiwibCIsImdldENvdW50cnkiLCJpc29BbHBoYTMiLCJyZW5kZXIiLCJjb3VudHJ5IiwiZmlsdGVyIiwiZCIsInByb3BlcnRpZXMiLCJHSURfMCIsImdlb0NlbnRyb2lkIiwiciIsImludGVycG9sYXRlIiwidHJhbnNpdGlvbiIsInR3ZWVuIiwidCIsImNlbnRyb2lkUHJvIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImFyYyIsIk1hdGgiLCJQSSIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxrREFBRCxDQUF4Qjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsd0NBQUQsQ0FBckI7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7QUFDQSxJQUFNQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkosS0FBakIsRUFBd0JBLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUF0QyxFQUE0Q0MsUUFBOUQ7QUFDQSxJQUFNQyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ1csSUFBVCxDQUFjVCxLQUFkLEVBQXFCQSxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsSUFBbkMsRUFBeUMsVUFBQ0ksQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVUQsQ0FBQyxLQUFLQyxDQUFoQjtBQUFBLENBQXpDLENBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHZCxRQUFRLENBQUNXLElBQVQsQ0FBY1QsS0FBZCxFQUFxQkEsS0FBSyxDQUFDSyxPQUFOLENBQWNPLFFBQW5DLENBQWpCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHZixRQUFRLENBQUNNLE9BQVQsQ0FBaUJKLEtBQWpCLEVBQXdCQSxLQUFLLENBQUNLLE9BQU4sQ0FBY1EsSUFBdEMsQ0FBYjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxjQUFRLEVBQUUsS0FERztBQUViO0FBQ0FDLHlCQUFtQixFQUFFLFNBSFI7QUFJYkMsd0JBQWtCLEVBQUUsMkJBSlA7QUFLYkMsNEJBQXNCLEVBQUUsR0FMWDtBQU1iQyx5QkFBbUIsRUFBRSxHQU5SO0FBT2JDLHFCQUFlLEVBQUUsU0FQSjtBQVFiQyxnQkFBVSxFQUFFLDBCQVJDO0FBU2JDLG1CQUFhLEVBQUUsRUFU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Q1QsbUJBQTdHLEVBQWtJMEIsT0FBTyxDQUFDaUMsTUFBUixFQUFsSTtBQUNIO0FBQ0Y7O0FBQUE7QUFFRCxhQUFPLElBQVA7QUFDRDs7OztFQWxHd0JDLDREOztBQXFHWmpFLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmNvbnN0IHRvcG9qc29uID0gcmVxdWlyZSgndG9wb2pzb24nKTtcbmNvbnN0IHdvcmxkID0gcmVxdWlyZSgnLi90b3BvLmpzb24nKTtcbmNvbnN0IEF0bGFzID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcbmNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMuZ2FkbSkuZmVhdHVyZXM7XG5jb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5nYWRtLCAoYSwgYikgPT4gYSAhPT0gYik7XG5jb25zdCBkaXNwdXRlZCA9IHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuZGlzcHV0ZWQpO1xuY29uc3QgbGFuZCA9IHRvcG9qc29uLmZlYXR1cmUod29ybGQsIHdvcmxkLm9iamVjdHMubGFuZCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvY2F0aW9uOiAnVVNBJyxcbiAgICAvLyBib3JkZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgYm9yZGVyX3N0cm9rZV9jb2xvcjogJyMyZjM1M2YnLFxuICAgIG91dGVyX3N0cm9rZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAxLjIsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogMi41LFxuICAgIGRpc3B1dGVkOiB0cnVlLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsNV0sXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCBzcGhlcmUgPSB7IHR5cGU6ICdTcGhlcmUnIH07XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgY29uc3QgeCA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC14Jyk7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC15Jyk7XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbLXgsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XSlcbiAgICB9XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuICAgIGxldCBwPVtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmxvY2F0aW9uKSl7XG4gICAgICBwID0gcHJvcHMubG9jYXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbCA9IEF0bGFzLmdldENvdW50cnkocHJvcHMubG9jYXRpb24pO1xuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgbG9jYXRpb24gPSBsLmlzb0FscGhhMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gJ05BJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBsZXQgY291bnRyeVxuICAgICAgaWYgKCFwWzBdKXtcbiAgICAgICAgY291bnRyeSA9IGNvdW50cmllcy5maWx0ZXIoZCA9PiBkLnByb3BlcnRpZXMuR0lEXzAgPT09IGxvY2F0aW9uKVswXTtcbiAgICAgICAgcCA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpOyAgXG4gICAgICB9XG4gICAgICBpZiAocFswXSl7ICAgICAgICBcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcFswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHBbMV1dKTtcbiAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwWzBdKTtcbiAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwWzFdKTtcblxuICAgICAgICBkMy50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgICAgLnR3ZWVuKCdyb3RhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHIodCkpO1xuICAgICAgICAgICAgICBjb25zdCBjZW50cm9pZFBybyA9IHByb2plY3Rpb24ocCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgobGFuZCksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvciwgY29udGV4dC5maWxsKCk7ICBcbiAgICAgICAgICAgICAgaWYgKGNvdW50cnkpe1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoY291bnRyeSksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yLCBjb250ZXh0LmZpbGwoKTsgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5lbmFibGVfZG90KXtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBjb250ZXh0LmFyYyhjZW50cm9pZFByb1swXSwgY2VudHJvaWRQcm9bMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3IsIGNvbnRleHQuZmlsbCgpOyAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKXtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGRpc3B1dGVkKSwgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpLGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChib3JkZXJzKSwgY29udGV4dC5zZXRMaW5lRGFzaChbXSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoc3BoZXJlKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGxhbmQpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3IsIGNvbnRleHQuZmlsbCgpOyAgXG4gICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKXtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoZGlzcHV0ZWQpLCBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSksY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChib3JkZXJzKSwgY29udGV4dC5zZXRMaW5lRGFzaChbXSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChzcGhlcmUpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmUsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JldHJvdHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})