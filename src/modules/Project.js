import { isAfter, isToday, startOfDay } from 'date-fns';

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    setTasks(task) {
        this.tasks = task;
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    }

    addTask(task) {
        if (this.tasks.some((existingTask) => existingTask.getName() === task))
            return;
        this.tasks.push(task);
    }

    contains(task) {
        return this.tasks.some(
            (existingTask) => existingTask.getName() === task,
        );
    }

    deleteTask(taskName) {
        const task = this.tasks.find(
            (allTask) => allTask.getName() === taskName,
        );
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    getTasksToday() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormat());
            return isToday(taskDate);
        });
    }

    getTasksUpcoming() {
        const today = startOfDay(new Date());
        return this.tasks.filter((task) => {
            const taskUpcoming = new Date(task.getDateFormat());
            return isAfter(taskUpcoming, today);
        });
    }
}
