import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

const Wrapper = styled(AppBar)`
`

const overideStyle = props => ({
  position: 'fixed',
  backgroundColor: 'transparent',
})

const Header = (props) => {
  return (
    <Wrapper
      title={props.title}
      zDepth={0}
      style={overideStyle(props)}
      iconElementRight={props.righElm}
      onRightIconButtonTouchTap={props.rightElmAction}
      iconElementLeft={props.iconElementLeft}
      onLeftIconButtonTouchTap={props.leftElmAction}
    />
  )
}

Header.propTypes = {
}
export default Header
