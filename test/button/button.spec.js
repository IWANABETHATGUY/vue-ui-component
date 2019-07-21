import { mount } from '@vue/test-utils';
import VButton from '../../src/button/Button.vue';

describe('v-button', () => {
  test('should display correct icon', () => {
    const wrapper = mount(VButton, { propsData: { icon: 'setting' } });

    const vm = wrapper.vm;
    const use = vm.$el.querySelector('use');
    const xlink = use.getAttribute('xlink:href');
    expect(xlink).toBe('#i-setting');
  });
  test('should replace original icon if loading is true', () => {
    const wrapper = mount(VButton, {
      propsData: { icon: 'setting', loading: true },
    });

    const vm = wrapper.vm;
    const use = vm.$el.querySelector('use');
    const xlink = use.getAttribute('xlink:href');
    expect(xlink).toBe('#i-loading');
  });
  test('icon svg order should be 0 if iconPosition is default or left', () => {
    const wrapper = mount(VButton, { propsData: { icon: 'setting' } });

    const vm = wrapper.vm;
    const svg = vm.$el.querySelector('svg');
    const { order } = window.getComputedStyle(svg);
    expect(order).toBe('0');
  });

  test('icon svg order should be 2 if iconPosition is right', () => {
    const wrapper = mount(VButton, {
      propsData: { icon: 'setting', 'icon-position': 'right' },
    });

    const vm = wrapper.vm;
    const svg = vm.$el.querySelector('svg');
    const { order } = window.getComputedStyle(svg);
    expect(order).toBe('2');
  });
});
