import types from '../CONSTANTS/ui'

let initialState = { showLoading: false }

function uiReducer(state = initialState, action) {
   switch (action.type) {
      case types.SHOW_LOADING:
         return { ...state, showLoading: true }

      case types.HIDE_LOADING:
         return { ...state, showLoading: false }

      default:
         return state
   }
}

export default uiReducer
