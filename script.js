const cardArray = [
  {
    name: 'banana',
    img: 'photos/banana.jpeg'

  },
  {
    name: 'appel',
    img: 'photos/appel.jpeg'

  },
  {
    name: 'orange',
    img: 'photos/orange.jpeg'

  },
  {
    name: 'watermelon',
    img: 'photos/watermelon.jpeg'

  },
  {
    name: 'grap',
    img: 'photos/grap.jpeg'

  },
  {
    name: 'kiwi',
    img: 'photos/kiwi.jpeg'

  },
  {
    name: 'kaki',
    img: 'photos/kaki.jpeg'

  },
  
  {
    name: 'avocado',
    img: 'photos/avocado.jpeg'

  }
];



const gard = document.getElementById("gard")
const score = document.getElementById("score")
let choosenCard = []
let choosenCardId = []  
const wonCard = []

 
   function createCard(cardData, index) {
   const card = document.createElement("img")
   card.setAttribute('src', 'photos/blank.jpeg') 
   card.setAttribute('data-id', index.toString()) 
   card.addEventListener('click', flipCard)
   gard.appendChild(card)
  }
  cardArray.forEach((cardData, index) => createCard(cardData, index))

// check for a match
function checkMatch() {
  const cards = document.querySelectorAll('img')
  const chooceOne = choosenCardId[0]
  const chooceTwo = choosenCardId[1]
  if (chooceOne == chooceTwo) {
    alert('you clicked the same card')
  }
  if ( choosenCard[0] == choosenCard[1]) {
    cards[chooceOne].setAttribute('src', 'photos/done.jpeg')
    cards[chooceTwo].setAttribute('src', 'photos/done.jpeg')
    cards[chooceOne].removeEventListener('click', flipCard)
    cards[chooceTwo].removeEventListener('click', flipCard)
    wonCard.push(choosenCard)
  } else {
    cards[chooceOne].setAttribute('src', 'photos/blank.jpeg')
    cards[chooceTwo].setAttribute('src', 'photos/blank.jpeg')
    
  }
  score.innerText = 'Your scor is ' + wonCard.length
  choosenCard = []
  choosenCardId = []

  if (wonCard.length == cardArray.length/2) {
        score.innerText = 'Your scor is ' + wonCard.length
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
 choosenCard.push(cardArray[cardId].name)
 choosenCardId.push(cardId)
 this.setAttribute('src', cardArray[cardId].img)
 if (choosenCard.length === 2) {
  setTimeout(checkMatch, 500)
 }

 cardArray.sort(() => 0.5 - Math.random());

}





