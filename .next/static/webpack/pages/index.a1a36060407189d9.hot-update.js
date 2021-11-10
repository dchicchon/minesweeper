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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./components/Board.js\");\n/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard */ \"./components/Dashboard.js\");\n/* harmony import */ var _GameOverModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameOverModal */ \"./components/GameOverModal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Game = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref1[0], setGamesLost = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref2[0], setGameNum = ref2[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref3[0], setGameStatus = ref3[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-game\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GameOverModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUN2QjtBQUNRO0FBQ1E7QUFDRzs7O0FBRTlDLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQ3JCLEdBQUcsQ0FBMkJQLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQW5DUSxRQUFRLEdBQWlCUixHQUFXLEtBQTFCUyxXQUFXLEdBQUlULEdBQVc7SUFDekMsR0FBRyxDQUE2QkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBckNVLFNBQVMsR0FBa0JWLElBQVcsS0FBM0JXLFlBQVksR0FBSVgsSUFBVztJQUMzQyxHQUFHLENBQXlCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFqQ1ksT0FBTyxHQUFnQlosSUFBVyxLQUF6QmEsVUFBVSxHQUFJYixJQUFXLElBQUUsQ0FBaUU7SUFDMUcsR0FBRyxDQUErQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBdkNjLFVBQVUsR0FBbUJkLElBQVcsS0FBNUJlLGFBQWEsR0FBSWYsSUFBVyxJQUFFLENBQTZDO0lBRTVGQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdDO0lBQ2hELENBQUMsRUFBRSxDQUFDSDtRQUFBQSxVQUFVO0lBQUEsQ0FBQztJQUNmLE1BQU0sdUVBQ0RJLENBQUc7UUFBQ0MsRUFBRSxFQUFDLENBQVc7Ozs7Ozs7O2lGQUNkQyxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7OzswQkFBQyxDQUFXOztpRkFDaENsQixrREFBUztnQkFDTlcsVUFBVSxFQUFFQSxVQUFVO2dCQUN0Qk4sUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkUsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OztpRkFFbkJWLDhDQUFLO2dCQUNGb0IsU0FBUyxFQUFFZixLQUFLLENBQUNlLFNBQVM7Z0JBQzFCZCxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCRSxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCRSxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCRSxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCQyxhQUFhLEVBQUVBLGFBQWE7Z0JBQzVCRixVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCSixXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCRSxZQUFZLEVBQUVBLFlBQVk7Ozs7Ozs7O1lBRzdCRyxVQUFVLEtBQUssQ0FBQyxHQUNiLENBQUUseUVBRURWLHNEQUFhO2dCQUNWUSxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCQyxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCQyxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCQyxhQUFhLEVBQUVBLGFBQWE7Z0JBQzVCTyxTQUFTLEVBQUVmLEtBQUssQ0FBQ2UsU0FBUzs7Ozs7Ozs7OztBQU85QyxDQUFDO0dBN0NLaEIsSUFBSTtLQUFKQSxJQUFJO0FBK0NWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS5qcz9jOGI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkJ1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vRGFzaGJvYXJkJ1xyXG5pbXBvcnQgR2FtZU92ZXJNb2RhbCBmcm9tICcuL0dhbWVPdmVyTW9kYWwnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2dhbWUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEdhbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGxldCBbZ2FtZXNXb24sIHNldEdhbWVzV29uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgbGV0IFtnYW1lc0xvc3QsIHNldEdhbWVzTG9zdF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGxldCBbZ2FtZU51bSwgc2V0R2FtZU51bV0gPSB1c2VTdGF0ZSgwKTsgLy8gYW55dGltZSBnYW1lIG51bSBjaGFuZ2UsIHJlcmVuZGVyIHRoZSBkYXNoYm9hcmQgZm9yIHRpbWVyIHNha2VcclxuICAgIGxldCBbZ2FtZVN0YXR1cywgc2V0R2FtZVN0YXR1c10gPSB1c2VTdGF0ZSgwKTsgLy8gMCBpcyBhY3RpdmUsIDEgaXMgZ2FtZSBsb3N0LCAyIGlzIGdhbWUgd29uXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1biB0aGlzIHdoZW4gdGhlIGdhbWUgY2hhbmdlc1wiKTtcclxuICAgIH0sIFtnYW1lU3RhdHVzXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLWdhbWVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+TWluZXN3ZWVwZXI8L2gxPlxyXG4gICAgICAgICAgICA8RGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgZ2FtZXNXb249e2dhbWVzV29ufVxyXG4gICAgICAgICAgICAgICAgZ2FtZXNMb3N0PXtnYW1lc0xvc3R9XHJcbiAgICAgICAgICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fVxyXG4gICAgICAgICAgICAgICAgZ2FtZXNXb249e2dhbWVzV29ufVxyXG4gICAgICAgICAgICAgICAgZ2FtZXNMb3N0PXtnYW1lc0xvc3R9XHJcbiAgICAgICAgICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNldEdhbWVTdGF0dXM9e3NldEdhbWVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lTnVtPXtzZXRHYW1lTnVtfVxyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXNXb249e3NldEdhbWVzV29ufVxyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXNMb3N0PXtzZXRHYW1lc0xvc3R9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7Z2FtZVN0YXR1cyA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxHYW1lT3Zlck1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU51bT17Z2FtZU51bX1cclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1lTnVtPXtzZXRHYW1lTnVtfVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJblBsYXk9e3Byb3BzLnNldEluUGxheX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogbWF5YmUgcHV0IG1vZGFsIGhlcmUgaW5zdGVhZD8gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb2FyZCIsIkRhc2hib2FyZCIsIkdhbWVPdmVyTW9kYWwiLCJzdHlsZXMiLCJHYW1lIiwicHJvcHMiLCJnYW1lc1dvbiIsInNldEdhbWVzV29uIiwiZ2FtZXNMb3N0Iiwic2V0R2FtZXNMb3N0IiwiZ2FtZU51bSIsInNldEdhbWVOdW0iLCJnYW1lU3RhdHVzIiwic2V0R2FtZVN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImgxIiwiY2xhc3NOYW1lIiwic2V0SW5QbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game.js\n");

/***/ })

});