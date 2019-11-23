import { mount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'
import { findTestWrapper } from '@/utils/testUtils'
import store from '@/store'
import axios from '@/containers/TodoList/__mocks__/axios.js'

// 每次执行都重新计算setTimeout
beforeEach(() => {
  axios.success = true
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
`, (done) => {
  const wrapper = mount(TodoList, { store })
  expect(setTimeout).toHaveBeenCalledTimes(1)
  // 提前执行所有定时器
  jest.runAllTimers()
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(2)
    // nextTick 异步的测试，需要加done才能等待异步函数执行完，执行expect函数。
    done()
  })
})

it(`
1. 用户进入页面时，请求远程数据失败
2. 列表应该展示空数据，不应该挂掉
`, (done) => {
  axios.success = false
  const wrapper = mount(TodoList, { store })
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(0)
    done()
  })
})
