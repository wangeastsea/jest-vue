<template>
    <div>
        <Header @add="addUndoItem" />
        <undo-list :list="undoList" @delete="deleteHandle()"></undo-list>
    </div>
</template>
<script>
import Header from '@/containers/TodoList/components/Header.vue'
import UndoList from '@/containers/TodoList/components/UndoList.vue'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
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
    },
    deleteHandle (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>
