import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import styles from './styles'
import PropTypes from 'prop-types'
import Header from '../../components/Dashboard/Header'
import Sidebar from '../../components/Dashboard/Sidebar'

class Dashboard extends Component {
   render() {
      const { classes, children } = this.props
      return (
         <div className={classes.dashboard}>
            <Header />
            <Sidebar />
            {children}
         </div>
      )
   }
}

Dashboard.propTypes = {
   classes: PropTypes.object,
   children: PropTypes.object
}

export default withStyles(styles)(Dashboard)
