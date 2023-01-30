/// <reference types="@snoka/test"/>
import { mount } from '@vue/test-utils'
import Meow from './Meow.vue'

test('meow', async () => {
  console.log(Meow)
  const wrapper = mount(Meow)

  expect(wrapper.html()).toMatchSnapshot()
})
