import axios from 'axios';
// import store from '@/store/index';
import setInterceptors from '@/api/common/interceptors';

function initInstance() {
	const instance = axios.create({
		baseURL: 'http://localhost:3000',
		// headers: {
		// 	Authorization: store.state.token,
		// },
	});
	const newInstance = setInterceptors(instance);
	console.log('init');

	return newInstance;
}
const instance = initInstance();
export const registerUser = userData => {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	return instance.post('signup', userData);
};

export const loginUser = userData => {
	return instance.post('login', userData);
};

// 학습 노트 데이터 조회
export function fetchPosts() {
	return instance.get('posts');
}
