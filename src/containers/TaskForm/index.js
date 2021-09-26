import { Box, Button, Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import modalActions from '../../actions/modal'
import renderTextField from '../../components/FormHelper/TextField'
import styles from './styles'
import validate from './validate'
import taskActions from '../../actions/task'

class TaskForm extends Component {
   handleSubmitForm = data => {
      const { taskActionCreators } = this.props
      const { addTask } = taskActionCreators
      const { title, description } = data
      addTask(title, description)
   }

   render() {
      const { classes, modalActionCreators, handleSubmit, invalid, submitting, taskEditing } =
         this.props
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
                     value={taskEditing ? taskEditing.title : ''}
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
                     value={taskEditing ? taskEditing.description : ''}
                  />
               </Grid>
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
      addTask: PropTypes.func
   }),
   taskEditing: PropTypes.object
}

const mapStateToProps = state => ({
   taskEditing: state.task.taskEditing,
   initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing ? state.task.taskEditing.description : null
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
