import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styles from './HeaderComponent.css'
import logo from '../../logo.svg';

const HeaderComponent = ({}) => (
  <section className="HeaderComponent hero">
    <header className="hero-body">
      <div className="container">
        <h1 className="title is-5 has-text-centered">BUNNY🐰</h1>          
      </div>
    </header>
  </section>
);

HeaderComponent.propTypes = {}

HeaderComponent.defaultProps = {}

export default HeaderComponent
