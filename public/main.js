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
      if (card.rank === '10') {
        // Set the imageUrl of the card to the correct value
        card.imageUrl = './still/' + '10' + suit.slice(0, 1) + '.jpg'
      }

      cardDeck.push(card)
      console.log('card pushed to deck')
    }
  }
}
const shuffle = () => {
  for (let i = 0; i < cardDeck.length; i++) {
    const randomLocation = Math.floor(Math.random() * 52)
    const lastCard = cardDeck[i]
    cardDeck[i] = cardDeck[randomLocation]
    cardDeck[randomLocation] = lastCard
    // cardDeck.push(lastCard)
  }
}

const hit = () => {
  const takeCard = cardDeck.pop()

  const imageTag = document.createElement('img')
  imageTag.src = takeCard.imageUrl
  imageTag.setAttribute('class', 'card')
  const playerHand = document.querySelector('.player-1-hand')
  player1.push(takeCard)
  playerHand.appendChild(imageTag)
  if (player1.length > 2) {
    checkIfPlayerBust()
  }
}

const checkIfPlayerBust = () => {
  let sum = 0
  for (let i = 0; i < player1.length; i++) {
    console.log('cardpulling!', player1[i])
    sum = sum + player1[i].value
    console.log(sum)
  }
  if (sum > 21) {
    document.querySelector('.deal').disabled = true
    document.querySelector('.stay').disabled = true
    document.querySelector('.title').innerHTML = 'Bust'
    document.querySelector('.restart').style.display = 'block'
  }
}
const play = () => {
  document.querySelector('.deal').disabled = false
  document.querySelector('.stay').disabled = false
  shuffle()
  hit()
  hit()
  const takeCard = cardDeck.pop()
  const takeCard2 = cardDeck.pop()
  dealer.push(takeCard, takeCard2)
  console.log(dealer, player1)
  document.querySelector('.play').disabled = true
}

const restart = () => {
  document.querySelector('.play').disabled = false
  document.querySelector('.player-1-hand').innerHTML = ''
  document.querySelector('.dealers-hand').innerHTML = ''
  cardDeck = []
  player1 = []
  dealer = []
  main()
  document.querySelector('.restart').style.display = 'none'
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
  document.querySelector('.deal').disabled = true
  document.querySelector('.stay').disabled = true
  let sum = 0
  for (let i = 0; i < dealer.length; i++) {
    sum = sum + dealer[i].value
  }
  if (sum >= 17) {
    checkWinner()
  } else {
    // dealToDealer()
  }
}
const checkWinner = () => {
  let playerSum = 0
  let dealerSum = 0
  for (let i = 0; i < player1.length; i++) {
    playerSum = playerSum + player1[i].value
  }
  for (let i = 0; i < dealer.length; i++) {
    dealerSum = dealerSum + dealer[i].value
  }
  if (playerSum > dealerSum) {
    document.querySelector('.title').innerHTML = 'You Win'
  } else if (playerSum < dealerSum) {
    document.querySelector('.title').innerHTML = 'Dealer Wins'
  } else {
    document.querySelector('.title').innerHTML = 'Tie'
  }
  document.querySelector('.restart').style.display = 'block'
}

const dealToDealer = () => {
  playerSum = 0
  dealerSum = 0
  for (let i = 0; i < dealer.length; i++) {
    dealerSum = dealerSum + dealer[i].value
  }
  for (let i = 0; i < player1.length; i++) {
    playerSum = playerSum + player1[i].value
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deal').addEventListener('click', hit)
document.querySelector('.play').addEventListener('click', play)
document.querySelector('.stay').addEventListener('click', stay)
document.querySelector('.restart').addEventListener('click', restart)
// const dealOneCardToPlayer = () => {
//   const firstCard = deck.pop()
//   console.log(firstCard)
//   const imageTag = document.createElement('img')
//   imageTag.src = firstCard.imgUrl
//   document.querySelector('.card-front').appendChild(imageTag)
//   playerHand.push(firstCard)
//  }
