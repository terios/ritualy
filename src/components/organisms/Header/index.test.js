// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

const dummyFunction = jest.fn();

it('Shallow', () => {
  shallow(<Header
    righElm={<div><i className="material-icons">filter_list</i></div>}
    righElmAction={dummyFunction}
  />)
})
