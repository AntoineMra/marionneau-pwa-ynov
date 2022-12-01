<template>
  <div class="container">
    <header class="header">
      <h2 class="task-title">{{ props.taskList.title }}</h2>
    </header>
    <div class="list-body">
      <ListPreview :listId="props.taskList._id" />
    </div>
    <footer class="footer">
      <q-btn :to="'/list/' + props.taskList._id">Voir la liste complète</q-btn>
    </footer>
  </div>
</template>

<script setup>
import ListPreview from "../tasks/ListPreview.vue";

const props = defineProps({
  taskList: Object,
});
</script>

<style lang="scss" scoped>
.container {
  border: solid 1px #bbb;
  box-shadow: 3px #eee;
  margin-top: 20px;
  width: 100%;
  display: block;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ccc;
}

.footer {
  margin-top: 10px;
}

.task-title {
  font-size: 2rem;
  padding: 0;
  margin: 0;
  font-weight: 700;
}
</style>