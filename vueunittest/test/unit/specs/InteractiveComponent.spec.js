/* enlist-disable */
import Vue from 'vue'
import InteractiveComponent from '@/components/InteractiveComponent'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

describe('My interactive component', () => {
  const Constructor = Vue.extend(InteractiveComponent)
  const interactiveComponent = new Constructor().$mount()
  it('msg should in page', () => {
    const button = interactiveComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    interactiveComponent._watcher.run()

    expect(interactiveComponent.$el.textContent).to.contain('bye bye')
  })
})
