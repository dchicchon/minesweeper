/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".game_title__3mKKk {\\r\\n    color: gold;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#game_main_game__2A6MB {\\r\\n    width: 50%;\\r\\n    padding-top: 25px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n@media (max-width: 600px) {\\r\\n    #game_main-game__1SQMr {\\r\\n        margin: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n#game_dashboard__JpTG2 {\\r\\n    color: gold;\\r\\n}\\r\\n\\r\\n#game_board__132Vk {\\r\\n    margin: 0 auto;\\r\\n    width: -webkit-fit-content;\\r\\n    width: -moz-fit-content;\\r\\n    width: fit-content;\\r\\n}\\r\\n\\r\\n.game_row__1ZL8_ {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.game_cell__2tC-s {\\r\\n    box-sizing: content-box;\\r\\n    box-sizing: initial;\\r\\n    padding: 1rem;\\r\\n    width: 0.75rem;\\r\\n    height: 0.75rem;\\r\\n    line-height: normal;\\r\\n    max-width: 0.75rem;\\r\\n    max-height: 0.75rem;\\r\\n    text-align: center;\\r\\n    transition: background-color 0.25s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.game_cell__2tC-s:hover {\\r\\n    background-color: rgba(255, 217, 0, 0.171);\\r\\n}\\r\\n#game_gameOverModal__2fBdT {\\r\\n    position: absolute;\\r\\n    transform: translate(50%, -216%);\\r\\n    background: #2a3846;\\r\\n    color: gold;\\r\\n    border: 1px solid gold;\\r\\n    padding: 1rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n    .game_cell__2tC-s {\\r\\n        padding: 0.6rem;\\r\\n        height: 1rem;\\r\\n        width: 1rem;\\r\\n        font-size: 14px;\\r\\n    }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/game.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI;QACI,SAAS;QACT,WAAW;IACf;AACJ;AACA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,0BAAkB;IAAlB,uBAAkB;IAAlB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAmB;IAAnB,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,0CAA0C;AAC9C;AACA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,mBAAmB;IACnB,WAAW;IACX,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI;QACI,eAAe;QACf,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;AACJ\",\"sourcesContent\":[\".title {\\r\\n    color: gold;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#main_game {\\r\\n    width: 50%;\\r\\n    padding-top: 25px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n@media (max-width: 600px) {\\r\\n    #main-game {\\r\\n        margin: 0;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n#dashboard {\\r\\n    color: gold;\\r\\n}\\r\\n\\r\\n#board {\\r\\n    margin: 0 auto;\\r\\n    width: fit-content;\\r\\n}\\r\\n\\r\\n.row {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.cell {\\r\\n    box-sizing: initial;\\r\\n    padding: 1rem;\\r\\n    width: 0.75rem;\\r\\n    height: 0.75rem;\\r\\n    line-height: normal;\\r\\n    max-width: 0.75rem;\\r\\n    max-height: 0.75rem;\\r\\n    text-align: center;\\r\\n    transition: background-color 0.25s;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.cell:hover {\\r\\n    background-color: rgba(255, 217, 0, 0.171);\\r\\n}\\r\\n#gameOverModal {\\r\\n    position: absolute;\\r\\n    transform: translate(50%, -216%);\\r\\n    background: #2a3846;\\r\\n    color: gold;\\r\\n    border: 1px solid gold;\\r\\n    padding: 1rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n    .cell {\\r\\n        padding: 0.6rem;\\r\\n        height: 1rem;\\r\\n        width: 1rem;\\r\\n        font-size: 14px;\\r\\n    }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"title\": \"game_title__3mKKk\",\n\t\"main_game\": \"game_main_game__2A6MB\",\n\t\"main-game\": \"game_main-game__1SQMr\",\n\t\"dashboard\": \"game_dashboard__JpTG2\",\n\t\"board\": \"game_board__132Vk\",\n\t\"row\": \"game_row__1ZL8_\",\n\t\"cell\": \"game_cell__2tC-s\",\n\t\"gameOverModal\": \"game_gameOverModal__2fBdT\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vc3R5bGVzL2dhbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsOERBQThELG9CQUFvQiwyQkFBMkIsS0FBSyxnQ0FBZ0MsbUJBQW1CLDBCQUEwQix1QkFBdUIsS0FBSywrQkFBK0IsZ0NBQWdDLHNCQUFzQix3QkFBd0IsU0FBUyxLQUFLLDRCQUE0QixvQkFBb0IsS0FBSyw0QkFBNEIsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsMkJBQTJCLEtBQUssMEJBQTBCLHNCQUFzQixLQUFLLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLHNCQUFzQix1QkFBdUIsd0JBQXdCLDRCQUE0QiwyQkFBMkIsNEJBQTRCLDJCQUEyQiwyQ0FBMkMsd0JBQXdCLEtBQUssaUNBQWlDLG1EQUFtRCxLQUFLLGdDQUFnQywyQkFBMkIseUNBQXlDLDRCQUE0QixvQkFBb0IsK0JBQStCLHNCQUFzQixLQUFLLG1DQUFtQywyQkFBMkIsNEJBQTRCLHlCQUF5Qix3QkFBd0IsNEJBQTRCLFNBQVMsS0FBSyxXQUFXLHVGQUF1RixVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxpQ0FBaUMsb0JBQW9CLDJCQUEyQixLQUFLLG9CQUFvQixtQkFBbUIsMEJBQTBCLHVCQUF1QixLQUFLLCtCQUErQixvQkFBb0Isc0JBQXNCLHdCQUF3QixTQUFTLEtBQUssZ0JBQWdCLG9CQUFvQixLQUFLLGdCQUFnQix1QkFBdUIsMkJBQTJCLEtBQUssY0FBYyxzQkFBc0IsS0FBSyxlQUFlLDRCQUE0QixzQkFBc0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLDRCQUE0QiwyQkFBMkIsMkNBQTJDLHdCQUF3QixLQUFLLHFCQUFxQixtREFBbUQsS0FBSyxvQkFBb0IsMkJBQTJCLHlDQUF5Qyw0QkFBNEIsb0JBQW9CLCtCQUErQixzQkFBc0IsS0FBSyxtQ0FBbUMsZUFBZSw0QkFBNEIseUJBQXlCLHdCQUF3Qiw0QkFBNEIsU0FBUyxLQUFLLHVCQUF1QjtBQUMvcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nYW1lLm1vZHVsZS5jc3M/YTA4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVfdGl0bGVfXzNtS0trIHtcXHJcXG4gICAgY29sb3I6IGdvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2dhbWVfbWFpbl9nYW1lX18yQTZNQiB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICNnYW1lX21haW4tZ2FtZV9fMVNRTXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI2dhbWVfZGFzaGJvYXJkX19KcFRHMiB7XFxyXFxuICAgIGNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2FtZV9ib2FyZF9fMTMyVmsge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lX3Jvd19fMVpMOF8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9jZWxsX18ydEMtcyB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMC43NXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXgtd2lkdGg6IDAuNzVyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDAuNzVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZV9jZWxsX18ydEMtczpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTcsIDAsIDAuMTcxKTtcXHJcXG59XFxyXFxuI2dhbWVfZ2FtZU92ZXJNb2RhbF9fMmZCZFQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIxNiUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmEzODQ2O1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5nYW1lX2NlbGxfXzJ0Qy1zIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2FtZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsV0FBVztJQUNmO0FBQ0o7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIHtcXHJcXG4gICAgY29sb3I6IGdvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW5fZ2FtZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICNtYWluLWdhbWUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuI2Rhc2hib2FyZCB7XFxyXFxuICAgIGNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9hcmQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMC43NXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXgtd2lkdGg6IDAuNzVyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDAuNzVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTcsIDAsIDAuMTcxKTtcXHJcXG59XFxyXFxuI2dhbWVPdmVyTW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTIxNiUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmEzODQ2O1xcclxcbiAgICBjb2xvcjogZ29sZDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5jZWxsIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRpdGxlXCI6IFwiZ2FtZV90aXRsZV9fM21LS2tcIixcblx0XCJtYWluX2dhbWVcIjogXCJnYW1lX21haW5fZ2FtZV9fMkE2TUJcIixcblx0XCJtYWluLWdhbWVcIjogXCJnYW1lX21haW4tZ2FtZV9fMVNRTXJcIixcblx0XCJkYXNoYm9hcmRcIjogXCJnYW1lX2Rhc2hib2FyZF9fSnBURzJcIixcblx0XCJib2FyZFwiOiBcImdhbWVfYm9hcmRfXzEzMlZrXCIsXG5cdFwicm93XCI6IFwiZ2FtZV9yb3dfXzFaTDhfXCIsXG5cdFwiY2VsbFwiOiBcImdhbWVfY2VsbF9fMnRDLXNcIixcblx0XCJnYW1lT3Zlck1vZGFsXCI6IFwiZ2FtZV9nYW1lT3Zlck1vZGFsX18yZkJkVFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./styles/game.module.css\n");

/***/ })

});