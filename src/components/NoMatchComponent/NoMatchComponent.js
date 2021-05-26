import React, { PureComponent } from "react";
import "./NoMatchComponent.css";

class NoMatchComponent extends PureComponent {
  render() {
    return <div className="NoMatchComponent">404 Not Found</div>;
  }
}

NoMatchComponent.propTypes = {};

NoMatchComponent.defaultProps = {};

export default NoMatchComponent;
