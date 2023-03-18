import { createSlice } from "@reduxjs/toolkit";

type State = {
  dropMenu: boolean;
  dropProfileMenu: boolean;
  dropCanvasSettingSize: boolean;
};

const initialState = {
  dropMenu: false,
  dropProfileMenu: false,
  dropCanvasSettingSize: false,
};

const dropSlice = createSlice({
  name: "dropSlice",
  initialState,
  reducers: {
    dropMenu: (state: State, action) => {
      return {
        ...state,
        dropMenu: action.payload,
      };
    },
    dropProfileMenu: (state: State, action) => ({
      ...state,
      dropProfileMenu: action.payload,
    }),
    dropCanvasSettingSize: (state: State, action) => ({
      ...state,
      dropCanvasSettingSize: action.payload,
    }),
  },
});

export const { dropMenu, dropProfileMenu, dropCanvasSettingSize } =
  dropSlice.actions;
export const dropReducer = dropSlice.reducer;
