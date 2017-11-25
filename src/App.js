import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { store, history } from './store';
import Routes from './components/Routes'
import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Bunny 🐰 | Your Developer News Feed</title>
          </Helmet>
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;