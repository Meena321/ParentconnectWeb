import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "@material-ui/core";
import App from "../src/App";
import Holidays from "../src/features/Holidays";
import NewsRoom from "../src/features/NewsRoom";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/news" component={NewsRoom} />
        <Route path="/holidays" component={Holidays} />
      </Switch>
    </div>
  );
};

export default Routes;
