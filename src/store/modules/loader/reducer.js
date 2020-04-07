import { produce } from 'immer';

import Types from './types';

const INITIAL_STATE = {
  show: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.START:
        draft.show = true;
        break;
      case Types.STOP:
        draft.show = false;
        break;
      default:
    }
  });
}
