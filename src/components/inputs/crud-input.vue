<script setup lang="ts">
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
import { VuetifyVariants } from "../../enums/vuetify";

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

const isItemEdited = ref<boolean>(false);

const handleItemDelete = () => {
  if (!isItemEdited.value) {
    isItemEdited.value = false;
    emit("item:delete");
    return;
  }

  entityValue.value = null;
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

const { smAndDown } = useDisplay();
</script>

<template>
  <v-row
    class="gap-5 flex"
    :class="smAndDown ? 'flex-col' : 'flex-row'"
  >
    <v-text-field
      v-if="isItemEdited"
      v-model="newEntityValue"
      :label="props.label"
      :items="props.opts"
      :variant="VuetifyVariants.SoloFilled"
      class="max-w-xl"
      autofocus
      hide-details="auto"
      @blur="handleNewItemBlur"
      @keydown.esc="isItemEdited = false"
      @keydown.enter="handleNewItem"
    >
      <template #details>
        <slot name="inputDetails" />
      </template>
    </v-text-field>

    <v-select
      v-else
      v-model="entityValue"
      :label="props.label"
      :items="props.opts"
      :variant="VuetifyVariants.SoloFilled"
      hide-details
      class="max-w-xl"
      item-title="name"
      item-value="id"
      return-object
    />

    <crud-input-btns
      v-model:is-item-edited="isItemEdited"
      :tooltips="tooltips"
      :entity-value="entityValue"
      @item:new="handleNewItem"
      @item:delete="handleItemDelete"
    />
  </v-row>
</template>

