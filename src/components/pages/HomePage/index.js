import React from 'react'
import styled from 'styled-components'

import { GenericTemplate, Header, Filters, ListItems } from 'components'
import { Roulette } from 'containers'
import layout from 'utils/LayoutGenerator';

const Wrapper = styled.div`
  text-align: -webkit-center;
  display: flex;
  flex-direction: row;
`
const OnDesktop = layout.is('desktop');


const HomePage = () => {
  return (
    <GenericTemplate header={<Header />}>
      <Wrapper>
        <OnDesktop>
          <Filters />
        </OnDesktop>
        <ListItems />
      </Wrapper>
    </GenericTemplate>
  )
}

export default HomePage
