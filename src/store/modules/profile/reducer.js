import { produce } from 'immer';

import Types from './types';

const INITIAL_STATE = {
  profile: {},
  card: [],
};
export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.ADD_CARD:
        draft.card.push(action.card);
        break;
      case Types.GET_SUCCESS:
        draft.profile = action.payload.profile;
        break;
      case Types.UPDATE_SUCCESS:
        draft.profile = { ...action.payload.profile };
        break;
      default:
    }
  });
}
