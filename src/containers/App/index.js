import { withStyles, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute'
import theme from '../../commons/Theme'
import GlobalLoading from '../../components/GlobalLoading'
import Modal from '../../components/Modal'
import { ADMIN_ROUTES } from '../../CONSTANTS'
import configureStore from '../../redux/configureStore'
import styles from './styles'

const store = configureStore()

class App extends Component {
   renderAdminRoute = () => {
      let xhtml = null
      xhtml = ADMIN_ROUTES.map(route => {
         const { path, label, exact, component } = route
         return (
            <AdminLayoutRoute
               key={path}
               path={path}
               label={label}
               exact={exact}
               component={component}
            />
         )
      })
      return xhtml
   }

   render() {
      return (
         <Provider store={store}>
            <Router>
               <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <ToastContainer autoClose={2000} />
                  <GlobalLoading />
                  <Modal />

                  <Switch>{this.renderAdminRoute()}</Switch>
               </ThemeProvider>
            </Router>
         </Provider>
      )
   }
}

export default withStyles(styles)(App)
