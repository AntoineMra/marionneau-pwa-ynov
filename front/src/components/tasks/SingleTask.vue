<template>
  <div class="task-container"> 
    <form class="flex">
      <input class="input" type="checkbox" v-model="props.task.done" @click="changeTaskStatus">
      <label class="title" :class="{ crossed: props.task.done}">{{task.title}}</label>
    </form>
  </div>
</template>

<script setup>


const props = defineProps({
  task: Object,
});


const changeTaskStatus = (task) => {
  api.put(`/tasks/${task._id}`,{
    title: task.title,
    list: task.list,
    done: !task.done})
  .then(res => res.status === 200 ?? new Error(res.status))
  window.location.reload();
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