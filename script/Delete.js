function deleteTask() {
    document.querySelector("#root").addEventListener("click", handleDeleteBtnClick)
}

function handleDeleteBtnClick(e) {
    if (e.target.nodeName === "SPAN") {
        fetch(`http://localhost:5001/tasks/${e.target.parentElement.parentElement.dataset.id}`,{
            method: "DELETE",
        })
    }
}

export {deleteTask}