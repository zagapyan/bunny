import React, { Component } from 'react'
import { Router, Route, Switch, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { store, history } from './store'
import { screenResize, activateSwipervateSwiper } from './actions/clientActions'
import Routes from './components/Routes'
import 'normalize-css';
import 'typeface-montserrat'
import './App.css'

// event listener for window resize
window.addEventListener('resize', () => {
  // ensure that the screen size is measured whenever screen is resized
  store.dispatch(screenResize(window.innerWidth));
});

class App extends Component {
  componentDidMount(){
    // on mount ensure that the screen size is measured
    store.dispatch(screenResize(window.innerWidth));
  }
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