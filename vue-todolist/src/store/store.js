import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); 
// vue plugin 기능 전역으로 특정 기능을 추가하고 싶을때 (global functionality)

// Todo.vue 라는 컴포넌트에서 
// this.$store 로 접근이 가능하다?!
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

export const store = new Vuex.Store({
    // 이 것을 모듈로 만들었기 때문에, 외부에서 import 하면 사용할 수 있다.
    state: {
        todoItems: storage.fetch(),
    },
    mutations:{
        addOneItem(state, todoItem){  //function의 인자는 위에 $emit()으로 보낸 인자 값이다. 
            console.log("addOneItem recevied");
            var obj = {completed: false, item: todoItem};
            // console.log(obj);
            localStorage.setItem(todoItem, JSON.stringify(obj));
            // this.todoItems.push(obj);  
            state.todoItems.push(obj);
            
        },
        removeOneItem: function(state, payload){
            console.dir(payload);
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
            },
        toggleOneItem: function(state, payload){
            console.dir(payload);
            payload.todoItem.completed = !payload.todoItem.completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAll(state){
            console.log('clearAll received');
            localStorage.clear();
            state.todoItems = [];
        }
        
    }
});