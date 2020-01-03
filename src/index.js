import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Rootreducer from "./reducers/rootReducer";
import App from "./App";
import newsRoom from "./features/NewsRoom";
const store = createStore(Rootreducer);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/news" component={newsRoom} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
