import React, { Component } from 'react'
import { withStyles, Box, Grid } from '@material-ui/core'
import styles from './styles'
import TaskItem from '../TaskItem'

class TaskList extends Component {
   render() {
      const { classes, tasks, status } = this.props

      return (
         <Grid key={status.value} item md={4}>
            <Box mt={2} mb={2}>
               <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
               {tasks.map(task => (
                  <TaskItem task={task} status={status} key={task.id} />
               ))}
            </div>
         </Grid>
      )
   }
}

export default withStyles(styles)(TaskList)
