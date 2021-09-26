// import taskApis from '../apis/task'
import taskTypes from '../CONSTANTS/task'

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
}

export default new TaskActions()
