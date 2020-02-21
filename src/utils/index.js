const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

const randomItemFromArray = array => array[Math.floor(Math.random() * array.length)]

const getFirstChar = string => string.charAt(0)

export {
  capitalizeFirstLetter as capitalize,
  randomItemFromArray as randomItem,
  getFirstChar
}
