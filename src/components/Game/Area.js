import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StellarButton from '../UI/Button'
import StellarCard from '../UI/Card/Card'

import { randomItem } from '../../utils'

const Area = ({ data, starships }) => {
  const [card, setCard] = useState(null)

  return (
    <>
      {!card ? (
        <StellarButton onClick={e => setCard(randomItem(data))}>DRAW THE CARD</StellarButton>
      ) : (
        <StellarCard card={card} starships={starships} />
      )}
    </>
  )
}

Area.propTypes = {
  data: PropTypes.array.isRequired,
  starships: PropTypes.bool
}

export default Area
