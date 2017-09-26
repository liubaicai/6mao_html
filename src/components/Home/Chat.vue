<template>
    <div>
      <div class="page-item">
        <div>
          <square-img class="page-item-img" radius="0" width="40px" url="http://blog.liubaicai.net/static/image/sitelogo.jpg"></square-img>
        </div>
        <mt-cell class="page-item-cell" title="隔壁老王" label="真的么">
          <mt-badge type="error" size="small">5</mt-badge>
        </mt-cell>
      </div>
      <div class="page-item">
        <div>
          <square-img class="page-item-img" radius="0" width="40px" url="http://blog.liubaicai.net/static/image/sitelogo.jpg"></square-img>
        </div>
        <mt-cell class="page-item-cell" title="隔壁老张" label="啊啊啊啊啊啊啊">
          <mt-badge type="error" size="small">1</mt-badge>
        </mt-cell>
      </div>
      <div class="page-item">
        <div>
          <square-img class="page-item-img" radius="0" width="40px" url="http://blog.liubaicai.net/static/image/sitelogo.jpg"></square-img>
        </div>
        <mt-cell class="page-item-cell" title="隔壁老李" label="打发打发打发打发打发">
          15:36
        </mt-cell>
      </div>
      <div class="page-item">
        <div>
          <square-img class="page-item-img" radius="0" width="40px" url="http://blog.liubaicai.net/static/image/sitelogo.jpg"></square-img>
        </div>
        <mt-cell class="page-item-cell" title="隔壁老赵" label="嗯">
          昨天
        </mt-cell>
      </div>
    </div>
</template>

<script>
  import SquareImg from '../modules/SquareImg.vue'
  export default {
    components: {
      SquareImg
    }
  }
</script>

<style scoped>
  .page-item {
    width: calc(100% - 24px);
    height: 60px;
    float: left;
    margin: 0 12px 0 12px;
    border-bottom:1px solid #eeeeee;
  }
  .page-item div {
    float: left;
  }
  .page-item-img {
    margin: 10px 0;
  }
  .page-item .page-item-cell {
    background-image: none;
    min-height: 60px;
    height: 60px;
  }
</style>
