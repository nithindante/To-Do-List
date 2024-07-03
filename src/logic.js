// let hoverEffect = function () {
//     let project = document.querySelector('.project')
//     project.addEventListener('click',function () {
//         console.log('andi')
//     })
// };

import { newArr } from "./dom";

// export {hoverEffect}


let projectsArr = []

let hoverEffect = function () {
    let addButton = document.querySelector('.addButton')
    addButton.addEventListener('click',function () {
        tasksAdd();
    })
};

let touchEffect = (function () {
    let projects  = document.querySelectorAll('.project')
    let addButton = document.querySelector('.addButton')
    addButton.addEventListener('click',function () {
        console.log('mansi')
    })
});

let tasksAdd = function (div) {
    let task = document.querySelectorAll('.task')
    for (let j = 0; j < task.length; j++) {
        task[j].classList.add('switch')

    }
}
export {hoverEffect,projectsArr}