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

/***/ "./components/Game.js":
/*!****************************!*\
  !*** ./components/Game.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Game = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref1[0], setGamesLost = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref2[0], setGameNum = ref2[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref3[0], setGameStatus = ref3[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-game\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashboard, {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Board, {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GameOverModal, {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDs7O0FBRWxELEdBQUssQ0FBQ0csSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQ3JCLEdBQUcsQ0FBMkJILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQW5DSSxRQUFRLEdBQWlCSixHQUFXLEtBQTFCSyxXQUFXLEdBQUlMLEdBQVc7SUFDekMsR0FBRyxDQUE2QkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBckNNLFNBQVMsR0FBa0JOLElBQVcsS0FBM0JPLFlBQVksR0FBSVAsSUFBVztJQUMzQyxHQUFHLENBQXlCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ1EsT0FBTyxHQUFnQlIsSUFBVyxLQUF6QlMsVUFBVSxHQUFJVCxJQUFXLElBQUUsQ0FBaUU7SUFDMUcsR0FBRyxDQUErQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBdkNVLFVBQVUsR0FBbUJWLElBQVcsS0FBNUJXLGFBQWEsR0FBSVgsSUFBVyxJQUFFLENBQTZDO0lBRTVGQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdDO0lBQ2hELENBQUMsRUFBRSxDQUFDSDtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUNmLE1BQU0sdUVBQ0RJLENBQUc7UUFBQ0MsRUFBRSxFQUFDLENBQVc7Ozs7Ozs7O2lGQUNkQyxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7OzswQkFBQyxDQUFXOztpRkFDaENDLFNBQVM7Z0JBQ05SLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJOLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJFLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7aUZBRW5CVyxLQUFLO2dCQUNGQyxTQUFTLEVBQUVqQixLQUFLLENBQUNpQixTQUFTO2dCQUMxQmhCLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJFLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJFLE9BQU8sRUFBRUEsT0FBTztnQkFDaEJFLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJDLGFBQWEsRUFBRUEsYUFBYTtnQkFDNUJGLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJKLFdBQVcsRUFBRUEsV0FBVztnQkFDeEJFLFlBQVksRUFBRUEsWUFBWTs7Ozs7Ozs7WUFHN0JHLFVBQVUsS0FBSyxDQUFDLEdBQ2IsQ0FBRSx5RUFFRFcsYUFBYTtnQkFDVmIsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQkMsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsYUFBYSxFQUFFQSxhQUFhO2dCQUM1QlMsU0FBUyxFQUFFakIsS0FBSyxDQUFDaUIsU0FBUzs7Ozs7Ozs7OztBQU85QyxDQUFDO0dBN0NLbEIsSUFBSTtLQUFKQSxJQUFJO0FBK0NWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS5qcz9jOGI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBHYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgW2dhbWVzV29uLCBzZXRHYW1lc1dvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGxldCBbZ2FtZXNMb3N0LCBzZXRHYW1lc0xvc3RdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBsZXQgW2dhbWVOdW0sIHNldEdhbWVOdW1dID0gdXNlU3RhdGUoMCk7IC8vIGFueXRpbWUgZ2FtZSBudW0gY2hhbmdlLCByZXJlbmRlciB0aGUgZGFzaGJvYXJkIGZvciB0aW1lciBzYWtlXHJcbiAgICBsZXQgW2dhbWVTdGF0dXMsIHNldEdhbWVTdGF0dXNdID0gdXNlU3RhdGUoMCk7IC8vIDAgaXMgYWN0aXZlLCAxIGlzIGdhbWUgbG9zdCwgMiBpcyBnYW1lIHdvblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gdGhpcyB3aGVuIHRoZSBnYW1lIGNoYW5nZXNcIik7XHJcbiAgICB9LCBbZ2FtZVN0YXR1c10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwibWFpbi1nYW1lXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPk1pbmVzd2VlcGVyPC9oMT5cclxuICAgICAgICAgICAgPERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgIGdhbWVzV29uPXtnYW1lc1dvbn1cclxuICAgICAgICAgICAgICAgIGdhbWVzTG9zdD17Z2FtZXNMb3N0fVxyXG4gICAgICAgICAgICAgICAgZ2FtZU51bT17Z2FtZU51bX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzZXRJblBsYXk9e3Byb3BzLnNldEluUGxheX1cclxuICAgICAgICAgICAgICAgIGdhbWVzV29uPXtnYW1lc1dvbn1cclxuICAgICAgICAgICAgICAgIGdhbWVzTG9zdD17Z2FtZXNMb3N0fVxyXG4gICAgICAgICAgICAgICAgZ2FtZU51bT17Z2FtZU51bX1cclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lU3RhdHVzPXtzZXRHYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2V0R2FtZU51bT17c2V0R2FtZU51bX1cclxuICAgICAgICAgICAgICAgIHNldEdhbWVzV29uPXtzZXRHYW1lc1dvbn1cclxuICAgICAgICAgICAgICAgIHNldEdhbWVzTG9zdD17c2V0R2FtZXNMb3N0fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge2dhbWVTdGF0dXMgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8R2FtZU92ZXJNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZU51bT17c2V0R2FtZU51bX1cclxuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVTdGF0dXM9e3NldEdhbWVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIG1heWJlIHB1dCBtb2RhbCBoZXJlIGluc3RlYWQ/ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2FtZSIsInByb3BzIiwiZ2FtZXNXb24iLCJzZXRHYW1lc1dvbiIsImdhbWVzTG9zdCIsInNldEdhbWVzTG9zdCIsImdhbWVOdW0iLCJzZXRHYW1lTnVtIiwiZ2FtZVN0YXR1cyIsInNldEdhbWVTdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJoMSIsImNsYXNzTmFtZSIsIkRhc2hib2FyZCIsIkJvYXJkIiwic2V0SW5QbGF5IiwiR2FtZU92ZXJNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainMenu */ \"./components/MainMenu.js\");\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Game */ \"./components/Game.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import styles from '../styles/Home.module.css'\n\n\n\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar AppState = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inPlay = ref[0], setInPlay = ref[1];\n    if (inPlay) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    }\n};\n_s(AppState, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AppState;\nvar Minesweeper = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"minesweeper\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppState, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = Minesweeper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minesweeper);\nvar _c, _c1;\n$RefreshReg$(_c, \"AppState\");\n$RefreshReg$(_c1, \"Minesweeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxFQUFpRDtBQUVWO0FBRU07QUFDUjs7O0FBRXJDLEdBQUssQ0FBQ0ksUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O0lBQ3RCLEdBQUssQ0FBdUJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DSSxNQUFNLEdBQWVKLEdBQWUsS0FBNUJLLFNBQVMsR0FBSUwsR0FBZTtJQUMzQyxFQUFFLEVBQUVJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxzRUFBRUYsd0RBQUk7WUFBQ0csU0FBUyxFQUFFQSxTQUFTOzs7Ozs7OztJQUNuQyxDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sc0VBQUVKLDREQUFRO1lBQUNJLFNBQVMsRUFBRUEsU0FBUzs7Ozs7Ozs7SUFDdkMsQ0FBQztBQUNILENBQUM7R0FQS0YsUUFBUTtLQUFSQSxRQUFRO0FBU2QsR0FBSyxDQUFDRyxXQUFXLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQztJQUN6QixNQUFNLHNFQUNIQyxDQUFHO1FBQUNDLEVBQUUsRUFBQyxDQUFhOzs7Ozs7O3VGQUNsQkwsUUFBUTs7Ozs7Ozs7O0FBR2YsQ0FBQztNQU5LRyxXQUFXO0FBUWpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1haW5NZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbk1lbnUnXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWUnXG5cbmNvbnN0IEFwcFN0YXRlID0gKCkgPT4ge1xuICBjb25zdCBbaW5QbGF5LCBzZXRJblBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBpZiAoaW5QbGF5KSB7XG4gICAgcmV0dXJuIDxHYW1lIHNldEluUGxheT17c2V0SW5QbGF5fSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPE1haW5NZW51IHNldEluUGxheT17c2V0SW5QbGF5fSAvPjtcbiAgfVxufVxuXG5jb25zdCBNaW5lc3dlZXBlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWluZXN3ZWVwZXJcIj5cbiAgICAgIDxBcHBTdGF0ZSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWluZXN3ZWVwZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1haW5NZW51IiwiR2FtZSIsIkFwcFN0YXRlIiwiaW5QbGF5Iiwic2V0SW5QbGF5IiwiTWluZXN3ZWVwZXIiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});