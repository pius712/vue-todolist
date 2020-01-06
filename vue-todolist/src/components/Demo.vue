<template>
  <div id="root">
      <!-- <p>{{ this.$store.getters.originalPrice }}</p>
      <p>{{ this.$store.getters.dobulePrice }}</p>
      <p>{{ this.$store.getters.triplePrice }}</p> -->
      <p>{{ originalPrice }}</p>
      <p>{{ doublePrice }}</p>
      <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['originalPrice','doublePrice','triplePrice'])
        // originalPrice(){
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice(){
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice(){
        //     return this.$store.getters.triplePrice;
        // }
    }
}
</script>

<style>

</style>