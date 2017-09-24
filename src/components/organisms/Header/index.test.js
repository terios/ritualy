// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

it('Shallow', () => {
  shallow(<Header />)
})
