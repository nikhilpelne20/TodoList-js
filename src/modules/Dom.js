import Storage from "./Storage";
import Project from "./Project";
import Task from "./Task";

export default class Dom {
    static loadHome(){
        Storage.addProject(new Project("Tom"));
        Storage.addProject(new Project("Jerry"));
        Storage.addTask("Jerry", new Task("sun"));
        Storage.addTask("Jerry", new Task("moon"));
        Storage.addTask("Jerry", new Task("stars"));
    }
}