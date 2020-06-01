import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		token: '',
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
		setToken(state, token) {
			state.token = token;
		},
		setPosts(state, payload) {
			state.postItems = payload;
		},
	},
});
