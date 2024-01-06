import Storage from "./Storage";
import TodoList from "./TodoList.js"
import Project from "./Project";
import Task from "./Task";

export default class Dom {
    static loadHome() {
        // Storage.addProject(new Project("Tom"));
        // Storage.addProject(new Project("Jerry"));
        // Storage.addTask("Jerry", new Task("sun"));
        // Storage.addTask("Jerry", new Task("moon"));
        // Storage.addTask("Jerry", new Task("stars"));
        // Storage.addTask("Tom", new Task("pirateKing"))
        // Storage.addTask("Tom", new Task("pirateHunter"));
        // Storage.addTask("Tom", new Task("starBoy"));

        // if(Storage.getTodoList().contains("Tom")){
        //     Storage.renameProject("Tom","Sam")
        //     return;
        // }
        // Storage.renameProject("Tom","Sam")
        // Storage.deleteProject("Jerry")
        // Storage.deleteProject("Tom")
        // Storage.renameTask("Jerry","moon","Earth")
        // Storage.renameTask("Jerry","sun","nika")
        // Storage.deleteTask("Tom","starBoy")
    
        // Dom.loadProjects()
        // Dom.openProject()
        // Dom.openTask()
        // Dom.loadProjects()
        Dom.initAddProjectBtn()
        Dom.loadProjects()
        Dom.initProjectBtn()
    }

    static loadProjects(){
        Storage.getTodoList()
        .getProjects()
        .forEach((project)=> Dom.createProject(project.name))

        Dom.initProjectBtn()
    }

    static loadTasks(projectName){
        Storage.getTodoList()
        .getProject(projectName)
        .getTasks()
        .forEach((task)=> Dom.createTasks(task.name,task.dueDate))
        Dom.initAddTaskBtn()
    }

    static createProject(name){
        const userProject = document.getElementById("added-project-section")
        userProject.innerHTML+=`
        <button class="added-project-btn" data-project-btn>
                            <div class="project-name" id="project-name">
                                <i class="fa-solid fa-hashtag"></i>
                                <span>${name}</span>  
                            </div>
                            <div class="project-option">
                                <i class="fa-regular fa-pen-to-square"></i>
                                <i class="fa-regular fa-trash-can"></i>
                            </div>
        </button>
        `
        Dom.initProjectBtn()
    }

    static initAddProjectBtn(){
        const addProjectBtn = document.querySelector('.add-project-btn');
        const addProjectPopupBtn= document.querySelector('.add-btn');;
        const cancelProjectPopupBtn = document.querySelector('.cancel-btn');

        addProjectBtn.addEventListener('click', Dom.openPopupForm)
        addProjectPopupBtn.addEventListener('click',Dom.addProject)
        cancelProjectPopupBtn.addEventListener('click', Dom.closePopupForm)
    }

    static openPopupForm(){
        const addProjectForm = document.getElementById('add-projectForm');
        const addProjectBtnOverlay = document.getElementById('add-project-overlay')

        addProjectForm.style.display = (addProjectForm.style.display === 'block') ? 'none' : 'block';
        addProjectBtnOverlay.style.display = (addProjectBtnOverlay.style.display === 'block') ? 'none' : 'block';
    }

    static addProject(){
        const projectInput = document.getElementById('projectName');
        let projectValue = projectInput.value
        if(projectValue === "" || Storage.getTodoList().contains(projectValue)){
            Dom.closePopupForm()
            return;
        }
        Storage.addProject(new Project(projectValue))
        Dom.createProject(projectValue)
        Dom.closePopupForm()

    }

    static closePopupForm(){
        const addProjectForm = document.getElementById('add-projectForm');
        const addProjectBtnOverlay = document.getElementById('add-project-overlay')
        addProjectForm.style.display = (addProjectForm.style.display === 'block') ? 'none' : 'block';
        addProjectBtnOverlay.style.display = (addProjectBtnOverlay.style.display === 'block') ? 'none' : 'block';
        const projectInput = document.getElementById('projectName').value = '';
    }

    static initProjectBtn(){
        const inboxProjectBtn = document.getElementById('project-inbox-btn');
        const todayProjectBtn = document.getElementById('project-today-btn');
        const weekProjectBtn  = document.getElementById('project-week-btn');

        const allProjectBtn = document.querySelectorAll('[data-project-btn]');

        inboxProjectBtn.addEventListener('click', Dom.openInbox)
        todayProjectBtn.addEventListener('click', Dom.openToday)
        weekProjectBtn.addEventListener('click', Dom.openWeek);

        allProjectBtn.forEach((projectBtn)=> 
        projectBtn.addEventListener('click', Dom.handleProject))
    }

    static openInbox(){
        console.log("Open Inbox clicked")
        Dom.loadProjectContent("Inbox")
    }
    static openToday(){
        console.log("Open Today clicked")
    }

    static openWeek(){
        console.log("Open Week clicked")
    }

