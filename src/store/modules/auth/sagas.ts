import { Alert } from 'react-native';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';

import { VentoAPI } from '../../../services/api';
// import AuthService from '../../../services/auth';
import * as LoaderActions from '../loader/actions';
import * as AuthActions from './actions';
import { AuthTypes } from './types';

export function* signin(action: PayloadAction<AuthTypes.SIGNIN_REQUEST, any>) {
  yield put(LoaderActions.start());
  const { auth } = action.payload;
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

export function setToken(action: PayloadAction<'persist/REHYDRATE', any>) {
  if (!action.payload) return;
  const { token } = action.payload.auth;
  if (token) {
    VentoAPI.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGNIN_REQUEST, signin),
]);
