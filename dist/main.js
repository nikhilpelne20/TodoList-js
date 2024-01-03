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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Dom */ \"./src/modules/Dom.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _modules_Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHome)\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.js */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\r\n\r\n\r\n\r\n\r\nclass Dom {\r\n    static loadHome() {\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Tom\"));\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Jerry\"));\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\"Jerry\", new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"sun\"));\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\"Jerry\", new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"moon\"));\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\"Jerry\", new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"stars\"));\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\"Tom\", new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"pirateKing\"))\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\"Tom\", new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"pirateHunter\"));\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(\"Tom\", new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"starBoy\"));\r\n\r\n        // if(Storage.getTodoList().contains(\"Tom\")){\r\n        //     Storage.renameProject(\"Tom\",\"Sam\")\r\n        //     return;\r\n        // }\r\n        // Storage.renameProject(\"Tom\",\"Sam\")\r\n        // Storage.deleteProject(\"Jerry\")\r\n        // Storage.deleteProject(\"Tom\")\r\n        // Storage.renameTask(\"Jerry\",\"moon\",\"Earth\")\r\n        // Storage.renameTask(\"Jerry\",\"sun\",\"nika\")\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(\"Tom\",\"starBoy\")\r\n        \r\n\r\n        Dom.loadProjects()\r\n    }\r\n\r\n    static loadProjects() {\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProjects().forEach((project) => {\r\n            Dom.createProjects(project.name)\r\n        });\r\n    }\r\n\r\n    static createProjects(projectName) {\r\n        const projectList = document.getElementById(\"project-list-btn\");\r\n        projectList.innerHTML += `<button class=\"project-nav-btn\" data-project-btn>\r\n        <span>${projectName}</span>\r\n        </button>`\r\n        Dom.initProjectBtn()\r\n    }\r\n    static initProjectBtn() {\r\n        const projectBtns = document.querySelectorAll('[data-project-btn]');\r\n        projectBtns.forEach((project) => project.addEventListener(\"click\", Dom.handleProject));\r\n        \r\n    }\r\n\r\n    static handleProject(e) {\r\n        const projectName =this.children[0].innerHTML \r\n        Dom.loadProjectContent(projectName)\r\n    }\r\n\r\n    static loadProjectContent(projectName){\r\n        const projectPreview = document.getElementById(\"project-task-list\")\r\n        projectPreview.innerHTML =`\r\n        <h1>${projectName}</h1>\r\n        <div class=\"task-list\" id=\"task-list\"></div>`\r\n        Dom.loadTasks(projectName)\r\n    }\r\n\r\n    static loadTasks(projectName){\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()\r\n        .getProject(projectName)\r\n        .getTasks()\r\n        .forEach((task)=> Dom.createTasks(task.name,task.dueDate))\r\n    }\r\n\r\n    static createTasks(name,dueDate){\r\n        const taskList = document.getElementById(\"task-list\")\r\n        taskList.innerHTML+=`\r\n        <div class=\"taskComplete\">\r\n        <div class=\"task-name\">\r\n            <p>${name}</p>\r\n        </div>\r\n        <div class=\"task-date\">\r\n           <p>${dueDate} </p>\r\n        </div>\r\n        </div>`\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n    setTasks(task){\r\n        this.tasks = task\r\n    }\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n\r\n    getTask(taskName){\r\n        return this.tasks.find((task)=> task.getName() === taskName)\r\n    }\r\n\r\n\r\n    addTask(task) {\r\n        if(this.tasks.some((existingTask)=> existingTask.getName() === task.name)) return;\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    contains(task){\r\n        return this.tasks.some((existingTask)=> existingTask.getName() === task.name)\r\n    }\r\n\r\n    deleteTask(taskName){\r\n        const task = this.tasks.find((task)=> task.getName() === taskName)\r\n        this.tasks.splice(this.tasks.indexOf(task),1)\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\r\n\r\n\r\n\r\n\r\nclass Storage {\r\n    static saveTodoList(data) {\r\n        localStorage.setItem(\"newTodoList\", JSON.stringify(data))\r\n    }\r\n\r\n    static getTodoList() {\r\n        const newTodoList = Object.assign(\r\n        new _TodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), \r\n        JSON.parse(localStorage.getItem('newTodoList')))\r\n        \r\n        newTodoList.setProjects(\r\n            newTodoList\r\n            .getProjects()\r\n            .map((project)=> (project = Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project)))\r\n        )\r\n\r\n        newTodoList\r\n        .getProjects()\r\n        .forEach((project) =>\r\n          project.setTasks(\r\n            project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), task))\r\n          )\r\n        );\r\n        return newTodoList\r\n    }\r\n\r\n    static addProject(project){\r\n        const newTodoList = Storage.getTodoList()\r\n        newTodoList.addProject(project)\r\n        Storage.saveTodoList(newTodoList)\r\n    }\r\n\r\n    static deleteProject(project){\r\n        const newTodoList = Storage.getTodoList()\r\n        newTodoList.deleteProject(project)\r\n        Storage.saveTodoList(newTodoList)\r\n    }\r\n\r\n    static addTask(projectName, taskName) {\r\n        const newTodoList = Storage.getTodoList();\r\n        newTodoList.getProject(projectName).addTask(taskName);\r\n        Storage.saveTodoList(newTodoList);\r\n    }\r\n\r\n    static deleteTask(projectName,taskName){\r\n        const newTodoList = Storage.getTodoList()\r\n        newTodoList.getProject(projectName).deleteTask(taskName)\r\n        Storage.saveTodoList(newTodoList)\r\n    }\r\n\r\n    static renameProject(projectName,newName){\r\n        const newTodoList = Storage.getTodoList()\r\n        newTodoList.getProject(projectName).setName(newName)\r\n        Storage.saveTodoList(newTodoList)\r\n    }\r\n    static renameTask(projectName,taskName,newTaskName){\r\n        const newTodoList = Storage.getTodoList()\r\n        newTodoList.getProject(projectName).getTask(taskName).setName(newTaskName)\r\n        Storage.saveTodoList(newTodoList)\r\n    }\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(name, dueDate= \"no date\") {\r\n        this.name = name;\r\n        this.dueDate = dueDate;\r\n    }\r\n    setName(name) {\r\n        this.name = name;\r\n    }\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    setDate(dueDate) {\r\n        this.dueDate = dueDate;\r\n    }\r\n    getDate() {\r\n        return this.dueDate;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\r\n\r\nclass TodoList {\r\n    constructor() {\r\n        this.projects = []\r\n    }\r\n    \r\n    setProjects(projects){\r\n        this.projects = projects\r\n    }\r\n\r\n    addProject(project){\r\n        if(this.projects.some(existingProject => existingProject.getName() === project.name)){\r\n            return;\r\n        }\r\n        this.projects.push(project)\r\n    }\r\n\r\n    contains(project){\r\n        return this.projects.some(existingProject => existingProject.getName() === project)\r\n    }\r\n\r\n    deleteProject(projectName){\r\n        const project = this.projects.find((project)=> project.getName()===projectName)\r\n        this.projects.splice(this.projects.indexOf(project),1)\r\n    }\r\n\r\n    getProject(project) {\r\n        return this.projects.find(existingProject => existingProject.getName() === project);\r\n    }    \r\n\r\n    getProjects() {\r\n        return this.projects\r\n    }\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/TodoList.js?");

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