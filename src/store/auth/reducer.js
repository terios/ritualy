import {
    AUTH_PENDING,
    AUTH_SUCCESS,
    AUTH_ERROR,
} from './actions'
import { initialState } from './selectors'

const extractFacebookData = (payload) => {
  return {
    user: payload.user,
    credential: payload.credential,
  }
}
export default (state = initialState, { type, provider, payload, meta, error }) => {
  switch (type) {
    case AUTH_PENDING:
      return {
        ...state,
        pendingAuth: true,
      }
    case AUTH_SUCCESS:
      if (provider && provider === 'facebook') {
        const { user, credential } = extractFacebookData(payload)
        return {
          ...state,
          user,
          credential,
        }
      }
      return state
    case AUTH_ERROR:
      console.log('====================================')
      console.log(error)
      console.log('====================================')
      return {
        ...state,
      }
    default:
      return state
  }
}