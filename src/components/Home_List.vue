<template>
  <div>
    <mt-search
      class="search-bar"
      v-model="search_text"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <div>
      <line-item></line-item>
      <line-item></line-item>
      <line-item></line-item>
    </div>
  </div>
</template>

<script>
  import LineItem from './modules/LineItem.vue'

  export default {
    data () {
      return {
        search_text: ''
      }
    },
    components: {
      LineItem
    }
  }
</script>

<style scoped>
  .search-bar {
    z-index: 0;
    height: 100%;
  }
</style>
