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

    
}