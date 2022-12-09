<template>
    <main class="main">
        <header class="flex header">
            <span class="flex flex-center">
                <q-btn class="arrow" color="secondary" icon="arrow_back_ios" :to="'/'"/>
            </span>
            <q-btn class="dots" color="secondary" icon="more_horiz" />
        </header>
        <div class="body-page">
            <p class="title">Title : <br>{{task.value.title}}</p>
            <p class="subtitle">Description : <br>{{task.value.description}}</p> 
            <p class="subtitle">Terminée : <br>{{task.value.done ? 'Oui' : 'Non'}}</p> 
        </div>

        <q-btn label="Delete Task" color="primary" @click="deleteTask" />
    </main>
</template>

<script setup>
import { api } from "../boot/axios";
import { reactive, onBeforeMount } from "vue";
import { useRouter, useRoute } from 'vue-router'

const taskId = useRoute().params.id
let task = reactive({})
const $router = useRouter()

const deleteTask = () => {
  api.delete(`/tasks/${taskId}`).then((res) => {
    console.log(res.data);
    $router.back()
  });
};

const getTask = () => {
  api.get(`/tasks/${taskId}`).then((res) => {
    task.value = res.data;
    console.log(task.value);
  });
};

onBeforeMount(() => {
        getTask();
    }
)
</script>

<style lang="scss">
.subtitle{
  font-size: 1.4rem;
}

.btn-form{
    margin-top: 10px;
}
.main{
    margin-top: 50px;
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