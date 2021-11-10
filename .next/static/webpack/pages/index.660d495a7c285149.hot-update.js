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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import Head from 'next/head'\n// import Image from 'next/image'\n// import styles from '../styles/Home.module.css'\n\nvar _this = undefined, _this1 = undefined, _this2 = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar AppState = function(props) {\n    var isPlaying = props.inPlay;\n    if (isPlaying) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Game, {\n            setInPlay: props.setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainMenu, {\n            setInPlay: props.setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 12\n            },\n            __self: _this\n        }));\n    }\n};\n_c = AppState;\nvar Game = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref1[0], setGamesLost = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref2[0], setGameNum = ref2[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref3[0], setGameStatus = ref3[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-game\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this1,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashboard, {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this1\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Board, {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this1\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GameOverModal, {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                },\n                __self: _this1\n            })\n        ]\n    }));\n};\n_s(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c1 = Game;\nvar Minesweeper = function() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inPlay = ref[0], setInPlay = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"minesweeper\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 70,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppState, {\n            inPlay: inPlay,\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            },\n            __self: _this2\n        })\n    }));\n};\n_s1(Minesweeper, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c2 = Minesweeper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minesweeper);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"AppState\");\n$RefreshReg$(_c1, \"Game\");\n$RefreshReg$(_c2, \"Minesweeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SG1CLENBQUc7UUFBQ0MsRUFBRSxFQUFDLENBQWE7Ozs7Ozs7dUZBQ2xCbEIsUUFBUTtZQUFDRyxNQUFNLEVBQUVBLE1BQU07WUFBRUUsU0FBUyxFQUFFQSxTQUFTOzs7Ozs7Ozs7QUFHcEQsQ0FBQztJQVBLbUIsV0FBVztNQUFYQSxXQUFXO0FBU2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5jb25zdCBBcHBTdGF0ZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBpc1BsYXlpbmcgPSBwcm9wcy5pblBsYXk7XG4gIGlmIChpc1BsYXlpbmcpIHtcbiAgICByZXR1cm4gPEdhbWUgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9IC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8TWFpbk1lbnUgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9IC8+O1xuICB9XG59XG5cblxuY29uc3QgR2FtZSA9IChwcm9wcykgPT4ge1xuICBsZXQgW2dhbWVzV29uLCBzZXRHYW1lc1dvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtnYW1lc0xvc3QsIHNldEdhbWVzTG9zdF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtnYW1lTnVtLCBzZXRHYW1lTnVtXSA9IHVzZVN0YXRlKDApOyAvLyBhbnl0aW1lIGdhbWUgbnVtIGNoYW5nZSwgcmVyZW5kZXIgdGhlIGRhc2hib2FyZCBmb3IgdGltZXIgc2FrZVxuICBsZXQgW2dhbWVTdGF0dXMsIHNldEdhbWVTdGF0dXNdID0gdXNlU3RhdGUoMCk7IC8vIDAgaXMgYWN0aXZlLCAxIGlzIGdhbWUgbG9zdCwgMiBpcyBnYW1lIHdvblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW4gdGhpcyB3aGVuIHRoZSBnYW1lIGNoYW5nZXNcIik7XG4gIH0sIFtnYW1lU3RhdHVzXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW4tZ2FtZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+TWluZXN3ZWVwZXI8L2gxPlxuICAgICAgPERhc2hib2FyZFxuICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XG4gICAgICAgIGdhbWVzTG9zdD17Z2FtZXNMb3N0fVxuICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxuICAgICAgLz5cbiAgICAgIDxCb2FyZFxuICAgICAgICBzZXRJblBsYXk9e3Byb3BzLnNldEluUGxheX1cbiAgICAgICAgZ2FtZXNXb249e2dhbWVzV29ufVxuICAgICAgICBnYW1lc0xvc3Q9e2dhbWVzTG9zdH1cbiAgICAgICAgZ2FtZU51bT17Z2FtZU51bX1cbiAgICAgICAgZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c31cbiAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cbiAgICAgICAgc2V0R2FtZU51bT17c2V0R2FtZU51bX1cbiAgICAgICAgc2V0R2FtZXNXb249e3NldEdhbWVzV29ufVxuICAgICAgICBzZXRHYW1lc0xvc3Q9e3NldEdhbWVzTG9zdH1cbiAgICAgIC8+XG5cbiAgICAgIHtnYW1lU3RhdHVzID09PSAwID8gKFxuICAgICAgICBcIlwiXG4gICAgICApIDogKFxuICAgICAgICA8R2FtZU92ZXJNb2RhbFxuICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XG4gICAgICAgICAgc2V0R2FtZU51bT17c2V0R2FtZU51bX1cbiAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICAgIHNldEdhbWVTdGF0dXM9e3NldEdhbWVTdGF0dXN9XG4gICAgICAgICAgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7LyogbWF5YmUgcHV0IG1vZGFsIGhlcmUgaW5zdGVhZD8gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuY29uc3QgTWluZXN3ZWVwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpblBsYXksIHNldEluUGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1pbmVzd2VlcGVyXCI+XG4gICAgICA8QXBwU3RhdGUgaW5QbGF5PXtpblBsYXl9IHNldEluUGxheT17c2V0SW5QbGF5fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWluZXN3ZWVwZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFwcFN0YXRlIiwicHJvcHMiLCJpc1BsYXlpbmciLCJpblBsYXkiLCJHYW1lIiwic2V0SW5QbGF5IiwiTWFpbk1lbnUiLCJnYW1lc1dvbiIsInNldEdhbWVzV29uIiwiZ2FtZXNMb3N0Iiwic2V0R2FtZXNMb3N0IiwiZ2FtZU51bSIsInNldEdhbWVOdW0iLCJnYW1lU3RhdHVzIiwic2V0R2FtZVN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImgxIiwiY2xhc3NOYW1lIiwiRGFzaGJvYXJkIiwiQm9hcmQiLCJHYW1lT3Zlck1vZGFsIiwiTWluZXN3ZWVwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});