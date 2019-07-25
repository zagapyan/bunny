import React, { Component }from 'react'
import SwipeableViews from 'react-swipeable-views'
import ListComponent from '../ListComponent'
import style from './HomeComponentMobile.css'

const HomeComponentMobile = ({props})=>
  <SwipeableViews
    enableMouseEvents={true}
    className="swipable-views">
      {props.endpoints.map(o=>
          <ListComponent
          key={o.name}
          name={o.name}
          url={o.url}
          homepage={o.homepage}
          fetchFeeds={props.fetchFeeds}
          fetchStatus={props.fetchStatus}
          items={props.items}/>)}
  </SwipeableViews>

export default HomeComponentMobile;
