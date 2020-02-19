import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Caption = ({ children }) => (
  <Typography variant='caption'>{children}</Typography>
)

Caption.propTypes = {
  children: PropTypes.node.isRequired
}

export default Caption
