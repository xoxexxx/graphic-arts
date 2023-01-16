import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth";
import { userDataReducer } from "./reducers/data-user";
const rootReducer = combineReducers({
  authReducer: authReducer,
  userDataReducer: userDataReducer
});

const state = {};

export const store = configureStore({
  reducer: rootReducer,
  state,
  devTools: true,
});
