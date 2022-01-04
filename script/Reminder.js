function setReminder() {
    const tasks = document.querySelectorAll(".task");
    if (tasks) {
        tasks.forEach(task => task.addEventListener("dblclick", handleTaskDblClick));
    }
}

function handleTaskDblClick() {
    fetch(`http://localhost:5001/tasks/${this.dataset.id}`, {
        method: "GET",
    })
    .then(res => res.json())
    .then(data => updateReminderValue(data, this.dataset.id))
}

function updateReminderValue(data, id) {
    data.reminder = !data.reminder;
    fetch(`http://localhost:5001/tasks/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

}

export {setReminder};