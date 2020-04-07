import { combineReducers } from 'redux';

import auth from './auth/reducer';
import loader from './loader/reducer';
// import documents from './documents/reducer';
// import favorites from './favorites/reducer';
// import filter from './filter/reducer';
// import profile from './profile/reducer';
// import property from './property/reducer';
// import propertyDetail from './propertyDetails/reducer';
// import signUp from './signUp/reducer';

export default combineReducers({
  loader,
  auth,
  // property,
  // filter,
  // profile,
  // propertyDetail,
  // signUp,
  // documents,
  // favorites,
});
