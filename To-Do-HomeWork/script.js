const todos = [];

const todoList = document.querySelector('.todo-list');
const itemsLeftSpan = document.querySelector('.footer > span');
const clearCompletedBtn = document.querySelector('.clear');
const newTodoInput = document.querySelector('.new-todo');
const filterButtons = document.querySelectorAll('.filters button');

let currentFilter = 'All'; // 'All', 'Active', 'Completed'

// Render todos based on current filter
function renderTodos() {
  todoList.innerHTML = '';

  // Filter todos based on filter selection
  let filteredTodos;
  if (currentFilter === 'All') {
    filteredTodos = todos;
  } else if (currentFilter === 'Active') {
    filteredTodos = todos.filter(todo => !todo.isCompleted);
  } else if (currentFilter === 'Completed') {
    filteredTodos = todos.filter(todo => todo.isCompleted);
  }

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.add('todo');
    if (todo.isCompleted) li.classList.add('completed');

    const spanCircle = document.createElement('span');
    li.appendChild(spanCircle);

    li.appendChild(document.createTextNode(todo.description));

    // Toggle completion when clicking the list item
    li.addEventListener('click', () => {
      // Find the real index in the todos array (not filtered)
      const realIndex = todos.findIndex(t => t === todo);
      todos[realIndex].isCompleted = !todos[realIndex].isCompleted;
      renderTodos();
    });

    todoList.appendChild(li);
  });

  updateItemsLeft();
}

// Update the count of incomplete todos
function updateItemsLeft() {
  const incompleteCount = todos.filter(todo => !todo.isCompleted).length;
  itemsLeftSpan.textContent = `${incompleteCount} item${incompleteCount !== 1 ? 's' : ''} left`;
}

// Clear all completed todos
clearCompletedBtn.addEventListener('click', () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].isCompleted) {
      todos.splice(i, 1);
    }
  }
  renderTodos();
});

// Add new todo on Enter key press
newTodoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const description = newTodoInput.value.trim();
    if (description) {
      todos.push({ description, isCompleted: false });
      newTodoInput.value = '';
      renderTodos();
    }
  }
});

// Filter buttons functionality
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.textContent;
    renderTodos();
  });
});

// Initial render on page load
window.onload = () => {
  renderTodos();
};
