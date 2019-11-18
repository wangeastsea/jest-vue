import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'
// import Header from '@/containers/TodoList/components/Header.vue'
import UndoList from '@/containers/TodoList/components/UndoList.vue'
// TDD + 单元测试 适合测试组件库， 不适合业务代码，会有业务耦合
describe('TodoList 组件', () => {
  it('初始化时，undoList应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('初始化时，todoList应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const todoList = wrapper.vm.$data.todoList
    expect(todoList).toEqual([])
  })

  // 集成测试， 2个组件的交互
  // it('TodoList 监听到Header的add事件时，会增加一个内容', () => {
  //   const wrapper = shallowMount(TodoList)
  //   const header = wrapper.find(Header)
  //   header.vm.$emit('add', 'dong hai')
  //   const undoList = wrapper.vm.$data.undoList
  //   expect(undoList).toEqual(['dong hai'])
  // })

  it('应该调用undoList,传递 list参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('deleteHandle被调用时，undolist列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
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
    })
    wrapper.vm.deleteHandle(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      {
        status: 'div', value: 1
      },
      {
        status: 'div', value: 3
      }
    ])
  })

  it('监听到Header的add事件时，会增加内容', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
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
    })
    wrapper.vm.addUndoItem(4)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([
      {
        status: 'div', value: 1
      },
      {
        status: 'div', value: 2
      },
      {
        status: 'div', value: 3
      },
      {
        status: 'div', value: 4
      }
    ])
  })

  it('changeStatus方法执行，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
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
    })
    wrapper.vm.changeStatus(1)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([
      {
        status: 'div', value: 1
      },
      {
        status: 'input', value: 2
      },
      {
        status: 'div', value: 3
      }
    ])
  })

  it('resetStatus方法执行，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
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
    })
    wrapper.vm.resetStatus(1)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([
      {
        status: 'div', value: 1
      },
      {
        status: 'div', value: 2
      },
      {
        status: 'div', value: 3
      }
    ])
  })

  it('changeItemStatus方法执行，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
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
    })
    wrapper.vm.changeItemStatus({
      index: 1,
      value: '444'
    })
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([
      {
        status: 'div', value: 1
      },
      {
        status: 'input', value: '444'
      },
      {
        status: 'div', value: 3
      }
    ])
  })
})
