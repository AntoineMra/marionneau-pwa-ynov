<template>
    <main class="main">
        <header class="flex header">
            <span class="flex flex-center">
                <q-btn class="arrow" color="secondary" icon="arrow_back_ios" :to="'/'"/>
                <h1 class="title">{{list.title}}</h1>
            </span>
            <q-btn class="dots" color="secondary" icon="more_horiz" />
        </header>

        <div class="body-page" v-if="tasks.length">            
            <TaskSection :tasks="tasks" :completed="false"/>
            <TaskSection :tasks="tasks" :completed="true"/>            
        </div>

        <footer v-else>
            <div>
                <h2>There is no tasks in this list, you might want to add some below</h2>
            </div>
        </footer>

        <q-btn label="Add task" color="primary" :to="'/list/' + listId + '/add'" />
    </main>  
</template>

<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import { api } from "../boot/axios";
import { useRoute } from 'vue-router'
import TaskSection from '../components/tasks/TaskSection.vue'

const listId = useRoute().params.id
let list = reactive({})
let tasks = ref([])

const fetchTasks = () => {
  api.get(`/tasks/list/${listId}`).then((res) => {
    tasks.value = res.data
  });
};

const getList = () => {
  api.get(`/lists/${listId}`).then((res) => {
    list.value = res.data;
  });
};

onBeforeMount(() => {
        getList();
        fetchTasks();
    }
)

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
    color: #000 !important;
    background-color: transparent !important;
}

.arrow{
    color: #000 !important;
}
</style>