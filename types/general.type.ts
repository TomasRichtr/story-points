import { type User } from './user'
import { type AuthType } from './auth.type'

export type UnknownObject = Record<string, unknown>

export type RequestResult = User | string[] | AuthType | null

export type MyFunction = (payload: UnknownObject) => Promise<RequestResult>
