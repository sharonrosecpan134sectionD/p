document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const taskText = taskInput.value.trim(); // Trim whitespace
  
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      const checkbox = li.querySelector('input[type="checkbox"]');
      const deleteButton = li.querySelector('.delete-btn');
  
      checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
      });
  
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
      });
  
      taskList.appendChild(li);
    }
  });
  