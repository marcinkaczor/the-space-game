import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { color } from '../../Theme'

const StyledButton = withStyles({
  root: {
    color: color,
    borderColor: color,
    marginLeft: '6px',
    marginRight: '6px'
  }
})(Button)

const StellarButton = ({ ...props }) => <StyledButton variant='outlined' {...props} />

export default StellarButton
