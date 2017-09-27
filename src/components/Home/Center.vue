<template>
    <div>
      <div class="card">
        <img class="card-logo" src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg">
        <div class="card-right">
          <div style="font-size: 20px;float: none;">
            吃鸡真好玩
          </div>
          <div style="font-size: 12px;float: none;margin-top: 8px;color: #999999;">
            <img style="height: 8px;" src="../../assets/svg/ios-location-outline.svg">北京市朝阳区
          </div>
          <div style="margin-top: 12px;float: right;">
            <mt-button class="card-button" type="default" size="small" @click="onEditClick">
              编辑资料
            </mt-button>
          </div>
        </div>
      </div>
      <div style="font-size: 12px;float: left;margin: 8px 16px;">
        <div style="color: #999999;">已发布:</div>
        <line-item class="published-item"></line-item>
        <line-item class="published-item"></line-item>
      </div>
      <div style="font-size: 12px;margin: 8px 16px;">
        <mt-button class="publish-button" size="large"  @click.native="publishClick">发布</mt-button>
      </div>
    </div>
</template>

<script>
  import LineItem from '../modules/LineItem'
  import { MessageBox } from 'mint-ui'
  export default {
    data () {
      return {
        nickName: '',
        location: ''
      }
    },
    methods: {
      onEditClick () {
        this.$router.push({name: 'Profile'})
      },
      publishClick () {
        MessageBox.alert('操作成功!', '提示')
      }
    },
    components: {
      LineItem
    }
  }
</script>

<style scoped>
  .card {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .12);
    border-radius: 8px;
    background-color: white;
    box-sizing: border-box;
    display: block;
    margin: 8px 16px 8px 16px;
    padding: 16px;
    text-align: left;
    height: calc(6rem + 32px);
  }
  .card-logo {
    display: block;
    width: 6rem;
    height: 6rem;
    border-radius: 6px;
    float: left;
  }
  .card-right {
    float: left;
    margin-left: 1rem;
    height: 6rem;
    width: calc(100% - 7rem);
  }
  .published-item {
    width: 100%;
    margin: 0;
    float: left;
  }
  .published-item:first-child {
    border-bottom:none;
  }
  .published-item:last-child {
    border-bottom:none;
  }
  .publish-button {
    margin-top: 10px;
  }
</style>
