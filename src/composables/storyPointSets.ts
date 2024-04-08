import storyPointSetApi from "../api/storyPointSets";
import { STRINGS } from "../constants/strings";
import { useNotifications } from "./notifications";
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data-store";
import { computed } from "vue";

export const useStoryPointSets = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const { storyPointSets, storyPointSet } = storeToRefs(useDataStore());

  const handleAddStoryPointSet = async () => {
    try {
      const dbStoryPointSet = parseStoryPointNameToArray(storyPointSet.value.storyPointSet as unknown as string);
      console.log(dbStoryPointSet)
      const newStoryPointSet = await storyPointSetApi.addStoryPointSet(dbStoryPointSet);
      storyPointSets.value = await storyPointSetApi.getStoryPointSets();
      storyPointSet.value = newStoryPointSet;
      notifySuccess(STRINGS.messages.storyPointSets.successCreate);
    } catch (err) {
      notifyError(STRINGS.messages.storyPointSets.errorCreate);
      console.error(err);
    }
  };

  const handleDeleteStoryPointSet = async () => {
    try {
      await storyPointSetApi.deleteStoryPointSet(storyPointSet.value.id);
      storyPointSets.value = await storyPointSetApi.getStoryPointSets();
      storyPointSet.value = null;
      notifySuccess(STRINGS.messages.storyPointSets.successDelete);
    } catch (err) {
      notifyError(STRINGS.messages.storyPointSets.errorDelete);
      console.error(err);
    }
  };

  const handleUpdateStoryPointSet = async () => {
    try {
      const updatedStoryPointSetId = await storyPointSetApi.updateStoryPointSet(storyPointSet.value);
      storyPointSets.value = await storyPointSetApi.getStoryPointSets();
      storyPointSet.value = { id: updatedStoryPointSetId, storyPointSet: storyPointSet.value.storyPointSet };
      notifySuccess(STRINGS.messages.users.successUpdate);
    } catch (err) {
      notifyError(STRINGS.messages.storyPointSets.errorUpdate);
      console.error(err);
    }
  };

  const storyPointSetParsedVal = computed({
    get() {
      if (!storyPointSet.value) return null;


      return {
        id: storyPointSet.value.id,
        name: storyPointSet.value.storyPointSet
      };
    },
    set(newStoryPointSet: { name: string, id: string }) {
      storyPointSet.value = {
        storyPointSet: newStoryPointSet?.name,
        id: storyPointSet.value?.id
      };
    }
  });

  const parseStoryPointNameToArray = (storyPointSetName: string) => {
    const removeWhitespaces = storyPointSetName.replace(/\s+/g, '');

    return removeWhitespaces.split(",");
  };

  const storyPointSetsRemapped = computed(() => {
    return storyPointSets.value.map(storyPointSet => {
      return {
        id: storyPointSet.id,
        name: storyPointSet.storyPointSet
      };
    });
  });

  return {
    handleAddStoryPointSet,
    handleDeleteStoryPointSet,
    handleUpdateStoryPointSet,
    storyPointSetParsedVal,
    storyPointSetsRemapped
  };
};
