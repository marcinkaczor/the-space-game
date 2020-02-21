import * as PLAYERS from '../constants/players'

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

const randomItemFromArray = array => array[Math.floor(Math.random() * array.length)]

const getFirstChar = string => string.charAt(0)

const increaseScore = player => score => {
  if (player === PLAYERS.LEFT) return `${Number(score.split('-')[0]) + 1}-${Number(score.split('-')[1])}`
  if (player === PLAYERS.RIGHT) return `${Number(score.split('-')[0])}-${Number(score.split('-')[1]) + 1}`

  return score
}

export {
  capitalizeFirstLetter as capitalize,
  randomItemFromArray as randomItem,
  getFirstChar,
  increaseScore
}
