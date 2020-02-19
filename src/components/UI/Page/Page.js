import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box } from '@material-ui/core'

const Page = ({ children }) => (
  <Container maxWidth='sm'>
    <Box display='flex' flexDirection='column' height='100vh'>
      {children}
    </Box>
  </Container>
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
