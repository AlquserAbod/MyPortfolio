"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/side-channel";
exports.ids = ["vendor-chunks/side-channel"];
exports.modules = {

/***/ "(ssr)/./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar inspect = __webpack_require__(/*! object-inspect */ \"(ssr)/./node_modules/object-inspect/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\nvar $WeakMap = GetIntrinsic(\"%WeakMap%\", true);\nvar $Map = GetIntrinsic(\"%Map%\", true);\nvar $weakMapGet = callBound(\"WeakMap.prototype.get\", true);\nvar $weakMapSet = callBound(\"WeakMap.prototype.set\", true);\nvar $weakMapHas = callBound(\"WeakMap.prototype.has\", true);\nvar $mapGet = callBound(\"Map.prototype.get\", true);\nvar $mapSet = callBound(\"Map.prototype.set\", true);\nvar $mapHas = callBound(\"Map.prototype.has\", true);\n/*\n* This function traverses the list returning the node corresponding to the given key.\n*\n* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list. By doing so, all the recently used nodes can be accessed relatively quickly.\n*/ /** @type {import('.').listGetNode} */ var listGetNode = function(list, key) {\n    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;\n    /** @type {(typeof list)['next']} */ var curr;\n    for(; (curr = prev.next) !== null; prev = curr){\n        if (curr.key === key) {\n            prev.next = curr.next;\n            // eslint-disable-next-line no-extra-parens\n            curr.next = /** @type {NonNullable<typeof list.next>} */ list.next;\n            list.next = curr; // eslint-disable-line no-param-reassign\n            return curr;\n        }\n    }\n};\n/** @type {import('.').listGet} */ var listGet = function(objects, key) {\n    var node = listGetNode(objects, key);\n    return node && node.value;\n};\n/** @type {import('.').listSet} */ var listSet = function(objects, key, value) {\n    var node = listGetNode(objects, key);\n    if (node) {\n        node.value = value;\n    } else {\n        // Prepend the new node to the beginning of the list\n        objects.next = /** @type {import('.').ListNode<typeof value>} */ {\n            key: key,\n            next: objects.next,\n            value: value\n        };\n    }\n};\n/** @type {import('.').listHas} */ var listHas = function(objects, key) {\n    return !!listGetNode(objects, key);\n};\n/** @type {import('.')} */ module.exports = function getSideChannel() {\n    /** @type {WeakMap<object, unknown>} */ var $wm;\n    /** @type {Map<object, unknown>} */ var $m;\n    /** @type {import('.').RootNode<unknown>} */ var $o;\n    /** @type {import('.').Channel} */ var channel = {\n        assert: function(key) {\n            if (!channel.has(key)) {\n                throw new $TypeError(\"Side channel does not contain \" + inspect(key));\n            }\n        },\n        get: function(key) {\n            if ($WeakMap && key && (typeof key === \"object\" || typeof key === \"function\")) {\n                if ($wm) {\n                    return $weakMapGet($wm, key);\n                }\n            } else if ($Map) {\n                if ($m) {\n                    return $mapGet($m, key);\n                }\n            } else {\n                if ($o) {\n                    return listGet($o, key);\n                }\n            }\n        },\n        has: function(key) {\n            if ($WeakMap && key && (typeof key === \"object\" || typeof key === \"function\")) {\n                if ($wm) {\n                    return $weakMapHas($wm, key);\n                }\n            } else if ($Map) {\n                if ($m) {\n                    return $mapHas($m, key);\n                }\n            } else {\n                if ($o) {\n                    return listHas($o, key);\n                }\n            }\n            return false;\n        },\n        set: function(key, value) {\n            if ($WeakMap && key && (typeof key === \"object\" || typeof key === \"function\")) {\n                if (!$wm) {\n                    $wm = new $WeakMap();\n                }\n                $weakMapSet($wm, key, value);\n            } else if ($Map) {\n                if (!$m) {\n                    $m = new $Map();\n                }\n                $mapSet($m, key, value);\n            } else {\n                if (!$o) {\n                    // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head\n                    $o = {\n                        key: {},\n                        next: null\n                    };\n                }\n                listSet($o, key, value);\n            }\n        }\n    };\n    return channel;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2lkZS1jaGFubmVsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsZUFBZUMsbUJBQU9BLENBQUM7QUFDM0IsSUFBSUMsWUFBWUQsbUJBQU9BLENBQUM7QUFDeEIsSUFBSUUsVUFBVUYsbUJBQU9BLENBQUM7QUFFdEIsSUFBSUcsYUFBYUgsbUJBQU9BLENBQUM7QUFDekIsSUFBSUksV0FBV0wsYUFBYSxhQUFhO0FBQ3pDLElBQUlNLE9BQU9OLGFBQWEsU0FBUztBQUVqQyxJQUFJTyxjQUFjTCxVQUFVLHlCQUF5QjtBQUNyRCxJQUFJTSxjQUFjTixVQUFVLHlCQUF5QjtBQUNyRCxJQUFJTyxjQUFjUCxVQUFVLHlCQUF5QjtBQUNyRCxJQUFJUSxVQUFVUixVQUFVLHFCQUFxQjtBQUM3QyxJQUFJUyxVQUFVVCxVQUFVLHFCQUFxQjtBQUM3QyxJQUFJVSxVQUFVVixVQUFVLHFCQUFxQjtBQUU3Qzs7OztBQUlBLEdBQ0Esb0NBQW9DLEdBQ3BDLElBQUlXLGNBQWMsU0FBVUMsSUFBSSxFQUFFQyxHQUFHO0lBQ3BDLDZEQUE2RCxHQUM3RCxJQUFJQyxPQUFPRjtJQUNYLGtDQUFrQyxHQUNsQyxJQUFJRztJQUNKLE1BQU8sQ0FBQ0EsT0FBT0QsS0FBS0UsSUFBSSxNQUFNLE1BQU1GLE9BQU9DLEtBQU07UUFDaEQsSUFBSUEsS0FBS0YsR0FBRyxLQUFLQSxLQUFLO1lBQ3JCQyxLQUFLRSxJQUFJLEdBQUdELEtBQUtDLElBQUk7WUFDckIsMkNBQTJDO1lBQzNDRCxLQUFLQyxJQUFJLEdBQUcsMENBQTBDLEdBQUlKLEtBQUtJLElBQUk7WUFDbkVKLEtBQUtJLElBQUksR0FBR0QsTUFBTSx3Q0FBd0M7WUFDMUQsT0FBT0E7UUFDUjtJQUNEO0FBQ0Q7QUFFQSxnQ0FBZ0MsR0FDaEMsSUFBSUUsVUFBVSxTQUFVQyxPQUFPLEVBQUVMLEdBQUc7SUFDbkMsSUFBSU0sT0FBT1IsWUFBWU8sU0FBU0w7SUFDaEMsT0FBT00sUUFBUUEsS0FBS0MsS0FBSztBQUMxQjtBQUNBLGdDQUFnQyxHQUNoQyxJQUFJQyxVQUFVLFNBQVVILE9BQU8sRUFBRUwsR0FBRyxFQUFFTyxLQUFLO0lBQzFDLElBQUlELE9BQU9SLFlBQVlPLFNBQVNMO0lBQ2hDLElBQUlNLE1BQU07UUFDVEEsS0FBS0MsS0FBSyxHQUFHQTtJQUNkLE9BQU87UUFDTixvREFBb0Q7UUFDcERGLFFBQVFGLElBQUksR0FBRywrQ0FBK0MsR0FBSTtZQUNqRUgsS0FBS0E7WUFDTEcsTUFBTUUsUUFBUUYsSUFBSTtZQUNsQkksT0FBT0E7UUFDUjtJQUNEO0FBQ0Q7QUFDQSxnQ0FBZ0MsR0FDaEMsSUFBSUUsVUFBVSxTQUFVSixPQUFPLEVBQUVMLEdBQUc7SUFDbkMsT0FBTyxDQUFDLENBQUNGLFlBQVlPLFNBQVNMO0FBQy9CO0FBRUEsd0JBQXdCLEdBQ3hCVSxPQUFPQyxPQUFPLEdBQUcsU0FBU0M7SUFDekIscUNBQXFDLEdBQUcsSUFBSUM7SUFDNUMsaUNBQWlDLEdBQUcsSUFBSUM7SUFDeEMsMENBQTBDLEdBQUcsSUFBSUM7SUFFakQsZ0NBQWdDLEdBQ2hDLElBQUlDLFVBQVU7UUFDYkMsUUFBUSxTQUFVakIsR0FBRztZQUNwQixJQUFJLENBQUNnQixRQUFRRSxHQUFHLENBQUNsQixNQUFNO2dCQUN0QixNQUFNLElBQUlYLFdBQVcsbUNBQW1DRCxRQUFRWTtZQUNqRTtRQUNEO1FBQ0FtQixLQUFLLFNBQVVuQixHQUFHO1lBQ2pCLElBQUlWLFlBQVlVLE9BQVEsUUFBT0EsUUFBUSxZQUFZLE9BQU9BLFFBQVEsVUFBUyxHQUFJO2dCQUM5RSxJQUFJYSxLQUFLO29CQUNSLE9BQU9yQixZQUFZcUIsS0FBS2I7Z0JBQ3pCO1lBQ0QsT0FBTyxJQUFJVCxNQUFNO2dCQUNoQixJQUFJdUIsSUFBSTtvQkFDUCxPQUFPbkIsUUFBUW1CLElBQUlkO2dCQUNwQjtZQUNELE9BQU87Z0JBQ04sSUFBSWUsSUFBSTtvQkFDUCxPQUFPWCxRQUFRVyxJQUFJZjtnQkFDcEI7WUFDRDtRQUNEO1FBQ0FrQixLQUFLLFNBQVVsQixHQUFHO1lBQ2pCLElBQUlWLFlBQVlVLE9BQVEsUUFBT0EsUUFBUSxZQUFZLE9BQU9BLFFBQVEsVUFBUyxHQUFJO2dCQUM5RSxJQUFJYSxLQUFLO29CQUNSLE9BQU9uQixZQUFZbUIsS0FBS2I7Z0JBQ3pCO1lBQ0QsT0FBTyxJQUFJVCxNQUFNO2dCQUNoQixJQUFJdUIsSUFBSTtvQkFDUCxPQUFPakIsUUFBUWlCLElBQUlkO2dCQUNwQjtZQUNELE9BQU87Z0JBQ04sSUFBSWUsSUFBSTtvQkFDUCxPQUFPTixRQUFRTSxJQUFJZjtnQkFDcEI7WUFDRDtZQUNBLE9BQU87UUFDUjtRQUNBb0IsS0FBSyxTQUFVcEIsR0FBRyxFQUFFTyxLQUFLO1lBQ3hCLElBQUlqQixZQUFZVSxPQUFRLFFBQU9BLFFBQVEsWUFBWSxPQUFPQSxRQUFRLFVBQVMsR0FBSTtnQkFDOUUsSUFBSSxDQUFDYSxLQUFLO29CQUNUQSxNQUFNLElBQUl2QjtnQkFDWDtnQkFDQUcsWUFBWW9CLEtBQUtiLEtBQUtPO1lBQ3ZCLE9BQU8sSUFBSWhCLE1BQU07Z0JBQ2hCLElBQUksQ0FBQ3VCLElBQUk7b0JBQ1JBLEtBQUssSUFBSXZCO2dCQUNWO2dCQUNBSyxRQUFRa0IsSUFBSWQsS0FBS087WUFDbEIsT0FBTztnQkFDTixJQUFJLENBQUNRLElBQUk7b0JBQ1IsME1BQTBNO29CQUMxTUEsS0FBSzt3QkFBRWYsS0FBSyxDQUFDO3dCQUFHRyxNQUFNO29CQUFLO2dCQUM1QjtnQkFDQUssUUFBUU8sSUFBSWYsS0FBS087WUFDbEI7UUFDRDtJQUNEO0lBQ0EsT0FBT1M7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hib2FyZC8uL25vZGVfbW9kdWxlcy9zaWRlLWNoYW5uZWwvaW5kZXguanM/OWFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIGluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IHJlcXVpcmUoJ2VzLWVycm9ycy90eXBlJyk7XG52YXIgJFdlYWtNYXAgPSBHZXRJbnRyaW5zaWMoJyVXZWFrTWFwJScsIHRydWUpO1xudmFyICRNYXAgPSBHZXRJbnRyaW5zaWMoJyVNYXAlJywgdHJ1ZSk7XG5cbnZhciAkd2Vha01hcEdldCA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuZ2V0JywgdHJ1ZSk7XG52YXIgJHdlYWtNYXBTZXQgPSBjYWxsQm91bmQoJ1dlYWtNYXAucHJvdG90eXBlLnNldCcsIHRydWUpO1xudmFyICR3ZWFrTWFwSGFzID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5oYXMnLCB0cnVlKTtcbnZhciAkbWFwR2V0ID0gY2FsbEJvdW5kKCdNYXAucHJvdG90eXBlLmdldCcsIHRydWUpO1xudmFyICRtYXBTZXQgPSBjYWxsQm91bmQoJ01hcC5wcm90b3R5cGUuc2V0JywgdHJ1ZSk7XG52YXIgJG1hcEhhcyA9IGNhbGxCb3VuZCgnTWFwLnByb3RvdHlwZS5oYXMnLCB0cnVlKTtcblxuLypcbiogVGhpcyBmdW5jdGlvbiB0cmF2ZXJzZXMgdGhlIGxpc3QgcmV0dXJuaW5nIHRoZSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGtleS5cbipcbiogVGhhdCBub2RlIGlzIGFsc28gbW92ZWQgdG8gdGhlIGhlYWQgb2YgdGhlIGxpc3QsIHNvIHRoYXQgaWYgaXQncyBhY2Nlc3NlZCBhZ2FpbiB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIHRoZSB3aG9sZSBsaXN0LiBCeSBkb2luZyBzbywgYWxsIHRoZSByZWNlbnRseSB1c2VkIG5vZGVzIGNhbiBiZSBhY2Nlc3NlZCByZWxhdGl2ZWx5IHF1aWNrbHkuXG4qL1xuLyoqIEB0eXBlIHtpbXBvcnQoJy4nKS5saXN0R2V0Tm9kZX0gKi9cbnZhciBsaXN0R2V0Tm9kZSA9IGZ1bmN0aW9uIChsaXN0LCBrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHQvKiogQHR5cGUge3R5cGVvZiBsaXN0IHwgTm9uTnVsbGFibGU8KHR5cGVvZiBsaXN0KVsnbmV4dCddPn0gKi9cblx0dmFyIHByZXYgPSBsaXN0O1xuXHQvKiogQHR5cGUgeyh0eXBlb2YgbGlzdClbJ25leHQnXX0gKi9cblx0dmFyIGN1cnI7XG5cdGZvciAoOyAoY3VyciA9IHByZXYubmV4dCkgIT09IG51bGw7IHByZXYgPSBjdXJyKSB7XG5cdFx0aWYgKGN1cnIua2V5ID09PSBrZXkpIHtcblx0XHRcdHByZXYubmV4dCA9IGN1cnIubmV4dDtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1wYXJlbnNcblx0XHRcdGN1cnIubmV4dCA9IC8qKiBAdHlwZSB7Tm9uTnVsbGFibGU8dHlwZW9mIGxpc3QubmV4dD59ICovIChsaXN0Lm5leHQpO1xuXHRcdFx0bGlzdC5uZXh0ID0gY3VycjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdFx0cmV0dXJuIGN1cnI7XG5cdFx0fVxuXHR9XG59O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLicpLmxpc3RHZXR9ICovXG52YXIgbGlzdEdldCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXkpIHtcblx0dmFyIG5vZGUgPSBsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlO1xufTtcbi8qKiBAdHlwZSB7aW1wb3J0KCcuJykubGlzdFNldH0gKi9cbnZhciBsaXN0U2V0ID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleSwgdmFsdWUpIHtcblx0dmFyIG5vZGUgPSBsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xuXHRpZiAobm9kZSkge1xuXHRcdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHQvLyBQcmVwZW5kIHRoZSBuZXcgbm9kZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG5cdFx0b2JqZWN0cy5uZXh0ID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4nKS5MaXN0Tm9kZTx0eXBlb2YgdmFsdWU+fSAqLyAoeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduLCBuby1leHRyYS1wYXJlbnNcblx0XHRcdGtleToga2V5LFxuXHRcdFx0bmV4dDogb2JqZWN0cy5uZXh0LFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fSk7XG5cdH1cbn07XG4vKiogQHR5cGUge2ltcG9ydCgnLicpLmxpc3RIYXN9ICovXG52YXIgbGlzdEhhcyA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXkpIHtcblx0cmV0dXJuICEhbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcbn07XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFNpZGVDaGFubmVsKCkge1xuXHQvKiogQHR5cGUge1dlYWtNYXA8b2JqZWN0LCB1bmtub3duPn0gKi8gdmFyICR3bTtcblx0LyoqIEB0eXBlIHtNYXA8b2JqZWN0LCB1bmtub3duPn0gKi8gdmFyICRtO1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLicpLlJvb3ROb2RlPHVua25vd24+fSAqLyB2YXIgJG87XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4nKS5DaGFubmVsfSAqL1xuXHR2YXIgY2hhbm5lbCA9IHtcblx0XHRhc3NlcnQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmICghY2hhbm5lbC5oYXMoa2V5KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignU2lkZSBjaGFubmVsIGRvZXMgbm90IGNvbnRhaW4gJyArIGluc3BlY3Qoa2V5KSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCR3bSkge1xuXHRcdFx0XHRcdHJldHVybiAkd2Vha01hcEdldCgkd20sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoJG0pIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1hcEdldCgkbSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCRvKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZWx5LWlmXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RHZXQoJG8sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGhhczogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCR3bSkge1xuXHRcdFx0XHRcdHJldHVybiAkd2Vha01hcEhhcygkd20sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoJG0pIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1hcEhhcygkbSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCRvKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZWx5LWlmXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RIYXMoJG8sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICghJHdtKSB7XG5cdFx0XHRcdFx0JHdtID0gbmV3ICRXZWFrTWFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JHdlYWtNYXBTZXQoJHdtLCBrZXksIHZhbHVlKTtcblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoISRtKSB7XG5cdFx0XHRcdFx0JG0gPSBuZXcgJE1hcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCRtYXBTZXQoJG0sIGtleSwgdmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCEkbykge1xuXHRcdFx0XHRcdC8vIEluaXRpYWxpemUgdGhlIGxpbmtlZCBsaXN0IGFzIGFuIGVtcHR5IG5vZGUsIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBzcGVjaWFsLWNhc2UgaGFuZGxpbmcgb2YgdGhlIGZpcnN0IG5vZGU6IHdlIGNhbiBhbHdheXMgcmVmZXIgdG8gaXQgYXMgKHByZXZpb3VzIG5vZGUpLm5leHQsIGluc3RlYWQgb2Ygc29tZXRoaW5nIGxpa2UgKGxpc3QpLmhlYWRcblx0XHRcdFx0XHQkbyA9IHsga2V5OiB7fSwgbmV4dDogbnVsbCB9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3RTZXQoJG8sIGtleSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGNoYW5uZWw7XG59O1xuIl0sIm5hbWVzIjpbIkdldEludHJpbnNpYyIsInJlcXVpcmUiLCJjYWxsQm91bmQiLCJpbnNwZWN0IiwiJFR5cGVFcnJvciIsIiRXZWFrTWFwIiwiJE1hcCIsIiR3ZWFrTWFwR2V0IiwiJHdlYWtNYXBTZXQiLCIkd2Vha01hcEhhcyIsIiRtYXBHZXQiLCIkbWFwU2V0IiwiJG1hcEhhcyIsImxpc3RHZXROb2RlIiwibGlzdCIsImtleSIsInByZXYiLCJjdXJyIiwibmV4dCIsImxpc3RHZXQiLCJvYmplY3RzIiwibm9kZSIsInZhbHVlIiwibGlzdFNldCIsImxpc3RIYXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0U2lkZUNoYW5uZWwiLCIkd20iLCIkbSIsIiRvIiwiY2hhbm5lbCIsImFzc2VydCIsImhhcyIsImdldCIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/side-channel/index.js\n");

/***/ })

};
;