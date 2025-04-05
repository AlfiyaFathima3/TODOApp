document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";  
    }
  });
  
  function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    

    taskItem.querySelector('span').addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });
    
    
    taskItem.querySelector('.delete-btn').addEventListener('click', function () {
      taskItem.remove();
    });
  
    taskList.appendChild(taskItem);
  }
  