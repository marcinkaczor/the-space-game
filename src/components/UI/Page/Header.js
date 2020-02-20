import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const PageHeader = ({ children, home }) => (
  <Typography variant={home ? 'h1' : 'h2'} align={home ? 'center' : 'left'}>{children}</Typography>
)

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool
}

export default PageHeader
