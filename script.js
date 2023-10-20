function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerHTML = taskText;
    
    newTask.onclick = function() {
        this.classList.toggle("completed");
    };

    taskList.appendChild(newTask);
    taskInput.value = "";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
