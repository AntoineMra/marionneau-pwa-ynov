<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour, <br />Tom Dupont ! 👋</h1>
    <div v-for="taskList in taskLists" :key="taskList._id">
      <div>{{ taskList._id }}</div>
      <TaskList :task-list="taskList" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskList from "../components/index/TaskList.vue";
import { api } from "../boot/axios";

let taskLists = ref([]);

const fetchLists = () => {
  api.get("/lists").then((res) => {
    taskLists = res.data;
  });
};

onMounted(() => {
  fetchLists();
});
</script>
