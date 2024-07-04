import { toDoList,editClick } from "./toDo";
import { hoverEffect,projectsArr } from "./logic.js";

let localProjectsArr = []
let userData
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

    addToLocal(){
            
                    localProjectsArr.push(this)
                    localStorage.setItem("Projects", JSON.stringify(localProjectsArr));
                    userData = JSON.parse(localStorage.getItem('Projects'))
    }

    addtoMultiple()
    {
        localStorage.clear()
        localProjectsArr.push(this)
        localStorage.setItem("Projects", JSON.stringify(localProjectsArr));
        userData = JSON.parse(localStorage.getItem('Projects'))
    }
    newProject(){
            let  j = 0
            let div = this.createDiv();
            projectsArr.push(div)
            
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
            let projectsArr2 = document.querySelectorAll('.project')
            if (projectsArr2.length==1) 
            {
                let input = projectsArr2[0].querySelector('input')     
                projectsArr2[0].addEventListener('submit', ()=> {
                    this.name = input.value;
                    
                     if (j==0) 
                     {
                        this.addToLocal()
                     }
                     
                    let toDo = new toDoList;
                    toDo.createNewTask(this)
                    event.preventDefault();
                    j++;
                })
            }
            else if(projectsArr2.length>1)
            {
                let count = 0
                for (let i = 0; i < projectsArr2.length; i++) 
                {
                   
                    let input = projectsArr2[i].querySelector('input')
                    
                    projectsArr2[i].addEventListener('submit',()=>{
                        console.log('andi')
                        this.name = input.value;
                        if(count==0)
                        {
                        this.addtoMultiple()
                        }
                        count++
                    let toDo = new toDoList;
                    toDo.createNewTask(this,j)
                    event.preventDefault();
                    }) 
                }
                j++;
            }
            this.touch(div)
            
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

    }

    deleteProjects(div){
        let projectsDiv = document.querySelector('.projects')       
        let deleteProjects = div.querySelector('.deleteProjects')
        deleteProjects.addEventListener('click', () =>{
        // localStorage.clear('project')
        projectsDiv.removeChild(div)
        let task = document.querySelector('.tasks')
        let tasks = this.divArr
            for (let i = 0; i < tasks.length; i++) {
                task.removeChild(tasks[i])
                
            }
        
        })
    }

    createDiv = (newArr)=> {
        let projectDiv = document.createElement('form')
        projectDiv.classList.add('project')
        let name = document.createElement('input')
        
        // name.textContent=this.name;
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteProjects')
        let addButton = document.createElement('button')
        addButton.classList.add('addTaskButton')
        addButton.setAttribute('type','submit')
        addButton.setAttribute('value','submit')
        projectDiv.appendChild(name)
        projectDiv.appendChild(deleteButton)
        projectDiv.appendChild(addButton)
        return projectDiv
    }
}



export{projects,userData}