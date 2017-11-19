import {
    AUTH_FACEBOOK_ASYNC,
    AUTH_SUCCESS,
    AUTH_ERROR,
} from './actions'
import { initialState } from './selectors'

export default (state = initialState, { type, meta, error }) => {
  switch (type) {
    case AUTH_FACEBOOK_ASYNC:
      return {
        ...state,
      }
    case AUTH_SUCCESS:
    console.log('====================================');
    console.log(AUTH_SUCCESS, meta);
    console.log('====================================');
      return {
        ...state,
      }
    case AUTH_ERROR:
    console.log('====================================');
    console.log(AUTH_SUCCESS, meta, error);
    console.log('====================================');
      return {
        ...state,
      }
    default:
      return state
  }
}