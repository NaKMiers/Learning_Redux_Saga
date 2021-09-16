import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './styles'
import configureStore from '../../redux/configureStore'
import { withStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../../commons/Theme'
import TaskBoard from '../TaskBoard'

const store = configureStore()

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <ToastContainer autoClose={2000} />
               <TaskBoard />
            </ThemeProvider>
         </Provider>
      )
   }
}

export default withStyles(styles)(App)
