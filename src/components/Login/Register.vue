<template>
  <div class="page-content">
    <div>
      <line-item class="page-field">
        <mt-field placeholder="注册邮箱" type="email" state="success"></mt-field>
      </line-item>
      <line-item class="page-field">
        <mt-field placeholder="密码" type="password" state="error"></mt-field>
      </line-item>
      <line-item class="page-field">
        <mt-field placeholder="确认密码" type="password" state="error"></mt-field>
      </line-item>
    </div>
    <a class="page-to-login" @click="$emit('toLoginClick')">去登录→</a>
    <mt-button class="page-button" size="large" type="primary" @click="onRegisterClick">注册</mt-button>
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
    methods: {
      onRegisterClick () {
        console.log(123)
      }
    },
    components: {
      LineItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-content {
    float: left;
    width: auto;
    margin: 15vh 0vw;
    padding: 24px;
    border:1px solid #666666;
    border-radius:6px;
    background: #ffffff;
  }
  .page-field {
    width: 100%;
    height: 48px;
    margin: 0;
    float: left;
  }
  .page-button {
    width: 100%;
    margin: 12px 0 0 0;
    float: left;
  }
  .page-to-login {
    width: 100%;
    text-align: right;
    font-size: 12px;
    color: #999999;
    margin: 12px 0 0 0;
    float: left;
  }
</style>
