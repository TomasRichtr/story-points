import BaseApi from "./base";
import { Team } from "../../types/team";

class TeamsApi extends BaseApi {
  async getTeams() {
    try {
      const { data } = await this.requestGet(`/teams`);
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async addTeam(name: string) {
    try {
      const { data } = await this.requestPost(`/team`, { name });
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async updateTeam(team: Team) {
    try {
      const { data } = await this.requestPatch(`/team/${team.id}`, team);
      return data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async deleteTeam(id: string) {
    try {
      await this.requestDelete(`/team/${id}`);
    } catch (err) {
      throw this.handleError(err);
    }
  }
}

export default new TeamsApi();
