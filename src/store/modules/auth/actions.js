import Types from './types';

export function signin(auth) {
  return {
    type: Types.SIGNIN_REQUEST,
    payload: { auth },
  };
}

export function signinSuccess({ user, token }) {
  return {
    type: Types.SIGNIN_SUCCESS,
    payload: { user, token },
  };
}

export function signOut() {
  return {
    type: Types.SIGNOUT,
  };
}

export function skipSignIn() {
  return {
    type: Types.SKIP_SIGNIN,
  };
}

export function signInByRegister({ user, token }) {
  return {
    type: Types.SIGNIN_BY_REGISTER,
    payload: { user, token },
  };
}

export function setAuthenticated(authenticated) {
  return {
    type: Types.SET_AUTHENTICATED,
    payload: { authenticated },
  };
}
