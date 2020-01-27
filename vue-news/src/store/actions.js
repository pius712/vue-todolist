import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserList,
  fetchItemList,
  fetchList,
} from '../api/index';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(res => {
        context.commit('SET_NEWS', res.data);
        console.log('actions');
        console.log(res);
        return res;
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_JOBS(context) {
    return fetchJobsList()
      .then(res => {
        context.commit('SET_JOBS', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_ASK(context) {
    return fetchAskList()
      .then(res => {
        context.commit('SET_ASK', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_USER(context, payload) {
    return fetchUserList(payload)
      .then(res => {
        context.commit('SET_USER', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_ITEM({ commit }, payload) {
    return fetchItemList(payload)
      .then(res => {
        commit('SET_ITEM', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(res => {
        commit('SET_LIST', res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
};
