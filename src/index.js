class Task {
    constructor(name, dueDate, description, priority) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.complete = false;
        this.priority = priority;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getDate() {
        return this.dueDate;
    }
    setDate(newDueDate) {
        this.dueDate = newDueDate;
    }
    getDescription() {
        return this.description;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
    getComplete() {
        return this.complete;
    }
    setComplete(newComplete) {
        this.complete = newComplete;
    }
    getPriority() {
        return this.priority;
    }
    setPriority(newPriority) {
        this.priority = newPriority;
    }
}
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    getProjectName() {
        return this.name;
    }
    setProjectName(newName) {
        this.name = newName;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
}

class TodoList {
    constructor() {
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project)
    }

    getProjects() {
        return this.projects
    }
}


class Storage {
    static saveTodoList(data) {
        localStorage.setItem("todoList", JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(new TodoList(), 
        JSON.parse(localStorage.getItem('todoList')))
        Storage.saveTodoList(todoList)
        return todoList
    }

    static addProject(project){
        const todoList = Storage.getTodoList()
        todoList.addProject(project)
        Storage.saveTodoList(todoList)
    }
}

Storage.addProject("Earth")
Storage.addProject("Saturn")
Storage.addProject("Devil")
Storage.addProject("Santa")


