import { put, call, takeLatest, all } from 'redux-saga/effects';

import Types from './types';

// import ProfileService from '../../../services/profile';

import * as ProfileActions from './actions';
import * as LoaderActions from '../loader/actions';

export function* get() {
  yield put(LoaderActions.start());

  // const { success, data } = yield call(ProfileService.get);

  // if (success) {
  //   yield put(ProfileActions.getSuccess(data));
  // }

  yield put(LoaderActions.stop());
}

export function* update({ payload }) {
  yield put(LoaderActions.start());

  const { profile } = payload;

  const { success, data } = yield call(ProfileService.update, profile);

  if (success) {
    yield put(ProfileActions.updateSuccess(data));
  }

  yield put(LoaderActions.stop());
}

export default all([takeLatest(Types.GET_REQUEST, get), takeLatest(Types.UPDATE_REQUEST, update)]);
