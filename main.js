/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sideBar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sideBar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Round Butterfly.ttf */ \"./src/fonts/Round Butterfly.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'titleFont';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n*{\n    color: black;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n}\n\n.main-title{\n    font-family: 'titleFont';\n    font-size: 5rem;\n    color: white;\n    padding-left: 50px;\n}\n\n#hamBurgerIcon{\n    font-size: 48px;\n    color: white;\n    visibility: hidden;\n    border: none;\n    background: none;\n}\n\n.headerContainer{\n    display: flex;\n    width: 100%;\n    background-color: #333333;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sideBarContainer{\n    display: flex;\n    flex-direction: column;\n    background-color: lightgrey;\n    width: 15vw;\n    height: 80vw;\n}\n\n.nav-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 10%;\n    justify-content: space-around;\n    padding-top: 5%;\n    padding-left: 8%;\n}\n\n.inboxContainer,.todayContainer,.weekContainer,.addProjectContainer{\n    border: none;\n    background: none;\n    display: flex;\n    width:90%;\n    height: 30%;\n    border-radius: 10px;\n    align-items: center;\n    padding-left: 15px;\n}\n\n.inboxContainer:hover,.todayContainer:hover,.weekContainer:hover,.addProjectContainer:hover{\n    background-color: #CCCCCC;\n    cursor: pointer;\n}\n\n#inboxIcon,#todayIcon,#weekIcon{\n    color: black;\n    font-size: 1.2rem;\n}\n\n.inboxText,.todayText,.weekText{\n    font-size: 1.2rem;\n    padding-left: 5%;\n    color: black;\n}\n\n\n.projectContainer{\n    display: flex;\n    flex-direction: column;\n    height: 10%;\n    justify-content: center;\n    padding-top: 5%;\n    padding-left: 8%;\n}\n.projectTitle{\n    font-size: 3rem;\n    font-weight: 600;\n    padding-right: 15%;\n}\n.addProjectText{\n    font-size: 1.2rem;\n    padding-left: 5%;\n}\n\n\n\n.activePage{\n    background-color: #CCCCCC;\n}\n\n\n.contentContainer{\n    display: flex;\n}\n\n#projectNameForm{\n    height: 50px;\n    width: 245px;\n    border-radius: 5px;\n    padding-left: 10px;\n}\n\n#projectNameForm:focus{\n    outline: none;\n}\n\n.submitFormButtonContainer{\n    display: flex;\n    justify-content: space-between;\n    margin-top: 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.submitProjectNameButton,.cancelProjectNameButton{\n    font-size: 1.2rem;\n    height: 50px;\n    width: 110px;\n    border-radius:5px;\n}\n\n.submitProjectNameButton{\n    color: white;\n    background-color: #66BB6A;\n}\n\n.submitProjectNameButton:hover{\n    cursor: pointer;\n    background-color: #5a8f5d;\n}\n\n.cancelProjectNameButton{\n    color: white;\n    background-color: #FF7373;\n}\n\n.cancelProjectNameButton:hover{\n    background-color: #d45a5a;\n    cursor: pointer;\n}\n\n\n.notActive{\n    display: none;\n}\n\n@media (max-width: 650px){\n    #hamBurgerIcon{\n        font-size: 1.5rem;\n        visibility: visible;\n        padding-right: 10%;\n\n    }\n\n    .main-title{\n        font-size: 1.5rem;\n    }\n\n    .sideBarContainer{\n        display: none;\n        width: 100%;\n        height: auto;\n        align-items: center;\n    }\n    .inboxContainer,.todayContainer,.weekContainer{\n        width: 100%;\n        padding-bottom: 17px;\n        color: black;\n        font-weight: 600;\n        align-items: center;\n    }\n\n    .nav-container{\n        width: 90%;\n        height: 40%;\n        align-items: start;\n    }\n    .inboxText,.todayText,.weekText,#inboxIcon,#todayIcon,#weekIcon{\n        padding-top: 25px;\n        font-size: 1.2rem;\n        font-weight: 600;\n    }\n\n    .projectContainer{\n        display: flex;\n        height: auto;\n    }\n\n    .projectTitle{\n        font-size: 1.5rem;\n        padding-bottom: 10px;\n    }\n    \n    .addProjectContainer{\n        padding-top: 10px;\n        padding-bottom: 10px;\n        margin-bottom: 10px;\n    }\n\n    #projectNameForm{\n        height: 25px;\n        width: 300px;\n        border-radius: 5px;\n        padding-left: 10px;\n    }\n\n    .submitFormButtonContainer{\n        width: 300px;\n        margin-bottom: 20px;\n    }\n    .submitProjectNameButton,.cancelProjectNameButton{\n        font-size: 0.9rem;\n        height: 25px;\n        width: 110px;\n        border-radius:5px;\n    }\n\n    .active{\n        display: inline;\n    }\n\n    .contentContainer{\n        flex-direction: column;\n    }\n\n    \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/sideBar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/sideBar.css":
/*!********************************!*\
  !*** ./src/styles/sideBar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sideBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sideBar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/sideBar.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sideBar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sideBar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_sideBar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_sideBar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/sideBar.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sideBar */ \"./src/modules/sideBar.js\");\n/* harmony import */ var _modules_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/inbox */ \"./src/modules/inbox.js\");\n/* harmony import */ var _modules_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/today */ \"./src/modules/today.js\");\n/* harmony import */ var _modules_thisWeek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/thisWeek */ \"./src/modules/thisWeek.js\");\n\n\n\n\n\n\n(0,_modules_sideBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst inboxButton = document.querySelector('.inboxContainer');\nconst todayButton = document.querySelector('.todayContainer');\nconst weekButton = document.querySelector('.weekContainer');\n\nfunction clear () {\n    const sideBarContainer = document.querySelector('.sideBarContainer');\n    let sibling = sideBarContainer.nextElementSibling;\n    while (sibling) {\n        const nextSibling = sibling.nextElementSibling;\n        sibling.remove();\n        sibling = nextSibling;\n    }\n}\n\ninboxButton.addEventListener(\"click\", () => {\n    clear();\n    (0,_modules_inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\ntodayButton.addEventListener(\"click\", () => {\n    clear();\n    (0,_modules_today__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\nweekButton.addEventListener(\"click\",() => {\n    clear();\n    (0,_modules_thisWeek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadInboxPage = function () {\n    const contentContainer = document.querySelector('.contentContainer');\n    const title = document.createElement('h2');\n    title.textContent = 'Inbox';\n    contentContainer.appendChild(title);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInboxPage);\n\n//# sourceURL=webpack://todo-list/./src/modules/inbox.js?");

