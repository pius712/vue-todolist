<template>
  <div id="app">
    <!-- <TodoInput v-on:addTodoItem = "addOneItem"></TodoInput> -->
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 = "현재 컴포넌트의 메서드 명"></TodoInput> -->
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름: "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <!-- <TodoFooter v-on:clearTodo= "clearAll"></TodoFooter> -->
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
  // data : function(){
  //   return {
  //       todoItems: []   
  //   }
  // },
  // methods : {
    // addOneItem: function(todoItem){  //function의 인자는 위에 $emit()으로 보낸 인자 값이다. 
    //     console.log("addOneItem");
    //     var obj = {completed: false, item: todoItem};
    //     console.log(obj);
    //     localStorage.setItem(todoItem, JSON.stringify(obj));
    //     this.todoItems.push(obj);
        
    // },
    // removeOneItem: function(todoItem, index){
    //     localStorage.removeItem(todoItem.item);
    //     this.todoItems.splice(index, 1);
    // },
    // toggleOneItem: function(todoItem, index){
          // todoItem[index].completed = !todoItem[index].completed;
    //     localStorage.removeItem(todoItem.item);
    //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAll: function(){
    //       localStorage.clear();
    //       this.todoItems = [];
    // }
    // },
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
