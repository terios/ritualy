import React, { Component, Child } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { fromUi } from 'store/selectors'
import { Drawer } from 'containers'
import {
  Header,
} from 'components'
import { toggleDrawer, closeDrawer } from 'store/actions'

class HeaderContainer extends Component {

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

HeaderContainer.propTypes = {
  leftElmAction: PropTypes.func.isRequired,
  rightElmAction: PropTypes.func,
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  leftElmAction: () => dispatch(toggleDrawer()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer)
