 // your code here
 document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value.trim();
    
    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      taskList.appendChild(taskItem);
      document.getElementById("new-task-description").value = "";
    }
  });
});

