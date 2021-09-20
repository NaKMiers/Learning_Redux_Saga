import { fork, take, call, put } from 'redux-saga/effects'
import types from '../CONSTANTS/task'
import taskApis from '../apis/task'
import { STATUS_CODE } from '../CONSTANTS'
import taskActions from '../actions/task'

function* watchFetchListTaskAction() {
   while (true) {
      yield take(types.FETCH_TASK)
      const res = yield call(taskApis.getList)
      let { status, data } = res
      if (status === STATUS_CODE.SUCCESS) {
         yield put(taskActions.fetchListTaskSucess(data))
      } else {
         yield put(taskActions.fetchListTaskFail(data))
      }
   }
}

function* watchCreateTaskAction() {
   yield 123
   console.log('watching create list action')
}

function* rootSaga() {
   yield fork(watchFetchListTaskAction)
   yield fork(watchCreateTaskAction)
}

export default rootSaga
