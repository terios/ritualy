import React from 'react'
import styled from 'styled-components'

import { GenericTemplate, Header } from 'components'
import { Filters, LookupList } from 'containers'
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
        <LookupList />
      </Wrapper>
    </GenericTemplate>
  )
}

export default HomePage
