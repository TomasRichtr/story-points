<script setup lang="ts">
import { VuetifyColor, VuetifySize } from "../../enums/vuetify";
import { computed } from "vue";
import { useDisplay } from "vuetify";

interface Props {
  isItemEdited: boolean,
  entityValue: Record<string, string>,
  tooltips: {
    create: string
    update: string
    delete: string
  },
}

const props = defineProps<Props>();

interface Emits {
  (eventName: "update:is-item-edited", isItemEdited: boolean): void
  (eventName: "item:new"): void
  (eventName: "item:delete"): void
}

const emit = defineEmits<Emits>();

const isItemUpdated = computed(() => {
  return props.isItemEdited && props.entityValue?.id;
});
</script>

<template>
  <div
    class="flex gap-2 h-14"
  >
    <complex-btn
      :tooltip="isItemUpdated ? props.tooltips.update : props.tooltips.create"
      @button:clicked="emit('item:new')"
    >
      <v-icon
        v-if="isItemEdited"
        icon="mdi-content-save-outline"
        :size="VuetifySize.XLarge"
      />
      <v-icon
        v-else
        icon="mdi-plus"
        size="x-large"
      />
    </complex-btn>

    <complex-btn
      v-if="props.entityValue && !isItemEdited"
      :color="VuetifyColor.Warning"
      :tooltip="props.tooltips.update"
      @button:clicked="emit('update:is-item-edited', true)"
    >
      <v-icon
        icon="mdi-pen"
        :size="VuetifySize.XLarge"
      />
    </complex-btn>

    <complex-btn
      v-if="props.entityValue || isItemEdited"
      :color="VuetifyColor.Error"
      :tooltip="props.tooltips.delete"
      @button:clicked="emit('item:delete')"
    >
      <v-icon
        v-if="isItemEdited"
        icon="mdi-cancel"
        :size="VuetifySize.XLarge"
      />
      <v-icon
        v-else
        icon="mdi-trash-can-outline"
        size="x-large"
      />
    </complex-btn>
  </div>
</template>

<style scoped>

</style>
