<template>
    <div>
        <Header @add="addUndoItem" />
        <undo-list
            :list="undoList"
            @delete="deleteHandle"
            @status="changeStatus"
            @reset="resetStatus"
            @change="changeItemStatus"
            >
         </undo-list>
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
      this.undoList.push({
        status: 'div',
        value: val
      })
    },
    deleteHandle (index) {
      this.undoList.splice(index, 1)
    },
    changeStatus (index) {
      let newUndoList = this.undoList.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            status: 'input',
            value: item.value
          }
        } else {
          return item
        }
      })
      this.undoList = newUndoList
    },
    resetStatus () {
      this.undoList.forEach(item => {
        item.status = 'div'
      })
    },
    // 改变输入框的值
    changeItemStatus (obj) {
      let newUndoList = this.undoList.map((item, itemIndex) => {
        if (itemIndex === obj.index) {
          return {
            status: item.status,
            value: obj.value
          }
        } else {
          return item
        }
      })
      this.undoList = newUndoList
    }
  }
}
</script>
