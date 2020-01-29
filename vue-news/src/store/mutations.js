export default {
  SET_NEWS(state, payload) {
    state.news = payload;
  },
  SET_JOBS(state, payload) {
    state.jobs = payload;
  },
  SET_ASK(state, payload) {
    state.ask = payload;
  },
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ITEM(state, payload) {
    state.items = payload;
  },
  SET_LIST(state, list) {
    state.list = list;
  },
};
