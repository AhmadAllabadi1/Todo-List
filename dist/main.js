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

/***/ "./src/styles/layout.css":
/*!*******************************!*\
  !*** ./src/styles/layout.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/styles/layout.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sideBar */ \"./src/modules/sideBar.js\");\n/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/layout.css */ \"./src/styles/layout.css\");\n\n\n\n(0,_modules_sideBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/projectManager.js":
/*!***************************************!*\
  !*** ./src/modules/projectManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   getProjects: () => (/* binding */ getProjects)\n/* harmony export */ });\nclass Project {\n    constructor(name,tasks = []){\n        this.name = name;\n        this.tasks = tasks;\n    }\n}\n\nconst projects = []\n\nfunction addProject(projectName) {\n    const project = new Project(projectName);\n    projects.push(project)\n}\n\nfunction getProjects() {\n    return projects;\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/projectManager.js?");

/***/ }),

/***/ "./src/modules/sideBar.js":
/*!********************************!*\
  !*** ./src/modules/sideBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/modules/projectManager.js\");\n\n\nconst controlSideBar = function () {\n\n    const updateProjectSection = function () {\n        const projectTitle = document.querySelector('#sideBarProjectTitle');\n        const projects = (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.getProjects)();\n        const addProjectButton = document.querySelector('#addProjectButton');\n        let sibling = projectTitle.nextSibling;\n        while(sibling!=addProjectButton){\n            const nextSibling =sibling.nextSibling;\n            sibling.parentNode.removeChild(sibling);\n            sibling = nextSibling;\n        }\n        for (let i = projects.length - 1 ; i >= 0; i--) {\n            let projectElement = document.createElement('div');\n            projectElement.classList.add('projectSideBar', 'active')\n            projectElement.innerHTML = `<i class='far fa-circle bullet'></i>${projects[i].name}</div>`\n            projectTitle.insertAdjacentElement('afterend',projectElement);\n        }\n    }\n\n    const submitForm = document.querySelector('#addProjectForm');\n    const addProjectButton = document.querySelector('#addProjectButton');\n    addProjectButton.addEventListener('click', () => {\n        submitForm.classList.toggle('active')\n        addProjectButton.classList.toggle('active')\n    })\n\n    const submitProjectName = document.querySelector('#submitAddProject');\n    submitProjectName.addEventListener('click', function(event){\n        event.preventDefault();\n        const form = document.querySelector('#addProjectForm');\n        const projectName = document.querySelector('#projectNameForm').value;\n        addProjectButton.classList.toggle('active');\n        submitForm.classList.toggle('active');\n        (0,_projectManager__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectName);\n        updateProjectSection();\n        form.reset();\n    })\n\n    const cancelAddProject = document.querySelector(\"#cancelAddProject\");\n    cancelAddProject.addEventListener(\"click\", (event)=>{\n        event.preventDefault();\n        const form = document.querySelector(\"#addProjectForm\");\n        const addProjectButton = document.querySelector('#addProjectButton');\n        addProjectButton.classList.toggle(\"active\");\n        form.classList.toggle('active');\n    })\n\n    const toggleMenuButton = document.querySelector(\"#toggleButton\");\n    toggleMenuButton.addEventListener('click',()=>{\n        const sideBar = document.querySelector('#sideBar');\n        sideBar.classList.toggle(\"activeMedia\");\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controlSideBar);\n\n//# sourceURL=webpack://todo-list/./src/modules/sideBar.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;