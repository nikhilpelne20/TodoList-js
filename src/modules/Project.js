export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    setName(name){
        this.name = name
    }
    setTasks(task){
        this.tasks = task
    }
    getName() {
        return this.name;
    }
    getTasks() {
        return this.tasks;
    }
    addTask(task) {
        if(this.tasks.some((existingTask)=> existingTask.getName() === task.name)) return;
        this.tasks.push(task);
    }
}