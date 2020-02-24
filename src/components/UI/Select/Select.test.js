/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { capitalize } from '../../../utils'

import Select from '.'

const label = 'Label'
const helper = 'Select which value you want to choose'
const values = ['foo', 'bar']
const currentValue = 'foo'
const setCurrentValue = () => {}

describe('Select', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <Select
        label={label}
        values={values}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with its props', () => {
    const wrapper = mount(
      <Select
        label={label}
        helper={helper}
        values={values}
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
      />
    )
    expect(wrapper.find('label').text()).toEqual(capitalize(label))
    expect(wrapper.find('p').text()).toEqual(capitalize(helper))
    expect(wrapper.find('input').instance().value).toEqual(currentValue)
  })
})
