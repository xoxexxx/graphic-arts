import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth";
import { userDataReducer } from "./reducers/data-user";
import { dropReducer, isEditReducer, profileReducer } from "./reducers/drop";
import { templateListReducer } from "./reducers/template";
import { editorReducer } from "./reducers/editor";
import { canvasMediaSettingsReducer } from './reducers/canvas';

const rootReducer = combineReducers({
  authReducer: authReducer,
  userDataReducer: userDataReducer,
  dropReducer: dropReducer,
  profileReducer: profileReducer,
  templateListReducer: templateListReducer,
  editorReducer: editorReducer,
  isEditReducer: isEditReducer,
  canvasMediaSettingsReducer: canvasMediaSettingsReducer
});

const state = {};

export const store = configureStore({
  reducer: rootReducer,
  state,
  devTools: true,
});
