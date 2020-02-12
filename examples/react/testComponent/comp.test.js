import React from 'react'

import { shallow } from '../enzyme'

import Comp from './comp.index'

describe('Test Comp', () => {
  it('Renders Wroking', () => {
    const wrapper = shallow(<Comp />)
    expect(wrapper.html()).toEqual('<div><span>Working!</span></div>')
  })
})
