import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
// import documents from './documents/sagas';
// import favorites from './favorites/sagas';
// import filters from './filter/sagas';
// import profile from './profile/sagas';
// import property from './property/sagas';
// import signup from './signUp/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    // profile, filters, property, signup, documents, favorites
  ]);
}
