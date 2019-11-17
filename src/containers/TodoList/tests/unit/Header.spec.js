import { shallowMount } from '@vue/test-utils'
import Header from '@/containers/TodoList/components/Header.vue'
import { findTestWrapper } from '@/utils/testUtils'

describe('Header 组件', () => {
  it('包含input框', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    expect(input.exists()).toBe(true)
  })

  it('input框的初始值为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('input发生变化，数据应该跟着变化', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('dong hai')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('dong hai')
  })

  it('input发生变化，无内容时， 无反应', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input发生变化，有内容时，向外触发事件', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('234')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
  })

  it('input发生变化，有内容时，向外触发事件,并清空input框', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('234')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })

  // 快照功能
  it('样式发生改变，给出提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
})
