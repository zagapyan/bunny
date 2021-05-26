import React from "react";
import "./FeedsListComponent.css";

const FeedsListComponent = ({ props }) => (
  <ul className="FeedsListComponent">
    {props.items[`${props.name}Items`]
      ? props.items[`${props.name}Items`].map((o, k) => (
          <li key={k}>
            <a href={o.link} target="_blank" rel="noopener noreferrer">
              <span className="item-count">{k + 1}</span>
              <span className="item-body">{o.title}</span>
            </a>
          </li>
        ))
      : false}
  </ul>
);

FeedsListComponent.propTypes = {};

FeedsListComponent.defaultProps = {};

export default FeedsListComponent;
