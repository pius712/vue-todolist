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
  },
  mutations,
  actions,
  //   mutations: mutations,
  //   actions: actions,
});
