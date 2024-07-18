
import { basicLayout,createMainDiv,addProjects,createTasksDiv } from "./dom.js";
import { hoverEffect,touchEffect} from "./logic.js";
import { projects,userData } from "./projects.js";
import './style.css'
// import {createTasksDiv} from './task.js'

let importDivs = (function () {
    let data = localStorage.getItem('Projects');    
    if(data){ 
            let userLocal = JSON.parse(data)
            console.log(userLocal)
            basicLayout();
            createMainDiv();
            createTasksDiv();
            for (let i = 0; i < userLocal.length; i++) {

                let project = new projects(userLocal[i].name)
                project.getProjects(userLocal[i],i)
                // console.log(project)
                // project.getTasks(userLocal[i].arr);
                // console.log(project)
            }

    }
    else{
        
        basicLayout();
        createMainDiv();
        addProjects(); 
        createTasksDiv();
    }
 }
)();

// touchAnimation();
// hoverEffect();