import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StellarButton from '../../components/UI/Button'
import StellarCard from '../../components/UI/Card/Card'

const Player = ({ data }) => {
  const [resource, setResource] = useState(null)

  const handleClick = e => {
    e.preventDefault()
    setResource(data[Math.floor(Math.random() * data.length)])
  }

  return (
    <>
      {!resource ? (
        <StellarButton onClick={handleClick}>DRAW THE CARD</StellarButton>
      ) : (
        <StellarCard resource={resource} />
      )}
    </>
  )
}

Player.propTypes = {
  data: PropTypes.array.isRequired
}

export default Player
