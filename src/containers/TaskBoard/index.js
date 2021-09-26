import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { STATUSES } from '../../CONSTANTS'
import taskActions from '../../actions/task'
import modalActions from '../../actions/modal'
import styles from './styles'
import { withStyles, Grid, Button } from '@material-ui/core'
import TaskList from '../../components/TaskList'
import TaskForm from '../TaskForm'
import AddIcon from '@material-ui/icons/Add'
import SearchBox from '../../components/SearchBox'
import Modal from '../../components/Modal'

class TaskBoard extends Component {
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
               return (
                  <TaskList
                     key={status.value}
                     tasks={taskFiltered}
                     status={status}
                     onEdit={this.hanleEditTask}
                  />
               )
            })}
         </Grid>
      )
      return xhtml
   }

   handleOpen = () => {
      const { modalActionCreators, taskActionCreators } = this.props
      const { setTaskEditing } = taskActionCreators
      setTaskEditing(null)
      const { showModal, changeModalTitle, changeModalContent } = modalActionCreators
      showModal()
      changeModalTitle('Add new work')
      changeModalContent(<TaskForm />)
   }

   hanleEditTask = task => {
      const { modalActionCreators, taskActionCreators } = this.props
      const { setTaskEditing } = taskActionCreators
      setTaskEditing(task)
      const { showModal, changeModalTitle, changeModalContent } = modalActionCreators
      showModal()
      changeModalTitle('Edit work')
      changeModalContent(<TaskForm />)
   }

   renderFormDialog = () => {
      const { isOpenModal } = this.props
      return <Modal isOpen={isOpenModal} />
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
      searchTask: PropTypes.func,
      setTaskEditing: PropTypes.func
   }),
   modalActionCreators: PropTypes.shape({
      showModal: PropTypes.func,
      hideModal: PropTypes.func,
      changeModalTitle: PropTypes.func,
      changeModalContent: PropTypes.func
   }),
   taskList: PropTypes.array
}

const mapStateToProps = state => ({
   taskList: state.task.taskList,
   isOpenModal: state.modal.showModal
})

const mapDispatchToProps = dispatch => ({
   taskActionCreators: bindActionCreators(taskActions, dispatch),
   modalActionCreators: bindActionCreators(modalActions, dispatch)
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))
