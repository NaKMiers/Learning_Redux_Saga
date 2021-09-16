import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../commons/Theme'
import TaskBoard from '../TaskBoard'
import styles from './styles'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore'

const store = configureStore()

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <TaskBoard />
            </ThemeProvider>
         </Provider>
      )
   }
}

export default withStyles(styles)(App)
