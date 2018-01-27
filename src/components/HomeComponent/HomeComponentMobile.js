import React, { Component }from 'react'
import SwipeableViews from 'react-swipeable-views'
import ListComponent from '../ListComponent'
import style from './HomeComponentMobile.css'


// const HomeComponentMobile = (props)=> <h1>I am Mobile</h1>
const styles = {
  slide: {
    padding: 15,
    // minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
  slide4: {
    background: '#B0CDF8',
  },
};

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
