<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput ></TodoInput>
    <TodoList ></TodoList>
    <TodoFooter ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'app',
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
