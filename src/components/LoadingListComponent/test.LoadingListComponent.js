import React from 'react'
import { shallow } from 'enzyme'

import LoadingListComponent from './LoadingListComponent'

describe('LoadingListComponent', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<LoadingListComponent {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})