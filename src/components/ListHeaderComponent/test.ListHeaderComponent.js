import React from 'react'
import { shallow } from 'enzyme'

import ListHeaderComponent from './ListHeaderComponent'

describe('ListHeaderComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ListHeaderComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})