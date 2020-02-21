import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import useStateWithCallback from 'use-state-with-callback'

import StellarButton from '../UI/Button'
import StellarCard from '../UI/Card/Card'

import { randomItem } from '../../utils'

const Area = ({ player, data, attributes, board, setBoard }) => {
  const [item, setItem] = useState(null)

  const handleClick = () => {
    const selectedItem = randomItem(data)
    setItem(selectedItem)
    setBoard({ ...board, [player]: Number(selectedItem[attributes[0]]) })
  }

  if (item) {
    return <StellarCard title={item.name} item={item} attributes={attributes} />
  }

  return <StellarButton onClick={handleClick}>DRAW THE CARD</StellarButton>
}

Area.propTypes = {
  player: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Area
