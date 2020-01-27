import vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: null,
    list: [],
  },
  getters: {
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations,
  actions,
  //   mutations: mutations,
  //   actions: actions,
});
