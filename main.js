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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.js */ \"./src/modules/TodoList.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\r\n\r\n\r\n\r\n\r\nclass Dom {\r\n    static loadHome() {\r\n        // Storage.addProject(new Project(\"Tom\"));\r\n        // Storage.addProject(new Project(\"Jerry\"));\r\n        // Storage.addTask(\"Jerry\", new Task(\"sun\"));\r\n        // Storage.addTask(\"Jerry\", new Task(\"moon\"));\r\n        // Storage.addTask(\"Jerry\", new Task(\"stars\"));\r\n        // Storage.addTask(\"Tom\", new Task(\"pirateKing\"))\r\n        // Storage.addTask(\"Tom\", new Task(\"pirateHunter\"));\r\n        // Storage.addTask(\"Tom\", new Task(\"starBoy\"));\r\n\r\n        // if(Storage.getTodoList().contains(\"Tom\")){\r\n        //     Storage.renameProject(\"Tom\",\"Sam\")\r\n        //     return;\r\n        // }\r\n        // Storage.renameProject(\"Tom\",\"Sam\")\r\n        // Storage.deleteProject(\"Jerry\")\r\n        // Storage.deleteProject(\"Tom\")\r\n        // Storage.renameTask(\"Jerry\",\"moon\",\"Earth\")\r\n        // Storage.renameTask(\"Jerry\",\"sun\",\"nika\")\r\n        // Storage.deleteTask(\"Tom\",\"starBoy\")\r\n    \r\n        // Dom.loadProjects()\r\n        // Dom.openProject()\r\n        // Dom.openTask()\r\n        // Dom.loadProjects()\r\n        Dom.initAddProjectBtn()\r\n        Dom.loadProjects()\r\n        Dom.initProjectBtn()\r\n    }\r\n\r\n    static loadProjects(){\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()\r\n        .getProjects()\r\n        .forEach((project)=> Dom.createProject(project.name))\r\n\r\n        Dom.initProjectBtn()\r\n    }\r\n\r\n    static loadTasks(projectName){\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList()\r\n        .getProject(projectName)\r\n        .getTasks()\r\n        .forEach((task)=> Dom.createTasks(task.name,task.dueDate))\r\n        Dom.initAddTaskBtn()\r\n    }\r\n\r\n    static createProject(name){\r\n        const userProject = document.getElementById(\"added-project-section\")\r\n        userProject.innerHTML+=`\r\n        <button class=\"added-project-btn\" data-project-btn>\r\n                            <div class=\"project-name\" id=\"project-name\">\r\n                                <i class=\"fa-solid fa-hashtag\"></i>\r\n                                <span>${name}</span>  \r\n                            </div>\r\n                            <div class=\"project-option\">\r\n                                <i class=\"fa-regular fa-pen-to-square\"></i>\r\n                                <i class=\"fa-regular fa-trash-can\"></i>\r\n                            </div>\r\n        </button>\r\n        `\r\n        Dom.initProjectBtn()\r\n    }\r\n\r\n    static initAddProjectBtn(){\r\n        const addProjectBtn = document.querySelector('.add-project-btn');\r\n        const addProjectPopupBtn= document.querySelector('.add-btn');;\r\n        const cancelProjectPopupBtn = document.querySelector('.cancel-btn');\r\n\r\n        addProjectBtn.addEventListener('click', Dom.openPopupForm)\r\n        addProjectPopupBtn.addEventListener('click',Dom.addProject)\r\n        cancelProjectPopupBtn.addEventListener('click', Dom.closePopupForm)\r\n    }\r\n\r\n    static openPopupForm(){\r\n        const addProjectForm = document.getElementById('add-projectForm');\r\n        const addProjectBtnOverlay = document.getElementById('add-project-overlay')\r\n\r\n        addProjectForm.style.display = (addProjectForm.style.display === 'block') ? 'none' : 'block';\r\n        addProjectBtnOverlay.style.display = (addProjectBtnOverlay.style.display === 'block') ? 'none' : 'block';\r\n    }\r\n\r\n    static addProject(){\r\n        const projectInput = document.getElementById('projectName');\r\n        let projectValue = projectInput.value\r\n        if(projectValue === \"\" || _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().contains(projectValue)){\r\n            Dom.closePopupForm()\r\n            return;\r\n        }\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](projectValue))\r\n        Dom.createProject(projectValue)\r\n        Dom.closePopupForm()\r\n\r\n    }\r\n\r\n    static closePopupForm(){\r\n        const addProjectForm = document.getElementById('add-projectForm');\r\n        const addProjectBtnOverlay = document.getElementById('add-project-overlay')\r\n        addProjectForm.style.display = (addProjectForm.style.display === 'block') ? 'none' : 'block';\r\n        addProjectBtnOverlay.style.display = (addProjectBtnOverlay.style.display === 'block') ? 'none' : 'block';\r\n        const projectInput = document.getElementById('projectName').value = '';\r\n    }\r\n\r\n    static initProjectBtn(){\r\n        const inboxProjectBtn = document.getElementById('project-inbox-btn');\r\n        const todayProjectBtn = document.getElementById('project-today-btn');\r\n        const weekProjectBtn  = document.getElementById('project-week-btn');\r\n\r\n        const allProjectBtn = document.querySelectorAll('[data-project-btn]');\r\n\r\n        inboxProjectBtn.addEventListener('click', Dom.openInbox)\r\n        todayProjectBtn.addEventListener('click', Dom.openToday)\r\n        weekProjectBtn.addEventListener('click', Dom.openWeek);\r\n\r\n        allProjectBtn.forEach((projectBtn)=> \r\n        projectBtn.addEventListener('click', Dom.handleProject))\r\n    }\r\n\r\n    static openInbox(){\r\n        console.log(\"Open Inbox clicked\")\r\n    }\r\n    static openToday(){\r\n        console.log(\"Open Today clicked\")\r\n    }\r\n\r\n    static openWeek(){\r\n        console.log(\"Open Week clicked\")\r\n    }\r\n\r\n    static handleProject(e){\r\n        const projectName = this.children[0].children[1].innerText;\r\n\r\n        if(e.target.classList.contains('fa-trash-can')){\r\n            Dom.deleteProject(projectName)\r\n        }\r\n        Dom.openProject(projectName,this)\r\n    }\r\n\r\n    static openProject(projectName,button){\r\n        // console.log(\"Load Tasks\",projectName,button)\r\n        Dom.loadProjectContent(projectName)\r\n\r\n    }\r\n\r\n    static createTasks(task,dueDate){\r\n        const taskList = document.getElementById('task-list-data')\r\n        taskList.innerHTML +=`\r\n        <button class=\"project-task-name\" data-task-button>\r\n                                <div class=\"task-name\">\r\n                                    <i class=\"fa-solid fa-o\"></i>\r\n                                    <span> ${task}</span>\r\n                                </div>\r\n                                <div class=\"task-date\">\r\n                                    <span>${dueDate}</span>\r\n                                    <div class=\"task-edit-btn\">\r\n                                    <i class=\"fa-regular fa-pen-to-square\"></i>\r\n                                    <i class=\"fa-regular fa-trash-can\"></i>\r\n                                    </div>\r\n                                </div>\r\n        </button>\r\n        `\r\n    }\r\n\r\n\r\n    static loadProjectContent(projectName){\r\n\r\n        const projectContent = document.getElementById('task-list-section')\r\n        projectContent.innerHTML=`\r\n        <div class=\"project-name-head\" id=\"project-name-head\">\r\n                        <h3>${projectName}</h3>\r\n                    </div>\r\n                    <div class=\"project-tasks-list\">\r\n                        <div class=\"tasks-list-data\" id=\"task-list-data\">\r\n                        </div> \r\n                        <div class=\"add-project-task-btn\">\r\n                            <button class=\"add-task-btn\" id=\"add-task-btn\">\r\n                                <i class=\"fa-regular fa-square-plus\"></i>\r\n                                <span>AddTask</span>\r\n                            </button>\r\n                        </div>\r\n                            <div class=\"add-task-form\" id=\"taskForm\">\r\n                                <form action=\"\">\r\n                                    <label for=\"projectName\">Task Name</label>\r\n                                    <input type=\"text\" id=\"input-add-task-popup\" name=\"projectName\">\r\n                                    <div class=\"task-date-task-btn\">\r\n                                        <div class=\"task-dueDate\">\r\n                                            <label for=\"dueDate\">DueDate</label>\r\n                                            <input type=\"date\" id=\"duedate\" name=\"dueDate\">\r\n                                        </div>\r\n                                        <div class=\"task-btn\">\r\n                                            <button type=\"button\" class=\"add-taskForm-btn\" id=\"add-taskForm-btn\" >Add</button>\r\n                                            <button type=\"button\" class=\"cancel-taskForm-btn\" id=\"cancel-taskForm-btn\">Cancel</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                    </div>\r\n        `\r\n        Dom.loadTasks(projectName)\r\n        \r\n    }\r\n\r\n   \r\n\r\n\r\n    static clearProject(){\r\n        const userProject = document.getElementById(\"added-project-section\")\r\n        userProject.innerText=\"\"\r\n    }\r\n\r\n    //not working check later\r\n    static clearTasks(){\r\n        const projectContent = document.getElementById('task-list-section')\r\n        projectContent.innerText=\"\"\r\n    }\r\n\r\n    static deleteProject(projectName){\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject(projectName)\r\n        Dom.clearProject()\r\n        Dom.clearTasks()\r\n        Dom.loadProjects()\r\n    }\r\n\r\n    static initAddTaskBtn(){\r\n        const addTaskBtn = document.getElementById(\"add-task-btn\")\r\n        const addPopupTaskBtn = document.getElementById(\"add-taskForm-btn\")\r\n        const cancelPopupTaskBtn = document.getElementById(\"cancel-taskForm-btn\")\r\n        const taskButton = document.querySelectorAll(\"[data-task-button]\")\r\n        \r\n    \r\n        addTaskBtn.addEventListener('click', Dom.openTaskPopup)\r\n        addPopupTaskBtn.addEventListener('click', Dom.addProjectTask)\r\n        cancelPopupTaskBtn.addEventListener('click',Dom.closeTaskPopup)\r\n        taskButton.forEach((taskBtn)=>\r\n        taskBtn.addEventListener('click',Dom.handleTask))\r\n    }\r\n    static handleTask(e){\r\n        // console.log(e)\r\n    }\r\n\r\n    static openTaskPopup(){\r\n        const projectForm = document.getElementById('taskForm');\r\n        projectForm.style.display = (projectForm.style.display === 'block') ? 'none' : 'block';\r\n\r\n    }\r\n\r\n    static addProjectTask(){\r\n        const projectName = document.getElementById(\"project-name-head\").children[0].textContent\r\n        const addTaskInput = document.getElementById(\"input-add-task-popup\").value\r\n        const presentNot = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoList().getProject(projectName).contains(addTaskInput);\r\n        console.log(presentNot)\r\n        if(addTaskInput === \"\" || presentNot){\r\n            Dom.closeTaskPopup()\r\n            return;\r\n        }\r\n        _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(projectName, new _Task__WEBPACK_IMPORTED_MODULE_3__[\"default\"](addTaskInput));\r\n        Dom.createTasks(addTaskInput, \"no date\")\r\n        Dom.closeTaskPopup()\r\n    }\r\n\r\n    static closeTaskPopup(){\r\n        const projectForm = document.getElementById('taskForm').style.display = 'none';\r\n        const addTaskInput = document.getElementById(\"input-add-task-popup\")\r\n        addTaskInput.value=\"\"\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n    setName(name){\r\n        this.name = name\r\n    }\r\n    setTasks(task){\r\n        this.tasks = task\r\n    }\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n\r\n    getTask(taskName){\r\n        return this.tasks.find((task)=> task.getName() === taskName)\r\n    }\r\n\r\n\r\n    addTask(task) {\r\n        if(this.tasks.some((existingTask)=> existingTask.getName() === task)) return;\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    contains(task){\r\n        return this.tasks.some((existingTask)=> existingTask.getName() === task)\r\n    }\r\n\r\n    deleteTask(taskName){\r\n        const task = this.tasks.find((task)=> task.getName() === taskName)\r\n        this.tasks.splice(this.tasks.indexOf(task),1)\r\n    }\r\n}\n\n//# sourceURL=webpack://todolist/./src/modules/Project.js?");

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