<template>
  <div>
    <user-profile :info="user">
      <template v-slot:username>
        <div>{{user.id}}</div>
      </template>
      <template v-slot:time>
        <span>{{'joined' + user.created+ ', '}}</span>
      </template>
      <template v-slot:karma>
        <span>{{user.karma}}</span>
      </template>
    </user-profile>
    <!-- <p>id: {{ user.id }}</p>
    <p>karma: {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>-->
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile";
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
    // fetchUserList(this.name)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  },
  components: {
    UserProfile
  }
};
</script>

<style>
.time {
  display: inline-block;
}
</style>
