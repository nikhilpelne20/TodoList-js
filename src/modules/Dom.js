import Storage from "./Storage";
import TodoList from "./TodoList.js"
import Project from "./Project";
import Task from "./Task";

export default class Dom {
    static loadHome() {
        Storage.addProject(new Project("Tom"));
        Storage.addProject(new Project("Jerry"));
        Storage.addTask("Jerry", new Task("sun"));
        Storage.addTask("Jerry", new Task("moon"));
        Storage.addTask("Jerry", new Task("stars"));
        Storage.addTask("Tom", new Task("pirateKing"))
        Storage.addTask("Tom", new Task("pirateHunter"));
        Storage.addTask("Tom", new Task("starBoy"));

        // if(Storage.getTodoList().contains("Tom")){
        //     Storage.renameProject("Tom","Sam")
        //     return;
        // }
        // Storage.renameProject("Tom","Sam")
        // Storage.deleteProject("Jerry")
        // Storage.deleteProject("Tom")
        // Storage.renameTask("Jerry","moon","Earth")
        // Storage.renameTask("Jerry","sun","nika")
        Storage.deleteTask("Tom","starBoy")
    
        // Dom.loadProjects()
        Dom.openProject()
    }

    static openProject(){
        document.querySelector('.add-project-btn').addEventListener('click', toggleForm);

        function toggleForm() {
            var projectForm = document.getElementById('projectForm');
            projectForm.style.display = (projectForm.style.display === 'block') ? 'none' : 'block';
        }
        document.querySelector('.add-btn').addEventListener('click', addProject)
        function addProject() {
            console.log('Project added');
            cancelForm();
        }

        document.querySelector('.cancel-btn').addEventListener('click',cancelForm)
        
        function cancelForm() {
            document.getElementById('projectForm').style.display = 'none';
            console.log("cancel form")
        }
    }

    static loadProjects() {
        Storage.getTodoList().getProjects().forEach((project) => {
            Dom.createProjects(project.name)
        });
    }

    static createProjects(projectName) {
        const projectList = document.getElementById("project-list-btn");
        projectList.innerHTML += `<button class="project-nav-btn" data-project-btn>
        <span>${projectName}</span>
        </button>`
        Dom.initProjectBtn()
    }
    static initProjectBtn() {
        const projectBtns = document.querySelectorAll('[data-project-btn]');
        projectBtns.forEach((project) => project.addEventListener("click", Dom.handleProject));
        
    }

    static handleProject(e) {
        const projectName =this.children[0].innerHTML 
        Dom.loadProjectContent(projectName)
    }

    static loadProjectContent(projectName){
        const projectPreview = document.getElementById("project-task-list")
        projectPreview.innerHTML =`
        <h1>${projectName}</h1>
        <div class="task-list" id="task-list"></div>`
        Dom.loadTasks(projectName)
    }

    static loadTasks(projectName){
        Storage.getTodoList()
        .getProject(projectName)
        .getTasks()
        .forEach((task)=> Dom.createTasks(task.name,task.dueDate))
    }

    static createTasks(name,dueDate){
        const taskList = document.getElementById("task-list")
        taskList.innerHTML+=`
        <div class="taskComplete">
        <div class="task-name">
            <p>${name}</p>
        </div>
        <div class="task-date">
           <p>${dueDate} </p>
        </div>
        </div>`
    }

}