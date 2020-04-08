import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignUpPage from '../SignUpPage';
import FeedPage from '../FeedPage'

export const routes = {
  root: "/",
  login: "/login",
  signUp: "/signup",
  feed: "/feed",
  createVideo: "/postVideo"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={FeedPage} />
        <Route exact path={routes.signUp} component={SignUpPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
