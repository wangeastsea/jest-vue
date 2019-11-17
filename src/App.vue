<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './containers/TodoList/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style lang="stylus">
* {
    margin: 0;
    padding: 0
}
</style>
