"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit";
exports.ids = ["vendor-chunks/unist-util-visit"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = visit;\nvar visitParents = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/index.js\");\nvar CONTINUE = visitParents.CONTINUE;\nvar SKIP = visitParents.SKIP;\nvar EXIT = visitParents.EXIT;\nvisit.CONTINUE = CONTINUE;\nvisit.SKIP = SKIP;\nvisit.EXIT = EXIT;\nfunction visit(tree, test, visitor, reverse) {\n    if (typeof test === \"function\" && typeof visitor !== \"function\") {\n        reverse = visitor;\n        visitor = test;\n        test = null;\n    }\n    visitParents(tree, test, overload, reverse);\n    function overload(node, parents) {\n        var parent = parents[parents.length - 1];\n        var index = parent ? parent.children.indexOf(node) : null;\n        return visitor(node, index, parent);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLElBQUlDLGVBQWVDLG1CQUFPQSxDQUFDO0FBRTNCLElBQUlDLFdBQVdGLGFBQWFFLFFBQVE7QUFDcEMsSUFBSUMsT0FBT0gsYUFBYUcsSUFBSTtBQUM1QixJQUFJQyxPQUFPSixhQUFhSSxJQUFJO0FBRTVCTCxNQUFNRyxRQUFRLEdBQUdBO0FBQ2pCSCxNQUFNSSxJQUFJLEdBQUdBO0FBQ2JKLE1BQU1LLElBQUksR0FBR0E7QUFFYixTQUFTTCxNQUFNTSxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPO0lBQ3pDLElBQUksT0FBT0YsU0FBUyxjQUFjLE9BQU9DLFlBQVksWUFBWTtRQUMvREMsVUFBVUQ7UUFDVkEsVUFBVUQ7UUFDVkEsT0FBTztJQUNUO0lBRUFOLGFBQWFLLE1BQU1DLE1BQU1HLFVBQVVEO0lBRW5DLFNBQVNDLFNBQVNDLElBQUksRUFBRUMsT0FBTztRQUM3QixJQUFJQyxTQUFTRCxPQUFPLENBQUNBLFFBQVFFLE1BQU0sR0FBRyxFQUFFO1FBQ3hDLElBQUlDLFFBQVFGLFNBQVNBLE9BQU9HLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDTixRQUFRO1FBQ3JELE9BQU9ILFFBQVFHLE1BQU1JLE9BQU9GO0lBQzlCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9pbmRleC5qcz84YzBjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0XG5cbnZhciB2aXNpdFBhcmVudHMgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKVxuXG52YXIgQ09OVElOVUUgPSB2aXNpdFBhcmVudHMuQ09OVElOVUVcbnZhciBTS0lQID0gdmlzaXRQYXJlbnRzLlNLSVBcbnZhciBFWElUID0gdmlzaXRQYXJlbnRzLkVYSVRcblxudmlzaXQuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXQuU0tJUCA9IFNLSVBcbnZpc2l0LkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0KHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICB2YXIgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGxcbiAgICByZXR1cm4gdmlzaXRvcihub2RlLCBpbmRleCwgcGFyZW50KVxuICB9XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInZpc2l0IiwidmlzaXRQYXJlbnRzIiwicmVxdWlyZSIsIkNPTlRJTlVFIiwiU0tJUCIsIkVYSVQiLCJ0cmVlIiwidGVzdCIsInZpc2l0b3IiLCJyZXZlcnNlIiwib3ZlcmxvYWQiLCJub2RlIiwicGFyZW50cyIsInBhcmVudCIsImxlbmd0aCIsImluZGV4IiwiY2hpbGRyZW4iLCJpbmRleE9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit/index.js\n");

/***/ })

};
;