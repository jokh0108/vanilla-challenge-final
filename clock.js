const clock = document.getElementById('jsClock')

const ONE_SECOND = 1000

const makeTwoDigits = (digit) => {
  return digit < 10 ? '0' + digit : digit
}

const paintClock = () => {
  const current = new Date()
  const hours = makeTwoDigits(current.getHours())
  const minutes = makeTwoDigits(current.getMinutes())
  const seconds = makeTwoDigits(current.getSeconds())
  clock.innerText = `지금은 ${hours}시 ${minutes}분 ${seconds}초 입니다.`
}

paintClock()

setInterval(paintClock, ONE_SECOND)
