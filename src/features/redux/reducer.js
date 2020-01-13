import { FETCH_HOLIDAY_SUCCESS } from "./action";

const demoReducer = (state = {}, action) => {
  return {
    ...state,
    holidayList: action.payload
  };
};

export default demoReducer;
