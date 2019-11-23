import { mount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store'

// 每次执行都重新计算setTimeout
beforeEach(() => {
  jest.useFakeTimers()
})

it(`
1. 用户会在header 输入框输入内容
2. 用户会点击回车按钮
3. 列表项目应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList, { store })
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
  const content = 'donghai'
  inputElem.setValue(content)
  inputElem.trigger('change')
  inputElem.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(listItems.length).toBe(1)
  // 因为有减号，所有不能使用toBe
  expect(listItems.at(0).text()).toContain(content)
})

it(`
1. 用户进入页面时，请求远程数据
2. 列表应该展示远程返回的数据
`, () => {
  const wrapper = mount(TodoList, { store })
  expect(setTimeout).toHaveBeenCalledTimes(1)
  // 提前执行所有定时器
  jest.runAllTimers()
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(2)
  })
})
