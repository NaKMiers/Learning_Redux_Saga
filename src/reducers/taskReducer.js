import taskTypes from '../CONSTANTS/task'
import toast from '../commons/Helper/toastHelper'

let initialState = {
   taskList: [],
   taskEditing: null
}

function taskReducer(state = initialState, action) {
   let data = []
   let error = []

   switch (action.type) {
      case taskTypes.FETCH_TASK:
         return { ...state, taskList: [] }

      case taskTypes.FETCH_TASK_SUCCESS:
         data = action.payload.data
         toast.toastSuccess('Connect Successfully')

         return { ...state, taskList: data }

      case taskTypes.FETCH_TASK_FAIL:
         error = action.payload.error
         toast.toastError(error.message)
         return { ...state, taskList: [] }

      case taskTypes.SEARCH_TASK_SUCCESS:
         data = action.payload.data
         return { ...state, taskList: data }

      case taskTypes.ADD_TASK:
         return { ...state }

      case taskTypes.ADD_TASK_SUCCESS:
         toast.toastSuccess('Add Task Successfully')
         data = action.payload.data
         state.taskList.unshift(data)
         return { ...state, taskList: state.taskList }

      case taskTypes.ADD_TASK_FAIL:
         toast.toastError(error.message)
         error = action.payload.error
         return { ...state }

      case taskTypes.SET_TASK_EDITING:
         const { task } = action.payload
         return { ...state, taskEditing: task }

      default:
         return state
   }
}

export default taskReducer
