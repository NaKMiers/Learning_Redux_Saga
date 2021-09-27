import taskTypes from '../CONSTANTS/task'
import toast from '../commons/Helper/toastHelper'

let initialState = {
   taskList: [],
   taskEditing: null
}

function findIndex(tasks, taskId) {
   let index = -1
   tasks.forEach((task, i) => {
      if (task.id === taskId) {
         index = i
      }
   })
   return index
}

function taskReducer(state = initialState, action) {
   let data = []
   let index = -1
   const { taskList } = state

   switch (action.type) {
      case taskTypes.FETCH_TASK:
         return { ...state, taskList: [] }

      case taskTypes.FETCH_TASK_SUCCESS:
         toast.toastSuccess('Connect Successfully')
         data = action.payload.data
         return { ...state, taskList: data }

      case taskTypes.FETCH_TASK_FAIL:
         toast.toastError('Connect Failure')

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
         toast.toastError('Add Task Failure')

         return { ...state }

      case taskTypes.SET_TASK_EDITING:
         const { task } = action.payload
         return { ...state, taskEditing: task }

      case taskTypes.UPDATE_TASK:
         return { ...state }

      case taskTypes.UPDATE_TASK_SUCCESS:
         toast.toastSuccess('Update Task Successfully')
         data = action.payload.data
         index = findIndex(taskList, data.id)
         if (index !== -1) {
            state.taskList.splice(index, 1, data)
         }
         return { ...state }

      case taskTypes.UPDATE_TASK_FAIL:
         toast.toastError('Update Task Failure')
         return { ...state }

      case taskTypes.DELETE_TASK:
         return { ...state }

      case taskTypes.DELETE_TASK_SUCCESS:
         toast.toastSuccess('Delete Task Successfully')
         const { taskId } = action.payload
         index = findIndex(taskList, taskId)
         if (index !== -1) {
            state.taskList.splice(index, 1)
         }
         return { ...state }

      case taskTypes.DELETE_TASK_FAIL:
         toast.toastError('Delete Task Failure')
         return { ...state }

      default:
         return state
   }
}

export default taskReducer
