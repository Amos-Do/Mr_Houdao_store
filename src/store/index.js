import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import productsModules from './products';
import cartModules from './cart';
import alertModules from './alert';
import orderModules from './order';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, // 嚴謹模式：Vuex 語法不符合規範的話會跳錯 ex.mutations 處理非同步的行為，就會跳錯
  state: {
    isLoading: false,
    status: false,
  },
  actions: {
    updateLoading(context, loading) {
      // 用 commit 呼叫 mutations 去改變資料狀態
      context.commit('LOADING', loading);
    },
    check(context) {
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      axios.post(api).then((response) => {
        if (response.data.success) {
          context.commit('STATUS', true);
        } else {
          context.commit('STATUS', false);
        }
      });
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    STATUS(state, payload) {
      state.status = payload;
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    status: (state) => state.status,
  },
  modules: {
    productsModules,
    cartModules,
    alertModules,
    orderModules,
  },
});
