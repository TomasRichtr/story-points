<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUiStore } from "../stores/ui-store";
import { SIDEBAR_LOCATION, SIDEBAR_WIDTH } from "../constants/vuetify";
import { STRINGS } from "../constants/strings";
import { ROUTES } from "../constants/routes";
import { useDataStore } from "../stores/data-store";
import { computed } from "vue";

import { useRoute } from 'vue-router';

const route = useRoute();

const { showSidebar } = storeToRefs(useUiStore());

const { user, team } = storeToRefs(useDataStore());

const nameTitle = computed(() => {
  if (!user.value || !user.value.name) return STRINGS.labels.pickUser;

  return `${STRINGS.navigationDrawer.name}: <b>${user.value.name}</b>`;
});

const teamTitle = computed(() => {
  if (!team.value) return STRINGS.labels.pickTeam;

  return `${STRINGS.navigationDrawer.team}: <b>${team.value}</b>`;
});

const navItems = computed(() => {
  return [
    {
      title: nameTitle.value,
      route: ROUTES.index.path,
    },
    {
      title: teamTitle.value,
      route: ROUTES.teams.path,
    },
    {
      title: STRINGS.navigationDrawer.pointsSetup,
      route: 'pointsSetup',
    },
    {
      title: STRINGS.navigationDrawer.estimate,
      route: 'estimate',
    },
  ];
});
</script>

<template>
  <v-navigation-drawer
    :model-value="showSidebar"
    :location="SIDEBAR_LOCATION"
    :width="SIDEBAR_WIDTH"
    permanent
  >
    <v-list>
      <v-list-item v-for="item in navItems"
:key="item"
:active="route.name === item.route"
>
        <router-link :to="item.route">
          <span v-html="item.title" />
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
