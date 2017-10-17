import React from 'react'
import styled from 'styled-components'

import { GenericTemplate, Header } from 'components'
import { Roulette } from 'containers'

const Wrapper = styled.div`
  text-align: -webkit-center;
`


const HomePage = () => {
  return (
    <GenericTemplate header={<Header />}>
      <Wrapper>
        <Filters />
      </Wrapper>
    </GenericTemplate>
  )
}

export default HomePage
