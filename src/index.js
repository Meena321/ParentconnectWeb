import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Rootreducer from "./reducers/rootReducer";
import App from "./App";
import newsRoom from "./features/NewsRoom";
import Holidays from "./features/Holidays";
import MyProfile from "./features/MyProfile";

const store = createStore(Rootreducer);

ReactDOM.render(
  <Provider store={store}>
    {/*<Router>
      <div>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/news">News room</Link>
          </li>
          <li>
            <Link to="/holidays">Holiday</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/news" component={newsRoom} />
          <Route path="/holidays" component={Holidays} />
        </Switch>
      </div>
    </Router> */}
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/news" component={newsRoom} />
      <Route path="/myprofile" component={MyProfile} />
      <Route path="/holidays" component={Holidays} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
