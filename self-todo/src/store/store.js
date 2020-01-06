import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {        
  fetch(){
      console.log('fected');
      // console.dir(arr);
      const arr = [];
      if(localStorage.length > 0){
          for(var i=0; i<localStorage.length; i++){
              // this.todoItems.push(localStorage.key(i));
              if(localStorage.key(i) == 'loglevel:webpack-dev-server'){
                continue;
              }
              console.log(localStorage.key(i));
              // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))), i);
              arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              // console.log(localStorage.key(i));
          }
      }
      
      return arr;
  }
};
export const store =  new Vuex.Store({
    state:{
        todoItem: storage.fetch(),
    },
    mutations:{
        addTodo(state, item){
            if(localStorage.getItem(item) !== item){
              localStorage.setItem(item, item);
              state.todoItem.push(item);
            }else{
              alert('이미 저장되어있습니다');
            }
          },
        clearAllItem(state){
            localStorage.clear();
            state.todoItem = [];
          },
        deleteItem(state, index){
            console.log(localStorage.key(index));
            localStorage.removeItem(localStorage.getItem(localStorage.key(index)));
            state.todoItem.splice(index,1);
          }
        },
    });