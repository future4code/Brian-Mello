import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import SignupPage from '../SignupPage';
import LoginPage from "../LoginPage";
import CreateVideoPage from "../CreateVideoPage";
import ProfilePage from "../ProfilePage";
import VideoDetailPage from "../VideoDetailPage";
import UpdatePasswordPage from "../UpdatePassword";
import UpdateVideoPage from "../UpdateVideo";

export const routes = {
  home: "/",
  signup: "/signup",
  login: "/login",
  createVideo: "/createVideo",
  profile: "/profile",
  videoDetail: "/video/:videoId",
  updatePassword: "/profile/updatePassword",
  updateVideo: "/video/:videoId/updateVideo"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.signup} component={SignupPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.createVideo} component={CreateVideoPage} />
        <Route exact path={routes.profile} component={ProfilePage} />
        <Route exact path={routes.videoDetail} component={VideoDetailPage} />
        <Route exact path={routes.updatePassword} component={UpdatePasswordPage} />
        <Route exact path={routes.updateVideo} component={UpdateVideoPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
