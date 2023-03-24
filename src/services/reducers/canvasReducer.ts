import { createSlice } from "@reduxjs/toolkit";

export interface IItem {
  id: string;
  type: string;
  url: string;
  x: number;
  y: number;
  h: number;
  w: number;
  width: number;
  height: number;
  filters: {
    brightness: number;
    contrast: number;
    saturate: number;
    grayscale: number;
  };
}

interface IState {
  items: IItem[];
  w: number;
  h: number;
  currentID: number | null;
}

const initialState: IState = {
  items: [],
  w: 800,
  h: 500,
  currentID: null,
};

const canvasSlice = createSlice({
  name: "canvasSlice",
  initialState,
  reducers: {
    addCanvasItem: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    selectedItem: (state, action) => {
      return {
        ...state,
        currentID: action.payload,
      };
    },

    canvasWidth: (state, action) => {
      return {
        ...state,
        w: action.payload,
      };
    },
    canvasHeight: (state, action) => {
      return {
        ...state,
        h: action.payload,
      };
    },
    changeBrightness: (state, action) => {
      if (!state.currentID && state.currentID !== 0) return;
      return {
        ...state,
        items: [
          ...state.items.slice(0, state.currentID),
          {
            ...state.items[state.currentID],
            filters: {
              ...state.items[state.currentID].filters,
              brightness: Number(action.payload.toFixed(0)),
            },
          },
          ...state.items.slice(state.currentID + 1),
        ],
      };
    },
    changeContrast: (state, action) => {
        if (!state.currentID && state.currentID !== 0) return;
      return {
        ...state,
        items: [
          ...state.items.slice(0, state.currentID),
          {
            ...state.items[state.currentID],
            filters: {
              ...state.items[state.currentID].filters,
              contrast: Number(action.payload.toFixed(0)),
            },
          },
          ...state.items.slice(state.currentID + 1),
        ],
      };
    },
    changeSaturate: (state, action) => {
        if (!state.currentID && state.currentID !== 0) return;
      return {
        ...state,
        items: [
          ...state.items.slice(0, state.currentID),
          {
            ...state.items[state.currentID],
            filters: {
              ...state.items[state.currentID].filters,
              saturate: Number(action.payload.toFixed(0)),
            },
          },
          ...state.items.slice(state.currentID + 1),
        ],
      };
    },
    changeGrayscale: (state, action) => {
        if (!state.currentID && state.currentID !== 0) return;
      return {
        ...state,
        items: [
          ...state.items.slice(0, state.currentID),
          {
            ...state.items[state.currentID],
            filters: {
              ...state.items[state.currentID].filters,
              grayscale: Number(action.payload.toFixed(0)),
            },
          },
          ...state.items.slice(state.currentID + 1),
        ],
      };
    },
  },
});

export const {
  addCanvasItem,
  selectedItem,
  changeBrightness,
  changeContrast,
  changeSaturate,
  changeGrayscale,
} = canvasSlice.actions;
export const canvasReducer = canvasSlice.reducer;
