import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { loginUser, deletePost } from '@/api/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
		postItems: [],
	},
	getters: {
		isLoggedIn(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, payload) {
			state.username = payload;
		},
		clearUsername(state) {
			state.username = '';
		},
		clearToken(state) {
			state.token = '';
		},
		setToken(state, token) {
			state.token = token;
		},
		setPosts(state, payload) {
			state.postItems = payload;
		},
		deleteItem(state, postId) {
			const idx = state.postItems.map(item => item._id).indexOf(postId);
			state.postItems.splice(idx, 1);
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			console.log('???');
			const response = await loginUser(userData);
			console.log('res', response);
			const data = response.data;
			// const { data } = await loginUser(userData);
			console.log(data);
			// this.logMsg = `${data.user.username}님 안녕하세요.`;
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
		},
		async DELETE_ITEM({ commit }, postId) {
			console.log('postId', postId);
			const response = await deletePost(postId);
			console.log('responsed입니다', response);
			commit('deleteItem', postId._id);
			console.log('DELETE_ITEM');

			// commit('reloadPost', )
		},
	},
});
