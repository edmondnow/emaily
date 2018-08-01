import { combineReducers } from 'redux';
// eslint-disable-next-line no-unused-vars
import { reducer as reduxForm } from 'redux-form';

import auth from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth,
  form: reduxForm,
  surveys: surveysReducer
});
