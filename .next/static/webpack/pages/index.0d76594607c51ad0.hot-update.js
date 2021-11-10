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

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar colors = [\n    \"gold\",\n    \"violet\",\n    \"springgreen\",\n    \"tomato\",\n    \"lightskyblue\"\n];\nvar Cell = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), checked = ref[0], setChecked = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), type = ref1[0], setType = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), flag = ref2[0], setFlag = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    }), hiddenStyle = ref3[0], setHiddenStyle = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    }), checkedStyle = ref4[0], setCheckedStyle = ref4[1];\n    // When the game num changes, go ahead and rerender this cell\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // based on props.gameNum, we do things diff\n        // let index = props.gameNum % 5; // if i want to change the color\n        var index = 0;\n        var hStyle = {\n            border: \"1px solid \".concat(colors[index]),\n            color: colors[index]\n        };\n        var cStyle = {\n            border: \"1px solid \".concat(colors[index]),\n            color: colors[index],\n            background: props.type === \"x\" ? \"red\" : \"rgba(255, 217, 0, 0.171)\"\n        };\n        setType(props.type);\n        setChecked(false);\n        setFlag(false);\n        setHiddenStyle(hStyle);\n        setCheckedStyle(cStyle);\n    }, [\n        props.gameNum\n    ]);\n    var cellClick = function() {\n        if (checked) return;\n        else if (type === \"x\") props.endGame(false);\n        else {\n            // x is column, y is row\n            var x = props.x, y = props.y;\n            var mineNum = 0;\n            // 0   1   2\n            // o | o | o  0\n            // x | o | x  1\n            // o | x | o  2\n            // Current Coord: (1,1)\n            // use our cells current coordinate and add it to\n            // our for loops to check the surrounding cells\n            for(var row = -1; row <= 1; row++){\n                for(var col = -1; col <= 1; col++){\n                    if (row === 0 && col === 0) continue; // dont check current cell\n                    if (y + row < 0 || y + row >= props.board.length) continue; // dont check y out of bounds\n                    if (x + col < 0 || x + col >= props.board[0].length) continue; // dont check x out of bounds\n                    var thisCell = props.board[y + row][x + col]; // get the value at this coordinate\n                    if (thisCell === \"x\") mineNum++; // if this cell has a mine, add to num\n                }\n            }\n            // This works as long as were in the center somewhat\n            // Dependent on y! Make this better later forsure bb\n            // only do this if number of mines is 0\n            if (mineNum === 0) {\n                var _loop1 = function(row1) {\n                    var _loop = function(col) {\n                        if (row1 === 0 && col === 0) return \"continue\" // dont check the current cell dummy\n                        ;\n                        if (y + row1 < 0 || y + row1 >= props.board.length) return \"continue\";\n                        if (x + col < 0 || x + col >= props.board[0].length) return \"continue\";\n                        // let index = parseInt(`${y + row}${x + col}`);\n                        // if (index < 0 || index >= cells.length) continue;\n                        var cellY = y + row1;\n                        var cellX = x + col;\n                        var surroundingCell = document.getElementById(\"\".concat(cellY, \"-\").concat(cellX)); // we have the cell, now get reference from board\n                        // Later on, implement a function that makes this a timed event\n                        var time = Math.floor(Math.random() * 150) + 100;\n                        setTimeout(function() {\n                            return surroundingCell.click();\n                        }, time);\n                    };\n                    for(var col = -1; col <= 1; col++){\n                        var _ret = _loop(col);\n                        if (_ret === \"continue\") return \"continue\";\n                    }\n                };\n                // we only click since all other cells not be mines\n                // dont have to do the above code anymore\n                // Should we split up cells based on our board array?\n                // Check surrounding cells\n                // what is x and y?\n                for(var row1 = -1; row1 <= 1; row1++){\n                    var _ret1 = _loop1(row1);\n                    if (_ret1 === \"continue\") continue;\n                }\n            }\n            var copyBoard = props.board.slice(); // get our current board\n            copyBoard[y][x] = mineNum;\n            props.setBoard(copyBoard);\n            // You win!\n            if (props.checkWin(copyBoard)) {\n                props.endGame(true);\n            }\n            if (mineNum === 0) {\n                setType(\"\");\n            } else {\n                setType(mineNum);\n            }\n        }\n        setChecked(true); // this will re-render the cell\n    };\n    var putFlagDown = function(event) {\n        event.preventDefault();\n        if (!checked) setFlag(!flag);\n    };\n    // y is row\n    // x is col\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: flag ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            id: \"\".concat(props.y, \"-\").concat(props.x),\n            className: \"cell\",\n            style: hiddenStyle,\n            onContextMenu: function(e) {\n                return putFlagDown(e);\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Cell.js\",\n                lineNumber: 115,\n                columnNumber: 17\n            },\n            __self: _this,\n            children: \"?\"\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            id: \"\".concat(props.y, \"-\").concat(props.x),\n            className: \"cell\",\n            onClick: cellClick,\n            onContextMenu: function(e) {\n                return putFlagDown(e);\n            },\n            style: checked ? checkedStyle : hiddenStyle,\n            __source: {\n                fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Cell.js\",\n                lineNumber: 124,\n                columnNumber: 17\n            },\n            __self: _this,\n            children: checked ? type : \" \"\n        })\n    }));\n};\n_s(Cell, \"RGpRmqALLD4M3f5XKPWceZnKc+E=\");\n_c = Cell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\nvar _c;\n$RefreshReg$(_c, \"Cell\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxZQUFZLEdBQUdGLFdBQVc7Ozs7Ozs7c0JBRTFDTixPQUFPLEdBQUdFLElBQUksR0FBRyxDQUFHOzs7QUFLekMsQ0FBQztHQW5JS0osSUFBSTtLQUFKQSxJQUFJO0FBcUlWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2VsbC5qcz9mZGNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjb2xvcnMgPSBbXCJnb2xkXCIsIFwidmlvbGV0XCIsIFwic3ByaW5nZ3JlZW5cIiwgXCJ0b21hdG9cIiwgXCJsaWdodHNreWJsdWVcIl07XHJcblxyXG5jb25zdCBDZWxsID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbGV0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgbGV0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCBbaGlkZGVuU3R5bGUsIHNldEhpZGRlblN0eWxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGxldCBbY2hlY2tlZFN0eWxlLCBzZXRDaGVja2VkU3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIC8vIFdoZW4gdGhlIGdhbWUgbnVtIGNoYW5nZXMsIGdvIGFoZWFkIGFuZCByZXJlbmRlciB0aGlzIGNlbGxcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGJhc2VkIG9uIHByb3BzLmdhbWVOdW0sIHdlIGRvIHRoaW5ncyBkaWZmXHJcbiAgICAgICAgLy8gbGV0IGluZGV4ID0gcHJvcHMuZ2FtZU51bSAlIDU7IC8vIGlmIGkgd2FudCB0byBjaGFuZ2UgdGhlIGNvbG9yXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgaFN0eWxlID0ge1xyXG4gICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnNbaW5kZXhdfWAsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbaW5kZXhdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNTdHlsZSA9IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzW2luZGV4XX1gLFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JzW2luZGV4XSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcHJvcHMudHlwZSA9PT0gXCJ4XCIgPyBcInJlZFwiIDogXCJyZ2JhKDI1NSwgMjE3LCAwLCAwLjE3MSlcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFR5cGUocHJvcHMudHlwZSk7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0RmxhZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SGlkZGVuU3R5bGUoaFN0eWxlKTtcclxuICAgICAgICBzZXRDaGVja2VkU3R5bGUoY1N0eWxlKTtcclxuICAgIH0sIFtwcm9wcy5nYW1lTnVtXSk7XHJcblxyXG4gICAgbGV0IGNlbGxDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tlZCkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwieFwiKSBwcm9wcy5lbmRHYW1lKGZhbHNlKTtcclxuICAgICAgICAvLyBpZiBjZWxsIGlzICd4JywgZ2FtZSBpcyBvdmVyIVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB4IGlzIGNvbHVtbiwgeSBpcyByb3dcclxuICAgICAgICAgICAgbGV0IHsgeCwgeSB9ID0gcHJvcHM7XHJcbiAgICAgICAgICAgIGxldCBtaW5lTnVtID0gMDtcclxuICAgICAgICAgICAgLy8gMCAgIDEgICAyXHJcbiAgICAgICAgICAgIC8vIG8gfCBvIHwgbyAgMFxyXG4gICAgICAgICAgICAvLyB4IHwgbyB8IHggIDFcclxuICAgICAgICAgICAgLy8gbyB8IHggfCBvICAyXHJcbiAgICAgICAgICAgIC8vIEN1cnJlbnQgQ29vcmQ6ICgxLDEpXHJcbiAgICAgICAgICAgIC8vIHVzZSBvdXIgY2VsbHMgY3VycmVudCBjb29yZGluYXRlIGFuZCBhZGQgaXQgdG9cclxuICAgICAgICAgICAgLy8gb3VyIGZvciBsb29wcyB0byBjaGVjayB0aGUgc3Vycm91bmRpbmcgY2VsbHNcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IC0xOyByb3cgPD0gMTsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IC0xOyBjb2wgPD0gMTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93ID09PSAwICYmIGNvbCA9PT0gMCkgY29udGludWU7IC8vIGRvbnQgY2hlY2sgY3VycmVudCBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgKyByb3cgPCAwIHx8IHkgKyByb3cgPj0gcHJvcHMuYm9hcmQubGVuZ3RoKSBjb250aW51ZTsgLy8gZG9udCBjaGVjayB5IG91dCBvZiBib3VuZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCArIGNvbCA8IDAgfHwgeCArIGNvbCA+PSBwcm9wcy5ib2FyZFswXS5sZW5ndGgpIGNvbnRpbnVlOyAvLyBkb250IGNoZWNrIHggb3V0IG9mIGJvdW5kc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aGlzQ2VsbCA9IHByb3BzLmJvYXJkW3kgKyByb3ddW3ggKyBjb2xdOyAvLyBnZXQgdGhlIHZhbHVlIGF0IHRoaXMgY29vcmRpbmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzQ2VsbCA9PT0gXCJ4XCIpIG1pbmVOdW0rKzsgLy8gaWYgdGhpcyBjZWxsIGhhcyBhIG1pbmUsIGFkZCB0byBudW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyB3b3JrcyBhcyBsb25nIGFzIHdlcmUgaW4gdGhlIGNlbnRlciBzb21ld2hhdFxyXG4gICAgICAgICAgICAvLyBEZXBlbmRlbnQgb24geSEgTWFrZSB0aGlzIGJldHRlciBsYXRlciBmb3JzdXJlIGJiXHJcblxyXG4gICAgICAgICAgICAvLyBvbmx5IGRvIHRoaXMgaWYgbnVtYmVyIG9mIG1pbmVzIGlzIDBcclxuICAgICAgICAgICAgaWYgKG1pbmVOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIG9ubHkgY2xpY2sgc2luY2UgYWxsIG90aGVyIGNlbGxzIG5vdCBiZSBtaW5lc1xyXG4gICAgICAgICAgICAgICAgLy8gZG9udCBoYXZlIHRvIGRvIHRoZSBhYm92ZSBjb2RlIGFueW1vcmVcclxuICAgICAgICAgICAgICAgIC8vIFNob3VsZCB3ZSBzcGxpdCB1cCBjZWxscyBiYXNlZCBvbiBvdXIgYm9hcmQgYXJyYXk/XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBzdXJyb3VuZGluZyBjZWxsc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdoYXQgaXMgeCBhbmQgeT9cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IC0xOyByb3cgPD0gMTsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAtMTsgY29sIDw9IDE7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID09PSAwKSBjb250aW51ZTsgLy8gZG9udCBjaGVjayB0aGUgY3VycmVudCBjZWxsIGR1bW15XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ICsgcm93IDwgMCB8fCB5ICsgcm93ID49IHByb3BzLmJvYXJkLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ICsgY29sIDwgMCB8fCB4ICsgY29sID49IHByb3BzLmJvYXJkWzBdLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IHBhcnNlSW50KGAke3kgKyByb3d9JHt4ICsgY29sfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IGNlbGxzLmxlbmd0aCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsWSA9IHkgKyByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZWxsWCA9IHggKyBjb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdXJyb3VuZGluZ0NlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjZWxsWX0tJHtjZWxsWH1gKTsgLy8gd2UgaGF2ZSB0aGUgY2VsbCwgbm93IGdldCByZWZlcmVuY2UgZnJvbSBib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXRlciBvbiwgaW1wbGVtZW50IGEgZnVuY3Rpb24gdGhhdCBtYWtlcyB0aGlzIGEgdGltZWQgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNTApICsgMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN1cnJvdW5kaW5nQ2VsbC5jbGljaygpLCB0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjb3B5Qm9hcmQgPSBwcm9wcy5ib2FyZC5zbGljZSgpOyAvLyBnZXQgb3VyIGN1cnJlbnQgYm9hcmRcclxuICAgICAgICAgICAgY29weUJvYXJkW3ldW3hdID0gbWluZU51bTtcclxuICAgICAgICAgICAgcHJvcHMuc2V0Qm9hcmQoY29weUJvYXJkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSB3aW4hXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jaGVja1dpbihjb3B5Qm9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbmRHYW1lKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWluZU51bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHlwZShcIlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFR5cGUobWluZU51bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hlY2tlZCh0cnVlKTsgLy8gdGhpcyB3aWxsIHJlLXJlbmRlciB0aGUgY2VsbFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcHV0RmxhZ0Rvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghY2hlY2tlZCkgc2V0RmxhZyghZmxhZyk7XHJcbiAgICB9O1xyXG4gICAgLy8geSBpcyByb3dcclxuICAgIC8vIHggaXMgY29sXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtmbGFnID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgJHtwcm9wcy55fS0ke3Byb3BzLnh9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17aGlkZGVuU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db250ZXh0TWVudT17KGUpID0+IHB1dEZsYWdEb3duKGUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtgJHtwcm9wcy55fS0ke3Byb3BzLnh9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjZWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjZWxsQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db250ZXh0TWVudT17KGUpID0+IHB1dEZsYWdEb3duKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtjaGVja2VkID8gY2hlY2tlZFN0eWxlIDogaGlkZGVuU3R5bGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoZWNrZWQgPyB0eXBlIDogXCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZWxsIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xvcnMiLCJDZWxsIiwicHJvcHMiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsInR5cGUiLCJzZXRUeXBlIiwiZmxhZyIsInNldEZsYWciLCJoaWRkZW5TdHlsZSIsInNldEhpZGRlblN0eWxlIiwiY2hlY2tlZFN0eWxlIiwic2V0Q2hlY2tlZFN0eWxlIiwiaW5kZXgiLCJoU3R5bGUiLCJib3JkZXIiLCJjb2xvciIsImNTdHlsZSIsImJhY2tncm91bmQiLCJnYW1lTnVtIiwiY2VsbENsaWNrIiwiZW5kR2FtZSIsIngiLCJ5IiwibWluZU51bSIsInJvdyIsImNvbCIsImJvYXJkIiwibGVuZ3RoIiwidGhpc0NlbGwiLCJjZWxsWSIsImNlbGxYIiwic3Vycm91bmRpbmdDZWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRpbWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiY2xpY2siLCJjb3B5Qm9hcmQiLCJzbGljZSIsInNldEJvYXJkIiwiY2hlY2tXaW4iLCJwdXRGbGFnRG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwib25Db250ZXh0TWVudSIsImUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cell.js\n");

