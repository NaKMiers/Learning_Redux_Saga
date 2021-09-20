import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import LoadingIcon from '../../assets/images/loading.gif'

class GlobalLoading extends Component {
   render() {
      const { classes } = this.props
      return (
         <div className={classes.globalLoading}>
            <img src={LoadingIcon} className={classes.icon} alt='loading' />
         </div>
      )
   }
}

GlobalLoading.propTypes = {
   classes: PropTypes.object
}

export default withStyles(styles)(GlobalLoading)
