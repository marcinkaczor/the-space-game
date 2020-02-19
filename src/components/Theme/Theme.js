import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa'
    }
  },
  typography: {
    h1: {
      color: '#fafafa',
      fontFamily: '"Press Start 2P"',
      fontSize: '2.75rem',
      letterSpacing: '.75rem',
      lineHeight: 1.5,
      paddingTop: '4rem',
      paddingBottom: '4rem'
    },
    h2: {
      color: '#fafafa',
      fontFamily: '"Press Start 2P"',
      fontSize: '1rem',
      letterSpacing: '0rem',
      lineHeight: 1.5,
      paddingTop: '2rem',
      paddingBottom: '2rem'
    },
    caption: {
      color: '#fafafa',
      fontSize: '.825rem'
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#fafafa'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #fafafa'
        },
        '&:after': {
          borderBottom: '2px solid #fafafa'
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: '2px solid #fafafa'
        }
      }
    },
    MuiInputBase: {
      root: {
        color: '#fafafa'
      }
    },
    MuiSelect: {
      icon: {
        color: '#fafafa'
      }
    },
    MuiTableCell: {
      root: {
        fontSize: '.8rem'
      }
    }
  }
})

export default theme
