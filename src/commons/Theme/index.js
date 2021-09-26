import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
   colors: {
      primary: '#ffeb3b',
      secondary: '#91ff35',
      error: '#f44336'
   },
   typography: {
      fontFamily: 'Tahoma'
   },
   shape: {
      borderRadius: 8,
      backgroundColor: '#ff9800',
      textColor: '#000',
      borderColor: '#ccc solid 2px'
   }
})

export default theme
