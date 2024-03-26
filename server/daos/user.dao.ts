import { type User } from '../../types/user'
import knexDb from '../db/knex.db'
import {TABLES} from "../enums";

const getUsers = async (): Promise<User[]> => {
  return knexDb(TABLES.Users)
}

const createUser = async (user: Omit<User, 'id'>): Promise<string[]> => {
  return knexDb('users').insert(user)
}

const updateUser = async (id: string, patch: Omit<User, 'id'>): Promise<string[]> => {
  return knexDb('users')
    .where({
      id
    })
    .update(patch)
}

const deleteUser = async (id: string): Promise<string[]> => {
  return knexDb(TABLES.Users).where({ id }).delete()
}

const getUserByEmail = async (email: string): Promise<User> => {
  return knexDb(TABLES.Users)
    .where({
      email
    })
    .first()
}

export default { getUsers, createUser, updateUser, deleteUser, getUserByEmail }
