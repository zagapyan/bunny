import React, { Component }from 'react'
import SwipeableViews from 'react-swipeable-views'

// const HomeComponentMobile = (props)=> <h1>I am Mobile</h1>
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
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
};

const HomeComponentMobile = ({props})=> 
  (<SwipeableViews enableMouseEvents={true}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      slide n°1
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      slide n°2
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      slide n°3
    </div>
  </SwipeableViews>)

export default HomeComponentMobile;
