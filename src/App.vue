<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {
    font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;
    margin: 0;
  }
  #app {
    color: #333333;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
</style>
