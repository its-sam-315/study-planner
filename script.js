function addTask() {
    let taskInput = document.getElementById("task");
    let timeInput = document.getElementById("time");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "" || timeInput.value === "") {
        alert("Please enter a task and set a reminder time!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = `📌 ${taskInput.value} - Reminder: ${timeInput.value}`;

    listItem.onclick = function() {
        taskList.removeChild(listItem);
    };

    taskList.appendChild(listItem);
    taskInput.value = "";
    timeInput.value = "";
}
