"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import Head from 'next/head'\n// import Image from 'next/image'\n// import styles from '../styles/Home.module.css'\n\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar AppState = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inPlay = ref[0], setInPlay = ref[1];\n    if (inPlay) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Game, {\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainMenu, {\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    }\n};\n_s(AppState, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AppState;\nvar Minesweeper = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"minesweeper\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppState, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = Minesweeper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minesweeper);\nvar _c, _c1;\n$RefreshReg$(_c, \"AppState\");\n$RefreshReg$(_c1, \"Minesweeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsRUFBK0I7QUFDL0IsRUFBaUM7QUFDakMsRUFBaUQ7QUFFQzs7O0FBSWxELEdBQUssQ0FBQ0csUUFBUSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQzNCLEdBQUssQ0FBdUJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DSSxNQUFNLEdBQWVKLEdBQWUsS0FBNUJLLFNBQVMsR0FBSUwsR0FBZTtJQUMzQyxFQUFFLEVBQUVJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxzRUFBRUUsSUFBSTtZQUFDRCxTQUFTLEVBQUVBLFNBQVM7Ozs7Ozs7O0lBQ25DLENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxzRUFBRUUsUUFBUTtZQUFDRixTQUFTLEVBQUVBLFNBQVM7Ozs7Ozs7O0lBQ3ZDLENBQUM7QUFDSCxDQUFDO0dBUEtILFFBQVE7S0FBUkEsUUFBUTtBQVdkLEdBQUssQ0FBQ00sV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7SUFDekIsTUFBTSxzRUFDSEMsQ0FBRztRQUFDQyxFQUFFLEVBQUMsQ0FBYTs7Ozs7Ozt1RkFDbEJSLFFBQVE7Ozs7Ozs7OztBQUdmLENBQUM7TUFOS00sV0FBVztBQVFqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuY29uc3QgQXBwU3RhdGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2luUGxheSwgc2V0SW5QbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgaWYgKGluUGxheSkge1xuICAgIHJldHVybiA8R2FtZSBzZXRJblBsYXk9e3NldEluUGxheX0gLz47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxNYWluTWVudSBzZXRJblBsYXk9e3NldEluUGxheX0gLz47XG4gIH1cbn1cblxuXG5cbmNvbnN0IE1pbmVzd2VlcGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJtaW5lc3dlZXBlclwiPlxuICAgICAgPEFwcFN0YXRlIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNaW5lc3dlZXBlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwU3RhdGUiLCJwcm9wcyIsImluUGxheSIsInNldEluUGxheSIsIkdhbWUiLCJNYWluTWVudSIsIk1pbmVzd2VlcGVyIiwiZGl2IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});