import {createForm,inputDetails} from './task'
import {toggleClasses} from './dom'
let toDoList = class {
    constructor(title,description,dueDate,priority)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tasksDiv = document.querySelector('.tasks')
    }

    createTasksDiv(){
        let tasksHeader = document.createElement('div')
        tasksHeader.classList.add('tasksHeader')

        let tasksHeading = document.createElement('h3')
        tasksHeading.textContent='Tasks'

        let addButton = document.createElement('button')
        addButton.classList.add('addTaskButton')

        tasksHeader.appendChild(tasksHeading)
        tasksHeader.appendChild(addButton)
        this.tasksDiv.appendChild(tasksHeader)
        
        // let taskDiv = this.createDiv();
        // this.tasksDiv.appendChild(taskDiv)
    }

createDiv() {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        let name = document.createElement('div')
        taskDiv.appendChild(name)
        taskDiv.appendChild(this.createButtons())
        return taskDiv
    }

    createButtons(){
        let buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttons')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        editButton.classList.add('edit')
        buttonsDiv.appendChild(deleteButton)
        buttonsDiv.appendChild(editButton)
        return buttonsDiv
    }

    editClick() {
        let editButton = document.querySelector('.edit')
        editButton.addEventListener('click',function () {
            createForm();
            toggleClasses();
            
            event.preventDefault();
        })};

    newTask(){
        let addTaskButton = document.querySelector('.addTaskButton')
        addTaskButton.addEventListener('click',function () {
            createForm();
            toggleClasses();
            inputDetails();
            event.preventDefault();
        })}


}




export {toDoList}