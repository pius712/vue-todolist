import { instance } from './index';

// 로그인, 회원 가입, 회원 탈퇴

// 회원가입
const registerUser = userData => {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData);
	return instance.post('signup', userData);
};

// 로그인
const loginUser = userData => {
	return instance.post('login', userData);
};

export { registerUser, loginUser };
