/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import PageBody from './Body'

describe('PageBody', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<PageBody />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with child', () => {
    const Child = () => <div>Hello from child</div>

    const wrapper = mount(
      <PageBody>
        <Child />
      </PageBody>
    )
    expect(wrapper.find(Child).length).toEqual(1)
  })

  it('renders with column', () => {
    const column = true

    const wrapper = mount(<PageBody column={column} />)
    expect(wrapper.prop('column')).toEqual(column)
  })
})
