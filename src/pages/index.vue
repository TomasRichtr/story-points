<template>
  <page-layout>
    <crud-editor :opts="users" v-model="user" :tooltips="CRUD_BTNS_TOOLTIPS" :label="STRINGS.labels.pickUser"/>
  </page-layout>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useDataStore} from "../stores/data-store";
import {STRINGS} from "../constants/strings";

const {users, user} = storeToRefs(useDataStore())

const CRUD_BTNS_TOOLTIPS = {
  create: STRINGS.tooltips.createUser,
  update: STRINGS.tooltips.changeUserName,
  delete: STRINGS.tooltips.deleteUser,
}
</script>
