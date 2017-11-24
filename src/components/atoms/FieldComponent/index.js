import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  font-size: 15px;
  display: inline-block;
  width: 100%;
  padding: 20px 0 0 0;
`

const FieldComponent = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

FieldComponent.propTypes = {
}

export default FieldComponent
