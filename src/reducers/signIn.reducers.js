// import { ERROR_LOG_IN, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants"

// const initializeState = {
//     logged: false,
//     user: {},
// }
// export const signInReducers = (state = initializeState, action) => {
//     switch (action.type) {
//         case SUCCESS_LOG_IN:
//             state.logged = true
//             state.user = action.user
//             break;
//         case ERROR_LOG_IN:

//             break;
//         case SUCCESS_LOG_OUT:
//             state.logged = false
//             state.user = {}
//             break;
//         default:
//             break;
//     }
//     return { ...state }
// }

import { ERROR_LOG_IN, RESET_USER, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants";

const initialState = {
  logged: false,
  user: {},
};

export const signInReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOG_IN:
      return {
        ...state,
        logged: true,
        user: action.user,
      };
    case ERROR_LOG_IN:
      // Không thực hiện hành động nào nếu đăng nhập thất bại
      return state;
    case SUCCESS_LOG_OUT:
      return {
        ...state,
        logged: false,
        user: {},
      };
    case RESET_USER:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};