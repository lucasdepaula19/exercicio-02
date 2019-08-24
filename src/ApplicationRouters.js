import React from "react";
import { Route } from "react-router-dom";
import { InitialPage, ListUsers, User } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/users/" component={ListUsers} />
    <Route path="/user/:name" component={User} />
  </>
);