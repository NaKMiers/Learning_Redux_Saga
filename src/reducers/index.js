import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import uiReducer from './uiReducer'
import modalReducer from './modalReducer'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
   task: taskReducer,
   ui: uiReducer,
   modal: modalReducer,
   form: formReducer
})

export default reducer
