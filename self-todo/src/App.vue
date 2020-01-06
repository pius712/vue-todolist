<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addOneItem="addTodo"></TodoInput>
    <TodoList v-bind:propsdata='todoItem' v-on:delete="deleteItem"></TodoList>
    <TodoFooter v-on:clear="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'app',
  data(){
    return {
      todoItem: [],
    }
  },
  methods:{
    addTodo(item){
      // console.log("add")
      // console.log(item);
      if(localStorage.getItem(item) !== item){
        localStorage.setItem(item, item);
        this.todoItem.push(item);
      }
    },
    clearAllItem(){
      localStorage.clear();
      this.todoItem = [];
    },
    deleteItem(index){
      console.log(localStorage.key(index));
      localStorage.removeItem(localStorage.getItem(localStorage.key(index)));
      this.todoItem.splice(index,1);
    }
  },
  created(){
    // console.log('created');
    for(var i = 0; i<localStorage.length; i++){
      if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
        // console.log(localStorage.getItem(localStorage.key(i)));
        this.todoItem.push(localStorage.getItem(localStorage.key(i)));
      }
    }
  },
  components: {
    TodoList,
    TodoHeader,
    TodoInput,
    TodoFooter
  }
}
</script>

<style>
body{
  background-color: #F6F6F6;
}
#app {
  margin: 0 auto;
  width:1080px;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
  
}
</style>
