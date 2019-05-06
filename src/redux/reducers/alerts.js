import {alertActionsTypes} from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertActionsTypes.ALERT_SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertActionsTypes.ALERT_ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertActionsTypes.ALERT_HIDE:
      return {};
    default:
      return state
  }
}
