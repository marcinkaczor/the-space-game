const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

const randomItemFromArray = array => array[Math.floor(Math.random() * array.length)]

export {
  capitalizeFirstLetter as capitalize,
  randomItemFromArray as randomItem
}
