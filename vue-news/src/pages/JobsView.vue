<template>
  <div>
    <list-item :items="list"></list-item>
    <!-- <ul class="news-list">
      <li v-for="(job, idx) in jobs" :key="idx" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url" class="link-text">{{ job.domain }} </a>
          </small>
        </div>
      </li>
    </ul>-->
    <!-- <div v-for="(job, idx) in jobs" :key="idx">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.domain }}</small>
    </div>-->
  </div>
</template>

<script>
import ListItem from "../components/ListItem";
import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ListItem
  },
  mounted() {
    console.log("end spinner");
    bus.$emit("end:spinner");
  },
  mixins: [ListMixin]
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
  border-bottom: 1px solid gray;
  align-items: center;
}
.news-title {
  /* width: 80px; */
  margin: 0;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.link-text {
  color: gray;
}
</style>
