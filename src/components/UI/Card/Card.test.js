/* global describe, it, expect, beforeAll */
import React from 'react'
import { createRender } from '@material-ui/core/test-utils'

import Card from '.'

const title = 'Title'
const item = {
  name: 'name',
  model: 'model',
  crew: 'crew'
}
const attributes = ['model', 'crew']

describe('Card', () => {
  let render

  beforeAll(() => {
    render = createRender()
  })

  it('renders with props', () => {
    const wrapper = render(
      <Card title={title} item={item} attributes={attributes} />
    )
    expect(wrapper.find('span').text()).toEqual(title)
    expect(wrapper.find('tbody').find('tr').length).toEqual(attributes.length)
  })
})
