import {createForm,inputDetails,editForm} from './task'
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
        checked.setAttribute('id','checkbox')
        if(newTask.checked)
            {
                checked.checked = true
            }
        displayedTextHeader.appendChild(name)
        displayedTextHeader.appendChild(dueDate)
        displayedTextHeader.appendChild(priority)

        displayedText.appendChild(displayedTextHeader)
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
        deleteButton.classList.add('deleteTasks')
        let editButton = document.createElement('button')
        editButton.classList.add('edit')
        buttonsDiv.appendChild(deleteButton)
        buttonsDiv.appendChild(editButton)
        return buttonsDiv
    }


    editClick(div,task) {     
        let editCheckBox = div.querySelector('#checkbox')                                                               // Clicks the Edit button in each Tasks
        let editButton = div.querySelector('.edit')
        editButton.addEventListener('click',function () {
            if(editCheckBox.checked === true){
                task.checked = true
            }  
            toggleClasses();
            editForm(div,task);       
            event.preventDefault();
        })
    };

    createNewTask(){
        let addTaskButton = document.querySelector('.addTaskButton')
        addTaskButton.addEventListener('click',function () {   
            createForm();
            toggleClasses();
            inputDetails();                         // Clicks the Add button for Tasks
            event.preventDefault();
            
        })}
    inputDetails(){

    }
}




export {toDoList}