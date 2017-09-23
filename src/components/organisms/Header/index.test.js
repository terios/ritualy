// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from '.'

const wrap = (props = {}) => shallow(<Header {...props}></Header>)

it('mounts', () => {
  shallow(<Header></Header>)
})
