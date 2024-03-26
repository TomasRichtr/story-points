<template>
  <page-layout>
    <crud-editor v-model="user" :opts="users" :tooltips="CRUD_BTNS_TOOLTIPS" :label="STRINGS.labels.pickUser" @item:add="handleAddNewUser"/>
  </page-layout>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useDataStore} from "../stores/data-store";
import {STRINGS} from "../constants/strings";
import {onMounted} from "vue"
import usersApi from "../api/users"

const {users, user} = storeToRefs(useDataStore())

const CRUD_BTNS_TOOLTIPS = {
  create: STRINGS.tooltips.createUser,
  update: STRINGS.tooltips.changeUserName,
  delete: STRINGS.tooltips.deleteUser,
}

const handleAddNewUser = async () => {
  await usersApi.addUser(user.value)
  users.value = await usersApi.getUsers()
}

const handleUpdateUser = async () => {
  await usersApi.updateUser(user.value)
}

onMounted(async () => {
  users.value = await usersApi.getUsers()
})
</script>
