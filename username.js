const form = document.querySelector('#jsForm'),
  input = form.querySelector('input'),
  greeting = document.querySelector('#jsGreeting')

const USER_LS = 'username',
  SHOWING_CN = 'showing'

const sayHello = (username) => {
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `hello, ${username}`
}

const saveName = (username) => {
  localStorage.setItem(USER_LS, username)
}

const onSubmit = (event) => {
  event.preventDefault()
  const username = input.value
  sayHello(username)
  saveName(username)
}

const askForName = () => {
  form.classList.add(SHOWING_CN)
  form.addEventListener('submit', onSubmit)
}

const loadname = () => {
  const username = localStorage.getItem(USER_LS)
  if (username) {
    sayHello(username)
  } else {
    askForName()
  }
}

loadname()
