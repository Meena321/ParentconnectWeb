import { HOLIDAY_LIST, getHolidayListSuccess } from "./action";
import { createLogic } from "redux-logic";
import fetchAPI from "../../global/utils/fetch";
import { setLoading, setError } from "../../../global/redux/action";
import moment from "moment";

export const fetchHolidayData = createLogic({
  type: HOLIDAY_LIST,
  latest: true,
  async process({ action, getState }, dispatch, done) {
    try {
      dispatch(setLoading(true));
      const url = `http://parents.footprintseducation.in/api/wbsite/getHolidayList/?center_id=14&list=2019`;
      const body = {
        list: moment().year()
      };
      const fetchObject = {
        url,
        method: "POST",
        getState,
        dispatch,
        body,
        authenticatedAPI: false,
        done,
        action
      };
      fetchAPI(fetchObject).then(
        response => {
          console.log("Holiday List api response ", response);
          dispatch(getHolidayListSuccess(response));
          dispatch(setLoading(false));
          if (action.payload && action.payload.onSuccess) {
            action.payload.onSuccess();
            done();
          } else {
            console.log("off fetch blogs");
            done();
          }
        },
        error => {
          dispatch(setLoading(false));
          console.log("Error: ", error.message);
          done();
        }
      );
    } catch (error) {
      dispatch(setError("Some Error Occured", error.message));
      dispatch(setLoading(false));
      done();
    }
  }
});
export default fetchHolidayData;
