<template>
  <div>
    <div v-if="tasks === []">
      <p>
        Cette liste ne contient aucune tâches ajoutez en une depuis la liste
      </p>
    </div>
    <div v-else v-for="task in props.tasks" :key="task._id">
      <h1>{{ task.title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
import { api } from "../../boot/axios";

let tasks = ref([]);

const fetchTasks = () => {
  api.get(`/tasks/list/${props.listId}`).then((res) => {
    tasks = JSON.stringify(res.data);
  });
};

const props = defineProps({
  listId: String,
});

onMounted(() => {
  fetchTasks();
});
</script>

<style lang="scss" scoped>
</style>