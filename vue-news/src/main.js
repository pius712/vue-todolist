import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router'
import { router } from './router/index.js';
import store from './store/index';
Vue.config.productionTip = false;

// Vue.use(VueRouter);

// const router = new VueRouter({

// });
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
