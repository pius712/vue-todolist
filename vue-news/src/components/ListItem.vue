<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in items" :key="index" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }} </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <template v-if="item.user">
              <router-link :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
              </router-link>
            </template>
            <template v-else>
              <a :href="`http://www.${item.domain}`">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  //   data() {
  //     return {
  //       users: [],
  //     };
  //   },
  //   computed: {
  //     news() {
  //       return this.$store.state.news;
  //     },
  //   },
  //   created() {
  //     this.$store.dispatch('FETCH_NEWS');
  //   },
};
</script>

<style scoped>
.news-list {
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
  color: indigo;
}
.news-title {
  margin: 0px;
}
.link-text {
  color: gray;
}
</style>
