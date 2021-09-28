import { call, delay, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import modalActions from '../actions/modal'
import taskActions from '../actions/task'
import uiActions from '../actions/ui'
import taskApis from '../apis/task'
import { STATUSES, STATUS_CODE } from '../CONSTANTS'
import taskTypes from '../CONSTANTS/task'

function* watchFetchListTaskAction({ payload }) {
   let { params } = payload
   yield put(uiActions.showLoading())

   const res = yield call(taskApis.getList, params)
   let { status, data } = res
   if (status === STATUS_CODE.SUCCESS) {
      yield put(taskActions.fetchListTaskSucess(data))
   } else {
      yield put(taskActions.fetchListTaskFail(data))
   }
   yield delay(350)
   yield put(uiActions.hideLoading())
}

function* searchTaskSaga({ payload }) {
   yield delay(500)
   yield put(taskActions.fetchListTask({ q: payload.keyword }))
}

function* addTaskSaga({ payload }) {
   const { title, description } = payload
   yield put(uiActions.showLoading())
   const res = yield call(taskApis.addTask, { title, description, status: STATUSES[0].value })
   const { data, status } = res
   if (status === STATUS_CODE.CREATED) {
      yield put(taskActions.addTaskSuccess(data))
      yield put(modalActions.hideModal())
   } else {
      yield put(taskActions.addTaskFail(data))
   }
   yield delay(350)
   yield put(uiActions.hideLoading())
}

function* updateTaskSaga({ payload }) {
   const { title, description, status } = payload
   const taskEditing = yield select(state => state.task.taskEditing)
   yield put(uiActions.showLoading())
   const res = yield call(taskApis.updateTask, { title, description, status }, taskEditing.id)
   const { data, status: statusCode } = res
   if (statusCode === STATUS_CODE.SUCCESS) {
      yield put(taskActions.updateTaskSuccess(data))
      yield put(modalActions.hideModal())
   } else {
      yield put(taskActions.updateTaskFail(data))
   }
   yield delay(350)
   yield put(uiActions.hideLoading())
}

function* deleteTaskSaga({ payload }) {
   const { taskId } = payload
   yield put(uiActions.showLoading())
   const res = yield call(taskApis.deleteTask, taskId)
   const { status } = res
   if (status === STATUS_CODE.SUCCESS) {
      yield put(taskActions.deleteTaskSuccess(taskId))
      yield put(modalActions.hideModal())
   } else {
      yield put(taskActions.deleteTaskFail(taskId))
   }
   yield delay(350)
   yield put(uiActions.hideLoading())
}

function* rootSaga() {
   yield takeLatest(taskTypes.FETCH_TASK, watchFetchListTaskAction)
   yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga)
   yield takeEvery(taskTypes.ADD_TASK, addTaskSaga)
   yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga)
   yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga)
}

export default rootSaga
