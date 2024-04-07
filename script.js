const inputBox = document.getElementsByName("new-task")[0];
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == "") {
        alert("You must write a task to be added to the list.");
    } else {
        let li = document.createElement("li");

        let checkButton = document.createElement("button");
        checkButton.className = "checkbox";

        let span = document.createElement("span");
        span.className = "task";
        span.textContent = inputBox.value;

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-task";

        li.appendChild(checkButton);
        li.appendChild(span);
        li.appendChild(deleteButton)
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.className == "checkbox") {
        e.target.parentElement.classList.toggle("checked");
        console.log(e, e.target.parentElement.classList);
    }
    else if (e.target.className == "delete-task") {
        e.target.parentElement.remove();
    }
});