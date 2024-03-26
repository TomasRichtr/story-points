<script setup lang="ts">
import { VuetifyColor } from "../enums/vuetify";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useUiStore } from "../stores/ui-store";

interface Props {
  modelValue: Record<string, string>,
  tooltips: {
    create: string
    update: string
    delete: string
  },
  opts: Record<string, string>[],
  label: string
}

const props = defineProps<Props>();

interface Emits {
  (eventName: "update:modelValue", entityValue: Record<string, string>): void

  (eventName: "item:add"): void

  (eventName: "item:delete"): void

  (eventName: "item:update"): void
}

const emit = defineEmits<Emits>();

const entityValue = computed({
  get() {
    return props.modelValue;
  },
  set(newEntityValue: Record<string, string>) {
    emit("update:modelValue", newEntityValue);
  }
});

const newEntityValue = computed({
  get() {
    return props.modelValue?.name;
  },
  set(name: string) {
    emit("update:modelValue", { name, id: entityValue.value?.id });
  }
});

const isItemUpdated = computed(() => {
  return isItemEdited.value && entityValue.value?.id
});

const { isItemEdited } = storeToRefs(useUiStore());

const handleItemDelete = () => {
  if (!isItemEdited.value) {
    isItemEdited.value = false;
    emit("item:delete");
    return;
  }

  isItemEdited.value = false;
};

const handleNewItem = () => {
  if (isItemEdited.value) {
    isItemEdited.value = false;
    entityValue.value?.id ? emit("item:update") : emit("item:add");
    return;
  }

  entityValue.value = null;
  isItemEdited.value = true;
};

const handleNewItemBlur = () => {
  if (!newEntityValue.value) {
    isItemEdited.value = false;
  }
};
</script>

<template>
  <v-row class="gap-5 flex justify-center">
    <v-text-field
      v-if="isItemEdited"
      v-model="newEntityValue"
      :label="props.label"
      :items="props.opts"
      variant="outlined"
      hide-details
      class="max-w-2xl"
      autofocus
      @blur="handleNewItemBlur"
      @keydown.esc="isItemEdited = false"
      @keydown.enter="handleNewItem"
    />

    <v-select
      v-else
      v-model="entityValue"
      :label="props.label"
      :items="props.opts"
      variant="outlined"
      hide-details
      class="max-w-2xl"
      item-title="name"
      item-value="id"
      return-object
    />

    <div class="h-auto flex gap-2">
      <complex-btn
        :tooltip="isItemUpdated ? tooltips.update : tooltips.create"
        @button:clicked="handleNewItem"
      >
        <v-icon
          v-if="isItemEdited"
          icon="mdi-content-save-outline"
          size="x-large"
        />
        <v-icon
          v-else
          icon="mdi-plus"
          size="x-large"
        />
      </complex-btn>

      <complex-btn
        v-if="entityValue && !isItemEdited"
        :color="VuetifyColor.Warning"
        :tooltip="tooltips.update"
        @button:clicked="isItemEdited = true"
      >
        <v-icon
          icon="mdi-pen"
          size="x-large"
        />
      </complex-btn>

      <complex-btn
        v-if="entityValue || isItemEdited"
        :color="VuetifyColor.Error"
        :tooltip="tooltips.delete"
        @button:clicked="handleItemDelete"
      >
        <v-icon
          v-if="isItemEdited"
          icon="mdi-cancel"
          size="x-large"
        />
        <v-icon
          v-else
          icon="mdi-trash-can-outline"
          size="x-large"
        />
      </complex-btn>
    </div>
  </v-row>
</template>

