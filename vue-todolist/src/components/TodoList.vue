<template>
    <div>
        <ul>
            <!-- <li v-for="(todoItem, index) in this.$store.getters.storedTodoItems" v-bind:key="todoItem.item" class="shadow"> -->
            <!-- <li v-for="(todoItem, index) in this.todoItems" v-bind:key="todoItem.item" class="shadow"> -->
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
                <!-- <i class="checkBtn fas fa-check" v-bind:class= "{checkBtnCompledted: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem, index)"></i>   -->
                <!-- <i class="checkBtn fas fa-check" v-bind:class= "{checkBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem, index)"></i>         -->
                <i class="checkBtn fas fa-check" v-bind:class= "{checkBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete({todoItem, index})"></i>        
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <!-- <span class = "removeBtn" v-on:click="removeTodo(todoItem, index)"> -->
                <!-- 위의 경우에는 click시 helper함수 없이 아래의 methods를 거쳐서 commit을 해준것. 따라서 매개 변수 2개 전달 후
                밑의 method 부분에서 객체화 하여 commit의 인자로 넘겼음. 하지만 아래의 경우에는 헬퍼 함수를 사용하여 바로 넘기기 때문에
                인자를 객체화 해서 넘겨준다.  -->
                <span class = "removeBtn" v-on:click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash"></i>
                </span>
            </li>
            
            <!-- <li>hi</li>
            <li>3</li> -->
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {    
    methods:{
        ...mapMutations({
          removeTodo: 'removeOneItem',
          toggleComplete: 'toggleOneItem'
        }),
        // removeTodo(todoItem, index){
            // this.$emit('remove',todoItem,index);   // vuex 사용하기 전

            // this.$store.commit('removeOneItem',{
            //   todoItem,
            //   index
            // });   // helper 함수 사용하기 전.
        // },
        // ...mapMutations({
        //   toggleComplete: 'toggleOneItem'
        // }),
        // toggleComplete(todoItem, index){
        //     // this.$emit('toggle',todoItem, index);            
        //     this.$store.commit('toggleOneItem',{
        //       todoItem,
        //       index
        //     });            
        // }
    },
    computed:{
      // todoItems(){
      //   return this.$store.getters.storedTodoItems;
      //   // 이 컴포넌트의 todoItems 속성에 return 값을 바인딩 한 것과 마찬가지. 
      // }
      ...mapGetters(['storedTodoItems']),
      // ...mapGetters({
      //   todoItems: 'storedTodoItems'
      //   }) 
    }
    
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
