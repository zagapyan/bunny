import React from 'react'
import PropTypes from 'prop-types'
import styles from './HomeComponent.css'
import HeaderComponent from '../HeaderComponent';
import ListComponent from '../ListComponent'

const endpoints = {
  producthunt:{
    url: 'https://www.producthunt.com/feed?category=undefined',
    name: 'Product Hunt'
  },
  hackernews:{
    url: 'https://news.ycombinator.com/rss',
    name: 'Hacker News'
  },
  designernews:{
    url: 'https://www.designernews.co/?format=rss',
    name: 'Designer News'
  },
  echosjs:{
    url: 'http://www.echojs.com/rss',
    name: 'EchoJS'
  }
}

const HomeComponent = ({}) => (
  <div className="HomeComponent">
    <HeaderComponent />
    <div className="list-container">
      <ListComponent
        endpoint={endpoints.producthunt.url}
        name={endpoints.producthunt.name}
        />
      <ListComponent
        endpoint={endpoints.hackernews.url}
        name={endpoints.hackernews.name}
        />
      <ListComponent
        endpoint={endpoints.designernews.url}
        name={endpoints.designernews.name}
        />
      <ListComponent
        endpoint={endpoints.echosjs.url}
        name={endpoints.echosjs.name}
        />
    </div>
  </div>
);

export default HomeComponent;
