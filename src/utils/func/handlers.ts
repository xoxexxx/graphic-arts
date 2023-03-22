import {
  figure,
  hidden,
  media,
  templates,
  text,
} from "../../services/reducers/menuEditorReducer";
import {
  social,
  business,
  print,
  standart,
  marketing,
} from "../../services/reducers/tempListReducer";

export const handleTemplate = (dispatch, x) => {
  switch (x.name) {
    case "SOCIAL": {
      //@ts-ignore
      return dispatch(social());
    }
    case "BUSINESS": {
      //@ts-ignore
      return dispatch(business());
    }
    case "PRINT": {
      //@ts-ignore
      return dispatch(print());
    }
    case "STANDART": {
      //@ts-ignore
      return dispatch(standart());
    }
    case "MARKETING": {
      //@ts-ignore
      return dispatch(marketing());
    }
  }
};

export const handleMenuTemplate = (dispatch, x) => {
  switch (x) {
    case "TEMPLATES": {
      //@ts-ignore
      dispatch(hidden());
      //@ts-ignore
      return dispatch(templates());
    }
    case "MEDIA": {
      //@ts-ignore
      dispatch(hidden());
      //@ts-ignore
      return dispatch(media());
    }
    case "TEXT": {
      //@ts-ignore
      dispatch(hidden());
      //@ts-ignore
      return dispatch(text());
    }
    case "FIGURE": {
      //@ts-ignore
      dispatch(hidden());
      //@ts-ignore
      return dispatch(figure());
    }
    
  }
};
