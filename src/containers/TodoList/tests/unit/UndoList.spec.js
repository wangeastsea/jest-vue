import { shallowMount } from '@vue/test-utils'
import UndoList from '@/containers/TodoList/components/UndoList.vue'
import { findTestWrapper } from '@/utils/testUtils'

describe('undolist组件', () => {
  it('参数为【】，count值为0，且表格无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(countElem.at(0).text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it('参数为【1,2,3】，count值为3，且表格有内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toEqual(3)
  })

  it('参数为【1,2,3】，count值为3，且表格有内容,且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div', value: 1
          },
          {
            status: 'div', value: 2
          },
          {
            status: 'div', value: 3
          }
        ]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'delete-button')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toEqual(3)
    expect(deleteButtons.length).toEqual(3)
  })

  it('点击删除按钮时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div', value: 1
          },
          {
            status: 'div', value: 2
          },
          {
            status: 'div', value: 3
          }
        ]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })

  it('列表项被点击，向外触发status事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div', value: 1
          },
          {
            status: 'div', value: 2
          },
          {
            status: 'div', value: 3
          }
        ]
      }
    })
    const item = findTestWrapper(wrapper, 'item').at(1)
    item.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
    expect(wrapper.emitted().status[0][0]).toBe(1)
  })

  it('列表内容显示一个输入框和2个列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div', value: 1
          },
          {
            status: 'input', value: 2
          },
          {
            status: 'div', value: 3
          }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input')
    expect(input.at(0).element.value).toBe('2')
    expect(input.length).toBe(1)
  })
  it('input框失去焦点时，向外触发input事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div', value: 1
          },
          {
            status: 'input', value: 2
          },
          {
            status: 'div', value: 3
          }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })
  it('input框变化时，向外触发change事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            status: 'div', value: 1
          },
          {
            status: 'input', value: 123
          },
          {
            status: 'div', value: 3
          }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input').at(0)
    input.trigger('change')
    console.log(wrapper.emitted().change)
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: '123',
      index: 1
    })
  })
})
