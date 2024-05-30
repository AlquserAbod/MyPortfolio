"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-position";
exports.ids = ["vendor-chunks/unist-util-position"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-position/index.js":
/*!***************************************************!*\
  !*** ./node_modules/unist-util-position/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\nvar start = factory(\"start\");\nvar end = factory(\"end\");\nmodule.exports = position;\nposition.start = start;\nposition.end = end;\nfunction position(node) {\n    return {\n        start: start(node),\n        end: end(node)\n    };\n}\nfunction factory(type) {\n    point.displayName = type;\n    return point;\n    function point(node) {\n        var point = node && node.position && node.position[type] || {};\n        return {\n            line: point.line || null,\n            column: point.column || null,\n            offset: isNaN(point.offset) ? null : point.offset\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1wb3NpdGlvbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFFBQVFDLFFBQVE7QUFDcEIsSUFBSUMsTUFBTUQsUUFBUTtBQUVsQkUsT0FBT0MsT0FBTyxHQUFHQztBQUVqQkEsU0FBU0wsS0FBSyxHQUFHQTtBQUNqQkssU0FBU0gsR0FBRyxHQUFHQTtBQUVmLFNBQVNHLFNBQVNDLElBQUk7SUFDcEIsT0FBTztRQUFDTixPQUFPQSxNQUFNTTtRQUFPSixLQUFLQSxJQUFJSTtJQUFLO0FBQzVDO0FBRUEsU0FBU0wsUUFBUU0sSUFBSTtJQUNuQkMsTUFBTUMsV0FBVyxHQUFHRjtJQUVwQixPQUFPQztJQUVQLFNBQVNBLE1BQU1GLElBQUk7UUFDakIsSUFBSUUsUUFBUSxRQUFTRixLQUFLRCxRQUFRLElBQUlDLEtBQUtELFFBQVEsQ0FBQ0UsS0FBSyxJQUFLLENBQUM7UUFFL0QsT0FBTztZQUNMRyxNQUFNRixNQUFNRSxJQUFJLElBQUk7WUFDcEJDLFFBQVFILE1BQU1HLE1BQU0sSUFBSTtZQUN4QkMsUUFBUUMsTUFBTUwsTUFBTUksTUFBTSxJQUFJLE9BQU9KLE1BQU1JLE1BQU07UUFDbkQ7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtcG9zaXRpb24vaW5kZXguanM/N2RiZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHN0YXJ0ID0gZmFjdG9yeSgnc3RhcnQnKVxudmFyIGVuZCA9IGZhY3RvcnkoJ2VuZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25cblxucG9zaXRpb24uc3RhcnQgPSBzdGFydFxucG9zaXRpb24uZW5kID0gZW5kXG5cbmZ1bmN0aW9uIHBvc2l0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIHtzdGFydDogc3RhcnQobm9kZSksIGVuZDogZW5kKG5vZGUpfVxufVxuXG5mdW5jdGlvbiBmYWN0b3J5KHR5cGUpIHtcbiAgcG9pbnQuZGlzcGxheU5hbWUgPSB0eXBlXG5cbiAgcmV0dXJuIHBvaW50XG5cbiAgZnVuY3Rpb24gcG9pbnQobm9kZSkge1xuICAgIHZhciBwb2ludCA9IChub2RlICYmIG5vZGUucG9zaXRpb24gJiYgbm9kZS5wb3NpdGlvblt0eXBlXSkgfHwge31cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBwb2ludC5saW5lIHx8IG51bGwsXG4gICAgICBjb2x1bW46IHBvaW50LmNvbHVtbiB8fCBudWxsLFxuICAgICAgb2Zmc2V0OiBpc05hTihwb2ludC5vZmZzZXQpID8gbnVsbCA6IHBvaW50Lm9mZnNldFxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInN0YXJ0IiwiZmFjdG9yeSIsImVuZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwb3NpdGlvbiIsIm5vZGUiLCJ0eXBlIiwicG9pbnQiLCJkaXNwbGF5TmFtZSIsImxpbmUiLCJjb2x1bW4iLCJvZmZzZXQiLCJpc05hTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-position/index.js\n");

/***/ })

};
;