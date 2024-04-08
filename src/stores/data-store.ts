import { defineStore } from 'pinia';
import { ref } from 'vue';
import { User } from "../../types/user";
import { Team } from "../../types/team";
import { StoryPointSet } from "../../types/storyPointSet";

export const useDataStore = defineStore('dataStore', () => {
  const team = ref<Team>(null);
  const teams = ref<Team[]>([]);

  const user = ref<User>(null);
  const users = ref<User[]>([]);

  const storyPointSet = ref<StoryPointSet>(null);
  const storyPointSets = ref<StoryPointSet[]>([]);


  return {
    team,
    teams,
    user,
    users,
    storyPointSets,
    storyPointSet
  };
});
