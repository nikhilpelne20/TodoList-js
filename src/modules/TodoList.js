import Project from "./Project";

export default class TodoList {
    constructor() {
        this.projects = []
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

    getProject(project) {
        return this.projects.find(existingProject => existingProject.getName() === project);
    }    

    getProjects() {
        return this.projects
    }
}