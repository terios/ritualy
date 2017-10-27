export const SWITCH_DISPLAY = 'SWITCH_DISPLAY'

export const switchDisplay = (displayMode) => ({
  type: SWITCH_DISPLAY,
  payload:{
    displayMode
  },
})
