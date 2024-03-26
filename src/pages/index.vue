<template>
  <page-layout>
    <crud-editor
      v-model="user"
      :opts="users"
      :tooltips="CRUD_BTNS_TOOLTIPS"
      :label="STRINGS.labels.pickUser"
      @item:add="handleAddUser"
      @item:delete="handleDeleteUser"
      @item:update="handleUpdateUser"
    />
  </page-layout>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data-store";
import { STRINGS } from "../constants/strings";
import { onMounted } from "vue";
import usersApi from "../api/users";
import { useNotifications } from "../composables/notifications";

const { users, user } = storeToRefs(useDataStore());

const CRUD_BTNS_TOOLTIPS = {
  create: STRINGS.tooltips.createUser,
  update: STRINGS.tooltips.changeUserName,
  delete: STRINGS.tooltips.deleteUser,
};

const { notifyError, notifySuccess } = useNotifications();

const handleAddUser = async () => {
  try {
    const newUser = await usersApi.addUser(user.value.name);
    users.value = await usersApi.getUsers();
    user.value = newUser;
    notifySuccess(STRINGS.messages.users.successCreate);
  } catch (err) {
    notifyError(STRINGS.messages.users.errorCreate);
    console.error(err);
  }
};

const handleDeleteUser = async () => {
  try {
    await usersApi.deleteUser(user.value.id);
    users.value = await usersApi.getUsers();
    user.value = null;
    notifySuccess(STRINGS.messages.users.successDelete);
  } catch (err) {
    notifyError(STRINGS.messages.users.errorDelete);
    console.error(err);
  }
};

const handleUpdateUser = async () => {
  try {
    const updatedUserId = await usersApi.updateUser(user.value);
    users.value = await usersApi.getUsers();
    user.value = { id: updatedUserId, name: user.value.name };
    notifySuccess(STRINGS.messages.users.successUpdate);
  } catch (err) {
    notifyError(STRINGS.messages.users.errorUpdate);
    console.error(err);
  }
};

onMounted(async () => {
  users.value = await usersApi.getUsers();
});
</script>
