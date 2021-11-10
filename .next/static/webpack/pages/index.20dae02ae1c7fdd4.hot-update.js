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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./components/Board.js\");\n/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard */ \"./components/Dashboard.js\");\n/* harmony import */ var _GameOverModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameOverModal */ \"./components/GameOverModal.js\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/game.module.css */ \"./styles/game.module.css\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_game_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Game = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref1[0], setGamesLost = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref2[0], setGameNum = ref2[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref3[0], setGameStatus = ref3[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GameOverModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3ZCO0FBQ1E7QUFDUTtBQUNHOzs7QUFFOUMsR0FBSyxDQUFDTyxJQUFJLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFDckIsR0FBRyxDQUEyQlAsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBbkNRLFFBQVEsR0FBaUJSLEdBQVcsS0FBMUJTLFdBQVcsR0FBSVQsR0FBVztJQUN6QyxHQUFHLENBQTZCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFyQ1UsU0FBUyxHQUFrQlYsSUFBVyxLQUEzQlcsWUFBWSxHQUFJWCxJQUFXO0lBQzNDLEdBQUcsQ0FBeUJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQWpDWSxPQUFPLEdBQWdCWixJQUFXLEtBQXpCYSxVQUFVLEdBQUliLElBQVcsSUFBRSxDQUFpRTtJQUMxRyxHQUFHLENBQStCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF2Q2MsVUFBVSxHQUFtQmQsSUFBVyxLQUE1QmUsYUFBYSxHQUFJZixJQUFXLElBQUUsQ0FBNkM7SUFFNUZDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYmUsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0M7SUFDaEQsQ0FBQyxFQUFFLENBQUNIO1FBQUFBLFVBQVU7SUFBQSxDQUFDO0lBQ2YsTUFBTSx1RUFDREksQ0FBRztRQUFDQyxFQUFFLEVBQUVkLGdFQUFNOzs7Ozs7OztpRkFDVmUsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQU87Ozs7Ozs7MEJBQUMsQ0FBVzs7aUZBQ2hDbEIsa0RBQVM7Z0JBQ05XLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJOLFFBQVEsRUFBRUEsUUFBUTtnQkFDbEJFLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7aUZBRW5CViw4Q0FBSztnQkFDRm9CLFNBQVMsRUFBRWYsS0FBSyxDQUFDZSxTQUFTO2dCQUMxQmQsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkUsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQkUsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsYUFBYSxFQUFFQSxhQUFhO2dCQUM1QkYsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkosV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkUsWUFBWSxFQUFFQSxZQUFZOzs7Ozs7OztZQUc3QkcsVUFBVSxLQUFLLENBQUMsR0FDYixDQUFFLHlFQUVEVixzREFBYTtnQkFDVlEsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQkMsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsYUFBYSxFQUFFQSxhQUFhO2dCQUM1Qk8sU0FBUyxFQUFFZixLQUFLLENBQUNlLFNBQVM7Ozs7Ozs7Ozs7QUFPOUMsQ0FBQztHQTdDS2hCLElBQUk7S0FBSkEsSUFBSTtBQStDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUuanM/YzhiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZCdcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL0Rhc2hib2FyZCdcclxuaW1wb3J0IEdhbWVPdmVyTW9kYWwgZnJvbSAnLi9HYW1lT3Zlck1vZGFsJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9nYW1lLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBHYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgW2dhbWVzV29uLCBzZXRHYW1lc1dvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGxldCBbZ2FtZXNMb3N0LCBzZXRHYW1lc0xvc3RdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBsZXQgW2dhbWVOdW0sIHNldEdhbWVOdW1dID0gdXNlU3RhdGUoMCk7IC8vIGFueXRpbWUgZ2FtZSBudW0gY2hhbmdlLCByZXJlbmRlciB0aGUgZGFzaGJvYXJkIGZvciB0aW1lciBzYWtlXHJcbiAgICBsZXQgW2dhbWVTdGF0dXMsIHNldEdhbWVTdGF0dXNdID0gdXNlU3RhdGUoMCk7IC8vIDAgaXMgYWN0aXZlLCAxIGlzIGdhbWUgbG9zdCwgMiBpcyBnYW1lIHdvblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW4gdGhpcyB3aGVuIHRoZSBnYW1lIGNoYW5nZXNcIik7XHJcbiAgICB9LCBbZ2FtZVN0YXR1c10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NaW5lc3dlZXBlcjwvaDE+XHJcbiAgICAgICAgICAgIDxEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XHJcbiAgICAgICAgICAgICAgICBnYW1lc0xvc3Q9e2dhbWVzTG9zdH1cclxuICAgICAgICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9XHJcbiAgICAgICAgICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XHJcbiAgICAgICAgICAgICAgICBnYW1lc0xvc3Q9e2dhbWVzTG9zdH1cclxuICAgICAgICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNldEdhbWVOdW09e3NldEdhbWVOdW19XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lc1dvbj17c2V0R2FtZXNXb259XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lc0xvc3Q9e3NldEdhbWVzTG9zdH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtnYW1lU3RhdHVzID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEdhbWVPdmVyTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVOdW09e3NldEdhbWVOdW19XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1lU3RhdHVzPXtzZXRHYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBtYXliZSBwdXQgbW9kYWwgaGVyZSBpbnN0ZWFkPyAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvYXJkIiwiRGFzaGJvYXJkIiwiR2FtZU92ZXJNb2RhbCIsInN0eWxlcyIsIkdhbWUiLCJwcm9wcyIsImdhbWVzV29uIiwic2V0R2FtZXNXb24iLCJnYW1lc0xvc3QiLCJzZXRHYW1lc0xvc3QiLCJnYW1lTnVtIiwic2V0R2FtZU51bSIsImdhbWVTdGF0dXMiLCJzZXRHYW1lU3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiaDEiLCJjbGFzc05hbWUiLCJzZXRJblBsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".game_title__3mKKk {\\r\\n    color: gold;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#game_main_game__2A6MB {\\r\\n    width: 50%;\\r\\n    padding-top: 25px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n@media (max-width: 600px) {\\r\\n    #game_main-game__1SQMr {\\r\\n        margin: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/game.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI;QACI,SAAS;QACT,WAAW;IACf;AACJ\",\"sourcesContent\":[\".title {\\r\\n    color: gold;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#main_game {\\r\\n    width: 50%;\\r\\n    padding-top: 25px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n@media (max-width: 600px) {\\r\\n    #main-game {\\r\\n        margin: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"title\": \"game_title__3mKKk\",\n\t\"main_game\": \"game_main_game__2A6MB\",\n\t\"main-game\": \"game_main-game__1SQMr\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vc3R5bGVzL2dhbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsOERBQThELG9CQUFvQiwyQkFBMkIsS0FBSyxnQ0FBZ0MsbUJBQW1CLDBCQUEwQix1QkFBdUIsS0FBSywrQkFBK0IsZ0NBQWdDLHNCQUFzQix3QkFBd0IsU0FBUyxLQUFLLFdBQVcsdUZBQXVGLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssaUNBQWlDLG9CQUFvQiwyQkFBMkIsS0FBSyxvQkFBb0IsbUJBQW1CLDBCQUEwQix1QkFBdUIsS0FBSywrQkFBK0Isb0JBQW9CLHNCQUFzQix3QkFBd0IsU0FBUyxLQUFLLHVCQUF1QjtBQUM1MUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dhbWUubW9kdWxlLmNzcz9hMDhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZV90aXRsZV9fM21LS2sge1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZV9tYWluX2dhbWVfXzJBNk1CIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgI2dhbWVfbWFpbi1nYW1lX18xU1FNciB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dhbWUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksU0FBUztRQUNULFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSB7XFxyXFxuICAgIGNvbG9yOiBnb2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtYWluX2dhbWUge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAjbWFpbi1nYW1lIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwiZ2FtZV90aXRsZV9fM21LS2tcIixcblx0XCJtYWluX2dhbWVcIjogXCJnYW1lX21haW5fZ2FtZV9fMkE2TUJcIixcblx0XCJtYWluLWdhbWVcIjogXCJnYW1lX21haW4tZ2FtZV9fMVNRTXJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css\n");

/***/ }),

