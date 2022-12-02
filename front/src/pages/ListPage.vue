<template>
    <main class="main">
        <header class="flex header">
            <span class="flex flex-center">
                <q-btn color="secondary" icon="arrow_back_ios" :to="'/'"/>
                <h1 class="title">{{list.title}}</h1>
            </span>
            <q-btn class="dots" color="secondary" icon="more_horiz" />
        </header>

        <div class="body-page">
            <TaskSection :tasks="taskStore.tasks" :completed="false"/>
            <TaskSection :tasks="taskStore.tasks" :completed="true"/>            
        </div>
    </main>  
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "../boot/axios";
import { useRoute } from 'vue-router'
import TaskSection from '../components/tasks/TaskSection.vue'
import { useTaskStore } from "src/stores/task-store";

const taskStore = useTaskStore()

const listId = useRoute().params.id
const list = ref({})

const fetchTasks = () => {
  api.get(`/tasks/list/${listId}`).then((res) => {
    taskStore.$patch({tasks: res.data})
  });
};

const getList = () => {
  api.get(`/lists/${listId}`).then((res) => {
    list.value = res.data;
  });
};

onMounted(() => {
    getList();
    fetchTasks();
});
</script>

<style lang="scss" scoped>
.main{
    margin-left: 20px;
    margin-right: 20px;
}
.header{
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
}

.title{
    font-size: 1.6rem;
    font-weight: 600;
    margin-left: 15px;
}

.q-btn{
    &::before{
        box-shadow: none !important;
    }
    span{
        color: #000 !important;
    }
}

.dots{
    background-color: transparent !important;
}
</style>