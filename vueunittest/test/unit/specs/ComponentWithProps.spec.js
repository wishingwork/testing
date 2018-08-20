/* eslint-disable */
import Vue from 'vue'
import ComponentWithProps from '@/components/ComponentWithProps'

describe('Component with props', () => {
  const Constructor = Vue.extend(ComponentWithProps)

  const componentWithProps = new Constructor({
    propsData: {
      propMsg: 'hello world'
    }
  }).$mount()

  it('msg should in page', () => {
    expect(componentWithProps.$el.textContent).to.contain('hello world')
  })
})
