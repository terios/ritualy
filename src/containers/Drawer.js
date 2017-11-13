import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { fromUi } from 'store/selectors'
import { Drawer } from 'components'
import { toggleDrawer, closeDrawer } from 'store/actions'

const DrawerContainer = (props) => {
  return (
    <Drawer {...props} />
  )
}

DrawerContainer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  drawerOpen: fromUi.getDrawerState(state),
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
  closeDrawer: () => dispatch(closeDrawer()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DrawerContainer)
