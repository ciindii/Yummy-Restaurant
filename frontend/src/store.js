import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { orderCreateReducer } from "./reducers/orderReducers";

//save in localStorage to load in inital state
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : //if not found return empty array
    [];

const deliveryAddressFromStorage = localStorage.getItem("deliveryAddress")
  ? JSON.parse(localStorage.getItem("deliveryAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    deliveryAddress: deliveryAddressFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

//const middleware = [thunk];

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
  },
  middleware: [thunk],
  preloadedState: initialState,
});

export default store;
