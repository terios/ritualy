export const AUTH_FACEBOOK = 'AUTH_FACEBOOK'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_PENDING = 'AUTH_PENDING'

export const authSuccess = ({ provider, thunk, payload }) => ({
  type: 'AUTH_SUCCESS',
  provider,
  payload,
  meta: {
    thunk,
  },
})

export const pendingAuth = ({ thunk }) => ({
  type: 'AUTH_PENDING',
  meta: {
    thunk,
  },
})

export const authFacebook = () => ({
  type: 'AUTH_FACEBOOK',
  meta: {
    thunk: 'authenticating',
  },
})

export const authError = ({ err, meta }) => ({
  type: 'AUTH_ERROR',
  payload: err,
  error: true,
  meta,
})
