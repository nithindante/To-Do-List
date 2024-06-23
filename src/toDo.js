import {createForm,inputDetails} from './task'
import {toggleClasses} from './dom'
let toDoList = class {
    constructor(title,description,dueDate,priority,checked)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
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

createDiv(newTask={}) {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        let displayedText = document.createElement('div')
        displayedText.classList.add('displayedText')
        let displayedTextHeader = document.createElement('div')
        displayedTextHeader.classList.add('displayedTextHeader')
        let name = document.createElement('div')
        name.textContent=newTask.title
        
        let dueDate = document.createElement('div')
        dueDate.textContent = newTask.dueDate

        let priority = document.createElement('div')
        priority.textContent=newTask.priority
        // let description = document.createElement('div')
        // description.textContent = newTask.description

        let checked = document.createElement('input')
        checked.setAttribute('type','checkbox')
        if(newTask.checked)
            {
                checked.checked = true
            }
        displayedTextHeader.appendChild(name)
        displayedTextHeader.appendChild(dueDate)
        displayedTextHeader.appendChild(priority)

        displayedText.appendChild(displayedTextHeader)
        // displayedText.appendChild(description)
        taskDiv.appendChild(displayedText)
        let buttons = this.createButtons()
        buttons.appendChild(checked)
        taskDiv.appendChild(buttons)
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
            // createForm();
            // toggleClasses();
            console.log('andi')
            event.preventDefault();
        })};

    createNewTask(){
        let addTaskButton = document.querySelector('.addTaskButton')
        addTaskButton.addEventListener('click',function () {
            createForm();
            toggleClasses();
            inputDetails();
             // editClick();
            event.preventDefault();
            
        })}

    inputDetails(){

    }
}




export {toDoList}