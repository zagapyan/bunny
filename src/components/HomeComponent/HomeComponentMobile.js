import React, { Component }from 'react'
import SwipeableViews from 'react-swipeable-views'
import ListComponent from '../ListComponent'
import style from './HomeComponentMobile.css'

const HomeComponentMobile = ({props})=>
  <SwipeableViews
    enableMouseEvents={true}
    className="swipable-views">
      {
        Object.keys(props.items)
          .map(key => 
            <ListComponent
              key={key}
              items={props.items[key]}
              name={key.replace('Items','')}
              fetchStatus={props.fetchStatus}/>)
      }
  </SwipeableViews>

export default HomeComponentMobile;
