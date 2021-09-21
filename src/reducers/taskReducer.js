import types from '../CONSTANTS/task'
import toast from '../commons/Helper/toastHelper'

let initialState = {
   taskList: []
}

function taskReducer(state = initialState, action) {
   let data = []

   switch (action.type) {
      case types.FETCH_TASK:
         return { ...state, taskList: [] }

      case types.FETCH_TASK_SUCCESS:
         data = action.payload.data
         toast.toastSuccess('Connect Successfully')

         return { ...state, taskList: data }

      case types.FETCH_TASK_FAIL:
         const { error } = action.payload
         toast.toastError(error.message)
         return { ...state, taskList: [] }

      case types.SEARCH_TASK_SUCCESS:
         data = action.payload.data
         return { ...state, taskList: data }

      default:
         return state
   }
}

export default taskReducer
