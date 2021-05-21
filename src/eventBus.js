import Vue from 'vue';


// 事件总线
// 通用虽好，但不要忘记销毁事件哦

// mainScroll 监听滚动条高度
// 滚动条的dom dom

// setMainScroll 设置主屏幕的高度  
// 跳转的高度参数 scroll  

const app = new Vue();
Vue.prototype.$bus = app;

export default app;