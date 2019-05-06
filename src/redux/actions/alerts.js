import {alertActionsTypes} from '../constants/index';

function success(message) {
  return {type: alertActionsTypes.ALERT_SUCCESS, message};
}

function error(message) {
  return {type: alertActionsTypes.ALERT_ERROR, message};
}

function hide() {
  return {type: alertActionsTypes.ALERT_HIDE};
}

export default {success, error, hide};
