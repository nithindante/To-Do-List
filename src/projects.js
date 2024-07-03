import { toDoList,editClick } from "./toDo";
import { hoverEffect,projectsArr } from "./logic.js";

let projects = class{
    
    constructor(name)
    {
        this.name = name
        this.arr = []
        this.divArr = []
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


         let toDo = new toDoList;
         toDo.createTasksDiv()

       
        
        
    }


    newProject(){
            let div = this.createDiv();
            projectsArr.push(div)
            let projectsDiv = document.querySelector('.projects')

            div.querySelector('.addTaskButton').addEventListener('click',()=>{
                let toDo = new toDoList;
                toDo.createNewTask(this)
                event.preventDefault();
            })

            this.touch(div)
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
    }

    touch(div){
        div.addEventListener('click', () =>{
            let tasks = this.divArr
            if (tasks.length==0)
                {
                  let newTasks =  document.querySelectorAll('.task')
                  for (let i = 0; i < newTasks.length; i++) {
                    newTasks[i].classList.add('switch')
                 }
                }
            this.addSwitch();
            for (let i = 0; i < tasks.length; i++) 
            {
                tasks[i].classList.remove('switch')
            }
            
        })
    }

    addSwitch(){
        if (!document.querySelectorAll('.task'))
            {
                return
            }
        else{
            
                let newTasks =  document.querySelectorAll('.task')
                for (let i = 0; i < newTasks.length; i++) {
                    if (newTasks[i]) {
                        newTasks[i].classList.add('switch')
                    }
                }

        }
            // let newtasks = document.querySelectorAll('.tasks')
            // console.log(newTasks)

            //         for (let i = 0; i < newTasks.length; i++) {
                    
            //         if (newTasks[i]) {
            //             newTasks[i].classList.add('switch')
            //         }
            //     }

    }

    deleteProjects(div){
        let projectsDiv = document.querySelector('.projects')       
        let deleteProjects = div.querySelector('.deleteProjects')
        deleteProjects.addEventListener('click',function () {
           projectsDiv.removeChild(div)
        })
    }

    createDiv = (newArr)=> {
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