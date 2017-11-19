import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from './actions'

export function* authFacebook({ thunk }) {
  try {
    yield put(actions.authSuccess({ thunk }))
  } catch (e) {
    yield put(actions.authError({ err: e, thunk }))
  }
}

export function* watchAuthFacebook({ meta }) {
  yield call(authFacebook, meta)
}

export default function* () {
  yield takeEvery(actions.AUTH_FACEBOOK_ASYNC, watchAuthFacebook)
}
