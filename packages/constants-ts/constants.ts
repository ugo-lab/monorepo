import { IUser } from '@monorepo/types';

export const CONSTANTS_TEST = 'ça marche';
export const CONSTANTS_TEST2 = 'ça marche 2';

export const USER1: IUser = {
  name: 'John',
  age: 25
};
export const USER2: IUser = {
  name: 'Doe',
  age: 30
};
export const USERS: IUser[] = [USER1, USER2];

// @monorepo/back
export const MORGAN_DEV_FORMAT = 'dev';
