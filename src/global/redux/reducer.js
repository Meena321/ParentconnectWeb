import { SET_LOADING, SET_ERROR, SET_INFO } from "./action";

const initialState = {
  loading: false,
  error: {},
  info: {}
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading
      };

    case SET_ERROR:
      return {
        ...state,
        error: { ...action.payload }
      };
    case SET_INFO:
      return {
        ...state,
        info: { ...action.payload }
      };

    default:
      return state;
  }
};

export default jobReducer;
