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

import styles from './styles'

class TaskItem extends Component {
   render() {
      const { classes, task, status } = this.props
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
               <Fab color='primary' aria-label='edit' size='small'>
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

export default withStyles(styles)(TaskItem)
