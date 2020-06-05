import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import colors from './colors'

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: colors.black,
    // },
    // secondary: {
    //   main: colors.black,
    // },
  },
  colors,
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    h1: {
      fontSize: 64,
      color: colors.black,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'center',
      letterSpacing: '0.5px',
    },
    h2: {
      fontSize: 32,
      color: colors.black,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'center',
      letterSpacing: '0.5px',
    },
    h3: {
      fontSize: 24,
      color: colors.black,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '150%',
      textAlign: 'center',
      letterSpacing: '0.5px',
    },
  },
})

export default theme
