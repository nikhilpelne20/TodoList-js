import TodoList from "./TodoList"


export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem("todoList", JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(new TodoList(), 
        JSON.parse(localStorage.getItem('todoList')))
        Storage.saveTodoList(todoList)
        return todoList
    }

    static addProject(project){
        const todoList = Storage.getTodoList()
        todoList.addProject(project)
        Storage.saveTodoList(todoList)
    }
}

