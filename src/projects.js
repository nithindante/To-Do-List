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
        toDo.newTask()
    }



    newProject(){
        let addButton = document.querySelector('.addButton')
        addButton.addEventListener('click',()=>{
            let div = this.createDiv();
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
        })
    }


    createDiv = ()=> {
        let projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        let name = document.createElement('div')
        name.textContent='Default Project';
        let deleteButton = document.createElement('button')
        projectDiv.appendChild(name)
        projectDiv.appendChild(deleteButton)
        return projectDiv
    }
}



export{projects}