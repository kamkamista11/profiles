import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { ComponentWrapper } from "../views/ComponentWrapper";
import { Home } from "../views/home/Home";
import { User } from "../views/User/User";
import { New } from "../views/User/New";

const routeList = [
  { path: "/home", component: Home },
  { path: "/user", component: User },
  { path: "/new", component: New },
  { path: "/", component: Home },
];

export const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        {routeList.map((route, key) => (
          <ComponentWrapper key={key} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
