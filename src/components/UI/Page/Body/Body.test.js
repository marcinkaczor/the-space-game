/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import PageBody from './Body'

describe('PageBody', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<PageBody><div>Hello</div></PageBody>)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with child and column prop', () => {
    const column = true
    const Child = () => <div>Hello from child</div>

    const wrapper = mount(
      <PageBody column={column}>
        <Child />
      </PageBody>
    )
    expect(wrapper.prop('column')).toEqual(column)
    expect(wrapper.find(Child).length).toEqual(1)
  })
})
