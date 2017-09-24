<template>
  <div>
    <mt-search
      class="search-bar"
      v-model="search_text"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <div>
      <div class="page-item">
        <div style="float: left;">
          <img class="page-item-img" slot="icon" src="http://blog.liubaicai.net/static/image/sitelogo.jpg">
        </div>
        <div class="page-item-content">
          <div class="page-item-title">
            <img style="height: 12px;" src="../assets/svg/female.svg">·韭菜找个男朋友
          </div>
          <div class="page-item-info">
            隔壁老王 发布于<img style="height: 10px;" src="../assets/svg/ios-location-outline.svg">北京市朝阳区
          </div>
          <div class="page-item-description">
            要求器大活好，有车有房，大波，浪，开卡丁车，卡丁车，年入几十亿的优先。程序员的猫年入几十亿的优先。程序员的猫不要。sfsfsf大哥大哥大哥大哥放松放松发发发
          </div>
        </div>
      </div>
    </div>
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
  .page-item {
    width: calc(100% - 24px);
    height: 100px;
    float: left;
    margin: 0 12px 0 12px;
    border-bottom:1px solid #eeeeee;
  }
  .page-item-img {
    width: 80px;
    height: 80px;
    margin: 10px 0;
  }
  .page-item-content {
    width: calc(100% - 90px);
    padding: 10px 0 10px 10px;
    float: left;
  }
  .page-item-title {
    font-size: 18px;
    float: none;
  }
  .page-item-info {
    margin-top: 5px;
    font-size: 12px;
    float: none;
  }
  .page-item-description {
    margin-top: 10px;
    font-size: 12px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    float: none;
  }
</style>
