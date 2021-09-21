// import taskApis from '../apis/task'
import types from '../CONSTANTS/task'

class TaskActions {
   // fetch task from api
   fetchListTask = () => ({ type: types.FETCH_TASK })
   fetchListTaskSucess = data => ({ type: types.FETCH_TASK_SUCCESS, payload: { data } })
   fetchListTaskFail = error => ({ type: types.FETCH_TASK_FAIL, payload: { error } })

   // search task from state
   searchTask = keyword => ({ type: types.SEARCH_TASK, payload: { keyword } })
   searchTaskSuccess = data => ({ type: types.SEARCH_TASK_SUCCESS, payload: { data } })
}

export default new TaskActions()
