"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/page",{

/***/ "(app-pages-browser)/./src/app/users/page.tsx":
/*!********************************!*\
  !*** ./src/app/users/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _refinedev_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @refinedev/core */ \"(app-pages-browser)/./node_modules/@refinedev/core/dist/index.mjs\");\n/* harmony import */ var _refinedev_mui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @refinedev/mui */ \"(app-pages-browser)/./node_modules/@refinedev/mui/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./src/app/users/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction UserList() {\n    var _dataGridProps_rows;\n    _s();\n    const [paginationModel, setPaginationModel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        pageSize: 5,\n        page: 0\n    });\n    const { dataGridProps, setP } = (0,_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.useDataGrid)({\n        syncWithLocation: true\n    });\n    var _dataGridProps_rows_map_filter;\n    const { data: userData, isLoading: userIsLoading } = (0,_refinedev_core__WEBPACK_IMPORTED_MODULE_4__.useMany)({\n        resource: \"users\",\n        ids: (_dataGridProps_rows_map_filter = dataGridProps === null || dataGridProps === void 0 ? void 0 : (_dataGridProps_rows = dataGridProps.rows) === null || _dataGridProps_rows === void 0 ? void 0 : _dataGridProps_rows.map((item)=>{\n            var _item_category;\n            return item === null || item === void 0 ? void 0 : (_item_category = item.category) === null || _item_category === void 0 ? void 0 : _item_category.id;\n        }).filter(Boolean)) !== null && _dataGridProps_rows_map_filter !== void 0 ? _dataGridProps_rows_map_filter : [],\n        queryOptions: {\n            enabled: !!(dataGridProps === null || dataGridProps === void 0 ? void 0 : dataGridProps.rows)\n        }\n    });\n    const columns = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>[\n            {\n                field: \"seq\",\n                headerName: \"ID\",\n                minWidth: 50,\n                renderCell: (params)=>params.api.getAllRowIds().indexOf(params.id) + 1\n            },\n            {\n                field: \"_id\",\n                headerName: \"MongoDB ID\",\n                minWidth: 250\n            },\n            {\n                field: \"first_name\",\n                flex: 1,\n                headerName: \"First Name\",\n                minWidth: 100,\n                sortable: false\n            },\n            {\n                field: \"last_name\",\n                flex: 1,\n                headerName: \"Last Name\",\n                minWidth: 100,\n                sortable: false\n            },\n            {\n                field: \"email\",\n                flex: 1,\n                headerName: \"Email\",\n                minWidth: 250,\n                sortable: false\n            },\n            {\n                field: \"profile_pic\",\n                flex: 1,\n                headerName: \"Profile Picture\",\n                minWidth: 100,\n                align: \"center\",\n                renderCell: function render(param) {\n                    let { row } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        alt: \"profile picture\",\n                        width: 50,\n                        height: 50,\n                        style: {\n                            borderRadius: \"50%\"\n                        },\n                        src: row.profile_pic\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this);\n                }\n            },\n            {\n                field: \"actions\",\n                headerName: \"Actions\",\n                sortable: false,\n                renderCell: function render(param) {\n                    let { row } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.EditButton, {\n                                hideText: true,\n                                recordItemId: row._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.ShowButton, {\n                                hideText: true,\n                                recordItemId: row._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.DeleteButton, {\n                                hideText: true,\n                                recordItemId: row._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true);\n                },\n                align: \"center\",\n                headerAlign: \"center\",\n                minWidth: 80\n            }\n        ], []);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        setPagination({\n            current: paginationModel.page + 1,\n            pageSize: paginationModel.pageSize\n        });\n    }, [\n        paginationModel,\n        setPagination\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.List, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid, {\n            ...dataGridProps,\n            pagination: true,\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            paginationMode: \"server\",\n            paginationModel: paginationModel,\n            onPaginationModelChange: setPaginationModel,\n            pageSizeOptions: [\n                5,\n                10,\n                20\n            ],\n            columns: columns,\n            autoHeight: true,\n            getRowId: (row)=>row._id,\n            getRowClassName: ()=>(_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().rowSpacing)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n            lineNumber: 120,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(UserList, \"/L+8aO964BR0+cVwZg47OPcjttg=\", false, function() {\n    return [\n        _refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.useDataGrid,\n        _refinedev_core__WEBPACK_IMPORTED_MODULE_4__.useMany\n    ];\n});\n_c = UserList;\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlcnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ2Q7QUFPbEI7QUFDRTtBQUNlO0FBQ1Y7QUFFaEIsU0FBU1U7UUFVcEJDOztJQVRGLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR04scURBQWMsQ0FBQztRQUFFUSxVQUFVO1FBQUdDLE1BQU07SUFBRTtJQUVwRixNQUFNLEVBQUVMLGFBQWEsRUFBQ00sSUFBSSxFQUFFLEdBQUdYLDJEQUFXQSxDQUFDO1FBQ3pDWSxrQkFBa0I7SUFDcEI7UUFLRVA7SUFIRixNQUFNLEVBQUVRLE1BQU1DLFFBQVEsRUFBRUMsV0FBV0MsYUFBYSxFQUFFLEdBQUdyQix3REFBT0EsQ0FBQztRQUMzRHNCLFVBQVU7UUFDVkMsS0FDQWIsQ0FBQUEsaUNBQUFBLDBCQUFBQSxxQ0FBQUEsc0JBQUFBLGNBQWVjLElBQUksY0FBbkJkLDBDQUFBQSxvQkFDRWUsR0FBRyxDQUFDLENBQUNDO2dCQUFjQTttQkFBQUEsaUJBQUFBLDRCQUFBQSxpQkFBQUEsS0FBTUMsUUFBUSxjQUFkRCxxQ0FBQUEsZUFBZ0JFLEVBQUU7V0FDdENDLE1BQU0sQ0FBQ0Msc0JBRlJwQiw0Q0FBQUEsaUNBRW9CLEVBQUU7UUFFdEJxQixjQUFjO1lBQ1pDLFNBQVMsQ0FBQyxFQUFDdEIsMEJBQUFBLG9DQUFBQSxjQUFlYyxJQUFJO1FBQ2hDO0lBQ0Y7SUFFQSxNQUFNUyxVQUFVM0Isb0RBQWEsQ0FDM0IsSUFBTTtZQUNKO2dCQUNFNkIsT0FBTztnQkFDUEMsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVkMsWUFBWSxDQUFDQyxTQUFXQSxPQUFPQyxHQUFHLENBQUNDLFlBQVksR0FBR0MsT0FBTyxDQUFDSCxPQUFPWCxFQUFFLElBQUk7WUFDekU7WUFDQTtnQkFDRU8sT0FBTztnQkFDUEMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VGLE9BQU87Z0JBQ1BRLE1BQU07Z0JBQ05QLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZPLFVBQVU7WUFDWjtZQUNBO2dCQUNFVCxPQUFPO2dCQUNQUSxNQUFNO2dCQUNOUCxZQUFZO2dCQUNaQyxVQUFVO2dCQUNWTyxVQUFVO1lBRVo7WUFDQTtnQkFDRVQsT0FBTztnQkFDUFEsTUFBTTtnQkFDTlAsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVk8sVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VULE9BQU87Z0JBQ1BRLE1BQU07Z0JBQ05QLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZRLE9BQU87Z0JBQ1BQLFlBQVksU0FBU1EsT0FBTyxLQUFPO3dCQUFQLEVBQUVDLEdBQUcsRUFBRSxHQUFQO29CQUMxQixxQkFDRSw4REFBQ3ZDLGtEQUFLQTt3QkFDSndDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLE9BQU87NEJBQUVDLGNBQWM7d0JBQUs7d0JBQzVCQyxLQUFLTixJQUFJTyxXQUFXOzs7Ozs7Z0JBRzFCO1lBQ0Y7WUFDQTtnQkFDRW5CLE9BQU87Z0JBQ1BDLFlBQVk7Z0JBQ1pRLFVBQVU7Z0JBQ1ZOLFlBQVksU0FBU1EsT0FBTyxLQUFPO3dCQUFQLEVBQUVDLEdBQUcsRUFBRSxHQUFQO29CQUUxQixxQkFDRTs7MENBQ0UsOERBQUM3QyxzREFBVUE7Z0NBQUNxRCxRQUFRO2dDQUFDQyxjQUFjVCxJQUFJVSxHQUFHOzs7Ozs7MENBQzFDLDhEQUFDckQsc0RBQVVBO2dDQUFDbUQsUUFBUTtnQ0FBQ0MsY0FBY1QsSUFBSVUsR0FBRzs7Ozs7OzBDQUMxQyw4REFBQ3hELHdEQUFZQTtnQ0FBQ3NELFFBQVE7Z0NBQUNDLGNBQWNULElBQUlVLEdBQUc7Ozs7Ozs7O2dCQUdsRDtnQkFDQVosT0FBTztnQkFDUGEsYUFBYTtnQkFDYnJCLFVBQVU7WUFDWjtTQUNELEVBQ0QsRUFBRTtJQUlKL0Isc0RBQWUsQ0FBQztRQUNkc0QsY0FBYztZQUNaQyxTQUFTbEQsZ0JBQWdCSSxJQUFJLEdBQUc7WUFDaENELFVBQVVILGdCQUFnQkcsUUFBUTtRQUNwQztJQUNGLEdBQUc7UUFBQ0g7UUFBaUJpRDtLQUFjO0lBRW5DLHFCQUNFLDhEQUFDekQsZ0RBQUlBO2tCQUNILDRFQUFDSixzREFBUUE7WUFDTixHQUFHVyxhQUFhO1lBQ2pCb0QsVUFBVTtZQUNWQyxjQUFjO2dCQUNaRCxZQUFZO29CQUNWbkQsaUJBQWlCO3dCQUFDSSxNQUFNO3dCQUFHRCxVQUFVO29CQUFDO2dCQUN4QztZQUNGO1lBQ0FrRCxnQkFBZTtZQUNmckQsaUJBQWlCQTtZQUNqQnNELHlCQUF5QnJEO1lBQ3pCc0QsaUJBQWlCO2dCQUFDO2dCQUFFO2dCQUFHO2FBQUc7WUFDMUJqQyxTQUFTQTtZQUNUa0MsVUFBVTtZQUNWQyxVQUFVLENBQUNyQixNQUFRQSxJQUFJVSxHQUFHO1lBQzFCWSxpQkFBaUIsSUFBTTlELHNFQUFpQjs7Ozs7Ozs7Ozs7QUFLaEQ7R0E1SHdCRTs7UUFHU0osdURBQVdBO1FBSVdMLG9EQUFPQTs7O0tBUHRDUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VzZXJzL3BhZ2UudHN4PzRhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWRcIjtcbmltcG9ydCB7IHVzZU1hbnkgfSBmcm9tIFwiQHJlZmluZWRldi9jb3JlXCI7XG5pbXBvcnQge1xuICBEZWxldGVCdXR0b24sXG4gIEVkaXRCdXR0b24sXG4gIExpc3QsXG4gIFNob3dCdXR0b24sXG4gIHVzZURhdGFHcmlkLFxufSBmcm9tIFwiQHJlZmluZWRldi9tdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7IFxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJMaXN0KCkge1xuICBjb25zdCBbcGFnaW5hdGlvbk1vZGVsLCBzZXRQYWdpbmF0aW9uTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoeyBwYWdlU2l6ZTogNSwgcGFnZTogMCB9KTtcblxuICBjb25zdCB7IGRhdGFHcmlkUHJvcHMsc2V0UCB9ID0gdXNlRGF0YUdyaWQoe1xuICAgIHN5bmNXaXRoTG9jYXRpb246IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YTogdXNlckRhdGEsIGlzTG9hZGluZzogdXNlcklzTG9hZGluZyB9ID0gdXNlTWFueSh7XG4gICAgcmVzb3VyY2U6IFwidXNlcnNcIixcbiAgICBpZHM6XG4gICAgZGF0YUdyaWRQcm9wcz8ucm93c1xuICAgID8ubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0/LmNhdGVnb3J5Py5pZClcbiAgICAuZmlsdGVyKEJvb2xlYW4pID8/IFtdLFxuICAgIFxuICAgIHF1ZXJ5T3B0aW9uczogeyAgICAgIFxuICAgICAgZW5hYmxlZDogISFkYXRhR3JpZFByb3BzPy5yb3dzLFxuICAgIH0sXG4gIH0pO1xuICBcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW88R3JpZENvbERlZltdPihcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiBcInNlcVwiLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIklEXCIsXG4gICAgICAgIG1pbldpZHRoOiA1MCxcbiAgICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gcGFyYW1zLmFwaS5nZXRBbGxSb3dJZHMoKS5pbmRleE9mKHBhcmFtcy5pZCkgKyAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiX2lkXCIsXG4gICAgICAgIGhlYWRlck5hbWU6IFwiTW9uZ29EQiBJRFwiLFxuICAgICAgICBtaW5XaWR0aDogMjUwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiZmlyc3RfbmFtZVwiLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIkZpcnN0IE5hbWVcIixcbiAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwibGFzdF9uYW1lXCIsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGhlYWRlck5hbWU6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcblxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiZW1haWxcIixcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgaGVhZGVyTmFtZTogXCJFbWFpbFwiLFxuICAgICAgICBtaW5XaWR0aDogMjUwLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaWVsZDogXCJwcm9maWxlX3BpY1wiLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIlByb2ZpbGUgUGljdHVyZVwiLFxuICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyKHsgcm93IH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGFsdD1cInByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX1cbiAgICAgICAgICAgICAgc3JjPXtyb3cucHJvZmlsZV9waWN9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiBcImFjdGlvbnNcIixcbiAgICAgICAgaGVhZGVyTmFtZTogXCJBY3Rpb25zXCIsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyKHsgcm93IH0pIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxFZGl0QnV0dG9uIGhpZGVUZXh0IHJlY29yZEl0ZW1JZD17cm93Ll9pZH0gLz5cbiAgICAgICAgICAgICAgPFNob3dCdXR0b24gaGlkZVRleHQgcmVjb3JkSXRlbUlkPXtyb3cuX2lkfSAvPlxuICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIGhpZGVUZXh0IHJlY29yZEl0ZW1JZD17cm93Ll9pZH0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgbWluV2lkdGg6IDgwLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG4gIFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnaW5hdGlvbih7XG4gICAgICBjdXJyZW50OiBwYWdpbmF0aW9uTW9kZWwucGFnZSArIDEsXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbk1vZGVsLnBhZ2VTaXplLFxuICAgIH0pO1xuICB9LCBbcGFnaW5hdGlvbk1vZGVsLCBzZXRQYWdpbmF0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIDxEYXRhR3JpZFxuICAgICAgICB7Li4uZGF0YUdyaWRQcm9wc30gXG4gICAgICAgIHBhZ2luYXRpb25cbiAgICAgICAgaW5pdGlhbFN0YXRlPXt7XG4gICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGVsOiB7cGFnZTogMCwgcGFnZVNpemU6IDV9XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXG4gICAgICAgIHBhZ2luYXRpb25Nb2RlbD17cGFnaW5hdGlvbk1vZGVsfVxuICAgICAgICBvblBhZ2luYXRpb25Nb2RlbENoYW5nZT17c2V0UGFnaW5hdGlvbk1vZGVsfVxuICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s1LDEwLDIwXX1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc30gXG4gICAgICAgIGF1dG9IZWlnaHRcbiAgICAgICAgZ2V0Um93SWQ9eyhyb3cpID0+IHJvdy5faWR9IFxuICAgICAgICBnZXRSb3dDbGFzc05hbWU9eygpID0+IHN0eWxlcy5yb3dTcGFjaW5nfSAvLyBBcHBseSByb3cgc3BhY2luZyBjbGFzc1xuXG4gICAgICAgIC8+XG4gICAgPC9MaXN0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkRhdGFHcmlkIiwidXNlTWFueSIsIkRlbGV0ZUJ1dHRvbiIsIkVkaXRCdXR0b24iLCJMaXN0IiwiU2hvd0J1dHRvbiIsInVzZURhdGFHcmlkIiwiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsIlVzZXJMaXN0IiwiZGF0YUdyaWRQcm9wcyIsInBhZ2luYXRpb25Nb2RlbCIsInNldFBhZ2luYXRpb25Nb2RlbCIsInVzZVN0YXRlIiwicGFnZVNpemUiLCJwYWdlIiwic2V0UCIsInN5bmNXaXRoTG9jYXRpb24iLCJkYXRhIiwidXNlckRhdGEiLCJpc0xvYWRpbmciLCJ1c2VySXNMb2FkaW5nIiwicmVzb3VyY2UiLCJpZHMiLCJyb3dzIiwibWFwIiwiaXRlbSIsImNhdGVnb3J5IiwiaWQiLCJmaWx0ZXIiLCJCb29sZWFuIiwicXVlcnlPcHRpb25zIiwiZW5hYmxlZCIsImNvbHVtbnMiLCJ1c2VNZW1vIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwibWluV2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiYXBpIiwiZ2V0QWxsUm93SWRzIiwiaW5kZXhPZiIsImZsZXgiLCJzb3J0YWJsZSIsImFsaWduIiwicmVuZGVyIiwicm93IiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsInNyYyIsInByb2ZpbGVfcGljIiwiaGlkZVRleHQiLCJyZWNvcmRJdGVtSWQiLCJfaWQiLCJoZWFkZXJBbGlnbiIsInVzZUVmZmVjdCIsInNldFBhZ2luYXRpb24iLCJjdXJyZW50IiwicGFnaW5hdGlvbiIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb25Nb2RlIiwib25QYWdpbmF0aW9uTW9kZWxDaGFuZ2UiLCJwYWdlU2l6ZU9wdGlvbnMiLCJhdXRvSGVpZ2h0IiwiZ2V0Um93SWQiLCJnZXRSb3dDbGFzc05hbWUiLCJyb3dTcGFjaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/users/page.tsx\n"));

/***/ })

});