/***/ }),

/***/ "./components/Game.js":
/*!****************************!*\
  !*** ./components/Game.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./components/Board.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Game = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesWon = ref[0], setGamesWon = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gamesLost = ref1[0], setGamesLost = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameNum = ref2[0], setGameNum = ref2[1]; // anytime game num change, rerender the dashboard for timer sake\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), gameStatus = ref3[0], setGameStatus = ref3[1]; // 0 is active, 1 is game lost, 2 is game won\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Run this when the game changes\");\n    }, [\n        gameStatus\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"main-game\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"title\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Minesweeper\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dashboard, {\n                gameStatus: gameStatus,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                setInPlay: props.setInPlay,\n                gamesWon: gamesWon,\n                gamesLost: gamesLost,\n                gameNum: gameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setGameNum: setGameNum,\n                setGamesWon: setGamesWon,\n                setGamesLost: setGamesLost,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            gameStatus === 0 ? \"\" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GameOverModal, {\n                gameNum: gameNum,\n                setGameNum: setGameNum,\n                gameStatus: gameStatus,\n                setGameStatus: setGameStatus,\n                setInPlay: props.setInPlay,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\danie\\\\Code\\\\minesweeper\\\\components\\\\Game.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Game, \"KYyASd/FE/AAYdZ6ZxtsBKE63NE=\");\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ3ZCO0FBQ0Y7OztBQUN6QixHQUFLLENBQUNLLElBQUksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUNyQixHQUFHLENBQTJCTCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFuQ00sUUFBUSxHQUFpQk4sR0FBVyxLQUExQk8sV0FBVyxHQUFJUCxHQUFXO0lBQ3pDLEdBQUcsQ0FBNkJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXJDUSxTQUFTLEdBQWtCUixJQUFXLEtBQTNCUyxZQUFZLEdBQUlULElBQVc7SUFDM0MsR0FBRyxDQUF5QkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBakNVLE9BQU8sR0FBZ0JWLElBQVcsS0FBekJXLFVBQVUsR0FBSVgsSUFBVyxJQUFFLENBQWlFO0lBQzFHLEdBQUcsQ0FBK0JBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXZDWSxVQUFVLEdBQW1CWixJQUFXLEtBQTVCYSxhQUFhLEdBQUliLElBQVcsSUFBRSxDQUE2QztJQUU1RkMsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQztJQUNoRCxDQUFDLEVBQUUsQ0FBQ0g7UUFBQUEsVUFBVTtJQUFBLENBQUM7SUFDZixNQUFNLHVFQUNESSxDQUFHO1FBQUNDLEVBQUUsRUFBQyxDQUFXOzs7Ozs7OztpRkFDZEMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQU87Ozs7Ozs7MEJBQUMsQ0FBVzs7aUZBQ2hDQyxTQUFTO2dCQUNOUixVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCTixRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCRSxTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCRSxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7O2lGQUVuQlIsOENBQUs7Z0JBQ0ZtQixTQUFTLEVBQUVoQixLQUFLLENBQUNnQixTQUFTO2dCQUMxQmYsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkUsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQkUsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkMsYUFBYSxFQUFFQSxhQUFhO2dCQUM1QkYsVUFBVSxFQUFFQSxVQUFVO2dCQUN0QkosV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkUsWUFBWSxFQUFFQSxZQUFZOzs7Ozs7OztZQUc3QkcsVUFBVSxLQUFLLENBQUMsR0FDYixDQUFFLHlFQUVEVSxhQUFhO2dCQUNWWixPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCQyxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCQyxVQUFVLEVBQUVBLFVBQVU7Z0JBQ3RCQyxhQUFhLEVBQUVBLGFBQWE7Z0JBQzVCUSxTQUFTLEVBQUVoQixLQUFLLENBQUNnQixTQUFTOzs7Ozs7Ozs7O0FBTzlDLENBQUM7R0E3Q0tqQixJQUFJO0tBQUpBLElBQUk7QUErQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lLmpzP2M4YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnXHJcbmltcG9ydCBDZWxsIGZyb20gJy4vQ2VsbCdcclxuY29uc3QgR2FtZSA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IFtnYW1lc1dvbiwgc2V0R2FtZXNXb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBsZXQgW2dhbWVzTG9zdCwgc2V0R2FtZXNMb3N0XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgbGV0IFtnYW1lTnVtLCBzZXRHYW1lTnVtXSA9IHVzZVN0YXRlKDApOyAvLyBhbnl0aW1lIGdhbWUgbnVtIGNoYW5nZSwgcmVyZW5kZXIgdGhlIGRhc2hib2FyZCBmb3IgdGltZXIgc2FrZVxyXG4gICAgbGV0IFtnYW1lU3RhdHVzLCBzZXRHYW1lU3RhdHVzXSA9IHVzZVN0YXRlKDApOyAvLyAwIGlzIGFjdGl2ZSwgMSBpcyBnYW1lIGxvc3QsIDIgaXMgZ2FtZSB3b25cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVuIHRoaXMgd2hlbiB0aGUgZ2FtZSBjaGFuZ2VzXCIpO1xyXG4gICAgfSwgW2dhbWVTdGF0dXNdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cIm1haW4tZ2FtZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5NaW5lc3dlZXBlcjwvaDE+XHJcbiAgICAgICAgICAgIDxEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XHJcbiAgICAgICAgICAgICAgICBnYW1lc0xvc3Q9e2dhbWVzTG9zdH1cclxuICAgICAgICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc2V0SW5QbGF5PXtwcm9wcy5zZXRJblBsYXl9XHJcbiAgICAgICAgICAgICAgICBnYW1lc1dvbj17Z2FtZXNXb259XHJcbiAgICAgICAgICAgICAgICBnYW1lc0xvc3Q9e2dhbWVzTG9zdH1cclxuICAgICAgICAgICAgICAgIGdhbWVOdW09e2dhbWVOdW19XHJcbiAgICAgICAgICAgICAgICBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc2V0R2FtZVN0YXR1cz17c2V0R2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgIHNldEdhbWVOdW09e3NldEdhbWVOdW19XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lc1dvbj17c2V0R2FtZXNXb259XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lc0xvc3Q9e3NldEdhbWVzTG9zdH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtnYW1lU3RhdHVzID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEdhbWVPdmVyTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTnVtPXtnYW1lTnVtfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEdhbWVOdW09e3NldEdhbWVOdW19XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cz17Z2FtZVN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICBzZXRHYW1lU3RhdHVzPXtzZXRHYW1lU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEluUGxheT17cHJvcHMuc2V0SW5QbGF5fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBtYXliZSBwdXQgbW9kYWwgaGVyZSBpbnN0ZWFkPyAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJvYXJkIiwiQ2VsbCIsIkdhbWUiLCJwcm9wcyIsImdhbWVzV29uIiwic2V0R2FtZXNXb24iLCJnYW1lc0xvc3QiLCJzZXRHYW1lc0xvc3QiLCJnYW1lTnVtIiwic2V0R2FtZU51bSIsImdhbWVTdGF0dXMiLCJzZXRHYW1lU3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwiaDEiLCJjbGFzc05hbWUiLCJEYXNoYm9hcmQiLCJzZXRJblBsYXkiLCJHYW1lT3Zlck1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game.js\n");

/***/ })

});