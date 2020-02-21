import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Caption = ({ title = 'Loading ...' }) => (
  <Typography variant='caption'>{title}</Typography>
)

Caption.propTypes = {
  title: PropTypes.string
}

export default Caption
