import React from "react";
import { ScaleLoader } from "react-spinners";
import "./LoadingListComponent.css";

const LoadingListComponent = () => (
  <ul className="LoadingListComponent loading">
    <li>
      <ScaleLoader color="#545454" />
    </li>
  </ul>
);

LoadingListComponent.propTypes = {};

LoadingListComponent.defaultProps = {};

export default LoadingListComponent;
