<!--suppress XmlDuplicatedId -->
<template>
  <div>
    <mt-header fixed :title="title" class="home-header">
      <mt-button icon="back" slot="left" v-show="canBack">返回</mt-button>
      <mt-button icon="more" slot="right" v-show="false"></mt-button>
    </mt-header>
    <mt-tab-container v-model="selected" class="container">
      <mt-tab-container-item id="tab-hot">
        <home-hot></home-hot>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-pets">
        <home-list></home-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-chat">
        <home-chat></home-chat>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-person">
        <home-center></home-center>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-setting">
        <home-setting></home-setting>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="tab-hot">
        <img slot="icon" src="../assets/svg/ios-home-outline.svg">
        热门
      </mt-tab-item>
      <mt-tab-item id="tab-pets">
        <img slot="icon" src="../assets/svg/ios-list-outline.svg">
        附近
      </mt-tab-item>
      <mt-tab-item id="tab-chat">
        <img slot="icon" src="../assets/svg/ios-chatboxes-outline.svg">
        私信
      </mt-tab-item>
      <mt-tab-item id="tab-person">
        <img slot="icon" src="../assets/svg/ios-person-outline.svg">
        个人中心
      </mt-tab-item>
      <mt-tab-item id="tab-setting">
        <img slot="icon" src="../assets/svg/ios-settings.svg">
        设置
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import HomeHot from './Home_Hot'
  import HomeList from './Home_List'
  import HomeChat from './Home_Chat'
  import HomeCenter from './Home_Center'
  import HomeSetting from './Home_Setting'

  export default {
    name: 'home',
    data () {
      return {
        selected: 'tab-hot',
        title: '六毛',
        canBack: false
      }
    },
    components: {
      HomeHot,
      HomeList,
      HomeChat,
      HomeCenter,
      HomeSetting
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-header {
    z-index: 2;
  }
  .container {
    margin-top: 40px;
    margin-bottom: 60px;
  }
</style>
