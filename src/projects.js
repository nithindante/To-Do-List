import { toDoList,editClick } from "./toDo";
import {hoverEffect} from './logic.js'

let projects = class{
    constructor(name)
    {
        this.name = name
        this.arr =[]
    }


    
    createMainDiv(){
 
        let projectsDiv = document.querySelector('.projects')       

        let projectsHeader = document.createElement('div')
        projectsHeader.classList.add('projectsHeader')

        let projectsHeading = document.createElement('h3')
        projectsHeading.textContent='Projects'

        let addButton = document.createElement('button')
        addButton.classList.add('addButton')

        projectsHeader.appendChild(projectsHeading)
        projectsHeader.appendChild(addButton)
        projectsDiv.appendChild(projectsHeader)
        let projectDiv = this.createDiv();
        projectsDiv.appendChild(projectDiv)
        let toDo = new toDoList; 
        
        toDo.createTasksDiv()
        let newTasksDone  = projectDiv.querySelector('.addTaskButton')
        newTasksDone.addEventListener('click',() => {
        toDo.createNewTask(toDo,this)
        console.log(this.arr)
        event.preventDefault();
        })
       
        
        
    }


    newProject(){
        
        let addButton = document.querySelector('.addButton')
        addButton.addEventListener('click',()=>{
            // console.log(this)

            let div = this.createDiv();
            let projectsDiv = document.querySelector('.projects')
            console.log(this)
            div.querySelector('.addTaskButton').addEventListener('click',function () {
                let toDo = new toDoList;
                (this.arr).push(toDo)
            toDo.createTasksDiv()
            toDo.createNewTask(div)
            event.preventDefault();

            })
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
        })
    }



    deleteProjects(div){
        let projectsDiv = document.querySelector('.projects')       
        let deleteProjects = div.querySelector('.deleteProjects')
        deleteProjects.addEventListener('click',function () {
           projectsDiv.removeChild(div)
        })
    }

    createDiv = ()=> {
        let projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        let name = document.createElement('div')
        name.textContent=this.name;
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteProjects')
        let addButton = document.createElement('button')
        addButton.classList.add('addTaskButton')

        projectDiv.appendChild(name)
        projectDiv.appendChild(deleteButton)
        projectDiv.appendChild(addButton)
        return projectDiv
    }


}



export{projects}