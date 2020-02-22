import { createMuiTheme } from '@material-ui/core/styles'

const color = '#FAFAFA'

const theme = createMuiTheme({
  typography: {
    h1: {
      color: color,
      fontFamily: '"Press Start 2P"',
      fontSize: '2.75rem',
      letterSpacing: '.75rem',
      lineHeight: 1.5,
      paddingTop: '4rem',
      paddingBottom: '4rem'
    },
    h2: {
      color: color,
      fontFamily: '"Press Start 2P"',
      fontSize: '1rem',
      letterSpacing: '0rem',
      lineHeight: 1.5,
      paddingTop: '2rem',
      paddingBottom: '2rem'
    },
    caption: {
      color: color,
      fontSize: '.825rem'
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: color,
        '&$focused': {
          color: color
        }
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
    MuiFormControl: {
      root: {
        marginBottom: '40px'
      }
    },
    MuiInputBase: {
      root: {
        color: color
      }
    },
    MuiSelect: {
      icon: {
        color: color
      }
    },
    MuiCard: {
      root: {
        width: '140px',
        height: '240px',
        marginLeft: '2vw',
        marginRight: '2vw',
        dispay: 'flex',
        justifyContent: 'space-between'
      }
    },
    MuiCardHeader: {
      root: {
        flexDirection: 'column',
        paddingBottom: '8px'
      },
      avatar: {
        marginRight: 0,
        marginBottom: '.5rem'
      },
      content: {
        textAlign: 'center'
      },
      title: {
        height: '40px'
      }
    },
    MuiCardContent: {
      root: {
        paddingTop: '8px'
      }
    },
    MuiSnackbarContent: {
      root: {
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: color
      }
    },
    MuiTableCell: {
      root: {
        fontSize: '.7rem'
      }
    }
  }
})

export { color }

export default theme
