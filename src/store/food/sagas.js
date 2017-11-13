import { put, takeEvery, call } from 'redux-saga/effects'
import { keys, apis } from 'config'
import { initialFilter } from './selectors'
import { getCenterFromBounds } from 'services/map'
import * as actions from './actions'


const prepareQuery = ({ category, keyword, coords }) => {
    return {
      ...initialFilter,
      ll: `${coords.lat},${coords.lng}`,
      limit: 15,
      categoryId: category,
      query: keyword,
      venuePhotos:1,
    }
  }

export function* fetchPlacesAsync(api, filters = {}, { thunk }) {
  try {
    const places = yield call([api, api.get], `${apis.root}${apis.lookup}`, { params: prepareQuery(filters), noHeaders: true })
    const results = {
      ...places.response.groups['0'],
      title: places.response.headerFullLocation,
      bounds: {
        ...places.response.suggestedBounds,
        center: getCenterFromBounds(places.response.suggestedBounds),
      },
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
