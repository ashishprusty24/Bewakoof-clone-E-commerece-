import {
   
    IS_ERROR,
    IS_LOADING,
    BAG_DATA,
    USER_REQ,
    GET_USER,
    USER_FAILURE,

  } from "./actionTypes";

  const initState = {
    isLoading: false,
    isError: false,
    user: {},
    mybag: [],
  };
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case USER_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isError: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: {},
        isError: false,
      };
      case IS_LOADING: {
        return {
          ...state,
          isLoading: true,
          isError: false,
          products: [],
        };
      }
      case IS_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
          products: [],
        };
      }
      case BAG_DATA: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          mybag: payload,
          mrp: payload.reduce((acc, el) => {
            return acc + el.strikedOffprice * el.qty;
          }, 0),
          bag_discount: payload.reduce((acc, el) => {
            return acc + (el.strikedOffprice - el.price) * el.qty;
          }, 0),
          total: payload.reduce((acc, el) => {
            return acc + el.price * el.qty;
          }, 0),
        };
      }
      default: {
        return state;
      }
    }
  }