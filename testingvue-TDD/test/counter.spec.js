import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.js';
import expect from 'expect';

describe('Counter', () => {

  it("default to a count of 0", () => {
    let wrapper = mount(Counter);

    expect(wrapper.vm.count).toBe(0);
  });

});
