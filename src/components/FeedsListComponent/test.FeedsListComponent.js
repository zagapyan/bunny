import React from 'react'
import { shallow } from 'enzyme'

import FeedsListComponent from './FeedsListComponent'

describe('FeedsListComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<FeedsListComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})