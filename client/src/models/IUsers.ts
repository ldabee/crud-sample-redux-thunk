export type IUser = {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type IUsers = {
  users: IUser[];
  error: string;
  loading: boolean;
  currentUser: IUser;
}