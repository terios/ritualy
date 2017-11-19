export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

export const authSuccess = ({ provider, thunk, payload }) => ({
  type: 'AUTH_SUCCESS',
  provider,
  payload,
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
