import {
  OLD_CUSTOMER,
  CHECK_USER_PENDING,
  CHECK_USER_ERROR,
  NEW_CUSTOMER,
  CHANGE_TOTAL,

  CREATE_CUSTOMER_PENDING,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_ERROR,

} from "../constants/order.constants";

const initialState = {
  pendingDetail: false,
  error: null,
  orderProduct: null,

  //Order
  checkUserPending: false,
  totalCost: 0,
  customer: {
    firstName: localStorage.getItem("firstName") || "",
    lastName: localStorage.getItem("lastName") || "",
    phone: localStorage.getItem("phone") || "",
    email: localStorage.getItem("email") || "",
    city: localStorage.getItem("city") || "",
    country: localStorage.getItem("country") || "",
    note: localStorage.getItem("note") || "",
    address: localStorage.getItem("address") || ""
  },

  //customer
  createCustomerPending:false,

};

export const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case OLD_CUSTOMER:
      return {
        ...state,
        checkUserPending: false,
        customer: action.customer
      };
    case CHECK_USER_PENDING:
      return {
        ...state,
        checkUserPending: true
      };
    case CHECK_USER_ERROR:
      return {
        ...state,
        checkUserPending: false,
        error: action.error
      };
    case NEW_CUSTOMER:
      return {
        ...state,
        checkUserPending: false,
        customer: {
          ...state.customer,
          email: action.email
        }
      };
    case CHANGE_TOTAL:
      return {
        ...state,
        checkUserPending: false,
        totalCost: action.total
      };

    //Create New Customer
    case CREATE_CUSTOMER_PENDING:
      return{
        ...state,
        createCustomerPending : true
      }
    case CREATE_CUSTOMER_SUCCESS:
      return{
        ...state,
        createCustomerPending:false,
      }
    case CREATE_CUSTOMER_ERROR:
      return{
        ...state,
        createCustomerPending:false,
      }

    default:
      return state;
  }
};
