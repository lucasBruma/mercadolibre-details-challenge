import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import DetailsScreen from "../product/screens/Details";

// import HomeScreen from "./screens/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      {/* <Route component={HomeScreen} path="/" /> */}
      <Route exact component={DetailsScreen} path="/" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
