<template>
  <div>
      <ul>
          <li class="list-container" v-for="(todoItem, idx) in propsdata" v-bind:key="propsdata[todoItem]">
              <span class="check-icon">
                  <i class="check-btn fas fa-check"></i>
              </span>
              <span class="input-text">{{ todoItem }}</span>
              <span class="delete-icon" v-on:click="deleteItem(idx)">
                <i class="delete-btn fas fa-trash-alt"></i>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        toggleItme(){

        },
        deleteItem(idx){
            // var idx = this.tod
            console.log(idx);
            this.$emit('delete', idx);
        }
    }
}
</script>

<style scoped>
ul{
    padding:0px;
}
.check-icon{
    float:left;
    margin-left :15px;
}
.check-icon .check-btn{
    color: #62acde;
}
.input-text{
    margin-left: 15px;
}
.list-container{
    height: 50px;
    border-radius: 5px;
    background: white;
    position:relative;
    margin:20px 0px;
    list-style: none;
    /* vertical-align: middle;*/
    line-height: 50px; 
    text-align: left;
}
.delete-icon{
    float:right;
    margin-right: 15px;
}
.delete-icon .delete-btn{
    color: #de4343;
}
</style>