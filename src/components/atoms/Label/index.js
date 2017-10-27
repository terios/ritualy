import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grey700 } from 'material-ui/styles/colors'

const Wrapper = styled.span`
  font-size: 15px;
  display: inline-block;
  padding: 20px 0 0 0;
  color: ${grey700};
`

const Label = props => {
  return (
    <Wrapper>{props.text}</Wrapper>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired
}

export default Label
