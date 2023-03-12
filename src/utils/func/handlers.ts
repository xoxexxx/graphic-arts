import {social, business, print, standart, marketing} from '../../services/reducers/tempListReducer';

export const handleTemplate = (dispatch, x) => {
    switch (x.name) {
      case "SOCIAL": {
        //@ts-ignore
      return dispatch(social())
      }
      case "BUSINESS": {
        //@ts-ignore
      return  dispatch(business())
      }
      case "PRINT": {
        //@ts-ignore
      return  dispatch(print())
      }
      case "STANDART": {
        //@ts-ignore
      return  dispatch(standart())
      }
      case "MARKETING": {
        //@ts-ignore
      return  dispatch(marketing())
      }
      
    }
  }