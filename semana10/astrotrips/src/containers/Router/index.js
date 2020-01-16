import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import TripList from '../ListTripsPage';
import TripDetails from "../TripDetailsPage";
import AdminPage from "../AdminPage";
import Form from "../Form"
import CreateTripPage from "../NewTripsForm"




export const routes = {
  root: "/",
  form: "/application-form",
  login: "/login",
  adminPage: "/adminPage",
  trip_create: "/trips/create",
  trip_list: "/trips/list",
  trip_details: "/trips/details" 
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path = {routes.root} component = {HomePage} exact/>
        <Route path = {routes.login} component = {LoginPage} exact/>
        <Route path = {routes.trip_list} component = {TripList} exact/>
        <Route path = {routes.form} component = {Form} exact/>
        <Route path = {routes.adminPage} component = {AdminPage} exact/>
        <Route path = {routes.trip_details} component = {TripDetails} exact/>
        <Route path = {routes.trip_create} component = {CreateTripPage} exact/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
