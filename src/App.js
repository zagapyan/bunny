import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Provider} from 'mobx-react'
import { createBrowserHistory } from 'history'
// import store from './store';
import 'bulma/css/bulma.css'
import './App.css'
import Routes from './components/Routes'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider>
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
