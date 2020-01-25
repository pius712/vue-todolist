<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  name: 'app',
  components: {
    ToolBar,
  },
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: gray;
  text-decoration: none;
}
a:hover {
  color: indigo;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
