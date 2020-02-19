import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const PageHeader = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
)

PageHeader.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageHeader
