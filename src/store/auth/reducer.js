import {
    AUTH_FACEBOOK_ASYNC,
} from './actions'
import { initialState } from './selectors'

export default (state = initialState, { type }) => {
  switch (type) {
    case AUTH_FACEBOOK_ASYNC:
      return {
        ...state,
      }
    default:
      return state
  }
}