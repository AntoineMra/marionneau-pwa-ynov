<template>
  <div class="task-section"> 
    <h2 class="title">Tasks {{props.completed ? 'Completed' : ''}} - {{sortedTasks.length}}</h2>
    <ul class="list">
      <li class="item" v-for="task in sortedTasks">
        <SingleTask :task="task" :key="task"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SingleTask from "./SingleTask.vue";

let sortedTasks = ref([])

const getCompletedTask = () => {
  sortedTasks.value = props.tasks.filter(task => task.done === props.completed)
};

const props = defineProps({
  completed: Boolean,
  tasks: Array
});

onMounted(() => {
    getCompletedTask()
})

</script>

<style lang="scss" scoped>
.task-container{
    background-color: #F2F2F2;
    border-radius: 10px;
}

.title{
    font-size: 1.4rem;
    
}

.item{
    list-style: none;
}
</style>