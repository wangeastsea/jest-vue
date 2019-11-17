import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList'
import Header from '@/containers/TodoList/components/Header.vue'

it('TodoList初始化时，undoList应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('TodoList初始化时，todoList应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const todoList = wrapper.vm.$data.todoList
  expect(todoList).toEqual([])
})

it('TodoList 监听到Header的add事件时，会增加一个内容', () => {
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header)
  header.vm.$emit('add', 'dong hai')
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual(['dong hai'])
})
