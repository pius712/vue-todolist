<template>
  <div class="header">
    <router-link to="/news">News </router-link> |
    <router-link to="/ask">Ask </router-link> |
    <router-link to="/jobs">Jobs </router-link> |
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: indigo;
  display: flex;
  padding: 8px;
}

.header a {
  color: inherit;
  text-decoration: none;
}
</style>
