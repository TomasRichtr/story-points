import { type Team } from '../../types/team';
import teamDao from '../daos/team.dao';
import { TeamCols } from "../enums";

const getTeams = async (): Promise<Team[]> => {
  return await teamDao.getTeams();
};

const createTeam = async (payload: Omit<Team, TeamCols.Id>): Promise<Team> => {
  const team = {
    name: payload.name
  };
  const [teamId] = await teamDao.createTeam(team);
  return { name: payload.name, id: teamId };
};

const updateTeam = async (payload: Team): Promise<string[]> => {
  const id = payload.id as string;
  const team = {
    name: payload.name
  };

  return await teamDao.updateTeam(id, team);
};

const deleteTeam = async (payload: Team): Promise<string[]> => {
  return await teamDao.deleteTeam(payload.id as string);
};

export default { getTeams, createTeam, updateTeam, deleteTeam };
