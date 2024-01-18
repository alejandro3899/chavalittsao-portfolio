"use strict";
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 69154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ClampedText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_slateToHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2582);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97914);
/* __next_internal_client_entry_do_not_use__ default auto */ 




function ClampedText({ className = "", richContent, text, lines = 5, config, buttonClassName, ...props }) {
    const [clamped, setClamped] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [isOverflowing, setIsOverflowing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const element = document.getElementById("clamped-text-container");
        if (element) {
            setIsOverflowing(element.scrollHeight > element.clientHeight);
        }
    }, [
        richContent,
        lines
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            richContent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "clamped-text-container",
                style: {
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: clamped ? lines.toString() : "unset"
                },
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("richtext", className),
                dangerouslySetInnerHTML: (0,_utils_slateToHtml__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(richContent, config ?? _utils_slateToHtml__WEBPACK_IMPORTED_MODULE_1__/* .richTextConfig */ .d),
                ...props
            }),
            text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "clamped-text-container",
                style: {
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: clamped ? lines.toString() : "unset"
                },
                className: className,
                children: text
            }),
            isOverflowing && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LinkButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("w-fit mt-4", buttonClassName),
                onClick: ()=>setClamped(!clamped),
                children: clamped ? "more+" : "less-"
            })
        ]
    });
}


/***/ })

};
;