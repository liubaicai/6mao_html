<template>
  <div class="page-item">
    <slot>
      <div style="float: left;">
        <img class="page-item-img" slot="icon" src="http://blog.liubaicai.net/static/image/sitelogo.jpg">
      </div>
      <div class="page-item-content">
        <div class="page-item-title">
          <img style="height: 12px;" src="../../assets/svg/female.svg">·韭菜找个男朋友
        </div>
        <div class="page-item-info">
          隔壁老王 发布于<img style="height: 10px;" src="../../assets/svg/ios-location-outline.svg">北京市朝阳区
        </div>
        <div class="page-item-description">
          要求器大活好，有车有房，大波，浪，开卡丁车，卡丁车，年入几十亿的优先。程序员的猫年入几十亿的优先。程序员的猫不要。sfsfsf大哥大哥大哥大哥放松放松发发发
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
    export default {
      name: 'line-item'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-item {
    width: calc(100% - 24px);
    height: 90px;
    float: left;
    margin: 0 12px 0 12px;
    border-bottom:1px solid #eeeeee;
  }
  .page-item:first-child {
    border-top: 1px solid #eeeeee;
  }
  /*.page-item:last-child {*/
    /*border-bottom:none;*/
  /*}*/
  .page-item-img {
    width: 60px;
    height: 60px;
    margin: 15px 0;
  }
  .page-item-content {
    width: calc(100% - 70px);
    padding: 12px 0 10px 10px;
    float: left;
  }
  .page-item-title {
    font-size: 16px;
    float: none;
  }
  .page-item-info {
    margin-top: 5px;
    font-size: 10px;
    float: none;
    color: #999999;
  }
  .page-item-description {
    margin-top: 5px;
    font-size: 5px;
    color: #999999;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    float: none;
  }
</style>
