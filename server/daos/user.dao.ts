import { type User } from '../../types/user';
import knexDb from '../db/knex.db';
import { Tables } from "../enums";

const getUsers = async (): Promise<User[]> => {
  return knexDb(Tables.Users);
};

const createUser = async (user: Omit<User, "id">): Promise<string[]> => {
  return knexDb(Tables.Users).insert(user);
};

const updateUser = async (id: string, patch: Omit<User, "id">): Promise<string[]> => {
  return knexDb(Tables.Users)
    .where({
      id
    })
    .update(patch);
};

const deleteUser = async (id: string): Promise<string[]> => {
  return knexDb(Tables.Users).where({ id }).delete();
};

export default { getUsers, createUser, updateUser, deleteUser };
