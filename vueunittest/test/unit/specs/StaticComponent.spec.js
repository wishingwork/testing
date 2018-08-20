/* eslint-disable */
import Vue from 'vue'
import StaticComponent from '@/components/StaticComponent'

describe('Static component', () => {
  it('has a mounted hoot', () => {
    expect(typeof StaticComponent.mounted).to.eql('function')
  })

  const Constructor = Vue.extend(StaticComponent)

  it('msg should change to bye bye', () => {
    expect(StaticComponent.msg).to.eql('bye bye')
  })

  const staticComponent = new Constructor().$mount()

  it('msg should in page', () => {
    expect(staticComponent.$el.textContent).to.contain('bye bye')
  })
})
