import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";




export const routes = {
  root: "/",
  form: "/application-form",
  login: "/login",
  trips_create: "/trips/create",
  trips_list: "/trips/list",
  trips_details: "/trips/details" 
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path = {routes.root} component = {HomePage} />
        <Route path = {routes.login} component = {LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
