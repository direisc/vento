import { produce } from 'immer';

import Types from './types';

const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_USER:
        draft.user = { ...state.user, ...action.payload.user };
        break;
      case Types.CREATE_USER_SUCCESS:
        draft.user = {};
        break;
      default:
    }
  });
}
