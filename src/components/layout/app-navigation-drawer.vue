<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUiStore } from "../../stores/ui-store";
import { SIDEBAR_LOCATION, SIDEBAR_WIDTH } from "../../constants/vuetify";
import { STRINGS } from "../../constants/strings";
import { ROUTES } from "../../constants/routes";
import { useDataStore } from "../../stores/data-store";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { showSidebar } = storeToRefs(useUiStore());

const { user, team } = storeToRefs(useDataStore());

const nameTitle = computed(() => {
  if (!user.value || !user.value.name) return STRINGS.labels.pickUser;

  return user.value.name;
});

const teamTitle = computed(() => {
  if (!team.value) return STRINGS.labels.pickTeam;

  return team.value.name;
});

const navItems = computed(() => {
  return [
    {
      title: STRINGS.navigationDrawer.name,
      route: ROUTES.index.path,
      text: nameTitle.value
    },
    {
      title: STRINGS.navigationDrawer.team,
      route: ROUTES.index.path,
      text: teamTitle.value
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

const { smAndDown } = useDisplay();
</script>

<template>
  <v-navigation-drawer
    :model-value="showSidebar"
    :location="SIDEBAR_LOCATION"
    :width="smAndDown ? 0 : SIDEBAR_WIDTH"
  >
    <v-card
      v-for="item in navItems"
      :key="item.title"
      :title="item.title"
    >
      <template #text>
        <router-link :to="item.route">
          <span v-html="item.text" />
        </router-link>
      </template>
    </v-card>


  </v-navigation-drawer>
</template>
