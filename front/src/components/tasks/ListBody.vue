<template>
  <div>
    <div v-if="!tasks">
      Cette liste ne contient aucune tâches ajoutez en une depuis la liste
    </div>
    <div v-else v-for="task in props.tasks" :key="task._id">
      <h1>{{ task.title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

let taskLists = ref([]);

const fetchLists = () => {
  api.get("/tasks").then((res) => {
    taskLists = res.data;
  });
};

const props = defineProps({
  listId: String,
});

onMounted(() => {
  fetchTasks();
});
</script>

<style lang="scss">
</style>