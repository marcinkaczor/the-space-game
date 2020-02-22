/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Select from '.'

describe('Select', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Select><div>Hello</div></Select>)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with child', () => {
    const Child = () => <div>Hello from child</div>

    const wrapper = mount(
      <Select>
        <Child />
      </Select>
    )
    expect(wrapper.find(Child).length).toEqual(1)
  })
})
