<!--suppress XmlDuplicatedId -->
<template>
  <div>
    <mt-header fixed title="多个按钮">
      <mt-button icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="tab-home">
        主页
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-pets">
        附近
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-chat">
        私信
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-person">
        个人中心
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-setting">
        设置
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="tab-home">
        <img slot="icon">
        主页
      </mt-tab-item>
      <mt-tab-item id="tab-pets">
        <img slot="icon">
        附近
      </mt-tab-item>
      <mt-tab-item id="tab-chat">
        <img slot="icon">
        私信
      </mt-tab-item>
      <mt-tab-item id="tab-person">
        <img slot="icon">
        个人中心
      </mt-tab-item>
      <mt-tab-item id="tab-setting">
        <img slot="icon">
        设置
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      selected: 'tab-home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
