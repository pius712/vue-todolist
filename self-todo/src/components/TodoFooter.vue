<template>
  <div class="list-clear" v-on:click="clearAll">Clear All</div>
</template>

<script>
export default {
    methods:{
        clearAll(){
            this.$emit('clear');
        }
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