import { setLoading, setError, LOG_ERROR, setInfo } from "../redux/action";

const fetchAPI = ({
  url,
  method,
  body,
  dispatch,
  done,
  loading = setLoading,
  errorReportType = "toast",

  queryParams,
  action,
  returnText = false
}) =>
  new Promise((resolve, reject) => {
    let formBody = [];
    if (body) {
      for (const property in body) {
        const key = property;
        const value = body[property];
        if (Array.isArray(value)) {
          console.log("the value " + value + " of key  " + key + "is Array");
          value.forEach(item => {
            formBody.push(`${key}=${item}`);
          });
        } else {
          formBody.push(`${key}=${value}`);
        }
      }
      formBody = formBody.join("&");
    }
    const queryString = queryParams
      ? Object.keys(queryParams)
          .map(key => key + "=" + queryParams[key])
          .join("&")
      : undefined;
    console.log(
      "the query param is ",
      queryParams,
      "the url query is ",
      queryString
    );
    dispatch(loading(true));
    fetch(url, {
      method,
      body: body ? formBody : undefined,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(async response => {
        console.log(`response of is${response.ok}`, response.status);
        if (response.ok) {
          if (response.status === 200) {
            if (!returnText) {
              return response.json();
            }
            return response.text();
          }
          return response;
        }
        if (response.status === 401) {
          try {
          } catch (error) {
            console.log("the error is ", error.message);
            done();
          }
        } else {
          const errorMessage = `Server Error When ${action.type.toLowerCase()} : ${moment
            .utc()
            .format()}`;
          dispatch(setInfo("", errorMessage, true, 5000));
          reject(errorMessage);
          dispatch(loading(false));
          //done();
        }
      })
      .then(response => {
        if (response) {
          dispatch(loading(false));
          resolve(response);
          if (response.status === "ok") {
            resolve(response);
          } else if (response.status === "error") {
            if (errorReportType === "Alert") {
              alert("Failed", response.error);
            } else if (errorReportType !== "none") {
              console.log("errorReportType", errorReportType);
              dispatch(setInfo("Failed", response.error));
            }
          }
          // done();
        } else {
          reject("The request was successfull but API didnt gave any response");
          dispatch(loading(false));
          done();
        }
      })
      .catch(error => {
        reject(`An error has occured: ${error.message}`);
        dispatch(setError("Some Error Occured", error.message));
        dispatch(loading(false));
      });
  });

export default fetchAPI;
