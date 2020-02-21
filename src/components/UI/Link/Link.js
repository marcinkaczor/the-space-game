import { Link } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { color } from '../../Theme'

const StyledLink = withStyles({
  root: {
    color: color
  }
})(Link)

export default StyledLink
