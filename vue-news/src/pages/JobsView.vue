<template>
  <div>
    <div v-for="(job, idx) in jobs" :key="idx">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.domain }}</small>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },
  },
  methods: {
    // ...mapActions(['FETCH_JOBS']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
