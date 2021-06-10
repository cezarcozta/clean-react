import { Login } from "@/presentation/pages";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
