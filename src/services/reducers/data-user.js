const initialState = {
  isLoading: false,
  hasError: false,
  userData: null,
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA_REQUEST": {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        userData: initialState.userData,
      };
    }
    case "FETCH_USER_DATA_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        userData: action.payload,
      };
    }
    case "FETCH_USER_DATA_ERROR": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        userData: initialState.userData,
      };
    }
    default:
      return state;
  }
};
