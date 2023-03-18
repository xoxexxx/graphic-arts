import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userDataReducer } from "./reducers/data-user";


import { canvasReducer } from './reducers/canvas';
 

import {dropReducer as drop} from './reducers/dropReducer'
import {authReducer as auth} from './reducers/authReducer'
import {checkReducer as check} from "./reducers/checkURLReducer";
import {templateReducer as template } from "./reducers/tempListReducer";
import { menuEditorReducer as menuEditor } from "./reducers/menuEditorReducer";
import { canvasReducer as canvas } from "./reducers/canvasReducer";
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
    template,
    menuEditor,
    canvas,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>