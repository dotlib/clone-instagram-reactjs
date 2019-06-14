import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Feed from "./pages/Feed";
import New from "./pages/New";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  );
}

export default Routes;
