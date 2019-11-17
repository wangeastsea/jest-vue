import { shallowMount } from '@vue/test-utils'
import Header from '@/containers/TodoList/components/Header.vue'
import { findTestWrapper } from '@/utils/testUtils'
it('header包含input框', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  expect(input.exists()).toBe(true)
})

it('header包含input框的初始值为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('')
})

it('header包含input发生变化，数据应该跟着变化', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('dong hai')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('dong hai')
})

it('header包含input发生变化，无内容时， 无反应', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

it('header包含input发生变化，有内容时，向外触发事件', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('234')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
})

it('header包含input发生变化，有内容时，向外触发事件,并清空input框', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('234')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
})

// 快照功能
it('header样式发生改变，给出提示', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})