    static handleProject(e){
        const projectName = this.children[0].children[1].innerText;

        if(e.target.classList.contains('fa-trash-can')){
            Dom.deleteProject(projectName,this)
            return;
        }
        Dom.openProject(projectName,this)
    }

    static openProject(projectName,button){
        // console.log("Load Tasks",projectName,button)
        console.log(button)
        button.classList.add("active")

        Dom.loadProjectContent(projectName)

    }

    static createTasks(task,dueDate){
        const taskList = document.getElementById('task-list-data')
        taskList.innerHTML +=`
        <button class="project-task-name" data-task-button>
                                <div class="task-name">
                                    <i class="fa-solid fa-o"></i>
                                    <span> ${task}</span>
                                </div>
                                <div class="task-date">
                                    <span>${dueDate}</span>
                                    <div class="task-edit-btn">
                                    <i class="fa-regular fa-pen-to-square"></i>
                                    <i class="fa-regular fa-trash-can"></i>
                                    </div>
                                </div>
        </button>
        `
        Dom.initAddTaskBtn()
    }


    static loadProjectContent(projectName){

        const projectContent = document.getElementById('task-list-section')
        projectContent.innerHTML=`
        <div class="project-name-head" id="project-name-head">
                        <h3 id="project-head-title">${projectName}</h3>
                    </div>
                    <div class="project-tasks-list">
                        <div class="tasks-list-data" id="task-list-data">
                        </div> 
                        <div class="add-project-task-btn">
                            <button class="add-task-btn" id="add-task-btn">
                                <i class="fa-regular fa-square-plus"></i>
                                <span>AddTask</span>
                            </button>
                        </div>
                            <div class="add-task-form" id="taskForm">
                                <form action="">
                                    <label for="projectName">Task Name</label>
                                    <input type="text" id="input-add-task-popup" name="projectName">
                                    <div class="task-date-task-btn">
                                        <div class="task-dueDate">
                                            <label for="dueDate">DueDate</label>
                                            <input type="date" id="duedate" name="dueDate">
                                        </div>
                                        <div class="task-btn">
                                            <button type="button" class="add-taskForm-btn" id="add-taskForm-btn" >Add</button>
                                            <button type="button" class="cancel-taskForm-btn" id="cancel-taskForm-btn">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
        `
        Dom.loadTasks(projectName)
        
    }

   


    static clearProject(){
        const userProject = document.getElementById("added-project-section")
        userProject.innerText=""
    }

    //not working check later
    static clearTasks(){
        const projectContent = document.getElementById('task-list-data')
        projectContent.innerHTML=""
    }

    static clearTaskPage(){
        const projectContent = document.getElementById('task-list-section')
        projectContent.innerHTML=""
    }

    static deleteProject(projectName,button){
        // console.log(button)
        Dom.clearProject()
        Dom.clearTaskPage()
        Storage.deleteProject(projectName)
        Dom.loadProjects()
    }

    static initAddTaskBtn(){
        const addTaskBtn = document.getElementById("add-task-btn")
        const addPopupTaskBtn = document.getElementById("add-taskForm-btn")
        const cancelPopupTaskBtn = document.getElementById("cancel-taskForm-btn")
        const taskButton = document.querySelectorAll("[data-task-button]")
        
    
        addTaskBtn.addEventListener('click', Dom.openTaskPopup)
        addPopupTaskBtn.addEventListener('click', Dom.addProjectTask)
        cancelPopupTaskBtn.addEventListener('click',Dom.closeTaskPopup)
        taskButton.forEach((taskBtn)=>
        taskBtn.addEventListener('click',Dom.handleTask))
    }
    static handleTask(e){
        const projectName = document.getElementById("project-head-title").innerText
        if(e.target.classList.contains("fa-trash-can")){
            Dom.deleteTask(projectName,this)
        }
    }

    static openTaskPopup(){
        const projectForm = document.getElementById('taskForm');
        projectForm.style.display = (projectForm.style.display === 'block') ? 'none' : 'block';

    }

    static addProjectTask(){
        const projectName = document.getElementById("project-name-head").children[0].textContent
        const addTaskInput = document.getElementById("input-add-task-popup").value
        const presentNot = Storage.getTodoList().getProject(projectName).contains(addTaskInput);
        console.log(presentNot)
        if(addTaskInput === "" || presentNot){
            Dom.closeTaskPopup()
            return;
        }
        Storage.addTask(projectName, new Task(addTaskInput));
        Dom.createTasks(addTaskInput, "no date")
        Dom.closeTaskPopup()
    }

    static closeTaskPopup(){
        const projectForm = document.getElementById('taskForm').style.display = 'none';
        const addTaskInput = document.getElementById("input-add-task-popup")
        addTaskInput.value=""
    }

    static deleteTask(projectName,button){
        const taskName = button.children[0].children[1].innerText
        Storage.deleteTask(projectName,taskName)
        Dom.clearTasks()
        Dom.loadTasks(projectName)
    }

}