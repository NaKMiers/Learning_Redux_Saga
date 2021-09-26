import React, { Component } from 'react'
import {
   withStyles,
   Typography,
   Grid,
   Card,
   CardActions,
   CardContent,
   Fab
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'

import styles from './styles'

class TaskItem extends Component {
   render() {
      const { classes, task, status, onEdit } = this.props
      const { id, title } = task

      return (
         <Card key={id} className={classes.card}>
            <CardContent>
               <Grid container justifyContent='space-between'>
                  <Grid item md={8}>
                     <Typography component='h2'>{title}</Typography>
                  </Grid>
                  <Grid item md={4}>
                     {status.label}
                  </Grid>
                  <p>{task.description}</p>
               </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
               <Fab color='primary' aria-label='edit' size='small' onClick={onEdit}>
                  <Icon>edit_icon</Icon>
               </Fab>
               <Fab color='secondary' aria-label='delete' size='small'>
                  <Icon fontSize='small'>delete_icon</Icon>
               </Fab>
            </CardActions>
         </Card>
      )
   }
}

TaskItem.propTypes = {
   classes: PropTypes.object,
   task: PropTypes.object,
   status: PropTypes.object,
   onEdit: PropTypes.func
}

export default withStyles(styles)(TaskItem)
