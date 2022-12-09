<template>
    <q-page class="flex flex-center">
        <h1 class="subtitle">Créer une nouvelle Task</h1>
        <form @submit.prevent="addTask" class="flex flex-center column">
            <label for="title">Task Title :</label>
            <input type="text" v-model="title" placeholder="Ex Banane :">
            <q-btn type="submit" color="primary" label="Créer la task" class="btn-form"  />
        </form>
    </q-page>
</template>

<script setup>
import { api } from "../boot/axios";
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'


const title = ref('')
const listId = useRoute().params.id
const $router = useRouter()

const addTask = () => {
    api.post("/tasks",{title: title.value,list: listId}).then(res => console.log(res.data))
    $router.push({path: '/list/' + listId})
}

</script>

<style>
.subtitle{
  font-size: 2rem;
  text-align: center;
}

.btn-form{
    margin-top: 10px;
}
</style>