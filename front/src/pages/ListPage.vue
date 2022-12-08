<template>
    <main class="main">
        <header class="flex header">
            <span class="flex flex-center">
                <q-btn color="secondary" icon="arrow_back_ios" :to="'/'"/>
                <h1 class="title">{{list.title}}</h1>
            </span>
            <q-btn class="dots" color="secondary" icon="more_horiz" />
        </header>

        <div class="body-page" v-if="!tasks.length">
            <TaskSection :tasks="tasks" :completed="false"/>
            <TaskSection :tasks="tasks" :completed="true"/>            
        </div>

        <footer v-else>
            <div>
                <h2>There is no tasks in this list, you might want to add some below</h2>
            </div>
        </footer>

        <q-btn label="Add task" color="primary" @click="prompt = true" />

        <q-dialog v-model="prompt" persistent>
            <q-card style="min-width: 350px">
                <q-card-section>
                    <div class="text-h6">Your new task</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input dense v-model="task" autofocus @keyup.enter="addTask" />
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn flat label="Add task" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </main>  
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "../boot/axios";
import { useRoute } from 'vue-router'
import TaskSection from '../components/tasks/TaskSection.vue'

const listId = useRoute().params.id
const list = ref({})
let tasks = ref([])
const prompt = ref(false)
const task = ref('')

const fetchTasks = () => {
  api.get(`/tasks/list/${listId}`).then((res) => {
    tasks = res.data
  });
};

const getList = () => {
  api.get(`/lists/${listId}`).then((res) => {
    list.value = res.data;
  });
};

const addTask = () => {
    api.post("/tasks",{name: task}).then(res => tasks.value.push(res.data))
    prompt.value = false
}

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