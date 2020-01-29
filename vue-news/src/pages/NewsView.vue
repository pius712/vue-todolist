<template>
  <div>
    <list-item :items="list"></list-item>
    <!-- <div v-for="(item, index) in this.$store.state.news" :key="index">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </div>-->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin";
// import axios from 'axios';
export default {
  // 페이지 역할을 하는 컴포넌트는 비즈니스 로직이 들어가는 것은 좋지 않다.
  components: {
    ListItem
  },
  mixins: [ListMixin]
};
</script>

<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0px;
}
.link-text {
  color: gray;
} */
</style>
