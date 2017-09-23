import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header } from 'components'

import { lightBlueA700 } from 'material-ui/styles/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${lightBlueA700};
`
const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`
const GenericTemplate = ({ header, children, ...props }) => {
  return (
    <Wrapper {...props}>
      {header}
      <Content>{children}</Content>
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  header: PropTypes.any.isRequired
};

export default GenericTemplate
