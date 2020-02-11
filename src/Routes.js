import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Test from "./Test";
function Routes() {
  return (
    <>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
