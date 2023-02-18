import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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
