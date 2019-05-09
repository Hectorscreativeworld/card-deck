const suits = ['Diamond', 'Spades', 'clover', 'hearts']
const numbers = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'queen',
  'king'
]

const cardDeck = []

const main = () => {
  const button = document.getElementById('shuffle-Btn')
  button.addEventListener('click', function () {
    shuffle(cardDeck)
    console.log(cardDeck)
  })
  const deckImage = document.getElementById('deck-image')
  deckImage.addEventListener('click', function () {
    deal(cardDeck)
  })
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    for (let j = 0; j < numbers.length; j++) {
      const number = numbers[j]
      const card = number + ' of ' + suit
      cardDeck.push(card)
    }
  }
  shuffle(cardDeck)
  console.log(cardDeck)
}

function shuffle(cardDeck) {
  let j, x, i
  for (i = cardDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = cardDeck[i]
    cardDeck[i] = cardDeck[j]
    cardDeck[j] = x
  }
  return cardDeck
}

function deal(deck) {
  const hand = document.getElementById('hand')
  hand.innerHTML = ''
  const card = deck.shift()
  const cardDiv = document.createElement('div')
  cardDiv.innerHTML = card

  hand.appendChild(cardDiv)
}

document.addEventListener('DOMContentLoaded', main)