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

// Create a new task instance
const myTask = new Task('Complete Assignment', '2023-01-10', 'Finish the project', 'high');

// Retrieve task properties using getter methods
console.log(myTask.getName());         // Output: Complete Assignment
console.log(myTask.getDate());         // Output: 2023-01-10
console.log(myTask.getDescription());  // Output: Finish the project
console.log(myTask.getComplete());     // Output: false
console.log(myTask.getPriority());     // Output: high

// Update task properties using setter methods
myTask.setName('New Task Name');
myTask.setDate('2023-01-15');
myTask.setDescription('Revise and polish');
myTask.setComplete(true);
myTask.setPriority('medium');

// Retrieve updated task properties
console.log(myTask.getName());         // Output: New Task Name
console.log(myTask.getDate());         // Output: 2023-01-15
console.log(myTask.getDescription());  // Output: Revise and polish
console.log(myTask.getComplete());     // Output: true
console.log(myTask.getPriority());     // Output: medium

