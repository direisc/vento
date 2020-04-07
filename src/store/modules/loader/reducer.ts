import { produce } from 'immer';
import { AnyAction } from 'redux';

import { LoaderTypes, LoaderState } from './types';

const INITIAL_STATE: LoaderState = {
  show: false,
};

export default function reducer(state: LoaderState = INITIAL_STATE, action: AnyAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LoaderTypes.START:
        draft.show = true;
        break;
      case LoaderTypes.STOP:
        draft.show = false;
        break;
      default:
    }
  });
}
