// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components'

import { GenericTemplate, Header, BigButton } from 'components'


const Wrapper = styled.div`
  text-align: -webkit-center;
`

const HomePage = () => {
  return (
    <GenericTemplate header={<Header />}>
      <Wrapper>
        <BigButton />
      </Wrapper>
    </GenericTemplate>
  )
}

export default HomePage
