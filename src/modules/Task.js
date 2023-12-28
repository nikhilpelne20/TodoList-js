export default class Task {
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