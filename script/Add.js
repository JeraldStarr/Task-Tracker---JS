function addTask() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = {
            text: document.querySelector(".text").value,
            day: document.querySelector(".day").value,
            reminder: document.querySelector("input[type=checkbox]").value
        }
        if (!task.text || !task.day || !task.reminder) {
            alert("Please, provide all data to the form");
        } else {
            fetch('http://localhost:5001/tasks', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(task),
            })
        }
    })
}

export {addTask}