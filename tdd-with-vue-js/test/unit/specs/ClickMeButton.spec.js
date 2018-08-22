import Vue from 'vue'
import ClickMeButton from '@/components/ClickMeButton'
let vm

beforeEach(function () {
  // To create the props for the component
  const config = {
    propsData: {
      message: 'Click Me Button'
    }
  }
  const Constructor = Vue.extend(ClickMeButton)
  vm = new Constructor(config).$mount()
})

describe('ClickMeButton', () => {

  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('clickMeButton')
  })
  // Assign a new button label
  it('should render button with text Click Me Button', () => {
    expect(vm.$el.querySelector('.clickMeButton button').textContent).to.equal('Click Me Button')
  })

})

describe('onButtonClick', () => {
  it('should emit click', () => {
    sinon.spy(vm, '$emit')
    vm.onButtonClick()
    expect(vm.$emit).to.have.been.calledWith('buttonHasBeenClicked')
  })
  // ensure an event is triggered when the button is clicked
  it('should emit an event when button is clicked', () => {
    sinon.spy(vm, '$emit')
    const button = vm.$el.querySelector('button')
    button.click()
    expect(vm.$emit).to.have.been.calledWith('buttonHasBeenClicked')
  })
})
