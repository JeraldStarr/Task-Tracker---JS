function showForm() {
    document.addEventListener("click", handleBtnClick)
}

function handleBtnClick(e) {
    if (e.target.nodeName === "BUTTON") {
        toggleForm();
    }
}

function toggleForm() {
    document.querySelector("form").classList.toggle("notShow");
    changeBtnLabel();
}

function changeBtnLabel() {
    const btn = document.querySelector("button");
    const btnLabel = document.querySelector("form").classList.contains("notShow") ? 'Add' : 'Hide';

    btn.innerHTML = btnLabel;
    btn.classList.toggle('btn-bgt-hidden');
}

export {showForm};