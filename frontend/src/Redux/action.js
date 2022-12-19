import {
   
    IS_ERROR,
    IS_LOADING,
    BAG_DATA,
    USER_REQ,
    GET_USER,
    USER_FAILURE,

  } from "./actionTypes";
  import axios from "axios";

  export const userReq = () => ({
    type: USER_REQ,
  });

  export const userSuccess = (payload) => ({
    type: GET_USER,
    payload,
  });

  export const userError = () => ({
    type: USER_FAILURE,
  });

  export const getmybag = (payload) => ({
    type: BAG_DATA,
    payload,
  });