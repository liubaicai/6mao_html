/**
 * Created by mac on 2017/9/7.
 */

import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeSelected: 'tab-hot'
  },
  mutations: {
    updateHomeSelected (state, data) {
      state.homeSelected = data
    }
  }
})
