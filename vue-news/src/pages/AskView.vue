<template>
  <div>
    <div v-for="(el, idx) in ask" :key="idx">
      <a :href="el.url">{{ el.title }}</a>
      <small>{{ el.user }}</small>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    // #1
    ask() {
      return this.$store.state.ask;
    },
    // #2
    // ...mapState(['ask']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
