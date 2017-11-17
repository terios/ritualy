export const AUTH_FACEBOOK_ASYNC = 'AUTH_FACEBOOK_ASYNC'

export const fetchPlacesAsync = (filters) => ({
  type: AUTH_FACEBOOK_ASYNC,
  meta: {
    thunk: 'auth'
  }
})

export const fetchPlacesErr = ({ err, meta}) => ({
  type: 'FETCH_PLACES_ASYNC_ERR',
  payload: err,
  error: true,
  meta
})
