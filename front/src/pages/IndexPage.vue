<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour, <br />Tom Dupont ! 👋</h1>
    <div class="flex flex-center column">
      <div v-if="!taskLists.length">
        <h2 class="subtitle">Il est temps d'ajouter des listes</h2>
      </div>
      <div class="flex flex-center list-container" v-else v-for="tl in taskLists" :key="tl._id">
        <TaskList :task-list="tl" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {onMounted, ref } from "vue";
import TaskList from "../components/index/TaskList.vue";
import { api } from "../boot/axios";
import { useListStore } from '../stores/list-store'

const listStore = useListStore()
const taskLists = ref([])

onMounted(() => {
  api.get("/lists").then((res) => {
    taskLists.value = res.data
    listStore.$patch({taskLists: taskLists.value})
  });
});

</script>

<style>
.subtitle{
  font-size: 2rem;
  text-align: center;
}

.list-container{
  width: 75%;
  border-radius: 15px;
}
</style>