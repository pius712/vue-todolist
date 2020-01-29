import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../pages/NewsView.vue';
import AskView from '../pages/AskView.vue';
import JobsView from '../pages/JobsView.vue';
import ItemView from '../pages/ItemView.vue';
import UserView from '../pages/UserView.vue';
import bus from '../utils/bus';
import store from '../store/index';
import createListView from '../pages/CreateListView';
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      // path: url 주소
      path: '/',
      redirect: '/news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter');
        bus.$emit('start:spinner');
        return store
          .dispatch('FETCH_LIST', to.name)
          .then(result => {
            console.log('result');
            console.log(result);
            bus.$emit('end:spinner');
            next();
          })
          .catch(err => {
            console.error(err);
          });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter');
        bus.$emit('start:spinner');
        return store
          .dispatch('FETCH_LIST', to.name)
          .then(result => {
            console.log('result');
            console.log(result);
            next();
          })
          .catch(err => {
            console.error(err);
          });
      },
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
      beforeEnter: (to, from, next) => {
        console.log(to);
        const itemNumber = to.params.id;
        store
          .dispatch('FETCH_ITEM', itemNumber)
          .then(res => {
            console.log('router');
            console.log(store.state.items);
            next();
          })
          .catch(() => {
            next('/');
          });
      },
    },
  ],
});
//routes도 모듈화 가능
