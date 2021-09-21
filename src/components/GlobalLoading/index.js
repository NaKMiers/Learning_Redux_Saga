import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import styles from './styles'
import LoadingIcon from '../../assets/images/loading.gif'
import { connect } from 'react-redux'
import { compose } from 'redux'

class GlobalLoading extends Component {
   render() {
      const { classes, showLoading } = this.props
      let xhtml = (
         <div className={classes.globalLoading}>
            <img src={LoadingIcon} className={classes.icon} alt='loading' />
         </div>
      )

      return showLoading ? xhtml : null
   }
}

GlobalLoading.propTypes = {
   classes: PropTypes.object,
   showLoading: PropTypes.bool
}

const mapStateToProps = state => ({
   showLoading: state.ui.showLoading
})

const withConnect = connect(mapStateToProps, null)

export default compose(withStyles(styles), withConnect)(GlobalLoading)
