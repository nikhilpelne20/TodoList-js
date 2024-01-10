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
        .forEach((project)=> {
            if(project.name !== "Inbox" && project.name !== "Today" && project.name !== "Upcoming"){
                Dom.createProject(project.name)
            }
        } );

        Dom.initProjectBtn()
    }

    static loadTasks(projectName){
        Storage.getTodoList()
        .getProject(projectName)
        .getTasks()
        .forEach((task)=> Dom.createTasks(task.name,task.dueDate))
        if(projectName !== "Today" && projectName!=="Upcoming"){
            Dom.initAddTaskBtn()
        }
        
    }

    static createProject(name){
        const userProject = document.getElementById("added-project-section")
        userProject.innerHTML+=`
        <button class="added-project-btn" data-project-btn>
                            <div class="project-name" id="project-name">
                                <i class="fa-solid fa-hashtag"></i>
                                <span class="project-name-data" >${name}</span>  
                                <input type="text" class="input-project-name" data-input-project-name>
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

    static renameProject(e){
        if(e.key !== "Enter")return;
        
        const projectName = this.parentNode.children[1].innerText
        const newProjectName = this.value
        // console.log(projectName,newProjectName)

        if(newProjectName ==="" || Storage.getTodoList().contains(newProjectName)){
            this.value=""
            Dom.closeEditProject(this.parentNode.parentNode)
            return;
        }
        Storage.renameProject(projectName,newProjectName);
        Dom.clearProject()
        Dom.loadProjects()
        Dom.clearTaskPage()
        Dom.loadProjectContent(this.value)
        this.value=""
    }

    static openInbox(){
        Dom.openProject("Inbox",this)
    }
    static openToday(){
        Dom.openProject("Today",this)
        // console.log("Open Today clicked")
    }

    static openWeek(){
        Dom.openProject("Upcoming",this)
        // console.log("Open Week clicked")
    }

    static handleProject(e){
        const projectName = this.children[0].children[1].innerText;

        if(e.target.classList.contains('fa-trash-can')){
            Dom.deleteProject(projectName,this)
            return;
        }
        else if(e.target.classList.contains('fa-pen-to-square')){
            console.log("edit ProjectName")
            Dom.openEditProject(this);
            Dom.addEditProjectInput(this);
        }
        
        Dom.openProject(projectName,this)
    }

    static addEditProjectInput(projectName){
        const projectInputButton = projectName.children[0].children[2]
        projectInputButton.addEventListener("keypress", Dom.renameProject)
    }

    static openEditProject(projectButton){
        // console.log(projectName)
        const projectName = projectButton.children[0].children[1]
        const projectNameInput = projectButton.children[0].children[2]
        
        projectName.classList.add("active")
        projectNameInput.classList.add("active")
    }
    static closeEditProject(projectButton){
        console.log("close Project edit Button")
        const projectName = projectButton.children[0].children[1]
        const projectNameInput = projectButton.children[0].children[2]
        
        projectName.classList.remove("active")
        projectNameInput.classList.remove("active")
    }

    static openProject(projectName,button){
        // console.log("Load Tasks",projectName,button)
        button.classList.add("active")
        // console.log(button)

        Dom.loadProjectContent(projectName)

    }

    static createTasks(task,dueDate){
        const taskList = document.getElementById('task-list-data')
        taskList.innerHTML +=`
        <button class="project-task-name" data-task-button>
                                <div class="task-name">
                                    <i class="fa-solid fa-o"></i>
                                    <span class="task-content">${task}</span>
                                    <input type="text" class="input-task-name" data-input-task-name>
                                </div>
                                <div class="task-date">
                                    <span class="due-date">${dueDate}</span>
                                    <div class="task-edit-btn">
                                    <input type="date" class="input-due-date" data-input-due-date>
                                    <i class="fa-regular fa-trash-can"></i>
                                    </div>
                                </div>             
        </button>
        
        `
        Dom.initAddTaskBtn()
        Dom.initTaskBtn()
    }


    static loadProjectContent(projectName){

        const projectContent = document.getElementById('task-list-section')
        projectContent.innerHTML=`
                    <h3 id="project-head-title" class="project-head-title">${projectName}</h3>
                        <div class="tasks-list-data" id="task-list-data"></div> `;
                        
                    if(projectName !== "Today" && projectName !=="Upcoming"){
                        projectContent.innerHTML +=`
                        <button class="add-task-btn" id="add-task-btn">
                                <i class="fa-regular fa-square-plus"></i>
                                <span>AddTask</span>
                        </button>
                            <div class="add-task-form" id="taskForm">
                                <form action="">
                                    <label for="projectName">Task Name</label>
                                    <input type="text" id="input-add-task-popup" name="projectName">
                                    <div class="task-date-task-btn">
                                        <div class="task-dueDate">
                                            <label for="dueDate">DueDate</label>
                                            <input type="date" id="dueDate" name="dueDate">
                                        </div>
                                        <div class="task-btn">
                                            <button type="button" class="add-taskForm-btn" id="add-taskForm-btn" >Add</button>
                                            <button type="button" class="cancel-taskForm-btn" id="cancel-taskForm-btn">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>`
                    }
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
        Dom.clearProject()
        Dom.clearTaskPage()
        Storage.deleteProject(projectName)
        Dom.loadProjects()
        Dom.openInbox()
    }

    static initAddTaskBtn(){
        const initTaskBtn = document.getElementById("add-task-btn")
        const addPopupTaskBtn = document.getElementById("add-taskForm-btn")
        const cancelPopupTaskBtn = document.getElementById("cancel-taskForm-btn")
        
        
    
        initTaskBtn.addEventListener('click', Dom.openTaskPopup)
        addPopupTaskBtn.addEventListener('click', Dom.addProjectTask)
        cancelPopupTaskBtn.addEventListener('click',Dom.closeTaskPopup)
        
    }

    static initTaskBtn(){
        const taskButton = document.querySelectorAll("[data-task-button]")
        const taskInputButton = document.querySelectorAll("[data-input-task-name]")
        const taskDateButton = document.querySelectorAll("[data-input-due-date]")


        taskButton.forEach((taskBtn)=>
        taskBtn.addEventListener('click',Dom.handleTask))
        taskInputButton.forEach((inputVal)=>
        inputVal.addEventListener("keypress",Dom.renameTask))
        taskDateButton.forEach((dueDateInput)=> 
        dueDateInput.addEventListener('change',Dom.setTaskDate))
        
    }
    static handleTask(e){
        const projectName = document.getElementById("project-head-title").innerText
        if(e.target.classList.contains("fa-trash-can")){
            Dom.deleteTask(projectName,this)
        }else if(e.target.classList.contains('task-content')){
            Dom.openRenameInput(this)
        }
        else if(e.target.classList.contains('due-date')){
            console.log("date Clicked")
        }
        else if(e.target.classList.contains("fa-o")){
            console.log("set task complete")
        }
    }

    static renameTask(e){
        if(e.key !== "Enter")return;

        const projectName = document.getElementById("project-head-title").innerText
        const taskName = this.parentNode.children[1].innerText
        console.log(taskName)
        const newTaskName = this.value

        if(newTaskName ==="" || Storage.getTodoList().getProject(projectName).contains(newTaskName)){
            this.value="";
            Dom.closeRenameInput(this.parentNode.parentNode) 
            return;
        }
        Storage.renameTask(projectName,taskName,newTaskName)
        Dom.closeRenameInput(this.parentNode.parentNode)
        Dom.clearTasks()
        Dom.loadTasks(projectName)

    }

    static setTaskDate(e){
        console.log(e)
    }

    static openRenameInput(taskButton){
        const taskName = taskButton.children[0].children[1]
        const taskNameInput = taskButton.children[0].children[2]

        taskName.classList.add("active")
        taskNameInput.classList.add("active")
    }


    static closeRenameInput(taskButton){
        const taskName = taskButton.children[0].children[1]
        const taskNameInput = taskButton.children[0].children[2]

        taskName.classList.remove("active")
        taskNameInput.classList.remove("active")
    }
    

    static openTaskPopup(){
        const projectForm = document.getElementById('taskForm');
        projectForm.style.display = (projectForm.style.display === 'block') ? 'none' : 'block';

    }

    static addProjectTask(){
        const projectName = document.getElementById("project-head-title").textContent
        const addTaskInput = document.getElementById("input-add-task-popup").value
        const presentNot = Storage.getTodoList().getProject(projectName).contains(addTaskInput);
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