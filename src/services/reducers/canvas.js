const initialState = {
  items: [],
  w: 500,
  h: 300,
  currentID: 0,
};
export const canvasReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case "CANVAS_WIDTH": {
      return {
        ...state,
        w: action.payload,
      };
    }
    case "CANVAS_HEIGHT": {
      return {
        ...state,
        h: action.payload,
      };
    }
    case "ITEM_BRIGHTNESS": {
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
    }
    case "ITEM_CONTRAST": {
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
    }
    case "ITEM_SATURATE": {
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
    }
    case "ITEM_GRAYSCALE": {
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
    }
    default:
      return state;
  }
};
