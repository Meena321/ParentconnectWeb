export const HOLIDAY_LIST = "HOLIDAY_LIST";
export const FETCH_HOLIDAY_SUCCESS = "FETCH_HOLIDAY_SUCCESS";

export const getHolidayList = payload => ({
  type: HOLIDAY_LIST,
  payload
});
export const getHolidayListSuccess = payload => ({
  type: FETCH_HOLIDAY_SUCCESS,
  payload
});
