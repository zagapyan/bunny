import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeComponent from '../HomeComponent'
import ListComponent from '../ListComponent'
import NoMatchComponent from '../NoMatchComponent'

import logo from '../../logo.svg';

class Routes extends Component {
    constructor(props) {
        super(props)
    }
    null
    render() {
        return (
        <div className="Routes">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <nav>
              <ul>
                <li><Link to="/product-hunt">Product Hunt</Link></li>
                <li><Link to="/hacker-news">Hacker News</Link></li>
                <li><Link to="/designer-news">Designer News</Link></li>
                <li><Link to="/echojs">EchoJS</Link></li>
              </ul>
            </nav>
            <main>
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/product-hunt" component={ListComponent}/>
                <Route path="/hacker-news" component={ListComponent}/>
                <Route path="/designer-news" component={ListComponent}/>
                <Route path="/echojs" component={ListComponent}/>
                <Route component={NoMatchComponent} />
              </Switch>
            </main>
        </div>
        );
    }
}

Routes.propTypes = {}

Routes.defaultProps = {}

export default Routes
