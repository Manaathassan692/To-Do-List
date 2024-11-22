// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add a task
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;

    todoList.appendChild(listItem);
    todoInput.value = '';

    // Add delete functionality
    listItem.querySelector('.delete-btn').addEventListener('click', () => {
      listItem.remove();
    });
  } else {
    alert('Please enter a task!');
  }
});
