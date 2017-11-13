export const SWITCH_DISPLAY = 'SWITCH_DISPLAY'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'

export const switchDisplay = (displayMode) => ({
  type: SWITCH_DISPLAY,
  payload:{
    displayMode
  },
})

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
})

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
})
