<template>
  <q-toolbar>
    <q-title>{{ props.taskList.title }}</q-title>
  </q-toolbar>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  taskList: Object,
});
</script>

<style>
</style>