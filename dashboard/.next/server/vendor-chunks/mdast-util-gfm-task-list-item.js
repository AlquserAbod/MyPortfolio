/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-task-list-item";
exports.ids = ["vendor-chunks/mdast-util-gfm-task-list-item"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-task-list-item/from-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/from-markdown.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.exit = {\n    taskListCheckValueChecked: exitCheck,\n    taskListCheckValueUnchecked: exitCheck,\n    paragraph: exitParagraphWithTaskListItem\n};\nfunction exitCheck(token) {\n    // We’re always in a paragraph, in a list item.\n    this.stack[this.stack.length - 2].checked = token.type === \"taskListCheckValueChecked\";\n}\nfunction exitParagraphWithTaskListItem(token) {\n    var parent = this.stack[this.stack.length - 2];\n    var node = this.stack[this.stack.length - 1];\n    var siblings = parent.children;\n    var head = node.children[0];\n    var index = -1;\n    var firstParaghraph;\n    if (parent && parent.type === \"listItem\" && typeof parent.checked === \"boolean\" && head && head.type === \"text\") {\n        while(++index < siblings.length){\n            if (siblings[index].type === \"paragraph\") {\n                firstParaghraph = siblings[index];\n                break;\n            }\n        }\n        if (firstParaghraph === node) {\n            // Must start with a space or a tab.\n            head.value = head.value.slice(1);\n            if (head.value.length === 0) {\n                node.children.shift();\n            } else {\n                head.position.start.column++;\n                head.position.start.offset++;\n                node.position.start = Object.assign({}, head.position.start);\n            }\n        }\n    }\n    this.exit(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vZnJvbS1tYXJrZG93bi5qcyIsIm1hcHBpbmdzIjoiQUFBQUEsWUFBWSxHQUFHO0lBQ2JFLDJCQUEyQkM7SUFDM0JDLDZCQUE2QkQ7SUFDN0JFLFdBQVdDO0FBQ2I7QUFFQSxTQUFTSCxVQUFVSSxLQUFLO0lBQ3RCLCtDQUErQztJQUMvQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQ0MsT0FBTyxHQUN2Q0gsTUFBTUksSUFBSSxLQUFLO0FBQ25CO0FBRUEsU0FBU0wsOEJBQThCQyxLQUFLO0lBQzFDLElBQUlLLFNBQVMsSUFBSSxDQUFDSixLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQzlDLElBQUlJLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDQSxLQUFLLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQzVDLElBQUlLLFdBQVdGLE9BQU9HLFFBQVE7SUFDOUIsSUFBSUMsT0FBT0gsS0FBS0UsUUFBUSxDQUFDLEVBQUU7SUFDM0IsSUFBSUUsUUFBUSxDQUFDO0lBQ2IsSUFBSUM7SUFFSixJQUNFTixVQUNBQSxPQUFPRCxJQUFJLEtBQUssY0FDaEIsT0FBT0MsT0FBT0YsT0FBTyxLQUFLLGFBQzFCTSxRQUNBQSxLQUFLTCxJQUFJLEtBQUssUUFDZDtRQUNBLE1BQU8sRUFBRU0sUUFBUUgsU0FBU0wsTUFBTSxDQUFFO1lBQ2hDLElBQUlLLFFBQVEsQ0FBQ0csTUFBTSxDQUFDTixJQUFJLEtBQUssYUFBYTtnQkFDeENPLGtCQUFrQkosUUFBUSxDQUFDRyxNQUFNO2dCQUNqQztZQUNGO1FBQ0Y7UUFFQSxJQUFJQyxvQkFBb0JMLE1BQU07WUFDNUIsb0NBQW9DO1lBQ3BDRyxLQUFLRyxLQUFLLEdBQUdILEtBQUtHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDO1lBRTlCLElBQUlKLEtBQUtHLEtBQUssQ0FBQ1YsTUFBTSxLQUFLLEdBQUc7Z0JBQzNCSSxLQUFLRSxRQUFRLENBQUNNLEtBQUs7WUFDckIsT0FBTztnQkFDTEwsS0FBS00sUUFBUSxDQUFDQyxLQUFLLENBQUNDLE1BQU07Z0JBQzFCUixLQUFLTSxRQUFRLENBQUNDLEtBQUssQ0FBQ0UsTUFBTTtnQkFDMUJaLEtBQUtTLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHRyxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHWCxLQUFLTSxRQUFRLENBQUNDLEtBQUs7WUFDN0Q7UUFDRjtJQUNGO0lBRUEsSUFBSSxDQUFDdEIsSUFBSSxDQUFDTTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXRhc2stbGlzdC1pdGVtL2Zyb20tbWFya2Rvd24uanM/ZDhhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLmV4aXQgPSB7XG4gIHRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQ6IGV4aXRDaGVjayxcbiAgdGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkOiBleGl0Q2hlY2ssXG4gIHBhcmFncmFwaDogZXhpdFBhcmFncmFwaFdpdGhUYXNrTGlzdEl0ZW1cbn1cblxuZnVuY3Rpb24gZXhpdENoZWNrKHRva2VuKSB7XG4gIC8vIFdl4oCZcmUgYWx3YXlzIGluIGEgcGFyYWdyYXBoLCBpbiBhIGxpc3QgaXRlbS5cbiAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdLmNoZWNrZWQgPVxuICAgIHRva2VuLnR5cGUgPT09ICd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJ1xufVxuXG5mdW5jdGlvbiBleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbSh0b2tlbikge1xuICB2YXIgcGFyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdXG4gIHZhciBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gIHZhciBzaWJsaW5ncyA9IHBhcmVudC5jaGlsZHJlblxuICB2YXIgaGVhZCA9IG5vZGUuY2hpbGRyZW5bMF1cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGZpcnN0UGFyYWdocmFwaFxuXG4gIGlmIChcbiAgICBwYXJlbnQgJiZcbiAgICBwYXJlbnQudHlwZSA9PT0gJ2xpc3RJdGVtJyAmJlxuICAgIHR5cGVvZiBwYXJlbnQuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nICYmXG4gICAgaGVhZCAmJlxuICAgIGhlYWQudHlwZSA9PT0gJ3RleHQnXG4gICkge1xuICAgIHdoaWxlICgrK2luZGV4IDwgc2libGluZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAoc2libGluZ3NbaW5kZXhdLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgIGZpcnN0UGFyYWdocmFwaCA9IHNpYmxpbmdzW2luZGV4XVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaXJzdFBhcmFnaHJhcGggPT09IG5vZGUpIHtcbiAgICAgIC8vIE11c3Qgc3RhcnQgd2l0aCBhIHNwYWNlIG9yIGEgdGFiLlxuICAgICAgaGVhZC52YWx1ZSA9IGhlYWQudmFsdWUuc2xpY2UoMSlcblxuICAgICAgaWYgKGhlYWQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uc2hpZnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZC5wb3NpdGlvbi5zdGFydC5jb2x1bW4rK1xuICAgICAgICBoZWFkLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCsrXG4gICAgICAgIG5vZGUucG9zaXRpb24uc3RhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBoZWFkLnBvc2l0aW9uLnN0YXJ0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiZXhpdCIsInRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQiLCJleGl0Q2hlY2siLCJ0YXNrTGlzdENoZWNrVmFsdWVVbmNoZWNrZWQiLCJwYXJhZ3JhcGgiLCJleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbSIsInRva2VuIiwic3RhY2siLCJsZW5ndGgiLCJjaGVja2VkIiwidHlwZSIsInBhcmVudCIsIm5vZGUiLCJzaWJsaW5ncyIsImNoaWxkcmVuIiwiaGVhZCIsImluZGV4IiwiZmlyc3RQYXJhZ2hyYXBoIiwidmFsdWUiLCJzbGljZSIsInNoaWZ0IiwicG9zaXRpb24iLCJzdGFydCIsImNvbHVtbiIsIm9mZnNldCIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-task-list-item/from-markdown.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/mdast-util-gfm-task-list-item/to-markdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/to-markdown.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var defaultListItem = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/list-item */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/handle/list-item.js\");\nexports.unsafe = [\n    {\n        atBreak: true,\n        character: \"-\",\n        after: \"[:|-]\"\n    }\n];\nexports.handlers = {\n    listItem: listItemWithTaskListItem\n};\nfunction listItemWithTaskListItem(node, parent, context) {\n    var value = defaultListItem(node, parent, context);\n    var head = node.children[0];\n    if (typeof node.checked === \"boolean\" && head && head.type === \"paragraph\") {\n        value = value.replace(/^(?:[*+-]|\\d+\\.)([\\r\\n]| {1,3})/, check);\n    }\n    return value;\n    function check($0) {\n        return $0 + \"[\" + (node.checked ? \"x\" : \" \") + \"] \";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vdG8tbWFya2Rvd24uanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsa0JBQWtCQyxtQkFBT0EsQ0FBQztBQUU5QkMsY0FBYyxHQUFHO0lBQUM7UUFBQ0UsU0FBUztRQUFNQyxXQUFXO1FBQUtDLE9BQU87SUFBTztDQUFFO0FBRWxFSixnQkFBZ0IsR0FBRztJQUNqQk0sVUFBVUM7QUFDWjtBQUVBLFNBQVNBLHlCQUF5QkMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE9BQU87SUFDckQsSUFBSUMsUUFBUWIsZ0JBQWdCVSxNQUFNQyxRQUFRQztJQUMxQyxJQUFJRSxPQUFPSixLQUFLSyxRQUFRLENBQUMsRUFBRTtJQUUzQixJQUFJLE9BQU9MLEtBQUtNLE9BQU8sS0FBSyxhQUFhRixRQUFRQSxLQUFLRyxJQUFJLEtBQUssYUFBYTtRQUMxRUosUUFBUUEsTUFBTUssT0FBTyxDQUFDLG1DQUFtQ0M7SUFDM0Q7SUFFQSxPQUFPTjtJQUVQLFNBQVNNLE1BQU1DLEVBQUU7UUFDZixPQUFPQSxLQUFLLE1BQU9WLENBQUFBLEtBQUtNLE9BQU8sR0FBRyxNQUFNLEdBQUUsSUFBSztJQUNqRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXRhc2stbGlzdC1pdGVtL3RvLW1hcmtkb3duLmpzPzFhNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRMaXN0SXRlbSA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9saXN0LWl0ZW0nKVxuXG5leHBvcnRzLnVuc2FmZSA9IFt7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnLScsIGFmdGVyOiAnWzp8LV0nfV1cblxuZXhwb3J0cy5oYW5kbGVycyA9IHtcbiAgbGlzdEl0ZW06IGxpc3RJdGVtV2l0aFRhc2tMaXN0SXRlbVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbVdpdGhUYXNrTGlzdEl0ZW0obm9kZSwgcGFyZW50LCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IGRlZmF1bHRMaXN0SXRlbShub2RlLCBwYXJlbnQsIGNvbnRleHQpXG4gIHZhciBoZWFkID0gbm9kZS5jaGlsZHJlblswXVxuXG4gIGlmICh0eXBlb2Ygbm9kZS5jaGVja2VkID09PSAnYm9vbGVhbicgJiYgaGVhZCAmJiBoZWFkLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eKD86WyorLV18XFxkK1xcLikoW1xcclxcbl18IHsxLDN9KS8sIGNoZWNrKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG5cbiAgZnVuY3Rpb24gY2hlY2soJDApIHtcbiAgICByZXR1cm4gJDAgKyAnWycgKyAobm9kZS5jaGVja2VkID8gJ3gnIDogJyAnKSArICddICdcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlZmF1bHRMaXN0SXRlbSIsInJlcXVpcmUiLCJleHBvcnRzIiwidW5zYWZlIiwiYXRCcmVhayIsImNoYXJhY3RlciIsImFmdGVyIiwiaGFuZGxlcnMiLCJsaXN0SXRlbSIsImxpc3RJdGVtV2l0aFRhc2tMaXN0SXRlbSIsIm5vZGUiLCJwYXJlbnQiLCJjb250ZXh0IiwidmFsdWUiLCJoZWFkIiwiY2hpbGRyZW4iLCJjaGVja2VkIiwidHlwZSIsInJlcGxhY2UiLCJjaGVjayIsIiQwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-task-list-item/to-markdown.js\n");

/***/ })

};
;