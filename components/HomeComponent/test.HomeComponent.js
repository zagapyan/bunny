import React from 'react'
import { shallow } from 'enzyme'

import HomeComponent from './HomeComponent'

describe('HomeComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<HomeComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})