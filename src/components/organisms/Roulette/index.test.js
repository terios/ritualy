// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow, mount } from 'enzyme'
import Roulette from '.'

const wrap = (props = {}) => shallow(<Roulette {...props}></Roulette>)

it('mounts', () => {
  shallow(<Roulette></Roulette>)
})
