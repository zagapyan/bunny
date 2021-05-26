import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = ({}) => (
  <section className="HeaderComponent hero">
    <div className="hero-body">
      <div className="container level">
        <h1 className="title is-5 has-text-centered level-item">
          BUNNY
          <span role="img" aria-labelledby="bunny">
            🐰
          </span>
        </h1>
      </div>
    </div>
  </section>
);

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
