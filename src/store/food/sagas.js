import { put, takeEvery, call } from 'redux-saga/effects'
import { keys, apis } from 'config'
import * as actions from './actions'


const prepareQuery = ({ category, keyword }) => ({
    client_id: keys.client_id,
    client_secret: keys.client_secret,
    ll: '52.531677,13.381777',
    v: '20170101',
    limit: 10,
    categoryId: category,
    query: keyword,
    venuePhotos:1,
  })

export function* fetchPlacesAsync(api, filters = {}, { thunk }) {
  try {
    const places = yield call([api, api.get], `${apis.root}${apis.lookup}`, { params: prepareQuery(filters) })
    const results = {
      ...places.response.groups['0'],
      title: places.response.headerFullLocation
    }
    yield put(actions.fetchPlaces({ response: results, thunk }))
  } catch (e) {
    yield put(actions.fetchPlacesErr({ err: e, thunk }))
  }
}

export function* watchFetchPlacesAsync(api, { meta, filters }) {
  yield call(fetchPlacesAsync, api, filters, meta)
}

export default function* ({ api }) {
  yield takeEvery(actions.FETCH_PLACES_ASYNC, watchFetchPlacesAsync, api)
}
