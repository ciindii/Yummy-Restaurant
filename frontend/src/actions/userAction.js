import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    //send to headers a content type of application/json
    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //making the request
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      configuration
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    //save data (user object) from payload to localStorage :(
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  //remove from localStorage
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    //send to headers a content type of application/json
    const configuration = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //make post request
    const { data } = await axios.post("/api/users", {
      name,
      email,
      password,
      configuration,
    });
    //register user
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    //log user in
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
