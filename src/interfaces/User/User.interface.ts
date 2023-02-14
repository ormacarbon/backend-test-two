import { Document } from 'mongoose';

export interface UserCreateInterface {
  username: string;
  password: string;
  email: string;
}

export interface UserLoginInterface {
  password: string;
  email: string;
}

export interface User extends Document {
  username: string;
  password?: string;
  email: string;
  id: string;
  created_at: Date;
}
