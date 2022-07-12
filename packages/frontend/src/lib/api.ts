import { LoginCredentials } from './auth';

const backendURL = 'http://127.0.0.1:3333';

export interface User {
  id: number;
  username: string;
}

export type UserOrNothing = User | null;

export type AuthResponse = User;

export async function handleApiResponse(response: any) {
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}

export async function loginWithUsernameAndPassword(
  data: LoginCredentials
): Promise<AuthResponse> {
  return window
    .fetch(`${backendURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(handleApiResponse);
}
