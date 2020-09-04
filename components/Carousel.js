/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselBox = document.querySelector('.carousel-container')
let currentIndex = 0

function carouselMaker() {
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const rightButton = document.createElement('div')
  const image1 = document.createElement('img')
  const image2 = document.createElement('img')
  const image3 = document.createElement('img')
  const image4 = document.createElement('img')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')
  leftButton.textContent = ('<')
  rightButton.textContent = ('>')
  image1.classList.add('caro-img', 'image1')
  image2.classList.add('caro-img', 'image2', 'active')
  image3.classList.add('caro-img', 'image3')
  image4.classList.add('caro-img', 'image4')
  image1.src = ('https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg')
  image2.src = ('https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg')
  image3.src = ('https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg')
  image4.src = ('https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg')

  carouselBox.appendChild(carousel)
  carousel.appendChild(leftButton)
  carousel.appendChild(image1)
  carousel.appendChild(image2)
  carousel.appendChild(image3)
  carousel.appendChild(image4)
  carousel.appendChild(rightButton)

  const updateImage = () => {
    document.querySelectorAll('.caro-img').forEach(element => {
      element.classList.remove('active')
    })
    if (currentIndex === 0){
      image1.classList.add('active')
    } else if (currentIndex === 1){
      image2.classList.add('active')
    }else if (currentIndex === 2){
      image3.classList.add('active')
    }else if (currentIndex === 3){
      image4.classList.add('active')
    }
  }

  leftButton.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = 3
    } else {
      currentIndex -= 1
    }
    updateImage()
  })
  rightButton.addEventListener('click', () => {
    if (currentIndex === 3) {
      currentIndex = 0
    } else {
      currentIndex += 1
    }
    updateImage()
  })
  return carousel
}

const carousel = carouselMaker()
carouselBox.append(carousel)    



    // if(image1.classList.contains('active')) {
    //   image1.classList.remove('active')
    //   image4.classList.add('active')
    // } else if (image2.classList.contains('active')) {
    //   image2.classList.remove('active')
    //   image1.classList.add('active')
    // } else if (image3.classList.contains('active')) {
    //   image3.classList.remove('active')
    //   image2.classList.add('active')
    // } else if (image4.classList.contains('active'))
