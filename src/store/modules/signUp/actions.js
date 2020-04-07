import Types from './types';

export function setUser(user) {
  return {
    type: Types.SET_USER,
    payload: { user },
  };
}

export function signUpRequest(user) {
  return {
    type: Types.CREATE_USER_REQUEST,
    payload: { user },
  };
}

export function signUpSuccess() {
  return {
    type: Types.CREATE_USER_SUCCESS,
  };
}
