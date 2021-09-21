import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import uiReducer from './uiReducer'

const reducer = combineReducers({ task: taskReducer, ui: uiReducer })

export default reducer
