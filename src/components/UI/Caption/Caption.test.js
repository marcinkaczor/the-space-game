/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Caption from '.'

describe('Caption', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Caption />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with title', () => {
    const title = 'Loading test ...'

    const wrapper = mount(<Caption title={title} />)
    expect(wrapper.text()).toEqual(title)
  })
})
