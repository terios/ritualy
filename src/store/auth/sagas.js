import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from './actions'

export function* authFacebook(auth, provider, { thunk }) {
  try {
    auth().signInWithRedirect(provider)
    yield put(actions.pendingAuth({ thunk }))
  } catch (e) {
    yield put(actions.authError({ err: e, thunk }))
  }
}

export function* watchAuthFacebook(auth, provider, { meta }) {
  yield call(authFacebook, auth, provider, meta)
}

export default function* ({ auth, provider }) {
  yield takeEvery(actions.AUTH_FACEBOOK, watchAuthFacebook, auth, provider)
}
