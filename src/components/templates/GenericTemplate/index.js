import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
`
const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding-top: 64px;
`
const GenericTemplate = ({ header, drawer, children, ...props }) => {
  return (
    <Wrapper {...props}>
      {header}
      {drawer}
      <Content>{children}</Content>
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.any.isRequired,
  floating: PropTypes.any,
}

export default GenericTemplate
