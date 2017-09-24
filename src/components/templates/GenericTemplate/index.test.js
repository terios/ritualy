// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow, mount } from 'enzyme'
import GenericTemplate from '.'


const wrap = (props = {}) => shallow(<GenericTemplate header="header" {...props}>test</GenericTemplate>)

it('mounts', () => {
  mount(<GenericTemplate header="header">test</GenericTemplate>)
})

it('should have children', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders header', () => {
  const wrapper = wrap()
  expect(wrapper.contains('header')).toBe(true)
})
