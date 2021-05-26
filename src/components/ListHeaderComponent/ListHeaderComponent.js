import React from "react";
import "./ListHeaderComponent.css";

const ListHeaderComponent = ({ props }) => (
  <div className="ListHeaderComponent">
    <h5>
      <a href={props.homepage} target="_blank" rel="noopener noreferrer">
        <span className="header-drop-cap">{props.name[0]}</span>
        <span className="header-title">{props.name}</span>
      </a>
    </h5>
  </div>
);

ListHeaderComponent.propTypes = {};

ListHeaderComponent.defaultProps = {};

export default ListHeaderComponent;
