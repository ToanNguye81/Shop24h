import { ERROR_LOG_IN, RESET_USER, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants";

const initialState = {
  loggedUser: false,
  loading: true,
  user: {},
};

export const signInReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOG_IN:
      return {
        ...state,
        loading: false,
        loggedUser: true,
        user: action.user,
      };
    case ERROR_LOG_IN:
      // Không thực hiện hành động nào nếu đăng nhập thất bại
      return {...state,
        loading: false,
        loggedUser: false,
      }
    case SUCCESS_LOG_OUT:
      return {
        ...state,
        loggedUser: false,
        user: {},
        loading: false,
      };
    case RESET_USER:
      return {
        ...state,
        user: {},
        loading: false,
      };
    default:
      return state;
  }
};