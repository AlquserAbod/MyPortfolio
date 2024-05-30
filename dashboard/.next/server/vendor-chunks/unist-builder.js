"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-builder";
exports.ids = ["vendor-chunks/unist-builder"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-builder/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-builder/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nmodule.exports = u;\nfunction u(type, props, value) {\n    var node;\n    if ((value === null || value === undefined) && (typeof props !== \"object\" || Array.isArray(props))) {\n        value = props;\n        props = {};\n    }\n    node = Object.assign({\n        type: String(type)\n    }, props);\n    if (Array.isArray(value)) {\n        node.children = value;\n    } else if (value !== null && value !== undefined) {\n        node.value = String(value);\n    }\n    return node;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtYnVpbGRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLFNBQVNBLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLO0lBQzNCLElBQUlDO0lBRUosSUFDRSxDQUFDRCxVQUFVLFFBQVFBLFVBQVVFLFNBQVEsS0FDcEMsUUFBT0gsVUFBVSxZQUFZSSxNQUFNQyxPQUFPLENBQUNMLE1BQUssR0FDakQ7UUFDQUMsUUFBUUQ7UUFDUkEsUUFBUSxDQUFDO0lBQ1g7SUFFQUUsT0FBT0ksT0FBT0MsTUFBTSxDQUFDO1FBQUNSLE1BQU1TLE9BQU9UO0lBQUssR0FBR0M7SUFFM0MsSUFBSUksTUFBTUMsT0FBTyxDQUFDSixRQUFRO1FBQ3hCQyxLQUFLTyxRQUFRLEdBQUdSO0lBQ2xCLE9BQU8sSUFBSUEsVUFBVSxRQUFRQSxVQUFVRSxXQUFXO1FBQ2hERCxLQUFLRCxLQUFLLEdBQUdPLE9BQU9QO0lBQ3RCO0lBRUEsT0FBT0M7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy91bmlzdC1idWlsZGVyL2luZGV4LmpzPzRlZjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdVxuXG5mdW5jdGlvbiB1KHR5cGUsIHByb3BzLCB2YWx1ZSkge1xuICB2YXIgbm9kZVxuXG4gIGlmIChcbiAgICAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAodHlwZW9mIHByb3BzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHByb3BzKSlcbiAgKSB7XG4gICAgdmFsdWUgPSBwcm9wc1xuICAgIHByb3BzID0ge31cbiAgfVxuXG4gIG5vZGUgPSBPYmplY3QuYXNzaWduKHt0eXBlOiBTdHJpbmcodHlwZSl9LCBwcm9wcylcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBub2RlLmNoaWxkcmVuID0gdmFsdWVcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbm9kZS52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInUiLCJ0eXBlIiwicHJvcHMiLCJ2YWx1ZSIsIm5vZGUiLCJ1bmRlZmluZWQiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJhc3NpZ24iLCJTdHJpbmciLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-builder/index.js\n");

/***/ })

};
;