// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import Roulette from '.'

const roll = jest.fn()

it('shallow', () => {
  shallow(<Roulette roll={roll} />)
})
