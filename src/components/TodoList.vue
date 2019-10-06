<template>
    <!-- ul>li*3 -->
    <ul>
        <li v-for="todoItem in todoItems" v-bind:key="todoItem">
            {{todoItem}}
        </li>
    </ul>
</template>

<script>
export default {
    data: function(){
        return{
            todoItems:[],
        }
    },
    created: function(){
        // 생성되는 순간 호출되는 
        if(localStorage.length>0){
            for(var i=0; i<localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));           
            }
        }
    }
}
</script>

<style>

</style>
