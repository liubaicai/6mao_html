<template>
    <div>
      <div v-touch="touch">
        <div class="card" @swipeLeft="swipeLeft" @swipeRight="swipeRight">
          <square-img width="calc(100vw - 64px)" url="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg"></square-img>
          <div class="card-title card-line">
            <img class="card-icon" src="../../assets/svg/female.svg">·韭菜找个男朋友
          </div>
          <div class="card-line card-info">
            隔壁老王 发布于<img style="height: 12px;" src="../../assets/svg/ios-location-outline.svg">北京市朝阳区
          </div>
          <div class="card-line card-description">
            要求打发打发，有车有房，大波，浪，开卡丁车，年入几十亿的优先。程序员的猫不要。
          </div>
          <div class="card-buttons card-line">
            <mt-button class="card-button" type="default" size="small">
              <img class="card-button-img" src="../../assets/svg/ios-email-outline.svg">
            </mt-button>
            <mt-button class="card-button" type="default" size="small">
              <img class="card-button-img" src="../../assets/svg/ios-heart-outline.svg">
            </mt-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import SquareImg from '../modules/SquareImg.vue'
  export default {
    computed: {
      touch () {
        return {
          x: this.x,
          y: this.y,
          methods: true
        }
      }
    },
    methods: {
      swipeLeft () {
        console.log('swipeLeft')
      },
      swipeRight () {
        console.log('swipeRight')
      }
    },
    components: {
      SquareImg
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
    min-height: 300px;
  }
  .card-line {
    font-size: 14px;
    margin: 12px 0 0 0;
  }
  .card-title {
    font-size: 22px;
  }
  .card-info {
    color: #999999;
  }
  .card-description {
    color: #999999;
  }
  .card-icon {
    height: 16px;
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
