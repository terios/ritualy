import { keys, apis, allCategories } from 'config'
import config from 'config'

export const initialState = {
  meta: {},
  places: [],
  title: '',
  bounds: {},
}

export const initialFilter = {
  client_id: keys.client_id,
  client_secret: keys.client_secret,
  v: '20170101',
  limit: 15,
  categoryId: allCategories.id,
}

export const getPlaces = (state = initialState) =>
  state.places

export const getTitle = (state = initialState) =>
  state.title

export const getBounds = (state = initialState) =>
  state.bounds
