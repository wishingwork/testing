import Vue from 'vue'
import Foo from '@/components/Foo'

describe("Foo.vue", () => {
  it('should have correct `data`', () => {
    expect(typeof Foo.data).to.equal('function')
    const data = Foo.data()
    expect(data.who).to.equal('world')
    expect(data.updates).to.equal(0)
  })
  it('should return 0 from giveZero', () => {
    expect(typeof Foo.methods.giveZero).to.equal('function')
    expect(Foo.methods.giveZero()).to.equal(0)
  })

  it('someProp defaults to "default value"', () => {
    const foo = mount(Foo, { data: { someProp: 'custom value' } })
    expect(foo.someProp).to.equal("custom value")
  })
  it('computed property is correct', () => {
    const foo = mount(Foo)
    expect(foo.msg).to.equal('Hello world')
  })

  it('render proper DOM', () => {
    const foo = mount(Foo)
    // Vue.nextTick(() => {
    expect(foo.$el.querySelector('h1').textContent).to.equal('Hello world')
    expect(foo.$el.querySelector('p').textContent).to.equal('Some Text')
    // })

  })

  it('computed property updates correctly', () => {
    const foo = mount(Foo)
    foo.who = 'hehe'
    expect(foo.msg).to.equal('Hello hehe')
  })

  it('render proper DOM on changes', (done) => {
    const foo = mount(Foo)
    foo.who = 'universe'
    Vue.nextTick(() => {
      expect(foo.$el.querySelector('h1').textContent).to.equal('Hello universe')
      done()
    })
  })

  it('call `giveZero` on click', () => {
    sinon.spy(Foo.methods, 'giveZero')
    const foo = mount(Foo)
    foo.$el.dispatchEvent(new Event('click'))
    expect(Foo.methods.giveZero.called).to.equal(true)
    Foo.methods.giveZero.restore()
  })

  it('watcher triggered when `who` cahnges', async () => {
    sinon.spy(Foo.watch, 'who')
    const foo = mount(Foo)
    foo.who = 'universe'
    await nextTick()
    expect(Foo.watch.who.called).to.equal(true)
    expect(foo.updates).to.equal(1)
    Foo.watch.who.restore()
  })

})

function mount(component, options) {
  const Constructor = Vue.extend(component)
  return new Constructor(options).$mount()
}
