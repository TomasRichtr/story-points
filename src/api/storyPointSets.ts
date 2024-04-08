import BaseApi from "./base";
import { StoryPointSet } from "../../types/storyPointSet";

class StoryPointSetApi extends BaseApi {
  async getStoryPointSets() {
    try {
      const { data } = await this.requestGet(`/story-point-sets`);
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async addStoryPointSet(storyPointSet: string[] | number[]) {
    try {
      const { data } = await this.requestPost(`/story-point-set`, { storyPointSet });
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async updateStoryPointSet(storyPointSet: StoryPointSet) {
    try {
      const { data } = await this.requestPatch(`/story-point-set/${storyPointSet.id}`, storyPointSet);
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async deleteStoryPointSet(id: string) {
    try {
      await this.requestDelete(`/story-point-set/${id}`);
    } catch (err) {
      throw this.handleError(err);
    }
  }
}

export default new StoryPointSetApi();
