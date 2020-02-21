/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import PageHeader from './Header'

describe('PageHeader', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<PageHeader><div>Hello</div></PageHeader>)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with child and home and addition props', () => {
    const home = true
    const addition = 'Hello from addition'
    const Child = () => <div>Hello from child</div>

    const wrapper = mount(
      <PageHeader home={home} addition={addition}>
        <Child />
      </PageHeader>
    )
    expect(wrapper.find('h1').exists()).toEqual(home)
    expect(wrapper.find('h2').text()).toEqual(addition)
    expect(wrapper.find(Child).length).toEqual(1)
  })
})
