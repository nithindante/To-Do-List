import { toDoList,editClick } from "./toDo";
import { hoverEffect,projectsArr } from "./logic.js";
import {deleteTasks,enterDetails} from "./task.js"
import { toggleClasses,removeClasses } from "./dom.js";

let localProjectsArr = []
let userData
let times = 0 
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

    addToLocals(){
        let userLocal = JSON.parse(localStorage.getItem('Projects'))

        userLocal.push(this)
        localStorage.setItem("Projects", JSON.stringify(userLocal));
        userData = JSON.parse(localStorage.getItem('Projects'))

    }
    addtoMultiple(x)
    {
        if(x>0)
        {
            return
        }
        localStorage.clear()
        this.addToLocal()
    }
    newProject(){
            let  x = 0
            let div = this.createDiv();
            projectsArr.push(div)
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
            let projectsArr2 = document.querySelectorAll('.project')
            let len = projectsArr2.length
            for (let i = 0; i < len; i++) 
            {         
                    {                    
                    projectsArr2[i].addEventListener('submit', ()=> {   
                    if (projectsArr2[len-1].querySelector('input').value=='') 
                        {
                            return
                        }
                    else
                    {
                    let input = projectsArr2[i].querySelector('input')  
                        if(x>0)
                        {
                            if(i==(len-1))
                            {
                                this.name = input.value; 
                                let toDo = new toDoList;
                                toDo.createNewTask(this,i)
                                x++;
                                event.preventDefault();
                            }
                        }
                        else 
                        {
                        this.name = input.value;
                        let toDo = new toDoList;
                        this.addtoMultiple(x)
                        toDo.createNewTask(this,i)
                        x++;
                        event.preventDefault();
                        }
            } 
                })
                this.touch(div);
            }
        }
    // }
    }
    newProjects(){
        
        let  x = 0
        let div = this.createDiv();
        projectsArr.push(div)
        let projectsDiv = document.querySelector('.projects')
        projectsDiv.appendChild(div);
        this.deleteProjects(div);
        let projectsArr2 = document.querySelectorAll('.project')
       
        for (let i = 0; i < projectsArr2.length; i++) 
        {
            let input = projectsArr2[i].querySelector('input')     
            projectsArr2[i].addEventListener('submit', ()=> {
               
                this.name = input.value;
                let toDo = new toDoList;
                this.addToLocals()
                toDo.createNewTask(this,i)
                x++;
                event.preventDefault();
            })
        }

        this.touch(div); 
    }
    getProjects(userLocal,a){
            let i = 0
            let div = this.createDiv();
            projectsArr.push(div)
            let input = div.querySelector('input')
            input.value = userLocal.name
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);

            let addNewTasksButton =  div.querySelector('.addTaskButton')
            addNewTasksButton.addEventListener('click',  ()=> {
                    let toDo = new toDoList;
                    toDo.createNewTaskDiv(this,a)
                    i++;
                    event.preventDefault();

            })
            this.deleteProjects(div);
            this.getTasks(div,userLocal.arr)
            this.hideTasks()
            this.switchTasks(div)
    }


    addToExisting()
    {


    }
    hideTasks()
    {
        let tasks = document.querySelectorAll('.task')
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].classList.add('switch')
        }

    }


    getTasks(div,tasksArr){
        let count = 0
            for (let i = 0; i < tasksArr.length; i++) 
            {
                if (count<2) {
                    this.createTasks(tasksArr[i],times);
                }
            }

}

    createTasks(task,times){


        let newTask = new toDoList(task.title,task.description,task.dueDate, task.priority,task.checked)
        this.touchTasks(newTask,times);
    }

    switchTasks(div,count = 0)
    {

        div.addEventListener('click', () =>{
            let tasks = document.querySelectorAll('.task')
            for (let i = 0; i < tasks.length; i++) {
            tasks[i].classList.add('switch')
            }

            for (let i = 0; i < this.divArr.length; i++) 
            {
                count ++;
                this.divArr[i].classList.remove('switch')
            }
        })

    }


    touchTasks(newTask,times)
    {
        
        let newDiv = newTask.createDiv(newTask)
        this.divArr.push(newDiv)
        let newTasks = this.divArr
        newTask.tasksDiv.appendChild(newDiv)
        deleteTasks(newDiv,newTask)
        newTask.editClick(newDiv,newTask)
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