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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import Head from 'next/head'\n// import Image from 'next/image'\n// import styles from '../styles/Home.module.css'\n\nvar _this = undefined, _this1 = undefined, _this2 = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AppState = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inPlay = ref[0], setInPlay = ref[1];\n    if (isPlaying) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Game, {\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainMenu, {\n            setInPlay: props.setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    }\n};\n_s(AppState, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AppState;\nvar Game = function(props) {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref1[0], setGamesLost = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref2[0], setGameNum = ref2[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref3[0], setGameStatus = ref3[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-game\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this1,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashboard, {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this1\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Board, {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this1\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GameOverModal, {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                },\n                __self: _this1\n            })\n        ]\n    }));\n};\n_s1(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c1 = Game;\nvar Minesweeper = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"minesweeper\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 67,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppState, {\n            inPlay: inPlay,\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            },\n            __self: _this2\n        })\n    }));\n};\n_c2 = Minesweeper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minesweeper);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"AppState\");\n$RefreshReg$(_c1, \"Game\");\n$RefreshReg$(_c2, \"Minesweeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO1lBQUNFLE1BQU0sRUFBRUEsTUFBTTtZQUFFQyxTQUFTLEVBQUVBLFNBQVM7Ozs7Ozs7OztBQUdwRCxDQUFDO01BTktxQixXQUFXO0FBUWpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5jb25zdCBBcHBTdGF0ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaW5QbGF5LCBzZXRJblBsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgcmV0dXJuIDxHYW1lIHNldEluUGxheT17c2V0SW5QbGF5fSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPE1haW5NZW51IHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fSAvPjtcbiAgfVxufVxuXG5jb25zdCBHYW1lID0gKHByb3BzKSA9PiB7XG4gIGxldCBbZ2FtZXNXb24sIHNldEdhbWVzV29uXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2dhbWVzTG9zdCwgc2V0R2FtZXNMb3N0XSA9IHVzZVN0YXRlKDApO1xuICBsZXQgW2dhbWVOdW0sIHNldEdhbWVOdW1dID0gdXNlU3RhdGUoMCk7IC8vIGFueXRpbWUgZ2FtZSBudW0gY2hhbmdlLCByZXJlbmRlciB0aGUgZGFzaGJvYXJkIGZvciB0aW1lciBzYWtlXG4gIGxldCBbZ2FtZVN0YXR1cywgc2V0R2FtZVN0YXR1c10gPSB1c2VTdGF0ZSgwKTsgLy8gMCBpcyBhY3RpdmUsIDEgaXMgZ2FtZSBsb3N0LCAyIGlzIGdhbWUgd29uXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlJ1biB0aGlzIHdoZW4gdGhlIGdhbWUgY2hhbmdlc1wiKTtcbiAgfSwgW2dhbWVTdGF0dXNdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibWFpbi1nYW1lXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NaW5lc3dlZXBlcjwvaDE+XG4gICAgICA8RGFzaGJvYXJkXG4gICAgICAgIGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9XG4gICAgICAgIGdhbWVzV29uPXtnYW1lc1dvbn1cbiAgICAgICAgZ2FtZXNMb3N0PXtnYW1lc0xvc3R9XG4gICAgICAgIGdhbWVOdW09e2dhbWVOdW19XG4gICAgICAvPlxuICAgICAgPEJvYXJkXG4gICAgICAgIHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fVxuICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XG4gICAgICAgIGdhbWVzTG9zdD17Z2FtZXNMb3N0fVxuICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxuICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICBzZXRHYW1lU3RhdHVzPXtzZXRHYW1lU3RhdHVzfVxuICAgICAgICBzZXRHYW1lTnVtPXtzZXRHYW1lTnVtfVxuICAgICAgICBzZXRHYW1lc1dvbj17c2V0R2FtZXNXb259XG4gICAgICAgIHNldEdhbWVzTG9zdD17c2V0R2FtZXNMb3N0fVxuICAgICAgLz5cblxuICAgICAge2dhbWVTdGF0dXMgPT09IDAgPyAoXG4gICAgICAgIFwiXCJcbiAgICAgICkgOiAoXG4gICAgICAgIDxHYW1lT3Zlck1vZGFsXG4gICAgICAgICAgZ2FtZU51bT17Z2FtZU51bX1cbiAgICAgICAgICBzZXRHYW1lTnVtPXtzZXRHYW1lTnVtfVxuICAgICAgICAgIGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9XG4gICAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cbiAgICAgICAgICBzZXRJblBsYXk9e3Byb3BzLnNldEluUGxheX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBtYXliZSBwdXQgbW9kYWwgaGVyZSBpbnN0ZWFkPyAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTWluZXN3ZWVwZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1pbmVzd2VlcGVyXCI+XG4gICAgICA8QXBwU3RhdGUgaW5QbGF5PXtpblBsYXl9IHNldEluUGxheT17c2V0SW5QbGF5fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWluZXN3ZWVwZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFwcFN0YXRlIiwicHJvcHMiLCJpblBsYXkiLCJzZXRJblBsYXkiLCJpc1BsYXlpbmciLCJHYW1lIiwiTWFpbk1lbnUiLCJnYW1lc1dvbiIsInNldEdhbWVzV29uIiwiZ2FtZXNMb3N0Iiwic2V0R2FtZXNMb3N0IiwiZ2FtZU51bSIsInNldEdhbWVOdW0iLCJnYW1lU3RhdHVzIiwic2V0R2FtZVN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImgxIiwiY2xhc3NOYW1lIiwiRGFzaGJvYXJkIiwiQm9hcmQiLCJHYW1lT3Zlck1vZGFsIiwiTWluZXN3ZWVwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});