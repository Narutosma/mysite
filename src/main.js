
import Vue from 'vue';
import App from './App.vue';

// 全局样式
import "@/styles/global.less";

// 数据模拟
import "./mock";

// 自定义指令
import vLazy from '@/directive/vLazy';
Vue.directive("lazy", vLazy);

import vLoading from "./directive/vLoading";
Vue.directive("loading", vLoading);

// 事件总线
import "@/eventBus.js";

// VueRouter
import router from '@/router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
