import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { onError, onErrorHandle } from '@/utils/global-error';

Vue.config.productionTip = false;
// Vue 错误捕获
Vue.config.errorHandler = onErrorHandle;
// windows 原生错误事件绑定到 OnError方法
if (window) {
  window.onerror = onError;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
