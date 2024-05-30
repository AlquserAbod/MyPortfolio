/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/from-markdown.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/from-markdown.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.canContainEols = [\n    \"delete\"\n];\nexports.enter = {\n    strikethrough: enterStrikethrough\n};\nexports.exit = {\n    strikethrough: exitStrikethrough\n};\nfunction enterStrikethrough(token) {\n    this.enter({\n        type: \"delete\",\n        children: []\n    }, token);\n}\nfunction exitStrikethrough(token) {\n    this.exit(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9mcm9tLW1hcmtkb3duLmpzIiwibWFwcGluZ3MiOiJBQUFBQSxzQkFBc0IsR0FBRztJQUFDO0NBQVM7QUFDbkNBLGFBQWEsR0FBRztJQUFDRyxlQUFlQztBQUFrQjtBQUNsREosWUFBWSxHQUFHO0lBQUNHLGVBQWVHO0FBQWlCO0FBRWhELFNBQVNGLG1CQUFtQkcsS0FBSztJQUMvQixJQUFJLENBQUNMLEtBQUssQ0FBQztRQUFDTSxNQUFNO1FBQVVDLFVBQVUsRUFBRTtJQUFBLEdBQUdGO0FBQzdDO0FBRUEsU0FBU0Qsa0JBQWtCQyxLQUFLO0lBQzlCLElBQUksQ0FBQ0YsSUFBSSxDQUFDRTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXN0cmlrZXRocm91Z2gvZnJvbS1tYXJrZG93bi5qcz9iODJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuY2FuQ29udGFpbkVvbHMgPSBbJ2RlbGV0ZSddXG5leHBvcnRzLmVudGVyID0ge3N0cmlrZXRocm91Z2g6IGVudGVyU3RyaWtldGhyb3VnaH1cbmV4cG9ydHMuZXhpdCA9IHtzdHJpa2V0aHJvdWdoOiBleGl0U3RyaWtldGhyb3VnaH1cblxuZnVuY3Rpb24gZW50ZXJTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdkZWxldGUnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdFN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW5Db250YWluRW9scyIsImVudGVyIiwic3RyaWtldGhyb3VnaCIsImVudGVyU3RyaWtldGhyb3VnaCIsImV4aXQiLCJleGl0U3RyaWtldGhyb3VnaCIsInRva2VuIiwidHlwZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/from-markdown.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/to-markdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/to-markdown.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js\");\nexports.unsafe = [\n    {\n        character: \"~\",\n        inConstruct: \"phrasing\"\n    }\n];\nexports.handlers = {\n    delete: handleDelete\n};\nhandleDelete.peek = peekDelete;\nfunction handleDelete(node, _, context) {\n    var exit = context.enter(\"emphasis\");\n    var value = phrasing(node, context, {\n        before: \"~\",\n        after: \"~\"\n    });\n    exit();\n    return \"~~\" + value + \"~~\";\n}\nfunction peekDelete() {\n    return \"~\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC90by1tYXJrZG93bi5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV2QkMsY0FBYyxHQUFHO0lBQUM7UUFBQ0UsV0FBVztRQUFLQyxhQUFhO0lBQVU7Q0FBRTtBQUM1REgsZ0JBQWdCLEdBQUc7SUFBQ0ssUUFBUUM7QUFBWTtBQUV4Q0EsYUFBYUMsSUFBSSxHQUFHQztBQUVwQixTQUFTRixhQUFhRyxJQUFJLEVBQUVDLENBQUMsRUFBRUMsT0FBTztJQUNwQyxJQUFJQyxPQUFPRCxRQUFRRSxLQUFLLENBQUM7SUFDekIsSUFBSUMsUUFBUWhCLFNBQVNXLE1BQU1FLFNBQVM7UUFBQ0ksUUFBUTtRQUFLQyxPQUFPO0lBQUc7SUFDNURKO0lBQ0EsT0FBTyxPQUFPRSxRQUFRO0FBQ3hCO0FBRUEsU0FBU047SUFDUCxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC90by1tYXJrZG93bi5qcz8xMTc4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBwaHJhc2luZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nJylcblxuZXhwb3J0cy51bnNhZmUgPSBbe2NoYXJhY3RlcjogJ34nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ31dXG5leHBvcnRzLmhhbmRsZXJzID0ge2RlbGV0ZTogaGFuZGxlRGVsZXRlfVxuXG5oYW5kbGVEZWxldGUucGVlayA9IHBlZWtEZWxldGVcblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdlbXBoYXNpcycpXG4gIHZhciB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICd+JywgYWZ0ZXI6ICd+J30pXG4gIGV4aXQoKVxuICByZXR1cm4gJ35+JyArIHZhbHVlICsgJ35+J1xufVxuXG5mdW5jdGlvbiBwZWVrRGVsZXRlKCkge1xuICByZXR1cm4gJ34nXG59XG4iXSwibmFtZXMiOlsicGhyYXNpbmciLCJyZXF1aXJlIiwiZXhwb3J0cyIsInVuc2FmZSIsImNoYXJhY3RlciIsImluQ29uc3RydWN0IiwiaGFuZGxlcnMiLCJkZWxldGUiLCJoYW5kbGVEZWxldGUiLCJwZWVrIiwicGVla0RlbGV0ZSIsIm5vZGUiLCJfIiwiY29udGV4dCIsImV4aXQiLCJlbnRlciIsInZhbHVlIiwiYmVmb3JlIiwiYWZ0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/to-markdown.js\n");

/***/ })

};
;