<template>
  <div>
    <line-item class="setting-item">
      <mt-cell class="setting-item-cell" title="设置1">
        <mt-switch v-model="value1"></mt-switch>
      </mt-cell>
    </line-item>
    <line-item class="setting-item">
      <mt-cell class="setting-item-cell" title="标题" is-link></mt-cell>
    </line-item>
  </div>
</template>

<script>
  import LineItem from '../modules/LineItem.vue'
  export default {
    data () {
      return {
        value1: true
      }
    },
    components: {
      LineItem
    }
  }
</script>

<style scoped>
  .setting-item {
    width: 100%;
    height: 70px;
    margin: 0;
  }
  .setting-item-cell {
    padding: 10px 0;
  }
</style>
