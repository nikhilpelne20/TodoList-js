import Storage from "./Storage";
import TodoList from "./TodoList.js"
import Project from "./Project";
import Task from "./Task";

export default class Dom {
    static loadHome(){
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
    }
}