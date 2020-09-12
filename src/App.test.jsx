import { mount } from 'enzyme'
import React from 'react'
import App from './App'

describe('Given the application', () => {
  it('Should render', () => {
    mount(<App />)
  })
})
