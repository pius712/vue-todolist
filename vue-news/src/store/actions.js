import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserList,
  fetchItemList,
  fetchList,
} from '../api/index';

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const res = await fetchNewsList();
      commit('SET_NEWS', res.data);
      console.log('fetch-news');
    } catch (err) {
      console.error(err);
    }
  },
  async FETCH_JOBS({ commit }) {
    try {
      const res = await fetchJobsList();
      commit('SET_JOBS', res.data);
    } catch (err) {
      console.error(err);
    }
  },
  async FETCH_ASK({ commit }) {
    try {
      const res = await fetchAskList();
      commit('SET_ASK', res.data);
    } catch (err) {
      console.error(err);
    }
  },
  async FETCH_USER({ commit }, payload) {
    try {
      const res = await fetchUserList(payload);
      commit('SET_USER', res.data);
    } catch (err) {
      console.error(err);
    }
  },
  async FETCH_ITEM({ commit }, payload) {
    const res = await fetchItemList(payload);
    commit('SET_ITEM', res.data);
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const res = await fetchList(pageName);
      commit('SET_LIST', res.data);
      console.log('fetch_list');
      return res;
    } catch (err) {
      console.error(err);
    }
  },
};
