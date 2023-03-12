import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userDataReducer } from "./reducers/data-user";

import { editorReducer } from "./reducers/editor";
import { canvasReducer } from './reducers/canvas';

import {dropReducer as drop} from './reducers/dropReducer'
import {authReducer as auth} from './reducers/authReducer'
import {checkReducer as check} from "./reducers/checkURLReducer";
import {templateReducer as template } from "./reducers/tempListReducer";
// const rootReducer = combineReducers({
//   authReducer: authReducer,
//   userDataReducer: userDataReducer,
//   profileReducer: profileReducer,
//   editorReducer: editorReducer,
//   isEditReducer: isEditReducer,
//   canvasReducer: canvasReducer
// });

// const state = {};

export const store = configureStore({
  reducer: {
    drop,
    auth,
    check,
    //@ts-ignore
    template
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>