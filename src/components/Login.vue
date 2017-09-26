<template>
  <div>
    <mt-header fixed :title="title" class="home-header">
      <mt-button slot="left" icon="back" v-show="canBack" @click="$router.back()">返回</mt-button>
      <mt-button icon="more" slot="right" v-show="false"></mt-button>
    </mt-header>
    <div class="content">
      <template v-if="register">
        <register-panel @toLoginClick="register = false"></register-panel>
      </template>
      <template v-else>
        <login-panel @toRegisterClick="register = true"></login-panel>
      </template>
    </div>
  </div>
</template>

<script>
  import LoginPanel from './Login/Login'
  import RegisterPanel from './Login/Register'
  export default {
    name: 'login',
    data () {
      return {
        register: false,
        canBack: true
      }
    },
    computed: {
      title () {
        if (this.register) {
          return '注册'
        } else {
          return '登录'
        }
      }
    },
    created () {
      if (this.$route.query.type === 'reg') {
        this.register = true
      } else {
        this.register = false
      }
    },
    methods: {
    },
    watch: {
      '$route' (to, from) {
        if (this.$route.query.type === 'reg') {
          this.register = true
        } else {
          this.register = false
        }
      }
    },
    components: {
      LoginPanel,
      RegisterPanel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    margin-top: 40px;
    background: #999999;
    height: calc(100vh - 40px);
  }
</style>
