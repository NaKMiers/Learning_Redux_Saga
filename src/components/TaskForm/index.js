import React, { Component } from 'react'
import { withStyles, Button, TextField, Modal, Grid, Box } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'

class TaskForm extends Component {
   render() {
      const { classes, isOpen, handleClose } = this.props
      return (
         <Modal open={isOpen} onClose={handleClose}>
            <div className={classes.modal}>
               <form>
                  <Grid container>
                     <Grid item md={12}>
                        <TextField
                           id='standard-basic'
                           className={classes.textField}
                           label='Standard'
                        />
                     </Grid>
                     <Grid item md={12}>
                        <TextField
                           id='standard-multiline-flexible'
                           className={classes.textField}
                           label='Multiline'
                           multiline
                        />
                     </Grid>
                     <Grid item md={12} className={classes.button}>
                        <Box
                           sx={{
                              display: 'flex',
                              flexDirection: 'row-reverse'
                           }}
                        >
                           <Button variant='contained' color='primary'>
                              Save
                           </Button>
                           <Button onClick={handleClose}>Cancel</Button>
                        </Box>
                     </Grid>
                  </Grid>
               </form>
            </div>
         </Modal>
      )
   }
}

TaskForm.propTypes = {
   classes: PropTypes.object,
   isOpen: PropTypes.bool,
   handleClose: PropTypes.func
}

export default withStyles(styles)(TaskForm)
