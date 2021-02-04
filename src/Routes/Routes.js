import React from "react";
import { Switch, Route } from "react-router-dom";
import Deals from "../Components/Deals/Deals";
import Product from "../Components/Product/Product";
import Mentors from "../Components/Mentors/Mentors";
import Ask from "../Components/Ask/Ask";
import { Discussions } from "../Components/Discussions/Discussions";
import AskPage from "../Components/Ask/AskPage";
import ProductModal from "../Components/Product/ProductModal";
// import {Jobs} from "../Components/Jobs/Jobs"
import MyJobs from "../Components/MyJobs/MyJobs";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Product></Product>
        </Route>
        <Route path="/product/:id">
          <ProductModal></ProductModal>
        </Route>
        <Route path="/founder-club/benefits">
          <Deals />
        </Route>
        <Route path="/jobs" exact>
          {/* <Jobs/> */}
          <MyJobs />
        </Route>
        <Route path="/discussions" exact>
          <Discussions />
        </Route>
        <Route path="/ask" exact>
          <Ask />
        </Route>
        <Route path="/ask/:id" exact>
          <AskPage />
        </Route>
        <Route path="/mentors" exact>
          <Mentors />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
};

export default Routes;
