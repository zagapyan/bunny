import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './ListComponent.css'

import * as domainActions from '../../actions/domainActions';
import * as clientActions from '../../actions/clientActions'

class ListComponent extends Component {
  constructor(props) {
      super(props)
  }
  null
  componentDidMount(){}
  componentWillReceiveProps(nextProps){}
  render() {
    let ListItems = this.props.fetchStatus[`${this.props.name}IsFetching`]
    ? <pre>Loading</pre>
    : <ul className="FeedsList">{
      this.props.items.map((o,k)=>
        <li key={k}><a href={o.link} target="_blank">
          <span className="item-count">{k+1}</span>
          <span className="item-body">{o.title}</span>
        </a></li>)
    }</ul>
    
    return (
      <div className={`ListComponent ${this.props.name.toLowerCase()}`}>
        <div className="list-header">
            <h5>
            <span className="header-drop-cap">{this.props.name[0]}</span>
            <span className="header-title">{this.props.name}</span>
          </h5>
        </div>
        {ListItems}
      </div>
    );
  }
}
export default  ListComponent;