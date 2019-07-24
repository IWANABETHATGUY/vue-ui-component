import Input from '../../src/input/Input.vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
describe('Input ', () => {
  describe('props', () => {
    test('should accept value', () => {
      const wrapper = mount(Input, {
        propsData: {
          value: '1234',
        },
      });
      const vm = wrapper.vm;
      expect(vm.$el.querySelector('input').value).toBe('1234');
    });

    test('should accept disabled', () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true,
        },
      });
      const vm = wrapper.vm;

      expect(vm.$el.querySelector('input').disabled).toBe(true);
    });

    test('should accept readonly', () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true,
        },
      });
      const vm = wrapper.vm;
      expect(vm.$el.querySelector('input').readOnly).toBe(true);
    });

    test('should accept error', () => {
      const wrapper = mount(Input, {
        propsData: {
          error: 'error happen',
        },
      });
      const vm = wrapper.vm;
      expect(vm.$el.querySelector('use').getAttribute('xlink:href')).toBe(
        '#i-error'
      );
      expect(vm.$el.querySelector('span').textContent).toBe('error happen');
    });
  });

  describe('event', () => {
    test('should change value when emit input event', () => {
      const wrapper = mount(Input);
      const vm = wrapper.vm;
      const cb = sinon.spy();
      vm.$on('input', cb);
      const event = new Event('input');
      let inputElement = vm.$el.querySelector('input');
      inputElement.dispatchEvent(event);
      cb.calledWith(event);
    });

    test('should change value when emit focus event', () => {
      const wrapper = mount(Input);
      const vm = wrapper.vm;
      const cb = sinon.spy();
      vm.$on('focus', cb);
      const event = new Event('focus');
      let inputElement = vm.$el.querySelector('input');
      inputElement.dispatchEvent(event);
      cb.calledWith(event);
    });

    test('should change value when emit blur event', () => {
      const wrapper = mount(Input);
      const vm = wrapper.vm;
      const cb = sinon.spy();
      vm.$on('blur', cb);
      const event = new Event('blur');
      let inputElement = vm.$el.querySelector('input');
      inputElement.dispatchEvent(event);
      cb.calledWith(event);
    });

    test('should change value when emit change event', () => {
      const wrapper = mount(Input);
      const vm = wrapper.vm;
      const cb = sinon.spy();
      vm.$on('change', cb);
      const event = new Event('change');
      let inputElement = vm.$el.querySelector('input');
      inputElement.dispatchEvent(event);
      cb.calledWith(event);
    });
  });
});
