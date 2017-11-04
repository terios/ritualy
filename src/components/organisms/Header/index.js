import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

const Wrapper = styled(AppBar)`
`
const overideStyle = {
  container:{
    position: 'fixed'
  },
}
const Header = (props) => {
  return (
    <Wrapper
      title="Ritualy"
      zDepth={0}
      style={overideStyle.container}
      iconElementRight={props.righElm}
      onRightIconButtonTouchTap={props.righElmAction}
      iconElementLeft={props.iconElementLeft}
    />
  )
}

Header.propTypes = {
}
export default Header
