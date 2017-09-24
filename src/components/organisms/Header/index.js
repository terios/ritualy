import React from 'react'
import styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

const Wrapper = styled(AppBar)`
  margin-bottom: 20px;
`

const Header = () => {
  return (
    <Wrapper
      title="Ritualy"
      iconElementRight={<IconButton><i className="material-icons">filter_list</i></IconButton>}
    />
  )
}

export default Header
