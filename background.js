const body = document.querySelector('body')

const WIDTH = 1920,
  HEIGHT = 1080

const paintImage = (url) => {
  const backgroundImage = new Image()
  backgroundImage.src = url
  backgroundImage.classList.add('backgroundImage')
  body.prepend(backgroundImage)
}

const generateSeed = () => {
  return Math.random().toString().substr(2, 10)
}

const loadImage = async () => {
  const seed = generateSeed()
  const response = await fetch(
    `https://picsum.photos/seed/${seed}/${WIDTH}/${HEIGHT}`
  )
  paintImage(response.url)
}

;(() => {
  loadImage()
})()
