const todoForm = document.querySelector('#jsTodoForm'),
  todoInput = todoForm.querySelector('input'),
  todoList = document.querySelector('#jsTodoList')

const TODOS_LS = 'todos'

let todos = []

const saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos))
}

const removeTodo = (event) => {
  const todoItem = event.target.parentNode
  todoList.removeChild(todoItem)
  todos = todos.filter((todo) => todo.id !== todoItem.id)
  saveTodos()
}

const paintTodo = ({ value, id }) => {
  const todoItem = document.createElement('li')
  const todoSpan = document.createElement('span')
  const deleteButton = document.createElement('button')
  todoSpan.innerText = value
  deleteButton.innerText = '❌'
  deleteButton.addEventListener('click', removeTodo)
  todoItem.appendChild(deleteButton)
  todoItem.appendChild(todoSpan)
  todoList.appendChild(todoItem)
  todoItem.id = id
}

const onTodoSubmit = (event) => {
  event.preventDefault()
  if (!todoInput.value) {
    return
  }
  const newTodo = {
    id: Math.random().toString(10).substr(2, 10),
    value: todoInput.value,
  }
  todos.push(newTodo)
  paintTodo(newTodo)
  saveTodos()
  todoInput.value = ''
}

const loadTodos = () => {
  const savedTodos = localStorage.getItem(TODOS_LS)
  if (savedTodos) {
    todos = JSON.parse(savedTodos)
    todos.forEach((todo) => paintTodo(todo))
  }
}

const init = () => {
  loadTodos()
  todoForm.addEventListener('submit', onTodoSubmit)
}

init()
