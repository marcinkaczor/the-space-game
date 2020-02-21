import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StellarButton from '../UI/Button'
import StellarCard from '../UI/Card/Card'

import { randomItem } from '../../utils'

const Area = ({ data, attributes }) => {
  const [resource, setResource] = useState(null)

  return (
    <>
      {!resource ? (
        <StellarButton onClick={e => setResource(randomItem(data))}>DRAW THE CARD</StellarButton>
      ) : (
        <StellarCard title={resource.name} resource={resource} attributes={attributes} />
      )}
    </>
  )
}

Area.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Area
