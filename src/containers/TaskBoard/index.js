import React, { Component } from 'react'
import { withStyles, Grid, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import styles from './styles'
import { STATUSES } from '../../CONSTANTS'
import TaskList from '../../components/TaskList'
import TaskForm from '../../components/TaskForm'

const taskList = [
   {
      id: 1,
      title: 'Html',
      description: 'learning everything about html',
      status: 0
   },
   {
      id: 2,
      title: 'Css',
      description: 'learning everything about css',
      status: 1
   },
   {
      id: 3,
      title: 'Js',
      description: 'learning everything about js',
      status: 2
   }
]

class TaskBoard extends Component {
   state = {
      isOpen: false
   }

   renderTaskBoard = () => {
      let xhtml = (
         <Grid container spacing={2}>
            {STATUSES.map(status => {
               const taskFiltered = taskList.filter(
                  task => task.status === status.value
               )
               return (
                  <TaskList
                     key={status.value}
                     tasks={taskFiltered}
                     status={status}
                  />
               )
            })}
         </Grid>
      )
      return xhtml
   }

   handleOpen = () => {
      this.setState({ isOpen: true })
   }

   handleClose = () => {
      this.setState({ isOpen: false })
   }

   renderFormDialog = () => {
      const { isOpen } = this.state

      return <TaskForm isOpen={isOpen} handleClose={this.handleClose} />
   }

   render() {
      const { classes } = this.props
      return (
         <div className={classes.taskBoard}>
            <Button
               className={classes.button}
               variant='contained'
               color='primary'
               onClick={this.handleOpen}
            >
               <AddIcon />
               Add new work
            </Button>
            {this.renderTaskBoard()}
            {this.renderFormDialog()}
         </div>
      )
   }
}

export default withStyles(styles)(TaskBoard)
