import React from "react";
import { Switch, Route } from "react-router-dom";
import Deals from "../Components/Deals/Deals";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          Products Page
        </Route>
        <Route path="/founder-club/benefits">
          <Deals />
        </Route>
        <Route path="/jobs" exact>
          Jobs Page
        </Route>
        <Route path="/discussions" exact>
          Discussions Page
        </Route>
        <Route path="/ship" exact>
          Ship Page
        </Route>
        <Route path="/mentors" exact>
          Mentors Page
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
};

export default Routes;
