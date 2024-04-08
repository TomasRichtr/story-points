import { type StoryPointSet } from '../../types/storyPointSet';
import storyPointSetsDao from "../daos/storyPointSets.dao";


const getStoryPointSets = async (): Promise<StoryPointSet[]> => {
  const storyPointSets = await storyPointSetsDao.getStoryPointSets();
  return await storyPointSetsDao.getStoryPointSets();
};

const createStoryPointSet = async (payload: Omit<StoryPointSet, 'id'>): Promise<StoryPointSet> => {
  const storyPointSet = {
    storyPointSet: JSON.stringify(payload.storyPointSet)
  };
  const [userId] = await storyPointSetsDao.createStoryPointSet(storyPointSet);
  return { storyPointSet: payload.storyPointSet, id: userId };
};

const updateStoryPointSet = async (payload: StoryPointSet): Promise<string[]> => {
  const id = payload.id as string;
  const storyPointSet = {
    storyPointSet: payload.storyPointSet
  };

  return await storyPointSetsDao.updateStoryPointSet(id, storyPointSet);
};

const deleteStoryPointSet = async (payload: StoryPointSet): Promise<string[]> => {
  return await storyPointSetsDao.deleteStoryPointSet(payload.id);
};

export default { getStoryPointSets, createStoryPointSet, updateStoryPointSet, deleteStoryPointSet };
