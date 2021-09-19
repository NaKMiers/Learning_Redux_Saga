import { fork } from 'redux-saga/effects'

function* watchFetchListTaskAction() {
   console.log('watching fetch list action')
}

function* watchCreateTaskAction() {
   console.log('watching create list action')
}

function* rootSaga() {
   yield fork(watchFetchListTaskAction)
   yield fork(watchCreateTaskAction)
}

export default rootSaga
