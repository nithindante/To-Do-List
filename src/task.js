import { toggleClasses } from './dom';
import {toDoList} from './toDo'

let createForm = function(){
    let todoForm = document.createElement('form')
    todoForm.classList.add('todoForms')
    todoForm.setAttribute('id','forms')
    let formHeader = document.createElement('h3')
    formHeader.textContent ='To-Do-List'
    let titleLabel = document.createElement('label')
    titleLabel.setAttribute('for','title')
    titleLabel.textContent='Title'
    let title = document.createElement('input')
    title.setAttribute('id','title')
    title.required = true

    let dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for','dueDate')
    dueDateLabel.textContent = 'DueDate'
    let dueDate = document.createElement('input')
    dueDate.setAttribute('id','dueDate')
    dueDate.required=true;
    let priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for','priority')
    priorityLabel.textContent='Priority'
    let priority = document.createElement('input')
    priority.setAttribute('id','priority')

    let infoDiv = document.querySelector('.infoDiv')

    let titleDiv = document.createElement('div')
    titleDiv.classList.add('innerDiv')


    let dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('innerDiv')

    infoDiv.appendChild(todoForm)

    let priorityDiv = document.createElement('div')
    priorityDiv.classList.add('innerDiv')


    let descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('innerDiv')

    let descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for','description')
    descriptionLabel.textContent='Description';

    let description = document.createElement('textarea')
    description.setAttribute('id','description')

    todoForm.appendChild(formHeader)
    titleDiv.appendChild(titleLabel)
    titleDiv.appendChild(title)
     todoForm.appendChild(titleDiv)

    dueDateDiv.appendChild(dueDateLabel)
    dueDateDiv.appendChild(dueDate)
    todoForm.appendChild(dueDateDiv)
    priorityDiv.appendChild(priorityLabel)
    priorityDiv.appendChild(priority)
    todoForm.appendChild(priorityDiv)

    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(description)
    todoForm.appendChild(descriptionDiv)


    let buttonDiv = document.createElement('div')
    buttonDiv.classList.add('innerDiv')
    let newTaskButton = document.createElement('input')
    newTaskButton.setAttribute('type','submit')
    newTaskButton.setAttribute('value','Add')

    let checked = document.createElement('input')
    checked.setAttribute('type','checkbox')
    checked.setAttribute('id','checkbox')
    let checkedLabel = document.createElement('label')
    checkedLabel.setAttribute('for','checkbox')
    checkedLabel.textContent='Finished'
    let checkedDiv = document.createElement('div')
    checkedDiv.appendChild(checked)
    checkedDiv.appendChild(checkedLabel)
    buttonDiv.appendChild(newTaskButton)
    buttonDiv.appendChild(checkedDiv)
    todoForm.appendChild(buttonDiv)
};

let inputDetails = function(){
    let forms = document.querySelector('#forms')
    let titleInput = document.querySelector('#title')
    let dueDateInput = document.querySelector('#dueDate')
    let priorityInput = document.querySelector('#priority')
    let descriptionInput = document.querySelector('#description')
    forms.addEventListener('submit',function(){
        let newTask = new toDoList(titleInput.value,dueDateInput.value,priorityInput.value,descriptionInput.value)
        toggleClasses();
        forms.classList.toggle('switch')
        enterDetails(newTask);
        event.preventDefault();
        
    })
}

function enterDetails(newTask){
    console.log(newTask)
    let tasks = document.querySelector('.tasks')
    let toDo = new toDoList;
    let projectDiv = toDo.createDiv();
    tasks.appendChild(projectDiv)
}
function removeClasses() {
    let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.toggle('switch')
        tasks.classList.toggle('switch')
}
export{createForm,inputDetails}