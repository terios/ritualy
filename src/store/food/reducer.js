import {
  FETCH_PLACES,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, { type, response, meta }) => {
  switch (type) {
    case FETCH_PLACES:
      return {
        ...state,
        meta,
        places: response.items ? response.items : [],
        title: response.title,
        bounds: response.bounds,
      }
    default:
      return state
  }
}
