// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import BigButton from '.'

const roll = jest.fn()

it('shallow', () => {
  shallow(<BigButton roll={roll} />)
})
