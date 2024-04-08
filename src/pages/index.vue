<script lang="ts" setup>
import usersApi from "../api/users";
import teamsApi from "../api/teams";
import { STRINGS } from "../constants/strings";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data-store";
import { useUsers } from "../composables/users";
import { useTeams } from "../composables/teams";
import { useStoryPointSets } from "../composables/storyPointSets";

const { users, user, teams, team } = storeToRefs(useDataStore());

const CRUD_BTNS_TOOLTIPS_USER = {
  create: STRINGS.tooltips.createUser,
  update: STRINGS.tooltips.changeUserName,
  delete: STRINGS.tooltips.deleteUser,
};

const CRUD_BTNS_TOOLTIPS_TEAM = {
  create: STRINGS.tooltips.createTeam,
  update: STRINGS.tooltips.changeTeamName,
  delete: STRINGS.tooltips.deleteTeam,
};

const CRUD_BTNS_TOOLTIPS_POINTS = {
  create: STRINGS.tooltips.createStoryPoints,
  update: STRINGS.tooltips.changeStoryPoints,
  delete: STRINGS.tooltips.deleteStoryPoints,
};

const { handleAddUser, handleDeleteUser, handleUpdateUser } = useUsers();

const { handleAddTeam, handleDeleteTeam, handleUpdateTeam } = useTeams();

const {
  handleAddStoryPointSet,
  handleDeleteStoryPointSet,
  handleUpdateStoryPointSet,
  storyPointSetParsedVal,
  storyPointSetsRemapped
} = useStoryPointSets();

onMounted(async () => {
  users.value = await usersApi.getUsers();
  teams.value = await teamsApi.getTeams();
});
</script>

<template>
  <page-layout class="flex flex-col gap-8">
    <crud-input
      v-model="user"
      :opts="users"
      :tooltips="CRUD_BTNS_TOOLTIPS_USER"
      :label="STRINGS.labels.pickUser"
      @item:add="handleAddUser"
      @item:delete="handleDeleteUser"
      @item:update="handleUpdateUser"
    />
    <crud-input
      v-model="team"
      :opts="teams"
      :tooltips="CRUD_BTNS_TOOLTIPS_TEAM"
      :label="STRINGS.labels.pickTeam"
      @item:add="handleAddTeam"
      @item:delete="handleDeleteTeam"
      @item:update="handleUpdateTeam"
    />
    <crud-input
      v-model="storyPointSetParsedVal"
      :opts="storyPointSetsRemapped"
      :tooltips="CRUD_BTNS_TOOLTIPS_POINTS"
      :label="STRINGS.labels.storyPointSet"
      @item:add="handleAddStoryPointSet"
      @item:delete="handleDeleteStoryPointSet"
      @item:update="handleUpdateStoryPointSet"
    >
      <template #inputDetails>
        {{ STRINGS.info.storyPointSet }}
      </template>
    </crud-input>
  </page-layout>
</template>
