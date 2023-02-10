import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth";
import { userDataReducer } from "./reducers/data-user";
import { dropReducer, profileReducer } from "./reducers/drop";
const rootReducer = combineReducers({
  authReducer: authReducer,
  userDataReducer: userDataReducer,
  dropReducer: dropReducer,
  profileReducer: profileReducer
});

const state = {};

export const store = configureStore({
  reducer: rootReducer,
  state,
  devTools: true,
});
