<template>
  <div>
    <list-item :items="ask"></list-item>
    <!-- <ul class="news-list">
      <li v-for="(el, idx) in ask" :key="idx" class="post">
        <div class="points">
          {{ el.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${el.id}`">{{ el.title }}</router-link>
          </p>
          <small class="link-text">
            {{ el.time_ago }}by
            <router-link :to="`/user/${el.useR}`" class="link-text">{{
              el.user
            }}</router-link>
          </small>
        </div>
      </li>
    </ul>-->

    <!-- <div v-for="(el, idx) in ask" :key="idx">
      <router-link :to="`/item/${el.id}`">{{ el.title }}</router-link>
      <small>{{ el.user }}</small>
    </div>-->
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import bus from "../utils/bus";
import { mapState } from "vuex";
export default {
  components: {
    ListItem
  },
  computed: {
    ask() {
      return this.$store.state.ask;
    }
  },
  created() {
    // this.$store.dispatch('FETCH_ASK');
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASK")
        .then(() => {
          console.log("fetched?");
          bus.$emit("end:spinner");
        })
        .catch(err => {
          console.error(err);
        });
    }, 3000);
  }
  // data() {
  //   return {};
  // },
  // computed: {
  //   // #1
  //   ask() {
  //     return this.$store.state.ask;
  //   },
  //   // #2
  //   // ...mapState(['ask']),
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASK');
  // },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
}
.points {
  display: flex;
  width: 80px;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: gray;
}
</style>
