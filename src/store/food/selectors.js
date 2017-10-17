export const initialState = {
  meta: {},
  places: [],
  title: '',
}

export const getPlaces = (state = initialState) =>
  state.places

export const getTitle = (state = initialState) =>
  state.title
