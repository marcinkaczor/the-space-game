import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Box } from '@material-ui/core'

const PageHeader = ({ children, home, addition }) => (
  <Box display='flex' justifyContent='space-between'>
    <Typography variant={home ? 'h1' : 'h2'} align={home ? 'center' : 'left'}>{children}</Typography>
    {addition && <Typography variant='h2'>{addition}</Typography>}
  </Box>
)

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
  addition: PropTypes.string
}

export default PageHeader
