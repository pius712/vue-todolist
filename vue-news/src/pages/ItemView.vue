<template>
  <div>
    <section>
      <!-- 상세정보 -->
      <user-profile :info="fetchedItem">
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`">username: {{ fetchedItem.user }}</router-link>
        </template>
        <template v-slot:time>
          <div>time: {{ fetchedItem.time_ago }}</div>
        </template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>-->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      fetchedItem: null
    };
  },
  // computed: {
  //   ...mapGetters(["fetchedItem"])
  // },
  created() {
    const itemNumber = this.$route.params.id;
    // console.log('itemNumber', itemNumber);
    this.$store.dispatch("FETCH_ITEM", itemNumber).then(() => {
      this.fetchedItem = this.$store.state.item;
    });
  },
  components: {
    UserProfile
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 1rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
