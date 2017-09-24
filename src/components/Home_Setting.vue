<template>
    <div>
      <div>
        <mt-cell class="setting-item" title="设置1">
          <mt-switch v-model="value1"></mt-switch>
        </mt-cell>
      </div>
      <div>
        <mt-cell class="setting-item" title="标题" is-link></mt-cell>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          value1: true
        }
      }
    }
</script>

<style scoped>
  .setting-item {
    padding: 10px 0;
  }
</style>
