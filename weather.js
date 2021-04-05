const API_KEY = '1529f48477c14fa23afd28b65f7f507e'
const COORDS = 'coords'

const weather = document.querySelector('#jsWeather')

const paintWeather = (temperature, place) => {
  weather.innerText = `${place}에 계시는군요! 현재는 ${temperature}도입니다.`
}

const getWeather = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
  const data = await response.json()
  const temperature = data.main.temp
  const place = data.name
  return [temperature, place]
}

const saveCoords = (coords) => {
  localStorage.setItem(COORDS, JSON.stringify(coords))
}

const onGeoSuccess = (position) => {
  const {
    coords: { longitude, latitude },
  } = position
  const coordsObj = { longitude, latitude }
  saveCoords(coordsObj)
}

const onGeoError = (positionError) => {
  console.error("Can't access geo location", positionError)
}

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
}

const loadCoords = async () => {
  weather.innerText = `브라우저 위치 정보 수집을 허용해주세요`
  const loadedCoords = localStorage.getItem(COORDS)
  if (!loadedCoords) {
    askForCoords()
  } else {
    const { latitude, longitude } = JSON.parse(loadedCoords)
    const [temperature, place] = await getWeather(latitude, longitude)
    paintWeather(temperature, place)
  }
}

loadCoords()
