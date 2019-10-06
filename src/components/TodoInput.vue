<template>
    <div class="inputBox">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo" >
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            newTodoItem:""
        }
    },
    methods:{
        addTodo: function(){
            //  console.log(this.newTodoItem);
             //저장하는 로직 
             localStorage.setItem(this.newTodoItem, this.newTodoItem);
             this.clearInput();
        },
        clearInput: function(){
            this.newTodoItem ="";
        }
    }
}
</script>

<style scope>
input:focus{
    outline:none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    /* display: block; */
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float:right;
    display: block;
    width:3rem;
    border-radius: 0 5px 0 5px;
}
.addBtn{
    /* display: block; */
    /* color:white; */
    vertical-align: middle;
}
</style>
