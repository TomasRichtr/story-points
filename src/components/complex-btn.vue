<script setup lang="ts">
import {VuetifyColor} from "../enums/vuetify";

interface Props {
  color?: VuetifyColor
  tooltip?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {color: VuetifyColor.Primary, tooltip: null, disabled: false})

interface Emits {
  (eventName: "button:clicked"): void
}

const emit = defineEmits<Emits>()
</script>

<template>
  <v-tooltip :text="props.tooltip" location="bottom">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn variant="flat" :color="props.color" class="h-auto" v-bind="tooltipProps" :disabled="props.disabled"
             @click="emit('button:clicked')">
        <slot/>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<style scoped>

</style>
