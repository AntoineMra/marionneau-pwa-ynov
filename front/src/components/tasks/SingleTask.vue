<template>
  <div class="task-container"> 
    <form class="flex">
      <input class="input" type="checkbox" v-model="props.task.done" @click="changeCompletion">
      <label class="title" :class="{ crossed: props.task.done}">{{task.title}}</label>
    </form>
  </div>
</template>

<script setup>
import { api } from "../../boot/axios";

const props = defineProps({
  task: Object,
});

const changeCompletion = (e) => {
    api.get(`/tasks/list/${listId}`).then((res) => {
        tasks.value = res.data;
    });
}
</script>

<style lang="scss" scoped>
.task-container{
    padding: 10px 0;
    background-color: #F2F2F2;
    border-radius: 10px;
    margin-top: 10px;
}

.title{
    margin-left: 35px;
    font-size: 1.2rem;
}

.input{
    margin-left: 30px;
}

.crossed{
    text-decoration: line-through;
}
</style>