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
    console.log('fetching',this.props.fetchStatus, this.props.name)
    console.log('items length',this.props.items.length)
    console.log(
      `${this.props.name}IsFetching`,
      this.props.fetchStatus[`${this.props.name}IsFetching`]
    );
    console.log(
      `${this.props.name}IsRejected`,
      this.props.fetchStatus[`${this.props.name}IsRejected`]
    );

    let ListItems = this.props.fetchStatus[`${this.props.name}IsFetching`]
    ? <pre>Loading</pre>
    : <ul className="FeedsList">{
      this.props.items.map((o,k)=>
        <li key={k}><a href={o.link} target="_blank">
          {o.title}
        </a></li>)
    }</ul>

    return (
      <div className="ListComponent column">
        <h5>{this.props.name}</h5>
        {ListItems}
      </div>
    );
  }
}

export default  ListComponent;