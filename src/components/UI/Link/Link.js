import React from 'react'
import { Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledLink = withStyles({
  root: {
    color: '#fafafa'
  }
})(Link)

const StellarLink = ({ ...props }) => <StyledLink {...props} />

export default StellarLink
