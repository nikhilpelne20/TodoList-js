import { compareAsc, toDate } from "date-fns";
import Project from "./Project";
import Task from "./Task";

export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project("Inbox"))
        this.projects.push(new Project("Today"))
        this.projects.push(new Project("Upcoming"))
    }
    
    setProjects(projects){
        this.projects = projects
    }

    addProject(project){
        if(this.projects.some(existingProject => existingProject.getName() === project.name)){
            return;
        }
        this.projects.push(project)
    }

    contains(project){
        return this.projects.some(existingProject => existingProject.getName() === project)
    }

    deleteProject(projectName){
        const project = this.projects.find((project)=> project.getName()===projectName)
        this.projects.splice(this.projects.indexOf(project),1)
    }

    getProject(project) {
        return this.projects.find(existingProject => existingProject.getName() === project);
    }    

    getProjects() {
        return this.projects
    }

    getTodayProject(){
        this.getProject("Today").tasks=[];
        this.projects.forEach((project)=> {
            if(project.getName()==="Today" || project.getName()==="Upcoming")
                return;
            
            
            const todayTasks = project.getTasksToday()
            todayTasks.forEach((task)=> {
                const taskName = task.getName() + `(${project.getName()})`;
                this.getProject("Today").addTask(new Task(taskName, task.getDate()));
            })
        })
    }

    getUpcomingProject(){
        this.getProject("Upcoming").tasks = []
        this.projects.forEach((project)=>{
            if(project.getName()==="Today" || project.getName()==="Upcoming")
                return

            const upcomingTask = project.getTasksUpcoming()
            upcomingTask.forEach((task)=>{
                const taskName = task.getName() + `(${project.getName()})`;
                this.getProject("Upcoming").addTask(new Task(taskName, task.getDate()))
            })
        })

        this.getProject("Upcoming").setTasks(this.getProject("Upcoming").getTasks().sort((taskA,taskB)=>
        compareAsc(
            toDate(new Date(taskA.getDateFormat())),
            toDate(new Date(taskB.getDateFormat()))
            )
        ))
    }

    
}