import { type User } from './user'

export type UnknownObject = Record<string, unknown>

export type RequestResult = User | string[] | null | User[]

export type MyFunction = (payload: never) => Promise<RequestResult>
