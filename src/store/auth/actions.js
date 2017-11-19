export const AUTH_FACEBOOK_ASYNC = 'AUTH_FACEBOOK_ASYNC'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

export const authFacebook = () => ({
  type: AUTH_FACEBOOK_ASYNC,
  meta: {
    thunk: 'auth',
  },
})

export const authSuccess = ({ thunk }) => ({
  type: 'AUTH_SUCCESS',
  meta: {
    thunk,
  },
})

export const authError = ({ err, meta }) => ({
  type: 'AUTH_ERROR',
  payload: err,
  error: true,
  meta,
})
