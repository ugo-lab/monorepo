export type Role = 'user' | 'admin' | 'owner';
export interface IUser {
  name: string;
  age: number;
  role: Role;
}
