import {
   AppBar,
   Box,
   Button,
   IconButton,
   Toolbar,
   Typography,
   withStyles
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'

import React, { Component } from 'react'
import styles from './styles'

class Header extends Component {
   handleProfileMenuOpen = () => {
      console.log('handleProfileMenuOpen')
   }

   render() {
      const { classes } = this.props
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
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography
                     variant='h6'
                     noWrap
                     component='div'
                     sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                     MUI
                  </Typography>
               </Toolbar>
            </AppBar>
         </Box>
      )
   }
}

Header.propTypes = {
   classes: PropTypes.object
}

export default withStyles(styles)(Header)
