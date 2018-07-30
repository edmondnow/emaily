import { combineReducers } from 'redux';
import auth from './authReducer';
// eslint-disable-next-line no-unused-vars
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({ auth, form: reduxForm });
