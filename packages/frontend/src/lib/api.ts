import axios from 'axios';
import { LoginCredentials } from './auth';

const backendURL = 'http://localhost:3333';

export interface User {
  id: number;
  username: string;
}

export type UserOrNothing = User | null;

export type AuthResponse = User;

export async function loginWithUsernameAndPassword(
  data: LoginCredentials
): Promise<AuthResponse> {
  return axios
    .post(`${backendURL}/api/auth/login`, data, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((e) => Promise.reject(e.response.status));
}
