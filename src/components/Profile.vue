<template>
  <div class="content">
    <mt-header v-show="!isOnLocationSelect" fixed title="信息修改" class="home-header">
      <mt-button slot="left" icon="back" @click="$router.back()">返回</mt-button>
      <mt-button icon="more" slot="right" v-show="false"></mt-button>
    </mt-header>
    <div v-show="!isOnLocationSelect" class="popup-content">
      <div>
        <line-item class="popup-field">
          <mt-field placeholder="昵称" type="text"></mt-field>
        </line-item>
        <line-item class="popup-field">
          <mt-field placeholder="位置" type="text" :value="address" readonly>
            <mt-button @click="isOnLocationSelect = true" size="small">选择</mt-button>
          </mt-field>
        </line-item>
      </div>
      <mt-button class="popup-button" size="large" type="primary" @click="onSaveClick">保存</mt-button>
    </div>
    <div v-show="isOnLocationSelect" class="location-panel">
      <v-distpicker style="width: 100%;" :province="locationData.province" :city="locationData.city" :area="locationData.area"
                    @selected="onLocationSelected" type="mobile"></v-distpicker>
    </div>
  </div>
</template>

<script>
  import LineItem from './modules/LineItem.vue'
  import VDistpicker from 'v-distpicker'
  export default {
    data () {
      return {
        locationData: {province: '', city: '', area: ''},
        isOnLocationSelect: false
      }
    },
    computed: {
      address: function () {
        if (this.locationData.province !== '') {
          return this.locationData.province + ' ' + this.locationData.city + ' ' + this.locationData.area
        } else {
          return ''
        }
      }
    },
    methods: {
      onSaveClick () {
        this.$router.push({name: 'Home'})
      },
      onLocationSelected (data) {
        this.locationData = {province: data.province.value, city: data.city.value, area: data.area.value}
        this.isOnLocationSelect = false
      }
    },
    components: {
      LineItem,
      VDistpicker
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    background: #999999;
    height: 100%;
  }
  .location-panel {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .popup-content {
    width: auto;
    margin: 20vh 0vw;
    height: auto;
    border:1px solid #999999;
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
