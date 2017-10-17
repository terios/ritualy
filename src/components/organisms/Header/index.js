import React from 'react'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

const Wrapper = styled(AppBar)`
  margin-bottom: 20px;
`
const overideStyle = {
  container:{
    position: 'fixed'
  },
}
const Header = () => {
  return (
    <Wrapper
      title="Ritualy"
      zDepth={0}
      style={overideStyle.container}
      iconElementRight={<IconButton><i className="material-icons">filter_list</i></IconButton>}
    />
  )
}

export default Header
