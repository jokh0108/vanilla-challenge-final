const form = document.querySelector('#jsForm'),
  input = form.querySelector('input'),
  greeting = document.querySelector('#jsGreeting')

const USER_LS = 'username',
  SHOW_CN = 'show'


const sayHello = (username) => {
  form.classList.remove(SHOW_CN)
  greeting.classList.add(SHOW_CN)
  greeting.innerText = `안녕하세요, ${username}님!`
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
  form.classList.add(SHOW_CN)
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
