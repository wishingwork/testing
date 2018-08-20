/* eslint-disable */
import Vue from 'vue'
import StaticComponent from '@/components/StaticComponent'

describe('My static component', () =>{
  const Constructor = Vue.extend(StaticComponent)
  const staticComponent = new Constructor().$mount()
  it('msg should in page', () => {
    staticComponent.msg = 'bye bye'
    Vue.nextTick(() => {
      expect(staticComponent.$el.textContent).to.contain('bye bye')
    })
  })
})