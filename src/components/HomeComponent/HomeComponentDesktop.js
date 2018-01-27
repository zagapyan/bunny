import React, { Component }from 'react'
import ListComponent from '../ListComponent'

const HomeComponentDesktop = ({props})=>
  Object.keys(props.items)
  .map(key => 
    <ListComponent
      key={key}
      items={props.items[key]}
      name={key.replace('Items','')}
      fetchStatus={props.fetchStatus}/>)

  export default HomeComponentDesktop;