// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(apiData => {
        Object.keys(apiData.data.articles).forEach(articleTopic => {
            tabMaker(articleTopic)
        });
    })
    .catch(err => {
        console.log(err)
    })


const tabBox = document.querySelector('.topics')

const tabMaker = (topics) => {
    const tab = document.createElement('div')

    tabBox.appendChild(tab)
    
    tab.classList.add('tab', `button-${topics}`)

    tab.textContent = topics


    tab.addEventListener('click', () => {
        const articlesWithTopic = document.querySelectorAll(`.topic-${topics}`)
        const articlesAll = document.querySelectorAll('.card')
        if(tab.classList.contains('button-all')) {
            articlesAll.forEach(element => {
                element.classList.remove('inactive')
            })
        } else {
            articlesAll.forEach(element => {
                element.classList.add('inactive')
            })
            articlesWithTopic.forEach(element => {
                element.classList.remove('inactive')
            })
        }
    })
}

tabMaker('all')