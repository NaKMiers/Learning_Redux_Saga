import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects'
import types from '../CONSTANTS/task'
import taskApis from '../apis/task'
import { STATUS_CODE } from '../CONSTANTS'
import taskActions from '../actions/task'
import uiActions from '../actions/ui'

function* watchFetchListTaskAction() {
   while (true) {
      yield take(types.FETCH_TASK)
      yield put(uiActions.showLoading())
      const res = yield call(taskApis.getList)
      let { status, data } = res
      // yield delay(500)
      if (status === STATUS_CODE.SUCCESS) {
         yield put(taskActions.fetchListTaskSucess(data))
      } else {
         yield put(taskActions.fetchListTaskFail(data))
      }
      yield put(uiActions.hideLoading())
   }
}

function* searchTaskSaga({ payload }) {
   yield delay(500)
   let { keyword } = payload
   const { taskList } = yield select(state => state.task)
   const searchedTask = taskList.filter(task => {
      let title = task.title.toLowerCase().trim()
      keyword = keyword.toLowerCase().trim()
      return title.includes(keyword)
   })
   console.log(searchedTask)
}

function* rootSaga() {
   yield fork(watchFetchListTaskAction)
   yield takeLatest(types.SEARCH_TASK, searchTaskSaga)
}

export default rootSaga
