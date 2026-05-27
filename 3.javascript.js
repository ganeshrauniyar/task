let taskList = document.getElementById("taskList");

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Enter a task");
    return;
  }

  let li = document.createElement("li");

  li.innerHTML = `
    <span onclick="completeTask(this)">
      ${taskText}
    </span>
    <button onclick="deleteTask(this)">X</button>
  `;

  taskList.appendChild(li);

  saveData();

  input.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
  saveData();
}

function completeTask(task) {
  task.classList.toggle("completed");
  saveData();
}

function saveData() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function showTasks() {
  taskList.innerHTML = localStorage.getItem("tasks");
}

showTasks();