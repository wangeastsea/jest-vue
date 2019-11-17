import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // shallowMount不渲染子组件，提供性能，不适用于集成测试
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.props('msg')).toEqual(msg)
    wrapper.setProps({
      msg: 'hello'
    })
    expect(wrapper.props('msg')).toEqual('hello')
  })
  // 快照测试
  it('组件渲染正常', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: 'de2ll lee'
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
