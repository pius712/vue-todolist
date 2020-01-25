import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserList,
  fetchItemList,
} from '../api/index';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(res => {
        context.commit('SET_JOBS', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(res => {
        context.commit('SET_ASK', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_USER(context, payload) {
    fetchUserList(payload)
      .then(res => {
        context.commit('SET_USER', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_ITEM({ commit }, payload) {
    fetchItemList(payload)
      .then(res => {
        commit('SET_ITEM', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
};
