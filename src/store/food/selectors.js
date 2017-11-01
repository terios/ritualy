export const initialState = {
  meta: {},
  places: [],
  title: '',
  bounds: {}
}

export const getPlaces = (state = initialState) =>
  state.places

export const getTitle = (state = initialState) =>
  state.title

export const getBounds = (state = initialState) =>
  state.bounds
