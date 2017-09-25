<template>
  <div class="s-img" :style="'background-image: url('+url+');border-radius: '+radius+'px;width: '+width+';height: '+width+';'"></div>
</template>

<script>
    export default {
      name: 'square-img',
      props: {
        url: String,
        width: {
          type: String,
          default: '100px'
        },
        radius: {
          type: [Number, String],
          default: 6
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .s-img {
    display: block;
    background-position: center;
    background-size: cover;
  }
</style>
