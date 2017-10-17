export const FETCH_PLACES_ASYNC = 'FETCH_PLACES_ASYNC'
export const FETCH_PLACES = 'FETCH_PLACES'

export const fetchPlaces = ({ thunk, response }) => ({
  type: FETCH_PLACES,
  response,
  meta: {
    thunk
  },
})

export const fetchPlacesAsync = (filters) => ({
  type: FETCH_PLACES_ASYNC,
  filters,
  meta: {
    thunk: 'fetchPlaces'
  }
})

export const fetchPlacesErr = ({ err, meta}) => ({
  type: 'FETCH_PLACES_ASYNC_ERR',
  payload: err,
  error: true,
  meta
})
