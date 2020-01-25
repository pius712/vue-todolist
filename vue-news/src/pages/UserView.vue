<template>
  <div>
    <p>id: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
    // fetchUserList(this.name)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  },
};
</script>

<style></style>
