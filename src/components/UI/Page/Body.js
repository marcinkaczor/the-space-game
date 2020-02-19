import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

const PageBody = ({ children, column }) => (
  <Box
    flex={1}
    alignSelf='center'
    display='flex'
    alignItems='center'
    flexDirection={column && 'column'}
    justifyContent={column && 'center'}
  >
    {children}
  </Box>
)

PageBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageBody
