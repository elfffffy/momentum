const todoForm = document.querySelector('.todo_form');
const todoList = document.querySelector('.todo_list');
const todoInput = todoForm.querySelector('input');

let todos = [];

function saveTodos () {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(event) {
    const list = event.target.parentElement;
    list.remove();

    todos = todos.filter((item) => {
        return item.id !== parseInt(list.id);
    })
    saveTodos();
}

function showTodo(whatTodo) {
    const list = document.createElement('li');
    list.id = whatTodo.id;
    const checkbox = document.createElement('input');
    const text = document.createElement('span');
    const button = document.createElement('button');
    text.innerText = whatTodo.text;
    button.innerText = '❌';

    list.appendChild(checkbox);
    checkbox.type = 'checkbox';

    list.appendChild(text);
    
    list.appendChild(button);

    todoList.appendChild(list);

    button.addEventListener('click', deleteTodo);
}

function todoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = '';

    const newTodoObject = {
        text: newTodo,
        id: Date.now()
    }

    todos.push(newTodoObject);
    showTodo(newTodoObject);
    saveTodos();
}

todoForm.addEventListener('submit', todoSubmit);

const savedTodos = localStorage.getItem('todos');

if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(showTodo);
}


