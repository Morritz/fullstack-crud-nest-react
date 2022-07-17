import { initReactQueryAuth } from 'react-query-auth';
import {
  loadUserData,
  loginWithUsernameAndPassword,
  UserOrNothing,
} from './api';

export type LoginCredentials = {
  username: string;
  password: string;
};

async function loadUser() {
  const user = await loadUserData();
  return user;
}

async function loginFn(data: LoginCredentials) {
  const user = await loginWithUsernameAndPassword(data);
  return user;
}

async function registerFn() {
  return null;
}
async function logoutFn() {
  return null;
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

const { AuthProvider, AuthConsumer, useAuth } = initReactQueryAuth<
  UserOrNothing,
  any,
  LoginCredentials
>(authConfig);

export { AuthProvider, AuthConsumer, useAuth };
