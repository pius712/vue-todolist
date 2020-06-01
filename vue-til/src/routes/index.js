import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/pages/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/pages/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/pages/MainPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/pages/NotFoundPage.vue'),
		},
	],
});
