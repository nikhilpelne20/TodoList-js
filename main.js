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

// Create a new project instance
const myProject = new Project('Software Development');

// Retrieve project name using the getter method
console.log(myProject.getProjectName()); // Output: Software Development

// Set a new project name using the setter method
myProject.setProjectName('Web Development');

// Retrieve the updated project name
console.log(myProject.getProjectName()); // Output: Web Development

// Create task instances
const task1 = new Task('Implement Feature', '2023-01-15', 'Add new functionality', 'high');
const task2 = new Task('Bug Fix', '2023-01-20', 'Fix critical bug', 'medium');

// Add tasks to the project
myProject.addTask(task1);
myProject.addTask(task2);

// Retrieve the list of tasks associated with the project
console.log(myProject.getTasks()); // Output: [Task { ... }, Task { ... }]

