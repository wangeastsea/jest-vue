
import store from '@/store'

it(`
 当store接收changeInputValue 的commit 时， inputValue发生变化
`, () => {
  const value = '1234'
  store.commit('changeInputValue', value)
  expect(store.state.inputValue).toBe(value)
})
