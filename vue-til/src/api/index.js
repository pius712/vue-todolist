import axios from 'axios';
// import store from '@/store/index';
import setInterceptors from '@/api/common/interceptors';
import { loginUser, registerUser } from '@/api/auth';
import {
	fetchPosts,
	createPost,
	deletePost,
	fetchOnePost,
	editPost,
} from '@/api/posts';
function createInstance() {
	const instance = axios.create({
		baseURL: 'http://localhost:3000',
	});
	return instance;
}
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `http://localhost:3000/${url}/`,
		// headers: {
		// 	Authorization: store.state.token,
		// },
	});
	const newInstance = setInterceptors(instance);
	console.log('init');

	return newInstance;
}
export const instance = createInstance();

export const posts = createInstanceWithAuth('posts');

export {
	registerUser,
	loginUser,
	fetchPosts,
	createPost,
	deletePost,
	fetchOnePost,
	editPost,
};
