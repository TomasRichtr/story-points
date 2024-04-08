import { type Team } from '../../types/team';
import knexDb from '../db/knex.db';
import { Tables } from "../enums";

const getTeams = async (): Promise<Team[]> => {
  return knexDb(Tables.Teams);
};

const createTeam = async (team: Omit<Team, "id">): Promise<string[]> => {
  return knexDb(Tables.Teams).insert(team);
};

const updateTeam = async (id: string, patch: Omit<Team, "id">): Promise<string[]> => {
  return knexDb(Tables.Teams)
    .where({
      id
    })
    .update(patch);
};

const deleteTeam = async (id: string): Promise<string[]> => {
  return knexDb(Tables.Teams).where({ id }).delete();
};

export default { getTeams, createTeam, updateTeam, deleteTeam };
