import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { grey700 } from 'material-ui/styles/colors'

const Wrapper = styled.span`
  font-size: 20px;
  color: ${grey700};
`

const Title2 = (props) => {
  return (
    <Wrapper>{props.text}</Wrapper>
  )
}

Title2.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title2
