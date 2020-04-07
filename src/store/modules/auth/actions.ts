import { action } from 'typesafe-actions';

import { AuthTypes } from './types';

export const signin = (data: any) => action(AuthTypes.SIGNIN_REQUEST, data);

export const signinSuccess = ({ user, token }: any) =>
  action(AuthTypes.SIGNIN_SUCCESS, { user, token });

export const signOut = () => action(AuthTypes.SIGNOUT);

export const skipSignIn = () => action(AuthTypes.SKIP_SIGNIN);

export const signInByRegister = ({ user, token }: any) =>
  action(AuthTypes.SIGNIN_BY_REGISTER, { user, token });

export const setAuthenticated = (authenticated: any) =>
  action(AuthTypes.SIGNIN_REQUEST, { authenticated });
