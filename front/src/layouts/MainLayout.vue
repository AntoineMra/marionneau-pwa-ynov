<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round />

        <q-toolbar-title> Dashboard </q-toolbar-title>

        <img class="header-logo" src="../assets/header-logo.svg" alt="" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="flex flex-center">
        <q-tabs>
          <q-route-tab
            :to="''"
            exact
            replace
            icon="subject"
          />
          <q-route-tab :to="'list/add'" exact replace icon="add" />
          <q-route-tab
            :to="''"
            exact
            replace
            icon="person"
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
