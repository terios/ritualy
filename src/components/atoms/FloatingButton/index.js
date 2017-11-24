import React from 'react'
import PropTypes from 'prop-types'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Place from 'material-ui/svg-icons/maps/place'
import List from 'material-ui/svg-icons/action/list'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;

`

const style = {
}

const getIcon = (name) => {
  switch (name) {
    case 'map':
      return <Place />
      break
    case 'list':
      return <List />
      break
    default:
      return <Place />
  }
}
const FloatingButton = (props) => {
  return (
    <Wrapper>
      <FloatingActionButton secondary style={style} onClick={props.onClick}>
        { getIcon(props.icon) }
      </FloatingActionButton>
    </Wrapper>
  )
}
FloatingButton.propTypes = {
}
export default FloatingButton
