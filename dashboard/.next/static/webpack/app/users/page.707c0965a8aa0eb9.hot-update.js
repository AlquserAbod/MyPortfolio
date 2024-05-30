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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _refinedev_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @refinedev/core */ \"(app-pages-browser)/./node_modules/@refinedev/core/dist/index.mjs\");\n/* harmony import */ var _refinedev_mui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @refinedev/mui */ \"(app-pages-browser)/./node_modules/@refinedev/mui/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./src/app/users/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction UserList() {\n    var _dataGridProps_rows;\n    _s();\n    const [paginationModel, setPaginationModel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        pageSize: 5,\n        page: 0\n    });\n    const { dataGridProps } = (0,_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.useDataGrid)({\n        syncWithLocation: true,\n        queryOptions: {\n            onSuccess: (data)=>{\n                console.log(data);\n            },\n            onError: error\n        },\n        pagination: {\n            current: paginationModel.page + 1,\n            pageSize: paginationModel.pageSize\n        }\n    });\n    var _dataGridProps_rows_map_filter;\n    const { data: userData, isLoading: userIsLoading } = (0,_refinedev_core__WEBPACK_IMPORTED_MODULE_4__.useMany)({\n        resource: \"users\",\n        ids: (_dataGridProps_rows_map_filter = dataGridProps === null || dataGridProps === void 0 ? void 0 : (_dataGridProps_rows = dataGridProps.rows) === null || _dataGridProps_rows === void 0 ? void 0 : _dataGridProps_rows.map((item)=>{\n            var _item_category;\n            return item === null || item === void 0 ? void 0 : (_item_category = item.category) === null || _item_category === void 0 ? void 0 : _item_category.id;\n        }).filter(Boolean)) !== null && _dataGridProps_rows_map_filter !== void 0 ? _dataGridProps_rows_map_filter : [],\n        queryOptions: {\n            enabled: !!(dataGridProps === null || dataGridProps === void 0 ? void 0 : dataGridProps.rows)\n        }\n    });\n    const columns = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>[\n            {\n                field: \"seq\",\n                headerName: \"ID\",\n                minWidth: 50,\n                renderCell: (params)=>params.api.getAllRowIds().indexOf(params.id) + 1\n            },\n            {\n                field: \"_id\",\n                headerName: \"MongoDB ID\",\n                minWidth: 250\n            },\n            {\n                field: \"first_name\",\n                flex: 1,\n                headerName: \"First Name\",\n                minWidth: 100,\n                sortable: false\n            },\n            {\n                field: \"last_name\",\n                flex: 1,\n                headerName: \"Last Name\",\n                minWidth: 100,\n                sortable: false\n            },\n            {\n                field: \"email\",\n                flex: 1,\n                headerName: \"Email\",\n                minWidth: 250,\n                sortable: false\n            },\n            {\n                field: \"profile_pic\",\n                flex: 1,\n                headerName: \"Profile Picture\",\n                minWidth: 100,\n                align: \"center\",\n                renderCell: function render(param) {\n                    let { row } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        alt: \"profile picture\",\n                        width: 50,\n                        height: 50,\n                        style: {\n                            borderRadius: \"50%\"\n                        },\n                        src: row.profile_pic\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this);\n                }\n            },\n            {\n                field: \"actions\",\n                headerName: \"Actions\",\n                sortable: false,\n                renderCell: function render(param) {\n                    let { row } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.EditButton, {\n                                hideText: true,\n                                recordItemId: row._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.ShowButton, {\n                                hideText: true,\n                                recordItemId: row._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.DeleteButton, {\n                                hideText: true,\n                                recordItemId: row._id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true);\n                },\n                align: \"center\",\n                headerAlign: \"center\",\n                minWidth: 80\n            }\n        ], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.List, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_5__.DataGrid, {\n            ...dataGridProps,\n            pagination: true,\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            paginationMode: \"server\",\n            paginationModel: paginationModel,\n            onPaginationModelChange: setPaginationModel,\n            pageSizeOptions: [\n                5,\n                10,\n                20\n            ],\n            columns: columns,\n            autoHeight: true,\n            getRowId: (row)=>row._id,\n            getRowClassName: ()=>(_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().rowSpacing)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n            lineNumber: 123,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programing\\\\MernStack\\\\MyPortfolio\\\\dashboard\\\\src\\\\app\\\\users\\\\page.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this);\n}\n_s(UserList, \"8+f7c4YNxDFj/BUTx35U/veiwas=\", false, function() {\n    return [\n        _refinedev_mui__WEBPACK_IMPORTED_MODULE_3__.useDataGrid,\n        _refinedev_core__WEBPACK_IMPORTED_MODULE_4__.useMany\n    ];\n});\n_c = UserList;\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlcnMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXdEO0FBQ2Q7QUFPbEI7QUFDRTtBQUNlO0FBQ1Y7QUFFaEIsU0FBU1U7UUFxQnBCQzs7SUFwQkYsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHTixxREFBYyxDQUFDO1FBQUVRLFVBQVU7UUFBR0MsTUFBTTtJQUFFO0lBRXBGLE1BQU0sRUFBRUwsYUFBYSxFQUFFLEdBQUdMLDJEQUFXQSxDQUFDO1FBQ3BDVyxrQkFBa0I7UUFDbEJDLGNBQWM7WUFDWkMsV0FBVyxDQUFDQztnQkFDVkMsUUFBUUMsR0FBRyxDQUFDRjtZQUVkO1lBQ0FHLFNBQVVDO1FBQ1o7UUFDQUMsWUFBWTtZQUNWQyxTQUFTZCxnQkFBZ0JJLElBQUksR0FBRztZQUNoQ0QsVUFBVUgsZ0JBQWdCRyxRQUFRO1FBQ3BDO0lBQ0Y7UUFLRUo7SUFIRixNQUFNLEVBQUVTLE1BQU1PLFFBQVEsRUFBRUMsV0FBV0MsYUFBYSxFQUFFLEdBQUc1Qix3REFBT0EsQ0FBQztRQUMzRDZCLFVBQVU7UUFDVkMsS0FDQXBCLENBQUFBLGlDQUFBQSwwQkFBQUEscUNBQUFBLHNCQUFBQSxjQUFlcUIsSUFBSSxjQUFuQnJCLDBDQUFBQSxvQkFDRXNCLEdBQUcsQ0FBQyxDQUFDQztnQkFBY0E7bUJBQUFBLGlCQUFBQSw0QkFBQUEsaUJBQUFBLEtBQU1DLFFBQVEsY0FBZEQscUNBQUFBLGVBQWdCRSxFQUFFO1dBQ3RDQyxNQUFNLENBQUNDLHNCQUZSM0IsNENBQUFBLGlDQUVvQixFQUFFO1FBRXRCTyxjQUFjO1lBQ1pxQixTQUFTLENBQUMsRUFBQzVCLDBCQUFBQSxvQ0FBQUEsY0FBZXFCLElBQUk7UUFDaEM7SUFDRjtJQUVBLE1BQU1RLFVBQVVqQyxvREFBYSxDQUMzQixJQUFNO1lBQ0o7Z0JBQ0VtQyxPQUFPO2dCQUNQQyxZQUFZO2dCQUNaQyxVQUFVO2dCQUNWQyxZQUFZLENBQUNDLFNBQVdBLE9BQU9DLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxPQUFPLENBQUNILE9BQU9WLEVBQUUsSUFBSTtZQUN6RTtZQUNBO2dCQUNFTSxPQUFPO2dCQUNQQyxZQUFZO2dCQUNaQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUYsT0FBTztnQkFDUFEsTUFBTTtnQkFDTlAsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVk8sVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VULE9BQU87Z0JBQ1BRLE1BQU07Z0JBQ05QLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZPLFVBQVU7WUFFWjtZQUNBO2dCQUNFVCxPQUFPO2dCQUNQUSxNQUFNO2dCQUNOUCxZQUFZO2dCQUNaQyxVQUFVO2dCQUNWTyxVQUFVO1lBQ1o7WUFDQTtnQkFDRVQsT0FBTztnQkFDUFEsTUFBTTtnQkFDTlAsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVlEsT0FBTztnQkFDUFAsWUFBWSxTQUFTUSxPQUFPLEtBQU87d0JBQVAsRUFBRUMsR0FBRyxFQUFFLEdBQVA7b0JBQzFCLHFCQUNFLDhEQUFDN0Msa0RBQUtBO3dCQUNKOEMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsT0FBTzs0QkFBRUMsY0FBYzt3QkFBSzt3QkFDNUJDLEtBQUtOLElBQUlPLFdBQVc7Ozs7OztnQkFHMUI7WUFDRjtZQUNBO2dCQUNFbkIsT0FBTztnQkFDUEMsWUFBWTtnQkFDWlEsVUFBVTtnQkFDVk4sWUFBWSxTQUFTUSxPQUFPLEtBQU87d0JBQVAsRUFBRUMsR0FBRyxFQUFFLEdBQVA7b0JBRTFCLHFCQUNFOzswQ0FDRSw4REFBQ25ELHNEQUFVQTtnQ0FBQzJELFFBQVE7Z0NBQUNDLGNBQWNULElBQUlVLEdBQUc7Ozs7OzswQ0FDMUMsOERBQUMzRCxzREFBVUE7Z0NBQUN5RCxRQUFRO2dDQUFDQyxjQUFjVCxJQUFJVSxHQUFHOzs7Ozs7MENBQzFDLDhEQUFDOUQsd0RBQVlBO2dDQUFDNEQsUUFBUTtnQ0FBQ0MsY0FBY1QsSUFBSVUsR0FBRzs7Ozs7Ozs7Z0JBR2xEO2dCQUNBWixPQUFPO2dCQUNQYSxhQUFhO2dCQUNickIsVUFBVTtZQUNaO1NBQ0QsRUFDRCxFQUFFO0lBR0oscUJBQ0UsOERBQUN4QyxnREFBSUE7a0JBQ0gsNEVBQUNKLHNEQUFRQTtZQUNOLEdBQUdXLGFBQWE7WUFDakJjLFVBQVU7WUFDVnlDLGNBQWM7Z0JBQ1p6QyxZQUFZO29CQUNWYixpQkFBaUI7d0JBQUNJLE1BQU07d0JBQUdELFVBQVU7b0JBQUM7Z0JBQ3hDO1lBQ0Y7WUFDQW9ELGdCQUFlO1lBQ2Z2RCxpQkFBaUJBO1lBQ2pCd0QseUJBQXlCdkQ7WUFDekJ3RCxpQkFBaUI7Z0JBQUM7Z0JBQUU7Z0JBQUc7YUFBRztZQUMxQjdCLFNBQVNBO1lBQ1Q4QixVQUFVO1lBQ1ZDLFVBQVUsQ0FBQ2pCLE1BQVFBLElBQUlVLEdBQUc7WUFDMUJRLGlCQUFpQixJQUFNaEUsc0VBQWlCOzs7Ozs7Ozs7OztBQUtoRDtHQS9Id0JFOztRQUdJSix1REFBV0E7UUFlZ0JMLG9EQUFPQTs7O0tBbEJ0Q1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91c2Vycy9wYWdlLnRzeD80YTMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5pbXBvcnQgeyB1c2VNYW55IH0gZnJvbSBcIkByZWZpbmVkZXYvY29yZVwiO1xuaW1wb3J0IHtcbiAgRGVsZXRlQnV0dG9uLFxuICBFZGl0QnV0dG9uLFxuICBMaXN0LFxuICBTaG93QnV0dG9uLFxuICB1c2VEYXRhR3JpZCxcbn0gZnJvbSBcIkByZWZpbmVkZXYvbXVpXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnOyBcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTGlzdCgpIHtcbiAgY29uc3QgW3BhZ2luYXRpb25Nb2RlbCwgc2V0UGFnaW5hdGlvbk1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlKHsgcGFnZVNpemU6IDUsIHBhZ2U6IDAgfSk7XG5cbiAgY29uc3QgeyBkYXRhR3JpZFByb3BzIH0gPSB1c2VEYXRhR3JpZCh7XG4gICAgc3luY1dpdGhMb2NhdGlvbjogdHJ1ZSxcbiAgICBxdWVyeU9wdGlvbnM6IHtcbiAgICAgIG9uU3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IChlcnJvcilcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGN1cnJlbnQ6IHBhZ2luYXRpb25Nb2RlbC5wYWdlICsgMSwgXG4gICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbk1vZGVsLnBhZ2VTaXplLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YTogdXNlckRhdGEsIGlzTG9hZGluZzogdXNlcklzTG9hZGluZyB9ID0gdXNlTWFueSh7XG4gICAgcmVzb3VyY2U6IFwidXNlcnNcIixcbiAgICBpZHM6XG4gICAgZGF0YUdyaWRQcm9wcz8ucm93c1xuICAgID8ubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0/LmNhdGVnb3J5Py5pZClcbiAgICAuZmlsdGVyKEJvb2xlYW4pID8/IFtdLFxuICAgIFxuICAgIHF1ZXJ5T3B0aW9uczogeyAgICAgIFxuICAgICAgZW5hYmxlZDogISFkYXRhR3JpZFByb3BzPy5yb3dzLFxuICAgIH0sXG4gIH0pO1xuICBcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW88R3JpZENvbERlZltdPihcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiBcInNlcVwiLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIklEXCIsXG4gICAgICAgIG1pbldpZHRoOiA1MCxcbiAgICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gcGFyYW1zLmFwaS5nZXRBbGxSb3dJZHMoKS5pbmRleE9mKHBhcmFtcy5pZCkgKyAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiX2lkXCIsXG4gICAgICAgIGhlYWRlck5hbWU6IFwiTW9uZ29EQiBJRFwiLFxuICAgICAgICBtaW5XaWR0aDogMjUwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiZmlyc3RfbmFtZVwiLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIkZpcnN0IE5hbWVcIixcbiAgICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwibGFzdF9uYW1lXCIsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGhlYWRlck5hbWU6IFwiTGFzdCBOYW1lXCIsXG4gICAgICAgIG1pbldpZHRoOiAxMDAsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcblxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IFwiZW1haWxcIixcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgaGVhZGVyTmFtZTogXCJFbWFpbFwiLFxuICAgICAgICBtaW5XaWR0aDogMjUwLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaWVsZDogXCJwcm9maWxlX3BpY1wiLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBoZWFkZXJOYW1lOiBcIlByb2ZpbGUgUGljdHVyZVwiLFxuICAgICAgICBtaW5XaWR0aDogMTAwLFxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyKHsgcm93IH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGFsdD1cInByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwifX1cbiAgICAgICAgICAgICAgc3JjPXtyb3cucHJvZmlsZV9waWN9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiBcImFjdGlvbnNcIixcbiAgICAgICAgaGVhZGVyTmFtZTogXCJBY3Rpb25zXCIsXG4gICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyKHsgcm93IH0pIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxFZGl0QnV0dG9uIGhpZGVUZXh0IHJlY29yZEl0ZW1JZD17cm93Ll9pZH0gLz5cbiAgICAgICAgICAgICAgPFNob3dCdXR0b24gaGlkZVRleHQgcmVjb3JkSXRlbUlkPXtyb3cuX2lkfSAvPlxuICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIGhpZGVUZXh0IHJlY29yZEl0ZW1JZD17cm93Ll9pZH0gLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBoZWFkZXJBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgbWluV2lkdGg6IDgwLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxMaXN0PlxuICAgICAgPERhdGFHcmlkXG4gICAgICAgIHsuLi5kYXRhR3JpZFByb3BzfSBcbiAgICAgICAgcGFnaW5hdGlvblxuICAgICAgICBpbml0aWFsU3RhdGU9e3tcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHtwYWdlOiAwLCBwYWdlU2l6ZTogNX1cbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIHBhZ2luYXRpb25Nb2RlPVwic2VydmVyXCJcbiAgICAgICAgcGFnaW5hdGlvbk1vZGVsPXtwYWdpbmF0aW9uTW9kZWx9XG4gICAgICAgIG9uUGFnaW5hdGlvbk1vZGVsQ2hhbmdlPXtzZXRQYWdpbmF0aW9uTW9kZWx9XG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzUsMTAsMjBdfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfSBcbiAgICAgICAgYXV0b0hlaWdodFxuICAgICAgICBnZXRSb3dJZD17KHJvdykgPT4gcm93Ll9pZH0gXG4gICAgICAgIGdldFJvd0NsYXNzTmFtZT17KCkgPT4gc3R5bGVzLnJvd1NwYWNpbmd9IC8vIEFwcGx5IHJvdyBzcGFjaW5nIGNsYXNzXG5cbiAgICAgICAgLz5cbiAgICA8L0xpc3Q+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJ1c2VNYW55IiwiRGVsZXRlQnV0dG9uIiwiRWRpdEJ1dHRvbiIsIkxpc3QiLCJTaG93QnV0dG9uIiwidXNlRGF0YUdyaWQiLCJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwiVXNlckxpc3QiLCJkYXRhR3JpZFByb3BzIiwicGFnaW5hdGlvbk1vZGVsIiwic2V0UGFnaW5hdGlvbk1vZGVsIiwidXNlU3RhdGUiLCJwYWdlU2l6ZSIsInBhZ2UiLCJzeW5jV2l0aExvY2F0aW9uIiwicXVlcnlPcHRpb25zIiwib25TdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkVycm9yIiwiZXJyb3IiLCJwYWdpbmF0aW9uIiwiY3VycmVudCIsInVzZXJEYXRhIiwiaXNMb2FkaW5nIiwidXNlcklzTG9hZGluZyIsInJlc291cmNlIiwiaWRzIiwicm93cyIsIm1hcCIsIml0ZW0iLCJjYXRlZ29yeSIsImlkIiwiZmlsdGVyIiwiQm9vbGVhbiIsImVuYWJsZWQiLCJjb2x1bW5zIiwidXNlTWVtbyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIm1pbldpZHRoIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsImFwaSIsImdldEFsbFJvd0lkcyIsImluZGV4T2YiLCJmbGV4Iiwic29ydGFibGUiLCJhbGlnbiIsInJlbmRlciIsInJvdyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJzcmMiLCJwcm9maWxlX3BpYyIsImhpZGVUZXh0IiwicmVjb3JkSXRlbUlkIiwiX2lkIiwiaGVhZGVyQWxpZ24iLCJpbml0aWFsU3RhdGUiLCJwYWdpbmF0aW9uTW9kZSIsIm9uUGFnaW5hdGlvbk1vZGVsQ2hhbmdlIiwicGFnZVNpemVPcHRpb25zIiwiYXV0b0hlaWdodCIsImdldFJvd0lkIiwiZ2V0Um93Q2xhc3NOYW1lIiwicm93U3BhY2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/users/page.tsx\n"));

/***/ })

});