"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm";
exports.ids = ["vendor-chunks/micromark-extension-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = __webpack_require__(/*! ./syntax */ \"(ssr)/./node_modules/micromark-extension-gfm/syntax.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBQSw4R0FBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanM/YWEwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3ludGF4JylcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-extension-gfm/syntax.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/syntax.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar combine = __webpack_require__(/*! micromark/dist/util/combine-extensions */ \"(ssr)/./node_modules/micromark/dist/util/combine-extensions.js\");\nvar autolink = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ \"(ssr)/./node_modules/micromark-extension-gfm-autolink-literal/index.js\");\nvar strikethrough = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ \"(ssr)/./node_modules/micromark-extension-gfm-strikethrough/index.js\");\nvar table = __webpack_require__(/*! micromark-extension-gfm-table */ \"(ssr)/./node_modules/micromark-extension-gfm-table/index.js\");\nvar tasklist = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ \"(ssr)/./node_modules/micromark-extension-gfm-task-list-item/index.js\");\nmodule.exports = create;\nfunction create(options) {\n    return combine([\n        autolink,\n        strikethrough(options),\n        table,\n        tasklist\n    ]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vc3ludGF4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxVQUFVQyxtQkFBT0EsQ0FBQztBQUN0QixJQUFJQyxXQUFXRCxtQkFBT0EsQ0FBQztBQUN2QixJQUFJRSxnQkFBZ0JGLG1CQUFPQSxDQUFDO0FBQzVCLElBQUlHLFFBQVFILG1CQUFPQSxDQUFDO0FBQ3BCLElBQUlJLFdBQVdKLG1CQUFPQSxDQUFDO0FBRXZCSyxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLFNBQVNBLE9BQU9DLE9BQU87SUFDckIsT0FBT1QsUUFBUTtRQUFDRTtRQUFVQyxjQUFjTTtRQUFVTDtRQUFPQztLQUFTO0FBQ3BFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtL3N5bnRheC5qcz85OTZlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb21iaW5lID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9jb21iaW5lLWV4dGVuc2lvbnMnKVxudmFyIGF1dG9saW5rID0gcmVxdWlyZSgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tYXV0b2xpbmstbGl0ZXJhbCcpXG52YXIgc3RyaWtldGhyb3VnaCA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gnKVxudmFyIHRhYmxlID0gcmVxdWlyZSgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFibGUnKVxudmFyIHRhc2tsaXN0ID0gcmVxdWlyZSgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG5mdW5jdGlvbiBjcmVhdGUob3B0aW9ucykge1xuICByZXR1cm4gY29tYmluZShbYXV0b2xpbmssIHN0cmlrZXRocm91Z2gob3B0aW9ucyksIHRhYmxlLCB0YXNrbGlzdF0pXG59XG4iXSwibmFtZXMiOlsiY29tYmluZSIsInJlcXVpcmUiLCJhdXRvbGluayIsInN0cmlrZXRocm91Z2giLCJ0YWJsZSIsInRhc2tsaXN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZSIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm/syntax.js\n");

/***/ })

};
;