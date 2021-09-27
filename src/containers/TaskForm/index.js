import { Box, Button, Grid, MenuItem, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import modalActions from '../../actions/modal'
import taskActions from '../../actions/task'
import renderSelectField from '../../components/FormHelper/Select'
import renderTextField from '../../components/FormHelper/TextField'
import styles from './styles'
import validate from './validate'

class TaskForm extends Component {
   handleSubmitForm = data => {
      const { taskActionCreators, taskEditing } = this.props
      const { addTask, updateTask } = taskActionCreators
      const { title, description, status } = data
      if (taskEditing && taskEditing.id) {
         updateTask(title, description, status)
      } else {
         addTask(title, description)
      }
   }

   renderStatusSelection = () => {
      let xhtml = null
      const { taskEditing } = this.props
      if (taskEditing && taskEditing.id) {
         xhtml = (
            <Field
               id='status'
               name='status'
               label='Status'
               component={renderSelectField}
               placeholder=''
            >
               <MenuItem value={0}>Ready</MenuItem>
               <MenuItem value={1}>In Progress</MenuItem>
               <MenuItem value={2}>Completed</MenuItem>
            </Field>
         )
      }
      return xhtml
   }

   render() {
      const { classes, modalActionCreators, handleSubmit, invalid, submitting } = this.props
      const { hideModal } = modalActionCreators
      return (
         <form className={classes.content} onSubmit={handleSubmit(this.handleSubmitForm)}>
            <Grid container>
               <Grid item md={12}>
                  <Field
                     id='title'
                     name='title'
                     label='Title'
                     className={classes.textField}
                     component={renderTextField}
                     placeholder=''
                  />
               </Grid>
               <Grid item md={12}>
                  <Field
                     id='description'
                     name='description'
                     label='Description'
                     className={classes.textField}
                     component={renderTextField}
                     placeholder=''
                  />
               </Grid>
               {this.renderStatusSelection()}
               <Grid item md={12} className={classes.button}>
                  <Box
                     sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse'
                     }}
                  >
                     <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        disabled={invalid || submitting}
                     >
                        Save
                     </Button>
                     <Button onClick={hideModal}>Cancel</Button>
                  </Box>
               </Grid>
            </Grid>
         </form>
      )
   }
}

TaskForm.propTypes = {
   classes: PropTypes.object,
   handleSubmit: PropTypes.func,
   modalActionCreators: PropTypes.shape({
      hideModal: PropTypes.func
   }),
   taskActionCreators: PropTypes.shape({
      addTask: PropTypes.func,
      updateTask: PropTypes.func
   }),
   taskEditing: PropTypes.object
}

const mapStateToProps = state => ({
   taskEditing: state.task.taskEditing,
   initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing ? state.task.taskEditing.description : null,
      status: state.task.taskEditing ? state.task.taskEditing.status : null
   }
})

const mapDispatchToProps = dispatch => ({
   modalActionCreators: bindActionCreators(modalActions, dispatch),
   taskActionCreators: bindActionCreators(taskActions, dispatch)
})

const FORM_NAME = 'TASK_MANAGEMENT'
const withReduxForm = reduxForm({
   form: FORM_NAME,
   validate
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withStyles(styles), withConnect, withReduxForm)(TaskForm)
