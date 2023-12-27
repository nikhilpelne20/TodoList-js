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

class TodoList{
    constructor(){
        this.projects = []
    }

    addProject(project){
        this.projects.push(project)
    }

    getProjects(){
        return this.projects
    }
}


const myTodoList = new TodoList()

const project1 = new Project('Software Development');
const project2 = new Project("Game Development");

// Create tasks
const task1 = new Task('Implement Feature', '2023-01-15', 'Add new functionality', 'high');
const task2 = new Task('Bug Fix', '2023-01-20', 'Fix critical bug', 'medium');

// Add tasks to the project
project1.addTask(task1);
project1.addTask(task2);

const pTask1 = new Task('Implement Feature', '2023-01-15', 'Add new functionality', 'high');
const pTask2 = new Task('Bug Fix', '2023-01-20', 'Fix critical bug', 'medium');

project2.addTask(pTask1);
project2.addTask(pTask2);


// Add the project to the todo list
myTodoList.addProject(project1);
myTodoList.addProject(project2)

// Retrieve the list of projects in the todo list
console.log(myTodoList.getProjects()); // Output: [Project { ... }]