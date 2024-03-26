<template>
  <page-layout>
    <crud-editor
      v-model="team"
      :opts="teams"
      :tooltips="CRUD_BTNS_TOOLTIPS"
      :label="STRINGS.labels.pickTeam"
/>
  </page-layout>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data-store";
import { STRINGS } from "../constants/strings";

const { teams, team } = storeToRefs(useDataStore());

const CRUD_BTNS_TOOLTIPS = {
  create: STRINGS.tooltips.createTeam,
  update: STRINGS.tooltips.changeTeamName,
  delete: STRINGS.tooltips.deleteTeam,
};
</script>
