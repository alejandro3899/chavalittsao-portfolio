exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 36518:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 80018:
/***/ (() => {



/***/ }),

/***/ 18726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, theme = "base", size = "md", ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ref: ref,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("flex items-center justify-center", {
            "bg-base-purple text-neutral": theme === "primary",
            "bg-black text-white": theme === "base"
        }, "leading-tight -tracking-[0.24px] uppercase", {
            "px-4 py-4": size === "sm",
            "px-8 py-4": size === "md",
            "px-8 py-6": size === "lg"
        }, "transition-all disabled:cursor-not-allowed", {
            "focus-visible:outline-base-purple hover:bg-base-purple/90 disabled:bg-base-purple/50 disabled:hover:bg-base-purple/50": theme === "primary",
            "focus-visible:outline-black hover:bg-black/90 disabled:bg-black/50 disabled:hover:bg-black/50": theme === "base"
        }, className),
        ...props
    });
});
Button.displayName = "Button";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 5094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/utils/slateToHtml.ts
var slateToHtml = __webpack_require__(2582);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(10566);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(18726);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-2.js
var loader_2 = __webpack_require__(80087);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/JoinMovementForm.tsx





function JoinMovementForm({ formBlocks }) {
    const [loading, setLoading] = (0,react_.useState)(false);
    const [success, setSuccess] = (0,react_.useState)(false);
    const [error, setError] = (0,react_.useState)(null);
    const [email, setEmail] = (0,react_.useState)("");
    const { form } = formBlocks?.[0];
    const { id: formId, confirmationMessage, submitButtonLabel, fields } = form;
    const mailField = fields?.[0];
    const mailFieldPlaceholder = mailField?.label ?? "EMAIL";
    async function subscribeToKlaviyo() {
        try {
            const formData = {
                email
            };
            await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error("Klaviyo Subscription Error:", error.message);
            throw new Error("Failed to subscribe to Klaviyo");
        }
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            setError(null);
            setLoading(true);
            const formData = [
                {
                    field: "email",
                    value: email
                }
            ];
            await subscribeToKlaviyo();
            const res = await fetch(`${"https://p01--payload--fn4j8drm7bnv.code.run"}/api/form-submissions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    form: formId,
                    submissionData: formData
                })
            });
            const result = await res.json();
            if (res.ok) {
                setEmail("");
                setSuccess(true);
                setTimeout(()=>setSuccess(false), 4000);
            } else {
                setError(result?.message ?? "Something went wrong");
            }
        } catch (err) {
            console.error("Form Submission Error:", err.message);
            setError(err?.message ?? "Something went wrong");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: "flex flex-col gap-2",
            onSubmit: handleFormSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-[42px] flex items-stretch gap-1.5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "email",
                            value: email,
                            placeholder: mailFieldPlaceholder,
                            className: "w-full flex items-center justify-center bg-transparent text-xs border border-black/50 py-3 px-3 rounded focus:outline-none focus:border-black",
                            required: true,
                            onChange: (e)=>setEmail(e.target.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            type: "submit",
                            className: "min-w-[106px] font-medium text-[10px] leading-none rounded",
                            disabled: loading,
                            children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(loader_2/* default */.Z, {
                                size: 14,
                                className: "animate-spin"
                            }) : submitButtonLabel
                        })
                    ]
                }),
                error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-sm",
                    children: error
                }),
                success && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "[&>*]:text-[.75rem] sm:[&>*]:text-sm",
                    dangerouslySetInnerHTML: (0,slateToHtml/* default */.Z)(confirmationMessage, slateToHtml/* richTextConfig */.d)
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Footer({ footerData, socialsData }) {
    const { footerLogo, joinTheMovement: { heading, text, form }, footerLinks, contact } = footerData;
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full pt-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container w-full flex flex-col",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full bg-lilac flex flex-col lg:flex-row items-stretch justify-between shadow-sm rounded-lg px-8 sm:px-16 py-20 gap-20 lg:gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "max-w-lg w-full flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "h-full max-w-[410px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "text-base-purple text-3xl mb-1",
                                            children: heading
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "richtext [&>*]:text-sm sm:[&>*]:text-base leading-snug",
                                            dangerouslySetInnerHTML: (0,slateToHtml/* default */.Z)(text, slateToHtml/* richTextConfig */.d)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(JoinMovementForm, {
                                    formBlocks: form
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-fit",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "h-full flex flex-col justify-between gap-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "flex flex-col",
                                            children: (contact ?? []).map((entry, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "text-base leading-[1.4]",
                                                    children: entry.content
                                                }, i))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "lg:h-[60px] lg:min-h-[60px] flex items-center gap-4",
                                        children: (socialsData?.socialMediaLinks ?? []).map(({ link, logo, hide }, i)=>!hide && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: link,
                                                className: "w-6 py-2 flex items-center justify-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: logo?.imagekit?.url,
                                                    alt: logo?.altText,
                                                    className: "w-max object-contain"
                                                })
                                            }, i))
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "py-8 flex justify-between items-center gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex flex-wrap sm:items-center gap-4 sm:gap-10",
                            children: (footerLinks ?? []).map(({ label, url, hide }, i)=>{
                                return !hide && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: (0,clsx/* default */.Z)("text-sm uppercase leading-none text-royal-purple", "hover:text-royal-purple transition-all"),
                                        href: url,
                                        children: label
                                    })
                                }, i);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "min-w-fit text-sm uppercase",
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }),
                            children: footerLogo
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 49087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10566);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



const ImageKit = function({ image, width, height, alt, className, ...props }) {
    return image && image.imagekit?.url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(className),
        src: width && height ? `${image.imagekit?.url}?tr=w-${width * 2},h-${height * 2},c-at_max` : image.imagekit?.url,
        alt: alt ?? image.altText,
        width: width,
        height: height,
        ...props
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageKit);


/***/ }),

/***/ 6473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/ImageKit.tsx
var ImageKit = __webpack_require__(49087);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(10566);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Logo.tsx




function Logo({ text, theme = "default", siteBranding, linkProps }) {
    siteBranding = siteBranding;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            className: (0,clsx/* default */.Z)("font-sans text-xl", theme === "light" ? "text-white" : "text-royal-purple", "transition-[color]"),
            ...linkProps ?? {},
            children: siteBranding ? /*#__PURE__*/ jsx_runtime_.jsx(ImageKit/* default */.Z, {
                image: siteBranding,
                alt: siteBranding?.altText,
                height: siteBranding?.height ?? 20,
                width: siteBranding?.width ?? 152
            }) : text
        })
    });
}

;// CONCATENATED MODULE: ./src/utils/variants.ts
const baseTransition = {
    duration: 1.2,
    type: "spring",
    bounce: 0
};
const fadeIn = (delay = 0, duration = 0.5)=>{
    return {
        hidden: {
            opacity: 0,
            transition: {
                ...baseTransition,
                duration
            }
        },
        visible: {
            opacity: 1,
            transition: {
                ...baseTransition,
                duration,
                delay
            }
        }
    };
};
const navFadeIn = (delay = 0, duration = 0.5)=>{
    return {
        hidden: {
            opacity: 0,
            transition: {
                ...baseTransition,
                duration,
                delay
            }
        },
        visible: {
            opacity: 1,
            transition: {
                ...baseTransition,
                duration
            }
        }
    };
};
const rightLeftContainer = (delay, stagger, x = 100)=>({
        hidden: {
            opacity: 0,
            x
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: stagger ?? 0.1,
                delayChildren: delay ?? 0
            }
        }
    });
const rightLeft = (delay = 0, x = 100)=>{
    return {
        hidden: {
            opacity: 0,
            x
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ...baseTransition,
                duration: 0.5,
                delay
            }
        },
        exit: {
            opacity: 0,
            x: -15,
            transition: {
                ...baseTransition,
                duration: 0.5,
                delay
            }
        }
    };
};
const slideIn = (delay = 0)=>({
        hidden: {
            opacity: 0,
            y: "100%"
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "linear",
                y: {
                    ease: [
                        0.24,
                        0.84,
                        0.98,
                        0.98
                    ],
                    duration: 0.45
                },
                duration: 0.5,
                delay
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "linear",
                /*y: {
        ease: [0.24, 0.84, 0.98, 0.98],
        duration: 0.4,
      },*/ opacity: {
                    duration: 0.4
                },
                delay
            }
        }
    });

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var LazyMotion = __webpack_require__(36291);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs + 101 modules
var features_animation = __webpack_require__(36102);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(30569);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 22 modules
var motion_minimal = __webpack_require__(40194);
;// CONCATENATED MODULE: ./src/components/NavDropdown.tsx




function NavDropdown({ activeDropdown, setActiveDropdown }) {
    const itemsLength = activeDropdown?.items?.length ?? 0;
    return /*#__PURE__*/ jsx_runtime_.jsx(LazyMotion/* LazyMotion */.X, {
        features: features_animation/* domAnimation */.H,
        children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
            children: activeDropdown && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion_minimal.m.div, {
                variants: navFadeIn((itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3, 0.5),
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                className: "w-full hidden md:flex flex-col pt-12 pb-24 px-4 sm:px-5 z-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.p, {
                        variants: fadeIn(),
                        initial: "hidden",
                        animate: "visible",
                        exit: "hidden",
                        className: "font-medium text-sm text-base-purple uppercase leading-snug -tracking-[0.28px] mb-4",
                        children: activeDropdown.label
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex flex-col gap-3",
                        children: (activeDropdown?.items ?? []).map(({ label, url, hide, newTab }, i)=>!hide && /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.li, {
                                variants: rightLeft(i * 0.075, 25),
                                initial: "hidden",
                                animate: "visible",
                                exit: "exit",
                                className: "text-sm leading-snug -tracking-[0.28px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: url,
                                    target: newTab ? "_blank" : "_self",
                                    className: "block w-fit text-black",
                                    onClick: ()=>setActiveDropdown(null),
                                    children: label
                                })
                            }, i))
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/NavMobileDropdown.tsx




function NavMobileDropdown({ dropdownItems = [], hidden, close }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(LazyMotion/* LazyMotion */.X, {
        features: features_animation/* domAnimation */.H,
        children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
            children: !hidden && /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.ul, {
                className: "flex flex-col gap-3 pt-4 px-0",
                children: dropdownItems.map(({ label, url, hide, newTab }, i)=>!hide && /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.li, {
                        variants: rightLeft(i * 0.075, 25),
                        initial: "visible",
                        exit: "visible",
                        className: "text-sm leading-snug py-0.5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: url,
                            target: newTab ? "_blank" : "_self",
                            className: "w-fit text-royal-purple py-0.5",
                            onClick: ()=>close(),
                            children: label
                        })
                    }, i))
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(19458);
// EXTERNAL MODULE: ./node_modules/react-animate-height/dist/esm/index.js
var esm = __webpack_require__(48935);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/NavMobile.tsx









function NavMobile({ open, setOpen, navItems = [], theme = "default" }) {
    const [openItem, setOpenItem] = (0,react_.useState)(null);
    const itemsLength = navItems.length ?? 0;
    let transitionDelay = !open ? (itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3 : 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "menu",
                className: (0,clsx/* default */.Z)("relative grid place-content-center", theme === "default" || open ? "text-royal-purple focus-visible:outline-royal-purple" : "text-white focus-visible:outline-white", "py-2 z-10", "transition-all"),
                style: {
                    transition: `color 0.15s ease ${transitionDelay}s`
                },
                onClick: ()=>{
                    open && setOpenItem(null);
                    setOpen(!open);
                },
                children: open ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-sm leading-none",
                    children: "Close"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-sm leading-none",
                    children: "Menu"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LazyMotion/* LazyMotion */.X, {
                features: features_animation/* domAnimation */.H,
                children: /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                    children: open && /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                        variants: navFadeIn((itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3),
                        initial: "hidden",
                        animate: "visible",
                        exit: "hidden",
                        className: "fixed top-0 left-0 w-full h-screen min-h-[500px] flex justify-center bg-pebble py-24",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "w-full flex flex-col items-center gap-8",
                            children: navItems.map((item, i)=>{
                                const { id, label, hide } = item;
                                const isHidden = openItem !== id;
                                return !hide && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "w-full",
                                    children: item.type === "single" ? /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                                        variants: slideIn((i + 1) * 0.075),
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        className: "px-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.url,
                                            target: item.newTab ? "_blank" : "_self",
                                            className: "block text-xl text-royal-purple leading-none py-0.5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "block capitalize",
                                                children: label.toLowerCase()
                                            })
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(esm/* default */.Z, {
                                        height: !isHidden ? "auto" : 28,
                                        className: "w-full overflow-hidden",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion_minimal.m.div, {
                                            variants: slideIn((i + 1) * 0.075),
                                            initial: "hidden",
                                            animate: "visible",
                                            exit: "exit",
                                            className: "w-full flex flex-col text-royal-purple overflow-hidden py-0.5 px-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "w-full flex justify-between items-center gap-4 cursor-pointer",
                                                    onClick: ()=>setOpenItem((prev)=>prev === id ? null : id),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "text-xl capitalize leading-none",
                                                            children: label.toLowerCase()
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* default */.Z, {
                                                                size: 24,
                                                                strokeWidth: 1,
                                                                className: (0,clsx/* default */.Z)(isHidden ? "" : "rotate-180", "transition-transform duration-200")
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(NavMobileDropdown, {
                                                    hidden: isHidden,
                                                    dropdownItems: item.dropdown,
                                                    close: ()=>setOpenItem(null)
                                                })
                                            ]
                                        })
                                    })
                                }, i);
                            })
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./src/components/MainNav.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function MainNav({ theme = "default", navData, settings }) {
    const [activeDropdown, setActiveDropdown] = (0,react_.useState)(null);
    const [navMobileOpen, setNavMobileOpen] = (0,react_.useState)(false);
    const [dropdownKey, setDropdownKey] = (0,react_.useState)(null);
    const selectedLayoutSegment = (0,navigation.useSelectedLayoutSegment)();
    const active = selectedLayoutSegment?.toLowerCase();
    const isLight = theme === "light";
    const itemsLength = activeDropdown?.items?.length ?? 0;
    let transitionDelay = !activeDropdown ? (itemsLength >= 1 ? itemsLength - 1 : itemsLength) * 0.075 + 0.3 : 0;
    (0,react_.useEffect)(()=>{
        const main = document.getElementById("main");
        const handleClick = ()=>{
            setActiveDropdown(null);
        };
        main.addEventListener("click", handleClick);
        return ()=>main.removeEventListener("click", handleClick);
    }, []);
    (0,react_.useEffect)(()=>{
        activeDropdown?.label && setDropdownKey(activeDropdown.label);
    }, [
        activeDropdown
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "absolute left-0 top-0 w-full flex flex-col items-center justify-center text-white py-5 z-10",
        onClick: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (0,clsx/* default */.Z)("absolute left-0 top-0 w-full h-full hidden md:block", {
                    "bg-pebble": activeDropdown
                }, "transition-all duration-500"),
                style: {
                    transitionDelay: `${transitionDelay}s`
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative w-full max-w-[1600px] flex justify-between items-center gap-8 sm:gap-12 px-4 sm:px-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative md:flex-[0.5] flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                            siteBranding: settings.siteBranding,
                            text: "CHAVALIT TSAO",
                            theme: navMobileOpen ? "default" : theme,
                            linkProps: {
                                ...{
                                    style: {
                                        transition: `color 0.15s ease ${transitionDelay}s`
                                    }
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "hidden md:flex flex-[0.5] items-center justify-between gap-6 sm:gap-12 md:gap-16",
                        children: (navData?.mainNavigation ?? []).map((item, i)=>{
                            const { label, type, hide } = item;
                            return !hide && type === "single" ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (0,clsx/* default */.Z)("text-xs uppercase leading-snug", activeDropdown ? "text-base-purple hover:text-base-purple" : isLight ? "text-sand hover:text-sand" : "text-royal-purple hover:text-royal-purple", "transiton-all"),
                                    href: item.url,
                                    onClick: ()=>setActiveDropdown(null),
                                    children: label
                                })
                            }, i) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                tabIndex: 0,
                                onClick: ()=>{
                                    setActiveDropdown((prev)=>{
                                        return prev && prev.label === label ? null : {
                                            label,
                                            items: item.dropdown
                                        };
                                    });
                                },
                                className: (0,clsx/* default */.Z)("text-xs uppercase leading-snug", activeDropdown ? "text-base-purple hover:text-base-purple" : isLight ? "text-sand hover:text-sand" : "text-royal-purple hover:text-royal-purple", "cursor-pointer transiton-all"),
                                children: label
                            }, i);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavMobile, {
                        open: navMobileOpen,
                        setOpen: (open)=>setNavMobileOpen(open),
                        navItems: navData["mainNavigation"],
                        theme: theme
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavDropdown, {
                activeDropdown: activeDropdown,
                setActiveDropdown: (dropdown)=>{
                    setActiveDropdown(dropdown);
                }
            }, dropdownKey)
        ]
    });
}


/***/ }),

/***/ 2582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   d: () => (/* binding */ richTextConfig)
/* harmony export */ });
/* harmony import */ var domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68360);
/* harmony import */ var slate_serializers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10970);
/* harmony import */ var slate_serializers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slate_serializers__WEBPACK_IMPORTED_MODULE_1__);


const richTextConfig = {
    ...slate_serializers__WEBPACK_IMPORTED_MODULE_1__.payloadSlateToDomConfig,
    elementTransforms: {
        ...slate_serializers__WEBPACK_IMPORTED_MODULE_1__.payloadSlateToDomConfig.elementTransforms,
        upload: ({ node })=>{
            const children = [
                new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("img", {
                    src: node.value.imagekit.url + "?tr=w-1000",
                    alt: node.value.altText,
                    loading: "lazy"
                })
            ];
            if (node.value.showCaption) {
                children.push(new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("figcaption", {}, [
                    node.value.captionLink ? new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("a", {
                        target: "_blank",
                        href: node.value.captionLink
                    }, [
                        new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv(node.value.altText)
                    ]) : new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .xv(node.value.altText)
                ]));
            }
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("figure", {}, children);
        },
        video: ({ node })=>{
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("iframe", {
                src: `https://www.youtube.com/embed/${node.id}`,
                width: "853",
                height: "480",
                frameBorder: "0",
                allowFullScreen: "true",
                style: "max-width: 100%; height: auto; aspect-ratio: 16 / 9;",
                class: "richtext-video"
            });
        },
        hr: ()=>{
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("hr", {});
        },
        left: ({ children })=>{
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("p", {
                style: "text-align: left;"
            }, children);
        },
        center: ({ children })=>{
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("p", {
                style: "text-align: center;"
            }, children);
        },
        right: ({ children })=>{
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("p", {
                style: "text-align: right;"
            }, children);
        },
        "uppercase-heading": ({ children })=>{
            return new domhandler__WEBPACK_IMPORTED_MODULE_0__/* .Element */ .W_("p", {
                style: "letter-spacing: -0.14px; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; line-height: 1;"
            }, children);
        }
    }
};
const slateToHtml = (slateData, config)=>{
    const pSlateData = slateData?.map((item)=>{
        if (!item.type) {
            return {
                ...item,
                type: "p"
            };
        }
        return item;
    });
    return {
        __html: pSlateData ? (0,slate_serializers__WEBPACK_IMPORTED_MODULE_1__.slateToHtml)(pSlateData, config) : ""
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slateToHtml);


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_local_target_css_path_src_app_layout_tsx_import_arguments_src_path_fonts_GT_Alpina_Standard_Light_Trial_otf_weight_300_path_fonts_GT_Alpina_Standard_Regular_Trial_otf_weight_400_path_fonts_GT_Alpina_Standard_Medium_Trial_otf_weight_500_path_fonts_GT_Alpina_Standard_Bold_Trial_otf_weight_700_variable_font_gt_alpina_variableName_gtAlpina___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84307);
/* harmony import */ var next_font_local_target_css_path_src_app_layout_tsx_import_arguments_src_path_fonts_GT_Alpina_Standard_Light_Trial_otf_weight_300_path_fonts_GT_Alpina_Standard_Regular_Trial_otf_weight_400_path_fonts_GT_Alpina_Standard_Medium_Trial_otf_weight_500_path_fonts_GT_Alpina_Standard_Bold_Trial_otf_weight_700_variable_font_gt_alpina_variableName_gtAlpina___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_app_layout_tsx_import_arguments_src_path_fonts_GT_Alpina_Standard_Light_Trial_otf_weight_300_path_fonts_GT_Alpina_Standard_Regular_Trial_otf_weight_400_path_fonts_GT_Alpina_Standard_Medium_Trial_otf_weight_500_path_fonts_GT_Alpina_Standard_Bold_Trial_otf_weight_700_variable_font_gt_alpina_variableName_gtAlpina___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Poppins_arguments_weight_300_400_500_600_700_subsets_devanagari_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22474);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Poppins_arguments_weight_300_400_500_600_700_subsets_devanagari_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Poppins_arguments_weight_300_400_500_600_700_subsets_devanagari_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70826);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95182);






