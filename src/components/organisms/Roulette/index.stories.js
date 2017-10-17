import React from 'react'
import { storiesOf } from '@storybook/react'
import { Roulette } from 'components'

const roll = () => {
  return null
}
storiesOf('Roulette', module)
  .add('default', () => (
    <Roulette roll={roll} />
  ))
