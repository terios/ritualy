import {
  SWITCH_DISPLAY,
} from './actions'

import { initialState } from './selectors'

export default (state = initialState, { type, payload, meta }) => {
  switch (type) {
    case SWITCH_DISPLAY:
    console.log(payload);
      return {
        ...state,
        displayMode: payload.displayMode,
      }
    default:
      return state
  }
}
