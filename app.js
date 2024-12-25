document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText === '') return;

  const todoList = document.getElementById('todo-list');

  // Create new ToDo item
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item');

  const todoContent = document.createElement('span');
  todoContent.textContent = todoText;

  // Done button
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔️';
  doneBtn.classList.add('done');
  doneBtn.addEventListener('click', () => {
    todoItem.classList.toggle('strike');
  });

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.classList.add('edit');
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your ToDo:', todoContent.textContent);
    if (newText) {
      todoContent.textContent = newText;
    }
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });

  // Append to ToDo item
  todoItem.appendChild(todoContent);
  todoItem.appendChild(doneBtn);
  todoItem.appendChild(editBtn);
  todoItem.appendChild(deleteBtn);

  // Append to list
  todoList.appendChild(todoItem);

  // Clear input
  todoInput.value = '';
}
