import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { STATUSES } from '../../CONSTANTS'
import taskActions from '../../actions/task'
import styles from './styles'
import { withStyles, Grid, Button } from '@material-ui/core'
import TaskList from '../../components/TaskList'
import TaskForm from '../../components/TaskForm'
import AddIcon from '@material-ui/icons/Add'
import SearchBox from '../../components/SearchBox'

class TaskBoard extends Component {
   state = {
      isOpen: false
   }

   componentDidMount() {
      const { taskActionCreators } = this.props
      const { fetchListTask } = taskActionCreators
      fetchListTask()
   }

   renderTaskBoard = () => {
      let { taskList } = this.props
      let xhtml = (
         <Grid container spacing={2}>
            {STATUSES.map(status => {
               const taskFiltered = taskList.filter(task => task.status === status.value)
               return <TaskList key={status.value} tasks={taskFiltered} status={status} />
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

   handleChange = e => {
      const { taskActionCreators } = this.props
      const { searchTask } = taskActionCreators

      let { value } = e.target
      searchTask(value)
   }

   renderSearchBox = () => {
      let xhtml = null
      xhtml = <SearchBox handleChange={this.handleChange} />

      return xhtml
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
            {this.renderSearchBox()}
            {this.renderTaskBoard()}
            {this.renderFormDialog()}
         </div>
      )
   }
}

TaskBoard.propTypes = {
   classes: PropTypes.object,
   taskActionCreators: PropTypes.shape({
      fetchListTask: PropTypes.func,
      searchTask: PropTypes.func
   }),
   taskList: PropTypes.array
}

const mapStateToProps = state => ({ taskList: state.task.taskList })

const mapDispatchToProps = dispatch => ({
   taskActionCreators: bindActionCreators(taskActions, dispatch)
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))
