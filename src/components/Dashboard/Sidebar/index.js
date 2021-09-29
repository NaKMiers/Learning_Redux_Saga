import { Drawer, List, ListItem, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ADMIN_ROUTES } from '../../../CONSTANTS'
import styles from './styles'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
   toggleDrawer = value => {
      const { onToggleSidebar } = this.props
      onToggleSidebar(value)
   }

   renderList = () => {
      const { classes } = this.props
      let xhtml = null
      xhtml = (
         <div className={classes.list}>
            <List component='div'>
               {ADMIN_ROUTES.map(route => {
                  return (
                     <NavLink
                        key={route.path}
                        to={route.path}
                        exact={route.exact}
                        className={classes.menuLink}
                        activeClassName={classes.menuLinkActive}
                     >
                        <ListItem key={route.path} className={classes.menuItem} button>
                           {route.label}
                        </ListItem>
                     </NavLink>
                  )
               })}
            </List>
         </div>
      )
      return xhtml
   }

   render() {
      const { classes, showSidebar } = this.props
      return (
         <Drawer variant='persistent' open={showSidebar} classes={{ paper: classes.drawerPaper }}>
            {this.renderList()}
         </Drawer>
      )
   }
}

Sidebar.propTypes = {
   classes: PropTypes.object,
   onToggleSidebar: PropTypes.func
}

export default withStyles(styles)(Sidebar)
