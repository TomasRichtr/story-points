import {defineStore} from 'pinia'
import {ref} from 'vue'
import {User} from "../../types/user";

export const useDataStore = defineStore('dataStore', () => {
  const team = ref<string>(null)
  const newTeam = ref<string>(null)
  const teams = ref<string[]>([])

  const user = ref<User>(null)
  const newUser = ref<string>(null)
  const users = ref<User[]>([])


  return {
    team,
    newTeam,
    teams,
    user,
    newUser,
    users
  }
})
