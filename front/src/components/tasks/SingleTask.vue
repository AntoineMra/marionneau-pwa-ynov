<template>
  <div class="task-container"> 
    <form class="flex-task">
      <input class="input" type="checkbox" v-model="props.task.done" @click="changeTaskStatus">
      <label class="title" :class="{ crossed: props.task.done}">{{task.title}}</label>
      <q-btn class="arrow" color="secondary" icon="arrow_forward" :to="('/task/' + task._id)"/>
    </form>
  </div>
</template>

<script setup>
import { api } from "../../boot/axios";

const props = defineProps({
  task: Object,
});

const changeTaskStatus = () => {
  api.put(`/tasks/${props.task._id}`,{
    title: props.task.title,
    list: props.task.list,
    done: !props.task.done})
  .then(res => res.status === 200 ?? new Error(res.status))
  window.location.reload()
}

</script>

<style lang="scss" scoped>
.task-container{
    padding: 10px 0;
    background-color: #F2F2F2;
    border-radius: 10px;
    margin-top: 10px;
}

.flex-task{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
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

.arrow{
  color: black !important;
}

.arrow::before{
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>