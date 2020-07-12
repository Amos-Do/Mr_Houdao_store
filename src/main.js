import Vue from 'vue';
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// VeeValidate
import {
  ValidationProvider, ValidationObserver, extend, configure,
} from 'vee-validate';
import { email, required } from 'vee-validate/dist/rules';

// 自定義
import $ from 'jquery';
import currencyFilter from '@/filters/currency';
import turnTimestamp from '@/filters/turnTimestamp';
import App from './App.vue';
import router from './router';
import store from './store';
import './bus';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
window.$ = $;

library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('turnTime', turnTimestamp);

axios.defaults.withCredentials = true;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
extend('email', email);
extend('required', {
  ...required,
  message: '這個{_field_}欄位必須填寫',
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// 導覽守衛
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' });
      }
    });
  } else {
    next();
  }
});
