import {
  SWITCH_DISPLAY,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case SWITCH_DISPLAY:
      return {
        ...state,
        displayMode: payload.displayMode,
      }
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen,
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        drawerOpen: false,
      }
    default:
      return state
  }
}
