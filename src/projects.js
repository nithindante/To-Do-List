import { toDoList,editClick } from "./toDo";

let projects = class{
    constructor(name)
    {
        this.name = name
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
        toDo.createNewTask()
    }



    newProject(){

        let addButton = document.querySelector('.addButton')
        addButton.addEventListener('click',()=>{
            let div = this.createDiv();
            let projectsDiv = document.querySelector('.projects')
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
        name.textContent='Default Project';
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteProjects')
        projectDiv.appendChild(name)
        projectDiv.appendChild(deleteButton)
        return projectDiv
    }
}



export{projects}