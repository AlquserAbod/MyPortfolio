"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-parse";
exports.ids = ["vendor-chunks/remark-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = parse;\nvar fromMarkdown = __webpack_require__(/*! mdast-util-from-markdown */ \"(ssr)/./node_modules/mdast-util-from-markdown/index.js\");\nfunction parse(options) {\n    var self = this;\n    this.Parser = parse;\n    function parse(doc) {\n        return fromMarkdown(doc, Object.assign({}, self.data(\"settings\"), options, {\n            // Note: these options are not in the readme.\n            // The goal is for them to be set by plugins on `data` instead of being\n            // passed by users.\n            extensions: self.data(\"micromarkExtensions\") || [],\n            mdastExtensions: self.data(\"fromMarkdownExtensions\") || []\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsZUFBZUMsbUJBQU9BLENBQUM7QUFFM0IsU0FBU0YsTUFBTUcsT0FBTztJQUNwQixJQUFJQyxPQUFPLElBQUk7SUFFZixJQUFJLENBQUNDLE1BQU0sR0FBR0w7SUFFZCxTQUFTQSxNQUFNTSxHQUFHO1FBQ2hCLE9BQU9MLGFBQ0xLLEtBQ0FDLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLEtBQUtLLElBQUksQ0FBQyxhQUFhTixTQUFTO1lBQ2hELDZDQUE2QztZQUM3Qyx1RUFBdUU7WUFDdkUsbUJBQW1CO1lBQ25CTyxZQUFZTixLQUFLSyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbERFLGlCQUFpQlAsS0FBS0ssSUFBSSxDQUFDLDZCQUE2QixFQUFFO1FBQzVEO0lBRUo7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvaW5kZXguanM/MDdlMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG52YXIgZnJvbU1hcmtkb3duID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJylcblxuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICB0aGlzLlBhcnNlciA9IHBhcnNlXG5cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgcmV0dXJuIGZyb21NYXJrZG93bihcbiAgICAgIGRvYyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlbGYuZGF0YSgnc2V0dGluZ3MnKSwgb3B0aW9ucywge1xuICAgICAgICAvLyBOb3RlOiB0aGVzZSBvcHRpb25zIGFyZSBub3QgaW4gdGhlIHJlYWRtZS5cbiAgICAgICAgLy8gVGhlIGdvYWwgaXMgZm9yIHRoZW0gdG8gYmUgc2V0IGJ5IHBsdWdpbnMgb24gYGRhdGFgIGluc3RlYWQgb2YgYmVpbmdcbiAgICAgICAgLy8gcGFzc2VkIGJ5IHVzZXJzLlxuICAgICAgICBleHRlbnNpb25zOiBzZWxmLmRhdGEoJ21pY3JvbWFya0V4dGVuc2lvbnMnKSB8fCBbXSxcbiAgICAgICAgbWRhc3RFeHRlbnNpb25zOiBzZWxmLmRhdGEoJ2Zyb21NYXJrZG93bkV4dGVuc2lvbnMnKSB8fCBbXVxuICAgICAgfSlcbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicGFyc2UiLCJmcm9tTWFya2Rvd24iLCJyZXF1aXJlIiwib3B0aW9ucyIsInNlbGYiLCJQYXJzZXIiLCJkb2MiLCJPYmplY3QiLCJhc3NpZ24iLCJkYXRhIiwiZXh0ZW5zaW9ucyIsIm1kYXN0RXh0ZW5zaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-parse/index.js\n");

/***/ })

};
;