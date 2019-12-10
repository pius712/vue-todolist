<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>


  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
// TodoHeader File의 내용을 TodoHeader에..
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// var my_cmp = {
//   template: '<div>my component</div>'
// }

// new Vue({
//   el:'',
//   components: {
//     // '컴포넌트 이름': '컴포넌트 내용'
//     'my-cmp' : my_cmp
//   }
// })
export default {
  components:{
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width:200px;

}
button{
  border-style:groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
