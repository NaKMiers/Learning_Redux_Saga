import React, { Component } from 'react'
import { withStyles, Box, Grid } from '@material-ui/core'
import styles from './styles'
import TaskItem from '../TaskItem'
import PropTypes from 'prop-types'

class TaskList extends Component {
   render() {
      const { classes, tasks, status, onEdit } = this.props

      return (
         <Grid key={status.value} item md={4}>
            <Box mt={2} mb={2}>
               <div className={classes.status}>{status.label}</div>
            </Box>
            <div className={classes.wrapperListTask}>
               {tasks.map(task => (
                  <TaskItem
                     task={task}
                     status={status}
                     key={task.id}
                     onEdit={() => onEdit(task)}
                  />
               ))}
            </div>
         </Grid>
      )
   }
}

TaskList.propTypes = {
   classes: PropTypes.object,
   tasks: PropTypes.array,
   status: PropTypes.object,
   onEdit: PropTypes.func
}

export default withStyles(styles)(TaskList)
