<template>
  <div>
    <div v-for="(item, index) in this.$store.state.news" :key="index">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} {{ item.user }}</small>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  // 페이지 역할을 하는 컴포넌트는 비즈니스 로직이 들어가는 것은 좋지 않다.
  data() {
    return {
      users: [],
    };
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
