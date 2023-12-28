import TodoList from "./TodoList"
import Project from "./Project"
import Task from "./Task";


export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem("newTodoList", JSON.stringify(data))
    }

    static getTodoList() {
        const newTodoList = Object.assign(
        new TodoList(), 
        JSON.parse(localStorage.getItem('newTodoList')))
        
        newTodoList.setProjects(
            newTodoList
            .getProjects()
            .map((project)=> (project = Object.assign(new Project(), project)))
        )

        newTodoList
        .getProjects()
        .forEach((project) =>
          project.setTasks(
            project.getTasks().map((task) => Object.assign(new Task(), task))
          )
        );
        return newTodoList
    }

    static addProject(project){
        const newTodoList = Storage.getTodoList()
        newTodoList.addProject(project)
        Storage.saveTodoList(newTodoList)
    }

    static addTask(projectName, taskName) {
        const newTodoList = Storage.getTodoList();
        newTodoList.getProject(projectName).addTask(taskName);
        // console.log(newTodoList)
        Storage.saveTodoList(newTodoList);
    }
    

    
}

