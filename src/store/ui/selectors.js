export const initialState = {
  displayMode: 'list',
  drawerOpen: false,

}

export const getDisplayMode = (state = initialState) =>
  state.displayMode

export const getDrawerState = (state = initialState) =>
  state.drawerOpen
