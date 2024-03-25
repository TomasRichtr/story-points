import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useDataStore = defineStore('dataStore', () => {
  const team = ref<string>(null)
  const newTeam = ref<string>(null)
  const teams = ref<string[]>([null, 'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'])

  const user = ref<string>(null)
  const newUser = ref<string>(null)
  const users = ref<string[]>([null, '111', '222', '333', '444', '555', '666'])


  return {
    team,
    newTeam,
    teams,
    user,
    newUser,
    users
  }
})
