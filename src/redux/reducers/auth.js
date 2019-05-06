import {userActionsTypes} from "../constants";

let token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true , token} : {};

export function authorization(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.USERS_LOGIN_REQUEST:
      return {
        loggingIn: true,
        token: action.payload
      };
    case userActionsTypes.USERS_LOGIN_SUCCESS:
      return {
        token: action.payload.token,
        loggedIn: action.payload.loggedIn,
      };
    case userActionsTypes.USERS_LOGIN_FAILURE:
      return {};
    case userActionsTypes.USERS_LOGOUT:
      return {};
    default:
      return state
  }
}

export function profile(state = initialState, action) {
  switch (action.type) {
    case userActionsTypes.USERS_PROFILE_REQUEST:
      return {
        user: action
      };
    case userActionsTypes.USERS_PROFILE_SUCCESS:
      return {
        user: action.data.data
      };
    case userActionsTypes.USERS_PROFILE_FAILURE:
      return {};
    default:
      return state
  }
}
