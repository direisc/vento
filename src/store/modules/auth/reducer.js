import { produce } from 'immer';

import Types from './types';

const initialState = {
  authenticated: false,
  skipped: false,
  user: {},
  token: null,
};

export default function reducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGNIN_SUCCESS:
        draft.authenticated = true;
        draft.skipped = false;
        draft.user = { ...draft.user, ...action.payload.user };
        draft.token = action.payload.token;
        break;
      case Types.SIGNOUT:
        draft.authenticated = false;
        draft.skipped = false;
        draft.user = {};
        draft.token = null;
        break;
      case Types.SKIP_SIGNIN:
        draft.authenticated = false;
        draft.skipped = true;
        draft.user = {};
        break;
      case Types.SIGNIN_BY_REGISTER:
        draft.authenticated = false;
        draft.skipped = false;
        draft.user = { ...draft.user, ...action.payload.user };
        draft.token = action.payload.token;
        break;
      case Types.SET_AUTHENTICATED:
        draft.authenticated = action.payload.authenticated;
        break;
      default:
    }
  });
}
