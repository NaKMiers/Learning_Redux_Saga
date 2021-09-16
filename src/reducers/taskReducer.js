import types from '../CONSTANTS/task'
import toast from '../commons/Helper/toastHelper'

let initialState = {
   taskList: []
}

function taskReducer(state = initialState, action) {
   switch (action.type) {
      case types.FETCH_TASK:
         return { ...state, taskList: [] }

      case types.FETCH_TASK_SUCCESS:
         const { data } = action.payload
         toast.toastSuccess('Connect Successfully')

         return { ...state, taskList: data }

      case types.FETCH_TASK_FAIL:
         const { error } = action.payload
         toast.toastError(error.message)
         return { ...state, taskList: [] }

      default:
         return state
   }
}

export default taskReducer
