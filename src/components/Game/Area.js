import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import useStateWithCallback from 'use-state-with-callback'

import StellarButton from '../UI/Button'
import StellarCard from '../UI/Card/Card'

import { randomItem } from '../../utils'

const Area = ({ player, data, attributes, board, setBoard }) => {
  const [resource, setResource] = useState(null)

  const handleClick = () => {
    const randomResource = randomItem(data)
    setResource(randomResource)
    setBoard({ ...board, [player]: Number(randomResource[attributes[0]]) })
  }

  if (resource) {
    return <StellarCard title={resource.name} resource={resource} attributes={attributes} />
  }

  return <StellarButton onClick={handleClick}>DRAW THE CARD</StellarButton>
}

Area.propTypes = {
  player: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  // setWinner: PropTypes.func.isRequired
}

export default Area
