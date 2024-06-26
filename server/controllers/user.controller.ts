import {type User} from '../../types/user'
import userDao from '../daos/user.dao'

const getUser = async (payload: User): Promise<User> => {
  return await userDao.getUser(payload.id as string)
}

const createUser = async (payload: Omit<User, 'id'>): Promise<User> => {
  const user = {
    name: payload.name
  }
  const [userId] = await userDao.createUser(user)
  return {name: payload.name, id: userId}
}

const updateUser = async (payload: User): Promise<string[]> => {
  const id = payload.id as string
  const user = {
    name: payload.name
  }

  return await userDao.updateUser(id, user)
}

const deleteUser = async (payload: User): Promise<string[]> => {
  return await userDao.deleteUser(payload.id as string)
}

export default {getUser, createUser, updateUser, deleteUser}
