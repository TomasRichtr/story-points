import { type StoryPointSet } from '../../types/storyPointSet';
import knexDb from '../db/knex.db';
import { Tables } from "../enums";

const getStoryPointSets = async (): Promise<StoryPointSet[]> => {
  return knexDb(Tables.StoryPointSets);
};

const createStoryPointSet = async (storyPointSet: { storyPointSet: string }): Promise<string[]> => {
  console.log("storyPointSet");
  console.log(storyPointSet);
  return knexDb(Tables.StoryPointSets).insert(storyPointSet);
};

const updateStoryPointSet = async (id: string, patch: Omit<StoryPointSet, "id">): Promise<string[]> => {
  return knexDb(Tables.StoryPointSets)
    .where({
      id
    })
    .update(patch);
};

const deleteStoryPointSet = async (id: string): Promise<string[]> => {
  return knexDb(Tables.StoryPointSets).where({ id }).delete();
};

export default { getStoryPointSets, createStoryPointSet, updateStoryPointSet, deleteStoryPointSet };
