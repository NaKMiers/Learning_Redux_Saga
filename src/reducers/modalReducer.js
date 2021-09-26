import modalTypes from '../CONSTANTS/modal'

let initialState = { showModal: false, title: '', component: null }

function uiReducer(state = initialState, action) {
   switch (action.type) {
      case modalTypes.SHOW_MODAL:
         return { ...state, showModal: true }

      case modalTypes.HIDE_MODAL:
         let resetModal = { ...state, showModal: false, title: '', component: null }
         return resetModal

      case modalTypes.CHANGE_MODAL_TITLE:
         let { title } = action.payload
         return { ...state, title }

      case modalTypes.CHANGE_MODAL_CONTENT:
         let { component } = action.payload
         return { ...state, component }

      default:
         return state
   }
}

export default uiReducer
