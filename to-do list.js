const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function createTaskItem(taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text");
    textContainer.textContent = taskText;

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(textContainer);
    taskItem.appendChild(deleteButton);

    return taskItem;
}
