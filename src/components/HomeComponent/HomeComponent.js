import React from 'react'
import PropTypes from 'prop-types'
import styles from './HomeComponent.css'
import HeaderComponent from '../HeaderComponent';
import ListComponent from '../ListComponent'

const HomeComponent = ({}) => (
  <div className="HomeComponent">
    <HeaderComponent />
    <div className="section columns swipeable">
      <ListComponent className="column"/>
      <ListComponent className="column"/>
      <ListComponent className="column"/>
      <ListComponent className="column"/>
    </div>
  </div>
);

HomeComponent.propTypes = {}

HomeComponent.defaultProps = {}

export default HomeComponent

// https://www.producthunt.com/feed?category=undefined
// https://news.ycombinator.com/rss
// https://www.designernews.co/?format=rss
// http://www.echojs.com/rss