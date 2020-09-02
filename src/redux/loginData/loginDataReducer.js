import { LOG_OUT, LOGIN_DATA } from './loginDataAction';

import { isCheckLoginInLocalStorage } from '../../utils/utils';

let userData = '';

const store = localStorage;
if (isCheckLoginInLocalStorage()) {
  userData = store.response;
}

const initialState = {
  loginData: userData,
};

function loginDataReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_DATA:
      return {
        loginData: action.data,
      };
    case LOG_OUT:
      return {
        loginData: action.data,
      };
    default:
      return state;
  }
}

export default loginDataReducer;
