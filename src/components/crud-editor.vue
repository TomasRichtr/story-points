<script setup lang="ts">
import {VuetifyColor} from "../enums/vuetify";
import {computed} from "vue"
import {storeToRefs} from "pinia";
import {useUiStore} from "../stores/ui-store";

interface Props {
  modelValue: string
  tooltips: {
    create: string
    update: string
    delete: string
  },
  opts: string[],
  label: string
}

const props = defineProps<Props>()

interface Emits {
  (eventName: "update:modelValue", entityValue: string): void
}

const emit = defineEmits<Emits>()

const entityValue = computed({
  get() {
    return props.modelValue
  },
  set(newEntityValue: string) {
    emit("update:modelValue", newEntityValue)
  }
})

const {isItemEdited} = storeToRefs(useUiStore())

const handleItemEdit = () => {
  if (isItemEdited.value) {
    isItemEdited.value = false
    return
  }

  isItemEdited.value = true
}

const handleItemDelete = () => {
  if (isItemEdited.value) {
    isItemEdited.value = false
    return
  }

  isItemEdited.value = false
}
</script>

<template>
  <v-row class="gap-5 flex justify-center">
    <v-text-field
      v-if="isItemEdited"
      :label="props.label"
      :items="props.opts"
      variant="outlined"
      hide-details
      class="max-w-2xl"
      v-model="entityValue"
      autofocus
    />

    <v-select
      v-else
      :label="props.label"
      :items="props.opts"
      variant="outlined"
      hide-details
      class="max-w-2xl"
      v-model="entityValue"
    />

    <complex-btn :tooltip="tooltips.create" @button:clicked="handleItemEdit">
      <v-icon v-if="isItemEdited" icon="mdi-content-save-outline" size="x-large"/>
      <v-icon v-else icon="mdi-plus" size="x-large"/>
    </complex-btn>

    <complex-btn :color="VuetifyColor.Warning" :tooltip="tooltips.update" :disabled="!entityValue || isItemEdited"
                 @button:clicked="isItemEdited = true">
      <v-icon icon="mdi-pen" size="x-large"/>
    </complex-btn>

    <complex-btn :color="VuetifyColor.Error" :tooltip="tooltips.delete" :disabled="!entityValue && !isItemEdited"
                 @button:clicked="handleItemDelete">
      <v-icon v-if="isItemEdited" icon="mdi-cancel" size="x-large"/>
      <v-icon v-else icon="mdi-trash-can-outline" size="x-large"/>
    </complex-btn>
  </v-row>
</template>

