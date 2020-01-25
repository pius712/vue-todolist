import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../pages/NewsView.vue';
import AskView from '../pages/AskView.vue';
import JobsView from '../pages/JobsView.vue';
import ItemView from '../pages/ItemView.vue';
import UserView from '../pages/UserView.vue';

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
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
//routes도 모듈화 가능
