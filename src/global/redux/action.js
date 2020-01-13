export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_INFO = "SET_INFO";

export const LOG_ERROR = "LOG_ERROR";

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: { loading }
});

export const setError = (title, subtitle) => ({
  type: SET_ERROR,
  payload: { title, subtitle }
});

export const setInfo = (title, subtitle, ise = false, length = 3000) => ({
  type: SET_INFO,
  payload: {
    title,
    subtitle,
    ise,
    length
  }
});

export const logError = error => ({
  type: LOG_ERROR,
  payload: { error }
});
