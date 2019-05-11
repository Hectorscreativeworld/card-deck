const suits = ['Diamond', 'Spades', 'Clover', 'Hearts']
const faces = [
  {
    rank: 'Ace',
    value: 11
  },
  {
    rank: '2',
    value: 2
  },
  {
    rank: '3',
    value: 3
  },
  {
    rank: '4',
    value: 4
  },
  {
    rank: '5',
    value: 5
  },
  {
    rank: '6',
    value: 6
  },
  {
    rank: '7',
    value: 7
  },
  {
    rank: '8',
    value: 8
  },
  {
    rank: '9',
    value: 9
  },
  {
    rank: '10',
    value: 10
  },
  {
    rank: 'Jack',
    value: 10
  },
  {
    rank: 'Queen',
    value: 10
  },
  {
    rank: 'King',
    value: 10
  }
]

let cardDeck = []
let player1 = []
let dealer = []

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    for (let j = 0; j < faces.length; j++) {
      const card = {
        rank: faces[j].rank,
        value: faces[j].value,
        suit: suits[i],
        imageUrl:
          './still/' + faces[j].rank.slice(0, 1) + suit.slice(0, 1) + '.jpg'
      }
      cardDeck.push(card)
      console.log('card pushed to deck')
    }
  }
}
const shuffle = () => {
  for (let i = 52; i > 1; i--) {
    const randomLocation = Math.floor(Math.random() * i)
    const lastCard = cardDeck[i]
    cardDeck[i] = cardDeck[randomLocation]
    cardDeck[randomLocation] = lastCard
    cardDeck.push(lastCard)
  }
}

const dealCard = () => {
  const takeCard = cardDeck.pop()

  const imageTag = document.createElement('img')
  imageTag.src = takeCard.imageUrl
  imageTag.setAttribute('class', 'card')
  const playerHand = document.querySelector('.player-1-hand')
  player1.push(takeCard)
  playerHand.appendChild(imageTag)
}

const play = () => {
  shuffle()
  dealCard()
  dealCard()
  const takeCard = cardDeck.pop()
  const takeCard2 = cardDeck.pop()
  dealer.push(takeCard, takeCard2)
  console.log(dealer, player1)
}

const stay = () => {
  const dealHand = document.querySelector('.dealers-hand')
  const card1 = document.createElement('img')
  const card2 = document.createElement('img')
  card1.src = dealer[0].imageUrl
  card2.src = dealer[1].imageUrl
  card1.setAttribute('class', 'card')
  card2.setAttribute('class', 'card')
  dealHand.appendChild(card1)
  dealHand.appendChild(card2)
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deal').addEventListener('click', dealCard)
document.querySelector('.play').addEventListener('click', play)
document.querySelector('.stay').addEventListener('click', stay)
// const dealOneCardToPlayer = () => {
//   const firstCard = deck.pop()
//   console.log(firstCard)
//   const imageTag = document.createElement('img')
//   imageTag.src = firstCard.imgUrl
//   document.querySelector('.card-front').appendChild(imageTag)
//   playerHand.push(firstCard)
//  }
