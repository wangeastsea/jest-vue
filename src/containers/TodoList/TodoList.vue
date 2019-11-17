<template>
    <div>
        <Header @add="addUndoItem" />
        <ul>
            <li v-for="(item, index) in undoList" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
import Header from '@/containers/TodoList/components/Header.vue'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
      undoList: [],
      todoList: []
    }
  },
  methods: {
    addUndoItem (val) {
      this.undoList.push(val)
    }
  }
}
</script>
