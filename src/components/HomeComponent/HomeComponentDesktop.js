import React from "react";
import ListComponent from "../ListComponent";
import "./HomeComponentDesktop.css";

const HomeComponentDesktop = ({ props }) =>
  props.endpoints.map((o) => (
    <ListComponent
      key={o.name}
      name={o.name}
      url={o.url}
      homepage={o.homepage}
      fetchFeeds={props.fetchFeeds}
      fetchStatus={props.fetchStatus}
      items={props.items}
    />
  ));

export default HomeComponentDesktop;
