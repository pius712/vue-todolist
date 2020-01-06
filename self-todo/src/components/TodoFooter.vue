<template>
  <div class="list-clear" v-on:click="clearAllItem">Clear All</div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods:{
        ...mapMutations(['clearAllItem'])
        // clearAll(){
        //     this.$store.commit('clearAllItem');
        //     // this.$emit('clear');
        // }
    }
}
</script>

<style>
.list-clear{
    background-color: white;
    border-radius: 5px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
}
</style>