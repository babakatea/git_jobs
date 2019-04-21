import {userActionsTypes} from '../constants';
import services from '../services';
import history from '../../history';
import alerts from './alerts';


function login(email, password) {
  return dispatch => {
    dispatch(request({email}));

    const token = services.login(email, password);

    if(token) {
      localStorage.setItem('token', token);
      history.push('/search');
      dispatch(success({token: token, loggedIn: true}));
    } else {
      dispatch(failure("Failed to login"));
      dispatch(alerts.error("Failed to login"));
    }
  };

  function request(payload) {
    return {type: userActionsTypes.LOGIN_REQUEST, payload}
  }

  function success(payload) {
    return {type: userActionsTypes.LOGIN_SUCCESS, payload}
  }

  function failure(error) {
    return {type: userActionsTypes.LOGIN_FAILURE, error}
  }
}

function getProfile() {
  return dispatch => {
    dispatch(request());
      services.getProfile()
      .then(
        user => dispatch(success(user)),
        error => {
          dispatch(failure(error));
          dispatch(alerts.error(error))
        }
      );
  };

  function request() {
    return {type: userActionsTypes.PROFILE_REQUEST}
  }

  function success(data) {
    return {type: userActionsTypes.PROFILE_SUCCESS, data}
  }

  function failure(error) {
    return {type: userActionsTypes.PROFILE_FAILURE, error}
  }
}

function logout() {
  services.logout();
  history.push('/');
  return {type: userActionsTypes.LOGOUT};
}

export default {login, logout, getProfile};
