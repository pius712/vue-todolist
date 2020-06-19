import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
Vue.use(VueRouter);

const router = new VueRouter({
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
			path: '/add',
			component: () => import('@/pages/PostAddPage.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/signup',
			component: () => import('@/pages/SignupPage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/pages/MainPage.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/post/:id',
			component: () => import('@/pages/EditPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/pages/NotFoundPage.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
		next('/login');
	} else {
		next();
	}
});
export default router;
