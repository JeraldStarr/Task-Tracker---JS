import {deleteTask} from './Delete.js';
import {showForm} from './ShowForm.js';
import {setReminder} from './Reminder.js'
import {addTask} from './Add.js';

function fetchTasks() {
    fetch('http://localhost:5001/tasks')
    .then(res => res.json())
    .then(data => buildTasks(data));
}

function buildTasks(data) {
    [...data].forEach(task => {
            const taskHTML = (
                `<div class="task ${task.reminder ? " reminder" : ""}" data-id=${task.id}>
                    <h3>${task.text}<span>x</span></h3>
                    <p>${task.day}</p>
                </div>`
            )
            insertContent(taskHTML);
        }
    )
    if (data.length === 0) {
        insertContent();
    }
    deleteTask();
    showForm();
    setReminder();
    addTask();
}

function insertContent(html = "<span>No tasks to show</span>") {
    document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeend", html)
}


fetchTasks();