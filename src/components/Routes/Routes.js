import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "../HomeComponent";
import NoMatchComponent from "../NoMatchComponent";
import "./Routes.css";

class Routes extends Component {
  render() {
    return (
      <main className="Routes">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route component={NoMatchComponent} />
        </Switch>
      </main>
    );
  }
}

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
