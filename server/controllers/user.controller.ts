import { type User } from '../../types/user';
import userDao from '../daos/user.dao';
import { UserCols } from "../enums";

const getUsers = async (): Promise<User[]> => {
  return await userDao.getUsers();
};

const createUser = async (payload: Omit<User, UserCols.Id>): Promise<User> => {
  const user = {
    name: payload.name
  };
  const [userId] = await userDao.createUser(user);
  return { name: payload.name, id: userId };
};

const updateUser = async (payload: User): Promise<string[]> => {
  const id = payload.id as string;
  const user = {
    name: payload.name
  };

  return await userDao.updateUser(id, user);
};

const deleteUser = async (payload: User): Promise<string[]> => {
  return await userDao.deleteUser(payload.id as string);
};

export default { getUsers, createUser, updateUser, deleteUser };