const metadata = {
    title: "Chavalit Tsao",
    description: "Chavalit Tsao"
};
async function RootLayout({ children }) {
    const { favicon } = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getGlob */ .h)("/favicon");
    const faviconUrl = favicon?.imagekit?.url;
    const settings = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getGlob */ .h)("/settings", {}, {
        next: {
            tags: [
                "settings"
            ]
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "color-scheme",
                        content: "light only"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    }),
                    faviconUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/x-icon",
                        href: faviconUrl,
                        sizes: "any"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((next_font_google_target_css_path_src_app_layout_tsx_import_Poppins_arguments_weight_300_400_500_600_700_subsets_devanagari_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_4___default().variable), (next_font_local_target_css_path_src_app_layout_tsx_import_arguments_src_path_fonts_GT_Alpina_Standard_Light_Trial_otf_weight_300_path_fonts_GT_Alpina_Standard_Regular_Trial_otf_weight_400_path_fonts_GT_Alpina_Standard_Medium_Trial_otf_weight_500_path_fonts_GT_Alpina_Standard_Bold_Trial_otf_weight_700_variable_font_gt_alpina_variableName_gtAlpina___WEBPACK_IMPORTED_MODULE_5___default().variable), "bg-sand font-sans text-royal-purple"),
                style: {
                    backgroundColor: settings.siteBackgroundColor
                },
                suppressHydrationWarning: true,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 59399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BaseLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/utils/api.ts
var api = __webpack_require__(70826);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\projects\chavalittsao\src\components\Footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Footer = (__default__);
;// CONCATENATED MODULE: ./src/components/MainNav.tsx

const MainNav_proxy = (0,module_proxy.createProxy)(String.raw`C:\projects\chavalittsao\src\components\MainNav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MainNav_esModule, $$typeof: MainNav_$$typeof } = MainNav_proxy;
const MainNav_default_ = MainNav_proxy.default;


/* harmony default export */ const MainNav = (MainNav_default_);
;// CONCATENATED MODULE: ./src/components/BaseLayout.tsx




async function BaseLayout({ children, theme = "default", altBranding }) {
    const settings = await (0,api/* getGlob */.h)("/settings", {}, {
        next: {
            tags: [
                "settings"
            ]
        }
    });
    const navData = await (0,api/* getGlob */.h)("/navigation", {}, {
        next: {
            tags: [
                "navigation"
            ]
        }
    });
    const footerData = await (0,api/* getGlob */.h)("/footer", {}, {
        next: {
            tags: [
                "footer"
            ]
        }
    });
    const socialsData = await (0,api/* getGlob */.h)("/socials", {}, {
        next: {
            tags: [
                "socials"
            ]
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainNav, {
                settings: {
                    ...settings,
                    ...altBranding ? {
                        siteBranding: altBranding
                    } : {}
                },
                theme: theme,
                navData: navData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                id: "main",
                className: "w-full min-h-screen flex flex-col items-center",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                socialsData: socialsData,
                footerData: footerData
            })
        ]
    });
}


/***/ }),

/***/ 70826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ getColl),
/* harmony export */   h: () => (/* binding */ getGlob)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30784);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);

function apiFetch(url, options = {}) {
    const defaultOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const mergedOptions = {
        ...defaultOptions,
        ...options,
        next: {
            revalidate: 30,
            ...options.next
        }
    };
    return fetch(url, mergedOptions).then((res)=>{
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Error fetching from Payload API: ${res.statusText} (${res.status})`);
    });
}
async function getColl(endpoint, query, fetchOptions) {
    const stringifiedQuery = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
        limit: 1000,
        ...query
    }, {
        addQueryPrefix: true
    });
    const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api${endpoint}${stringifiedQuery}`;
    const data = await apiFetch(url, fetchOptions ?? {});
    return data;
}
async function getGlob(endpoint, query, fetchOptions) {
    const stringifiedQuery = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
        limit: 1000,
        ...query
    }, {
        addQueryPrefix: true
    });
    const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals${endpoint}${stringifiedQuery}`;
    const data = await apiFetch(url, fetchOptions ?? {});
    return data;
}


/***/ }),

/***/ 70728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ baseMetadata)
});

;// CONCATENATED MODULE: ./src/utils/index.ts
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.chavalittsao.com";

// EXTERNAL MODULE: ./src/utils/api.ts
var api = __webpack_require__(70826);
;// CONCATENATED MODULE: ./src/utils/baseMetadata.ts


async function baseMetadata({ title, description, slug, image }) {
    const { siteTitle, siteDescription } = await (0,api/* getGlob */.h)("/settings", {}, {
        next: {
            tags: [
                "settings"
            ]
        }
    });
    const pageTitle = title || siteTitle || "Chavalit Tsao";
    const pageDescription = description || siteDescription || "Chavalit Tsao";
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            siteName: siteTitle || "Chavalit Tsao",
            type: "website",
            title: pageTitle,
            description: pageDescription,
            ...slug !== undefined && {
                slug: `${appUrl}/${slug ?? ""}`
            },
            ...image && {
                images: [
                    {
                        url: image
                    }
                ]
            }
        }
    };
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;