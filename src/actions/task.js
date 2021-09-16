import taskApis from '../apis/task'
import types from '../CONSTANTS/task'

class taskActions {
   fetchListTask = () => ({ type: types.FETCH_TASK })
   fetchListTaskSucess = data => ({ type: types.FETCH_TASK_SUCCESS, payload: { data } })
   fetchListTaskfail = error => ({ type: types.FETCH_TASK_FAIL, payload: { error } })
   fetchListTaskRequest = () => dispatch => {
      dispatch(this.fetchListTask())
      taskApis
         .getList()
         .then(({ data }) => {
            dispatch(this.fetchListTaskSucess(data))
         })
         .catch(error => {
            dispatch(this.fetchListTaskfail(error))
         })
   }
}

export default new taskActions()
