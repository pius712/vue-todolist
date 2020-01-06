<template>
    <div class="todo-input">
        <input type="text" v-model="inputItem" v-on:keyup.enter="addTodo(inputItem)">
        <!-- <div class="todo-confirm"> -->
            <button class="confirm-container" v-on:click="addTodo(inputItem)">
                <i class="fas fa-plus"></i>
            </button>
        <!-- </div> -->
        
    </div>
</template>

<script>
// import { mapMutations } from 'vuex';
export default {
    data(){
        return {    
            inputItem:'',
        }
    },
    methods:{
        // ...mapMutations(['addTodo']),
        addTodo(){
            // console.log("hello");
            this.$store.commit("addTodo", this.inputItem);
            // this.$emit("addOneItem", this.inputItem);
            this.inputItem = '';
        }
    }
}
</script>

<style scoped>
.todo-input{
    height: 50px;
    border-radius: 5px;
    background: white;
    position:relative;
}
.todo-input input{
    /* outline: none; */
    /* border: 0; */
    /* width:50%; */
    width: 700px;
    position: absolute;
    top: 7px;
    left: 20px;
    height: 30px;
    border-style:none;
    outline: none;

}
.todo-confrim{
    /* float: right; */
    display:inline-block;
}
.confirm-container{
    cursor:pointer;
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width:48px;
    height: 50px;
    /* height: 100%; */
    border-radius: 0 5px 5px 0;
}
</style>