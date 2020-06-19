import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import { formatDate } from '@/utils/filters';

Vue.config.productionTip = false;
Vue.filter('formatDate', formatDate);
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
