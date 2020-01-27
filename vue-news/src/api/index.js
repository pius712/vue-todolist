import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

//  2. API 함수 정리
function fetchNewsList() {
  // return axios.get('https://api.hnpwa.com/v0/news/1.json');
  // --> 아래와 같이 공통된 부분을 빼서 다른 변수로 뺄 수 있다.
  console.log('api call');
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserList(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItemList(itemNumber) {
  return axios.get(`${config.baseUrl}item/${itemNumber}.json`);
}

// fetchNewsList()
//  .then()
//  .catch()

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserList,
  fetchItemList,
  fetchList,
};

// 이런식으로 작성을 하지 않으면, 여러 컴포넌트에서 axios를 사용할 때, 계속 라이브러리를 import 해주어야 한다.
// 그리고 함수들이 계속 중복된다.
