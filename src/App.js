import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import {Provider} from 'react-redux'
import { createBrowserHistory } from 'history'
import { store, history } from './store';
import './App.css'
import Routes from './components/Routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            <Routes />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
