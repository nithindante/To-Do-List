import { newArr } from "./dom";




let projectsArr = []

let hoverEffect = function () {
    let addButton = document.querySelector('.addButton')
    addButton.addEventListener('click',function () {

        tasksAdd();
    })
};

let tasksAdd = function (div) {
    let task = document.querySelectorAll('.task')
    for (let j = 0; j < task.length; j++) {
        task[j].classList.add('switch')

    }
}
export {hoverEffect,projectsArr}


// [{"name":"a","arr":[{"title":"q","description":"q","dueDate":"2024-07-01","priority":1,"checked":false,"tasksDiv":{}}],"divArr":[{}]},{"arr":[],"divArr":[]}]"