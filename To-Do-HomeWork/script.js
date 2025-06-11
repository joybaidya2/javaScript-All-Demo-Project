const todos = [];

const todoList = document.querySelector('.todo-list');
const footer = document.querySelector('.footer');
const itemsLeftSpan = footer.querySelector('span');
const clearCompletedBtn = document.querySelector('.clear');
const newTodoInput = document.querySelector('.new-todo');
const filterButtons = document.querySelectorAll('.filters button');

let currentFilter = 'All';

function allTodos() {
  todoList.innerHTML = '';

  let filteredTodos;
  if (currentFilter === 'All') {
    filteredTodos = todos;
  } 
  else if (currentFilter === 'Active') {
    filteredTodos = todos.filter(todo => !todo.isCompleted);
  } 
  else if (currentFilter === 'Completed') {
    filteredTodos = todos.filter(todo => todo.isCompleted);
  }

  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.classList.add('todo');
    if (todo.isCompleted) li.classList.add('completed');

    const spanCircle = document.createElement('span');
    li.appendChild(spanCircle);

    li.appendChild(document.createTextNode(todo.description));

    li.addEventListener('click', () => {
      todo.isCompleted = !todo.isCompleted;
      allTodos();
    });

    todoList.appendChild(li);
  });

  updateItemsLeft();
}

function updateItemsLeft() {
  const incompleteCount = todos.filter(todo => !todo.isCompleted).length;
  itemsLeftSpan.textContent = `${incompleteCount} items left`;
}

clearCompletedBtn.addEventListener('click', () => {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].isCompleted) {
      todos.splice(i, 1);
    }
  }
  allTodos();
});

newTodoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const description = newTodoInput.value.trim();
    if (description) {
      todos.push({ description, isCompleted: false });
      newTodoInput.value = '';
      allTodos();
    }
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.textContent;
    allTodos();
  });
});

window.onload = () => {
  allTodos();
};
