import { produce } from 'immer';
import { AnyAction } from 'redux';

import { AuthTypes } from './types';

const initialState = {
  authenticated: false,
  skipped: false,
  user: {},
  token: null,
};

export default function reducer(state = initialState, action: AnyAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case AuthTypes.SIGNIN_SUCCESS:
        draft.authenticated = true;
        draft.skipped = false;
        draft.user = { ...draft.user, ...action.payload.user };
        draft.token = action.payload.token;
        break;
      case AuthTypes.SIGNOUT:
        draft.authenticated = false;
        draft.skipped = false;
        draft.user = {};
        draft.token = null;
        break;
      case AuthTypes.SKIP_SIGNIN:
        draft.authenticated = false;
        draft.skipped = true;
        draft.user = {};
        break;
      case AuthTypes.SIGNIN_BY_REGISTER:
        draft.authenticated = false;
        draft.skipped = false;
        draft.user = { ...draft.user, ...action.payload.user };
        draft.token = action.payload.token;
        break;
      case AuthTypes.SET_AUTHENTICATED:
        draft.authenticated = action.payload.authenticated;
        break;
      default:
    }
  });
}
