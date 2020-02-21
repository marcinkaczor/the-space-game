/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Page from '.'

describe('Page', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Page><div>Hello</div></Page>)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with child', () => {
    const Child = () => <div>Hello from child</div>

    const wrapper = mount(
      <Page>
        <Child />
      </Page>
    )
    expect(wrapper.find(Child).length).toEqual(1)
  })
})
