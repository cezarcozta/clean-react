import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../../../presentation/pages";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
