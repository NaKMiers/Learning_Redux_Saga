import { withStyles } from '@material-ui/core'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import uiActions from '../../actions/ui'
import Header from '../../components/Dashboard/Header'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from './styles'

class Dashboard extends Component {
   handleToggleSidebar = value => {
      const { uiActionCreator } = this.props
      const { showSidebar, hideSidebar } = uiActionCreator
      if (value) showSidebar()
      else hideSidebar()
   }
   render() {
      const { classes, children, label, showSidebar } = this.props
      return (
         <div className={classes.dashboard}>
            <Header
               label={label}
               showSidebar={showSidebar}
               onToggleSidebar={this.handleToggleSidebar}
            />
            <div className={classes.wrapper}>
               <Sidebar
                  className={classes.sidebar}
                  showSidebar={showSidebar}
                  onToggleSidebar={this.handleToggleSidebar}
               />
               <div
                  className={cn(classes.content, {
                     [classes.shiftLeft]: showSidebar === false
                  })}
               >
                  {children}
               </div>
            </div>
         </div>
      )
   }
}

Dashboard.propTypes = {
   classes: PropTypes.object,
   children: PropTypes.object,
   label: PropTypes.string,
   showSidebar: PropTypes.bool,
   uiActionCreator: PropTypes.shape({
      showSidebar: PropTypes.func,
      hideSidebar: PropTypes.func
   })
}

const mapStateToProps = state => ({ showSidebar: state.ui.showSidebar })
const mapDispatchToProps = dispatch => ({
   uiActionCreator: bindActionCreators(uiActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, withStyles(styles))(Dashboard)
