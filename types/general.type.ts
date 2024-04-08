import { type User } from './user';
import { type StoryPointSet } from "./storyPointSet";
import { type Team } from "./team";

export type UnknownObject = Record<string, unknown>

export type RequestResult = User | string[] | null | User[] | Team | Team[] | StoryPointSet | StoryPointSet[]

export type MyFunction = (payload: never) => Promise<RequestResult>
