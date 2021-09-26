import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import modalActions from '../actions/modal'
import taskActions from '../actions/task'
import uiActions from '../actions/ui'
import taskApis from '../apis/task'
import { STATUSES, STATUS_CODE } from '../CONSTANTS'
import taskTypes from '../CONSTANTS/task'

function* watchFetchListTaskAction() {
   while (true) {
      const action = yield take(taskTypes.FETCH_TASK)
      let { params } = action.payload
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

function* rootSaga() {
   yield fork(watchFetchListTaskAction)
   yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga)
   yield takeEvery(taskTypes.ADD_TASK, addTaskSaga)
}

export default rootSaga
