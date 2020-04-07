import { put, call, takeLatest, all } from 'redux-saga/effects';

import Types from './types';

import { HousiAPI } from '../../../services/api';
// import SignUpService from '../../../services/signUp';

import * as AuthActions from '../auth/actions';
import * as LoaderActions from '../loader/actions';

export function* signUp({ payload }) {
  yield put(LoaderActions.start());

  const { user } = payload;

  // const { success, data } = yield call(SignUpService.signUp, user);

  // if (success) {
  //   const { bearerToken, ...userCreated } = data;

  //   HousiAPI.defaults.headers.Authorization = `Bearer ${bearerToken}`;

  //   yield put(AuthActions.signInByRegister({ user: userCreated, token: bearerToken }));
  // }

  yield put(LoaderActions.stop());
}

export default all([takeLatest(Types.CREATE_USER_REQUEST, signUp)]);
