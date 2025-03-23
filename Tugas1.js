document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    taskInput.value = "";
    loadTasks();
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    let completedTasks = document.getElementById("completedTasks");
    taskList.innerHTML = "";
    completedTasks.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        
        let span = document.createElement("span");
        span.textContent = task.text + (task.completed ? " - Selesai didaki" : " - OTW Mendaki");
        span.className = "task-status";
        
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Selesai";
        completeBtn.className = "completeBtn";
        completeBtn.onclick = () => toggleTask(index);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Hapus";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = () => deleteTask(index);
        
        li.appendChild(span);
        if (!task.completed) li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        
        if (task.completed) {
            completedTasks.appendChild(li);
        } else {
            taskList.appendChild(li);
        }
    });
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();

}