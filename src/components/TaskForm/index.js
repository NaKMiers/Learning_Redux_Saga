import React, { Component } from 'react'
import {
   withStyles,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   TextField
} from '@material-ui/core'
import styles from './styles'

class TaskForm extends Component {
   render() {
      const { classes, isOpen, handleClose } = this.props
      return (
         <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle id='form-dialog-title'>Add New Work</DialogTitle>
            <DialogContent>
               <TextField id='standard-basic' className={classes.textField} label='Standard' />
               <TextField
                  id='standard-multiline-flexible'
                  className={classes.textField}
                  label='Multiline'
                  multiline
               />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color='primary'>
                  OK
               </Button>
               <Button onClick={handleClose} color='primary'>
                  Cancel
               </Button>
            </DialogActions>
         </Dialog>
      )
   }
}

export default withStyles(styles)(TaskForm)
