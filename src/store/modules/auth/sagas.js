import { put, call, takeLatest, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import Types from './types';

import { VentoAPI } from '../../../services/api';
// import AuthService from '../../../services/auth';

import * as AuthActions from './actions';
import * as LoaderActions from '../loader/actions';

export function* signin({ payload }) {
  yield put(LoaderActions.start());

  const { auth } = payload;

  // const { success, data } = yield call(AuthService.signIn, auth);

  // if (success) {
  //   const { bearerToken, ...user } = data;

  //   VentoAPI.defaults.headers.Authorization = `Bearer ${bearerToken}`;

  //   yield put(AuthActions.signinSuccess({ user, token: bearerToken }));
  // } else {
  //   Alert.alert('Falha na comunicação com o servidor, tente mais tarde!');
  // }

  yield put(LoaderActions.stop());
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    VentoAPI.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(Types.SIGNIN_REQUEST, signin),
]);
