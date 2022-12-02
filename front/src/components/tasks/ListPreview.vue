<template>
  <div> 
    <div v-if="!tasks.length" class="flex flex-center">
      <p class="core-text">
        Cette liste ne contient aucune tâches ajoutez en une depuis la liste
      </p>
    </div>
    <ul v-else v-for="task in tasks" :key="task._id">
      <li>{{ task.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "../../boot/axios";

let tasks = ref([]);

const fetchTasksPreview = () => {
  api.get(`/tasks/list/${props.listId}`).then((res) => {
    const data = res.data.slice(-3)
    tasks.value = data;
  });
};

const props = defineProps({
  listId: String,
});


onMounted(() => {
  fetchTasksPreview();
});
</script>

<style lang="scss" scoped>
.core-text{
  margin-top: 15px;
  width: 50%;
  text-align: center;
}
</style>