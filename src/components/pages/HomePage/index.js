// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { GenericTemplate, Header } from 'components'

const HomePage = () => {
  return (
    <GenericTemplate header={<Header />}>
      <div>Hello World</div>
    </GenericTemplate>
  )
}

export default HomePage
