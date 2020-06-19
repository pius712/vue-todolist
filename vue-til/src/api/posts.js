import { posts as instance } from './index';
// 학습노트 조작과 관련된 CRUD

// 학습 노트 데이터 조회
const fetchPosts = () => {
	return instance.get('/');
};

// 학습 노트 데이터 생성

const createPost = postItem => {
	return instance.post('/', postItem);
};

// 학습 노트 데이터 삭제
const deletePost = postId => {
	return instance.delete(postId._id);
};

// 특정 학습 노트 데이터 조회

const fetchOnePost = postId => {
	return instance.get(postId);
};

const editPost = postItem => {
	return instance.put(postItem._id, postItem);
};
export { fetchPosts, createPost, deletePost, fetchOnePost, editPost };