/***/ "./styles/game.module.css":
/*!********************************!*\
  !*** ./styles/game.module.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./game.module.css */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element) {\n                // These elements should always exist. If they do not,\n                // this code should fail.\n                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');\n                var parentNode = anchorElement.parentNode// Normally <head>\n                ;\n                // Each style tag should be placed right before our\n                // anchor. By inserting before and not after, we do not\n                // need to track the last inserted element.\n                parentNode.insertBefore(element, anchorElement);\n            };\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n    if (!a && b || a && !b) {\n        return false;\n    }\n    let p;\n    for(p in a){\n        if (isNamedExport && p === 'default') {\n            continue;\n        }\n        if (a[p] !== b[p]) {\n            return false;\n        }\n    }\n    for(p in b){\n        if (isNamedExport && p === 'default') {\n            continue;\n        }\n        if (!a[p]) {\n            return false;\n        }\n    }\n    return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./game.module.css */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css\",\n      function () {\n        content = __webpack_require__(/*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./game.module.css */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.id, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2FtZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBLFVBQVUsbUJBQU8sQ0FBQyxvTkFBd0c7QUFDMUgsMEJBQTBCLG1CQUFPLENBQUMsK2VBQW1QOztBQUVyUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSwrZUFBbVA7QUFDelA7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywrZUFBbVA7O0FBRTdROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nYW1lLm1vZHVsZS5jc3M/M2Y3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9nYW1lLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vZ2FtZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL2dhbWUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/game.module.css\n");

/***/ })

});