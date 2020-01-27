<template>
  <div>
    <list-item :items="list"></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  }
};
</script>

<style>
</style>