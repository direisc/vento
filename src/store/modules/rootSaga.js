import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import profile from './profile/sagas';
import signup from './signUp/sagas';

export default function* rootSaga() {
  return yield all([auth, profile, signup]);
}
