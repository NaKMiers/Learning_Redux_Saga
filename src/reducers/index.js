import { combineReducers } from 'redux'
import taskReducer from './taskReducer'

const reducer = combineReducers({ tasks: taskReducer })

export default reducer
