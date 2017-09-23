<template>
  <div>
    <mt-search
      class="search-bar"
      v-model="search_text"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search_text: ''
      }
    }
  }
</script>

<style scoped>
  .search-bar {
    z-index: 0;
    height: 100%;
  }
</style>
