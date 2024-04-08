import usersApi from "../api/users";
import { STRINGS } from "../constants/strings";
import { useNotifications } from "./notifications";
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data-store";

export const useUsers = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const { users, user } = storeToRefs(useDataStore());

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

  return {
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser
  };
};
