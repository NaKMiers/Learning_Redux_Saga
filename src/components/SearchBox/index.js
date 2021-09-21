import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, TextField, withStyles } from '@material-ui/core'
import styles from './styles'

class SearchBox extends Component {
   render() {
      const { classes, handleChange } = this.props
      return (
         <Box
            sx={{
               '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            autoComplete='off'
            className={classes.searchBox}
         >
            <TextField
               id='outlined-required'
               className={classes.textField}
               label='Search'
               onChange={handleChange}
            />
         </Box>
      )
   }
}

SearchBox.propTypes = {
   classes: PropTypes.object,
   handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox)
