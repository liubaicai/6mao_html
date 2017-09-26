<template>
  <div class="popup-content">
    <div>
      <line-item class="popup-field">
        <mt-field placeholder="昵称" type="text" :value="nickName"></mt-field>
      </line-item>
      <line-item class="popup-field">
        <mt-field placeholder="位置" type="text" :value="location" readonly>
          <mt-button @click="onLocationSelect" size="small">选择</mt-button>
        </mt-field>
      </line-item>
    </div>
    <mt-button class="popup-button" size="large" type="primary" @click="onSaveClick">保存</mt-button>
  </div>
</template>

<script>
  import LineItem from '../modules/LineItem.vue'
  export default {
    props: {
      nickName: String,
      location: String
    },
    data () {
      return {
      }
    },
    methods: {
      onSaveClick () {
        this.$emit('onSaveClick')
      },
      onLocationSelect () {
        this.$emit('onLocationSelect')
      }
    },
    components: {
      LineItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popup-content {
    width: 60vw;
    height: auto;
    border:1px solid #666666;
    border-radius:6px;
    background: #ffffff;
    float: left;
    padding: 24px;
  }
  .popup-field {
    width: 100%;
    height: 48px;
    margin: 0;
    float: left;
  }
  .popup-button {
    width: 100%;
    margin: 12px 0 0 0;
    float: left;
  }
</style>
