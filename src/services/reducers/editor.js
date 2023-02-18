const initialState = {
  templates: false,
  media: false,
  text: false,
  figure: false,
  current: null,
  currentMenu: null,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HIDDEN": {
        return {
            ...state,
            templates: false,
            media: false,
            text: false,
            figure: false,
            currentMenu: null
        }
    }
    case "TEMPLATES": {
      return {
        ...state,
        templates: true,
        media: false,
        text: false,
        figure: false,
        currentMenu: "TEMPLATES",
        current: "TEMPLATES",
      };
    }
    case "MEDIA": {
      return {
        ...state,
        templates: false,
        media: true,
        text: false,
        figure: false,
        currentMenu: "MEDIA",
        current: "MEDIA",
      };
    }
    case "TEXT": {
      return {
        ...state,
        templates: false,
        media: false,
        text: true,
        figure: false,
        currentMenu: "TEXT",
        current: "TEXT",
      };
    }
    case "FIGURE": {
      return {
        ...state,
        templates: false,
        media: false,
        text: false,
        figure: true,
        currentMenu: "FIGURE",
        current: "FIGURE",
      };
    }
    default:
      return state;
  }
};
