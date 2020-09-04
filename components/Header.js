// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

function Header() {

    const header = document.createElement('div')
    const date = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const tempurature = document.createElement('span')

    header.classList.add('header')
    date.classList.add('date')
    tempurature.classList.add('temp')

    date.textContent = 'MARCH 28, 2020'
    headerH1.textContent = 'Lambda Times'
    tempurature.textContent = '98°'

    header.appendChild(date)
    header.appendChild(headerH1)
    header.appendChild(tempurature)

return header
}

const header = Header()
headerContainer.append(header)