/***/ }),

/***/ "./src/modules/sideBar.js":
/*!********************************!*\
  !*** ./src/modules/sideBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_sideBar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sideBar.css */ \"./src/styles/sideBar.css\");\n\n\nconst loadSideBar = function () {\n    const body = document.querySelector('body');\n\n    const headerContainer = document.createElement('div');\n    const contentContainer = document.createElement('div');\n    contentContainer.classList.add('contentContainer');\n    const title = document.createElement('div');\n    title.textContent = 'Todo List'\n    title.classList.add('main-title');\n\n    const hamBurgerIcon = document.createElement('button');\n    hamBurgerIcon.setAttribute('id','hamBurgerIcon');\n    hamBurgerIcon.classList.add('fas','fa-bars');\n\n\n    headerContainer.appendChild(title);\n    headerContainer.appendChild(hamBurgerIcon);\n    headerContainer.classList.add('headerContainer');\n    \n\n    const sideBarContainer = document.createElement('div');\n    sideBarContainer.classList.add('sideBarContainer');\n\n    const inboxContainer = document.createElement('button');\n    inboxContainer.classList.add('inboxContainer','activePage');\n    const inboxIcon = document.createElement('i');\n    inboxIcon.classList.add('fas', 'fa-inbox');\n    inboxIcon.setAttribute('id','inboxIcon')\n    inboxContainer.appendChild(inboxIcon);\n    const inboxText = document.createElement('div');\n    inboxText.classList.add('inboxText');\n    inboxText.textContent = 'Inbox';\n    inboxContainer.appendChild(inboxText);\n\n\n    const todayContainer = document.createElement('button');\n    todayContainer.classList.add('todayContainer');\n    const todayIcon = document.createElement('i');\n    todayIcon.classList.add('fas', 'fa-calendar');\n    todayIcon.setAttribute('id','todayIcon')\n    todayContainer.appendChild(todayIcon);\n    const todayText = document.createElement('div');\n    todayText.classList.add('todayText');\n    todayText.textContent = 'Today';\n    todayContainer.appendChild(todayText);\n\n    const weekContainer = document.createElement('button');\n    weekContainer.classList.add('weekContainer');\n    const weekIcon = document.createElement('i');\n    weekIcon.classList.add('fas', 'fa-calendar-alt');\n    weekIcon.setAttribute('id','weekIcon')\n    weekContainer.appendChild(weekIcon);\n    const weekText = document.createElement('div');\n    weekText.classList.add('weekText');\n    weekText.textContent = 'This Week';\n    weekContainer.appendChild(weekText);\n\n\n    const navContainer = document.createElement('div');\n    navContainer.classList.add('nav-container');\n    navContainer.appendChild(inboxContainer);\n    navContainer.appendChild(todayContainer);\n    navContainer.appendChild(weekContainer);\n\n\n    body.appendChild(headerContainer);\n    sideBarContainer.appendChild(navContainer);\n    body.appendChild(sideBarContainer);\n\n    hamBurgerIcon.addEventListener('click', () => {\n        sideBarContainer.classList.toggle('active');    \n    })\n\n\n    const projectContainer = document.createElement('div');\n    projectContainer.classList.add('projectContainer');\n    const projectTitle = document.createElement('div');\n    projectTitle.classList.add('projectTitle');\n    projectTitle.textContent = 'Projects';\n    projectContainer.appendChild(projectTitle);\n\n    const addProjectContainer = document.createElement('button');\n    addProjectContainer.classList.add('addProjectContainer');\n    const addProjectIcon = document.createElement('i');\n    addProjectIcon.classList.add('fas','fa-plus')\n    addProjectIcon.setAttribute('id','addProjectIcon');\n    addProjectContainer.appendChild(addProjectIcon);\n    const addProjectText = document.createElement('div');\n    addProjectText.textContent = 'Add Project';\n    addProjectText.classList.add('addProjectText');\n    addProjectContainer.appendChild(addProjectText);\n    projectContainer.appendChild(addProjectContainer);\n\n    const form = document.createElement('form');\n    form.id = 'projectNameForm';\n    form.classList.add('notActive');\n    const input = document.createElement('input');\n    input.id = 'projectNameForm';\n    input.type = 'text';\n    form.appendChild(input);\n    const submitFormButtonContainer = document.createElement('div');\n    submitFormButtonContainer.classList.add('submitFormButtonContainer','notActive');\n    const submitProjectNameButton = document.createElement('button');\n    submitProjectNameButton.classList.add('submitProjectNameButton');\n    submitProjectNameButton.textContent = 'Add';\n    const cancelProjectNameButton = document.createElement('button');\n    cancelProjectNameButton.textContent = 'Cancel';\n    cancelProjectNameButton.type = 'Button';\n    cancelProjectNameButton.classList.add('cancelProjectNameButton');\n    submitFormButtonContainer.appendChild(submitProjectNameButton);\n    submitFormButtonContainer.appendChild(cancelProjectNameButton);\n    projectContainer.appendChild(form);\n    projectContainer.appendChild(submitFormButtonContainer);\n\n    sideBarContainer.appendChild(projectContainer)\n\n\n    inboxContainer.addEventListener(\"click\", () => {\n        inboxContainer.classList.add(\"activePage\")\n        todayContainer.classList.remove(\"activePage\");\n        weekContainer.classList.remove(\"activePage\");\n    })\n    \n\n    todayContainer.addEventListener(\"click\", () => {\n        todayContainer.classList.add(\"activePage\")\n        inboxContainer.classList.remove(\"activePage\");\n        weekContainer.classList.remove(\"activePage\");\n    })\n\n    weekContainer.addEventListener(\"click\", () => {\n        weekContainer.classList.add(\"activePage\")\n        todayContainer.classList.remove(\"activePage\");\n        inboxContainer.classList.remove(\"activePage\");\n    })\n\n    body.appendChild(contentContainer);\n    contentContainer.appendChild(sideBarContainer);\n\n\n    addProjectContainer.addEventListener(\"click\", () => {\n        console.log('h')\n        addProjectContainer.classList.toggle('notActive');\n        form.classList.toggle('notActive');\n        submitFormButtonContainer.classList.toggle('notActive');\n    })\n\n\n    form.addEventListener(\"click\", function (event) {\n        if (input.value.length < 1) {\n            event.preventDefault();\n        }\n    })\n\n    cancelProjectNameButton.addEventListener('click', () => {\n        form.classList.toggle('notActive');\n        submitFormButtonContainer.classList.toggle('notActive');\n        addProjectContainer.classList.toggle('notActive')\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSideBar);\n\n//# sourceURL=webpack://todo-list/./src/modules/sideBar.js?");

/***/ }),

/***/ "./src/modules/thisWeek.js":
/*!*********************************!*\
  !*** ./src/modules/thisWeek.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadWeekPage = function () {\n    const contentContainer = document.querySelector('.contentContainer');\n    const title = document.createElement('h2');\n    title.textContent = 'This Week';\n    contentContainer.appendChild(title);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWeekPage);\n\n//# sourceURL=webpack://todo-list/./src/modules/thisWeek.js?");

/***/ }),

/***/ "./src/modules/today.js":
/*!******************************!*\
  !*** ./src/modules/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadTodayPage = function () {\n    const contentContainer = document.querySelector('.contentContainer');\n    const title = document.createElement('h2');\n    title.textContent = 'Today';\n    contentContainer.appendChild(title);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTodayPage);\n\n//# sourceURL=webpack://todo-list/./src/modules/today.js?");

/***/ }),

/***/ "./src/fonts/Round Butterfly.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Round Butterfly.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f19f4a234802ba2b2c1.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Round_Butterfly.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;