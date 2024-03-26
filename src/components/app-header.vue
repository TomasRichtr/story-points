<script setup lang="ts">
import { STRINGS } from "../constants/strings";
import { HEADER_ELEVATION } from "../constants/vuetify";
import { useRoute } from 'vue-router';
import { ROUTES } from "../constants/routes";
import { computed } from "vue";

const route = useRoute();

const routeName = computed(() => {
  const routerRouteName = (route.name as string)?.replace("/", "");
  return ROUTES[routerRouteName]?.name || ROUTES.index.name;
});
</script>

<template>
  <v-app-bar :elevation="HEADER_ELEVATION">
    <v-app-bar-title>
      <v-breadcrumbs :items="[STRINGS.storyPoints, routeName]">
        <template #title="{ item }">
          {{ item?.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </v-app-bar-title>


    <template #append>
      <v-btn icon="mdi-dots-vertical" />
    </template>
  </v-app-bar>
</template>

<style scoped>

</style>
