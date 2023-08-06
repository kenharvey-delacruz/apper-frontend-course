import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" Component={Catalog} />
      <Route path="/:category/search/:keyword" Component={Catalog} />
      <Route path="/:category/search/:keyword" Component={Catalog} />
    </Switch>
  );
};

export default Routes;
