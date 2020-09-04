// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(apiArticleTopics => {
        Object.keys(apiArticleTopics.data.articles).forEach(articleTopic => {
            apiArticleTopics.data.articles[articleTopic].forEach(element => {
                articleMaker(element, articleTopic)
            })
        })
    })
    .catch(err => {
        articleMaker(errorData, 'all')
        console.log(err)
    })


const articleBox = document.querySelector('.cards-container')

const articleMaker = ( {authorName, authorPhoto, headline}, topicClass) => {
    
    //Create elements
    const article = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorBox = document.createElement('div')
    const authorPicBox = document.createElement('div')
    const authorPic = document.createElement('img')
    const authorCredit = document.createElement('span')
    
    //Element structure
    articleBox.appendChild(article)
    article.appendChild(headlineDiv)
    article.appendChild(authorBox)
    authorBox.appendChild(authorPicBox)
    authorPicBox.appendChild(authorPic)
    authorBox.appendChild(authorCredit)
    
    //Class assignments
    article.classList.add('card', `topic-${topicClass}`)
    headlineDiv.classList.add('headline')
    authorBox.classList.add('author')
    authorPicBox.classList.add('img-container')

    //Element contents
    headlineDiv.textContent = headline
    authorPic.src = authorPhoto
    authorCredit.textContent = `By ${authorName}`

    article.addEventListener('click', () => {
        console.log(headline)
    })

    return article
}

const errorData = 
{
    "authorName": "Console log for more",
    "authorPhoto": "https://www.computerhope.com/jargon/e/error.gif",
    "headline": "Oops, this shouldn't happen. Sorry, check back later.",
    "id": "nada"
}