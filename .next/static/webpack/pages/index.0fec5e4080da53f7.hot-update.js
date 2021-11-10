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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import Head from 'next/head'\n// import Image from 'next/image'\n// import styles from '../styles/Home.module.css'\n\nvar _this = undefined, _this1 = undefined, _this2 = undefined, _this3 = undefined, _this4 = undefined, _this5 = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();\nvar Board = function(props) {\n    var _this6 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), board1 = ref[0], setBoard = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), renderedBoard = ref1[0], setRenderedBoard = ref1[1];\n    // Runs anytime the game number changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        createStartingBoard();\n    }, [\n        props.gameNum\n    ]);\n    var createStartingBoard = function() {\n        var mainBoard = [];\n        // This is where we should start doing the random mines cells\n        for(var i = 0; i < 10; i++){\n            var row = [];\n            for(var j = 0; j < 10; j++){\n                var random = Math.random();\n                if (random < 0.2) row.push(\"x\");\n                else row.push(\"o\");\n            }\n            mainBoard.push(row);\n        }\n        renderBoard(mainBoard);\n    };\n    // I think that this is not running once the game ends\n    var renderBoard = function(board) {\n        var returnBoard = [];\n        // Odds 0.1 that its a mine\n        // 0.7 that its a number\n        // 0.2 that its nothing\n        for(var rowNum = 0; rowNum < board.length; rowNum++){\n            var row = [];\n            for(var colNum = 0; colNum < board[rowNum].length; colNum++){\n                var cell = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                    y: rowNum,\n                    x: colNum,\n                    board: board,\n                    endGame: endGame,\n                    checkWin: checkWin,\n                    setBoard: setBoard,\n                    gameNum: props.gameNum,\n                    type: board[rowNum][colNum],\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    },\n                    __self: _this6\n                }, \"\".concat(rowNum).concat(colNum));\n                row.push(cell);\n            }\n            returnBoard.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mine-row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                },\n                __self: _this6,\n                children: row\n            }, rowNum));\n        }\n        setBoard(board);\n        setRenderedBoard(returnBoard);\n    };\n    var endGame = function(didWin) {\n        if (didWin) {\n            props.setGamesWon(function(prevState) {\n                return prevState + 1;\n            });\n            props.setGameStatus(2);\n        } else {\n            props.setGameStatus(1);\n            props.setGamesLost(function(prevState) {\n                return prevState + 1;\n            });\n        }\n    };\n    var checkWin = function(checkBoard) {\n        // Check here if won\n        for(var row = 0; row < checkBoard.length; row++){\n            for(var col = 0; col < checkBoard[0].length; col++){\n                var cellToCheck = checkBoard[row][col];\n                if (cellToCheck === \"o\") return false;\n            }\n        }\n        return true;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        style: props.gameStatus === 0 ? {\n        } : {\n            pointerEvents: 'none'\n        },\n        id: \"board\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 85,\n            columnNumber: 10\n        },\n        __self: _this,\n        children: renderedBoard\n    }));\n};\n_s(Board, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = Board;\nvar AppState = function(props) {\n    var isPlaying = props.inPlay;\n    if (isPlaying) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Game, {\n            setInPlay: props.setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 92,\n                columnNumber: 12\n            },\n            __self: _this1\n        }));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MainMenu, {\n            setInPlay: props.setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 94,\n                columnNumber: 12\n            },\n            __self: _this1\n        }));\n    }\n};\n_c1 = AppState;\nvar formatTime = function(seconds) {\n    var mins = Math.floor(seconds / 60);\n    var secs = seconds >= 60 ? seconds - mins * 60 : seconds;\n    var time = \"\".concat(mins < 10 ? \"0\" + mins : mins, \":\").concat(secs < 10 ? \"0\" + secs : secs);\n    return time;\n};\nvar Dashboard = function(props) {\n    _s1();\n    // Change anytime gameNum changes\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), seconds = ref[0], setSeconds = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = \"\";\n        if (props.gameStatus === 0) {\n            setSeconds(0);\n            timer = setInterval(function() {\n                setSeconds(function(prevState) {\n                    return prevState + 1;\n                });\n            }, 1000);\n        }\n        return function() {\n            return clearInterval(timer);\n        };\n    }, [\n        props.gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"dashboard\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 122,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 123,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    \"Time: \",\n                    formatTime(seconds)\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 124,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    \"Games Won: \",\n                    props.gamesWon\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 125,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    \"Games Lost: \",\n                    props.gamesLost,\n                    \" \"\n                ]\n            })\n        ]\n    }));\n};\n_s1(Dashboard, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c2 = Dashboard;\nvar Game = function(props) {\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref2[0], setGamesLost = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref3[0], setGameNum = ref3[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref4[0], setGameStatus = ref4[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-game\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 142,\n            columnNumber: 5\n        },\n        __self: _this3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 143,\n                    columnNumber: 7\n                },\n                __self: _this3,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashboard, {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 144,\n                    columnNumber: 7\n                },\n                __self: _this3\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Board, {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 150,\n                    columnNumber: 7\n                },\n                __self: _this3\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GameOverModal, {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                    lineNumber: 165,\n                    columnNumber: 9\n                },\n                __self: _this3\n            })\n        ]\n    }));\n};\n_s2(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c3 = Game;\nvar MainMenu = function(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"main-menu\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 181,\n            columnNumber: 5\n        },\n        __self: _this4,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            id: \"menu-items\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 182,\n                columnNumber: 7\n            },\n            __self: _this4,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                        lineNumber: 183,\n                        columnNumber: 9\n                    },\n                    __self: _this4,\n                    children: \"Minesweeper\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    className: \"button\",\n                    onClick: function() {\n                        props.setInPlay(true);\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                        lineNumber: 184,\n                        columnNumber: 9\n                    },\n                    __self: _this4,\n                    children: \"Start Game\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    className: \"button\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                        lineNumber: 192,\n                        columnNumber: 9\n                    },\n                    __self: _this4\n                })\n            ]\n        })\n    }));\n};\n_c4 = MainMenu;\nvar Minesweeper = function() {\n    _s3();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inPlay = ref[0], setInPlay = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"minesweeper\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n            lineNumber: 205,\n            columnNumber: 5\n        },\n        __self: _this5,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppState, {\n            inPlay: inPlay,\n            setInPlay: setInPlay,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\pages\\\\index.js\",\n                lineNumber: 206,\n                columnNumber: 7\n            },\n            __self: _this5\n        })\n    }));\n};\n_s3(Minesweeper, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c5 = Minesweeper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minesweeper);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Board\");\n$RefreshReg$(_c1, \"AppState\");\n$RefreshReg$(_c2, \"Dashboard\");\n$RefreshReg$(_c3, \"Game\");\n$RefreshReg$(_c4, \"MainMenu\");\n$RefreshReg$(_c5, \"Minesweeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsTUFBTTtZQUFFRSxTQUFTLEVBQUVBLFNBQVM7Ozs7Ozs7OztBQUdwRCxDQUFDO0lBUEt1QixXQUFXO01BQVhBLFdBQVc7QUFTakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQm9hcmQgPSAocHJvcHMpID0+IHtcbiAgbGV0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGUoW10pO1xuICBsZXQgW3JlbmRlcmVkQm9hcmQsIHNldFJlbmRlcmVkQm9hcmRdID0gdXNlU3RhdGUoW10pO1xuICAvLyBSdW5zIGFueXRpbWUgdGhlIGdhbWUgbnVtYmVyIGNoYW5nZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjcmVhdGVTdGFydGluZ0JvYXJkKCk7XG4gIH0sIFtwcm9wcy5nYW1lTnVtXSk7XG5cbiAgY29uc3QgY3JlYXRlU3RhcnRpbmdCb2FyZCA9ICgpID0+IHtcbiAgICBsZXQgbWFpbkJvYXJkID0gW107XG4gICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBzaG91bGQgc3RhcnQgZG9pbmcgdGhlIHJhbmRvbSBtaW5lcyBjZWxsc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGlmIChyYW5kb20gPCAwLjIpIHJvdy5wdXNoKFwieFwiKTtcbiAgICAgICAgZWxzZSByb3cucHVzaChcIm9cIik7XG4gICAgICB9XG4gICAgICBtYWluQm9hcmQucHVzaChyb3cpO1xuICAgIH1cbiAgICByZW5kZXJCb2FyZChtYWluQm9hcmQpO1xuICB9O1xuICAvLyBJIHRoaW5rIHRoYXQgdGhpcyBpcyBub3QgcnVubmluZyBvbmNlIHRoZSBnYW1lIGVuZHNcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBsZXQgcmV0dXJuQm9hcmQgPSBbXTtcbiAgICAvLyBPZGRzIDAuMSB0aGF0IGl0cyBhIG1pbmVcbiAgICAvLyAwLjcgdGhhdCBpdHMgYSBudW1iZXJcbiAgICAvLyAwLjIgdGhhdCBpdHMgbm90aGluZ1xuICAgIGZvciAobGV0IHJvd051bSA9IDA7IHJvd051bSA8IGJvYXJkLmxlbmd0aDsgcm93TnVtKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbE51bSA9IDA7IGNvbE51bSA8IGJvYXJkW3Jvd051bV0ubGVuZ3RoOyBjb2xOdW0rKykge1xuICAgICAgICBsZXQgY2VsbCA9IChcbiAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAga2V5PXtgJHtyb3dOdW19JHtjb2xOdW19YH1cbiAgICAgICAgICAgIHk9e3Jvd051bX1cbiAgICAgICAgICAgIHg9e2NvbE51bX1cbiAgICAgICAgICAgIGJvYXJkPXtib2FyZH1cbiAgICAgICAgICAgIGVuZEdhbWU9e2VuZEdhbWV9XG4gICAgICAgICAgICBjaGVja1dpbj17Y2hlY2tXaW59XG4gICAgICAgICAgICBzZXRCb2FyZD17c2V0Qm9hcmR9XG4gICAgICAgICAgICBnYW1lTnVtPXtwcm9wcy5nYW1lTnVtfVxuICAgICAgICAgICAgdHlwZT17Ym9hcmRbcm93TnVtXVtjb2xOdW1dfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIHJvdy5wdXNoKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm5Cb2FyZC5wdXNoKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmUtcm93XCIga2V5PXtyb3dOdW19PlxuICAgICAgICAgIHtyb3d9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgc2V0Qm9hcmQoYm9hcmQpO1xuICAgIHNldFJlbmRlcmVkQm9hcmQocmV0dXJuQm9hcmQpO1xuICB9O1xuXG4gIGNvbnN0IGVuZEdhbWUgPSAoZGlkV2luKSA9PiB7XG4gICAgaWYgKGRpZFdpbikge1xuICAgICAgcHJvcHMuc2V0R2FtZXNXb24oKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICBwcm9wcy5zZXRHYW1lU3RhdHVzKDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5zZXRHYW1lU3RhdHVzKDEpO1xuICAgICAgcHJvcHMuc2V0R2FtZXNMb3N0KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja1dpbiA9IChjaGVja0JvYXJkKSA9PiB7XG4gICAgLy8gQ2hlY2sgaGVyZSBpZiB3b25cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBjaGVja0JvYXJkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNoZWNrQm9hcmRbMF0ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICBsZXQgY2VsbFRvQ2hlY2sgPSBjaGVja0JvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgaWYgKGNlbGxUb0NoZWNrID09PSBcIm9cIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gPGRpdiBzdHlsZT17cHJvcHMuZ2FtZVN0YXR1cyA9PT0gMCA/IHt9IDogeyBwb2ludGVyRXZlbnRzOiAnbm9uZScgfX0gaWQ9XCJib2FyZFwiPntyZW5kZXJlZEJvYXJkfTwvZGl2Pjtcbn07XG5cblxuY29uc3QgQXBwU3RhdGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaXNQbGF5aW5nID0gcHJvcHMuaW5QbGF5O1xuICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgcmV0dXJuIDxHYW1lIHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPE1haW5NZW51IHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fSAvPjtcbiAgfVxufVxuXG5jb25zdCBmb3JtYXRUaW1lID0gKHNlY29uZHMpID0+IHtcbiAgY29uc3QgbWlucyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgY29uc3Qgc2VjcyA9IHNlY29uZHMgPj0gNjAgPyBzZWNvbmRzIC0gbWlucyAqIDYwIDogc2Vjb25kcztcbiAgY29uc3QgdGltZSA9IGAke21pbnMgPCAxMCA/IFwiMFwiICsgbWlucyA6IG1pbnN9OiR7c2VjcyA8IDEwID8gXCIwXCIgKyBzZWNzIDogc2Vjc1xuICAgIH1gO1xuICByZXR1cm4gdGltZTtcbn07XG5cbmNvbnN0IERhc2hib2FyZCA9IChwcm9wcykgPT4ge1xuICAvLyBDaGFuZ2UgYW55dGltZSBnYW1lTnVtIGNoYW5nZXNcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZXIgPSBcIlwiO1xuICAgIGlmIChwcm9wcy5nYW1lU3RhdHVzID09PSAwKSB7XG4gICAgICBzZXRTZWNvbmRzKDApO1xuICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldFNlY29uZHMoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbcHJvcHMuZ2FtZVN0YXR1c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImRhc2hib2FyZFwiPlxuICAgICAgPHA+VGltZToge2Zvcm1hdFRpbWUoc2Vjb25kcyl9PC9wPlxuICAgICAgPHA+R2FtZXMgV29uOiB7cHJvcHMuZ2FtZXNXb259PC9wPlxuICAgICAgPHA+R2FtZXMgTG9zdDoge3Byb3BzLmdhbWVzTG9zdH0gPC9wPlxuICAgICAgey8qIDxwPlRpbGVzIExlZnQ6IDI1PC9wPiAqL31cbiAgICAgIHsvKiA8cD5Cb21iczogMjA8L3A+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgR2FtZSA9IChwcm9wcykgPT4ge1xuICBsZXQgW2dhbWVzV29uLCBzZXRHYW1lc1dvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtnYW1lc0xvc3QsIHNldEdhbWVzTG9zdF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IFtnYW1lTnVtLCBzZXRHYW1lTnVtXSA9IHVzZVN0YXRlKDApOyAvLyBhbnl0aW1lIGdhbWUgbnVtIGNoYW5nZSwgcmVyZW5kZXIgdGhlIGRhc2hib2FyZCBmb3IgdGltZXIgc2FrZVxuICBsZXQgW2dhbWVTdGF0dXMsIHNldEdhbWVTdGF0dXNdID0gdXNlU3RhdGUoMCk7IC8vIDAgaXMgYWN0aXZlLCAxIGlzIGdhbWUgbG9zdCwgMiBpcyBnYW1lIHdvblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJSdW4gdGhpcyB3aGVuIHRoZSBnYW1lIGNoYW5nZXNcIik7XG4gIH0sIFtnYW1lU3RhdHVzXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW4tZ2FtZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+TWluZXN3ZWVwZXI8L2gxPlxuICAgICAgPERhc2hib2FyZFxuICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XG4gICAgICAgIGdhbWVzTG9zdD17Z2FtZXNMb3N0fVxuICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxuICAgICAgLz5cbiAgICAgIDxCb2FyZFxuICAgICAgICBzZXRJblBsYXk9e3Byb3BzLnNldEluUGxheX1cbiAgICAgICAgZ2FtZXNXb249e2dhbWVzV29ufVxuICAgICAgICBnYW1lc0xvc3Q9e2dhbWVzTG9zdH1cbiAgICAgICAgZ2FtZU51bT17Z2FtZU51bX1cbiAgICAgICAgZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c31cbiAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cbiAgICAgICAgc2V0R2FtZU51bT17c2V0R2FtZU51bX1cbiAgICAgICAgc2V0R2FtZXNXb249e3NldEdhbWVzV29ufVxuICAgICAgICBzZXRHYW1lc0xvc3Q9e3NldEdhbWVzTG9zdH1cbiAgICAgIC8+XG5cbiAgICAgIHtnYW1lU3RhdHVzID09PSAwID8gKFxuICAgICAgICBcIlwiXG4gICAgICApIDogKFxuICAgICAgICA8R2FtZU92ZXJNb2RhbFxuICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XG4gICAgICAgICAgc2V0R2FtZU51bT17c2V0R2FtZU51bX1cbiAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxuICAgICAgICAgIHNldEdhbWVTdGF0dXM9e3NldEdhbWVTdGF0dXN9XG4gICAgICAgICAgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7LyogbWF5YmUgcHV0IG1vZGFsIGhlcmUgaW5zdGVhZD8gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE1haW5NZW51ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW4tbWVudVwiPlxuICAgICAgPGRpdiBpZD1cIm1lbnUtaXRlbXNcIj5cbiAgICAgICAgPGgxPk1pbmVzd2VlcGVyPC9oMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuc2V0SW5QbGF5KHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdGFydCBHYW1lXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgID5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuY29uc3QgTWluZXN3ZWVwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpblBsYXksIHNldEluUGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1pbmVzd2VlcGVyXCI+XG4gICAgICA8QXBwU3RhdGUgaW5QbGF5PXtpblBsYXl9IHNldEluUGxheT17c2V0SW5QbGF5fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWluZXN3ZWVwZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvYXJkIiwicHJvcHMiLCJib2FyZCIsInNldEJvYXJkIiwicmVuZGVyZWRCb2FyZCIsInNldFJlbmRlcmVkQm9hcmQiLCJjcmVhdGVTdGFydGluZ0JvYXJkIiwiZ2FtZU51bSIsIm1haW5Cb2FyZCIsImkiLCJyb3ciLCJqIiwicmFuZG9tIiwiTWF0aCIsInB1c2giLCJyZW5kZXJCb2FyZCIsInJldHVybkJvYXJkIiwicm93TnVtIiwibGVuZ3RoIiwiY29sTnVtIiwiY2VsbCIsIkNlbGwiLCJ5IiwieCIsImVuZEdhbWUiLCJjaGVja1dpbiIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJkaWRXaW4iLCJzZXRHYW1lc1dvbiIsInByZXZTdGF0ZSIsInNldEdhbWVTdGF0dXMiLCJzZXRHYW1lc0xvc3QiLCJjaGVja0JvYXJkIiwiY29sIiwiY2VsbFRvQ2hlY2siLCJzdHlsZSIsImdhbWVTdGF0dXMiLCJwb2ludGVyRXZlbnRzIiwiaWQiLCJBcHBTdGF0ZSIsImlzUGxheWluZyIsImluUGxheSIsIkdhbWUiLCJzZXRJblBsYXkiLCJNYWluTWVudSIsImZvcm1hdFRpbWUiLCJzZWNvbmRzIiwibWlucyIsImZsb29yIiwic2VjcyIsInRpbWUiLCJEYXNoYm9hcmQiLCJzZXRTZWNvbmRzIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwIiwiZ2FtZXNXb24iLCJnYW1lc0xvc3QiLCJzZXRHYW1lTnVtIiwiY29uc29sZSIsImxvZyIsImgxIiwiR2FtZU92ZXJNb2RhbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJNaW5lc3dlZXBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});