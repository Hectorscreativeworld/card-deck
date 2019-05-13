function cardAction(a)
console.log(a)
switch (a) {
  case 'hit':
    playucard() // add new car to players hand
    break
  case 'hold':
    playend() // playout and calculate
    break
  case 'double':
    //double current bet remove calue from mydoolars
    playend() // playout and calculate
    break
  default:
    console.log('done')
    playend() // playout and calculate
}