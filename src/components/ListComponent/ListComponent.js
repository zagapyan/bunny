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
  componentDidMount(){
    // this.props.fetchFeeds(this.props.endpoint, this.props.name);
  }
  componentWillReceiveProps(nextProps){}
  render() {
    let ListItems = this.props.items 
      ? <ul className="FeedsList">{
        this.props.items.map((o,k)=>
          <li key={k}><a href={o.link} target="_blank">
            {o.title}
          </a></li>)
      }</ul>
      : <pre>Loading</pre>

    return (
      <div className="ListComponent column">
        <h5>{this.props.name}</h5>
        {ListItems}
      </div>
    );
  }
}

export default  ListComponent;