const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");


function createTask(taskText) {
    const li = document.createElement("li"); // create element
    li.textContent = taskText; // add text
  
    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
  
    li.appendChild(deleteBtn); // append child
  
    list.appendChild(li); // add to DOM
  }