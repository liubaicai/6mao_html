<template>
    <div>
      <div class="card">
        <img class="card-img" src="http://blog.liubaicai.net/static/image/sitelogo.jpg">
        <div class="card-title card-line">
          韭菜找个男朋友
        </div>
        <div class="card-line">
          <img class="card-icon" src="../assets/svg/female.svg"> · 北京市朝阳区
        </div>
        <div class="card-line">
          要求器大活好，有车有房，大波，浪，开卡丁车，年入几十亿的优先。程序员的猫不要。
        </div>
        <div class="card-buttons card-line">
          <mt-button class="card-button" type="default" size="small">
            <img class="card-button-img" src="../assets/svg/ios-email-outline.svg">
          </mt-button>
          <mt-button class="card-button" type="default" size="small">
            <img class="card-button-img" src="../assets/svg/ios-heart-outline.svg">
          </mt-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
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
    margin: 8px;
    padding: 16px;
    text-align: left;
  }
  .card-line {
    margin: 12px 0 0 0;
  }
  .card-img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 6px;
  }
  .card-title {
    font-size: 24px;
  }
  .card-icon {
    height: 12px;
  }
  .card-buttons {
    text-align: right;
  }
  .card-button {
    margin-left: 8px;
  }
  .card-button-img {
    height: 20px;
    margin-top: 4px;
  }
</style>
