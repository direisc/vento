import { combineReducers } from 'redux';

import auth from './auth/reducer';
import loader from './loader/reducer';
import profile from './profile/reducer';
import signUp from './signUp/reducer';

export default combineReducers({
  loader,
  auth,
  profile,
  signUp,
});
