import React from 'react'
import PropTypes from 'prop-types'
import styles from './HeaderComponent.css'

const HeaderComponent = ({}) => (
  <section className="HeaderComponent hero">
    <div className="hero-body">
      <div className="container level">
        <h1 className="title is-5 has-text-centered level-item">BUNNY<span>🐰</span></h1>
      </div>
    </div>
  </section>
);

HeaderComponent.propTypes = {}

HeaderComponent.defaultProps = {}

export default HeaderComponent
