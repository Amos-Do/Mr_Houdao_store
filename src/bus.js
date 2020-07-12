import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// Message
// vm.$bus.$emit('message:push', message, status);
// 自定義名稱 'messsage:push';
// message: 傳入參數
// status: 樣式，預設值為 warning
