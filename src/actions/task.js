// import taskApis from '../apis/task'
import taskTypes from '../CONSTANTS/task'
import { STATUSES } from '../CONSTANTS'

class TaskActions {
   // fetch task from api
   fetchListTask = (params = {}) => ({ type: taskTypes.FETCH_TASK, payload: { params } })
   fetchListTaskSucess = data => ({ type: taskTypes.FETCH_TASK_SUCCESS, payload: { data } })
   fetchListTaskFail = error => ({ type: taskTypes.FETCH_TASK_FAIL, payload: { error } })

   // search task from state
   searchTask = keyword => ({ type: taskTypes.SEARCH_TASK, payload: { keyword } })
   searchTaskSuccess = data => ({ type: taskTypes.SEARCH_TASK_SUCCESS, payload: { data } })

   // add task
   addTask = (title, description) => ({
      type: taskTypes.ADD_TASK,
      payload: { title, description }
   })
   addTaskSuccess = data => ({ type: taskTypes.ADD_TASK_SUCCESS, payload: { data } })
   addTaskFail = error => ({ type: taskTypes.ADD_TASK_FAIL, payload: { error } })

   // edit task
   setTaskEditing = task => ({ type: taskTypes.SET_TASK_EDITING, payload: { task } })

   // update task
   updateTask = (title, description, status = STATUSES[0].value) => ({
      type: taskTypes.UPDATE_TASK,
      payload: { title, description, status }
   })
   updateTaskSuccess = data => ({ type: taskTypes.UPDATE_TASK_SUCCESS, payload: { data } })
   updateTaskFail = error => ({ type: taskTypes.UPDATE_TASK_FAIL, payload: { error } })

   // delete task
   deleteTask = taskId => ({
      type: taskTypes.DELETE_TASK,
      payload: { taskId }
   })
   deleteTaskSuccess = taskId => ({ type: taskTypes.DELETE_TASK_SUCCESS, payload: { taskId } })
   deleteTaskFail = error => ({ type: taskTypes.DELETE_TASK_FAIL, payload: { error } })
}

export default new TaskActions()
