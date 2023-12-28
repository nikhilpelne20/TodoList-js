/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Task {\r\n    constructor(name, dueDate, description, priority) {\r\n        this.name = name;\r\n        this.dueDate = dueDate;\r\n        this.description = description;\r\n        this.complete = false;\r\n        this.priority = priority;\r\n    }\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    setName(newName) {\r\n        this.name = newName;\r\n    }\r\n    getDate() {\r\n        return this.dueDate;\r\n    }\r\n    setDate(newDueDate) {\r\n        this.dueDate = newDueDate;\r\n    }\r\n    getDescription() {\r\n        return this.description;\r\n    }\r\n    setDescription(newDescription) {\r\n        this.description = newDescription;\r\n    }\r\n    getComplete() {\r\n        return this.complete;\r\n    }\r\n    setComplete(newComplete) {\r\n        this.complete = newComplete;\r\n    }\r\n    getPriority() {\r\n        return this.priority;\r\n    }\r\n    setPriority(newPriority) {\r\n        this.priority = newPriority;\r\n    }\r\n}\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n    getProjectName() {\r\n        return this.name;\r\n    }\r\n    setProjectName(newName) {\r\n        this.name = newName;\r\n    }\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\nclass TodoList {\r\n    constructor() {\r\n        this.projects = []\r\n    }\r\n\r\n    addProject(project) {\r\n        this.projects.push(project)\r\n    }\r\n\r\n    getProjects() {\r\n        return this.projects\r\n    }\r\n}\r\n\r\n\r\nclass Storage {\r\n    static saveTodoList(data) {\r\n        localStorage.setItem(\"todoList\", JSON.stringify(data))\r\n    }\r\n\r\n    static getTodoList() {\r\n        const todoList = Object.assign(new TodoList(), \r\n        JSON.parse(localStorage.getItem('todoList')))\r\n        Storage.saveTodoList(todoList)\r\n        return todoList\r\n    }\r\n\r\n    static addProject(project){\r\n        const todoList = Storage.getTodoList()\r\n        todoList.addProject(project)\r\n        Storage.saveTodoList(todoList)\r\n    }\r\n}\r\n\r\nStorage.addProject(\"Earth\")\r\nStorage.addProject(\"Saturn\")\r\nStorage.addProject(\"Devil\")\r\nStorage.addProject(\"Santa\")\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;