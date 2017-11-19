import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomeComponent from '../HomeComponent'
import ListComponent from '../ListComponent'
import NoMatchComponent from '../NoMatchComponent'


class Routes extends Component {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
        <main className="Routes section">
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
            <Route component={NoMatchComponent} />          
          </Switch>
        </main>
        );
    }
}

Routes.propTypes = {}

Routes.defaultProps = {}

export default Routes
