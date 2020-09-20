import {
  LOGIN_USER,
  AUTH_USER,
  REGISTER_USER,
  USER_POST,
  USER_LOGOUT,
} from "../_actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, userInfo: action.payload };
    case AUTH_USER:
      return { ...state, userInfo: action.payload };
    case REGISTER_USER:
      return { ...state };
    case USER_POST:
      return { ...state, myPost: action.payload };
    case USER_LOGOUT:
      return { ...state, userInfo: null, myPost: null };
    default:
      return state;
  }
};
