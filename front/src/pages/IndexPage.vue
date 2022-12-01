<template>
  <q-page class="flex flex-center">
    <h1 class="indexTitle">Bonjour, <br />Tom Dupont ! 👋</h1>
    <div class="flex flex-center column">
      <div v-if="!taskLists.length">
        <h2 class="subtitle">Il est temps d'ajouter des listes</h2>
      </div>
      <div v-else v-for="tl in taskLists" :key="tl._id">
        <TaskList :task-list="tl" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {onMounted, onUpdated } from "vue";
import TaskList from "../components/index/TaskList.vue";
import { api } from "../boot/axios";
import { useListStore } from '../stores/list-store'
import { mapState } from "pinia";

const listStore = useListStore()
const taskLists = mapState(useListStore, ['taskLists'])

onMounted(() => {
  api.get("/lists").then((res) => {
    listStore.$patch({taskLists: res.data})
  });
});

</script>

<style>
.subtitle{
  font-size: 2rem;
  text-align: center;
}
</style>