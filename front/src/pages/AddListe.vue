<template>
    <q-page class="flex flex-center">
        <h1 class="subtitle">Créer une nouvelle liste</h1>
        <form @submit.prevent="formSubmit" class="flex flex-center column">
            <label for="title">Title :</label>
            <input type="text" v-model="title" placeholder="Ex Courses :">
            <q-btn type="submit" color="primary" label="Créer la liste" class="btn-form"  />
        </form>
    </q-page>
</template>

<script setup>
import { useListStore } from '../stores/list-store'
import { ref } from "vue";
import { useRouter } from 'vue-router'


const title = ref('')
const $router = useRouter()
const listStore = useListStore()

const formSubmit = () => {
    listStore.addList(title.value)
    $router.push({path: ''})
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