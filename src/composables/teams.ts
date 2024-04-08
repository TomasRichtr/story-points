import teamsApi from "../api/teams";
import { STRINGS } from "../constants/strings";
import { useNotifications } from "./notifications";
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data-store";

export const useTeams = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const { teams, team } = storeToRefs(useDataStore());

  const handleAddTeam = async () => {
    try {
      const newUser = await teamsApi.addTeam(team.value.name);
      teams.value = await teamsApi.getTeams();
      team.value = newUser;
      notifySuccess(STRINGS.messages.teams.successCreate);
    } catch (err) {
      notifyError(STRINGS.messages.teams.errorCreate);
      console.error(err);
    }
  };

  const handleDeleteTeam = async () => {
    try {
      await teamsApi.deleteTeam(team.value.id);
      teams.value = await teamsApi.getTeams();
      team.value = null;
      notifySuccess(STRINGS.messages.teams.successDelete);
    } catch (err) {
      notifyError(STRINGS.messages.teams.errorDelete);
      console.error(err);
    }
  };

  const handleUpdateTeam = async () => {
    try {
      const updatedUserId = await teamsApi.updateTeam(team.value);
      teams.value = await teamsApi.getTeams();
      team.value = { id: updatedUserId, name: team.value.name };
      notifySuccess(STRINGS.messages.teams.successUpdate);
    } catch (err) {
      notifyError(STRINGS.messages.teams.errorUpdate);
      console.error(err);
    }
  };

  return {
    handleAddTeam,
    handleDeleteTeam,
    handleUpdateTeam
  };
};
