export default class Project {
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