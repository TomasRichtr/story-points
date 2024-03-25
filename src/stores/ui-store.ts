import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useUiStore = defineStore('uiStore', () => {
  const showSidebar = ref<boolean>(true)
  const isItemEdited = ref<boolean>(false)

  return {
    showSidebar,
    isItemEdited
  }
})
