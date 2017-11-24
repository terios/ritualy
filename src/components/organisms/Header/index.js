import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

const Wrapper = styled(AppBar)`
`

const overideStyle = (props) => {
  const container = {
    position: 'fixed',
  }
  if (props.transparent) {
    container.backgroundColor = 'transparent'
  }
  return {
    container,
  }
}
const Header = (props) => {
  return (
    <Wrapper
      title={props.title}
      zDepth={0}
      style={overideStyle(props).container}
      iconElementRight={props.righElm}
      onRightIconButtonTouchTap={props.rightElmAction}
      iconElementLeft={props.iconElementLeft}
      onLeftIconButtonTouchTap={props.leftElmAction}
    />
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  righElm: PropTypes.node,
  rightElmAction: PropTypes.func,
  iconElementLeft: PropTypes.node,
  leftElmAction: PropTypes.func,
}
export default Header
