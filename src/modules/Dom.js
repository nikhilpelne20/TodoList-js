import { format } from 'date-fns';
import Storage from './Storage';
import Project from './Project';
import Task from './Task';

export default class Dom {
    static loadHome() {
        Dom.loadProjects();
        Dom.initProjectBtn();
        Dom.openProject('Inbox', document.getElementById('project-inbox-btn'));
        document.addEventListener('keydown', Dom.handelKeyboardInput);
    }

    static loadProjects() {
        Storage.getTodoList()
            .getProjects()
            .forEach((project) => {
                if (
                    project.name !== 'Inbox' &&
                    project.name !== 'Today' &&
                    project.name !== 'Upcoming'
                ) {
                    Dom.createProject(project.name);
                }
            });
        Dom.initAddProjectBtn();
    }

    static handelKeyboardInput(e) {
        if (e.key === 'Escape') Dom.closeAllInputs();
    }

    static loadTasks(projectName) {
        Storage.getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) => Dom.createTasks(task.name, task.dueDate));
        if (projectName !== 'Today' && projectName !== 'Upcoming') {
            Dom.initAddTaskBtn();
        }
    }

    static loadProjectContent(projectName) {
        const projectContent = document.getElementById('task-list-section');
        projectContent.innerHTML = `
                    <h3 id="project-head-title" class="project-head-title">${projectName}</h3>
                        <div class="tasks-list-data" id="task-list-data"></div> `;

        if (projectName !== 'Today' && projectName !== 'Upcoming') {
            projectContent.innerHTML += `
                        <button class="add-task-btn" id="add-task-btn">
                                <i class="fa-regular fa-square-plus"></i>
                                <span>AddTask</span>
                        </button>
                            <div class="add-task-form" id="taskForm">
                                <form action="">
                                    <label for="projectName">Task Name</label>
                                    <input type="text" id="input-add-task-popup" name="projectName">
                                    <div class="task-date-task-btn">
                                        <div class="task-btn">
                                            <button type="button" class="add-taskForm-btn" id="add-taskForm-btn" >Add</button>
                                            <button type="button" class="cancel-taskForm-btn" id="cancel-taskForm-btn">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>`;
        }
        Dom.loadTasks(projectName);
    }

    // creating content

    static createProject(name) {
        const userProject = document.getElementById('added-project-section');
        userProject.innerHTML += `
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
        `;
        Dom.initProjectBtn();
    }

    static createTasks(task, dueDate) {
        const taskList = document.getElementById('task-list-data');
        taskList.innerHTML += `
        <button class="project-task-name" data-task-button>
                                <div class="task-name">
                                    <i class="fa-solid fa-o"></i>
                                    <span class="task-content">${task}</span>
                                    <input type="text" class="input-task-name" data-input-task-name>
                                </div>
                                <div class="task-date">
                                    <span class="due-date">${dueDate}</span>
                                    <input type="date" class="input-due-date" data-input-due-date>
                                    <i class="fa-regular fa-trash-can"></i>
                                </div>             
        </button>
        
        `;
        Dom.initTaskBtn();
    }

    static clear() {
        Dom.clearProject();
        Dom.clearTasks();
        Dom.clearTaskPage();
    }

    static clearProject() {
        const userProject = document.getElementById('added-project-section');
        userProject.textContent = '';
    }

    static clearTasks() {
        const projectContent = document.getElementById('task-list-data');
        projectContent.textContent = '';
    }

    static clearTaskPage() {
        const projectContent = document.getElementById('task-list-section');
        projectContent.textContent = '';
    }

    // project add eventListener

    static initAddProjectBtn() {
        const addProjectBtn = document.querySelector('.add-project-btn');
        const addProjectPopupBtn = document.querySelector('.add-btn');
        const cancelProjectPopupBtn = document.querySelector('.cancel-btn');

        addProjectBtn.addEventListener('click', Dom.openPopupForm);
        addProjectPopupBtn.addEventListener('click', Dom.addProject);
        cancelProjectPopupBtn.addEventListener('click', Dom.closePopupForm);
    }

    static openPopupForm() {
        const addProjectForm = document.getElementById('add-projectForm');
        const addProjectBtnOverlay = document.getElementById(
            'add-project-overlay',
        );

        addProjectForm.style.display =
            addProjectForm.style.display === 'block' ? 'none' : 'block';
        addProjectBtnOverlay.style.display =
            addProjectBtnOverlay.style.display === 'block' ? 'none' : 'block';
    }

    static closePopupForm() {
        const addProjectForm = document.getElementById('add-projectForm');
        const addProjectBtnOverlay = document.getElementById(
            'add-project-overlay',
        );
        addProjectForm.style.display =
            addProjectForm.style.display === 'block' ? 'none' : 'block';
        addProjectBtnOverlay.style.display =
            addProjectBtnOverlay.style.display === 'block' ? 'none' : 'block';
        document.getElementById('projectName').value = '';
    }

    static addProject() {
        const projectInput = document.getElementById('projectName');
        const projectValue = projectInput.value;
        if (
            projectValue === '' ||
            Storage.getTodoList().contains(projectValue)
        ) {
            Dom.closePopupForm();
            return;
        }
        Storage.addProject(new Project(projectValue));
        Dom.createProject(projectValue);
        Dom.closePopupForm();
    }

    static initProjectBtn() {
        const inboxProjectBtn = document.getElementById('project-inbox-btn');
        const todayProjectBtn = document.getElementById('project-today-btn');
        const weekProjectBtn = document.getElementById('project-week-btn');

        const allProjectBtn = document.querySelectorAll('[data-project-btn]');

        inboxProjectBtn.addEventListener('click', Dom.openInbox);
        todayProjectBtn.addEventListener('click', Dom.openToday);
        weekProjectBtn.addEventListener('click', Dom.openWeek);

        allProjectBtn.forEach((projectBtn) =>
            projectBtn.addEventListener('click', Dom.handleProject),
        );
    }

    static openInbox() {
        Dom.openProject('Inbox', this);
    }

    static openToday() {
        Storage.getTodayProject();
        Dom.openProject('Today', this);
    }

    static openWeek() {
        Storage.getUpcomingProject();
        Dom.openProject('Upcoming', this);
    }

    static handleProject(e) {
        const projectName = this.children[0].children[1].innerText;

        if (e.target.classList.contains('fa-trash-can')) {
            Dom.deleteProject(projectName, this);
            return;
        }
        if (e.target.classList.contains('fa-pen-to-square')) {
            Dom.openEditProject(this);
            Dom.addEditProjectInput(this);
        }

        Dom.openProject(projectName, this);
    }

    static openProject(projectName, button) {
        const defaultProjectBtn = document.querySelectorAll('.project-btn-fix');
        const projectBtn = document.querySelectorAll('.added-project-btn');

        const buttons = [...defaultProjectBtn, ...projectBtn];
        buttons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        Dom.loadProjectContent(projectName);
    }

    static deleteProject(projectName) {
        Dom.clearProject();
        Dom.clearTaskPage();
        Storage.deleteProject(projectName);
        Dom.loadProjects();
        Dom.openProject('Inbox', document.getElementById('project-inbox-btn'));
    }

    static closeAllInputs() {
        Dom.closeAllTaskInputs();
        Dom.closeAllDateInputs();
        Dom.closeAllProjectInputs();
    }

    static openEditProject(projectButton) {
        const projectName = projectButton.children[0].children[1];
        const projectNameInput = projectButton.children[0].children[2];
        projectNameInput.value = projectName.innerText;
        Dom.closeAllInputs();

        projectName.classList.add('active');
        projectNameInput.classList.add('active');
    }

    static closeEditProject(projectButton) {
        const projectName = projectButton.children[0].children[1];
        const projectNameInput = projectButton.children[0].children[2];

        projectName.classList.remove('active');
        projectNameInput.classList.remove('active');
    }

    static closeAllProjectInputs() {
        const projectPopups = document.querySelectorAll('[data-project-btn]');
        projectPopups.forEach((button) => Dom.closeEditProject(button));
    }

    static addEditProjectInput(projectName) {
        const projectInputButton = projectName.children[0].children[2];
        projectInputButton.addEventListener('keypress', Dom.renameProject);
    }

    static renameProject(e) {
        if (e.key !== 'Enter') return;

        const projectName = this.parentNode.children[1].innerText;
        const newProjectName = this.value;

        if (
            newProjectName === '' ||
            Storage.getTodoList().contains(newProjectName)
        ) {
            this.value = '';
            Dom.closeEditProject(this.parentNode.parentNode);
            return;
        }
        Storage.renameProject(projectName, newProjectName);
        Dom.clearProject();
        Dom.loadProjects();
        Dom.clearTaskPage();
        Dom.loadProjectContent(this.value);
        this.value = '';
    }

    // ADD TASK EVENT LISTENERS

    static initAddTaskBtn() {
        const initTaskBtn = document.getElementById('add-task-btn');
        const addPopupTaskBtn = document.getElementById('add-taskForm-btn');
        const cancelPopupTaskBtn = document.getElementById(
            'cancel-taskForm-btn',
        );

        initTaskBtn.addEventListener('click', Dom.openTaskPopup);
        addPopupTaskBtn.addEventListener('click', Dom.addProjectTask);
        cancelPopupTaskBtn.addEventListener('click', Dom.closeTaskPopup);
    }

    static openTaskPopup() {
        const projectForm = document.getElementById('taskForm');
        projectForm.style.display =
            projectForm.style.display === 'block' ? 'none' : 'block';
    }

    static addProjectTask() {
        const projectName =
            document.getElementById('project-head-title').textContent;
        const addTaskInput = document.getElementById(
            'input-add-task-popup',
        ).value;
        const presentNot = Storage.getTodoList()
            .getProject(projectName)
            .contains(addTaskInput);
        if (addTaskInput === '' || presentNot) {
            Dom.closeTaskPopup();
            return;
        }
        Storage.addTask(projectName, new Task(addTaskInput));
        Dom.createTasks(addTaskInput, 'no date');
        Dom.closeTaskPopup();
    }

    static closeTaskPopup() {
        document.getElementById('taskForm').style.display = 'none';
        const addTaskInput = document.getElementById('input-add-task-popup');
        addTaskInput.value = '';
    }

    static initTaskBtn() {
        const taskButton = document.querySelectorAll('[data-task-button]');
        const taskInputButton = document.querySelectorAll(
            '[data-input-task-name]',
        );
        const taskDateButton = document.querySelectorAll(
            '[data-input-due-date]',
        );

        taskButton.forEach((taskBtn) =>
            taskBtn.addEventListener('click', Dom.handleTask),
        );
        taskInputButton.forEach((inputVal) =>
            inputVal.addEventListener('keypress', Dom.renameTask),
        );
        taskDateButton.forEach((dueDateInput) =>
            dueDateInput.addEventListener('change', Dom.setTaskDate),
        );
    }

    static handleTask(e) {
        const projectName =
            document.getElementById('project-head-title').innerText;
        if (e.target.classList.contains('fa-trash-can')) {
            Dom.deleteTask(projectName, this);
        } else if (e.target.classList.contains('task-content')) {
            Dom.openRenameInput(this);
        } else if (e.target.classList.contains('due-date')) {
            Dom.openSetInputDate(this);
        } else if (e.target.classList.contains('fa-o')) {
            Dom.setTaskComplete(projectName, this);
        }
    }

    static openSetInputDate(taskButton) {
        console.log(taskButton);
        const dueDate = taskButton.children[1].children[0];
        const dueDateInput = taskButton.children[1].children[1];

        Dom.closeAllInputs();
        dueDate.classList.add('active');
        dueDateInput.classList.add('active');
    }

    static closeSetInputDate(taskButton) {
        const dueDate = taskButton.children[1].children[0];
        const dueDateInput = taskButton.children[1].children[1];

        dueDate.classList.remove('active');
        dueDateInput.classList.remove('active');
    }

    static closeAllDateInputs() {
        const taskNames = document.querySelectorAll('[data-task-button]');
        taskNames.forEach((DatePopup) => Dom.closeSetInputDate(DatePopup));
    }

    static renameTask(e) {
        if (e.key !== 'Enter') return;

        const projectName =
            document.getElementById('project-head-title').innerText;
        const taskName = this.parentNode.children[1].innerText;
        const newTaskName = this.value;

        if (
            newTaskName === '' ||
            Storage.getTodoList().getProject(projectName).contains(newTaskName)
        ) {
            this.value = '';
            Dom.closeRenameInput(this.parentNode.parentNode);
            return;
        }

        if (projectName === 'Today' || projectName === 'Upcoming') {
            const mainProjectName = taskName.split(/[()]/)[1];
            const mainTaskName = taskName.split(/[()]/)[0];
            Storage.renameTask(projectName, taskName, newTaskName);
            Storage.renameTask(mainProjectName, mainTaskName, newTaskName);
            if (projectName === 'Today') {
                Storage.getTodayProject();
            } else {
                Storage.getUpcomingProject();
            }
        } else {
            Storage.renameTask(projectName, taskName, newTaskName);
        }

        Dom.closeRenameInput(this.parentNode.parentNode);
        Dom.clearTasks();
        Dom.loadTasks(projectName);
    }

    static setTaskComplete(projectName, button) {
        const taskName = button.children[0].children[1].innerText;

        if (projectName === 'Today' || projectName === 'Upcoming') {
            const projectNameMain =
                button.children[0].children[1].textContent.split(/[()]/)[1];
            Storage.deleteTask(projectNameMain, taskName);
        }

        Storage.deleteTask(projectName, taskName);
        Dom.clearTasks();
        Dom.loadTasks(projectName);
    }

    static setTaskDate() {
        const taskButton = this.parentNode.parentNode;
        const projectName =
            document.getElementById('project-head-title').innerText;
        const taskName = taskButton.children[0].children[1].innerText;
        const newDueDate = format(new Date(this.value), 'dd/MM/yyyy');

        if (projectName === 'Today' || projectName === 'Upcoming') {
            const mainProjectName = taskName.split(/[()]/)[1];
            const mainTaskName = taskName.split(/[()]/)[0];

            Storage.setTaskDate(projectName, taskName, newDueDate);
            Storage.setTaskDate(mainProjectName, mainTaskName, newDueDate);
            if (projectName === 'Today') {
                Storage.getTodayProject();
            } else {
                Storage.getUpcomingProject();
            }
        } else {
            Storage.setTaskDate(projectName, taskName, newDueDate);
        }

        Dom.clearTasks();
        Dom.loadTasks(projectName);
        Dom.closeSetInputDate(this.parentNode.parentNode);
    }

    static openRenameInput(taskButton) {
        const taskName = taskButton.children[0].children[1];
        let taskNameBefore = taskName.innerText;
        const taskNameInput = taskButton.children[0].children[2];
        const projectName =
            taskButton.parentNode.parentNode.children[0].innerText;

        Dom.closeAllInputs();
        if (projectName === 'Today' || projectName === 'Upcoming') {
            taskNameBefore = taskNameBefore.split(/[()]/)[0];
        }

        taskName.classList.add('active');
        taskNameInput.classList.add('active');
        taskNameInput.value = taskNameBefore;
    }

    static closeRenameInput(taskButton) {
        const taskName = taskButton.children[0].children[1];
        const taskNameInput = taskButton.children[0].children[2];

        taskName.classList.remove('active');
        taskNameInput.classList.remove('active');
    }

    static closeAllTaskInputs() {
        const taskNames = document.querySelectorAll('[data-task-button]');
        taskNames.forEach((task) => Dom.closeRenameInput(task));
    }

    static deleteTask(projectName, button) {
        const taskName = button.children[0].children[1].innerText;

        if (projectName === 'Today' || projectName === 'Upcoming') {
            const projectNameMain =
                button.children[0].children[1].textContent.split(/[()]/)[1];
            Storage.deleteTask(projectNameMain, taskName);
        }

        Storage.deleteTask(projectName, taskName);
        Dom.clearTasks();
        Dom.loadTasks(projectName);
    }
}
