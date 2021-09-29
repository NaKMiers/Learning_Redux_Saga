import {
   AppBar,
   Box,
   IconButton,
   Menu,
   MenuItem,
   Toolbar,
   Typography,
   withStyles
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './styles'

const menuId = 'primary-search-account-menu'

class Header extends Component {
   constructor(props) {
      super(props)
      this.state = {
         anchorEl: null
      }
   }

   handleProfileMenuOpen = e => {
      this.setState({ anchorEl: e.currentTarget })
   }

   handleMenuClose = e => {
      this.setState({ anchorEl: null })
   }

   renderMenu = () => {
      const { anchorEl } = this.state
      const isMenuOpen = Boolean(anchorEl)
      return (
         <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right'
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right'
            }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
         >
            <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
         </Menu>
      )
   }

   handleToggleSidebar = () => {
      const { showSidebar, onToggleSidebar } = this.props
      onToggleSidebar(!showSidebar)
   }

   render() {
      const { label } = this.props
      return (
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
               <Toolbar>
                  <IconButton
                     size='medium'
                     edge='start'
                     color='inherit'
                     aria-label='open drawer'
                     sx={{ mr: 2 }}
                     onClick={this.handleToggleSidebar}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography
                     variant='h6'
                     noWrap
                     component='div'
                     sx={{ display: { xs: 'none', sm: 'block' } }}
                  >
                     {label}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                     <IconButton
                        size='medium'
                        edge='end'
                        aria-label='account of current user'
                        aria-controls={menuId}
                        aria-haspopup='true'
                        onClick={this.handleProfileMenuOpen}
                        color='inherit'
                     >
                        <AccountCircle />
                     </IconButton>
                  </Box>
               </Toolbar>
            </AppBar>
            {this.renderMenu()}
         </Box>
      )
   }
}

Header.propTypes = {
   label: PropTypes.string,
   showSidebar: PropTypes.bool,
   onToggleSidebar: PropTypes.func
}

export default withStyles(styles)(Header)
