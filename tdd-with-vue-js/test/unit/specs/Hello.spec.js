import Vue from 'vue'
import Hello from '@/components/HelloWorld'
import ClickMeButton from '@/components/ClickMeButton'
import VueResource from 'vue-resource'
Vue.use(VueResource)

let vm
beforeEach(function () {
  const Constructor = Vue.extend(Hello)
  vm = new Constructor().$mount()
})

describe('TDD for vue project', () => {
  it('should check that msg is Welcome to Your Vue.js App', () => {
    expect(vm.$data.msg).to.equal('Welcome to Your Vue.js App')
  })
  it('should render my msg inside a h1', () => {
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal(vm.$data.msg)
  })
  it('should render correct contents', () => {
    const data = {
      data: {
        msg: 'plop'
      }
    }
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor(data).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('plop')
  })
  // When add a new variable in vue data property
  it('should create a counter with zero value', () => {
    expect(vm.$data.counter).to.equal(0)
  })
  // To create a div contain counter variable
  it('should render counter with counter data value', () => {
    const data = {
      data: {
        counter: 48
      }
    }
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor(data).$mount()
    expect(vm.$el.querySelector('.hello div.counter').textContent).to.equal('48')
  })
  // To get 'name' property of vue project
  it('should check the name of my vue', () => {
    expect(vm.$options.name).to.equal('HelloWorld')
  })

  // to ensure the parent component include a shild component
  it('should include a clickMeButton', () => {
    const clickMeButton = vm.$options.components.ClickMeButton
    expect(clickMeButton).to.contain(ClickMeButton)
  })
  // To ensure there is a message props in ClickMeButton component
  it('should define a message to put inside the clickMeButton', () => {
    expect(vm.$options.components.ClickMeButton.props).to.haveOwnProperty('message')
  })
  // To ensure the button label text is passed from props
  it('should verify textContent of the Click Me Buton', () => {
    expect(vm.$el.querySelector('.clickMeButton button').textContent).to.equal('Increment counter')
  })
})

describe('incrementCounter', function () {
  // test for a method
  it('should increment the counter to 1', () => {
    vm.incrementCounter()
    expect(vm.$data.counter).to.equal(1)
  })
  // link the event of the button from parent to child component
  it('should increment counter when button from ClickMeButton is clicked', () => {
    let button = vm.$el.querySelector('.clickMeButton button')
    button.click()
    expect(vm.$data.counter).to.equal(1)
  })
})

describe('incrementFromTheDice', () => {
  it('should call api to get the dice number', () => {
    sinon.stub(Vue.http, 'get').returnsPromise()
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.incrementFromTheDice()
    expect(Vue.http.get).to.have.been.calledWith('http://roll.diceapi.com/json/d6')
    Vue.http.get.restore()
  })
  it('should call increment counter from API answer', () => {
  	// Fake API data
    const promiseCall = sinon.stub(Vue.http, 'get').returnsPromise()
    promiseCall.resolves({ body: '5' })
    // Default data
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({ data: { counter: 6 } }).$mount()
    // Run function with Fake API and default data
    vm.incrementFromTheDice()
    expect(vm.$data.counter).to.equal(11)
    Vue.http.get.restore()
  })

  it('should reinit counter when api rejects error', () => {
    const promiseCall = sinon.stub(Vue.http, 'get').returnsPromise()
    promiseCall.rejects()
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({ data: { counter: 6 } }).$mount()

    vm.incrementFromTheDice()
    expect(vm.$data.counter).to.equal(0)
    Vue.http.get.restore()
  })

  it('should incrementFromTheDice when button roll-the-dice is clicked', () => {
    let button = vm.$el.querySelector('button.roll-the-dice')
    const promiseCall = sinon.stub(Vue.http, 'get').returnsPromise()
    promiseCall.resolves({ body: '5' })
    button.click()
    expect(vm.$data.counter).to.equal(5)
    Vue.http.get.restore()
  })
})
