import React from 'react'
import { storiesOf } from '@storybook/react'
import { BigButton } from 'components'

const roll = () => {
  return null
}
storiesOf('BigButton', module)
  .add('default', () => (
    <BigButton roll={roll} />
  ))
