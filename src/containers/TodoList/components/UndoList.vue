<template>
<div class="undolist">
    <div class="title">
        正在进行
        <span data-test="count" class="count">
            {{list.length}}
        </span>
    </div>
    <ul>
        <li
        v-for="(item, index) in list"
        :key="index"
        data-test="item">
            {{item}}
            <span
                data-test="delete-button"
                @click="() => {handleDelete(index)}"
                >
                -
            </span>
        </li>

    </ul>
</div>
</template>
<script>
export default {
  name: 'UndoList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }

}
</script>
<style lang="stylus">
    .undolist {
        width: 600px;
        margin: 0 auto;
    }
    .title {
        margin: 10px 0;
        line-height: 30px;
        font-size: 24px;
        font-weight: bold;
    }
    .count {
        margin-top: 5px;
        float: right;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background: #e6e6e6;
        border-radius: 10px;
        color: #000;
        font-size: 12px;
    }
</style>
