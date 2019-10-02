import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import { Auth, Home } from "./pages";

const App = ({ isAuth }) => {
  console.log(isAuth);
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={["/", "/login", "/register"]} component={Auth} />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
        />
      </Switch>
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
