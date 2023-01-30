/// <reference types="@snoka/test"/>
import { mount } from '@vue/test-utils'
import Hello from './Hello.vue'

const Component = {
  template: '<div>Hello world</div>'
}

describe('vue + snoka demo', () => {
  test('mount component', async () => {

    const wrapper = mount(Hello, {
      props: {
        count: 4,
      },
    })

    expect(wrapper.text()).toContain('4 x 2 = 8')

    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('4 x 3 = 12')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('4 x 4 = 16')
  })
  test('mounts a component', () => {
    console.log(Component)

    const wrapper = mount(Component, {})

    expect(wrapper.html()).toContain('Hello world')
  })
})
