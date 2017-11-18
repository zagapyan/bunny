import React from 'react'
import { shallow } from 'enzyme'

import ListComponent from './ListComponent'

describe('ListComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ListComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})