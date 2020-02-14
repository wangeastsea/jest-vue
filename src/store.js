import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputValue: ''
  },
  mutations: {
    changeInputValue (state, payload) {
      state.inputValue = payload
    }
  }
})

export default store
